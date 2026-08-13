from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_FILE = OUTPUT_DIR / "Khun-Kyaw-Hla-CV-with-Photo.pdf"
PHOTO_FILE = ROOT / "public" / "cv" / "profile.webp"
FONT_DIR = ROOT / "assets" / "fonts" / "manrope"

PAGE_WIDTH, PAGE_HEIGHT = A4
NAVY = colors.HexColor("#0A1D38")
NAVY_DARK = colors.HexColor("#081426")
BLUE = colors.HexColor("#356BFF")
CYAN = colors.HexColor("#2DD4BF")
ICE = colors.HexColor("#EEF3FF")
SOFT_BLUE = colors.HexColor("#E7EEFF")
LIGHT_BG = colors.HexColor("#F7F9FC")
CARD_BORDER = colors.HexColor("#DFE6EF")
SIDEBAR_MUTED = colors.HexColor("#9CB6D5")
SLATE = colors.HexColor("#52637A")
TEXT = colors.HexColor("#172033")
LINE = colors.HexColor("#D7E0EA")
WHITE = colors.white


def register_fonts():
    bundled_fonts = {
        "CVSans-Regular": FONT_DIR / "manrope-regular.ttf",
        "CVSans-Medium": FONT_DIR / "manrope-medium.ttf",
        "CVSans-Semibold": FONT_DIR / "manrope-semibold.ttf",
        "CVSans-Bold": FONT_DIR / "manrope-bold.ttf",
        "CVSans-ExtraBold": FONT_DIR / "manrope-extrabold.ttf",
    }
    if all(path.exists() for path in bundled_fonts.values()):
        for name, path in bundled_fonts.items():
            pdfmetrics.registerFont(TTFont(name, str(path)))
        return tuple(bundled_fonts)

    system_candidates = [
        (
            Path("C:/Windows/Fonts/segoeui.ttf"),
            Path("C:/Windows/Fonts/seguisb.ttf"),
            Path("C:/Windows/Fonts/segoeuib.ttf"),
        ),
        (
            Path("C:/Windows/Fonts/arial.ttf"),
            Path("C:/Windows/Fonts/arialbd.ttf"),
            Path("C:/Windows/Fonts/arialbd.ttf"),
        ),
        (
            Path("C:/Windows/Fonts/calibri.ttf"),
            Path("C:/Windows/Fonts/calibrib.ttf"),
            Path("C:/Windows/Fonts/calibrib.ttf"),
        ),
    ]
    for regular, semibold, bold in system_candidates:
        if regular.exists() and semibold.exists() and bold.exists():
            pdfmetrics.registerFont(TTFont("VisualSans", str(regular)))
            pdfmetrics.registerFont(TTFont("VisualSans-Medium", str(regular)))
            pdfmetrics.registerFont(TTFont("VisualSans-Semibold", str(semibold)))
            pdfmetrics.registerFont(TTFont("VisualSans-Bold", str(bold)))
            pdfmetrics.registerFont(TTFont("VisualSans-ExtraBold", str(bold)))
            return (
                "VisualSans",
                "VisualSans-Medium",
                "VisualSans-Semibold",
                "VisualSans-Bold",
                "VisualSans-ExtraBold",
            )
    return (
        "Helvetica",
        "Helvetica",
        "Helvetica-Bold",
        "Helvetica-Bold",
        "Helvetica-Bold",
    )


FONT, FONT_MEDIUM, FONT_SEMIBOLD, FONT_BOLD, FONT_EXTRABOLD = register_fonts()

body_style = ParagraphStyle(
    "VisualBody",
    fontName=FONT_MEDIUM,
    fontSize=8.2,
    leading=11.2,
    textColor=TEXT,
    alignment=TA_LEFT,
)
muted_style = ParagraphStyle(
    "VisualMuted",
    parent=body_style,
    textColor=SLATE,
)
bullet_style = ParagraphStyle(
    "VisualBullet",
    parent=muted_style,
    fontSize=8.0,
    leading=10.7,
    leftIndent=7,
    firstLineIndent=-5.5,
    spaceAfter=0.8,
)
sidebar_style = ParagraphStyle(
    "Sidebar",
    fontName=FONT_MEDIUM,
    fontSize=7.25,
    leading=9.8,
    textColor=colors.HexColor("#E7F0FC"),
)
sidebar_bold_style = ParagraphStyle(
    "SidebarBold",
    parent=sidebar_style,
    fontName=FONT_MEDIUM,
    fontSize=7.55,
)
project_title_style = ParagraphStyle(
    "ProjectTitle",
    parent=body_style,
    fontName=FONT_BOLD,
    fontSize=9.6,
    leading=12,
    textColor=NAVY_DARK,
)
project_meta_style = ParagraphStyle(
    "ProjectMeta",
    parent=body_style,
    fontName=FONT_SEMIBOLD,
    fontSize=7.05,
    leading=9,
    textColor=BLUE,
)

skill_label_style = ParagraphStyle(
    "SkillLabel",
    fontName=FONT_SEMIBOLD,
    fontSize=6.3,
    leading=7.8,
    textColor=NAVY,
)
skill_value_style = ParagraphStyle(
    "SkillValue",
    fontName=FONT_MEDIUM,
    fontSize=6.3,
    leading=8.2,
    textColor=SLATE,
)


def paragraph(c, text, x, y, width, style=body_style, space_after=2.2 * mm):
    element = Paragraph(text, style)
    _, height = element.wrap(width, PAGE_HEIGHT)
    element.drawOn(c, x, y - height)
    return y - height - space_after


def bullets(c, items, x, y, width, style=bullet_style):
    for item in items:
        y = paragraph(c, f"- {item}", x, y, width, style, 0.8 * mm)
    return y


def section(c, title, x, y, width):
    number = title[:2]
    label = title[3:]
    c.setFillColor(BLUE)
    c.roundRect(x, y - 5 * mm, 8 * mm, 5 * mm, 2.5 * mm, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont(FONT_BOLD, 6.6)
    c.drawCentredString(x + 4 * mm, y - 3.55 * mm, number)
    c.setFillColor(NAVY_DARK)
    c.setFont(FONT_BOLD, 10.6)
    title_x = x + 11 * mm
    c.drawString(title_x, y - 4 * mm, label)
    label_width = pdfmetrics.stringWidth(label, FONT_BOLD, 10.6)
    line_x = title_x + label_width + 4 * mm
    c.setStrokeColor(LINE)
    c.setLineWidth(0.7)
    if line_x < x + width:
        c.line(line_x, y - 2.8 * mm, x + width, y - 2.8 * mm)
    return y - 10 * mm


def sidebar_heading(c, title, x, y):
    c.setFillColor(CYAN)
    c.setFont(FONT_BOLD, 6.9)
    c.drawString(x, y, title.upper())
    c.setStrokeColor(colors.HexColor("#31557D"))
    c.setLineWidth(0.7)
    c.line(x, y - 2.1 * mm, x + 10 * mm, y - 2.1 * mm)
    return y - 5.8 * mm


def sidebar_pills(c, labels, x, y, width):
    gap = 2.4 * mm
    pill_w = (width - gap) / 2
    pill_h = 5.5 * mm
    row_gap = 2.3 * mm
    for index, label in enumerate(labels):
        row = index // 2
        column = index % 2
        pill_x = x + column * (pill_w + gap)
        pill_y = y - row * (pill_h + row_gap)
        c.setFillColor(colors.HexColor("#143459"))
        c.roundRect(pill_x, pill_y - pill_h, pill_w, pill_h, 2.75 * mm, fill=1, stroke=0)
        c.setFillColor(colors.HexColor("#DDEBFA"))
        c.setFont(FONT_MEDIUM, 6.05)
        c.drawCentredString(pill_x + pill_w / 2, pill_y - 3.7 * mm, label)
    rows = (len(labels) + 1) // 2
    return y - rows * (pill_h + row_gap) + row_gap


def summary_card(c, text, x, y, width):
    padding_x = 4 * mm
    padding_y = 3.2 * mm
    element = Paragraph(text, muted_style)
    _, height = element.wrap(width - 2 * padding_x, PAGE_HEIGHT)
    card_h = height + 2 * padding_y
    c.setFillColor(WHITE)
    c.setStrokeColor(CARD_BORDER)
    c.setLineWidth(0.45)
    c.roundRect(x, y - card_h, width, card_h, 3 * mm, fill=1, stroke=1)
    c.setFillColor(CYAN)
    c.roundRect(x + 1.5 * mm, y - card_h + 2.5 * mm, 1.2 * mm, card_h - 5 * mm, 0.6 * mm, fill=1, stroke=0)
    element.drawOn(c, x + padding_x, y - padding_y - height)
    return y - card_h - 4 * mm


def skill_card(c, label, value, x, y, width, height):
    c.setFillColor(WHITE)
    c.setStrokeColor(CARD_BORDER)
    c.setLineWidth(0.45)
    c.roundRect(x, y - height, width, height, 2.7 * mm, fill=1, stroke=1)
    c.setFillColor(SOFT_BLUE)
    c.roundRect(x + 2.2 * mm, y - 6.3 * mm, 4.2 * mm, 4.2 * mm, 2.1 * mm, fill=1, stroke=0)
    c.setFillColor(BLUE)
    c.circle(x + 4.3 * mm, y - 4.2 * mm, 0.8 * mm, fill=1, stroke=0)
    label_element = Paragraph(label.upper(), skill_label_style)
    _, label_h = label_element.wrap(width - 10 * mm, height)
    label_element.drawOn(c, x + 8 * mm, y - 2.6 * mm - label_h)
    value_element = Paragraph(value, skill_value_style)
    _, value_h = value_element.wrap(width - 5 * mm, height)
    value_element.drawOn(c, x + 2.5 * mm, y - 7.2 * mm - value_h)


def footer(c, page_number, left_x=70 * mm):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.55)
    c.line(left_x, 11 * mm, PAGE_WIDTH - 12 * mm, 11 * mm)
    c.setFillColor(SLATE)
    c.setFont(FONT_MEDIUM, 6.55)
    c.drawString(left_x, 7.5 * mm, "Khun Kyaw Hla | Full-Stack Web & Mobile Developer")
    c.drawRightString(PAGE_WIDTH - 12 * mm, 7.5 * mm, f"Page {page_number}")


def draw_first_page(c):
    sidebar_width = 61 * mm
    c.setFillColor(LIGHT_BG)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, 0, sidebar_width, PAGE_HEIGHT, fill=1, stroke=0)
    c.saveState()
    sidebar_clip = c.beginPath()
    sidebar_clip.rect(0, 0, sidebar_width, PAGE_HEIGHT)
    c.clipPath(sidebar_clip, stroke=0, fill=0)
    c.setFillColor(colors.HexColor("#102E55"))
    c.circle(58 * mm, 38 * mm, 29 * mm, fill=1, stroke=0)
    c.restoreState()

    photo_x = 8 * mm
    photo_y = PAGE_HEIGHT - 75 * mm
    photo_w = 45 * mm
    photo_h = 56.25 * mm
    c.setFillColor(BLUE)
    c.roundRect(photo_x - 2 * mm, photo_y - 2 * mm, photo_w + 4 * mm, photo_h + 4 * mm, 3.8 * mm, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.roundRect(photo_x - 1 * mm, photo_y - 1 * mm, photo_w + 2 * mm, photo_h + 2 * mm, 3 * mm, fill=1, stroke=0)
    c.drawImage(
        ImageReader(str(PHOTO_FILE)),
        photo_x,
        photo_y,
        photo_w,
        photo_h,
        preserveAspectRatio=True,
        anchor="c",
        mask="auto",
    )

    side_x = 8 * mm
    side_w = 45 * mm
    side_y = photo_y - 9 * mm

    side_y = sidebar_heading(c, "Contact", side_x, side_y)
    for label, value in [
        ("EMAIL", "bwarpay.bp8@gmail.com"),
        ("PHONE", "+95 9 677 066 891"),
        ("LOCATION", "Yangon, Myanmar"),
        (
            "PORTFOLIO",
            '<link href="https://khuntupi.tech/" color="#EAF3FF">khuntupi.tech</link>',
        ),
        ("GITHUB", "github.com/kyawhla-commit"),
    ]:
        c.setFillColor(SIDEBAR_MUTED)
        c.setFont(FONT_SEMIBOLD, 6.0)
        c.drawString(side_x, side_y, label)
        side_y -= 3.2 * mm
        side_y = paragraph(c, value, side_x, side_y + 1.2 * mm, side_w, sidebar_bold_style, 3.2 * mm)

    side_y = sidebar_heading(c, "Core stack", side_x, side_y - 3.5 * mm)
    side_y = sidebar_pills(
        c,
        ["React.js", "TypeScript", "Kotlin", "React Native", "NestJS", "Node.js", "Laravel", "PostgreSQL"],
        side_x,
        side_y,
        side_w,
    )

    side_y = sidebar_heading(c, "Languages", side_x, side_y - 5 * mm)
    paragraph(
        c,
        "<b>Pa-O</b> - Native<br/><b>Burmese</b> - Fluent<br/><b>English</b> - Intermediate",
        side_x,
        side_y,
        side_w,
        sidebar_style,
        0,
    )

    main_x = 72 * mm
    main_w = PAGE_WIDTH - main_x - 12 * mm
    y = PAGE_HEIGHT - 18 * mm

    badge_label = "FULL-STACK WEB & MOBILE DEVELOPER"
    badge_font = FONT_BOLD
    badge_font_size = 6.65
    badge_padding_x = 4 * mm
    badge_char_space = 0.08
    badge_h = 6.2 * mm
    badge_w = (
        pdfmetrics.stringWidth(badge_label, badge_font, badge_font_size)
        + 2 * badge_padding_x
        + (len(badge_label) - 1) * badge_char_space
    )
    c.setFillColor(SOFT_BLUE)
    c.roundRect(main_x, y - badge_h, badge_w, badge_h, badge_h / 2, fill=1, stroke=0)
    c.setFillColor(BLUE)
    badge_text = c.beginText()
    badge_text.setTextOrigin(main_x + badge_padding_x, y - 4.25 * mm)
    badge_text.setFont(badge_font, badge_font_size)
    badge_text.setCharSpace(badge_char_space)
    badge_text.textLine(badge_label)
    c.drawText(badge_text)
    y -= 15 * mm
    c.setFillColor(NAVY_DARK)
    c.setFont(FONT_EXTRABOLD, 27.2)
    c.drawString(main_x, y, "KHUN KYAW HLA")
    y -= 8.8 * mm
    c.setFillColor(SLATE)
    c.setFont(FONT_MEDIUM, 7.25)
    c.drawString(main_x, y, "React.js  |  TypeScript  |  React Native  |  NestJS  |  PostgreSQL")
    y -= 9.5 * mm

    y = section(c, "01 Professional Summary", main_x, y, main_w)
    y = summary_card(
        c,
        "Full-Stack Web and Mobile Developer with experience building and maintaining enterprise "
        "applications using React.js, TypeScript, Kotlin, React Native, NestJS, Node.js, Laravel, "
        "and PostgreSQL. Skilled in RESTful APIs, responsive interfaces, mobile applications, "
        "database-driven systems, dashboards, and reports. Experienced in debugging applications, "
        "improving performance, and collaborating with development teams using Git.",
        main_x,
        y,
        main_w,
    )

    y = section(c, "02 Professional Experience", main_x, y, main_w)
    date_label = "JANUARY 2026 - PRESENT"
    date_font_size = 6.85
    date_padding_x = 3.2 * mm
    date_w = pdfmetrics.stringWidth(date_label, FONT_SEMIBOLD, date_font_size) + 2 * date_padding_x
    date_h = 6 * mm
    c.setFillColor(SOFT_BLUE)
    c.roundRect(main_x, y - date_h, date_w, date_h, date_h / 2, fill=1, stroke=0)
    c.setFillColor(BLUE)
    c.setFont(FONT_SEMIBOLD, date_font_size)
    c.drawString(main_x + date_padding_x, y - 4.1 * mm, date_label)
    y -= 11.5 * mm
    c.setFillColor(NAVY_DARK)
    c.setFont(FONT_BOLD, 12.0)
    c.drawString(main_x, y, "Full-Stack Web Developer")
    y -= 6.2 * mm
    c.setFillColor(colors.HexColor("#41526A"))
    c.setFont(FONT_MEDIUM, 8.2)
    c.drawString(main_x, y, "M-Tech (Myo & Moe Technology Co., Ltd.)")
    y -= 7.2 * mm
    y = bullets(
        c,
        [
            "Develop and maintain enterprise web applications using React.js, TypeScript, NestJS, and Node.js.",
            "Build RESTful APIs and integrate PostgreSQL and MySQL databases using TypeORM.",
            "Implement CRUD operations, dashboards, reports, search, filtering, pagination, and validation.",
            "Resolve frontend, backend, API, and database issues while improving performance.",
            "Test endpoints with Postman and collaborate through Git and GitHub.",
        ],
        main_x,
        y,
        main_w,
    )
    y -= 2.5 * mm

    y = section(c, "03 Technical Skills", main_x, y, main_w)
    skills = [
        ("Frontend", "React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS"),
        ("Mobile", "Kotlin, React Native"),
        ("Backend", "NestJS, Node.js, Express.js, Laravel, PHP"),
        ("Data", "PostgreSQL, MySQL, TypeORM, Database Design"),
        ("App Distribution", "Google Play Console"),
        ("Deployment", "NSSM, Windows Services, On-Premises Deployment"),
        (
            "Cloud Hosting",
            "AWS (EC2), DigitalOcean Droplets, Cloudflare Pages, Vercel, GitHub Pages",
        ),
        ("Tools", "Git, GitHub, Postman, Visual Studio Code, Ubuntu Linux"),
        (
            "AI-Powered",
            "Development: AI-assisted coding, research, debugging, automation, and problem-solving",
        ),
        ("Delivery", "RESTful APIs, CRUD, Validation, Filtering, Pagination, Dashboards, Reporting"),
    ]
    card_gap = 3 * mm
    row_gap = 2.2 * mm
    card_w = (main_w - card_gap) / 2
    card_h = 15.2 * mm
    for index in range(0, len(skills), 2):
        left_label, left_value = skills[index]
        skill_card(c, left_label, left_value, main_x, y, card_w, card_h)
        if index + 1 < len(skills):
            right_label, right_value = skills[index + 1]
            skill_card(c, right_label, right_value, main_x + card_w + card_gap, y, card_w, card_h)
        y -= card_h + row_gap

    footer(c, 1)
    c.showPage()


def project_block(c, name, stack, description, items, x, y, width, live_url=None, live_label=None):
    padding_x = 4 * mm
    padding_y = 3.5 * mm
    content_x = x + padding_x
    content_w = width - 2 * padding_x
    elements = []

    title = Paragraph(name, project_title_style)
    _, title_h = title.wrap(content_w, PAGE_HEIGHT)
    elements.append((title, title_h, 0.8 * mm))

    meta = Paragraph(stack, project_meta_style)
    _, meta_h = meta.wrap(content_w, PAGE_HEIGHT)
    elements.append((meta, meta_h, 1.2 * mm))

    description_element = Paragraph(description, muted_style)
    _, description_h = description_element.wrap(content_w, PAGE_HEIGHT)
    elements.append((description_element, description_h, 1.1 * mm))

    for item in items:
        bullet_element = Paragraph(f"- {item}", bullet_style)
        _, bullet_h = bullet_element.wrap(content_w, PAGE_HEIGHT)
        elements.append((bullet_element, bullet_h, 0.65 * mm))

    if live_url:
        label = live_label or live_url
        live_element = Paragraph(
            f'<link href="{live_url}" color="#2563EB">Live app: {label}</link>',
            project_meta_style,
        )
        _, live_h = live_element.wrap(content_w, PAGE_HEIGHT)
        elements.append((live_element, live_h, 0))

    content_h = sum(height + space_after for _, height, space_after in elements)
    card_h = content_h + 2 * padding_y
    c.setFillColor(WHITE)
    c.setStrokeColor(CARD_BORDER)
    c.setLineWidth(0.45)
    c.roundRect(x, y - card_h, width, card_h, 3 * mm, fill=1, stroke=1)
    c.setFillColor(BLUE)
    c.roundRect(x + 1.2 * mm, y - card_h + 3 * mm, 1.2 * mm, card_h - 6 * mm, 0.6 * mm, fill=1, stroke=0)

    cursor_y = y - padding_y
    for element, height, space_after in elements:
        element.drawOn(c, content_x, cursor_y - height)
        cursor_y -= height + space_after
    return y - card_h - 3 * mm


def draw_second_page(c):
    c.setFillColor(LIGHT_BG)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, PAGE_HEIGHT - 30 * mm, PAGE_WIDTH, 30 * mm, fill=1, stroke=0)
    c.setFillColor(BLUE)
    c.rect(0, PAGE_HEIGHT - 30 * mm, 3 * mm, 30 * mm, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#143459"))
    c.roundRect(13 * mm, PAGE_HEIGHT - 13.8 * mm, 29 * mm, 6 * mm, 3 * mm, fill=1, stroke=0)
    c.setFillColor(CYAN)
    c.setFont(FONT_BOLD, 6.5)
    c.drawString(16 * mm, PAGE_HEIGHT - 11.9 * mm, "SELECTED WORK")
    c.setFillColor(WHITE)
    c.setFont(FONT_EXTRABOLD, 18.2)
    c.drawString(13 * mm, PAGE_HEIGHT - 23.5 * mm, "Enterprise & Mobile Projects")
    c.setFillColor(SIDEBAR_MUTED)
    c.setFont(FONT_SEMIBOLD, 6.8)
    c.drawRightString(PAGE_WIDTH - 13 * mm, PAGE_HEIGHT - 19.5 * mm, "KHUN KYAW HLA")

    x = 13 * mm
    width = PAGE_WIDTH - 26 * mm
    y = PAGE_HEIGHT - 37.5 * mm

    y = project_block(
        c,
        "Smart Car Parking Management System",
        "React.js | TypeScript | NestJS | PostgreSQL | AI Camera",
        "Enterprise platform for parking transactions, access passes, rates, users, lanes, reports, and connected devices.",
        [
            "Built transaction, dashboard, reporting, pass, and rate-management features.",
            "Integrated an AI-powered camera system for automatic vehicle license-plate detection and recognition.",
        ],
        x,
        y,
        width,
    )

    y = project_block(
        c,
        "Smart Factory Management System",
        "React.js | TypeScript | NestJS | PostgreSQL | Kiosk Hardware",
        "Manufacturing platform for production planning, machine monitoring, warehouses, inventory, and performance analysis.",
        [
            "Developed production planning, job and machine monitoring, and QR-code features.",
            "Contributed to warehouse, inventory, OEE dashboards, production reporting, and API integration.",
            "Integrated kiosk hardware with backend APIs for on-site workflows and real-time operational updates.",
        ],
        x,
        y,
        width,
    )

    y = project_block(
        c,
        "Blood Bank Management System",
        "React.js | TypeScript | NestJS | PostgreSQL",
        "Healthcare platform for donors, blood inventory, hospitals, blood requests, and operational records.",
        [
            "Developed donor, inventory, blood-request, and hospital workflows.",
            "Implemented RESTful APIs, CRUD operations, form validation, database integration, and troubleshooting.",
        ],
        x,
        y,
        width,
    )

    y = section(c, "04 Personal Projects", x, y, width)
    column_gap = 8 * mm
    column_width = (width - column_gap) / 2
    left_y = project_block(
        c,
        "YBS Way",
        "Kotlin | Android",
        "Native Android application for YBS bus-route search and public transportation information in Yangon.",
        [
            "Created reusable native Android UI components and screen navigation.",
            "Adapted the interface across Android screen sizes.",
        ],
        x,
        y,
        column_width,
        live_url="https://ybs-way-web.pages.dev/",
        live_label="ybs-way-web.pages.dev",
    )
    right_y = project_block(
        c,
        "Spendly",
        "React Native | TypeScript",
        "Personal finance application for organizing and monitoring income and expenses.",
        [
            "Implemented transaction CRUD, categories, and spending summaries.",
            "Built a clean interface with efficient state management.",
        ],
        x + column_width + column_gap,
        y,
        column_width,
    )
    y = min(left_y, right_y) - 0.5 * mm

    y = section(c, "05 Credentials", x, y, width)
    credentials_style = ParagraphStyle(
        "Credentials",
        parent=muted_style,
        fontSize=7.8,
        leading=10.2,
    )
    credential_text = (
        "<b>Certifications:</b> Professional Web Developer - Laravel and PHP; "
        "Professional Web Developer - React.js, Next.js and Express.js; "
        "Professional UI/UX Design - Fairway Technology.<br/>"
        "<b>Education:</b> Bachelor of Arts in Geography - Pinlon University.<br/>"
        "<b>Languages:</b> Pa-O - Native; Burmese - Fluent; English - Intermediate."
    )
    credential_element = Paragraph(credential_text, credentials_style)
    credential_padding = 4 * mm
    _, credential_h = credential_element.wrap(width - 2 * credential_padding, PAGE_HEIGHT)
    credential_card_h = credential_h + 2 * credential_padding
    c.setFillColor(WHITE)
    c.setStrokeColor(CARD_BORDER)
    c.setLineWidth(0.45)
    c.roundRect(x, y - credential_card_h, width, credential_card_h, 3 * mm, fill=1, stroke=1)
    c.setFillColor(CYAN)
    c.roundRect(x + 1.5 * mm, y - credential_card_h + 3 * mm, 1.2 * mm, credential_card_h - 6 * mm, 0.6 * mm, fill=1, stroke=0)
    credential_element.drawOn(c, x + credential_padding, y - credential_padding - credential_h)

    footer(c, 2, 13 * mm)
    c.showPage()


pdf = canvas.Canvas(
    str(OUTPUT_FILE),
    pagesize=A4,
    pageCompression=1,
)
pdf.setTitle("Khun Kyaw Hla - CV with Photo")
pdf.setAuthor("Khun Kyaw Hla")
pdf.setSubject("Designed professional CV with portrait")
draw_first_page(pdf)
draw_second_page(pdf)
pdf.save()
print(OUTPUT_FILE)
