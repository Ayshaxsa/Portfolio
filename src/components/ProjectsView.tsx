import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { projects, Project } from '../data/portfolio';

interface ProjectsViewProps {
  onProjectClick: (project: Project) => void;
}

export default function ProjectsView({ onProjectClick }: ProjectsViewProps) {
  return (
    <div className="space-y-6">
      <p className="text-purple-300/80 text-sm">
        A collection of my machine learning and computer vision projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onProjectClick(project)}
            className="group cursor-pointer bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden">
              <img
                src={project.screenshots[0]}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-block px-3 py-1 bg-purple-600/80 text-white text-xs rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                <Folder className="w-4 h-4" />
                {project.title}
              </h3>
              <p className="text-purple-300/60 text-sm line-clamp-2">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-slate-700/50 text-purple-200 text-xs rounded"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="px-2 py-1 text-purple-300/60 text-xs">
                    +{project.tools.length - 3} more
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 text-purple-400 text-sm group-hover:text-purple-300 transition-colors">
                <span>View Details</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
