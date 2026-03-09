import { Terminal, FlaskConical, Globe, Trophy, GraduationCap, Github } from 'lucide-react';

export default function Experience() {
  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">Professional Experience</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          A timeline of my internships, research contributions, and technical roles in the industry and academia.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
        <div className="space-y-12">
          {/* Experience 1 */}
          <div className="relative pl-12 md:pl-20">
            <div className="absolute left-0 md:left-4 top-1 size-8 md:size-10 bg-[#0d6cf2] rounded-full flex items-center justify-center text-white z-10 shadow-lg">
              <Terminal size={20} />
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Freelance Hardware Technician</h3>
                  <p className="text-[#0d6cf2] font-semibold">Independent Contractor</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#0d6cf2]/10 text-[#0d6cf2] uppercase tracking-wider">
                  2023 — Present
                </span>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex gap-3">
                  <span className="text-[#0d6cf2] mt-1">✓</span>
                  <span>Troubleshooting complex hardware failures, performing component-level diagnostics, and building custom PC configurations tailored for high-performance computing needs.</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium">Hardware Diagnostics</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium">PC Building</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium">Troubleshooting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Key Achievements & Skills</h2>
          <div className="h-1 flex-1 bg-slate-100 dark:bg-slate-800 mx-4 hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
            <Trophy className="text-[#0d6cf2] mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Hackathon Winner</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">First place at Global CodeFest 2022 for building an AI-powered study assistant.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
            <GraduationCap className="text-[#0d6cf2] mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Dean's List</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Awarded for academic excellence for 4 consecutive semesters (GPA: 3.9/4.0).</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
            <Github className="text-[#0d6cf2] mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Open Source</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Active contributor to several popular React and Node.js open-source libraries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
