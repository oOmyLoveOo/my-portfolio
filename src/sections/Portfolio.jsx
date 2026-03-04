import { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillCategories = {
  "Programming & Scripting": [
    "Python", "JavaScript", "PHP", "Bash", "C++", 
    "Django", "React", "HTML5", "CSS3", "TailwindCSS"
  ].sort(),
  
  "Cybersecurity": [
    "Nmap", "Wireshark", "Metasploit", "Burp Suite", 
    "OWASP Top 10", "Kali Linux", "Pentesting", 
    "IDS/IPS", "Ethics & Law", "Technical Reporting"
  ].sort(),
  
  "Infrastructure & DevOps": [
    "Linux", "Windows", "Active Directory", "Virtualization",
    "Docker", "Ansible", "AWS S3", "Git", "GitHub", "GitLab", "KVM/QEMU"
  ].sort(),
  
  "Networking & Protocols": [
    "TCP/IP", "UDP", "SSH", "FTP", "DNS", "HTTP/S", "Network Configuration",
    "ARP", "DHCP", "ICMP", "Firewalls", "VPNs", "LDAP", "Cisco", "Nginx"
  ].sort()
};

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and TailwindCSS featuring dark mode and smooth animations.",
      tech: ["React", "TailwindCSS", "JavaScript", "HTML5", "Git"],
      link: "https://github.com/oOmyLoveOo/my-portfolio",
      status: "Active"
    },
    {
      title: "Python-Keylogger",
      desc: "A disguised keylogger written in Python for educational purposes, capturing keystrokes and sending logs via HTTP/S requests.",
      tech: ["Python", "HTTP/S", "Git"],
      link: "https://github.com/oOmyLoveOo/Python-keylogger",
      status: "Active"
    },
    {
      title: "SentinelScan",
      desc: "A Python-based offensive reconnaissance tool focused on identifying exposed TCP services and providing lightweight risk analysis. It is designed to be modular, extensible, and educational rather than a full replacement for tools like Nmap.",
      tech: ["Python", "Nmap", "TCP/IP", "HTTP/S"],
      link: "https://github.com/oOmyLoveOo/SentinelScan",
      status: "Active"
    },
    {
      title: "Hybrid Offensive Security Homelab",
      desc: "A professional-grade simulation environment built on Arch Linux using KVM/QEMU. It features a dual-homed Kali Linux pivot, an isolated corporate network with Active Directory (Windows Server 2022) and Dockerized web vectors, integrated with a physical Raspberry Pi 4 C2 redirector.",
      tech: ["KVM/QEMU", "Linux", "Active Directory", "Docker", "Nginx", "Bash", "Network Configuration"],
      link: "https://github.com/oOmyLoveOo/Virtual-Homelab",
      status: "Active" 
    },
    {
      title: "Dotfiles",
      desc: "",
      tech: [],
      link: "#",
      status: "Coming Soon"
    },
    {
      title: "?",
      desc: "",
      tech: [],
      link: "#",
      status: "Coming Soon"
    }
  ];


  const filteredProjects = selectedSkills.length === 0
    ? projects 
    : projects.filter(p => selectedSkills.every(skill => p.tech.includes(skill)));

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 transition-colors duration-300">
      
      {/* --- SECTION: CERTIFICATIONS --- */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12 italic text-blue-700 dark:text-green-500">
          {">"} Professional_Certifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          <a href="https://www.credly.com/badges/0c4ad615-e2fe-4657-be4e-ab2d41d7ec04" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group transition-transform hover:scale-105">
            <div className="bg-white p-6 rounded-xl shadow-lg w-[220px] h-[300px] flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all">
              <img src="/assets/badge1.png" alt="Google Cyber" className="w-full h-full object-contain" />
            </div>
            <p className="mt-4 font-mono text-sm text-slate-700 dark:text-gray-400 group-hover:text-blue-600 italic">Verify Authenticity</p>
          </a>

          <a href="https://www.credly.com/badges/8c9dd136-7394-41e5-9d4c-29121e66491e" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group transition-transform hover:scale-105">
            <div className="bg-white p-6 rounded-xl shadow-lg w-[220px] h-[300px] flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all">
              <img src="/assets/badge2.png" alt="Google Cyber 2" className="w-full h-full object-contain" />
            </div>
            <p className="mt-4 font-mono text-sm text-slate-700 dark:text-gray-400 group-hover:text-blue-600 italic">Verify Authenticity</p>
          </a>

          <div className="flex flex-col items-center">
            <div className="bg-white/30 dark:bg-zinc-900/30 border-2 border-dashed border-slate-400 dark:border-zinc-700 rounded-xl w-[220px] h-[300px] flex flex-col items-center justify-center group hover:border-green-500/50 transition-all">
              <span className="text-5xl text-slate-500 dark:text-zinc-600 group-hover:text-green-500 transition-colors mb-4">+</span>
              <p className="text-center font-mono text-xs text-slate-600 dark:text-zinc-500">Next: eJPT / OSCP</p>
            </div>
            <p className="mt-4 font-mono text-sm text-slate-500 dark:text-gray-500 italic">Roadmap 2026</p>
          </div>
        </div>
      </section>

      {/* --- SECTION: SKILLS & PROJECTS --- */}
      <section id="projects">
        <h2 className="text-4xl font-bold mb-10 border-l-4 border-blue-700 dark:border-green-500 pl-4 uppercase tracking-wider">
          Skills & Projects
        </h2>

        {/* Categories Selector */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            onClick={() => {setActiveCategory('All'); setSelectedSkills([]);}}
            className={`px-5 py-2 rounded-full border text-sm transition-all ${activeCategory === 'All' ? 'bg-blue-700 dark:bg-green-600 text-white border-transparent' : 'border-slate-400 dark:border-zinc-700 text-slate-800 dark:text-gray-400 hover:border-blue-600'}`}
          >
            Show All
          </button>
          {Object.keys(skillCategories).map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm transition-all ${activeCategory === cat ? 'bg-blue-700 dark:bg-green-600 text-white border-transparent' : 'border-slate-400 dark:border-zinc-700 text-slate-800 dark:text-gray-400 hover:border-blue-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Selected Skills Indicator */}
        {selectedSkills.length > 0 && (
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold opacity-70">Projects with ALL:</span>
            {selectedSkills.map(skill => (
              <span 
                key={skill}
                className="px-3 py-1 bg-blue-600/20 dark:bg-green-500/20 border border-blue-700 dark:border-green-500 text-blue-800 dark:text-green-400 rounded-full text-xs font-semibold flex items-center gap-2"
              >
                {skill}
                <button 
                  onClick={() => toggleSkill(skill)}
                  className="hover:text-red-500 transition-colors"
                >
                  ✕
                </button>
              </span>
            ))}
            <button
              onClick={() => setSelectedSkills([])}
              className="px-3 py-1 text-xs text-red-600 dark:text-red-400 hover:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Skill Tags Cloud */}
        <div className="bg-slate-200/50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-300 dark:border-zinc-800 mb-12 backdrop-blur-sm">
          <div className="flex flex-wrap gap-2">
            {(activeCategory === 'All' ? Object.values(skillCategories).flat().sort() : skillCategories[activeCategory]).map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all border ${selectedSkills.includes(skill) ? 'bg-blue-600/20 dark:bg-green-500/20 border-blue-700 dark:border-green-500 text-blue-800 dark:text-green-400' : 'bg-slate-100 dark:bg-zinc-800 border-transparent text-slate-600 dark:text-zinc-400 hover:border-slate-400'}`}
              >
                {`> ${skill}`}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-100 dark:bg-zinc-900/50 border border-slate-300 dark:border-zinc-800 rounded-xl">
            <p className="text-lg opacity-70 mb-2">No projects found with all selected skills</p>
            <p className="text-sm opacity-50 mb-6">Try selecting fewer skills or different combinations</p>
            <button
              onClick={() => setSelectedSkills([])}
              className="px-6 py-2 bg-blue-700 dark:bg-green-500 text-white rounded-full hover:scale-105 transition-transform"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 p-6 rounded-xl hover:shadow-xl dark:hover:border-green-500/50 transition-all group flex flex-col justify-between backdrop-blur-md">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-700 dark:group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-[10px] px-2 py-1 rounded border font-bold ${project.status === 'Active' ? 'border-blue-600 text-blue-600 dark:border-green-500 dark:text-green-500' : 'border-yellow-600 text-yellow-600'}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-gray-400 text-sm mb-6 leading-relaxed italic">
                    "{project.desc}"
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-zinc-500 px-2 py-1 rounded uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`mt-auto flex items-center justify-center gap-2 py-2 rounded font-mono text-xs transition-all border ${project.status === 'Active' ? 'bg-slate-800 dark:bg-white/5 border-slate-700 dark:border-white/10 text-white hover:bg-blue-700 dark:hover:bg-green-500 dark:hover:text-black' : 'bg-slate-200 dark:bg-zinc-800 border-transparent text-slate-400 cursor-not-allowed opacity-50'}`}
                  onClick={(e) => project.status !== 'Active' && e.preventDefault()}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  {project.status === 'Active' ? 'View on GitHub →' : 'Repository Locked'}
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- FOOTER DATA --- */}
      <div className="mt-24 p-8 border-t border-slate-300 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-10 font-mono text-xs">
        <div>
          <p className="text-blue-700 dark:text-green-500 mb-3 uppercase font-bold">// Soft_Skills_&_Ethics</p>
          <p className="text-slate-600 dark:text-zinc-400 leading-relaxed italic">
            "Technical Reporting for stakeholders, Strong Ethical Foundation, Understanding of Legal Boundaries, Continuous Curiosity."
          </p>
        </div>
        <div>
          <p className="text-blue-700 dark:text-green-500 mb-3 uppercase font-bold">// Infrastructure_Status</p>
          <p className="text-slate-600 dark:text-zinc-400">
            Virtualization (VMware/VirtualBox), Active Directory Management, IDS/IPS Implementation, Linux/Windows Administration.
          </p>
        </div>
        <div>
          <p className="text-blue-700 dark:text-green-500 mb-3 uppercase font-bold">// Network_Defenses</p>
          <p className="text-slate-600 dark:text-zinc-400">
            Advanced Protocol Analysis (ARP, ICMP, TCP/UDP), Firewalling, VPN Configuration, Proxy management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;