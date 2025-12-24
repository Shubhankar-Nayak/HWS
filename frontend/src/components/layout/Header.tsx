import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import SearchResults from "../SearchResults";
import { searchItems } from "../../utils/searchData";

const Header = ({isProgrammesHover,setIsProgrammesHover}) => {
  
  const [isLevelsHover, setIsLevelsHover] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgrammesMobileOpen, setIsProgrammesMobileOpen] = useState(false);
  const [isLevelsMobileOpen, setIsLevelsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  // Focus search input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(isProgrammesHover)
    setIsProgrammesMobileOpen(isProgrammesHover)
  },[isProgrammesHover])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isSearchOpen]);

  // Get search results
  const searchResults = searchQuery.trim() ? searchItems(searchQuery) : [];

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const programmesSubmenu = [
    { name: "Mental Health", path: "/programmes/mental-health" },
    { name: "Wellness & Longevity", path: "/programmes/wellness-longevity" },
    { name: "Holistic Wellbeing", path: "/programmes/holistic-wellbeing" },
  ];

  const levelsSubmenu = [
    { name: "Levels of Engagement", path: "/levels-of-engagement" },
    { name: "HWS Retreat", path: "/retreats-restorative" },
  ];

  const slideDown = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <>
    <motion.header className="fixed top-0 left-0 right-0 z-50">
      {/* TOP BAR */}
      <div className="w-full bg-[#053d57] px-4 md:px-6 lg:px-8 py-5 md:py-0 flex items-center justify-between text-[#ebf0f2]">

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* LEFT NAV (DESKTOP) - Hidden during search */}
        <div className={`hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 xl:gap-10 transition-all duration-300 ${isSearchOpen ? "md:hidden" : ""}`}>
          {/* PROGRAMMES */}
          <div
            onMouseEnter={() => setIsProgrammesHover(true)}
            onMouseLeave={() => setIsProgrammesHover(false)}
          >
            <button className="flex items-center gap-1 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              PROGRAMMES
              
            </button>

            <AnimatePresence>
              {isProgrammesHover && (
                <motion.div
                  {...slideDown}
                  className="absolute left-0 top-[100px] mt-3 w-screen bg-white shadow-xl border-t border-[#053d57]"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  <div className="grid grid-cols-3 gap-12 bg-[#176a79]/10 px-16 py-12">
                    <div className="col-span-2">
                      <ul className="space-y-6">
                        {programmesSubmenu.map(item => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              className="text-lg text-[#053d57] hover:text-[#053d57]/70"
                            >
                              {item.name.toUpperCase()}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wide text-[#053d57] mb-6">
                        May we help?
                      </p>
                      <div className="space-y-4">
                        <Link
                          to="/contact"
                          className="block text-center px-4 py-2 bg-[#053d57]/80 text-white"
                        >
                          CONTACT
                        </Link>
                        <Link
                          to="/faq"
                          className="block text-center px-4 py-2 border border-[#053d57]/30 text-[#053d57]"
                        >
                          FAQ
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/carepathway"
            className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform hover:text-[#ebf0f2]/50"
          >
            CARE PATHWAY
          </Link>

          <Link
            to="/about"
            className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform hover:text-[#ebf0f2]/50"
          >
            ABOUT
          </Link>
        </div>

        {/* LOGO */}
        <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
          <img
            src={logo}
            alt="Logo"
            className="w-20 md:w-24 lg:w-28 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* MOBILE SEARCH */}
        <button 
          className="md:hidden p-2 z-10"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <Search className="w-5 h-5" />
        </button>

        {/* SEARCH INPUT (Desktop & Mobile) - Appears when search is active */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              ref={searchContainerRef}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute md:relative md:flex-1 md:mx-6 left-0 right-0 px-4 md:px-0"
            >
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#176a79]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* RIGHT NAV (DESKTOP) - Hidden during search */}
        <div className={`hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 transition-all duration-300 ${isSearchOpen ? "md:hidden" : ""}`}>
          <Link
            to="/faq"
            className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform hover:text-[#ebf0f2]/50"
          >
            FAQ
          </Link>

          {/* LEVELS */}
          <div
            onMouseEnter={() => setIsLevelsHover(true)}
            onMouseLeave={() => setIsLevelsHover(false)}
          >
            <button className="flex items-center gap-1 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              LEVELS OF ENGAGEMENT
             
            </button>

            <AnimatePresence>
              {isLevelsHover && (
                <motion.div
                  {...slideDown}
                  className="absolute right-0 top-[100px] mt-3 w-screen bg-white shadow-xl border-t border-[#053d57]"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  <div className="grid grid-cols-3 gap-12 bg-[#176a79]/10 px-16 py-12">
                    <div className="col-span-2">
                      <ul className="space-y-6">
                        {levelsSubmenu.map(item => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              className="text-lg text-[#053d57] hover:text-[#053d57]/70"
                            >
                              {item.name.toUpperCase()}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wide text-[#053d57] mb-6">
                        May we help?
                      </p>
                      <div className="space-y-4">
                        <Link
                          to="/contact"
                          className="block text-center px-4 py-2 bg-[#053d57]/80 text-white"
                        >
                          CONTACT
                        </Link>
                        <Link
                          to="/faq"
                          className="block text-center px-4 py-2 border border-[#053d57]/30 text-[#053d57]"
                        >
                          FAQ
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform hover:text-[#ebf0f2]/50"
          >
            CONTACT
          </Link>

          <button>
            <Search className="w-5 h-5" onClick={() => setIsSearchOpen(!isSearchOpen)} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#053d57] text-[#ebf0f2]"
          >
            <div className="px-4 py-6 space-y-5">
              {/* PROGRAMMES */}
              <div>
                <button
                  onClick={() =>
                    setIsProgrammesMobileOpen(!isProgrammesMobileOpen)
                  }
                  className="w-full flex items-center justify-between py-2"
                >
                  <span>PROGRAMMES</span>
                  <ChevronDown
                    size={16}
                    className={
                      isProgrammesMobileOpen
                        ? "rotate-180 transition-transform"
                        : "transition-transform"
                    }
                  />
                </button>

                {isProgrammesMobileOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {programmesSubmenu.map(item => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block py-2 text-[#ebf0f2]/80 hover:text-[#ebf0f2]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/carepathway"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CARE PATHWAY
              </Link>

              <Link
                to="/about"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>

              <Link
                to="/faq"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>

              {/* LEVELS */}
              <div>
                <button
                  onClick={() =>
                    setIsLevelsMobileOpen(!isLevelsMobileOpen)
                  }
                  className="w-full flex items-center justify-between py-2"
                >
                  <span>LEVELS OF ENGAGEMENT</span>
                  <ChevronDown
                    size={16}
                    className={
                      isLevelsMobileOpen
                        ? "rotate-180 transition-transform"
                        : "transition-transform"
                    }
                  />
                </button>

                {isLevelsMobileOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {levelsSubmenu.map(item => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block py-2 text-[#ebf0f2]/80 hover:text-[#ebf0f2]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

    {/* SEARCH RESULTS MODAL */}
    <AnimatePresence>
      {isSearchOpen && searchQuery.trim() && (
        <SearchResults
          results={searchResults}
          query={searchQuery}
          onClose={handleSearchClose}
        />
      )}
    </AnimatePresence>
  </>
  );
};

export default Header;
