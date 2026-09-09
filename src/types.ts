export type NavPath = 'about' | 'experience' | 'projects' | 'certifications' | 'contact';

export interface CertificateItem {
  id: string;
  refNo: string;
  issuer: string;
  subLocation: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  signatory: string;
  verificationBadge: string;
  thumbnailUrl: string;
  highResUrl: string;
  capstoneLabel: string;
  capstoneTitle: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  organizationType: string;
  period: string;
  location: string;
  focusScope: string;
  issuedBy: string;
  issuerRole: string;
  quote: string;
  quoteAuthor: string;
  deliverables: string[];
  techStack: string[];
  hasCertificate: boolean;
  certModalId?: string;
  badgeType: string;
}

export interface WayfindingDestination {
  id: string;
  name: string;
  title: string;
  instruction: string;
  estimate: string;
  path: string;
  icon: string;
  desc: string;
  landmarkImg: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  organizationTag: string;
  description: string;
  tags: string[];
  category: 'healthcare' | 'fullstack' | 'analytics';
  metricHighlight?: string;
  bullets?: string[];
}
