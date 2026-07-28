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
    spaceBefore=7,
    spaceAfter=4,
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
    spaceAfter=1.5,
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
        Spacer(1, 2.5),
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
        '<link href="https://kyawhla-commit.github.io/khTech-portfolio" color="#2563EB">'
        "kyawhla-commit.github.io/khTech-portfolio</link> | "
        '<link href="https://github.com/kyawhla-commit" color="#2563EB">GitHub</link>',
        contact_style,
    ),
    Spacer(1, 5),
]

story += section("Professional Summary")
story.append(
    Paragraph(
        "Full-Stack Web and Mobile Developer with experience building and maintaining enterprise "
        "applications using React.js, TypeScript, React Native, NestJS, Node.js, Laravel, and "
        "PostgreSQL. Skilled in developing RESTful APIs, responsive user interfaces, mobile "
        "applications, database-driven systems, dashboards, and reports. Experienced in solving "
        "real-world business problems, debugging applications, improving performance, and "
        "collaborating with development teams using Git.",
        body_style,
    )
)

story += section("Technical Skills")
skills = [
    ("Frontend", "React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS"),
    ("Mobile", "React Native"),
    ("Backend", "NestJS, Node.js, Express.js, Laravel, PHP"),
    ("Databases", "PostgreSQL, MySQL"),
    ("ORM", "TypeORM"),
    ("App Distribution", "Google Play Console"),
    ("Deployment and Operations", "NSSM, Windows Services, On-Premises Deployment"),
    ("Cloud and Hosting", "Cloudflare Pages, Vercel, GitHub Pages"),
    ("Tools and Platforms", "Git, GitHub, Postman, Visual Studio Code, Ubuntu Linux"),
    (
        "Development Skills",
        "RESTful APIs, CRUD Operations, Responsive Web Design, Database Design, Form Validation, "
        "Filtering, Pagination, Dashboards and Reporting",
    ),
]
skills_table = Table(
    [
        [Paragraph(f"<b>{label}</b>", small_style), Paragraph(value, small_style)]
        for label, value in skills
    ],
    colWidths=[32 * mm, 150 * mm],
    hAlign="LEFT",
)
skills_table.setStyle(
    TableStyle(
        [
            ("BACKGROUND", (0, 0), (0, -1), LIGHT_BLUE),
            ("TEXTCOLOR", (0, 0), (-1, -1), NAVY),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ("TOPPADDING", (0, 0), (-1, -1), 4),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ("GRID", (0, 0), (-1, -1), 0.35, LIGHT_LINE),
        ]
    )
)
story.append(skills_table)

story += section("Professional Experience")
story.extend(
    [
        Paragraph("Full-Stack Web Developer", job_title_style),
        Paragraph("M-Tech (Myo & Moe Technology Co., Ltd.) | January 2026 - Present", meta_style),
        bullet("Develop and maintain enterprise web applications using React.js, TypeScript, NestJS, and Node.js."),
        bullet("Build and maintain RESTful APIs for frontend applications and system integrations."),
        bullet("Integrate PostgreSQL and MySQL databases and maintain entities and relationships using TypeORM."),
        bullet("Implement CRUD operations, dashboards, reports, search, filtering, pagination, and form validation."),
        bullet("Identify and resolve frontend, backend, API, and database issues while improving performance."),
        bullet("Test API endpoints with Postman and collaborate using Git and GitHub."),
    ]
)

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

story.append(PageBreak())

story += section("Selected Enterprise Projects")
enterprise_projects = [
    (
        "Smart Car Parking Management System",
        "React.js | TypeScript | NestJS | PostgreSQL",
        [
            "Developed parking transactions, dashboards, reports, passes, and rate-management features.",
            "Built user, role, lane, and connected-device management functionality.",
            "Created RESTful API integrations with CRUD operations, filtering, pagination, and validation.",
            "Assisted with debugging and application performance improvement.",
        ],
    ),
    (
        "Smart Factory Management System",
        "React.js | TypeScript | NestJS | PostgreSQL",
        [
            "Developed production planning, job and machine monitoring, and QR-code management features.",
            "Built warehouse and inventory-management functionality.",
            "Contributed to the OEE dashboard, production reports, and operational data views.",
            "Integrated frontend components with RESTful APIs, validation, filtering, and pagination.",
        ],
    ),
    (
        "Blood Bank Management System",
        "React.js | TypeScript | NestJS | PostgreSQL",
        [
            "Developed donor, blood inventory, blood request, and hospital-management features.",
            "Implemented CRUD operations and form validation for operational records.",
            "Created and integrated RESTful APIs with PostgreSQL.",
            "Supported database integration, troubleshooting, and user-friendly interfaces.",
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
                Spacer(1, 3),
            ]
        )
    )

story += section("Personal Projects")
personal_projects = [
    (
        "YBS Way - Public Transportation Mobile App",
        "React Native | TypeScript",
        [
            "Developed a mobile application for YBS bus-route search and transportation information in Yangon.",
            "Created reusable mobile UI components and managed navigation between application screens.",
            "Organized route information clearly and applied responsive design across mobile screen sizes.",
        ],
        "https://ybs-way-web.pages.dev/",
    ),
    (
        "Spendly - Expense Tracker Mobile App",
        "React Native | TypeScript",
        [
            "Developed a mobile application for tracking personal income and expenses.",
            "Implemented create, view, edit, and delete workflows with income and expense categories.",
            "Built spending summaries, a user-friendly interface, and efficient state management.",
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
    project_content.append(Spacer(1, 3))
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
    "Professional Web Developer - Laravel and PHP, Fairway Technology",
    "Professional Web Developer - React.js, Next.js and Express.js, Fairway Technology",
    "Professional UI/UX Design, Fairway Technology",
]:
    story.append(bullet(item))

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
