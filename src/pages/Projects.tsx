import React, { useState, useEffect } from 'react';
import { ShoppingCart, Bot, Activity, Lock, Network, PlusCircle, Code, ExternalLink, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  icon: string;
  codeUrl: string;
  demoUrl: string;
}

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'SMARS Robotic',
    description: 'An autonomous modular robotics project designed with ultrasonic sensors for obstacle detection and avoidance. Focused on basic robotics logic and sensor integration using microcontrollers.',
    category: 'Hardware',
    tags: ['Robotics', 'Microcontrollers', 'Sensors'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    icon: 'bot',
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    id: '2',
    title: 'Network Toolkit',
    description: 'A specialized hardware-based toolkit created for testing and auditing wireless network protocols. This project explored basic networking concepts and hardware-level security testing.',
    category: 'Hardware',
    tags: ['Networking', 'Security', 'Hardware'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    icon: 'network',
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    id: '3',
    title: 'Mini Weather Station',
    description: 'An IoT-based weather monitoring system that collects real-time temperature and humidity data using DHT sensors. The project includes basic data logging and embedded system programming.',
    category: 'Hardware',
    tags: ['IoT', 'Sensors', 'Embedded Systems'],
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=2070&auto=format&fit=crop',
    icon: 'activity',
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    id: '4',
    title: 'Mini Arcade',
    description: 'A compact embedded gaming console featuring custom game logic, interrupt-based button controls, and an integrated display. This project focused on logic design and user interaction.',
    category: 'Hardware',
    tags: ['Embedded Systems', 'Gaming', 'Logic Design'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    icon: 'code',
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    id: '5',
    title: 'Bio-T Hand',
    description: 'A prototype 3D-printed prosthetic hand developed for assistive technology applications. It integrates servo motors and sensor-based control to simulate human finger movement and grip patterns.',
    category: 'Hardware',
    tags: ['3D Printing', 'Robotics', 'Assistive Tech'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    icon: 'activity',
    codeUrl: '#',
    demoUrl: '#'
  }
];

const categories = ['All Projects', 'Software', 'Hardware'];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    category: 'Software',
    tags: [],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    icon: 'code',
    codeUrl: '#',
    demoUrl: '#'
  });
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('portfolio_projects_v2');
    if (stored) {
      setProjects(JSON.parse(stored));
    } else {
      setProjects(initialProjects);
      localStorage.setItem('portfolio_projects_v2', JSON.stringify(initialProjects));
    }
  }, []);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const project: Project = {
      ...newProject,
      id: Date.now().toString(),
      tags: newProject.tags || [],
    } as Project;

    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);
    localStorage.setItem('portfolio_projects_v2', JSON.stringify(updatedProjects));
    setIsModalOpen(false);
    setNewProject({
      title: '',
      description: '',
      category: 'Software',
      tags: [],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      icon: 'code',
      codeUrl: '#',
      demoUrl: '#'
    });
  };

  const addTag = () => {
    if (tagInput.trim() && !newProject.tags?.includes(tagInput.trim())) {
      setNewProject({ ...newProject, tags: [...(newProject.tags || []), tagInput.trim()] });
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setNewProject({ ...newProject, tags: newProject.tags?.filter(tag => tag !== tagToRemove) });
  };

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'shopping_cart': return <ShoppingCart size={20} />;
      case 'bot': return <Bot size={20} />;
      case 'activity': return <Activity size={20} />;
      case 'lock': return <Lock size={20} />;
      case 'network': return <Network size={20} />;
      default: return <Code size={20} />;
    }
  };

  return (
    <div className="flex flex-1 justify-center py-10 px-6 md:px-20">
      <div className="flex flex-col max-w-[1200px] flex-1">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-2 text-[#0d6cf2]">
            <span className="h-px w-8 bg-[#0d6cf2]"></span>
            <span className="text-xs font-bold uppercase tracking-widest">Portfolio</span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight">Projects Showcase</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
            A curated selection of my technical work, ranging from full-stack web applications to machine learning experiments and system utilities.
          </p>
        </div>

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 text-sm font-bold transition-colors ${
                activeCategory === category
                  ? 'bg-[#0d6cf2] text-white shadow-lg shadow-[#0d6cf2]/20'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#0d6cf2]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">{project.title}</h3>
                  <span className="text-[#0d6cf2]">{renderIcon(project.icon)}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded bg-[#0d6cf2]/10 text-[#0d6cf2] text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.codeUrl} className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-slate-100 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Code size={16} /> Code
                  </a>
                  <a href={project.demoUrl} className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#0d6cf2] px-4 py-2 text-white text-xs font-bold hover:bg-[#0d6cf2]/90 transition-colors">
                    <ExternalLink size={16} /> View Manual
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div 
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center justify-center bg-[#0d6cf2]/5 dark:bg-slate-800/50 rounded-xl border border-dashed border-[#0d6cf2]/30 min-h-[400px] p-8 text-center cursor-pointer hover:bg-[#0d6cf2]/10 transition-colors"
          >
            <div className="size-16 flex items-center justify-center bg-[#0d6cf2]/10 rounded-full mb-4">
              <PlusCircle className="text-[#0d6cf2]" size={32} />
            </div>
            <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">Add New Project</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              Click here to add a new project to your portfolio.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center p-12 bg-[#0d6cf2] rounded-xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in collaboration?</h2>
          <p className="text-blue-100 mb-8 max-w-xl opacity-90">
            I'm always looking for interesting projects to contribute to or new opportunities to learn and grow. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0d6cf2] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Get In Touch
            </button>
            <button className="px-8 py-3 bg-[#0d6cf2]/20 border border-white/30 text-white font-bold rounded-lg hover:bg-[#0d6cf2]/30 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Add Project</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
                <input required type="text" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 focus:ring-2 focus:ring-[#0d6cf2] focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
                <textarea required value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 focus:ring-2 focus:ring-[#0d6cf2] focus:border-transparent outline-none" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Category</label>
                <select value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 focus:ring-2 focus:ring-[#0d6cf2] focus:border-transparent outline-none">
                  {categories.filter(c => c !== 'All Projects').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tags</label>
                <div className="flex gap-2 mb-2">
                  <input type="text" value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addTag())} className="flex-1 rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 focus:ring-2 focus:ring-[#0d6cf2] focus:border-transparent outline-none" placeholder="e.g. React" />
                  <button type="button" onClick={addTag} className="bg-[#0d6cf2] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0d6cf2]/90">Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {newProject.tags?.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded bg-[#0d6cf2]/10 text-[#0d6cf2] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      {tag}
                      <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-500"><X size={12} /></button>
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Image URL</label>
                <input type="url" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 focus:ring-2 focus:ring-[#0d6cf2] focus:border-transparent outline-none" />
              </div>
              <button type="submit" className="w-full bg-[#0d6cf2] text-white font-bold py-3 rounded-lg hover:bg-[#0d6cf2]/90 transition-colors mt-6">
                Save Project
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
