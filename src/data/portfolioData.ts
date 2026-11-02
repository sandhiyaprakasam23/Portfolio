export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI & WebSockets' | 'Healthcare IT' | 'Developer Tools';
  description: string;
  longDescription: string;
  tags: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  architecturePoints: string[];
  previewGradient: string;
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Backend & APIs' | 'Frontend' | 'Databases' | 'DevOps & Tools' | 'Methodologies';
  level: string;
  icon: string;
  highlight: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  domain: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface CertificationItem {
  name: string;
  year: string;
  issuer: string;
  credentialId?: string;
}

export const PERSONAL_INFO = {
  name: "SANDHIYA P",
  title: "Python Full Stack Developer | Software Engineer",
  shortRole: "Python Full Stack Developer",
  location: "Chennai / Bengaluru, India",
  email: "sandhiyaprakasam23@gmail.com",
  phone: "+91 6374403353",
  whatsappUrl: "https://wa.me/916374403353?text=Hi%20Sandhiya,%20I%20reviewed%20your%20developer%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
  linkedinUrl: "https://linkedin.com/in/sandhiyaprakasam-856552351",
  githubUrl: "https://github.com/sandhiyaprakasam23",
  resumePath: "/Sandhiya_Resume.pdf",
  availability: "Immediate Joiner | Open to Relocation (Bangalore) & Remote",
  tagline: "Building intelligent, scalable and beautifully engineered digital experiences.",
  summary: "Python Full Stack Developer with 1+ year of experience developing secure, scalable web applications using Python, Django, Django REST Framework, React.js, MySQL, and PostgreSQL. Delivered HIPAA-compliant Healthcare IT systems, RESTful APIs, and CI/CD pipelines in an Agile/Scrum environment. Strong in database design, authentication (JWT, RBAC), unit testing, and clean, maintainable code."
};

export const METRICS = [
  { label: "Commercial Experience", value: "1+ Year", detail: "Healthcare IT & Enterprise SaaS" },
  { label: "Production Apps Deployed", value: "3+", detail: "Clinical & Real Estate ERP Systems" },
  { label: "RESTful APIs Engineered", value: "15+", detail: "Django REST Framework & Postman Docs" },
  { label: "HIPAA Records Handled", value: "10,000+", detail: "Optimized PostgreSQL & MySQL Schemas" },
  { label: "Operational Efficiency", value: "+25%", detail: "Streamlined Clinical Workflows" },
  { label: "Unit Test Code Coverage", value: "80%+", detail: "Automated via GitHub Actions CI/CD" },
];

export const PROJECTS: Project[] = [
  {
    id: "lyka-one",
    title: "Lyka One – Real Estate ERP",
    subtitle: "Enterprise Real Estate ERP with SLA Management Engine",
    category: "Full Stack",
    description: "Enterprise-grade real estate operations platform featuring an automated rule-based SLA engine, live countdown timers, breach detection, and immutable audit logs.",
    longDescription: "Developed an all-in-one operations ERP for real estate agencies managing client interactions, tickets, agent allocations, and deal pipelines. Engineered a custom SLA countdown engine with automated breach escalation and an immutable audit log. Designed a PostgreSQL data migration system with idempotent checkpoints and duplicate-resolution rules.",
    tags: ["Python", "Django", "PostgreSQL", "JavaScript", "Tailwind CSS", "SLA Engine", "Audit Logs"],
    metrics: [
      "Real-time SLA countdown with zero-drift accuracy",
      "Immutable audit log for full legal compliance",
      "Idempotent database migration system with duplicate resolution"
    ],
    liveUrl: "https://lyka-6jhtbbm4g-sandhiyaprakasam23s-projects.vercel.app",
    featured: true,
    architecturePoints: [
      "Operations dashboard for clients, tickets, agencies, follow-ups, and deal pipelines",
      "Rule-based SLA engine with breach detection and alert triggers",
      "Append-only audit ledger guaranteeing data traceability",
      "Quarantine ledger and duplicate-resolution pipeline during legacy data cutover"
    ],
    previewGradient: "from-cyan-500/20 via-blue-500/10 to-violet-500/20"
  },
  {
    id: "voicetext-ai",
    title: "VoiceText AI",
    subtitle: "Real-Time Multilingual Speech-to-Text Platform",
    category: "AI & WebSockets",
    description: "Real-time speech-to-text platform supporting 20+ languages with WebSocket streaming audio and multi-format transcript export (PDF, TXT, JSON, SRT).",
    longDescription: "Engineered a low-latency audio transcription application with a TypeScript frontend and a high-throughput Python backend. Streams live audio packets over persistent WebSocket connections with Gemini API integration. Stores transcription sessions with search and enables one-click exports into PDF, TXT, JSON, and subtitle SRT files.",
    tags: ["Python", "TypeScript", "WebSocket", "Gemini API", "React", "Render", "Vercel"],
    metrics: [
      "Supports 20+ global and regional languages",
      "Persistent WebSocket stream with minimal latency",
      "Multi-format export: PDF, TXT, JSON, and SRT subtitles"
    ],
    liveUrl: "https://vioce-text.vercel.app",
    githubUrl: "https://github.com/sandhiyaprakasam23/VioceText",
    featured: true,
    architecturePoints: [
      "Full-stack WebSocket pipeline for bidirectional binary audio streaming",
      "Gemini AI processing layer with contextual speech recognition",
      "Database-backed history of recorded voice sessions with search and pagination",
      "Automated multi-format exporter with custom formatting presets"
    ],
    previewGradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/20"
  },
  {
    id: "ai-medical-analyzer",
    title: "AI Medical Report Analyzer",
    subtitle: "HIPAA-Compliant Clinical Findings Extraction Platform",
    category: "Healthcare IT",
    description: "AI-assisted clinical report parser extracting and summarizing key laboratory findings from scanned PDFs and images with abnormal value detection.",
    longDescription: "Architected a full-stack medical analysis platform utilizing Django REST Framework and OCR pipelines to parse medical reports. Implements a multi-stage document pipeline (OCR text extraction -> normalization -> LLM clinical summarization) with strict HIPAA-compliant anonymization. Features an interactive dashboard auto-flagging out-of-range clinical parameters.",
    tags: ["Python", "Django REST Framework", "React.js", "OCR", "HIPAA Compliance", "Document AI"],
    metrics: [
      "Modular pipeline: OCR extraction -> text normalization -> clinical summary",
      "Automatic detection and visual highlighting of abnormal values",
      "HIPAA-compliant data handling and anonymization protocols"
    ],
    featured: true,
    architecturePoints: [
      "JWT-authenticated protected routes for healthcare personnel access",
      "Resilient OCR parser with image pre-processing for low-quality / skewed hospital scans",
      "Structured clinical summary view highlighting critical thresholds for rapid triage",
      "Modular microservice-ready architecture designed for hospital EHR integration"
    ],
    previewGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20"
  },
  {
    id: "multilang-code-converter",
    title: "Multi-Language Code Converter",
    subtitle: "Real-Time Transpilation Across 10+ Languages",
    category: "Developer Tools",
    description: "High-speed developer tool translating source code between 10+ languages (Python, JS, Java, C++, C#, PHP) with sub-300ms Django REST backend.",
    longDescription: "Built a developer utility application facilitating instant cross-language code translation. Scaled a Django REST API backend to achieve sub-300ms response times. Features real-time Monaco/syntax highlighted code rendering, AST-based structure checks, rate limiting, and comprehensive Postman documentation.",
    tags: ["Python", "Django", "React.js", "MySQL", "REST API", "AST Parsing"],
    metrics: [
      "10+ programming languages supported seamlessly",
      "<300ms average backend response time",
      "500+ successful conversion requests served"
    ],
    liveUrl: "https://dainty-beignet-5d275e.netlify.app/",
    featured: false,
    architecturePoints: [
      "Django REST API with intelligent caching and input validation",
      "React.js dual-pane split view with instant syntax highlighting",
      "Automated syntax verification before and after translation",
      "CI/CD deployment with Postman endpoint documentation"
    ],
    previewGradient: "from-amber-500/20 via-orange-500/10 to-red-500/20"
  },
  {
    id: "ui-text-to-code",
    title: "AI UI & Text-to-Code Converter",
    subtitle: "Natural Language to Production Frontend Code Generator",
    category: "Developer Tools",
    description: "Converts natural language UI specifications and wireframe descriptions into clean, responsive HTML, CSS, and React component code.",
    longDescription: "Created a productivity tool bridging design concepts to code. Accepts natural language prompts or structured interface descriptions and synthesizes clean HTML5, CSS3, and React.js JSX code with live interactive preview panes and one-click code clipboard integration.",
    tags: ["React.js", "HTML5", "CSS3", "REST API", "Code Generator"],
    metrics: [
      "Instant dual-pane live preview and raw code view",
      "Clean semantic HTML5 and modern modular CSS/React output",
      "One-click copy and responsive device testing simulator"
    ],
    liveUrl: "https://steady-tapioca-8728c8.netlify.app/",
    featured: false,
    architecturePoints: [
      "Clean component-based architecture with interactive live preview sandbox",
      "Input validation and smart error handling for incomplete prompts",
      "Modular styling engine producing responsive layouts"
    ],
    previewGradient: "from-blue-500/20 via-indigo-500/10 to-purple-500/20"
  }
];

export const SKILLS: SkillItem[] = [
  // Languages
  { name: "Python", category: "Languages", level: "Primary Expertise", icon: "Code2", highlight: "Django, DRF, WebSockets, OCR, Scripts" },
  { name: "JavaScript (ES6+)", category: "Languages", level: "Advanced", icon: "Code2", highlight: "Async/Await, DOM, Modern Web APIs" },
  { name: "TypeScript", category: "Languages", level: "Proficient", icon: "Code2", highlight: "Type-safe Frontends & API Contracts" },
  { name: "SQL", category: "Languages", level: "Advanced", icon: "Database", highlight: "Complex Queries, Joins, Indexing, Triggers" },
  { name: "HTML5 & CSS3", category: "Languages", level: "Advanced", icon: "FileCode", highlight: "Semantic Markup, Modern Flexbox/Grid" },

  // Backend & APIs
  { name: "Django", category: "Backend & APIs", level: "Primary Expertise", icon: "Server", highlight: "ORM, Authentication, Admin, Middleware" },
  { name: "Django REST Framework", category: "Backend & APIs", level: "Primary Expertise", icon: "Cpu", highlight: "Serializers, ViewSets, Routers, Permissions" },
  { name: "RESTful API Architecture", category: "Backend & APIs", level: "Primary Expertise", icon: "Network", highlight: "15+ Production Endpoints, JSON, Microservices" },
  { name: "JWT & RBAC Security", category: "Backend & APIs", level: "Advanced", icon: "ShieldCheck", highlight: "Role-Based Access Control, Token Revocation" },
  { name: "WebSockets", category: "Backend & APIs", level: "Proficient", icon: "Radio", highlight: "Bi-directional Real-Time Audio Streaming" },
  { name: "HIPAA Compliance", category: "Backend & APIs", level: "Healthcare Domain", icon: "Lock", highlight: "Secure Patient PHI Handling & Auditing" },

  // Frontend
  { name: "React.js", category: "Frontend", level: "Primary Expertise", icon: "Layers", highlight: "Hooks, State Management, Custom Components" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced", icon: "Palette", highlight: "Responsive, Dark Mode, Modern Utility Styling" },
  { name: "Responsive UI & SPA", category: "Frontend", level: "Advanced", icon: "Smartphone", highlight: "Mobile-first, Fast Load Times, PWA-Ready" },

  // Databases
  { name: "PostgreSQL", category: "Databases", level: "Advanced", icon: "Database", highlight: "10,000+ Records, Schema Design, Migrations" },
  { name: "MySQL", category: "Databases", level: "Advanced", icon: "HardDrive", highlight: "Relational Modeling, Index Optimization" },
  { name: "Database Schema Design", category: "Databases", level: "Advanced", icon: "FolderTree", highlight: "Normalization, Foreign Keys, Audit Tables" },
  { name: "Query Optimization", category: "Databases", level: "Proficient", icon: "Gauge", highlight: "Query Execution Plans, Latency Reduction" },

  // DevOps & Tools
  { name: "Git & GitHub", category: "DevOps & Tools", level: "Advanced", icon: "GitBranch", highlight: "Branching Strategies, PRs, Code Reviews" },
  { name: "GitHub Actions (CI/CD)", category: "DevOps & Tools", level: "Proficient", icon: "PlayCircle", highlight: "Automated Testing, 80%+ Test Coverage" },
  { name: "Postman", category: "DevOps & Tools", level: "Advanced", icon: "Send", highlight: "API Documentation, Test Suites, Mocking" },
  { name: "Vercel & Netlify", category: "DevOps & Tools", level: "Proficient", icon: "Globe", highlight: "Frontend Production Deployments" },
  { name: "Render", category: "DevOps & Tools", level: "Proficient", icon: "Cloud", highlight: "Backend Microservices & WebSocket Hosts" },

  // Methodologies
  { name: "Agile / Scrum", category: "Methodologies", level: "Practicing", icon: "Zap", highlight: "2-Week Sprints, Standups, Retrospectives" },
  { name: "Unit Testing & QA", category: "Methodologies", level: "Advanced", icon: "CheckCircle", highlight: "PyTest, Django TestCase, 80%+ Coverage" },
  { name: "OOP & Clean Code", category: "Methodologies", level: "Advanced", icon: "Sparkles", highlight: "SOLID Principles, Modular Design Patterns" },
  { name: "API Documentation", category: "Methodologies", level: "Advanced", icon: "FileText", highlight: "Swagger/OpenAPI, Postman Collections" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full Stack Developer – Healthcare IT",
    company: "Vesoftmetic Solution Pvt Ltd",
    location: "Chennai, Tamil Nadu, India",
    period: "August 2025 – Present",
    type: "Full-Time",
    domain: "Healthcare IT & Hospital Management Systems",
    summary: "Spearheaded full-stack engineering of clinical healthcare web platforms and patient record systems complying with strict HIPAA security requirements.",
    achievements: [
      "Developed and maintained 3+ full-stack web applications for clinical healthcare workflows using Python, Django, and React.js, improving operational efficiency by 25%.",
      "Designed and optimized MySQL and PostgreSQL schemas for HIPAA-compliant patient data management, handling 10,000+ sensitive records securely.",
      "Built and documented 15+ RESTful APIs with Django REST Framework, consumed by internal teams and external healthcare integration partners.",
      "Implemented JWT authentication and role-based access control (RBAC) to enforce secure, role-specific data access across hospital departments.",
      "Set up CI/CD pipelines with GitHub Actions and wrote unit tests achieving 80%+ code coverage; collaborated actively in Agile/Scrum sprint cycles."
    ],
    technologies: ["Python", "Django", "Django REST Framework", "React.js", "PostgreSQL", "MySQL", "JWT", "RBAC", "GitHub Actions", "Postman", "HIPAA"]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Commerce (B.Com)",
  institution: "Periyar University",
  period: "2021 – 2024",
  description: "Transitioned from Commerce into Full Stack Software Engineering through rigorous, structured technical immersion, mastering modern backend and frontend systems.",
  languages: [
    { name: "Tamil", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working" }
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Python Full Stack Development", year: "2024", issuer: "Technical Training Institute" },
  { name: "Django REST Framework & API Design", year: "2024", issuer: "Enterprise Engineering Program" },
  { name: "React.js Fundamentals & Modern Web", year: "2024", issuer: "Frontend Development Academy" },
  { name: "Git & GitHub Version Control Mastery", year: "2024", issuer: "DevOps & Open Source Initiative" }
];

export const CODE_SNIPPETS = {
  python: `from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import SLATicket, AuditLog
from .serializers import SLATicketSerializer
from .engine import calculate_breach_probability

class SLAManagementViewSet(viewsets.ModelViewSet):
    """
    HIPAA-compliant Real Estate & Healthcare SLA Engine
    Engineered by Sandhiya P
    """
    permission_classes = [IsAuthenticated]
    serializer_class = SLATicketSerializer
    queryset = SLATicket.objects.select_related('assigned_agent')

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        breach_risk = calculate_breach_probability(instance)
        
        # Log append-only audit trail
        AuditLog.objects.create(
            actor=request.user,
            action=f"AUDIT_READ: Ticket {instance.id}",
            risk_score=breach_risk
        )
        serializer = self.get_serializer(instance)
        return Response({
            "ticket": serializer.data,
            "sla_countdown": instance.remaining_seconds,
            "breach_risk_factor": breach_risk
        }, status=status.HTTP_200_OK)`,

  react: `import React, { useState, useEffect, useRef } from 'react';

export const VoiceTextStream = ({ language = 'en-US' }) => {
  const [transcription, setTranscription] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Persistent bidirectional WebSocket streaming
    const ws = new WebSocket(process.env.VITE_WS_STREAM_URL);
    wsRef.current = ws;

    ws.onopen = () => setIsConnected(true);
    ws.onmessage = (event) => {
      const { text, isFinal } = JSON.parse(event.data);
      setTranscription((prev) => prev + ' ' + text);
    };

    return () => ws.close();
  }, [language]);

  return (
    <div className="terminal-monitor p-4 rounded-xl border border-cyan-500/30">
      <div className="flex items-center gap-2 text-xs text-cyan-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        STREAMING AUDIO [STATUS: {isConnected ? 'ACTIVE' : 'IDLE'}]
      </div>
      <p className="mt-3 font-mono text-sm text-slate-200">{transcription || 'Awaiting voice packets...'}</p>
    </div>
  );
};`,

  sql: `-- PostgreSQL Schema: Real Estate SLA & Patient Auditing
-- Optimized by Sandhiya P
CREATE TABLE IF NOT EXISTS clinical_sla_audit (
    audit_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id VARCHAR(64) NOT NULL,
    actor_id VARCHAR(64) NOT NULL,
    action_type VARCHAR(32) NOT NULL,
    sla_seconds_remaining INTEGER CHECK (sla_seconds_remaining >= 0),
    is_breached BOOLEAN DEFAULT FALSE,
    payload JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_clinical_audit_perf 
ON clinical_sla_audit (entity_id, created_at DESC)
WHERE is_breached = TRUE;`
};
