import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Search, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { searchItems, SearchItem } from "../../utils/searchData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);
  const [isProgrammesHover, setIsProgrammesHover] = useState(false);

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (query.trim()) setSearchResults(searchItems(query));
    else setSearchResults([]);
  }, [query]);

  const programmesSubmenu = [
    { name: "Mental Health", path: "/programmes/mental-health" },
    { name: "Wellness & Longevity", path: "/programmes/wellness-longevity" },
    { name: "Holistic Wellbeing", path: "/programmes/holistic-wellbeing" },
  ];

  const navLinksLeft = [
    { name: "Programmes", path: "/programmes", hasDropdown: true },
    // { name: "Assessments", path: "/assessment" },
    { name: "Care Pathway", path: "/carepathway" },
    { name: "About", path: "/about" },
  ];

  const navLinksRight = [
    { name: "Contact", path: "/contact" },
    
    { name: "Levels of Engagement", path: "/levels-of-engagement" },
  ];

  const allNavLinks = [...navLinksLeft, ...navLinksRight];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(query.trim())}`);
    setIsSearchOpen(false);
  };

  const slideDown = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.25 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ fontFamily: "Playfair Display" }}
    >
      {/* TOP STRIP */}
      <div className="w-full h-[32px] flex items-center justify-between px-4 bg-gradient-to-r from-white via-[#E8D7BA] to-white"
        style={{ fontFamily: "system-ui" }}>
        <div className="flex items-center gap-2 text-[#4B2E16] font-semibold px-2">
          <Phone className="w-4 h-4" />
          <p className="text-xs md:text-sm pb-0.5">
            For Enquiries: +44 7770 778104
          </p>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="h-[96px] w-full bg-[#E8D7BA] px-4 md:px-8 flex items-center text-[#2E2E2E]">

        {/* LEFT NAV (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">

          {/* PROGRAMMES (Hover Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setIsProgrammesHover(true)}
            onMouseLeave={() => setIsProgrammesHover(false)}
          >
            <button
              className={`flex items-center gap-1 transition-smooth hover:text-[#4B2E16] ${
                location.pathname.includes("/programmes")
                  ? "text-[#4B2E16]"
                  : "text-[#2E2E2E]/80"
              }`}
            >
              Programmes
              {/* DROPDOWN ARROW */}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isProgrammesHover ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* DROPDOWN MENU */}
            <AnimatePresence>
              {isProgrammesHover && (
                <motion.div
                  {...slideDown}
                  className="absolute left-0 mt-2 bg-white border border-[#C8A97E] rounded-md shadow-lg py-2 w-56 z-50"
                >
                  {/* POINTER ARROW */}
                  <div className="absolute -top-2 left-6 w-3 h-3 rotate-45 bg-white border-l border-t border-[#C8A97E]" />

                  {programmesSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 hover:bg-[#E8D7BA]/40 text-[#4B2E16]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining Desktop Left Links */}
          {navLinksLeft.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-[#4B2E16] ${
                location.pathname === link.path ? "text-[#4B2E16]" : "text-[#2E2E2E]/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-28 md:w-32 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* RIGHT NAV */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navLinksRight.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-[#4B2E16] ${
                location.pathname === link.path ? "text-[#4B2E16]" : "text-[#2E2E2E]/80"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button onClick={() => setIsSearchOpen(true)} className="p-2 rounded-md hover:bg-white/40">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <button onClick={() => setIsSearchOpen((v) => !v)} className="p-2 rounded-md hover:bg-white/40">
            {isSearchOpen ? <X /> : <Search />}
          </button>

          <button onClick={() => setIsMobileMenuOpen((v) => !v)} className="p-2 rounded-md hover:bg-white/40">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && !isSearchOpen && (
          <motion.nav {...slideDown} className="md:hidden bg-[#E8D7BA] px-4 pb-4 flex flex-col gap-4 border-t border-white/40">

            {/* PROGRAMMES MOBILE ACCORDION */}
            <div>
              <button
                className="w-full flex justify-between items-center text-sm font-medium text-[#4B2E16]"
                onClick={() => setIsProgrammesOpen((p) => !p)}
              >
                Programmes
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    isProgrammesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <AnimatePresence>
                {isProgrammesOpen && (
                  <motion.div {...slideDown} className="ml-4 mt-2 flex flex-col gap-3">
                    {programmesSubmenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[#4B2E16] text-sm border-l pl-3 border-[#4B2E16]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining Mobile Links */}
            {allNavLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-[#2E2E2E]/80 hover:text-[#4B2E16]"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
