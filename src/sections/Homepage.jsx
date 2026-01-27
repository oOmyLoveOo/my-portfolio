const Homepage = () => {
  return (
    <div className="w-full">
      {/* Sección principal con título */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold">
          Hi! I'm Wuke. <br/>
          <span className="text-4xl font-mono text-green-500">A Red Teaming Enthusiast.</span>
        </h1>
        <p className="mt-10 text-xl opacity-60 italic max-w-2xl mx-auto border-t border-gray-700 dark:border-gray-800 pt-6">
          "I don't just build projects, I analyze the logic behind the breach."
        </p>
      </div>
      
      {/* Sección con foto y JSON */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 max-w-5xl mx-auto">
        
        {/* Foto */}
        <div className="text-center p-10">
          <img src="/assets/Me.png" alt="Avatar" className="h-70 rounded-full"/>
        </div> 
        
        {/* JSON con datos */}
        <div className="flex-1 bg-white/10 dark:bg-zinc-900/50 border border-green-500/30 rounded-lg p-6 font-mono text-sm backdrop-blur-sm">
          <div className="opacity-60">// user data</div>
          <div className="mt-2">
            <span className="text-yellow-400">{'{'}</span>
            <div className="ml-4 mt-2">
              <span className="text-blue-400">name</span>
              <span>: </span>
              <span className="text-green-400">"Wuke Zhang"</span>
              <span>,</span>
            </div>
            <div className="ml-4 mt-1">
              <span className="text-blue-400">career</span>
              <span>: </span>
              <span className="text-green-400">"Cyber Security"</span>
              <span>,</span>
            </div>
            <div className="ml-4 mt-1">
              <span className="text-blue-400">focus</span>
              <span>: </span>
              <span className="text-green-400">"Red Team & Ethical Hacking"</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-400">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;