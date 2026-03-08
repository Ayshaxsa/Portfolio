import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, X } from 'lucide-react';
import { techSwag } from '../data/portfolio';

export default function TechSwagView() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const colors = [
    'from-blue-900/30 to-blue-800/30 border-blue-500/30',
    'from-green-900/30 to-green-800/30 border-green-500/30',
    'from-purple-900/30 to-purple-800/30 border-purple-500/30',
    'from-red-900/30 to-red-800/30 border-red-500/30'
  ];

  return (
    <div className="space-y-6 relative">
      <p className="text-purple-300/80 text-sm">
        Memories from tech events, hackathons, and conferences
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techSwag.map((swag, index) => (
          <motion.div
            key={swag.id}
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${colors[index % colors.length]} rounded-xl border p-6 shadow-lg group hover:scale-105 transition-transform`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {swag.name}
                  </h3>

                  <div className="space-y-1 text-sm text-purple-300/70 mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{swag.event}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{swag.year}</span>
                    </div>
                  </div>

                  <p className="text-purple-300/60 text-sm mb-3">
                    {swag.description}
                  </p>
                </div>
              </div>

              {/* Screenshots gallery */}
              {swag.screenshots && swag.screenshots.length > 0 && (
                <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-200">
                  {swag.screenshots.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${swag.name} screenshot ${idx + 1}`}
                      className="w-40 h-40 object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setLightboxImage(img)}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative">
            <img src={lightboxImage} alt="Enlarged swag" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl" />
            <button
              className="absolute top-2 right-2 text-white bg-black/40 rounded-full p-1 hover:bg-black/70 transition"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}