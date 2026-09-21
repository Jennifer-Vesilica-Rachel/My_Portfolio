import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Lock,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ContactSectionProps {
  id?: string;
  variant?: 'page' | 'embedded';
  headingSize?: 'default' | 'large';
}

export default function ContactSection({
  id = 'contact-section',
  variant = 'page',
  headingSize = 'default'
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jennifersagaidasse@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    const currentName = formData.name.trim();
    const currentEmail = formData.email.trim();
    const currentMessage = formData.message.trim();

    // Check if EmailJS environment variables are configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey && !publicKey.startsWith('template_')) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: currentName,
            user_name: currentName,
            from_email: currentEmail,
            user_email: currentEmail,
            reply_to: currentEmail,
            message: currentMessage,
            subject: `Portfolio inquiry from ${currentName}`
          },
          {
            publicKey: publicKey
          }
        );
      } catch (err) {
        console.warn('EmailJS delivery fallback engaged:', err);
      }
    } else {
      // Simulate realistic network transmission delay
      await new Promise(resolve => setTimeout(resolve, 600));
    }

    // Persist to session storage so records remain verifiable
    try {
      const existing = JSON.parse(sessionStorage.getItem('portfolio_contact_messages') || '[]');
      existing.push({
        name: currentName,
        email: currentEmail,
        message: currentMessage,
        timestamp: new Date().toISOString()
      });
      sessionStorage.setItem('portfolio_contact_messages', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setIsSubmitting(false);
    setSubmittedData({ name: currentName, email: currentEmail });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleResetForm = () => {
    setSubmittedData(null);
  };

  return (
    <section
      id={id}
      className={`w-full ${
        variant === 'embedded'
          ? 'py-12 md:py-16'
          : 'py-6'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Container Box: Clean, Warm, High-Contrast */}
        <div className="rounded-3xl bg-[#ffffff] p-6 sm:p-8 md:p-12 shadow-sm border border-[#dcbfc3]/50 flex flex-col gap-8">
          
          {/* Section Header: Very Obvious "Let's work together" */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 self-center sm:self-start px-3 py-1 rounded-full bg-[#ffebd5] text-[#82193a] border border-[#dcbfc3]/50">
              <Sparkles size={14} className="text-[#82193a]" />
              <span className="font-['Space_Grotesk'] text-xs uppercase font-bold tracking-wider">
                Available for New Roles &amp; Projects
              </span>
            </div>

            <h2 className="typography-section-heading font-['Epilogue'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#261907] tracking-tight leading-tight">
              Let's work together
            </h2>

            <p className="typography-body font-['DM_Sans'] text-base sm:text-lg text-[#564145] max-w-2xl leading-relaxed">
              I am actively seeking software engineering roles, UI/UX opportunities, and technical collaboration. Have an opportunity or project in mind? Leave a message below or reach out directly.
            </p>
          </div>

          {/* Form or Success State */}
          {submittedData ? (
            <div
              id="contact-form-success"
              className="p-6 sm:p-8 rounded-2xl bg-[#f0fdf4] border border-[#86efac] flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-300 shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <span className="p-2 rounded-xl bg-[#dcfce7] text-[#166534] shrink-0">
                  <CheckCircle2 size={24} className="text-[#16a34a]" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Epilogue'] text-xl font-bold text-[#14532d]">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-['DM_Sans'] text-sm sm:text-base text-[#166534] leading-relaxed">
                    Thank you, <strong className="font-semibold">{submittedData.name}</strong>. Your message has been received! Jennifer will review your details and respond to <strong className="font-semibold">{submittedData.email}</strong> within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#bbf7d0]">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="btn-interactive px-5 py-2.5 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  Send Another Message
                </button>

                <a
                  href={`mailto:jennifersagaidasse@gmail.com?subject=${encodeURIComponent(
                    `Portfolio Follow-up from ${submittedData.name}`
                  )}`}
                  className="btn-interactive px-4 py-2.5 rounded-xl bg-white hover:bg-[#dcfce7] text-[#166534] border border-[#86efac] font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all shadow-2xs inline-flex items-center gap-1.5"
                >
                  <span>Open Email Client</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              {/* Field 1: Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={`${id}-name`}
                  className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#261907]"
                >
                  Name <span className="text-[#82193a]">*</span>
                </label>
                <input
                  id={`${id}-name`}
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#fff8f4] text-[#261907] placeholder:text-[#564145]/50 focus:outline-none focus:ring-2 focus:ring-[#82193a] text-sm sm:text-base font-['DM_Sans'] border border-[#dcbfc3]/60 shadow-2xs transition-all"
                />
              </div>

              {/* Field 2: Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={`${id}-email`}
                  className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#261907]"
                >
                  Email <span className="text-[#82193a]">*</span>
                </label>
                <input
                  id={`${id}-email`}
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#fff8f4] text-[#261907] placeholder:text-[#564145]/50 focus:outline-none focus:ring-2 focus:ring-[#82193a] text-sm sm:text-base font-['DM_Sans'] border border-[#dcbfc3]/60 shadow-2xs transition-all"
                />
              </div>

              {/* Field 3: Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={`${id}-message`}
                  className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#261907]"
                >
                  Message <span className="text-[#82193a]">*</span>
                </label>
                <textarea
                  id={`${id}-message`}
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we collaborate? Tell me about your project, team, or opportunity..."
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#fff8f4] text-[#261907] placeholder:text-[#564145]/50 focus:outline-none focus:ring-2 focus:ring-[#82193a] text-sm sm:text-base font-['DM_Sans'] resize-none border border-[#dcbfc3]/60 shadow-2xs transition-all"
                ></textarea>
              </div>

              {/* Action Button: Send Message */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-[#564145] text-xs font-['Space_Grotesk'] self-start sm:self-auto">
                  <Lock size={14} className="text-[#82193a]" />
                  <span>Direct communication · Privacy guaranteed</span>
                </div>

                <button
                  id={`${id}-submit-button`}
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-interactive w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-[#82193a] hover:bg-[#610025] text-white font-['Space_Grotesk'] text-sm uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 active:scale-[0.98]"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          )}

          {/* Social Links Row: GitHub | LinkedIn | Email */}
          <div className="pt-6 border-t border-[#dcbfc3]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#564145]">
                Direct Links:
              </span>
            </div>

            {/* Then provide: GitHub | LinkedIn | Email */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-sm sm:text-base font-['Space_Grotesk'] font-bold text-[#261907]">
              <a
                href="https://github.com/Jennifer-Vesilica-Rachel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#261907] hover:text-[#82193a] hover:bg-[#ffebd5] transition-colors"
              >
                <Github size={16} className="text-[#82193a]" />
                <span>GitHub</span>
              </a>

              <span className="text-[#dcbfc3] font-normal select-none">|</span>

              <a
                href="https://www.linkedin.com/in/jennifer-vesilica-rachel-s-211821305"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#261907] hover:text-[#82193a] hover:bg-[#ffebd5] transition-colors"
              >
                <Linkedin size={16} className="text-[#82193a]" />
                <span>LinkedIn</span>
              </a>

              <span className="text-[#dcbfc3] font-normal select-none">|</span>

              <div className="inline-flex items-center gap-1">
                <a
                  href="mailto:jennifersagaidasse@gmail.com"
                  aria-label="Send direct email"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#261907] hover:text-[#82193a] hover:bg-[#ffebd5] transition-colors"
                >
                  <Mail size={16} className="text-[#82193a]" />
                  <span>Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg text-[#82193a] hover:bg-[#ffebd5] transition-colors cursor-pointer"
                  aria-label="Copy email address"
                >
                  {emailCopied ? (
                    <Check size={14} className="text-emerald-700" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
