import { useState, useEffect } from 'react';
import WorkspaceScene from './components/WorkspaceScene';
import ContentModal from './components/ContentModal';
import ProjectsView from './components/ProjectsView';
import ProjectDetail from './components/ProjectDetail';
import CertificatesView from './components/CertificatesView';
import ExperimentsView from './components/ExperimentsView';
import NotesView from './components/NotesView';
import ResumeView from './components/ResumeView';
import TechSwagView from './components/TechSwagView';
import BootScreen from './components/BootScreen';
import { Project } from './data/portfolio';
import WhatNextView from './components/WhatNextView';
import { whatNext } from './data/portfolio';

type Section =
  | 'laptop'
  | 'bookshelf'
  | 'whiteboard'
  | 'drawer'
  | 'shelf'
  | 'notebook'
  | 'girl'
  | null;

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showConnectPopup, setShowConnectPopup] = useState(false); // new

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleObjectClick = (object: string) => {
    if (object === "connect") {
      setShowConnectPopup(prev => !prev); // toggle small popup
      return;
    }

    // Close connect popup if other object clicked
    setShowConnectPopup(false);
    setActiveSection(object as Section);
    setSelectedProject(null);
  };

  const handleCloseModal = () => {
    setActiveSection(null);
    setSelectedProject(null);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  const getSectionTitle = () => {
    if (selectedProject) return selectedProject.title;

    switch (activeSection) {
      case 'laptop':
        return 'Projects';
      case 'bookshelf':
        return 'Certificates & Programs';
      case 'whiteboard':
        return 'ML Experiments';
      case 'drawer':
        return 'Resume';
      case 'shelf':
        return 'Tech Swag & Events';
      case 'notebook':
        return 'Learning Notes';
      case 'girl':
        return "What's Next";
      default:
        return '';
    }
  };

  const renderContent = () => {
    if (selectedProject) {
      return (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackToProjects}
        />
      );
    }

    switch (activeSection) {
      case 'laptop':
        return <ProjectsView onProjectClick={handleProjectClick} />;
      case 'bookshelf':
        return <CertificatesView />;
      case 'whiteboard':
        return <ExperimentsView />;
      case 'drawer':
        return <ResumeView />;
      case 'shelf':
        return <TechSwagView />;
      case 'notebook':
        return <NotesView />;
      case 'girl':
        return <WhatNextView items={whatNext} />;
      default:
        return null;
    }
  };

  if (loading) {
    return <BootScreen />;
  }

  return (
    <>
      <WorkspaceScene onObjectClick={handleObjectClick} />

      {/* Main modal for other sections */}
      <ContentModal
        isOpen={activeSection !== null}
        onClose={handleCloseModal}
        title={getSectionTitle()}
      >
        {renderContent()}
      </ContentModal>

      {/* Small social popup for hand */}
      {showConnectPopup && (
        <div className="absolute right-10 bottom-48 w-40 bg-slate-800 rounded-xl p-4 shadow-2xl flex flex-col gap-3 items-center z-50">
          <a
            href="https://www.linkedin.com/in/ayeshaxsa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ayeshaxsa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:ayesha.sa4c@gmail.com"
            className="text-red-400 hover:underline"
          >
            Email
          </a>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.4);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.6);
        }
      `}</style>
    </>
  );
}

export default App;