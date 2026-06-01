import { useState } from 'react';
import {
  Search,
  Github,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Video,
  Code2,
  CheckCircle2,
  Layers,
  Briefcase
} from 'lucide-react';

type ProjectLevel = 'All' | 'Basic Level' | 'Intermediate Level' | 'Advanced Level';

interface Project {
  id: number;
  title: string;
  description: string;
  level: string;
  tags: string[];
  hasGithub: boolean;
  hasVideo: boolean;
  githubUrl?: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Basic AI Chatbot',
    description: 'Multi-turn AI chatbot powered by Groq LLM API with full error handling and chat history.',
    level: 'Basic Level',
    tags: ['Python', 'Streamlit', 'Groq AI', 'Prompt Engineering'],
    hasGithub: true,
    hasVideo: true,
    githubUrl: 'https://github.com/MahboobAli1/nexe-agent-portfolio/tree/main/task1_chatbot',
    videoUrl: 'https://nexe-agent-portfolio-chatbot.streamlit.app/'
  },
  {
    id: 2,
    title: 'Email Automation Script',
    description: 'Automates sending scheduled and template-based emails using Gmail SMTP with a full send log.',
    level: 'Basic Level',
    tags: ['Python', 'Gmail SMTP', 'Streamlit', 'Automation'],
    hasGithub: true,
    hasVideo: true,
    githubUrl: 'https://github.com/MahboobAli1/nexe-agent-portfolio/tree/main/task2_email',
    videoUrl: 'https://nexe-agent-portfolio-email.streamlit.app/'
  },
  {
    id: 3,
    title: 'Resume Screener AI',
    description: 'Upload multiple PDF resumes and get AI-powered skill extraction and match percentage against any job description.',
    level: 'Intermediate Level',
    tags: ['Python', 'Groq AI', 'PyPDF2', 'Streamlit'],
    hasGithub: true,
    hasVideo: true,
    githubUrl: 'https://github.com/MahboobAli1/nexe-agent-portfolio/tree/main/task3_resume_screener',
    videoUrl: 'https://nexe-agent-portfolio-resume.streamlit.app/'
  },
  {
    id: 4,
    title: 'WhatsApp Automation',
    description: 'FAQ-based WhatsApp bot with auto-reply logic, chat simulator, conversation logging, and FAQ manager.',
    level: 'Intermediate Level',
    tags: ['Python', 'Twilio', 'Streamlit', 'Bot Automation'],
    hasGithub: true,
    hasVideo: false,
    githubUrl: 'https://github.com/MahboobAli1/nexe-agent-portfolio/tree/main/task4_whatsapp',
    videoUrl: 'https://nexe-agent-portfolio-whatsapp-bot.streamlit.app/'
  },
  {
    id: 5,
    title: 'Multi-Tool AI Agent',
    description: 'Advanced AI agent using multiple tools that handles structured tasks and workflow automation with calculator, unit converter, text analyzer.',
    level: 'Advanced Level',
    tags: ['Python', 'Groq AI', 'Tool Calling', 'Streamlit'],
    hasGithub: true,
    hasVideo: true,
    githubUrl: 'https://github.com/MahboobAli1/nexe-agent-portfolio/tree/main/task5_ai_agent',
    videoUrl: 'https://nexe-agent-portfolio-ai-agent.streamlit.app/'
  },
  {
    id: 6,
    title: 'RAG-based Knowledge Assistant',
    description: 'Upload company documents, store embeddings, and query them with contextual AI answers citing sources. Vector similarity search with contextual QA.',
    level: 'Advanced Level',
    tags: ['Python', 'Groq AI', 'PyPDF2', 'Vector Search'],
    hasGithub: true,
    hasVideo: true,
    githubUrl: 'https://github.com/MahboobAli1/nexe-agent-portfolio/tree/main/task6_rag',
    videoUrl: 'https://nexe-agent-portfolio-rag.streamlit.app/'
  }
];

const skills = [
  'Python', 'Node.js', 'JavaScript', 'Streamlit', 'WhatsApp Web Automation',
  'Gmail Automation', 'RAG', 'LLM Tools', 'Groq AI', 'Twilio', 'GitHub', 'Vercel'
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<ProjectLevel>('All');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.level.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = activeFilter === 'All' || project.level === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                🤖
              </div>
              <div>
                <h1 className="text-2xl text-slate-900 mb-1">Nexe-Agent Internship Portfolio</h1>
                <p className="text-slate-600">Mahboob Ali · AI & Automation Intern</p>
              </div>
            </div>
          </div>

          <p className="text-slate-600 mb-6 max-w-3xl">
            A professional dashboard to present internship tasks, project levels, GitHub repositories,
            live demos, video proofs, skills, and contact details in one clean submission link.
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Explore Projects
            </a>
            <a href="https://github.com/MahboobAli1" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub Profile
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Summary Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-3xl text-slate-900">6</span>
              </div>
              <p className="text-slate-600">Total Projects</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-3xl text-slate-900">3</span>
              </div>
              <p className="text-slate-600">Project Levels</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-3xl text-slate-900">6</span>
              </div>
              <p className="text-slate-600">Completed Tasks</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-cyan-600" />
                </div>
                <span className="text-3xl text-slate-900">5</span>
              </div>
              <p className="text-slate-600">Video Enabled</p>
            </div>
          </div>
        </section>

        {/* Project Dashboard */}
        <section className="mb-16" id="projects">
          <h2 className="text-3xl text-slate-900 mb-6">Internship Tasks by Level</h2>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search project, level, technology, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              {(['All', 'Basic Level', 'Intermediate Level', 'Advanced Level'] as ProjectLevel[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-slate-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                    project.level === 'Basic Level' ? 'bg-green-100 text-green-700' :
                    project.level === 'Intermediate Level' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {project.level}
                  </span>
                </div>

                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  {project.hasGithub && project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.hasVideo && project.videoUrl && (
                    <a 
                      href={project.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Video className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {!project.hasVideo && project.hasGithub && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-500 rounded-lg">
                      No Video Required
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Levels */}
        <section className="mb-16">
          <h2 className="text-3xl text-slate-900 mb-6">Internship Progress Structure</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">01</div>
                <h3 className="text-xl text-slate-900">Basic Level</h3>
              </div>
              <p className="text-slate-700">
                Basic AI Chatbot and Email Automation Script. Foundation-level projects to learn core concepts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-lg flex items-center justify-center font-bold">02</div>
                <h3 className="text-xl text-slate-900">Intermediate Level</h3>
              </div>
              <p className="text-slate-700">
                Resume Screener AI and WhatsApp Automation. Build on basics with more complex integrations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">03</div>
                <h3 className="text-xl text-slate-900">Advanced Level</h3>
              </div>
              <p className="text-slate-700">
                Multi-Tool AI Agent and RAG-based Knowledge Assistant. Master advanced AI concepts and workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-3xl text-slate-900 mb-6">Core Technologies Used</h2>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-800 rounded-lg flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-slate-900 mb-6">Submission & Contact Details</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl text-slate-900 mb-4">Contact Information</h3>

              <div className="space-y-4">
                <a href="tel:+923041976417" className="flex items-center gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Phone</p>
                    <p className="text-slate-900">+92 304 1976417</p>
                  </div>
                </a>

                <a href="mailto:mahboobalilaghari19@gmail.com" className="flex items-center gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-slate-900">mahboobalilaghari19@gmail.com</p>
                  </div>
                </a>

                <a href="https://github.com/MahboobAli1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">GitHub</p>
                    <p className="text-slate-900">github.com/MahboobAli1</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/mahboob-ali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">LinkedIn</p>
                    <p className="text-slate-900">LinkedIn Profile</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl text-slate-900 mb-4">Send a Message</h3>

              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
              }}>
                <div>
                  <label className="block text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-300">
            © 2026 Mahboob Ali. Professional dashboard for Nexe-Agent Internship submission.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
