from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_FILE = OUTPUT_DIR / "Khun-Kyaw-Hla-CV.pdf"

PAGE_WIDTH, PAGE_HEIGHT = A4
NAVY = colors.HexColor("#0F172A")
BLUE = colors.HexColor("#2563EB")
SLATE = colors.HexColor("#475569")
LIGHT_BLUE = colors.HexColor("#EFF6FF")
LIGHT_LINE = colors.HexColor("#CBD5E1")


def register_fonts():
    font_paths = [
        (
            Path("C:/Windows/Fonts/arial.ttf"),
            Path("C:/Windows/Fonts/arialbd.ttf"),
        ),
        (
            Path("C:/Windows/Fonts/calibri.ttf"),
            Path("C:/Windows/Fonts/calibrib.ttf"),
        ),
    ]
    for regular, bold in font_paths:
        if regular.exists() and bold.exists():
            pdfmetrics.registerFont(TTFont("ResumeSans", str(regular)))
            pdfmetrics.registerFont(TTFont("ResumeSans-Bold", str(bold)))
            return "ResumeSans", "ResumeSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()
styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Title"],
    fontName=FONT_BOLD,
    fontSize=25.5,
    leading=29,
    textColor=NAVY,
    alignment=TA_CENTER,
    spaceAfter=3,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName=FONT_BOLD,
    fontSize=10.5,
    leading=13.5,
    textColor=BLUE,
    alignment=TA_CENTER,
    spaceAfter=5,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=8.4,
    leading=11,
    textColor=SLATE,
    alignment=TA_CENTER,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Heading2"],
    fontName=FONT_BOLD,
    fontSize=11,
    leading=13.5,
    textColor=BLUE,
    spaceBefore=5,
    spaceAfter=3,
    borderWidth=0,
    borderPadding=0,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontName=FONT,
    fontSize=9,
    leading=12.2,
    textColor=NAVY,
    alignment=TA_LEFT,
    spaceAfter=3,
)
small_style = ParagraphStyle(
    "Small",
    parent=body_style,
    fontSize=8.4,
    leading=11.3,
    textColor=SLATE,
)
job_title_style = ParagraphStyle(
    "JobTitle",
    parent=body_style,
    fontName=FONT_BOLD,
    fontSize=9.7,
    leading=12.4,
    textColor=NAVY,
    spaceAfter=1,
)
meta_style = ParagraphStyle(
    "Meta",
    parent=body_style,
    fontName=FONT_BOLD,
    fontSize=8.3,
    leading=11,
    textColor=BLUE,
    spaceAfter=2,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=9,
    firstLineIndent=-7,
    bulletIndent=0,
    spaceAfter=1,
)
project_title_style = ParagraphStyle(
    "ProjectTitle",
    parent=body_style,
    fontName=FONT_BOLD,
    fontSize=9.3,
    leading=11.8,
    textColor=NAVY,
    spaceAfter=1,
)


def section(title):
    return [
        Paragraph(title.upper(), section_style),
        Table(
            [[""]],
            colWidths=[PAGE_WIDTH - 28 * mm],
            rowHeights=[0.7],
            style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), LIGHT_LINE)]),
        ),
        Spacer(1, 1.5),
    ]


def bullet(text):
    return Paragraph(f"- {text}", bullet_style)


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LIGHT_LINE)
    canvas.setLineWidth(0.5)
    canvas.line(14 * mm, 12 * mm, PAGE_WIDTH - 14 * mm, 12 * mm)
    canvas.setFont(FONT, 7.5)
    canvas.setFillColor(SLATE)
    canvas.drawString(14 * mm, 8 * mm, "Khun Kyaw Hla | Full-Stack Web & Mobile Developer")
    canvas.drawRightString(PAGE_WIDTH - 14 * mm, 8 * mm, f"Page {doc.page}")
    canvas.restoreState()


story = [
    Paragraph("KHUN KYAW HLA", name_style),
    Paragraph("Full-Stack Web & Mobile Developer", role_style),
    Paragraph(
        '<link href="mailto:bwarpay.bp8@gmail.com" color="#475569">bwarpay.bp8@gmail.com</link>'
        " | +95 9 677 066 891 | Yangon, Myanmar",
        contact_style,
    ),
    Paragraph(
        '<link href="https://khuntupi.tech" color="#2563EB">'
        "khuntupi.tech</link> | "
        '<link href="https://github.com/kyawhla-commit" color="#2563EB">GitHub</link>',
        contact_style,
    ),
    Spacer(1, 5),
]

story += section("Professional Summary")
story.append(
    Paragraph(
        "Full-Stack Web and Mobile Developer building enterprise applications with React.js, "
        "TypeScript, NestJS, Node.js, PostgreSQL, and MySQL. Experienced in developing frontend "
        "modules, RESTful APIs, database-backed workflows, dashboards, reports, and system "
        "integrations for smart parking, manufacturing, and healthcare platforms. Mobile "
        "development experience includes native Android applications with Kotlin and React Native "
        "applications, alongside AI-camera and kiosk-hardware integration.",
        body_style,
    )
)

story += section("Technical Skills")
skills = [
    ("Frontend", "React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS"),
    ("Backend", "NestJS, Node.js, Express.js, Laravel, PHP"),
    ("Mobile", "Kotlin, Android, React Native, Google Play Console"),
    ("Databases and ORM", "PostgreSQL, MySQL, TypeORM, Database Design"),
    (
        "APIs and Integration",
        "RESTful APIs, API Integration, AI-Camera Integration, Kiosk and Hardware Integration",
    ),
    (
        "Cloud and Deployment",
        "AWS EC2, DigitalOcean Droplets, Cloudflare Pages, Vercel, GitHub Pages, Ubuntu Linux, "
        "NSSM, Windows Services, On-Premises Deployment",
    ),
    ("Development Tools", "Git, GitHub, Postman, Visual Studio Code"),
]
for label, value in skills:
    story.append(Paragraph(f"<b>{label}:</b> {value}", small_style))

story += section("Professional Experience")
story.extend(
    [
        Paragraph("Full-Stack Web Developer", job_title_style),
        Paragraph("M-Tech (Myo & Moe Technology Co., Ltd.) | January 2026 - Present", meta_style),
        bullet("Develop and maintain enterprise web applications using React.js, TypeScript, NestJS, and Node.js."),
        bullet("Deliver end-to-end functionality across user interfaces, RESTful API endpoints, backend services, and PostgreSQL or MySQL persistence using TypeORM."),
        bullet("Implement operational workflows, dashboards, reports, search, filtering, pagination, and data validation."),
        bullet("Integrate frontend modules with backend APIs and database services, testing request and response behavior with Postman."),
        bullet("Troubleshoot frontend, backend, API, and database issues while maintaining application reliability and improving performance."),
        bullet("Collaborate through Git and GitHub to manage source code and coordinate application changes."),
    ]
)

story.append(PageBreak())

story += section("Selected Enterprise Projects")
enterprise_projects = [
    (
        "Smart Car Parking Management System",
        "React.js | TypeScript | NestJS | PostgreSQL | AI Camera",
        [
            "Developed application modules supporting parking transactions, access passes, parking rates, users, lanes, dashboards, reports, and connected devices.",
            "Contributed across the React frontend and NestJS/PostgreSQL application stack to implement operational parking-management workflows.",
            "Integrated an AI-powered camera system for automatic vehicle license-plate detection and recognition.",
        ],
    ),
    (
        "Smart Factory Management System",
        "React.js | TypeScript | NestJS | PostgreSQL | Kiosk Hardware",
        [
            "Developed manufacturing workflows for production planning, job and machine monitoring, warehouse operations, and inventory management.",
            "Implemented OEE dashboards, production reporting, and QR-code functionality for operational monitoring.",
            "Integrated kiosk hardware with backend APIs to support on-site workflows and real-time operational updates.",
        ],
    ),
    (
        "Blood Bank Management System",
        "React.js | TypeScript | NestJS | PostgreSQL",
        [
            "Developed workflows for blood donors, inventory, hospitals, blood requests, and operational records.",
            "Implemented RESTful APIs, database-backed CRUD functionality, and form validation across the application.",
            "Troubleshot frontend, backend, API, and database issues affecting operational workflows.",
        ],
    ),
]
for name, stack, contributions in enterprise_projects:
    story.append(
        KeepTogether(
            [
                Paragraph(name, project_title_style),
                Paragraph(stack, meta_style),
                *[bullet(item) for item in contributions],
                Spacer(1, 1.5),
            ]
        )
    )

story += section("Personal Projects")
personal_projects = [
    (
        "YBS Way - Public Transportation Mobile App",
        "Kotlin | Android",
        [
            "Developed a native Android application in Kotlin for YBS bus-route search and Yangon public-transport information.",
            "Created reusable native Android UI components, screen navigation, and adaptive layouts for different screen sizes.",
        ],
        "https://ybs-way-web.pages.dev/",
    ),
    (
        "Spendly - Expense Tracker Mobile App",
        "React Native | TypeScript",
        [
            "Developed a mobile personal-finance application for recording and monitoring income and expenses.",
            "Implemented transaction management, categories, spending summaries, application-state handling, and mobile UI workflows.",
        ],
        None,
    ),
]
for name, stack, contributions, live_url in personal_projects:
    project_content = [
        Paragraph(name, project_title_style),
        Paragraph(stack, meta_style),
        *[bullet(item) for item in contributions],
    ]
    if live_url:
        project_content.append(
            Paragraph(
                f'Live app: <link href="{live_url}" color="#2563EB">'
                "ybs-way-web.pages.dev</link>",
                small_style,
            )
        )
    project_content.append(Spacer(1, 1.5))
    story.append(KeepTogether(project_content))
story.append(
    Paragraph(
        'Repository: <link href="https://github.com/kyawhla-commit" color="#2563EB">'
        "github.com/kyawhla-commit</link>",
        small_style,
    )
)

story += section("Certifications")
for item in [
    "Professional Web Developer - Laravel and PHP",
    "Professional Web Developer - React.js, Next.js and Express.js",
    "Professional UI/UX Design - Fairway Technology",
]:
    story.append(bullet(item))

story += section("Education")
story.extend(
    [
        Paragraph("Bachelor of Arts in Geography", project_title_style),
        Paragraph("Pinlon University", small_style),
    ]
)

story += section("Languages")
story.append(
    Paragraph(
        "<b>Pa-O:</b> Native &nbsp;&nbsp; | &nbsp;&nbsp; "
        "<b>Burmese:</b> Fluent &nbsp;&nbsp; | &nbsp;&nbsp; "
        "<b>English:</b> Intermediate",
        small_style,
    )
)

document = SimpleDocTemplate(
    str(OUTPUT_FILE),
    pagesize=A4,
    rightMargin=14 * mm,
    leftMargin=14 * mm,
    topMargin=12 * mm,
    bottomMargin=16 * mm,
    title="Khun Kyaw Hla - Full-Stack Web & Mobile Developer",
    author="Khun Kyaw Hla",
    subject="Professional Resume",
)
document.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
print(OUTPUT_FILE)
