import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Monitor, BookOpen, LayoutGrid as Layout, FileText, Package, Book } from 'lucide-react';
import picture from "../assets/picture.png";

interface WorkspaceSceneProps {
  onObjectClick: (object: string) => void;
}



export default function WorkspaceScene({ onObjectClick }: WorkspaceSceneProps) {
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center">
  <h1 className="text-3xl text-purple-400 font-mono">
    Hello, this is ayesha
    <span className="ml-1 animate-blink">|</span>
  </h1>
</div>
      {/* Star background */}
      <div className="stars"></div>

      {/* Main workspace */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl h-full px-8 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >

            {/* Top-right small glowing window */}
            <div className="absolute top-8 right-12 w-64 h-80 bg-gradient-to-br from-blue-900/20 to-transparent rounded-lg border border-blue-500/20 backdrop-blur-sm">
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-yellow-400/60 rounded-full"
                    animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Central workspace card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl">
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl border border-purple-500/20 backdrop-blur-md p-8 shadow-2xl">

                {/* Certificates bookshelf */}
                <motion.div
                  className="absolute -top-20 right-1/4 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => onObjectClick('bookshelf')}
                >
                  <div className="relative">
                    <div className="w-48 h-32 bg-gradient-to-br from-amber-900/40 to-amber-800/40 rounded-lg border border-amber-600/30 p-4 backdrop-blur-sm">
                      <div className="flex gap-1 h-full">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-b from-amber-700/60 to-amber-900/60 rounded-sm"
                            style={{ height: `${60 + Math.random() * 40}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-slate-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap tooltip-arrow">
                    <BookOpen className="w-3 h-3 inline mr-1" />
                    Certificates
                  </div>
                  </div>
                </motion.div>

                {/* ML Experiments whiteboard */}
                <motion.div
                  className="absolute -top-16 left-20 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => onObjectClick('whiteboard')}
                >
                  <div className="relative">
                    <div className="w-40 h-28 bg-gradient-to-br from-slate-100/90 to-slate-200/90 rounded-lg border border-slate-400/50 p-3 shadow-lg">
                      <div className="text-slate-700 text-xs space-y-1">
                        <div className="h-1 bg-purple-600/70 w-3/4 rounded"></div>
                        <div className="h-1 bg-blue-600/70 w-1/2 rounded"></div>
                        <div className="h-1 bg-purple-600/70 w-2/3 rounded"></div>
                        <div className="mt-2 flex gap-1">
                          <div className="w-6 h-6 border-2 border-purple-600/70 rounded"></div>
                          <div className="w-6 h-6 border-2 border-blue-600/70 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-slate-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      <Layout className="w-3 h-3 inline mr-1" />
                      ML Experiments
                    </div>
                  </div>
                </motion.div>

                {/* Grid for laptop + other objects */}
                <div className="grid grid-cols-2 gap-8 items-center">

                  {/* Left column: Laptop and small objects */}
                  <div className="relative">
                    {/* Laptop with terminal */}
                    <motion.div
                      className="relative cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => onObjectClick('laptop')}
                    >
                      <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-t-2xl p-3 border border-purple-500/30 shadow-2xl">
                        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-lg p-4 h-64 relative overflow-hidden border border-purple-500/20">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>

                          <div className="relative z-10 font-mono text-xs space-y-2">
                            <div className="text-purple-400">{'>'} npm run dev</div>
                            <div className="text-green-400">Server running...</div>
                            <div className="text-blue-400">Projects loaded ✓</div>
                            <div className="flex items-center gap-1">
                              <span className="text-purple-400">{'>'}</span>
                              <motion.span
                                className="inline-block w-2 h-4 bg-purple-400"
                                animate={{ opacity: cursorBlink ? 1 : 0 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-2 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-lg"></div>

                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        <Monitor className="w-3 h-3 inline mr-1" />
                        View Projects
                      </div>
                    </motion.div>

                    {/* Notebook */}
                    <motion.div
                      className="absolute -left-16 top-8 cursor-pointer group"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      onClick={() => onObjectClick('notebook')}
                    >
                      <div className="relative">
                        <div className="w-20 h-24 bg-gradient-to-br from-orange-800/70 to-orange-900/70 rounded border border-orange-600/50 shadow-lg relative">
                          <div className="absolute left-2 top-3 bottom-3 space-y-1">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="h-0.5 w-12 bg-orange-950/50 rounded"></div>
                            ))}
                          </div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                          <Book className="w-3 h-3 inline mr-1" />
                          Notes
                        </div>
                      </div>
                    </motion.div>

                    {/* Drawer / Resume */}
                    <motion.div
                      className="absolute -bottom-8 left-12 cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => onObjectClick('drawer')}
                    >
                      <div className="relative">
                        <div className="w-32 h-20 bg-gradient-to-br from-slate-700/60 to-slate-800/60 rounded border border-slate-600/50 shadow-lg">
                          <div className="mt-4 space-y-2 px-4">
                            <div className="h-1 bg-slate-600/70 rounded w-full"></div>
                            <div className="h-1 bg-slate-600/70 rounded w-full"></div>
                            <div className="flex justify-center mt-2">
                              <div className="w-8 h-2 bg-slate-500/70 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                          <FileText className="w-3 h-3 inline mr-1" />
                          Resume
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right column: Image replaces cartoon character */}
                  <div className="relative flex flex-col items-center justify-center">

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="relative w-48 h-56 group"  // <-- add "group" here
                      >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent rounded-full blur-3xl"></div>

                        {/* Developer image */}
                        <motion.img
                          src={picture}
                          alt="Developer workspace"
                          className="relative w-full h-full object-cover rounded-2xl cursor-pointer z-10"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => onObjectClick("girl")}
                        />
                        
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                          <Package className="w-3 h-3 inline mr-1" />
                          Cookin"
                        </div>
                    </motion.div>

                    {/* Tech Swag Shelf */}
                    <motion.div
                      className="absolute -right-20 top-20 cursor-pointer group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      onClick={() => onObjectClick('shelf')}
                    >
                      <div className="relative">
                        <div className="w-24 h-16 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded border border-slate-600/40 shadow-lg p-2">
                          <div className="flex gap-1 items-end h-full">
                            <div className="w-4 h-8 bg-blue-600/70 rounded-sm"></div>
                            <div className="w-4 h-6 bg-green-600/70 rounded-sm"></div>
                            <div className="w-4 h-10 bg-purple-600/70 rounded-sm"></div>
                            <div className="w-4 h-7 bg-red-600/70 rounded-sm"></div>
                          </div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                          <Package className="w-3 h-3 inline mr-1" />
                          Tech Swag
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            

            {/* Welcome text at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-purple-300 text-sm font-light tracking-wide mb-2">
                Welcome to my workspace
              </p>
              <p className="text-purple-400/60 text-xs">
                Click on objects to explore my portfolio
              </p>
              <br />
              <p className="text-purple-300 text-sm font-light tracking-wide mb-2">(This portfolio is a snapshot of earlier work. I’ve since been exploring and experimenting with many new ideas and projects along the way.)</p>
            </motion.div>
          </motion.div>

         <motion.div
              className="absolute right-10 bottom-28 cursor-pointer group"
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              whileHover={{ scale: 1.15 }}
              onClick={() => onObjectClick("connect")}
            >
              {/* Hand */}
              <div className="text-4xl">
                👋
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                Let's Connect
              </div>
        </motion.div>

        </div>
      </div>
      
      {/* Stars style */}
      <style>{`
        .stars {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 60px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 50px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 10px, #eee, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.3;
          animation: twinkle 5s infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}