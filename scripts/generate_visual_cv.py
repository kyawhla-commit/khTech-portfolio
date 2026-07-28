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

PAGE_WIDTH, PAGE_HEIGHT = A4
NAVY = colors.HexColor("#0B2344")
NAVY_DARK = colors.HexColor("#07172E")
BLUE = colors.HexColor("#2563EB")
CYAN = colors.HexColor("#22D3EE")
ICE = colors.HexColor("#EAF3FF")
SLATE = colors.HexColor("#475569")
TEXT = colors.HexColor("#0F172A")
LINE = colors.HexColor("#D5E1EE")
WHITE = colors.white


def register_fonts():
    candidates = [
        (
            Path("C:/Windows/Fonts/arial.ttf"),
            Path("C:/Windows/Fonts/arialbd.ttf"),
        ),
        (
            Path("C:/Windows/Fonts/calibri.ttf"),
            Path("C:/Windows/Fonts/calibrib.ttf"),
        ),
    ]
    for regular, bold in candidates:
        if regular.exists() and bold.exists():
            pdfmetrics.registerFont(TTFont("VisualSans", str(regular)))
            pdfmetrics.registerFont(TTFont("VisualSans-Bold", str(bold)))
            return "VisualSans", "VisualSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()

body_style = ParagraphStyle(
    "VisualBody",
    fontName=FONT,
    fontSize=8.7,
    leading=11.7,
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
    leftIndent=8,
    firstLineIndent=-6,
    spaceAfter=1.2,
)
sidebar_style = ParagraphStyle(
    "Sidebar",
    fontName=FONT,
    fontSize=7.7,
    leading=10.2,
    textColor=colors.HexColor("#EAF3FF"),
)
sidebar_bold_style = ParagraphStyle(
    "SidebarBold",
    parent=sidebar_style,
    fontName=FONT_BOLD,
    fontSize=8.1,
)
project_title_style = ParagraphStyle(
    "ProjectTitle",
    parent=body_style,
    fontName=FONT_BOLD,
    fontSize=10.2,
    leading=12.5,
    textColor=NAVY_DARK,
)
project_meta_style = ParagraphStyle(
    "ProjectMeta",
    parent=body_style,
    fontName=FONT_BOLD,
    fontSize=7.7,
    leading=9.5,
    textColor=BLUE,
)


def paragraph(c, text, x, y, width, style=body_style, space_after=2.2 * mm):
    element = Paragraph(text, style)
    _, height = element.wrap(width, PAGE_HEIGHT)
    element.drawOn(c, x, y - height)
    return y - height - space_after


def bullets(c, items, x, y, width, style=bullet_style):
    for item in items:
        y = paragraph(c, f"- {item}", x, y, width, style, 1.1 * mm)
    return y


def section(c, title, x, y, width):
    c.setFillColor(BLUE)
    c.roundRect(x, y - 4.5 * mm, 7 * mm, 4.5 * mm, 1.3 * mm, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont(FONT_BOLD, 7)
    c.drawCentredString(x + 3.5 * mm, y - 3.2 * mm, title[:2])
    c.setFillColor(NAVY_DARK)
    c.setFont(FONT_BOLD, 11.2)
    c.drawString(x + 10 * mm, y - 3.8 * mm, title[3:])
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(x, y - 7 * mm, x + width, y - 7 * mm)
    return y - 11 * mm


def sidebar_heading(c, title, x, y):
    c.setFillColor(CYAN)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, title.upper())
    c.setStrokeColor(colors.HexColor("#27486F"))
    c.line(x, y - 2.2 * mm, 52 * mm, y - 2.2 * mm)
    return y - 6 * mm


def footer(c, page_number):
    c.setStrokeColor(LINE)
    c.line(70 * mm, 11 * mm, PAGE_WIDTH - 12 * mm, 11 * mm)
    c.setFillColor(SLATE)
    c.setFont(FONT, 7)
    c.drawString(70 * mm, 7.5 * mm, "Khun Kyaw Hla | Full-Stack Web & Mobile Developer")
    c.drawRightString(PAGE_WIDTH - 12 * mm, 7.5 * mm, f"Page {page_number}")


def draw_first_page(c):
    sidebar_width = 61 * mm
    c.setFillColor(NAVY)
    c.rect(0, 0, sidebar_width, PAGE_HEIGHT, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#102E55"))
    c.circle(58 * mm, 38 * mm, 29 * mm, fill=1, stroke=0)

    photo_x = 8 * mm
    photo_y = PAGE_HEIGHT - 76 * mm
    photo_w = 45 * mm
    photo_h = 56.25 * mm
    c.setFillColor(WHITE)
    c.roundRect(photo_x - 1.5 * mm, photo_y - 1.5 * mm, photo_w + 3 * mm, photo_h + 3 * mm, 3 * mm, fill=1, stroke=0)
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
            '<link href="https://kyawhla-commit.github.io/khTech-portfolio/" '
            'color="#EAF3FF">kyawhla-commit.github.io/<br/>khTech-portfolio</link>',
        ),
        ("GITHUB", "github.com/kyawhla-commit"),
    ]:
        c.setFillColor(colors.HexColor("#8FB7E3"))
        c.setFont(FONT_BOLD, 6.5)
        c.drawString(side_x, side_y, label)
        side_y -= 3.2 * mm
        side_y = paragraph(c, value, side_x, side_y + 1.2 * mm, side_w, sidebar_bold_style, 2.8 * mm)

    side_y = sidebar_heading(c, "Core stack", side_x, side_y - 1 * mm)
    side_y = paragraph(
        c,
        "React.js<br/>TypeScript<br/>React Native<br/>NestJS<br/>Node.js<br/>Laravel<br/>PostgreSQL",
        side_x,
        side_y,
        side_w,
        sidebar_bold_style,
        4 * mm,
    )

    side_y = sidebar_heading(c, "Languages", side_x, side_y)
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
    y = PAGE_HEIGHT - 22 * mm

    c.setFillColor(BLUE)
    c.setFont(FONT_BOLD, 8.2)
    c.drawString(main_x, y, "Full-Stack Web & Mobile Developer")
    y -= 13 * mm
    c.setFillColor(NAVY_DARK)
    c.setFont(FONT_BOLD, 28)
    c.drawString(main_x, y, "KHUN KYAW HLA")
    y -= 7 * mm
    c.setFillColor(SLATE)
    c.setFont(FONT, 7.7)
    c.drawString(main_x, y, "React.js  |  TypeScript  |  React Native  |  NestJS  |  PostgreSQL")
    y -= 9 * mm

    y = section(c, "01 Professional Summary", main_x, y, main_w)
    y = paragraph(
        c,
        "Full-Stack Web and Mobile Developer with experience building and maintaining enterprise "
        "applications using React.js, TypeScript, React Native, NestJS, Node.js, Laravel, and "
        "PostgreSQL. Skilled in RESTful APIs, responsive interfaces, mobile applications, "
        "database-driven systems, dashboards, and reports. Experienced in debugging applications, "
        "improving performance, and collaborating with development teams using Git.",
        main_x,
        y,
        main_w,
        muted_style,
        5 * mm,
    )

    y = section(c, "02 Professional Experience", main_x, y, main_w)
    c.setFillColor(BLUE)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(main_x, y, "JANUARY 2026 - PRESENT")
    y -= 5 * mm
    c.setFillColor(NAVY_DARK)
    c.setFont(FONT_BOLD, 12)
    c.drawString(main_x, y, "Full-Stack Web Developer")
    y -= 4.8 * mm
    c.setFillColor(SLATE)
    c.setFont(FONT_BOLD, 8.2)
    c.drawString(main_x, y, "M-Tech (Myo & Moe Technology Co., Ltd.)")
    y -= 6 * mm
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
    y -= 3 * mm

    y = section(c, "03 Technical Skills", main_x, y, main_w)
    skills = [
        ("Frontend", "React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS"),
        ("Mobile", "React Native"),
        ("Backend", "NestJS, Node.js, Express.js, Laravel, PHP"),
        ("Data", "PostgreSQL, MySQL, TypeORM, Database Design"),
        ("App Distribution", "Google Play Console"),
        ("Deployment", "NSSM, Windows Services, On-Premises Deployment"),
        ("Cloud Hosting", "Cloudflare Pages, Vercel, GitHub Pages"),
        ("Tools", "Git, GitHub, Postman, Visual Studio Code, Ubuntu Linux"),
        ("Delivery", "RESTful APIs, CRUD, Validation, Filtering, Pagination, Dashboards, Reporting"),
    ]
    for label, value in skills:
        c.setFillColor(ICE)
        c.roundRect(main_x, y - 7 * mm, main_w, 6.2 * mm, 1.5 * mm, fill=1, stroke=0)
        c.setFillColor(NAVY)
        c.setFont(FONT_BOLD, 6.8)
        c.drawString(main_x + 2.3 * mm, y - 4.8 * mm, label.upper())
        c.setFillColor(SLATE)
        c.setFont(FONT, 7.3)
        c.drawString(main_x + 28 * mm, y - 4.8 * mm, value)
        y -= 7.4 * mm

    footer(c, 1)
    c.showPage()


def project_block(c, name, stack, description, items, x, y, width, live_url=None, live_label=None):
    c.setFillColor(NAVY_DARK)
    title = Paragraph(name, project_title_style)
    _, title_h = title.wrap(width, PAGE_HEIGHT)
    title.drawOn(c, x, y - title_h)
    y -= title_h + 1 * mm
    y = paragraph(c, stack, x, y, width, project_meta_style, 1.4 * mm)
    y = paragraph(c, description, x, y, width, muted_style, 1.5 * mm)
    y = bullets(c, items, x, y, width)
    if live_url:
        label = live_label or live_url
        y = paragraph(
            c,
            f'<link href="{live_url}" color="#2563EB">Live app: {label}</link>',
            x,
            y,
            width,
            project_meta_style,
            1.2 * mm,
        )
    return y - 3 * mm


def draw_second_page(c):
    c.setFillColor(NAVY)
    c.rect(0, PAGE_HEIGHT - 27 * mm, PAGE_WIDTH, 27 * mm, fill=1, stroke=0)
    c.setFillColor(CYAN)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(13 * mm, PAGE_HEIGHT - 12 * mm, "SELECTED WORK")
    c.setFillColor(WHITE)
    c.setFont(FONT_BOLD, 20)
    c.drawString(13 * mm, PAGE_HEIGHT - 21 * mm, "Enterprise & Mobile Projects")
    c.setFillColor(colors.HexColor("#B9D7F8"))
    c.setFont(FONT, 7.5)
    c.drawRightString(PAGE_WIDTH - 13 * mm, PAGE_HEIGHT - 18 * mm, "KHUN KYAW HLA")

    x = 13 * mm
    width = PAGE_WIDTH - 26 * mm
    y = PAGE_HEIGHT - 37 * mm

    y = project_block(
        c,
        "Smart Car Parking Management System",
        "React.js | TypeScript | NestJS | PostgreSQL",
        "Enterprise platform for parking transactions, access passes, rates, users, lanes, reports, and connected devices.",
        [
            "Built transaction, dashboard, reporting, pass, and rate-management features.",
            "Contributed to users, roles, lanes, devices, RESTful APIs, filtering, pagination, and validation.",
        ],
        x,
        y,
        width,
    )

    y = project_block(
        c,
        "Smart Factory Management System",
        "React.js | TypeScript | NestJS | PostgreSQL",
        "Manufacturing platform for production planning, machine monitoring, warehouses, inventory, and performance analysis.",
        [
            "Developed production planning, job and machine monitoring, and QR-code features.",
            "Contributed to warehouse, inventory, OEE dashboards, production reporting, and API integration.",
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
        "React Native | TypeScript",
        "Mobile application for YBS bus-route search and public transportation information in Yangon.",
        [
            "Created reusable mobile UI components and screen navigation.",
            "Applied responsive design across mobile screen sizes.",
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
    y = min(left_y, right_y) - 1 * mm

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
    paragraph(c, credential_text, x, y, width, credentials_style, 0)

    footer(c, 2)
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
