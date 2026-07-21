import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const hideOn = ['/', '/gallery', '/about', '/services', '/products', '/why-us'];

export default function BackButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (hideOn.includes(pathname)) return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-24 left-6 z-[90] bg-brand-orange hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-110 group hidden md:flex"
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
    </button>
  );
}
