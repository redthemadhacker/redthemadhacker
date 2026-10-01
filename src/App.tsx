import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { BuildsSection } from './components/BuildsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ConnectionPortsSection } from './components/ConnectionPortsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';
import { ArchivedNoticeModal } from './components/ArchivedNoticeModal';
import { EncryptedVoiceModal } from './components/EncryptedVoiceModal';
import { PageId } from './components/PageNavBar';
import { Project } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [archivedModalProject, setArchivedModalProject] = useState<Project | null>(null);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (['builds', 'training', 'credentials'].includes(hash)) {
        setCurrentPage('training' === hash || 'credentials' === hash ? 'training' : 'builds');
      } else if (['experience', 'work'].includes(hash)) {
        setCurrentPage('experience');
      } else if (['connection', 'ports', 'contact'].includes(hash)) {
        setCurrentPage('connection');
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut '~' or '`' to open terminal
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col selection:bg-[#ff1a2a]/30 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Unique Page View */}
      <main className="flex-1 flex flex-col justify-start">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />
        )}

        {currentPage === 'builds' && (
          <BuildsSection
            onSelectProject={(project) => {
              if (project.isArchived) {
                setArchivedModalProject(project);
              } else {
                setSelectedProject(project);
              }
            }}
            onNavigate={navigateTo}
            onOpenTerminal={() => setIsTerminalOpen(true)}
            onOpenArchivedNotice={(project) => setArchivedModalProject(project)}
          />
        )}

        {currentPage === 'training' && (
          <CredentialsSection
            onNavigate={navigateTo}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />
        )}

        {currentPage === 'experience' && (
          <ExperienceSection
            onNavigate={navigateTo}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />
        )}

        {currentPage === 'connection' && (
          <ConnectionPortsSection
            onNavigate={navigateTo}
            onOpenTerminal={() => setIsTerminalOpen(true)}
            onOpenVoiceModal={() => setIsVoiceModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Project Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Academic Project Disclaimer Modal for HZHQ (matching image.png) */}
      <ArchivedNoticeModal
        isOpen={Boolean(archivedModalProject)}
        onClose={() => setArchivedModalProject(null)}
        projectTitle={archivedModalProject?.title || "HZHQ Audio Frequency Hub"}
        githubUrl={archivedModalProject?.githubUrl || "https://github.com/redthemadhacker"}
      />

      {/* Encrypted Voice Socket Modal */}
      <EncryptedVoiceModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onOpenDispatch={() => {
          navigateTo('connection');
          const dispatchEl = document.querySelector('form');
          dispatchEl?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Interactive Cyber CLI Shell */}
      <InteractiveTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={(page) => {
          navigateTo(page);
          setIsTerminalOpen(false);
        }}
      />
    </div>
  );
}
