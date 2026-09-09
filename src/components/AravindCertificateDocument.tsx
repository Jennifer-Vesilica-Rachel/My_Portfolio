import { Award, ShieldCheck, MapPin, Building2 } from 'lucide-react';

interface AravindCertificateDocumentProps {
  compact?: boolean;
  className?: string;
}

export default function AravindCertificateDocument({ compact = false, className = '' }: AravindCertificateDocumentProps) {
  return (
    <div
      id="aravind-official-certificate-document"
      className={`relative w-full bg-[#fdfbf7] text-[#1c1917] shadow-lg overflow-hidden flex flex-col font-serif select-text border-4 border-[#2b4c7e]/20 ${
        compact ? 'text-[9px] p-4 sm:p-5 rounded-lg' : 'text-xs sm:text-sm p-6 sm:p-10 md:p-12 rounded-xl max-w-3xl'
      } ${className}`}
      style={{
        aspectRatio: compact ? undefined : '1 / 1.414',
        minHeight: compact ? '260px' : undefined
      }}
    >
      {/* Decorative Ornate Double Border */}
      <div className="absolute inset-1.5 border border-[#8b6f4e]/40 pointer-events-none rounded" />
      <div className="absolute inset-2.5 border border-[#2b4c7e]/20 pointer-events-none rounded" />

      {/* Watermark Background Seal */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-[#2b4c7e] fill-current">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="8" fill="none" />
          <path d="M100 30 L115 75 L165 75 L125 105 L140 150 L100 120 L60 150 L75 105 L35 75 L85 75 Z" />
        </svg>
      </div>

      {/* Header with Hospital Emblem & Credentials */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-[#8b6f4e]/30 relative z-10">
        <div className="flex items-center gap-3">
          {/* Official Healthcare Cross / Lamp Vector Emblem */}
          <div className={`${compact ? 'w-8 h-8' : 'w-12 h-12'} shrink-0 rounded-full bg-[#1e3a5f] text-[#f5d061] flex items-center justify-center shadow-xs border border-[#8b6f4e]`}>
            <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 fill-current">
              {/* Traditional Medical Caduceus / Eye Motif */}
              <circle cx="50" cy="50" r="44" stroke="#f5d061" strokeWidth="3" fill="none" />
              <path d="M50 20 C32 20 20 40 20 50 C20 60 32 80 50 80 C68 80 80 60 80 50 C80 40 68 20 50 20 Z" fill="none" stroke="#f5d061" strokeWidth="3" />
              <circle cx="50" cy="50" r="15" fill="#f5d061" />
              <circle cx="50" cy="50" r="6" fill="#1e3a5f" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span
              className={`font-serif font-bold tracking-wider text-[#1e3a5f] uppercase leading-none ${
                compact ? 'text-xs' : 'text-lg sm:text-xl'
              }`}
            >
              ARAVIND EYE HOSPITAL
            </span>
            <span
              className={`font-sans tracking-wide text-[#8b6f4e] font-semibold uppercase mt-0.5 ${
                compact ? 'text-[8px]' : 'text-[11px] sm:text-xs'
              }`}
            >
              &amp; Postgraduate Institute of Ophthalmology
            </span>
            <span className={`font-sans text-[#57534e] ${compact ? 'text-[7px]' : 'text-[10px]'} mt-0.5`}>
              Cuddalore Main Road, Thavalakuppam, Puducherry - 605 007, India • Governed by Govel Trust
            </span>
          </div>
        </div>

        {/* Verification Pill */}
        <div className="hidden sm:flex flex-col items-end shrink-0">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1e3a5f]/10 text-[#1e3a5f] font-sans font-semibold text-[10px] border border-[#1e3a5f]/20">
            <ShieldCheck size={12} className="text-[#1e3a5f]" />
            <span>Verified Clinical Folio</span>
          </span>
          <span className="font-sans text-[10px] text-[#78716c] mt-1">Ref: AEH-INT-2025</span>
        </div>
      </div>

      {/* Certificate Title */}
      <div className={`text-center relative z-10 ${compact ? 'my-2.5' : 'my-4 sm:my-6'}`}>
        <span className={`font-sans uppercase tracking-[0.2em] font-semibold text-[#8b6f4e] ${compact ? 'text-[8px]' : 'text-[10px] sm:text-xs'}`}>
          Office of Clinical Technology &amp; Healthcare Administration
        </span>
        <h2
          className={`font-serif font-bold tracking-wide text-[#1e3a5f] uppercase mt-1 ${
            compact ? 'text-xs sm:text-sm' : 'text-lg sm:text-2xl'
          }`}
        >
          Internship Completion Certificate
        </h2>
        <div className="w-20 h-0.5 bg-[#8b6f4e] mx-auto mt-1" />
      </div>

      {/* Document Body */}
      <div className={`flex-1 flex flex-col justify-center leading-relaxed text-[#292524] relative z-10 ${compact ? 'space-y-1.5' : 'space-y-3 sm:space-y-4'}`}>
        <p className="font-sans text-center uppercase tracking-widest font-semibold text-[#57534e]">
          TO WHOMSOEVER IT MAY CONCERN
        </p>

        <p className="text-justify font-serif">
          This is to certify that <strong className="text-[#1e3a5f] font-bold">Ms. JENNIFER VESILICA RACHEL S</strong> (Registration No: <span className="font-sans font-medium">23IT1024</span>), student of B.Tech in Information Technology from <strong className="text-[#1e3a5f]">Puducherry Technological University</strong>, has satisfactorily completed her clinical engineering internship at Aravind Eye Hospital &amp; Postgraduate Institute of Ophthalmology, Puducherry from <span className="font-sans font-semibold">09.06.2025 to 15.07.2025</span>.
        </p>

        <div className={`rounded bg-[#f5efe6] border border-[#8b6f4e]/30 text-center ${compact ? 'p-2' : 'p-3 sm:p-4'}`}>
          <span className="font-sans text-[10px] uppercase tracking-wider text-[#8b6f4e] font-bold block mb-0.5">
            Key Capstone Research &amp; Implementation
          </span>
          <p className="font-serif italic font-bold text-[#1e3a5f]">
            “Enhancing Patient Experience through QR based Smart Navigation &amp; Support Analysis”
          </p>
        </div>

        <p className="text-justify font-serif">
          During her internship, she actively observed clinical and operational protocols across outpatient departments, retina services, and diagnostic centers. She designed and deployed a QR-guided indoor navigation system that effectively resolved patient transit bottlenecks, conducted call-center capacity analyses, and formulated recommendations for digital medical records tracking.
        </p>

        <p className="font-serif italic text-[#44403c]">
          Her conduct, analytical problem-solving capability, and devotion to healthcare delivery during the internship tenure were exemplary. We wish her continued excellence in all future professional endeavors.
        </p>
      </div>

      {/* Signatures & Seal Footer */}
      <div className={`pt-3 border-t border-[#8b6f4e]/30 flex items-end justify-between relative z-10 ${compact ? 'mt-2' : 'mt-4 sm:mt-6'}`}>
        <div className="flex flex-col">
          <span className="font-sans text-[10px] text-[#78716c]">Date: 15.07.2025</span>
          <span className="font-sans text-[10px] text-[#78716c]">Place: Puducherry</span>
          <div className="flex items-center gap-1 text-[9px] text-[#1e3a5f] font-sans font-medium mt-1">
            <Building2 size={11} />
            <span>Govel Trust Healthcare Division</span>
          </div>
        </div>

        {/* Embossed Vector Seal */}
        <div className="flex flex-col items-center">
          <div className={`${compact ? 'w-10 h-10' : 'w-14 h-14'} rounded-full border-2 border-dashed border-[#8b6f4e] flex flex-col items-center justify-center text-[#8b6f4e] bg-[#f5efe6]/70`}>
            <Award size={compact ? 14 : 18} />
            <span className="font-sans text-[7px] uppercase tracking-tighter font-bold">Verified</span>
          </div>
          <span className="font-sans text-[8px] text-[#78716c] uppercase tracking-widest mt-1">Official Seal</span>
        </div>

        {/* Signatory */}
        <div className="text-right flex flex-col items-end">
          <div className="font-serif italic text-sm text-[#1e3a5f] pb-1 border-b border-[#1c1917]/30 min-w-[140px] text-right font-bold">
            R. Venkatesh
          </div>
          <span className="font-sans font-bold text-[#1e3a5f] text-[10px] sm:text-[11px] uppercase mt-0.5">
            Dr. R. Venkatesh, D.O, DNB
          </span>
          <span className="font-sans text-[9px] text-[#57534e]">
            Chief Medical Officer
          </span>
          <span className="font-sans text-[8px] text-[#78716c]">
            Aravind Eye Hospital, Pondicherry
          </span>
        </div>
      </div>
    </div>
  );
}
