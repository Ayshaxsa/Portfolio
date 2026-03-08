import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Lightbulb, Wrench } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </button>

      <div>
        <h1 className="text-3xl font-bold text-white mb-3">{project.title}</h1>
        <p className="text-purple-300/80 text-lg">{project.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {project.screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-video rounded-lg overflow-hidden border border-purple-500/20"
          >
            <img
              src={screenshot}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
        <p className="text-purple-300/70 leading-relaxed">{project.overview}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-purple-400" />
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-200 rounded-lg text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            Key Learnings
          </h2>
          <ul className="space-y-2">
            {project.learnings.map((learning, index) => (
              <li key={index} className="flex items-start gap-2 text-purple-300/70 text-sm">
                <span className="text-purple-400 mt-1">•</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
        >
          <ExternalLink className="w-5 h-5" />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}
