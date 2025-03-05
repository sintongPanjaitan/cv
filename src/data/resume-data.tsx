import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sintong Panjaitan",
  initials: "Sian",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about:
    "Detail oriented Back End Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Experienced Senior Back-End Engineer with 8 years in the finance industry, specializing in building
      scalable, high-performance financial applications. Strong expertise in Java (Spring Boot,), Python (Flask),
      SQL (PostgreSQL, mariaDB, oracle), and cloud deployment (GCP). Skilled in API development,
      payment gateway integration, financial compliance, and system optimization. Successfully transitioned
      systems from monolithic architectures to microservices, improving performance and scalability.
      Experienced in integrating third-party services and ensuring system reliability across financial
      applications.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/22740277?v=4",
  personalWebsiteUrl: "https://sintong.info",
  contact: {
    email: "sintongjait@gmail.com",
    tel: "-",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sintongPanjaitan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sintong-panjaitan-9372b1b6/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sintong_notes",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Del Institute of Technology",
      degree: "Associate Degree in  Informatics Engineering (A.Md)",
      start: "2013",
      end: "2016",
    },
    {
      school: "Perbanas Institute",
      degree: "Bachelor's Degree in Information System (S.Kom)",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Akseleran",
      link: "https://www.akseleran.co.id/",
      badges: ["Python", "Flask", "PostgreSQL", "Google CLoud Platform"],
      title: "Senior Back End Engineer",
      logo: ConsultlyLogo,
      start: "2020",
      end: null,
      description: (
        <>
          Akseleran is a P2P lending crowdfunding platform in Indonesia that connects SMEs with investors.
          <ul className="list-inside list-disc">
            <li>
              <b>Cloud Deployment & Performance Scaling</b> - Transitioned system architecture from 2
              monolithic servers to a microservices framework with over 30 decoupled services, boosting
              scalability, resilience, and performance.Used GCP tools like Kubernetes, Pub/Sub, Compute
              Engine, Cloud Storage (Bucket), and Logging/Monitoring, solving major performance issues and
              improving scalability.
            </li>
            <li>
              <b>Lending System Development</b> – Engineered and maintained loan lifecycle processes, including
            loan creation, lender investments, borrower disbursements, repayments, and payouts.
            </li>
            <li>
              <b>Third-Party API Development</b> – Built APIs that enabled external companies to integrate
              Akseleran’s services into their platforms.
            </li>
            <li>
              <b>Payment Gateway Integration</b> – Integrated multiple payment gateways and banking APIs,
              including Midtrans, Xendit, and BCA SNAP, to enable seamless fund transfers for lenders and
              borrowers.
            </li>
            <li>
              <b>Compliance & Transaction Reporting</b> – Managed financial data reporting to regulatory bodies,
              ensuring compliance with industry regulations.
            </li>
            <li>
              <b>Digital Signature Integration</b> – Integrated Privy to enable secure and legally compliant
              document signing.
            </li>
            <li>
              <b>Customer Engagement Analytics</b> – Integrated CleverTap to provide marketing teams with
              customer insights for better targeting.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "MyIndo",
      link: "https://www.linkedin.com/company/myindo-cyber-media",
      badges: [
        "Java",
        "Spring boot",
        "Struts 2",
        "Oracle",
        "PostgreSQL",
        "Thymeleaf",
      ],
      title: "Java Developer",
      logo: ParabolLogo,
      start: "2016",
      end: "2020",
      description: (
        <>
          MyIndo is a technology solutions company helping businesses digitize their operations.
          <ul className="list-inside list-disc">
            <li>
                <b>Garuda Indonesia – Ticket Refund System</b>
                <ul className="list-disc list-inside pl-4">
                  <li>
                    Improved and maintained the refund ticket processing system using Java (ZKoss
                    framework) and Oracle DB.
                  </li>
                </ul>
              
            </li>
            
            <li>
                <b>Banking Project – ATK & Stationery Management System</b>
                <ul className="list-disc list-inside pl-4">
                  <li>
                    Designed and developed the Sistem Pengendalian ATK dan Barang Cetakan from scratch
                    using Struts 2, JSP, and MariaDB.
                  </li>
                </ul>
              
            </li>
            
            <li>
                <b>NU Mobile App Development</b>
                <ul className="list-disc list-inside pl-4">
                  <li>
                    Developed the back-end and implemented news scraping from NU Online.
                  </li>
                  <li>
                    Integrated DOKU payment gateway for seamless transactions.
                  </li>
                </ul>
              
            </li>

          </ul>
        </>
      ),
    },
    
  ],
  skills: [
    "Python",
    "Flask",
    "Java",
    "Design Systems",
    "Sprig boot",
    "API",
    "Thymeleaf",
    "Google Cloud Platform"
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
