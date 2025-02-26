import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  title: string;
  description: string;
  link: string;
}

const mockResults: SearchResult[] = [
  {
    title: 'AI-Powered Features',
    description: 'Discover how our AI technology can transform your practice',
    link: '#features'
  },
  {
    title: 'Pricing Plans',
    description: 'View our flexible pricing options',
    link: '#pricing'
  },
  {
    title: 'About Us',
    description: 'Learn about our mission and team',
    link: '#about'
  }
];

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.length > 2) {
      const filtered = mockResults.filter(
        result => 
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-[#C0C0C0] hover:bg-[#B0B0B0] text-gray-700 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm"
        aria-label="Open search"
      >
        <SearchIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Search...</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed inset-x-4 top-4 max-w-2xl mx-auto z-50"
            >
              <div className="bg-[#C0C0C0] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="flex items-center p-4 border-b border-gray-300">
                  <SearchIcon className="w-6 h-6 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="flex-1 px-4 py-2 bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none text-lg"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-300 rounded-full transition-colors duration-200"
                    aria-label="Close search"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {results.length > 0 && (
                  <div className="p-4 max-h-[60vh] overflow-y-auto bg-white/80 backdrop-blur-sm">
                    {results.map((result, index) => (
                      <motion.a
                        key={index}
                        href={result.link}
                        onClick={() => setIsOpen(false)}
                        className="block p-4 rounded-xl hover:bg-gray-200/50 transition-colors mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <h3 className="text-lg font-semibold text-gray-800">
                          {result.title}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {result.description}
                        </p>
                      </motion.a>
                    ))}
                  </div>
                )}

                {query.length > 2 && results.length === 0 && (
                  <div className="p-8 text-center text-gray-600 bg-white/80">
                    <p className="text-lg">No results found for "{query}"</p>
                    <p className="text-sm mt-2">Try different keywords or check spelling</p>
                  </div>
                )}

                {query.length === 0 && (
                  <div className="p-8 text-center text-gray-600 bg-white/80">
                    <p className="text-lg">Start typing to search</p>
                    <p className="text-sm mt-2">Search for features, pricing, or help</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};