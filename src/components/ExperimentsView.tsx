import { motion } from 'framer-motion';
import { Beaker, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { experiments } from '../data/portfolio';

export default function ExperimentsView() {
  const statusConfig = {
    'completed': {
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-500/30',
      label: 'Completed'
    },
    'in-progress': {
      icon: Clock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20',
      borderColor: 'border-yellow-500/30',
      label: 'In Progress'
    },
    'planned': {
      icon: Sparkles,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30',
      label: 'Planned'
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-purple-300/80 text-sm">
        Experimental ML projects and ongoing research
      </p>

      <div className="space-y-4">
        {experiments.map((experiment, index) => {
          const status = statusConfig[experiment.status];
          const StatusIcon = status.icon;

          return (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg border border-purple-500/30">
                  <Beaker className="w-6 h-6 text-purple-400" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {experiment.title}
                    </h3>
                    <div className={`flex items-center gap-2 px-3 py-1 ${status.bgColor} border ${status.borderColor} rounded-full`}>
                      <StatusIcon className={`w-4 h-4 ${status.color}`} />
                      <span className={`text-xs font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    </div>
                  </div>

                  <p className="text-purple-300/70 text-sm mb-4">
                    {experiment.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experiment.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-purple-200 text-xs rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
