import { Download, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-12 max-w-7xl mx-auto flex-1 w-full">
      <div className="flex flex-col gap-8 max-w-3xl">
        <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100">Resume</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          You can view my qualifications and experience below. For a printable version, please download the PDF.
        </p>
        
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#0d6cf2]/10 flex items-center justify-center text-[#0d6cf2]">
                <FileText size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Mannie Manuel F. Soriano</h2>
                <p className="text-slate-500 dark:text-slate-400">Computer Engineering Student</p>
              </div>
            </div>
            <a href="/resume.pdf" download className="flex items-center gap-2 bg-[#0d6cf2] text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all active:scale-95">
              <Download size={20} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
          </div>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider text-[#0d6cf2]">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Universidad de Dagupan</h4>
                  <p className="text-slate-600 dark:text-slate-400">Bachelor of Science in Computer Engineering (2023 - Present)</p>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider text-[#0d6cf2]">Skills</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Python, Java, TypeScript, C++, React.js, Django, PyTorch, AWS, Docker, Kubernetes, PostgreSQL, Git/CI-CD
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
