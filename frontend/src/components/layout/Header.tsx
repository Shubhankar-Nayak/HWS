import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector';
import { logout } from '../../store/slices/authSlice';
import axios from 'axios';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(state => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programmes', path: '/programmes' },
    { name: 'Exclusive Access', path: '/exclusive-access' },
    { name: 'Booking', path: '/booking' },
    { name: 'MyBookings', path: '/mybookings' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = async () => {
    try {
      // Call backend to clear cookie
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, { withCredentials: true });
      // Update redux state
      dispatch(logout());
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-soft'
          : 'bg-background/60 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Holistic Wellness
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/70'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-500 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/70'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-500 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
