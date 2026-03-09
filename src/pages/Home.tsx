import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Terminal, Cloud, BrainCircuit, Cpu, BarChart, MonitorSmartphone } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const myImages = [
  "/assets/shuffle/3b7c7cd9-6f94-4ed7-82d3-5c2e54ad7a17.jpg",
  "/assets/shuffle/5e97656b-8b94-4a38-ab85-b2d58c1f1f4e.jpg",
  "/assets/shuffle/6c4bc1e2-0525-4fe6-8589-0689b1b5012f.jpg",
  "/assets/shuffle/7d618709-84ff-45de-88f3-6d3bc4de83a3.jpg",
  "/assets/shuffle/808d4b27-d318-43dc-b2c5-6982d16f6697.jpg",
  "/assets/shuffle/8b34480b-9899-4313-ae85-684cc35a4f59.jpg",
  "/assets/shuffle/af11c4d0-7c00-45e3-8a40-583f3fe6eec5.jpg",
  "/assets/shuffle/c477aba0-c3ec-4b13-bbd7-897b4729cdda.jpg",
  "/assets/shuffle/cd85f1a1-5467-4d8e-b295-c9d774e16bfb.jpg",
  "/assets/shuffle/df2ad7aa-b299-478c-a44b-8bb1f9e166cd.jpg",
  "/assets/shuffle/e4ea2f7b-ff7b-4e83-b1ef-bea273cbd97f.jpg",
  "/assets/shuffle/f65637db-d43e-4acc-9906-774483eb10fd.jpg",
  "/assets/shuffle/formal.jpg"
];

export default function Home() {
  return (
    <div className="px-6 md:px-20 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        {/* Hero Text Content */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d6cf2]/10 text-[#0d6cf2] text-xs font-bold uppercase tracking-widest w-fit">
              <span className="size-2 rounded-full bg-[#0d6cf2] animate-pulse"></span>
              Computer Engineering Student
            </div>
            <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Building the <span className="text-[#0d6cf2]">Future</span> Through Technology
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
              Student of Universidad de Dagupan exploring different fields in technology. Passionate about incorporating technology to create solutions for real-world problems.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-xl h-14 px-8 bg-[#0d6cf2] text-white text-base font-bold transition-all hover:shadow-lg hover:shadow-[#0d6cf2]/25 active:scale-95"
            >
              <span className="truncate">View Projects</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-xl h-14 px-8 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold transition-all hover:bg-slate-300 dark:hover:bg-slate-700 active:scale-95"
            >
              <span className="truncate">Contact Me</span>
            </Link>
          </div>
        </div>

        {/* Hero Image/Graphic */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d6cf2]/20 to-transparent z-10 pointer-events-none"></div>
            <ImageCarousel images={myImages} className="w-full h-full" interval={4000} />
          </div>
        </div>
      </div>

      {/* Trust Bar / Skills */}
      <div className="mt-20 md:mt-32">
        <div className="flex flex-col gap-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] text-center">Tech Stack Mastery</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2">
              <Code size={28} />
              <span className="font-bold text-lg">Python</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal size={28} />
              <span className="font-bold text-lg">React</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={28} />
              <span className="font-bold text-lg">Node.js</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={28} />
              <span className="font-bold text-lg">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud size={28} />
              <span className="font-bold text-lg">AWS</span>
            </div>
            <div className="flex items-center gap-2">
              <BrainCircuit size={28} />
              <span className="font-bold text-lg">TensorFlow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#0d6cf2]/50 transition-all duration-300">
          <div className="size-12 rounded-xl bg-[#0d6cf2]/10 text-[#0d6cf2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Cpu size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">System Design</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Designing scalable architectures with a focus on microservices and distributed databases.
          </p>
        </div>
        <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#0d6cf2]/50 transition-all duration-300">
          <div className="size-12 rounded-xl bg-[#0d6cf2]/10 text-[#0d6cf2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <BarChart size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">ML & AI</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Implementing deep learning models for complex data pattern recognition and predictive analytics.
          </p>
        </div>
        <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#0d6cf2]/50 transition-all duration-300">
          <div className="size-12 rounded-xl bg-[#0d6cf2]/10 text-[#0d6cf2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <MonitorSmartphone size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">Web Performance</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Optimizing frontend delivery and backend response times for sub-second user interactions.
          </p>
        </div>
      </div>
    </div>
  );
}
