import { BookOpen, Gamepad2, Dumbbell, Users, GraduationCap, BrainCircuit, Code, Wrench, Network } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const myImages = [
  "/assets/shuffle/formal.jpg"
];

export default function About() {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-10 space-y-12 max-w-7xl mx-auto">
      {/* Profile Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="relative">
          <div className="size-48 rounded-2xl bg-[#0d6cf2]/20 p-2 overflow-hidden border-2 border-[#0d6cf2]/10 relative">
            <ImageCarousel images={myImages} className="w-full h-full rounded-xl" interval={4000} />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#0d6cf2] text-white p-2 rounded-lg shadow-lg">
            <GraduationCap size={24} />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Mannie Manuel F. Soriano</h1>
            <p className="text-lg text-[#0d6cf2] font-semibold">Computer Engineering Student @ Universidad de Dagupan</p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Hello! I am a student of Universidad de Dagupan pursuing a Bachelor of Science in Computer Engineering. I am still exploring different fields in technology and have not yet chosen a specialization, but I am eager to discover where my skills and interests fit best. My goal is to help the community by incorporating technology to create solutions for real-world problems. I am passionate about learning how hardware and software intersect to create impactful systems, and I am actively seeking opportunities to apply my academic knowledge to practical, hands-on projects.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="px-3 py-1 bg-[#0d6cf2]/10 text-[#0d6cf2] text-sm font-medium rounded-full border border-[#0d6cf2]/20">
              Open to Relocation
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full border border-green-200">
              Available for Hire
            </span>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#0d6cf2]/10 pb-2">
          <GraduationCap className="text-[#0d6cf2]" size={28} />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Education</h2>
        </div>
        <div className="grid gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#0d6cf2]/5 shadow-sm flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <div className="size-12 rounded-lg bg-[#0d6cf2]/10 flex items-center justify-center flex-shrink-0 text-[#0d6cf2]">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Bachelor of Science in Computer Engineering</h3>
                <p className="text-slate-600 dark:text-slate-400">Universidad de Dagupan</p>
              </div>
            </div>
            <div className="text-left md:text-right flex flex-col justify-center">
              <span className="text-slate-500 dark:text-slate-500 font-medium">2023 — Present</span>
              <span className="text-xs uppercase tracking-wider text-[#0d6cf2]/70 font-bold mt-1">Current Studies</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#0d6cf2]/5 shadow-sm flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-500">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Senior High School</h3>
                <p className="text-slate-600 dark:text-slate-400">Mapandan National High School</p>
              </div>
            </div>
            <div className="text-left md:text-right flex flex-col justify-center">
              <span className="text-slate-500 dark:text-slate-500 font-medium">2021 — 2023</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#0d6cf2]/5 shadow-sm flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-500">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Junior High School</h3>
                <p className="text-slate-600 dark:text-slate-400">Mapandan National High School</p>
              </div>
            </div>
            <div className="text-left md:text-right flex flex-col justify-center">
              <span className="text-slate-500 dark:text-slate-500 font-medium">2017 — 2021</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#0d6cf2]/5 shadow-sm flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-500">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Elementary School</h3>
                <p className="text-slate-600 dark:text-slate-400">Goodnews Educational Institute</p>
              </div>
            </div>
            <div className="text-left md:text-right flex flex-col justify-center">
              <span className="text-slate-500 dark:text-slate-500 font-medium">2010 — 2017</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#0d6cf2]/10 pb-2">
          <BrainCircuit className="text-[#0d6cf2]" size={28} />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Skills Matrix</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#0d6cf2]/5 shadow-sm space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="text-[#0d6cf2]" size={24} />
              <h3 className="font-bold text-lg">Languages</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Python</span>
                  <span className="text-[#0d6cf2]">Advanced</span>
                </div>
                <div className="w-full bg-[#0d6cf2]/10 rounded-full h-2">
                  <div className="bg-[#0d6cf2] h-2 rounded-full w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Java</span>
                  <span className="text-[#0d6cf2]">Advanced</span>
                </div>
                <div className="w-full bg-[#0d6cf2]/10 rounded-full h-2">
                  <div className="bg-[#0d6cf2] h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">TypeScript</span>
                  <span className="text-[#0d6cf2]">Intermediate</span>
                </div>
                <div className="w-full bg-[#0d6cf2]/10 rounded-full h-2">
                  <div className="bg-[#0d6cf2] h-2 rounded-full w-[70%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">C++</span>
                  <span className="text-[#0d6cf2]">Intermediate</span>
                </div>
                <div className="w-full bg-[#0d6cf2]/10 rounded-full h-2">
                  <div className="bg-[#0d6cf2] h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#0d6cf2]/5 shadow-sm space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="text-[#0d6cf2]" size={24} />
              <h3 className="font-bold text-lg">Frameworks & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Django', 'PyTorch', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Git/CI-CD'].map((tool) => (
                <span key={tool} className="px-3 py-1.5 bg-[#f5f7f8] dark:bg-slate-800 rounded-lg text-sm font-medium border border-[#0d6cf2]/5">
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#0d6cf2]/10">
              <div className="flex items-center gap-2 text-[#0d6cf2]">
                <span className="text-xs font-bold uppercase tracking-wider">Most Used: VS Code, Git, Docker</span>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#0d6cf2]/5 shadow-sm space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Network className="text-[#0d6cf2]" size={24} />
              <h3 className="font-bold text-lg">Core Domains</h3>
            </div>
            <div className="space-y-4">
              {['Distributed Systems', 'Full-Stack Engineering', 'Deep Learning (NLP)', 'REST API Architecture', 'Database Management'].map((domain) => (
                <div key={domain} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-[#0d6cf2]"></div>
                  <span className="text-sm font-medium">{domain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="space-y-6 pb-10">
        <div className="flex items-center gap-2 border-b border-[#0d6cf2]/10 pb-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Beyond Coding</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-[#0d6cf2]/5 shadow-sm text-center">
            <Dumbbell className="text-[#0d6cf2] mb-2" size={32} />
            <span className="text-sm font-bold">Exercising</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-[#0d6cf2]/5 shadow-sm text-center">
            <Gamepad2 className="text-[#0d6cf2] mb-2" size={32} />
            <span className="text-sm font-bold">Gaming</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-[#0d6cf2]/5 shadow-sm text-center">
            <BookOpen className="text-[#0d6cf2] mb-2" size={32} />
            <span className="text-sm font-bold">Reading</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-[#0d6cf2]/5 shadow-sm text-center">
            <Users className="text-[#0d6cf2] mb-2" size={32} />
            <span className="text-sm font-bold">Mentoring</span>
          </div>
        </div>
      </section>
    </div>
  );
}
