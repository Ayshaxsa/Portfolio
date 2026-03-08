import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certificates } from '../data/portfolio';

export default function CertificatesView() {
  return (
    <div className="space-y-6">
      <p className="text-purple-300/80 text-sm">
        Professional certifications and completed learning programs More to ADD.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all p-6 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-600/20 rounded-lg border border-purple-500/30 group-hover:bg-purple-600/30 transition-colors">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-purple-300/60 text-sm mb-3">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>
                <p className="text-purple-300/70 text-sm mb-4">
                  {cert.description}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
