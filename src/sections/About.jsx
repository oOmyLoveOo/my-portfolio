const About = () => {
  const timeline = [
    {
      type: 'education',
      title: 'Cyber Security BSc (Hons)',
      institution: 'York St. John University',
      period: 'Sep 2025 - Jun 2026',
      location: 'York, UK',
      description: 'Currently specializing in advanced cybersecurity topics, focusing on penetration testing, network security, and ethical hacking to develop expertise in Red Team operations.'
    },
    {
      type: 'experience',
      title: 'DevOps and System Administrator',
      institution: 'BITBOX S.L. · Internship',
      period: 'Mar 2025 - May 2025 · 3 mos',
      location: 'Las Palmas de Gran Canaria, Spain · On-site',
      description: 'Gained hands-on experience in DevOps, cloud computing, automation, and system administration. Worked extensively with Docker, GitLab, Ansible, Bash, Django, Python, and various cloud technologies, optimizing infrastructure and streamlining CI/CD deployments.'
    },
    {
      type: 'education',
      title: 'Advanced Technical Degree (ASIR)',
      institution: 'ICSE',
      period: '2023 - 2025',
      location: 'Las Palmas, Spain',
      description: 'Built a solid foundation in web development, database management, and system administration. Gained practical knowledge in full-stack development and server configuration that prepared me for my cybersecurity career.'
    },
    {
      type: 'education',
      title: 'Technical High School Diploma',
      institution: 'Colegio San Ignacio de Loyola',
      period: 'Sep 2021 - May 2023',
      location: 'Las Palmas, Spain',
      description: 'Where my passion for computer science and technology truly began. Developed strong problem-solving skills and discovered my interest in cybersecurity and ethical hacking.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      {/* Intro Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate Cyber Security enthusiast specializing in 
          Red Team operations and ethical hacking. With a strong foundation in DevOps and system administration, 
          I combine technical expertise with hands-on experience to identify vulnerabilities and strengthen security postures. 
          My journey spans from infrastructure automation to penetration testing, always driven by curiosity and 
          a commitment to continuous learning.
        </p>
      </div>

      {/* Timeline Title */}
      <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line (centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className={`flex items-center ${item.type === 'education' ? 'flex-row' : 'flex-row-reverse'}`}>
              
              {/* Content Card */}
              <div className={`w-5/12 ${item.type === 'education' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-white/10 dark:bg-zinc-900/50 border border-gray-400 dark:border-gray-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-green-600 dark:text-green-400 font-semibold">{item.institution}</p>
                  </div>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    item.type === 'experience' 
                      ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                      : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                  }`}>
                    {item.type === 'experience' ? 'EXPERIENCE' : 'EDUCATION'}
                  </span>

                  <p className="opacity-70 text-sm mb-2">📅 {item.period}</p>
                  <p className="opacity-70 text-sm mb-4">📍 {item.location}</p>

                  {item.description && (
                    <p className={`opacity-80 text-sm leading-relaxed ${item.type === 'education' ? 'text-right' : 'text-left'}`}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Icon (centered) */}
              <div className="relative flex items-center justify-center w-2/12">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                  item.type === 'experience' 
                    ? 'bg-green-500 border-4 border-white dark:border-black' 
                    : 'bg-blue-500 border-4 border-white dark:border-black'
                }`}>
                  {item.type === 'experience' ? (
                    <span className="text-white text-lg">💼</span>
                  ) : (
                    <span className="text-white text-lg">🎓</span>
                  )}
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;