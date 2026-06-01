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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Basic AI Chatbot',
    description: 'Beginner-friendly AI chatbot that handles user questions through a simple interface and demonstrates chatbot interaction basics.',
    level: 'Basic Level',
    tags: ['Python', 'Streamlit', 'AI Chatbot', 'Prompt Engineering'],
    hasGithub: true,
    hasVideo: true
  },
  {
    id: 2,
    title: 'Gmail Automation Script',
    description: 'Simple Gmail workflow automation for reading emails, filtering tasks, and productivity automation.',
    level: 'Basic Level',
    tags: ['Python', 'Automation', 'Gmail', 'Scripting'],
    hasGithub: true,
    hasVideo: true
  },
  {
    id: 3,
    title: 'Resume Screener AI',
    description: 'AI-based resume screening that reviews resumes, checks relevant skills, and helps shortlist profiles by requirements.',
    level: 'Intermediate Level',
    tags: ['Python', 'AI', 'Resume Parsing', 'Scoring Logic'],
    hasGithub: true,
    hasVideo: true
  },
  {
    id: 4,
    title: 'WhatsApp Automation',
    description: 'WhatsApp automation system with auto-replies, FAQ-based responses, QR login, local session storage, and conversation logging.',
    level: 'Intermediate Level',
    tags: ['Node.js', 'whatsapp-web.js', 'FAQ Bot', 'Conversation Logs'],
    hasGithub: true,
    hasVideo: false
  },
  {
    id: 5,
    title: 'Multi-Tool AI Agent',
    description: 'Advanced AI agent using multiple tools that handles structured tasks and workflow automation.',
    level: 'Advanced Level',
    tags: ['AI Agent', 'Tool Calling', 'Python', 'Workflow Automation'],
    hasGithub: true,
    hasVideo: true
  },
  {
    id: 6,
    title: 'RAG-based Knowledge Assistant',
    description: 'Retrieval-augmented assistant that searches stored information and gives relevant answers through knowledge-base workflow.',
    level: 'Advanced Level',
    tags: ['RAG', 'Vector Search', 'LLM', 'Knowledge Base'],
    hasGithub: true,
    hasVideo: true
  }
];

const skills = [
  'Python', 'Node.js', 'JavaScript', 'Streamlit', 'WhatsApp Web Automation',
  'Gmail Automation', 'RAG', 'LLM Tools', 'HTML', 'CSS', 'GitHub', 'Vercel'
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
                Ω
              </div>
              <div>
                <h1 className="text-2xl text-slate-900 mb-1">AI & Automation Internship Dashboard</h1>
                <p className="text-slate-600">Mahboob Ali · AI Automation Intern</p>
              </div>
            </div>
          </div>

          <p className="text-slate-600 mb-6 max-w-3xl">
            A professional dashboard to present internship tasks, project levels, GitHub repositories,
            live demos, video proofs, skills, and contact details in one clean submission link.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Explore Projects
            </button>
            <button className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub Profile
            </button>
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
        <section className="mb-16">
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
                  <span className={`px-3 py-1 rounded-full text-xs ${
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

                <div className="flex gap-3">
                  {project.hasGithub && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                      <Github className="w-4 h-4" />
                      GitHub
                    </button>
                  )}
                  {project.hasVideo && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Video className="w-4 h-4" />
                      Video Demo
                    </button>
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
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">01</div>
                <h3 className="text-xl text-slate-900">Basic Level</h3>
              </div>
              <p className="text-slate-700">
                Basic AI Chatbot and Gmail Automation Script.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-lg flex items-center justify-center">02</div>
                <h3 className="text-xl text-slate-900">Intermediate Level</h3>
              </div>
              <p className="text-slate-700">
                Resume Screener AI and WhatsApp Automation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center">03</div>
                <h3 className="text-xl text-slate-900">Advanced Level</h3>
              </div>
              <p className="text-slate-700">
                Multi-Tool AI Agent and RAG-based Knowledge Assistant.
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Phone</p>
                    <p className="text-slate-900">+923041976417</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-slate-900">mahboobalilaghari19@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">GitHub</p>
                    <p className="text-slate-900">github.com/MahboobAli1</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">LinkedIn</p>
                    <p className="text-slate-900">LinkedIn Profile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl text-slate-900 mb-4">Send a Message</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
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
            © 2026 Mahboob Ali. Professional dashboard for Nexe Agent Internship submission.
          </p>
        </div>
      </footer>
    </div>
  );
}