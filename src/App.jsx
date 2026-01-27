import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import { ThemeProvider } from "./ThemeContext";
import Layout from "./layout";
import MainHero from './sections/MainHero';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <ThemeProvider>
      {!isLoaded && (
        <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
          <LoadingScreen onComplete={() => setIsLoaded(true)} />
        </div>
      )}
      {/* ⬇️ ELIMINA bg-white dark:bg-black text-gray-900 dark:text-teal-100 */}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<MainHero />} />
              <Route path="/sections/portfolio" element={<Portfolio />} />
              <Route path="/sections/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;