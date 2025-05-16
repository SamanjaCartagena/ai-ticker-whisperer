
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

// Mock stock data for search suggestions
const stockSuggestions = [
  { symbol: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'MSFT', name: 'Microsoft Corporation' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.' },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.' },
  { symbol: 'META', name: 'Meta Platforms, Inc.' },
  { symbol: 'TSLA', name: 'Tesla, Inc.' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation' },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.' },
  { symbol: 'V', name: 'Visa Inc.' },
  { symbol: 'WMT', name: 'Walmart Inc.' },
];

const StockSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const filteredSuggestions = searchTerm 
    ? stockSuggestions.filter(stock => 
        stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
        stock.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) 
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Assuming the first suggestion is the most relevant
      const stock = filteredSuggestions[0]?.symbol || searchTerm.toUpperCase();
      navigate(`/stock/${stock}`);
      setSearchTerm('');
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Search stocks by symbol or name..."
          className="w-full py-2 px-4 pl-10 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-card border border-border rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredSuggestions.map((stock) => (
            <div
              key={stock.symbol}
              className="px-4 py-2 cursor-pointer hover:bg-muted flex items-center justify-between"
              onClick={() => {
                navigate(`/stock/${stock.symbol}`);
                setSearchTerm('');
                setShowSuggestions(false);
              }}
            >
              <span className="font-medium">{stock.symbol}</span>
              <span className="text-muted-foreground text-sm">{stock.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StockSearch;
