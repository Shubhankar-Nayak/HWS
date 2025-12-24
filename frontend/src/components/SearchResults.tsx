import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { SearchItem } from "../utils/searchData";

interface SearchResultsProps {
  results: SearchItem[];
  query: string;
  onClose: () => void;
}

const SearchResults = ({ results, query, onClose }: SearchResultsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 z-40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-24 left-0 right-0 z-50 bg-white m-4 md:m-8 lg:m-12 rounded-lg shadow-2xl max-h-[70vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#053d57]">Search Results</h2>
            <p className="text-gray-600 text-sm mt-1">
              {results.length} result{results.length !== 1 ? 's' : ''} found for "{query}"
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Results */}
        <div className="p-6 space-y-4">
          {results.length > 0 ? (
            results.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={result.path}
                  onClick={onClose}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-[#053d57] hover:bg-[#053d57]/5 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#053d57] group-hover:text-[#053d57] transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {result.description}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="inline-block px-3 py-1 bg-[#176a79]/10 text-[#053d57] text-xs font-semibold rounded-full">
                          {result.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {result.path === "/" ? "Home" : result.path.replace(/\//g, " / ").substring(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No results found for "{query}"
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Try searching with different keywords
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchResults;
