import { useState, FormEvent } from 'react';
import { NavPath } from '../types';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
  Lock,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Globe,
  Briefcase
} from 'lucide-react';

interface ContactViewProps {
  onNavigate?: (path: NavPath) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryType, setInquiryType] = useState('internship');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jennifersagaidasse@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 8248092194').then(() => {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2500);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', org: '', message: '' });

      setTimeout(() => {
        setFormSubmitted(false);
      }, 8000);
    }, 600);
  };

  return (
    <div className="w-full py-10 md:py-14 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#dcbfc3]/40">
          <div className="flex flex-col gap-1">
            <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#82193a]"></span>
              Direct Inquiries &amp; Collaboration
            </span>
            <h1 className="font-['Epilogue'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#261907] tracking-tight">
              Get In Touch
            </h1>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffebd5] border border-[#dcbfc3]/50">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-['Space_Grotesk'] text-xs text-[#261907] font-semibold">
                Available for Software Engineering Roles
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Direct Channels (5 cols), Right Interactive Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Identity Card */}
            <div className="p-4 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shadow-xs border border-[#dcbfc3]/40 shrink-0 bg-[#ffe4c6]">
                <img
                  src={PORTFOLIO_IMAGES.jenniferPortrait}
                  alt="Jennifer Vesilica Rachel S"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-['Epilogue'] text-base font-bold text-[#261907] truncate">
                  Jennifer Vesilica Rachel S
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#82193a] font-semibold">
                  B.Tech (ISE) · 2023–2027
                </span>
                <span className="font-['DM_Sans'] text-xs text-[#564145] truncate">
                  Puducherry Technological University
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="px-2.5 py-1 self-start rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                Direct Communication
              </span>
              <h2 className="font-['Epilogue'] text-2xl md:text-3xl font-bold text-[#261907]">
                Initiate a Technical Conversation
              </h2>
              <p className="font-['DM_Sans'] text-sm md:text-base text-[#564145] leading-relaxed">
                Whether you have an inquiry regarding internships, full-stack software development, applied AI automations, or research collaborations — I would love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/40 flex flex-col min-[440px]:flex-row min-[440px]:items-center justify-between gap-3 hover:border-[#82193a]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#ffebd5] text-[#82193a] shrink-0 shadow-xs">
                    <Mail size={20} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase tracking-wider font-semibold">
                      Email Address
                    </span>
                    <a
                      href="mailto:jennifersagaidasse@gmail.com"
                      className="font-['DM_Sans'] text-xs sm:text-sm text-[#261907] font-semibold truncate hover:text-[#82193a] transition-colors"
                    >
                      jennifersagaidasse@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="self-end min-[440px]:self-auto px-3 py-1.5 rounded-lg bg-[#ffffff] hover:bg-[#ffe4c6] text-[#82193a] font-['Space_Grotesk'] text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer border border-[#dcbfc3]/40"
                  title="Copy email to clipboard"
                >
                  {emailCopied ? <Check size={14} className="text-green-700" /> : <Copy size={14} />}
                  <span>{emailCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Mobile Phone Card */}
              <div className="p-4 rounded-2xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/40 flex items-center justify-between gap-3 hover:border-[#82193a]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#ffebd5] text-[#82193a] shrink-0 shadow-xs">
                    <Phone size={20} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase tracking-wider font-semibold">
                      Telephone / WhatsApp
                    </span>
                    <a
                      href="tel:+918248092194"
                      className="font-['DM_Sans'] text-sm text-[#261907] font-semibold hover:text-[#82193a] transition-colors"
                    >
                      +91 8248092194
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyPhone}
                    className="px-2.5 py-1.5 rounded-lg bg-[#ffffff] hover:bg-[#ffe4c6] text-[#82193a] font-['Space_Grotesk'] text-xs font-semibold shadow-xs flex items-center gap-1 transition-colors cursor-pointer border border-[#dcbfc3]/40"
                    title="Copy phone"
                  >
                    {phoneCopied ? <Check size={13} className="text-green-700" /> : <Copy size={13} />}
                  </button>
                  <a
                    href="tel:+918248092194"
                    className="px-3 py-1.5 rounded-lg bg-[#82193a] text-white font-['Space_Grotesk'] text-xs font-semibold shadow-xs flex items-center gap-1.5 hover:bg-[#610025] transition-colors cursor-pointer"
                  >
                    <span>Call</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-2xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/40 flex items-center justify-between gap-3 hover:border-[#82193a]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#ffebd5] text-[#82193a] shrink-0 shadow-xs">
                    <Linkedin size={20} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase tracking-wider font-semibold">
                      Professional Network
                    </span>
                    <span className="font-['DM_Sans'] text-sm text-[#261907] font-semibold truncate">
                      Jennifer Vesilica Rachel S
                    </span>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#ffffff] hover:bg-[#ffe4c6] text-[#82193a] font-['Space_Grotesk'] text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors shrink-0 border border-[#dcbfc3]/40"
                >
                  <span>Profile</span>
                  <Globe size={13} />
                </a>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-2xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/40 flex items-center justify-between gap-3 hover:border-[#82193a]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#ffebd5] text-[#82193a] shrink-0 shadow-xs">
                    <Github size={20} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase tracking-wider font-semibold">
                      Source Code &amp; Repositories
                    </span>
                    <span className="font-['DM_Sans'] text-sm text-[#261907] font-semibold truncate">
                      Jennifer-Vesilica-Rachel
                    </span>
                  </div>
                </div>
                <a
                  href="https://github.com/Jennifer-Vesilica-Rachel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#ffffff] hover:bg-[#ffe4c6] text-[#82193a] font-['Space_Grotesk'] text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors shrink-0 border border-[#dcbfc3]/40"
                >
                  <span>GitHub</span>
                  <Globe size={13} />
                </a>
              </div>

              {/* Location & Academic Base Card */}
              <div className="p-4 rounded-2xl bg-[#fff1e5] shadow-sm border border-[#dcbfc3]/40 flex items-center gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#ffebd5] text-[#82193a] shrink-0 shadow-xs">
                  <MapPin size={20} />
                </span>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#564145] uppercase tracking-wider font-semibold">
                    Geographical Base
                  </span>
                  <span className="font-['DM_Sans'] text-sm text-[#261907] font-semibold">
                    Puducherry (Pondicherry), India
                  </span>
                  <span className="font-['DM_Sans'] text-xs text-[#564145]">
                    Open to on-site, hybrid, and remote worldwide roles
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="p-5 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/40 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#82193a]">
                <Clock size={16} />
                <span className="font-['Space_Grotesk'] text-xs uppercase font-bold tracking-wider">
                  Typical Response Cadence
                </span>
              </div>
              <p className="font-['DM_Sans'] text-xs text-[#564145] leading-relaxed">
                All inquiries submitted through this portal or sent via email are monitored daily. You can expect a thoughtful response within <strong className="text-[#261907]">24 hours</strong>.
              </p>
              {onNavigate && (
                <div className="pt-2 border-t border-[#dcbfc3]/30 flex items-center justify-between">
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">
                    Looking for verified credentials?
                  </span>
                  <button
                    onClick={() => onNavigate('certifications')}
                    className="inline-flex items-center gap-1 font-['Space_Grotesk'] text-xs font-bold text-[#82193a] hover:underline cursor-pointer"
                  >
                    <span>View Certificates</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#ffebd5] p-6 sm:p-8 md:p-10 shadow-md border border-[#dcbfc3]/50 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#dcbfc3]/40">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#82193a] text-white">
                  <MessageSquare size={16} />
                </span>
                <div>
                  <h3 className="font-['Epilogue'] text-xl sm:text-2xl font-bold text-[#261907]">
                    Transmit a Direct Note
                  </h3>
                  <p className="font-['DM_Sans'] text-xs text-[#564145]">
                    Encrypted channel · Fast direct dispatch
                  </p>
                </div>
              </div>
              <span className="font-['Space_Grotesk'] text-xs text-[#82193a] font-semibold px-2.5 py-1 rounded bg-[#ffffff]/70 border border-[#dcbfc3]/40">
                Direct to Jennifer
              </span>
            </div>

            {/* Inquiry Category Selector */}
            <div className="flex flex-col gap-2">
              <label className="font-['Space_Grotesk'] text-xs text-[#564145] uppercase font-bold tracking-wider">
                Purpose of Contact
              </label>
              <div className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setInquiryType('internship')}
                  className={`px-3 py-2 rounded-xl font-['Space_Grotesk'] text-xs font-semibold text-center transition-all cursor-pointer border ${
                    inquiryType === 'internship'
                      ? 'bg-[#82193a] text-white border-[#82193a] shadow-xs'
                      : 'bg-[#ffffff] text-[#564145] border-[#dcbfc3]/40 hover:bg-[#fff5eb]'
                  }`}
                >
                  Internship / Hiring
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('project')}
                  className={`px-3 py-2 rounded-xl font-['Space_Grotesk'] text-xs font-semibold text-center transition-all cursor-pointer border ${
                    inquiryType === 'project'
                      ? 'bg-[#82193a] text-white border-[#82193a] shadow-xs'
                      : 'bg-[#ffffff] text-[#564145] border-[#dcbfc3]/40 hover:bg-[#fff5eb]'
                  }`}
                >
                  Engineering Project
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('general')}
                  className={`px-3 py-2 rounded-xl font-['Space_Grotesk'] text-xs font-semibold text-center transition-all cursor-pointer border ${
                    inquiryType === 'general'
                      ? 'bg-[#82193a] text-white border-[#82193a] shadow-xs'
                      : 'bg-[#ffffff] text-[#564145] border-[#dcbfc3]/40 hover:bg-[#fff5eb]'
                  }`}
                >
                  General Discussion
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Space_Grotesk'] text-xs text-[#564145] uppercase font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Ramesh / Sarah Chen"
                    className="px-4 py-3 rounded-xl bg-[#ffffff] text-[#261907] placeholder:text-[#564145]/40 focus:outline-none focus:ring-2 focus:ring-[#82193a] text-sm font-['DM_Sans'] border border-[#dcbfc3]/50 shadow-xs"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-['Space_Grotesk'] text-xs text-[#564145] uppercase font-bold">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="px-4 py-3 rounded-xl bg-[#ffffff] text-[#261907] placeholder:text-[#564145]/40 focus:outline-none focus:ring-2 focus:ring-[#82193a] text-sm font-['DM_Sans'] border border-[#dcbfc3]/50 shadow-xs"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Space_Grotesk'] text-xs text-[#564145] uppercase font-bold">
                  Organization / Affiliation
                </label>
                <input
                  type="text"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  placeholder="e.g. Hospital Lab, University, or Tech Company"
                  className="px-4 py-3 rounded-xl bg-[#ffffff] text-[#261907] placeholder:text-[#564145]/40 focus:outline-none focus:ring-2 focus:ring-[#82193a] text-sm font-['DM_Sans'] border border-[#dcbfc3]/50 shadow-xs"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Space_Grotesk'] text-xs text-[#564145] uppercase font-bold">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, team opportunity, timeline, or technical requirements..."
                  className="px-4 py-3 rounded-xl bg-[#ffffff] text-[#261907] placeholder:text-[#564145]/40 focus:outline-none focus:ring-2 focus:ring-[#82193a] text-sm font-['DM_Sans'] resize-none border border-[#dcbfc3]/50 shadow-xs"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-[#564145] text-xs font-['Space_Grotesk']">
                  <Lock size={14} className="text-[#82193a]" />
                  <span>Privacy protected. Direct communication only.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#82193a] hover:bg-[#610025] text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Message'}</span>
                  <Send size={15} />
                </button>
              </div>

              {formSubmitted && (
                <div className="p-4 rounded-xl bg-[#ffffff] text-[#610025] font-['Space_Grotesk'] text-xs font-semibold flex items-center gap-2.5 border border-[#82193a]/30 shadow-sm animate-in fade-in duration-200">
                  <CheckCircle2 size={20} className="text-[#82193a] shrink-0" />
                  <span>Thank you! Your message has been transmitted successfully. Jennifer will reply within 24 hours.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
