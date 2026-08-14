import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-200">
      <Sidebar />

      <main className="min-h-screen md:ml-64">
        <Home />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
      </main>
    </div>
  );
}

export default App;
