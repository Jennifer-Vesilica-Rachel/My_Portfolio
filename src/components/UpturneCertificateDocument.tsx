import { Phone, Mail, Globe } from 'lucide-react';

interface UpturneCertificateDocumentProps {
  compact?: boolean;
  className?: string;
}

export default function UpturneCertificateDocument({ compact = false, className = '' }: UpturneCertificateDocumentProps) {
  return (
    <div
      id="upturne-official-certificate-document"
      className={`relative w-full bg-[#ffffff] text-[#1a1a1a] shadow-lg overflow-hidden flex flex-col font-sans select-text border border-[#e5e7eb] ${
        compact ? 'text-[9px] p-4 sm:p-5 rounded-lg' : 'text-xs sm:text-sm p-6 sm:p-10 md:p-12 rounded-xl max-w-3xl'
      } ${className}`}
      style={{
        aspectRatio: compact ? undefined : '1 / 1.414',
        minHeight: compact ? '260px' : undefined
      }}
    >
      {/* Decorative Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f36f21] via-[#ff8838] to-[#f36f21]" />

      {/* Header with Upturne Software & Services Logo */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-300">
        <div className="flex items-center gap-3">
          {/* Official Upturne Geometric Orange Logo */}
          <div className={`${compact ? 'w-8 h-8' : 'w-11 h-11'} shrink-0 relative flex items-center justify-center`}>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-xs"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left polygonal facet */}
              <polygon
                points="12,8 46,24 46,92 12,76"
                fill="#f36518"
              />
              {/* Right polygonal facet */}
              <polygon
                points="46,24 88,8 88,76 46,92"
                fill="#ff7c2a"
              />
              {/* Inner geometric accent cutout */}
              <polygon
                points="46,40 68,30 68,68 46,78"
                fill="#ffffff"
                fillOpacity="0.95"
              />
              <polygon
                points="30,48 46,56 46,78 30,68"
                fill="#f15a0c"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span
              className={`font-['Epilogue'] font-extrabold tracking-tight text-[#141414] leading-none ${
                compact ? 'text-base' : 'text-2xl sm:text-3xl'
              }`}
            >
              UPTURNE
            </span>
            <span
              className={`font-['Space_Grotesk'] font-medium text-[#4b5563] uppercase ${
                compact ? 'text-[7px] tracking-widest mt-0.5' : 'text-[10px] sm:text-xs tracking-[0.22em] mt-1'
              }`}
            >
              SOFTWARE &amp; SERVICES
            </span>
          </div>
        </div>

        {/* Verification Watermark Badge in Header */}
        {!compact && (
          <div className="hidden sm:flex flex-col items-end">
            <span className="font-['Space_Grotesk'] text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
              Verification Code
            </span>
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#f36518]">
              UPT-INT-2026-0714
            </span>
          </div>
        )}
      </div>

      {/* Certificate Title */}
      <div className={`${compact ? 'my-3' : 'my-5 sm:my-6'} text-center`}>
        <h2
          className={`font-['Epilogue'] font-bold uppercase tracking-wider text-[#111827] ${
            compact ? 'text-xs' : 'text-base sm:text-lg md:text-xl'
          }`}
        >
          INTERNSHIP COMPLETION CERTIFICATE
        </h2>
      </div>

      {/* Date Header */}
      <div className="flex justify-end mb-3">
        <span className={`font-['Space_Grotesk'] font-semibold text-gray-700 ${compact ? 'text-[9px]' : 'text-xs sm:text-sm'}`}>
          14-07-2026
        </span>
      </div>

      {/* Salutation */}
      <div className={`${compact ? 'mb-2' : 'mb-3'}`}>
        <p className={`font-['Epilogue'] font-bold text-[#111827] ${compact ? 'text-[10px]' : 'text-sm sm:text-base'}`}>
          Dear Jennifer,
        </p>
      </div>

      {/* Body Content */}
      <div className={`flex flex-col ${compact ? 'gap-1.5' : 'gap-3 sm:gap-3.5'} text-[#1f2937] leading-relaxed font-['DM_Sans'] flex-grow`}>
        <p>
          This is to formally acknowledge and appreciate the successful completion of your internship with <strong className="text-[#111827] font-semibold">Upturne Software and Services</strong> as a <strong className="text-[#111827] font-semibold">Web Development &amp; AI Automation Intern</strong>.
        </p>

        <div>
          <p>
            You successfully completed your internship from <strong>14 June 2026 to 13 July 2026</strong> at our on-premise internship location at:
          </p>
          <div className={`mt-1 pl-3 sm:pl-4 border-l-2 border-[#f36518] text-gray-700 font-['Space_Grotesk'] ${compact ? 'text-[8px] py-0.5' : 'text-xs sm:text-sm py-1'}`}>
            <p className="font-semibold text-[#111827]">Pulsebay Coworking, 3rd Floor,</p>
            <p>Fun Center, 64, South Boulevard,</p>
            <p>MG Road Area, Puducherry – 605001.</p>
          </div>
        </div>

        <p className={compact ? 'line-clamp-2' : ''}>
          During the internship, you received hands-on exposure to web application development, AI automations, and real-world software development practices. You had the opportunity to work on live projects, understand development workflows, collaborate with the team, and gain practical knowledge of technologies and processes used in the industry.
        </p>

        <p className={compact ? 'hidden sm:block' : ''}>
          As part of the internship, you were also provided guidance and support in participating in hackathon activities, giving you additional exposure to problem-solving, innovation, teamwork, and developing solutions within a time-bound environment.
        </p>

        <p className={compact ? 'hidden' : ''}>
          Throughout the internship period, you demonstrated a willingness to learn and gain practical experience. We appreciate your participation, efforts, and contributions during the internship.
        </p>

        <p className={compact ? 'hidden md:block' : ''}>
          We hope that the knowledge and experience gained during your time with Upturne Software and Services will contribute positively to your future academic and professional career.
        </p>

        <p>
          We wish you all the very best for your future endeavors and continued success.
        </p>
      </div>

      {/* Closing & Signatory Block */}
      <div className={`mt-4 sm:mt-6 pt-2 flex flex-col ${compact ? 'gap-1' : 'gap-2'}`}>
        <p className={`font-['DM_Sans'] text-gray-800 ${compact ? 'text-[9px]' : 'text-xs sm:text-sm'}`}>
          Warm Regards,
        </p>

        {/* Authentic Signature Vector */}
        <div className={`${compact ? 'h-8 w-28' : 'h-12 sm:h-14 w-36 sm:w-44'} relative my-0.5`}>
          <svg
            viewBox="0 0 200 65"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Signature stroke in dark blue-black ink */}
            <path
              d="M 12 45 C 18 28, 22 12, 32 15 C 40 18, 36 38, 28 42 C 22 46, 32 46, 44 38 C 50 34, 54 26, 62 25 C 68 24, 66 42, 60 46 C 56 48, 62 48, 70 38 C 76 30, 84 18, 92 20 C 98 22, 92 40, 86 45 C 80 50, 96 48, 110 32 C 118 22, 126 12, 134 16 C 142 20, 136 40, 130 46 M 15 54 C 45 53, 95 55, 148 50 C 158 49, 172 47, 185 45"
              stroke="#1c1917"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <h3 className={`font-['Epilogue'] font-extrabold uppercase tracking-wide text-[#111827] leading-tight ${compact ? 'text-[9px]' : 'text-xs sm:text-sm'}`}>
            SOPHAS SAMUEL S
          </h3>
          <p className={`font-['Space_Grotesk'] text-gray-700 font-medium ${compact ? 'text-[8px]' : 'text-xs'}`}>
            Founder &amp; CEO
          </p>
          <a
            href="https://www.upturne.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 font-['Space_Grotesk'] text-[#f36518] hover:underline font-semibold mt-0.5 ${compact ? 'text-[8px]' : 'text-xs'}`}
          >
            <Globe size={compact ? 10 : 13} />
            <span>www.upturne.com</span>
          </a>
        </div>
      </div>

      {/* Official Bottom Banner with Contact Information */}
      <div
        className={`mt-4 sm:mt-6 -mx-4 sm:-mx-10 md:-mx-12 -mb-4 sm:-mb-10 md:-mb-12 bg-gradient-to-r from-[#f36518] to-[#ff7e2d] text-white flex items-center justify-between font-['Space_Grotesk'] font-medium ${
          compact ? 'px-3 py-1.5 text-[8px]' : 'px-6 sm:px-10 py-2.5 sm:py-3 text-[11px] sm:text-xs'
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Phone size={compact ? 10 : 14} className="shrink-0" />
          <a href="tel:+916374125104" className="hover:underline">
            +91 - 6374125104
          </a>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Mail size={compact ? 10 : 14} className="shrink-0" />
          <a href="mailto:contact@upturne.com" className="hover:underline">
            contact@upturne.com
          </a>
        </div>

        <span className="opacity-90 font-semibold">Pg No. 1</span>
      </div>
    </div>
  );
}
