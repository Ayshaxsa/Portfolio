import { motion } from 'framer-motion';
import { StickyNote, Tag, Calendar } from 'lucide-react';
import { notes } from '../data/portfolio';

export default function NotesView() {
  return (
    <div className="space-y-6">
      <p className="text-purple-300/80 text-sm">
        Quick notes and insights from my learning journey
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-xl border border-amber-500/30 p-6 shadow-lg relative overflow-hidden group hover:border-amber-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-2xl"></div>

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-amber-600/20 rounded-lg">
                  <StickyNote className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex items-center gap-1 text-amber-300/60 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{note.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-200 transition-colors">
                {note.title}
              </h3>

              <p className="text-purple-300/70 text-sm leading-relaxed mb-4">
                {note.content}
              </p>

              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-amber-600/20 border border-amber-500/30 text-amber-200 text-xs rounded"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
