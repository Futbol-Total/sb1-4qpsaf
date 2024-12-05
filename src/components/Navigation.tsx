import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-pink-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <Heart fill="currentColor" /> Love Story
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-pink-200">Inicio</Link>
          <Link to="/diary" className="hover:text-pink-200">Diario</Link>
          {user && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 hover:text-pink-200"
            >
              <LogOut size={20} />
              Salir
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;