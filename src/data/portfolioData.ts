export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Real-Time & AI' | 'Healthcare IT' | 'Developer Utility';
  description: string;
  problemSolved: string;
  myRole: string;
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
  category: 'Backend & APIs' | 'Frontend' | 'Databases' | 'Languages' | 'DevOps & Tools' | 'Engineering Practices';
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
}

export const PERSONAL_INFO = {
  name: "Sandhiya",
  title: "Python Full Stack Developer & Software Engineer",
  shortRole: "Python Full Stack Developer",
  location: "Bengaluru / Chennai, India (Open to Relocation & Remote)",
  email: "sandhiyaprakasam23@gmail.com",
  phone: "+91 6374403353",
  whatsappUrl: "https://wa.me/916374403353?text=Hi%20Sandhiya,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20developer%20opportunity.",
  linkedinUrl: "https://linkedin.com/in/sandhiyaprakasam-856552351",
  githubUrl: "https://github.com/sandhiyaprakasam23",
  resumePath: "/Sandhiya_Resume.pdf",
  availability: "Immediate Joiner (0 Days Notice)",
  tagline: "I build fast, HIPAA-compliant web applications with Python & Django, and craft reactive, user-friendly frontends with React.",
  summary: "Python Full Stack Developer with 1+ year of commercial experience building secure, high-integrity web applications using Python, Django, Django REST Framework, React.js, MySQL, and PostgreSQL. Experienced in HIPAA-compliant healthcare IT, role-based access control (RBAC), database optimization, and CI/CD automation."
};

export const METRICS = [
  { label: "Commercial Experience", value: "1+ Year", detail: "Hands-on Healthcare IT & SaaS" },
  { label: "Production Apps Deployed", value: "3+", detail: "Clinical & Enterprise ERP Systems" },
  { label: "RESTful APIs Engineered", value: "15+", detail: "Django REST Framework & Postman Docs" },
  { label: "HIPAA Records Managed", value: "10,000+", detail: "Optimized PostgreSQL & MySQL Schemas" },
  { label: "Operational Efficiency", value: "+25%", detail: "Streamlined Clinical Workflows" },
  { label: "Unit Test Coverage", value: "80%+", detail: "Automated via GitHub Actions CI/CD" },
];

export const PROJECTS: Project[] = [
  {
    id: "lyka-one",
    title: "Lyka One – Real Estate ERP",
    subtitle: "Enterprise Operations Platform with Rule-Based SLA Engine",
    category: "Full Stack",
    description: "An operations dashboard engineered for real estate agencies with automated client ticketing, agent workflows, deal pipelines, and an SLA countdown engine with breach detection.",
    problemSolved: "Agencies were missing critical response deadlines and losing customer leads due to lack of SLA visibility. I built a live countdown engine with immutable audit snapshots to enforce accountability.",
    myRole: "Full Stack Developer (Backend Architecture, Database Schema & React UI)",
    longDescription: "Developed an all-in-one operations ERP for real estate teams managing client interactions, tickets, agent allocations, and deal pipelines. Designed a rule-based SLA engine with live countdown timers, automated breach detection, and an append-only audit log. Built a PostgreSQL data migration system with idempotent checkpoints and duplicate-resolution rules.",
    tags: ["Python", "Django", "PostgreSQL", "JavaScript", "Tailwind CSS", "SLA Engine", "Audit Logs"],
    metrics: [
      "Real-time SLA countdown with zero drift",
      "Immutable audit log ensuring data traceability",
      "Idempotent data migration system with duplicate-resolution"
    ],
    liveUrl: "https://lyka-6jhtbbm4g-sandhiyaprakasam23s-projects.vercel.app",
    featured: true,
    architecturePoints: [
      "Operations dashboard for tickets, follow-ups, agent allocation, and pipeline tracking",
      "Rule-based SLA countdown engine with automated breach notifications",
      "Append-only audit trail guaranteeing data integrity and timeline history",
      "PostgreSQL data migration pipeline with checkpoint recovery"
    ],
    previewGradient: "from-cyan-500/20 via-blue-500/10 to-violet-500/20"
  },
  {
    id: "voicetext-ai",
    title: "VoiceText AI",
    subtitle: "Real-Time Multilingual Speech-to-Text Transcription Platform",
    category: "Real-Time & AI",
    description: "A low-latency audio transcription application with a TypeScript frontend and high-throughput Python backend, streaming live audio over WebSockets with 20+ language support.",
    problemSolved: "Users needed instant, accurate voice-to-text without the lag of traditional batch audio uploads. I implemented persistent WebSockets streaming audio packets directly to Gemini API.",
    myRole: "Creator & Lead Developer (WebSocket Architecture & Frontend Client)",
    longDescription: "Engineered a low-latency audio transcription platform with a TypeScript frontend and high-throughput Python backend. Streams live binary audio packets over persistent WebSocket connections with Gemini API integration. Stores transcription sessions in a database with search, pagination, and one-click exports into PDF, TXT, JSON, and SRT subtitles.",
    tags: ["Python", "TypeScript", "WebSocket", "Gemini API", "React", "Render", "Vercel"],
    metrics: [
      "Supports 20+ global and regional languages",
      "Persistent WebSocket stream with sub-second latency",
      "Export to PDF, TXT, JSON, and SRT subtitle files"
    ],
    liveUrl: "https://vioce-text.vercel.app",
    githubUrl: "https://github.com/sandhiyaprakasam23/VioceText",
    featured: true,
    architecturePoints: [
      "Bidirectional WebSocket pipeline for live chunked audio streaming",
      "Gemini AI processing layer with contextual speech recognition",
      "Database-backed history of recorded voice sessions with search",
      "Multi-format export engine with custom formatting presets"
    ],
    previewGradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/20"
  },
  {
    id: "ai-medical-analyzer",
    title: "AI Medical Report Analyzer",
    subtitle: "Clinical Document Extraction & Summarization Platform",
    category: "Healthcare IT",
    description: "A full-stack clinical platform extracting laboratory findings and diagnostic metrics from scanned medical PDFs and images, with automatic abnormal value highlighting.",
    problemSolved: "Clinicians spend excessive time manually reviewing scanned laboratory reports. This tool extracts unstructured report text, standardizes values, and highlights out-of-range parameters for rapid triage.",
    myRole: "Backend & Healthcare IT Architect (HIPAA Compliance & OCR Pipeline)",
    longDescription: "Architected a full-stack medical analysis platform utilizing Django REST Framework and OCR pipelines to parse medical reports. Implements a multi-stage document pipeline (OCR text extraction -> text normalization -> clinical summarization) with strict HIPAA-compliant anonymization. Features an interactive dashboard auto-flagging out-of-range clinical parameters.",
    tags: ["Python", "Django REST Framework", "React.js", "OCR", "HIPAA Compliance", "Document AI"],
    metrics: [
      "Modular pipeline: OCR extraction -> normalization -> clinical summary",
      "Automatic detection and visual highlighting of abnormal values",
      "Strict HIPAA-compliant patient data anonymization"
    ],
    featured: true,
    architecturePoints: [
      "JWT-authenticated protected routes for authorized clinical staff only",
      "Image pre-processing pipeline for skewed and low-resolution hospital scans",
      "Structured summary dashboard highlighting critical test thresholds",
      "Modular architecture ready for EHR / Hospital Management System integration"
    ],
    previewGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20"
  },
  {
    id: "multilang-code-converter",
    title: "Multi-Language Code Converter",
    subtitle: "Developer Utility Transpiling Across 10+ Programming Languages",
    category: "Developer Utility",
    description: "A developer tool that translates source code across 10+ programming languages (Python, JavaScript, Java, C++, C#, PHP) with average Django API response time under 300ms.",
    problemSolved: "Developers migrating snippets between languages frequently introduce syntax bugs. This tool provides instant syntax-checked conversions with side-by-side comparison.",
    myRole: "Full Stack Developer",
    longDescription: "Built a developer utility application facilitating instant cross-language code translation. Scaled a Django REST API backend to achieve sub-300ms response times. Features real-time syntax-highlighted code rendering, AST-based structure checks, rate limiting, and comprehensive Postman documentation.",
    tags: ["Python", "Django", "React.js", "MySQL", "REST API", "AST Parsing"],
    metrics: [
      "10+ programming languages supported",
      "<300ms average backend API latency",
      "500+ code conversion requests served"
    ],
    liveUrl: "https://dainty-beignet-5d275e.netlify.app/",
    featured: false,
    architecturePoints: [
      "Django REST API with request caching and syntax validation",
      "React split-screen interface with instant side-by-side rendering",
      "Rate-limiting and sanitization against malformed code snippets",
      "Postman collection documentation for all API endpoints"
    ],
    previewGradient: "from-amber-500/20 via-orange-500/10 to-red-500/20"
  },
  {
    id: "ui-text-to-code",
    title: "AI-Powered UI/Text-to-Code Converter",
    subtitle: "Natural Language Prompt to Frontend Code Generator",
    category: "Developer Utility",
    description: "Converts natural-language UI descriptions and wireframe notes into clean, responsive HTML, CSS, and React component code with interactive live preview.",
    problemSolved: "Speeding up rapid prototyping by turning text UI specs into clean boilerplate markup that developers can immediately copy and customize.",
    myRole: "Frontend & API Integration Developer",
    longDescription: "Created a productivity tool bridging design concepts to code. Accepts natural language prompts or structured interface descriptions and synthesizes clean HTML5, CSS3, and React.js JSX code with live interactive preview panes and one-click code clipboard integration.",
    tags: ["React.js", "HTML5", "CSS3", "REST API", "Code Generator"],
    metrics: [
      "Instant dual-pane live preview and raw code view",
      "Generates clean semantic HTML5 & modular React code",
      "One-click copy with responsive testing preview"
    ],
    liveUrl: "https://steady-tapioca-8728c8.netlify.app/",
    featured: false,
    architecturePoints: [
      "Clean component-based architecture with interactive live preview",
      "Input validation and smart error handling for incomplete prompts",
      "Modular styling engine producing responsive layouts"
    ],
    previewGradient: "from-blue-500/20 via-indigo-500/10 to-purple-500/20"
  }
];

export const SKILLS: SkillItem[] = [
  // Backend & APIs
  { name: "Python", category: "Backend & APIs", level: "Primary Core", icon: "Code2", highlight: "Django, DRF, WebSockets, OCR, Scripts" },
  { name: "Django & DRF", category: "Backend & APIs", level: "Primary Core", icon: "Server", highlight: "ORM, ViewSets, Serializers, Middleware" },
  { name: "RESTful API Design", category: "Backend & APIs", level: "Production Proven", icon: "Network", highlight: "15+ Endpoints, JSON, Microservices" },
  { name: "JWT & RBAC Security", category: "Backend & APIs", level: "Production Proven", icon: "ShieldCheck", highlight: "Role-Based Access Control, Token Revocation" },
  { name: "WebSockets", category: "Backend & APIs", level: "Proficient", icon: "Radio", highlight: "Bidirectional Real-Time Streaming" },
  { name: "HIPAA Compliance", category: "Backend & APIs", level: "Domain Expertise", icon: "Lock", highlight: "Secure PHI Storage & Audit Logging" },

  // Frontend
  { name: "React.js", category: "Frontend", level: "Primary Core", icon: "Layers", highlight: "Hooks, Context, Custom Components, SPA" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Advanced", icon: "Code2", highlight: "Async/Await, Modern DOM APIs" },
  { name: "TypeScript", category: "Frontend", level: "Proficient", icon: "Code2", highlight: "Type-safe Props, Interfaces, API Contracts" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced", icon: "Palette", highlight: "Utility-first, Dark Mode, Responsive Design" },
  { name: "HTML5 & CSS3", category: "Frontend", level: "Advanced", icon: "FileCode", highlight: "Semantic Structure, Flexbox, Grid" },

  // Databases
  { name: "PostgreSQL", category: "Databases", level: "Production Proven", icon: "Database", highlight: "10,000+ Records, Schema Design, Indexing" },
  { name: "MySQL", category: "Databases", level: "Advanced", icon: "HardDrive", highlight: "Relational Modeling, Foreign Keys" },
  { name: "Schema Architecture", category: "Databases", level: "Advanced", icon: "FolderTree", highlight: "Normalization, Migration Scripts" },
  { name: "Query Optimization", category: "Databases", level: "Proficient", icon: "Gauge", highlight: "Execution Plans, Reduced Latency" },

  // DevOps & Tools
  { name: "Git & GitHub", category: "DevOps & Tools", level: "Daily Driver", icon: "GitBranch", highlight: "Branching Workflows, PRs, Code Reviews" },
  { name: "GitHub Actions (CI/CD)", category: "DevOps & Tools", level: "Proficient", icon: "PlayCircle", highlight: "Automated Testing, 80%+ Coverage" },
  { name: "Postman", category: "DevOps & Tools", level: "Advanced", icon: "Send", highlight: "API Documentation & Automated Test Suites" },
  { name: "Vercel & Netlify", category: "DevOps & Tools", level: "Proficient", icon: "Globe", highlight: "Production Frontend Deployments" },
  { name: "Render", category: "DevOps & Tools", level: "Proficient", icon: "Cloud", highlight: "Python Backend & WebSocket Services" },

  // Engineering Practices
  { name: "Unit Testing (PyTest)", category: "Engineering Practices", level: "80%+ Coverage", icon: "CheckCircle2", highlight: "Regression Prevention, Mocking, Fixtures" },
  { name: "Agile / Scrum", category: "Engineering Practices", level: "Daily Practice", icon: "Zap", highlight: "2-Week Sprints, Standups, Retrospectives" },
  { name: "Clean Architecture", category: "Engineering Practices", level: "Guiding Principle", icon: "Sparkles", highlight: "DRY, SOLID, Readable & Maintainable Code" },
  { name: "API Documentation", category: "Engineering Practices", level: "Standard Practice", icon: "FileText", highlight: "Clear Schemas, Error Codes, Sample Payloads" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full Stack Developer – Healthcare IT",
    company: "Vesoftmetic Solution Pvt Ltd",
    location: "Chennai, Tamil Nadu, India",
    period: "August 2025 – Present",
    type: "Full-Time",
    domain: "Healthcare IT & Hospital Management Systems",
    summary: "Working as a full-stack engineer developing clinical healthcare web applications and patient record management systems that adhere strictly to HIPAA compliance guidelines.",
    achievements: [
      "Developed and maintained 3+ full-stack web applications for clinical healthcare workflows using Python, Django, and React.js, improving operational efficiency by 25%.",
      "Designed and optimized MySQL and PostgreSQL database schemas for HIPAA-compliant patient data management, handling 10,000+ sensitive records securely.",
      "Engineered and documented 15+ RESTful APIs with Django REST Framework, consumed by internal teams and external healthcare integration partners.",
      "Implemented JWT-based authentication and role-based access control (RBAC) to enforce secure, permissioned access to sensitive clinical data.",
      "Set up CI/CD pipelines using GitHub Actions and wrote automated unit tests achieving 80%+ code coverage; collaborated closely in Agile/Scrum sprints."
    ],
    technologies: ["Python", "Django", "Django REST Framework", "React.js", "PostgreSQL", "MySQL", "JWT", "RBAC", "GitHub Actions", "Postman", "HIPAA"]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Commerce (B.Com)",
  institution: "Periyar University",
  period: "2021 – 2024",
  story: "Coming from a Commerce background, I developed a strong appreciation for business operations, financial ledgers, and systematic processes. Driven by curiosity about how modern software powers businesses, I dedicated myself to rigorous, structured software engineering training, mastering Python, Django, database architecture, and React.",
  languages: [
    { name: "Tamil", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working Proficiency" }
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Python Full Stack Development", year: "2024", issuer: "Technical Training Institute" },
  { name: "Django REST Framework & API Design", year: "2024", issuer: "Backend Engineering Program" },
  { name: "React.js Fundamentals & Modern Frontend", year: "2024", issuer: "Frontend Development Academy" },
  { name: "Git & GitHub Version Control Mastery", year: "2024", issuer: "DevOps & Software Practices" }
];

export const REAL_CODE_FILES = {
  sla: {
    filename: "sla_service.py",
    path: "backend/services/sla_service.py",
    language: "python",
    code: `from datetime import timedelta
from django.utils import timezone
from rest_framework.exceptions import ValidationError
from ..models import SLATicket, SLAAuditSnapshot

class SLAService:
    """
    Handles SLA lifecycle, countdown calculations, and breach escalations.
    Written by Sandhiya for real estate operations.
    """
    WARNING_THRESHOLD_MINUTES = 15

    @classmethod
    def evaluate_ticket(cls, ticket: SLATicket) -> dict:
        now = timezone.now()
        elapsed = now - ticket.created_at
        remaining_seconds = max(0, int((ticket.target_resolution_time - now).total_seconds()))

        is_breached = remaining_seconds == 0
        is_warning = remaining_seconds <= (cls.WARNING_THRESHOLD_MINUTES * 60)

        # Snapshot for immutable audit log
        SLAAuditSnapshot.objects.create(
            ticket=ticket,
            remaining_seconds=remaining_seconds,
            is_breached=is_breached,
            evaluation_timestamp=now
        )

        return {
            "ticket_id": str(ticket.id),
            "status": "BREACHED" if is_breached else ("WARNING" if is_warning else "HEALTHY"),
            "seconds_left": remaining_seconds,
            "escalated": ticket.is_escalated,
        }`
  },
  hipaa: {
    filename: "hipaa_views.py",
    path: "backend/clinical/views.py",
    language: "python",
    code: `from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import PatientRecord, AccessAuditLedger
from .serializers import PatientRecordSerializer
from .permissions import IsAuthorizedClinician

class PatientRecordViewSet(viewsets.ModelViewSet):
    """
    HIPAA-compliant patient data access with mandatory audit logging.
    Engineered by Sandhiya (Vesoftmetic Solution).
    """
    serializer_class = PatientRecordSerializer
    permission_classes = [permissions.IsAuthenticated, IsAuthorizedClinician]

    def get_queryset(self):
        # Enforce departmental tenancy isolation
        return PatientRecord.objects.filter(
            facility_id=self.request.user.assigned_facility_id
        ).select_related('attending_physician')

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        
        # Log every PHI access request per HIPAA §164.312(b)
        AccessAuditLedger.objects.create(
            user=request.user,
            record_id=instance.id,
            action="PHI_VIEW",
            ip_address=request.META.get('REMOTE_ADDR')
        )
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)`
  },
  react: {
    filename: "VoiceStream.tsx",
    path: "frontend/components/VoiceStream.tsx",
    language: "typescript",
    code: `import React, { useState, useEffect, useRef } from 'react';

interface VoiceStreamProps {
  languageCode: string;
  onTranscriptReceived?: (text: string) => void;
}

export const VoiceStream: React.FC<VoiceStreamProps> = ({ languageCode }) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [transcript, setTranscript] = useState('');
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Connect to WebSocket streaming endpoint on backend
    const socket = new WebSocket(\`\${process.env.VITE_WS_URL}/stream?lang=\${languageCode}\`);
    socketRef.current = socket;

    socket.onopen = () => setIsStreaming(true);
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.text) {
        setTranscript((prev) => prev + ' ' + data.text);
      }
    };
    socket.onclose = () => setIsStreaming(false);

    return () => socket.close();
  }, [languageCode]);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
        <span>STATUS: {isStreaming ? 'CONNECTED' : 'DISCONNECTED'}</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>
      <p className="mt-2 text-sm text-slate-200">{transcript || 'Speak into microphone...'}</p>
    </div>
  );
};`
  },
  tests: {
    filename: "test_sla_engine.py",
    path: "backend/tests/test_sla_engine.py",
    language: "python",
    code: `import pytest
from datetime import timedelta
from django.utils import timezone
from ..models import SLATicket
from ..services.sla_service import SLAService

@pytest.mark.django_db
class TestSLAEngine:
    """
    Automated test suite achieving 80%+ coverage on SLA calculations.
    """
    def test_countdown_accuracy(self, sample_ticket):
        result = SLAService.evaluate_ticket(sample_ticket)
        assert result["status"] == "HEALTHY"
        assert result["seconds_left"] > 0

    def test_breach_detection_triggers(self, breached_ticket):
        result = SLAService.evaluate_ticket(breached_ticket)
        assert result["status"] == "BREACHED"
        assert result["seconds_left"] == 0

    def test_audit_snapshot_created(self, sample_ticket):
        initial_count = sample_ticket.audit_snapshots.count()
        SLAService.evaluate_ticket(sample_ticket)
        assert sample_ticket.audit_snapshots.count() == initial_count + 1`
  }
};

export const CODE_SNIPPETS = {
  python: REAL_CODE_FILES.sla.code,
  react: REAL_CODE_FILES.react.code,
  sql: REAL_CODE_FILES.hipaa.code,
};
