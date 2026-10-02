from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, ListFlowable, ListItem
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors

base = ParagraphStyle("b", fontName="Times-Roman", fontSize=10.3, leading=12.4)
ctr = ParagraphStyle("c", parent=base, alignment=1)
name = ParagraphStyle("n", parent=ctr, fontName="Times-Bold", fontSize=20, leading=24)
role = ParagraphStyle("r", parent=ctr, fontSize=12, leading=15)
sec = ParagraphStyle("s", parent=base, fontName="Times-Bold", fontSize=13, leading=16, spaceBefore=8)
bold = ParagraphStyle("bd", parent=base, fontName="Times-Bold")
ital = ParagraphStyle("it", parent=base, fontName="Times-Italic")
ital_r = ParagraphStyle("itr", parent=ital, alignment=2)
bold_r = ParagraphStyle("bdr", parent=bold, alignment=2)

def link(t, u): return f'<link href="{u}" color="#1a1a1a">{t}</link>'
def section(t): return [Paragraph(t, sec), Spacer(1, 3)]
def entry(a, b, c, d=""):
    t = Table([[Paragraph(a, bold), Paragraph(b, bold_r)], [Paragraph(c, ital), Paragraph(d, ital_r)]], colWidths=[4.7*inch, 2.3*inch])
    t.setStyle(TableStyle([("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)]))
    return t
def bullets(items):
    return ListFlowable([ListItem(Paragraph(i, base), leftIndent=14, bulletText="–") for i in items], bulletType="bullet", start="–", leftIndent=14, bulletFontName="Times-Roman")

S = []
S += [Paragraph("Abdullah Al Noman", name), Spacer(1,2),
      Paragraph("Full-Stack Software Engineer (Python / Django / NestJS / Next.js)", role), Spacer(1,4),
      Paragraph(f'Dhaka, Bangladesh | +8801771810475 | {link("abdullahalnomancse@gmail.com","mailto:abdullahalnomancse@gmail.com")}', ctr),
      Paragraph(f'{link("github.com/AlNomanCSE","https://github.com/AlNomanCSE")} | {link("abdullahnomancse.netlify.app","https://abdullahnomancse.netlify.app")}', ctr)]
S += section("Professional Summary")
S += [Paragraph("Full-Stack Software Engineer with 3+ years of production experience building backend systems in Python (Django, Django REST Framework) and full-stack applications with NestJS, Next.js, and TypeScript. Experienced across the full engineering lifecycle: API design, database schema and query optimization, CI/CD pipelines, containerized deployments, and coordinating parallel client projects. Comfortable working directly with international clients in a remote, English-first environment.", base)]
S += section("Professional Experience")
S += [entry("Software Engineer II","Jan 2025 – Present","Innovative Skills LTD, Dhaka, Bangladesh"), Spacer(1,2), bullets([
 "Built a large-scale e-commerce platform with an integrated POS system using Django and PostgreSQL, handling real-time inventory, order lifecycle, billing, and automated invoice generation.",
 "Developed full-stack solutions with NestJS and Next.js for a live-class platform supporting thousands of concurrent users, with real-time classroom interaction over WebSockets.",
 "Designed modular REST APIs and coordinated API contracts with frontend teams across 5 parallel client projects running simultaneously.",
 "Set up GitHub Actions CI/CD pipelines with Docker: automated tests on every push, containerized builds, and zero-downtime SSH deploys to a Linux VPS.",
 "Reduced API response times through database indexing, query optimization, and Redis caching."]), Spacer(1,6),
 entry("Software Engineer","Oct 2023 – Dec 2024","Innovative Skills LTD, Dhaka, Bangladesh"), Spacer(1,2), bullets([
 "Migrated a legacy system to Node.js and TypeScript, reducing backend bugs and making frontend integration more predictable.",
 "Added end-to-end type safety across frontend and backend, catching entire classes of runtime errors at compile time.",
 "Collaborated with QA and UI teams to ship features against stable, consistent API contracts."]), Spacer(1,6),
 entry("Web Developer","Jun 2023 – Sep 2023","OutNet, Remote"), Spacer(1,2), bullets([
 "Built MERN stack applications with React Native mobile clients, keeping data synchronized across web and mobile in real time.",
 "Improved Lighthouse performance scores by 30% through frontend asset optimization and a reusable component system.",
 "Managed application state with Redux Toolkit and built RESTful APIs for consistent cross-platform behavior."])]
S += section("Education")
S += [entry("Bachelor of Technology in Computer Science and Engineering","2018 – 2022","National Institute of Technology (NIT), Rourkela, India"), Spacer(1,2), bullets(["ICCR Government Scholarship Recipient"])]
S += section("Technical Skills")
S += [bullets([f"<b>{k}:</b> {v}" for k, v in [
 ("Languages","Python, TypeScript, JavaScript, PHP"),
 ("Backend","Django, Django REST Framework, NestJS, Node.js, Laravel, REST APIs, WebSockets, SOLID Principles"),
 ("Frontend","React.js, Next.js, React Native, Redux Toolkit, Tailwind CSS"),
 ("Databases","PostgreSQL, MySQL, MongoDB, Redis"),
 ("DevOps","Docker, Docker Compose, GitHub Actions, CI/CD, Linux, SSH"),
 ("Other","Git, Celery, WebRTC, Agile/Scrum")]])]

SimpleDocTemplate("Abdullah_Al_Noman_CV_Engineer.pdf", pagesize=A4, leftMargin=.75*inch, rightMargin=.75*inch, topMargin=.5*inch, bottomMargin=.5*inch,
  title="Abdullah Al Noman – CV", author="Abdullah Al Noman").build(S)
