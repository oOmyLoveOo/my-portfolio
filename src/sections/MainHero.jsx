import Homepage from './Homepage';
import About from './About';

const MainHero = () => {
  return (
    <div className="flex flex-col">
      <section id="home" className="min-h-[40vh] flex items-center justify-center">
        <Homepage />
      </section>
      
      <section id="about" className="min-h-[60vh] flex items-center justify-center">
        <About />
      </section>
    </div>
  );
};

export default MainHero;