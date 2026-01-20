import { CodeXml, Github, ExternalLink } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Título */}
          <div className="flex items-center gap-2">
            <CodeXml className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              MigueDev<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Enlaces Rápidos */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
            <a href="#tecnologias" className="hover:text-blue-600 transition-colors">Tecnologías</a>
            <a href="#sobre-mi" className="hover:text-blue-600 transition-colors">Sobre mí</a>
          </div>

          {/* Botones de Acción */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/MigueADM7/Energy-dashboard" 
              target="_blank" 
              className="p-2 text-gray-500 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mdelgadom2025@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              Contacto <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;