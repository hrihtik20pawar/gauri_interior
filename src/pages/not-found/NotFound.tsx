import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page Not Found | Gauri Interior Pvt. Ltd.';
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9f6] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">404</p>
        <h1 className="text-6xl md:text-8xl font-serif text-brand-green mb-6">Page Not Found</h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="bg-brand-orange text-white px-8 py-3.5 rounded font-medium hover:bg-brand-orange/90 transition-colors flex items-center gap-2 shadow-lg shadow-brand-orange/20"
          >
            <Home className="w-5 h-5" /> Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="backdrop-blur-md bg-white/80 border border-gray-200 text-gray-700 px-8 py-3.5 rounded font-medium hover:bg-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
