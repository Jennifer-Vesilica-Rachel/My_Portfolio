import { CERTIFICATES } from '../data/portfolioData';
import UpturneCertificateDocument from './UpturneCertificateDocument';
import AravindCertificateDocument from './AravindCertificateDocument';
import {
  ShieldCheck,
  Maximize2,
  CheckCircle2,
  GraduationCap,
  Code,
  LineChart,
  Network,
  ArrowRight
} from 'lucide-react';

interface CertificationsViewProps {
  onOpenCertificate: (id: string) => void;
  onNavigate?: (path: any) => void;
}

export default function CertificationsView({ onOpenCertificate, onNavigate }: CertificationsViewProps) {

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-12 md:gap-16 w-full">
        {/* Section Header */}
        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                Credentials Archive
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-[#564145] font-semibold tracking-wider uppercase">
                Institutional Proofs • Vol. 01
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-xs text-[#82193a] flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#82193a] animate-pulse"></span>
              <span>Verified Cryptographic &amp; Institutional Signatures</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="font-['Epilogue'] text-3xl sm:text-4xl font-extrabold text-[#261907] tracking-tight max-w-2xl">
              Verified Credentials, Certifications &amp; Technical Endorsements
            </h1>
            <p className="font-['DM_Sans'] text-sm md:text-base text-[#564145] max-w-md leading-relaxed">
              Formal acknowledgments of on-premise healthcare technology deployment, commercial AI automation, and enterprise low-code systems engineering.
            </p>
          </div>
        </section>

        {/* Certificate Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="lg:col-span-6 flex flex-col rounded-2xl bg-[#fff1e5] p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#dcbfc3]/40 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#82193a] font-bold">
                    {cert.refNo}
                  </span>
                  <h2 className="font-['Epilogue'] text-lg font-bold text-[#261907] group-hover:text-[#82193a] transition-colors leading-tight mt-0.5">
                    {cert.issuer}
                  </h2>
                  <span className="font-['DM_Sans'] text-xs text-[#564145] mt-0.5">
                    {cert.subLocation}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ffe4c6] text-[#82193a] font-['Space_Grotesk'] text-xs font-bold shrink-0">
                  {cert.date}
                </span>
              </div>

              {/* Certificate Image Canvas */}
              <div
                className="relative overflow-hidden rounded-xl bg-[#ffebd5] mb-5 aspect-[4/3] flex items-center justify-center border border-[#dcbfc3]/40 shadow-inner cursor-pointer"
                onClick={() => onOpenCertificate(cert.id)}
              >
                {cert.id === 'upturne-cert' ? (
                  <div className="w-full h-full overflow-hidden flex items-start justify-center bg-white p-2">
                    <UpturneCertificateDocument compact={true} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] shadow-sm pointer-events-none" />
                  </div>
                ) : (
                  <div className="w-full h-full overflow-hidden flex items-start justify-center bg-[#fdfbf7] p-2">
                    <AravindCertificateDocument compact={true} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] shadow-sm pointer-events-none" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#261907]/20 via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCertificate(cert.id);
                  }}
                  className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-lg bg-[#ffffff]/95 backdrop-blur-sm text-[#82193a] font-['Space_Grotesk'] text-xs font-bold shadow-md flex items-center gap-1.5 hover:bg-[#82193a] hover:text-white transition-colors cursor-pointer"
                >
                  <Maximize2 size={14} />
                  <span>Inspect Certificate</span>
                </button>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 flex-grow">
                <div className="p-3.5 rounded-xl bg-[#ffebd5] flex flex-col gap-1 border border-[#dcbfc3]/30">
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#82193a] uppercase tracking-wide font-bold">
                    {cert.capstoneLabel}
                  </span>
                  <p className="font-['Epilogue'] text-sm font-bold text-[#261907]">
                    {cert.capstoneTitle}
                  </p>
                </div>
                <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Verified Signatory Footer */}
              <div className="mt-5 pt-3 border-t border-[#dcbfc3]/30 flex flex-wrap items-center justify-between gap-2 text-xs font-['Space_Grotesk'] text-[#564145]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#82193a]" />
                  <span>{cert.signatory.split('.')[0]}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#ffebd5] text-[#82193a] font-bold">
                  {cert.verificationBadge}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Academic & Low-Code Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Zoho Creator Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#ffebd5] p-6 md:p-8 flex flex-col justify-between shadow-sm border border-[#dcbfc3]/40">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                  Enterprise Low-Code
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#564145]">December 2023</span>
              </div>
              <h3 className="font-['Epilogue'] text-xl font-bold text-[#261907]">
                Zoho Creator Student Training Program
              </h3>
              <span className="font-['Space_Grotesk'] text-xs text-[#82193a] font-bold">
                Young Creators Initiative • Women's Engineering College
              </span>
              <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145] leading-relaxed">
                Comprehensive practical training program focused on architecting enterprise workflow automations, relational data modeling without legacy bottlenecks, and bespoke visual analytics dashboards.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="p-3 rounded-xl bg-[#ffffff] flex flex-col gap-1 border border-[#dcbfc3]/30">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#261907]">Workflow Engine</span>
                  <span className="font-['DM_Sans'] text-xs text-[#564145]">Deluge scripting &amp; logic branching</span>
                </div>
                <div className="p-3 rounded-xl bg-[#ffffff] flex flex-col gap-1 border border-[#dcbfc3]/30">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#261907]">Custom Dashboards</span>
                  <span className="font-['DM_Sans'] text-xs text-[#564145]">Real-time KPI metrics &amp; triggers</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#dcbfc3]/30 flex items-center justify-between text-xs font-['Space_Grotesk']">
              <span className="text-[#564145]">Status: Completed &amp; Verified</span>
              <span className="px-2.5 py-1 rounded bg-[#82193a] text-white font-bold">
                WEC • Zoho Verified
              </span>
            </div>
          </div>

          {/* Academic Foundation Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#fff1e5] p-6 md:p-8 flex flex-col justify-between shadow-sm border border-[#dcbfc3]/40">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                    Academic Foundation
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#564145]">Puducherry, India</span>
                </div>
                <span className="font-['Space_Grotesk'] text-xs text-[#82193a] font-bold">2023 – 2027</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-['Epilogue'] text-xl font-bold text-[#261907]">
                  Women's Engineering College
                </h3>
                <span className="font-['Space_Grotesk'] text-xs text-[#564145] font-bold">
                  Undergraduate Scholar
                </span>
              </div>

              <p className="font-['DM_Sans'] text-base text-[#82193a] font-bold">
                B.Tech in Information Science and Engineering
              </p>

              <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145] leading-relaxed">
                Rigorous core curriculum in data structures, relational database design, statistical programming, and machine learning foundations. Combining academic inquiry with pragmatic, field-tested systems.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6 pt-3 border-t border-[#dcbfc3]/30">
              <div className="flex flex-col p-3 rounded-xl bg-[#ffffff] border border-[#dcbfc3]/30">
                <span className="font-['Space_Grotesk'] text-[10px] text-[#564145] uppercase">Specialization</span>
                <span className="font-['Epilogue'] text-sm font-bold text-[#261907] mt-1">AI &amp; Data</span>
                <span className="font-['DM_Sans'] text-[11px] text-[#564145]">Predictive Models</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-[#ffffff] border border-[#dcbfc3]/30">
                <span className="font-['Space_Grotesk'] text-[10px] text-[#564145] uppercase">Methodology</span>
                <span className="font-['Epilogue'] text-sm font-bold text-[#261907] mt-1">Full-Stack</span>
                <span className="font-['DM_Sans'] text-[11px] text-[#564145]">React + Cloud</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-[#ffffff] border border-[#dcbfc3]/30">
                <span className="font-['Space_Grotesk'] text-[10px] text-[#564145] uppercase">Location</span>
                <span className="font-['Epilogue'] text-sm font-bold text-[#261907] mt-1">Pondicherry</span>
                <span className="font-['DM_Sans'] text-[11px] text-[#564145]">On-Campus Core</span>
              </div>
            </div>
          </div>
        </section>

        {/* Competency Matrix & Tool Proficiency */}
        <section className="rounded-3xl bg-[#ffebd5] p-6 md:p-8 flex flex-col gap-6 shadow-sm border border-[#dcbfc3]/40">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-2 border-b border-[#dcbfc3]/30">
            <div>
              <span className="px-2.5 py-1 rounded bg-[#ffdcc2] text-[#2e1500] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                Technical Vector
              </span>
              <h2 className="font-['Epilogue'] text-xl md:text-2xl font-bold text-[#261907] mt-2">
                Competency Matrix &amp; Tool Proficiency
              </h2>
            </div>
            <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145] max-w-md">
              Calibrated across actual codebases, healthcare indoor mapping implementations, and multi-threaded analytical pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core Languages */}
            <div className="flex flex-col gap-4 p-5 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/30">
              <div className="flex items-center gap-2 text-[#82193a]">
                <Code size={20} />
                <h3 className="font-['Epilogue'] text-base font-bold text-[#261907]">Core Languages</h3>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex justify-between font-['Space_Grotesk'] text-xs mb-1">
                    <span className="text-[#261907] font-semibold">Python (Pandas, Scikit)</span>
                    <span className="text-[#82193a] font-bold">92%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#ffe4c6] overflow-hidden">
                    <div className="h-full bg-[#82193a] rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-['Space_Grotesk'] text-xs mb-1">
                    <span className="text-[#261907] font-semibold">Java (OOP, Data Structures)</span>
                    <span className="text-[#82193a] font-bold">85%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#ffe4c6] overflow-hidden">
                    <div className="h-full bg-[#82193a] rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-['Space_Grotesk'] text-xs mb-1">
                    <span className="text-[#261907] font-semibold">SQL (MySQL &amp; Queries)</span>
                    <span className="text-[#82193a] font-bold">88%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#ffe4c6] overflow-hidden">
                    <div className="h-full bg-[#82193a] rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-['Space_Grotesk'] text-xs mb-1">
                    <span className="text-[#261907] font-semibold">R (Statistical Computation)</span>
                    <span className="text-[#82193a] font-bold">78%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#ffe4c6] overflow-hidden">
                    <div className="h-full bg-[#610025] rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Frameworks */}
            <div className="flex flex-col gap-4 p-5 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/30">
              <div className="flex items-center gap-2 text-[#80552f]">
                <LineChart size={20} />
                <h3 className="font-['Epilogue'] text-base font-bold text-[#261907]">Data &amp; Frameworks</h3>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex justify-between font-['Space_Grotesk'] text-xs mb-1">
                    <span className="text-[#261907] font-semibold">NumPy &amp; Matplotlib</span>
                    <span className="text-[#80552f] font-bold">90%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#ffe4c6] overflow-hidden">
                    <div className="h-full bg-[#80552f] rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-['Space_Grotesk'] text-xs mb-1">
                    <span className="text-[#261907] font-semibold">Scikit-learn</span>
                    <span className="text-[#80552f] font-bold">82%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#ffe4c6] overflow-hidden">
                    <div className="h-full bg-[#80552f] rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-['Space_Grotesk'] text-xs mb-1">
                    <span className="text-[#261907] font-semibold">Power BI &amp; Excel Sheets</span>
                    <span className="text-[#80552f] font-bold">89%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#ffe4c6] overflow-hidden">
                    <div className="h-full bg-[#80552f] rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-['Space_Grotesk'] text-xs mb-1">
                    <span className="text-[#261907] font-semibold">React.js &amp; Tailwind CSS</span>
                    <span className="text-[#82193a] font-bold">91%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#ffe4c6] overflow-hidden">
                    <div className="h-full bg-[#82193a] rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Systems & Platforms */}
            <div className="flex flex-col gap-4 p-5 rounded-2xl bg-[#ffffff] shadow-sm border border-[#dcbfc3]/30">
              <div className="flex items-center gap-2 text-[#3f281f]">
                <Network size={20} />
                <h3 className="font-['Epilogue'] text-base font-bold text-[#261907]">Systems &amp; Platforms</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  'MySQL Workbench',
                  'Eclipse IDE',
                  'RStudio',
                  'Netlify & Bolt',
                  'IDLE',
                  'Zoho Creator'
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded bg-[#ffebd5] text-[#261907] font-['Space_Grotesk'] text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-[#fff1e5] flex flex-col gap-1 mt-auto border border-[#dcbfc3]/30">
                <span className="font-['Space_Grotesk'] text-[11px] text-[#82193a] uppercase font-bold">
                  Soft Skills Portfolio
                </span>
                <p className="font-['DM_Sans'] text-xs text-[#564145]">
                  Problem-Solving • Cross-Functional Team Leadership • Rapid Adaptability • Clear Verbal &amp; Analytical Communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Prompt to Contact */}
        {onNavigate && (
          <div className="p-6 md:p-8 rounded-2xl bg-[#fff1e5] border border-[#dcbfc3]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="font-['Space_Grotesk'] text-xs text-[#82193a] uppercase font-bold tracking-wider">
                Direct Inquiries
              </span>
              <h3 className="font-['Epilogue'] text-lg md:text-xl font-bold text-[#261907]">
                Want to verify credentials or discuss engineering opportunities?
              </h3>
              <p className="font-['DM_Sans'] text-xs md:text-sm text-[#564145]">
                Connect directly through the dedicated contact portal for internship or project discussions.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-[#82193a] hover:bg-[#610025] text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Go to Contact Page</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
