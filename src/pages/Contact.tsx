import { Mail, Github, Linkedin, Download, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="flex-1 px-6 md:px-20 lg:px-40 py-12">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <span className="inline-block px-3 py-1 bg-[#0d6cf2]/10 text-[#0d6cf2] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              Available for Internship
            </span>
            <h1 className="text-slate-900 dark:text-slate-100 text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
              Let's build something <span className="text-[#0d6cf2]">great</span> together.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
              Currently a Computer Engineering student focused on Full-stack development and Cloud architecture. I'm always open to discussing new projects, open-source contributions, or internship opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <a href="mailto:manniemanuelsoriano@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-[#0d6cf2]/10 bg-white dark:bg-slate-800/50 hover:border-[#0d6cf2]/40 transition-all group">
              <div className="size-12 rounded-lg bg-[#0d6cf2]/10 flex items-center justify-center text-[#0d6cf2] group-hover:bg-[#0d6cf2] group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email Me</p>
                <p className="font-bold text-slate-900 dark:text-slate-100">manniemanuelsoriano@gmail.com</p>
              </div>
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/MaiyaLi" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                <Github size={24} />
                <span className="font-bold">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/mannie-manuel-soriano-7b8884227/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-[#0077b5] text-white hover:bg-[#0077b5]/90 transition-colors">
                <Linkedin size={24} />
                <span className="font-bold">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="mt-4 p-6 rounded-2xl bg-[#0d6cf2]/5 border border-dashed border-[#0d6cf2]/20">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Technical Resume</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Updated Jan 2024 • PDF format • 145KB</p>
            <Link to="/resume" className="inline-flex items-center gap-2 bg-[#0d6cf2] text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all active:scale-95">
              <Download size={20} />
              View & Download Resume
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-[#0d6cf2]/5 border border-[#0d6cf2]/5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Send a Message</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
                <input required className="w-full h-12 px-4 rounded-lg bg-[#f5f7f8] dark:bg-slate-800 border-transparent focus:border-[#0d6cf2] focus:ring-0 text-slate-900 dark:text-slate-100 transition-all outline-none" placeholder="Mannie Manuel" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                <input required className="w-full h-12 px-4 rounded-lg bg-[#f5f7f8] dark:bg-slate-800 border-transparent focus:border-[#0d6cf2] focus:ring-0 text-slate-900 dark:text-slate-100 transition-all outline-none" placeholder="mannie@example.com" type="email" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
              <select className="w-full h-12 px-4 rounded-lg bg-[#f5f7f8] dark:bg-slate-800 border-transparent focus:border-[#0d6cf2] focus:ring-0 text-slate-900 dark:text-slate-100 transition-all appearance-none outline-none">
                <option>Project Inquiry</option>
                <option>Internship Opportunity</option>
                <option>Mentorship / Questions</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
              <textarea required className="w-full p-4 rounded-lg bg-[#f5f7f8] dark:bg-slate-800 border-transparent focus:border-[#0d6cf2] focus:ring-0 text-slate-900 dark:text-slate-100 transition-all resize-none outline-none" placeholder="Tell me about your project or just say hi..." rows={5}></textarea>
            </div>
            <button className="w-full h-14 bg-[#0d6cf2] text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#0d6cf2]/90 transition-all group" type="submit">
              Send Message
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
