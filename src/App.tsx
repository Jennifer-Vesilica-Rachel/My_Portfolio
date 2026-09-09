import { useState, useEffect } from 'react';
import { NavPath } from './types';
import { CERTIFICATES } from './data/portfolioData';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutView from './components/AboutView';
import ExperienceView from './components/ExperienceView';
import ProjectsView from './components/ProjectsView';
import CertificationsView from './components/CertificationsView';
import ContactView from './components/ContactView';
import CertificateModal from './components/CertificateModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState<NavPath>('about');
  const [activeCertificateId, setActiveCertificateId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Handle URL hash changes or browser history if any
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPath;
      if (['about', 'experience', 'projects', 'certifications', 'contact'].includes(hash)) {
        setCurrentPath(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: NavPath) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCertificate = (id: string) => {
    setActiveCertificateId(id);
  };

  const handleCloseCertificate = () => {
    setActiveCertificateId(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f4] text-[#261907] selection:bg-[#ffd9de] selection:text-[#610025]">
      {/* Top Fixed Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentPath === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenCertificate={handleOpenCertificate}
          />
        )}

        {currentPath === 'experience' && (
          <ExperienceView
            onNavigate={handleNavigate}
            onOpenCertificate={handleOpenCertificate}
          />
        )}

        {currentPath === 'projects' && (
          <ProjectsView
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPath === 'certifications' && (
          <CertificationsView
            onOpenCertificate={handleOpenCertificate}
            onNavigate={handleNavigate}
          />
        )}

        {currentPath === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <CertificateModal
        certificate={CERTIFICATES.find((c) => c.id === activeCertificateId) || null}
        onClose={handleCloseCertificate}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
