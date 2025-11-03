import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Phone, Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppSelector";
import { logout } from "../../store/slices/authSlice";
import axios from "axios";
import logo from "../../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { searchItems, SearchItem } from "../../utils/searchData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  }, [isSearchOpen]);

  // Close search with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Update search results when query changes
  useEffect(() => {
    if (query.trim()) {
      const results = searchItems(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const navLinksLeft = [
    { name: "Programmes", path: "/programmes" },
    { name: "Assessments", path: "/assessment" },
    { name: "Care Pathway", path: "/carepathway" },
  ];

  const navLinksRight = [
    { name: "About", path: "/about" },
    { name: "Levels of Engagement", path: "/levels-of-engagement" },
    { name: "Contact", path: "/contact" },
  ];

  const allNavLinks = [
    ...navLinksLeft,
    ...navLinksRight,
  ];

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(logout());
      setIsSearchOpen(false);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const className = `fixed top-0 left-0 right-0 z-50`;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(query.trim())}`);
    setIsSearchOpen(false);
  };

  // Motion variants
  const headerVariants = {
    initial: { boxShadow: "0 0 0 rgba(0,0,0,0)", y: 0 },
    elevated: { boxShadow: "0 8px 24px rgba(0,0,0,0.08)", y: 0, transition: { duration: 0.25 } },
    flat: { boxShadow: "0 0 0 rgba(0,0,0,0)", y: 0, transition: { duration: 0.25 } },
  };

  const fadeSlide = {
    initial: { opacity: 0, y: -6 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.22 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.18 } },
  };

  const slideDown = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.25 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const searchDesktop = {
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.22 } },
    exit: { opacity: 0, x: 16, transition: { duration: 0.18 } },
  };

  return (
    <motion.header
      className={className}
      style={{ fontFamily: "Playfair Display" }}
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "elevated" : "flat"}
    >
      {/* Top strip */}
      <motion.div
        className="w-full h-[32px] flex items-center justify-between px-4 bg-gradient-to-r from-white via-[#E8D7BA] to-white"
        layout
      >
        <div className="flex items-center justify-center gap-2 text-[#4B2E16] font-semibold px-2">
          <Phone className="w-4 h-4" />
          <p className="text-xs md:text-sm pb-0.5">For Enquiries: +44 (0) XX XX XX XX</p>
        </div>
        {/* <p className="text-xs md:text-sm pb-0.5">Emergency Line</p> */}
      </motion.div>

      {/* Main bar */}
      <motion.div
        className="h-[96px] w-full bg-[#E8D7BA] text-[#2E2E2E] px-4 md:px-8 flex items-center"
        layout
        transition={{ duration: 0.25 }}
      >
        {/* Left side (equal width) — always visible */}
        <motion.div
          className="hidden md:flex flex-1 items-center justify-center gap-8"
          layout
        >
          {navLinksLeft.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-smooth hover:text-[#4B2E16] ${
                location.pathname === link.path ? "text-[#4B2E16]" : "text-[#2E2E2E]/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* Mobile left spacer */}
        <div className="md:hidden flex-1" />

        {/* Center logo */}
        <motion.div className="flex-shrink-0 flex justify-center" layout>
          <motion.img
            src={logo}
            alt="Logo"
            className="w-28 md:w-32 cursor-pointer"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </motion.div>

        {/* Right side (equal width) */}
        <motion.div className="hidden md:flex flex-1 items-center" layout>
          <AnimatePresence initial={false} mode="wait">
            {!isSearchOpen ? (
              <motion.div
                key="nav-right"
                {...fadeSlide}
                className="w-full flex items-center justify-center gap-8"
              >
                {navLinksRight.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-smooth hover:text-[#4B2E16] ${
                      location.pathname === link.path ? "text-[#4B2E16]" : "text-[#2E2E2E]/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {isAuthenticated && (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                )}

                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 rounded-md hover:bg-white/40 transition"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="nav-search"
                className="w-full flex items-center justify-end"
                {...searchDesktop}
              >
                <div className="relative w-[220px] md:w-[300px] lg:w-[360px]">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      ref={searchInputRef}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search…"
                      className="w-full rounded-md bg-white/90 border border-[#C8A97E]/60 px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-[#C8A97E]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setIsSearchOpen(false);
                        setQuery("");
                        setSearchResults([]);
                      }}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#4B2E16]/70 hover:text-[#4B2E16]"
                      aria-label="Close search"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </form>

                  {/* Search Suggestions */}
                  {searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg border border-[#C8A97E]/20 max-h-80 overflow-y-auto z-50">
                      {searchResults.map((result) => (
                        <button
                          key={result.id}
                          onClick={() => {
                            navigate(result.path);
                            setIsSearchOpen(false);
                            setQuery("");
                            setSearchResults([]);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-[#E8D7BA]/20 border-b border-[#C8A97E]/10 last:border-b-0 transition-colors"
                        >
                          <div className="font-medium text-[#2E2E2E]">{result.title}</div>
                          <div className="text-sm text-[#6B5B35] mt-1">{result.description}</div>
                          <div className="text-xs text-[#8B6F47] mt-1">{result.category}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsSearchOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-white/40 transition"
            aria-label="Toggle search"
          >
            {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-white/40 transition"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Search Bar */}
      <AnimatePresence initial={false}>
        {isSearchOpen && (
          <motion.div
            className="md:hidden bg-[#E8D7BA] px-4 py-3 border-t border-white/40"
            {...slideDown}
          >
            <form onSubmit={handleSearchSubmit} className="w-full flex justify-center">
              <div className="relative w-[220px]">
                <input
                  ref={searchInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                  className="w-full rounded-md bg-white/90 border border-[#C8A97E]/60 px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setQuery("");
                    setSearchResults([]);
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#4B2E16]/70 hover:text-[#4B2E16]"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Mobile Search Suggestions */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg border border-[#C8A97E]/20 max-h-60 overflow-y-auto z-50">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => {
                          navigate(result.path);
                          setIsSearchOpen(false);
                          setQuery("");
                          setSearchResults([]);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-[#E8D7BA]/20 border-b border-[#C8A97E]/10 last:border-b-0 transition-colors"
                      >
                        <div className="font-medium text-[#2E2E2E]">{result.title}</div>
                        <div className="text-sm text-[#6B5B35] mt-1">{result.description}</div>
                        <div className="text-xs text-[#8B6F47] mt-1">{result.category}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence initial={false}>
        {isMobileMenuOpen && !isSearchOpen && (
          <motion.nav
            className="md:hidden bg-[#E8D7BA] px-4 pb-4 flex flex-col gap-4 border-t border-white/40"
            {...slideDown}
          >
            {allNavLinks.map((link) => (
              <motion.div key={link.path} {...fadeSlide}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-smooth hover:text-[#4B2E16] ${
                    location.pathname === link.path ? "text-[#4B2E16]" : "text-[#2E2E2E]/80"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {isAuthenticated && (
              <motion.div {...fadeSlide}>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-500 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </motion.div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
