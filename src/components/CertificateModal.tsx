import { useEffect, useState } from 'react';
import { CertificateItem } from '../types';
import { X, ZoomIn, ZoomOut, CheckCircle2, Printer } from 'lucide-react';
import UpturneCertificateDocument from './UpturneCertificateDocument';
import AravindCertificateDocument from './AravindCertificateDocument';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="certificate-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#261907]/75 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'certificate-modal-backdrop') {
          onClose();
        }
      }}
    >
      <div
        className="relative max-w-4xl w-full bg-[#ffffff] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-[#dcbfc3]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-3.5 sm:p-4 md:p-5 bg-[#ffebd5] border-b border-[#dcbfc3]/30 flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] font-bold text-[#82193a] uppercase tracking-widest truncate">
              {certificate.issuer}
            </span>
            <h3 className="font-['Epilogue'] text-sm sm:text-base md:text-lg text-[#261907] font-bold leading-tight mt-0.5 truncate">
              {certificate.title}
            </h3>
            <span className="font-['Space_Grotesk'] text-[11px] sm:text-xs text-[#564145] mt-0.5 truncate">
              {certificate.refNo} • Verified {certificate.date}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="p-1.5 sm:p-2 rounded-lg bg-[#ffe4c6] hover:bg-[#82193a] text-[#610025] hover:text-[#ffffff] transition-colors flex items-center gap-1 font-['Space_Grotesk'] text-xs font-semibold cursor-pointer"
              title="Print Certificate"
            >
              <Printer size={15} />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-1.5 sm:p-2 rounded-lg bg-[#ffe4c6] hover:bg-[#82193a] text-[#610025] hover:text-[#ffffff] transition-colors flex items-center gap-1 font-['Space_Grotesk'] text-xs font-semibold cursor-pointer"
              title={isZoomed ? "Reset zoom" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut size={15} /> : <ZoomIn size={15} />}
              <span className="hidden sm:inline">{isZoomed ? "Fit" : "Zoom"}</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#ffe4c6] text-[#261907] hover:bg-[#82193a] hover:text-[#ffffff] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Certificate Display Canvas */}
        <div className="p-4 md:p-6 overflow-y-auto flex flex-col items-center justify-center bg-[#fff1e5] border-b border-[#dcbfc3]/20">
          <div className={`transition-all duration-300 ${isZoomed ? 'w-full max-w-none cursor-zoom-out' : 'max-w-2xl cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
            {certificate.id === 'upturne-cert' ? (
              <UpturneCertificateDocument compact={false} className="shadow-xl" />
            ) : (
              <AravindCertificateDocument compact={false} className="shadow-xl" />
            )}
          </div>
        </div>

        {/* Footer Meta & Signatories */}
        <div className="p-4 md:p-5 bg-[#fff8f4] flex flex-col gap-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase font-bold tracking-wider">
              {certificate.capstoneLabel}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs font-semibold">
              <CheckCircle2 size={13} className="text-[#80552f]" />
              {certificate.verificationBadge}
            </span>
          </div>

          <p className="font-['Epilogue'] text-sm md:text-base text-[#261907] font-semibold">
            {certificate.capstoneTitle}
          </p>

          <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145] leading-relaxed">
            {certificate.description}
          </p>

          <div className="pt-2 border-t border-[#dcbfc3]/30 text-xs font-['Space_Grotesk'] text-[#564145]">
            <strong className="text-[#261907]">Institutional Seal:</strong> {certificate.signatory}
          </div>
        </div>
      </div>
    </div>
  );
}
