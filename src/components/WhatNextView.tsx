import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type WhatNextItem = {
  id: string;
  title: string;
  description: string;
};

interface Props {
  items: WhatNextItem[];
}

export default function WhatNextView({ items }: Props) {
  return (
    <div className="space-y-6">
      <p className="text-purple-300/80 text-sm">
        Things I'm planning to explore next
      </p>

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/60
            border border-purple-500/20 hover:border-purple-500/40
            rounded-xl p-6 transition-all group"
          >
            <div className="flex items-start gap-4">
              
              {/* Icon */}
              <div className="p-3 bg-purple-600/20 rounded-lg border border-purple-500/30">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-purple-300/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}