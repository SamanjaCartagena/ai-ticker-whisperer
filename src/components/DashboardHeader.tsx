
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import StockSearch from './StockSearch';

const DashboardHeader: React.FC = () => {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M2 12.5H5L8 8.5L11 16.5L14 10.5L16 12.5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-xl">AI Stock Trader</span>
        </Link>
        
        <div className="w-full sm:w-96">
          <StockSearch />
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Dashboard</Link>
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Watchlist</Link>
          <Link to="/" className="text-foreground hover:text-primary transition-colors">AI Insights</Link>
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;
