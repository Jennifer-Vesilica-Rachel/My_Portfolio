import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  
  // Embed fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(130 / 255, 25 / 255, 58 / 255); // #82193a (Atlas Red / Burgundy)
  const textColor = rgb(38 / 255, 25 / 255, 7 / 255);      // #261907
  const secondaryColor = rgb(86 / 255, 65 / 255, 69 / 255); // #564145
  const accentColor = rgb(128 / 255, 85 / 255, 47 / 255);   // #80552f
  const ruleColor = rgb(220 / 255, 191 / 255, 195 / 255);   // #dcbfc3

  const pageWidth = 595.28; // A4 width in pt
  const pageHeight = 841.89; // A4 height in pt
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  // ================= PAGE 1 =================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Header top banner line
  page1.drawRectangle({
    x: 0,
    y: pageHeight - 6,
    width: pageWidth,
    height: 6,
    color: primaryColor,
  });

  let y = pageHeight - 35;

  // Name
  page1.drawText('JENNIFER VESILICA RACHEL', {
    x: margin,
    y,
    size: 18,
    font: fontBold,
    color: primaryColor,
  });

  y -= 14;

  // Subtitle
  page1.drawText('Information Science & Engineering Undergraduate | UI/UX & Web Developer', {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: accentColor,
  });

  y -= 14;

  // Contact info
  const contactLine = 'Puducherry, India  |  +91 8248092194  |  jennifersagaidasse@gmail.com';
  page1.drawText(contactLine, {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });

  y -= 11;
  const linksLine = 'LinkedIn: Jennifer Vesilica Rachel S  |  GitHub: github.com/Jennifer-Vesilica-Rachel  |  Portfolio: myportfolio-five-alpha-63.vercel.app';
  page1.drawText(linksLine, {
    x: margin,
    y,
    size: 8,
    font: fontRegular,
    color: secondaryColor,
  });

  y -= 10;
  page1.drawLine({
    start: { x: margin, y },
    end: { x: pageWidth - margin, y },
    thickness: 1,
    color: ruleColor,
  });

  y -= 16;

  // PROFILE SUMMARY SECTION
  function drawSectionHeader(page: any, title: string, curY: number) {
    page.drawText(title, {
      x: margin,
      y: curY,
      size: 10,
      font: fontBold,
      color: primaryColor,
    });
    curY -= 4;
    page.drawLine({
      start: { x: margin, y: curY },
      end: { x: pageWidth - margin, y: curY },
      thickness: 1,
      color: primaryColor,
    });
    return curY - 12;
  }

  y = drawSectionHeader(page1, 'PROFILE SUMMARY', y);

  const profileLines = [
    'Currently pursuing a Bachelor of Technology in Information Science and Engineering, with strong interests in software',
    'development, data analytics, and intelligent systems. Eager to apply technical skills and hands-on project experience to',
    'real-world problems, while continuously learning and contributing to innovative, technology-driven solutions.'
  ];

  for (const line of profileLines) {
    page1.drawText(line, {
      x: margin,
      y,
      size: 8.5,
      font: fontRegular,
      color: textColor,
    });
    y -= 11;
  }

  y -= 6;

  // PROFESSIONAL EXPERIENCE SECTION
  y = drawSectionHeader(page1, 'PROFESSIONAL EXPERIENCE', y);

  // Experience 1
  page1.drawText('ARAVIND EYE HOSPITAL, PUDUCHERRY', {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: textColor,
  });
  page1.drawText('06/2025 – 07/2025 | Puducherry, India', {
    x: pageWidth - margin - 170,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });

  y -= 11;
  page1.drawText('Healthcare Tech Intern (Hospital IT & Medical Records)', {
    x: margin,
    y,
    size: 8.5,
    font: fontBold,
    color: accentColor,
  });

  y -= 12;

  const aravindBullets = [
    'Worked closely with hospital IT and medical records teams to understand clinical workflows and deploy practical patient-facing digital solutions.',
    'Built a QR-code indoor navigation system using React.js and Tailwind CSS mapping 4 core clinical wings to alleviate patient wayfinding confusion.',
    'Analyzed medical record physical location movements, identified systemic workflow bottlenecks, and implemented structured file-tracking protocols.'
  ];

  for (const b of aravindBullets) {
    page1.drawText('•', { x: margin + 4, y, size: 8.5, font: fontBold, color: primaryColor });
    page1.drawText(b, {
      x: margin + 14,
      y,
      size: 8,
      font: fontRegular,
      color: textColor,
      maxWidth: contentWidth - 16,
      lineHeight: 10,
    });
    y -= 16;
  }

  y -= 4;

  // Experience 2
  page1.drawText('UPTURNE SOFTWARE & SERVICES', {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: textColor,
  });
  page1.drawText('06/2026 – 07/2026 | Puducherry, India', {
    x: pageWidth - margin - 170,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });

  y -= 11;
  page1.drawText('AI Automation Intern (Pulsebay Coworking)', {
    x: margin,
    y,
    size: 8.5,
    font: fontBold,
    color: accentColor,
  });

  y -= 12;

  const upturneBullets = [
    'Gained hands-on exposure to web application development, AI automation workflows, and real-world software engineering practices.',
    'Collaborated with engineering mentors on live production projects, applying structured Git versioning and rapid prototyping.',
    'Participated in time-bound hackathon activities, developing collaborative problem-solving, algorithmic thinking, and rapid delivery skills.',
    'Strengthened technical foundations across modern web frameworks, workflow automation logic, and cross-functional team delivery.'
  ];

  for (const b of upturneBullets) {
    page1.drawText('•', { x: margin + 4, y, size: 8.5, font: fontBold, color: primaryColor });
    page1.drawText(b, {
      x: margin + 14,
      y,
      size: 8,
      font: fontRegular,
      color: textColor,
      maxWidth: contentWidth - 16,
      lineHeight: 10,
    });
    y -= 16;
  }

  y -= 4;

  // Experience 3
  page1.drawText('ZOHO CORPORATION', {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: textColor,
  });
  page1.drawText('11/2023 | Puducherry, India', {
    x: pageWidth - margin - 170,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });

  y -= 11;
  page1.drawText('Zoho Creator Student Trainee (Young Creators Program)', {
    x: margin,
    y,
    size: 8.5,
    font: fontBold,
    color: accentColor,
  });

  y -= 12;

  const zohoBullets = [
    'Completed hands-on training in Zoho Creator low-code development platform under Young Creators Program.',
    'Constructed structured database schemas, automated workflow notifications, and custom analytics dashboards.'
  ];

  for (const b of zohoBullets) {
    page1.drawText('•', { x: margin + 4, y, size: 8.5, font: fontBold, color: primaryColor });
    page1.drawText(b, {
      x: margin + 14,
      y,
      size: 8,
      font: fontRegular,
      color: textColor,
      maxWidth: contentWidth - 16,
      lineHeight: 10,
    });
    y -= 15;
  }

  y -= 6;

  // TECHNICAL SKILLS SUMMARY
  y = drawSectionHeader(page1, 'CORE TECHNICAL SKILLS', y);

  const skillsData = [
    { cat: 'Languages:', val: 'Python, Java, SQL (MySQL), R Programming' },
    { cat: 'Web & Frameworks:', val: 'React 19, TypeScript, JavaScript (ES6+), Vite, Tailwind CSS, Flask (Python Web), HTML5/CSS3' },
    { cat: 'Data & Libraries:', val: 'Inverted Indexing, TF-IDF, Vector Space Model, Cosine Similarity, Pandas, NumPy, Scikit-Learn' },
    { cat: 'Tools & Platforms:', val: 'Git, GitHub, Vercel, Netlify, Zoho Creator, Microsoft Power BI, Advanced Excel, MySQL Workbench' }
  ];

  for (const s of skillsData) {
    page1.drawText(s.cat, { x: margin, y, size: 8, font: fontBold, color: accentColor });
    page1.drawText(s.val, { x: margin + 95, y, size: 8, font: fontRegular, color: textColor });
    y -= 13;
  }

  // Page 1 footer
  page1.drawText('Page 1 of 2  •  Jennifer Vesilica Rachel Resume  •  jennifersagaidasse@gmail.com', {
    x: margin,
    y: 20,
    size: 7.5,
    font: fontRegular,
    color: secondaryColor,
  });

  // ================= PAGE 2 =================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Header top banner line
  page2.drawRectangle({
    x: 0,
    y: pageHeight - 6,
    width: pageWidth,
    height: 6,
    color: primaryColor,
  });

  let y2 = pageHeight - 35;

  page2.drawText('JENNIFER VESILICA RACHEL', {
    x: margin,
    y: y2,
    size: 14,
    font: fontBold,
    color: primaryColor,
  });
  page2.drawText('Projects, Education & Certifications', {
    x: pageWidth - margin - 180,
    y: y2,
    size: 9,
    font: fontOblique,
    color: secondaryColor,
  });

  y2 -= 10;
  page2.drawLine({
    start: { x: margin, y: y2 },
    end: { x: pageWidth - margin, y: y2 },
    thickness: 1,
    color: ruleColor,
  });

  y2 -= 16;

  // VERIFIED SOFTWARE PROJECTS SECTION
  y2 = drawSectionHeader(page2, 'VERIFIED SOFTWARE PROJECTS', y2);

  // Project 1: Indoor Navigation
  page2.drawText('1. SMART INDOOR NAVIGATION SYSTEM', {
    x: margin,
    y: y2,
    size: 9.5,
    font: fontBold,
    color: textColor,
  });
  page2.drawText('06/2025 – 07/2025 | Production Deployed', {
    x: pageWidth - margin - 170,
    y: y2,
    size: 8,
    font: fontOblique,
    color: secondaryColor,
  });
  y2 -= 10;
  page2.drawText('Technologies: React.js, Tailwind CSS, QR Code Wayfinding, Netlify, Mobile-First UI/UX', {
    x: margin,
    y: y2,
    size: 8,
    font: fontBold,
    color: accentColor,
  });
  y2 -= 9;
  page2.drawText('Live Demo: aravind-map-raesha0506.netlify.app  |  GitHub: Smart-Indoor-Navigation-System', {
    x: margin,
    y: y2,
    size: 7.5,
    font: fontRegular,
    color: primaryColor,
  });
  y2 -= 12;

  const proj1Bullets = [
    'Problem: Elderly and outpatient visitors faced frequent confusion navigating multi-story hospital corridors, overburdening front-desk helpdesks.',
    'Solution: Engineered a mobile-first QR-activated indoor wayfinding web system with verified floor routing, zero app-store install, and photographic landmarks.',
    'Result: Mapped 4 core clinical wings (Glaucoma, Pharmacy, Refraction), delivering sub-1.5s mobile load and deterministic route orientation.'
  ];

  for (const b of proj1Bullets) {
    page2.drawText('•', { x: margin + 4, y: y2, size: 8, font: fontBold, color: primaryColor });
    page2.drawText(b, {
      x: margin + 14,
      y: y2,
      size: 7.5,
      font: fontRegular,
      color: textColor,
      maxWidth: contentWidth - 16,
      lineHeight: 9.5,
    });
    y2 -= 15;
  }

  y2 -= 4;

  // Project 2: IR Search Engine v2
  page2.drawText('2. IR SEARCH ENGINE v2 (INVERTED INDEX & TF-IDF)', {
    x: margin,
    y: y2,
    size: 9.5,
    font: fontBold,
    color: textColor,
  });
  page2.drawText('2024 – 2025 | Open Source', {
    x: pageWidth - margin - 170,
    y: y2,
    size: 8,
    font: fontOblique,
    color: secondaryColor,
  });
  y2 -= 10;
  page2.drawText('Technologies: Python, Flask, HTML5 Templates, CSS3, Inverted Index, TF-IDF / VSM, Vercel', {
    x: margin,
    y: y2,
    size: 8,
    font: fontBold,
    color: accentColor,
  });
  y2 -= 9;
  page2.drawText('Live Demo: search-engine-self-sigma.vercel.app  |  GitHub: search-engine', {
    x: margin,
    y: y2,
    size: 7.5,
    font: fontRegular,
    color: primaryColor,
  });
  y2 -= 12;

  const proj2Bullets = [
    'Problem: Searching unstructured document corpora lacked computational transparency and required heavy external database setups.',
    'Solution: Built a lightweight Python/Flask Information Retrieval engine with Inverted Index tokenization, TF-IDF weighting, and Cosine Similarity scoring.',
    'Result: Delivered deterministic relevance ranking across multi-document corpora with real-time inspectable term calculation matrices and zero database dependencies.'
  ];

  for (const b of proj2Bullets) {
    page2.drawText('•', { x: margin + 4, y: y2, size: 8, font: fontBold, color: primaryColor });
    page2.drawText(b, {
      x: margin + 14,
      y: y2,
      size: 7.5,
      font: fontRegular,
      color: textColor,
      maxWidth: contentWidth - 16,
      lineHeight: 9.5,
    });
    y2 -= 15;
  }

  y2 -= 4;

  // Project 3: Interactive Editorial Portfolio
  page2.drawText('3. INTERACTIVE EDITORIAL PORTFOLIO', {
    x: margin,
    y: y2,
    size: 9.5,
    font: fontBold,
    color: textColor,
  });
  page2.drawText('2025 – 2026 | Production Deployed', {
    x: pageWidth - margin - 170,
    y: y2,
    size: 8,
    font: fontOblique,
    color: secondaryColor,
  });
  y2 -= 10;
  page2.drawText('Technologies: React 19, TypeScript, Vite, Tailwind CSS, GSAP, EmailJS, Vercel', {
    x: margin,
    y: y2,
    size: 8,
    font: fontBold,
    color: accentColor,
  });
  y2 -= 9;
  page2.drawText('Live Demo: myportfolio-five-alpha-63.vercel.app  |  GitHub: My_Portfolio', {
    x: margin,
    y: y2,
    size: 7.5,
    font: fontRegular,
    color: primaryColor,
  });
  y2 -= 12;

  const proj3Bullets = [
    'Problem: Static portfolio templates fail to convey real system architecture, interactive simulator capabilities, and responsive execution.',
    'Solution: Engineered an editorial web application featuring live in-browser wayfinding & IR search sandboxes, 100% fluid responsiveness, and EmailJS dispatch.',
    'Result: Achieved 100% responsive fluid layout across 320px–1440px viewports, verified touch targets, and document-accurate interactive resume folio.'
  ];

  for (const b of proj3Bullets) {
    page2.drawText('•', { x: margin + 4, y: y2, size: 8, font: fontBold, color: primaryColor });
    page2.drawText(b, {
      x: margin + 14,
      y: y2,
      size: 7.5,
      font: fontRegular,
      color: textColor,
      maxWidth: contentWidth - 16,
      lineHeight: 9.5,
    });
    y2 -= 15;
  }

  y2 -= 6;

  // EDUCATION SECTION
  y2 = drawSectionHeader(page2, 'EDUCATION', y2);

  page2.drawText("Bachelor of Technology in Information Science and Engineering (B.Tech ISE)", {
    x: margin,
    y: y2,
    size: 9,
    font: fontBold,
    color: textColor,
  });
  page2.drawText('2023 – 2027 | Puducherry, India', {
    x: pageWidth - margin - 170,
    y: y2,
    size: 8,
    font: fontOblique,
    color: secondaryColor,
  });
  y2 -= 11;
  page2.drawText("WOMEN'S ENGINEERING COLLEGE (Constituent College of Puducherry Technological University)", {
    x: margin,
    y: y2,
    size: 8,
    font: fontBold,
    color: accentColor,
  });
  y2 -= 11;
  page2.drawText("Core Coursework: Programming Foundations, Data Structures & Algorithms, Database Management Systems (DBMS),", {
    x: margin,
    y: y2,
    size: 7.5,
    font: fontRegular,
    color: textColor,
  });
  y2 -= 10;
  page2.drawText("Object-Oriented Programming (Java/Python), Web Technologies, Machine Learning & AI, Cloud Computing.", {
    x: margin,
    y: y2,
    size: 7.5,
    font: fontRegular,
    color: textColor,
  });

  y2 -= 15;

  // CERTIFICATIONS & RECOGNITION SECTION
  y2 = drawSectionHeader(page2, 'CERTIFICATIONS & CREDENTIALS', y2);

  const certs = [
    '• Tech Intern Certificate — Aravind Eye Hospital, Puducherry (Clinical IT & Medical Records System, 2025)',
    '• AI Automation & Web Development Certificate — Upturne Software & Services (Pulsebay Coworking, 2026)',
    '• Zoho Creator Platform Certification — Zoho Corporation Young Creators Program (2023)',
    '• Python & Data Structures Specialization — Academic Distinction & Lab Excellence (PTU Affiliate, 2024)'
  ];

  for (const c of certs) {
    page2.drawText(c, {
      x: margin,
      y: y2,
      size: 7.5,
      font: fontRegular,
      color: textColor,
    });
    y2 -= 12;
  }

  // Page 2 footer
  page2.drawText('Page 2 of 2  •  Jennifer Vesilica Rachel Resume  •  myportfolio-five-alpha-63.vercel.app', {
    x: margin,
    y: 20,
    size: 7.5,
    font: fontRegular,
    color: secondaryColor,
  });

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const outPath = path.resolve(process.cwd(), 'public', 'Jennifer_Vesilica_Rachel_Resume.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`Generated resume PDF successfully at ${outPath} (${pdfBytes.length} bytes)`);
}

generateResumePdf().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
