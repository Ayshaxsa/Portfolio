import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Mail, MapPin, Download } from 'lucide-react';
import { resumeData } from '../data/portfolio';

export default function ResumeView() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 p-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">{resumeData.name}</h1>
        <p className="text-xl text-purple-300 mb-4">{resumeData.title}</p>
        <div className="flex flex-wrap gap-4 text-purple-300/70 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{resumeData.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{resumeData.location}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-3">Summary</h2>
        <p className="text-purple-300/70 leading-relaxed">{resumeData.summary}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-200 rounded-lg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-purple-400" />
          Experience
        </h2>
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-purple-500/30 pl-4">
              <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              <p className="text-purple-300 text-sm mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-purple-300/70 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-purple-400" />
          Education
        </h2>
        <div className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-purple-500/30 pl-4">
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="text-purple-300 text-sm mb-2">
                {edu.school} • {edu.year}
              </p>
              <p className="text-purple-300/70 text-sm">Focus: {edu.focus}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/16amPq8VUwMSTX6EN9NAe8zLgF0fuOBGY/view?usp=sharing" // <-- replace with your resume path or URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
              <Download className="w-5 h-5" />
              Download PDF Resume
            </button>
          </a>
      </div>

    </div>
  );
}
