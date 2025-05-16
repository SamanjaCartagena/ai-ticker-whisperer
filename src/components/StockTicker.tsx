
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Static ticker data for now
const tickerData = [
  { symbol: 'AAPL', price: 187.42, change: 1.24, changePercent: 0.67 },
  { symbol: 'MSFT', price: 412.65, change: -2.18, changePercent: -0.53 },
  { symbol: 'GOOGL', price: 156.84, change: 0.76, changePercent: 0.49 },
  { symbol: 'AMZN', price: 178.89, change: 2.34, changePercent: 1.32 },
  { symbol: 'META', price: 478.22, change: -5.67, changePercent: -1.17 },
  { symbol: 'TSLA', price: 224.57, change: 4.83, changePercent: 2.20 },
  { symbol: 'NVDA', price: 932.13, change: 15.72, changePercent: 1.71 },
  { symbol: 'JPM', price: 187.14, change: -0.93, changePercent: -0.49 },
  { symbol: 'V', price: 275.36, change: 1.67, changePercent: 0.61 },
  { symbol: 'WMT', price: 64.45, change: 0.28, changePercent: 0.44 },
];

const StockTicker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-secondary py-2 border-y border-border">
      <div className="ticker-animation flex items-center gap-10 whitespace-nowrap">
        {tickerData.map((stock) => (
          <Link 
            key={stock.symbol} 
            to={`/stock/${stock.symbol}`}
            className="flex items-center gap-2 hover:bg-secondary/80 px-2 py-1 rounded-md transition-colors"
          >
            <span className="font-bold">{stock.symbol}</span>
            <span>${stock.price}</span>
            <span 
              className={`flex items-center gap-1 ${stock.change >= 0 ? 'stock-up' : 'stock-down'}`}
            >
              {stock.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
            </span>
          </Link>
        ))}
        {/* Duplicate for seamless looping */}
        {tickerData.map((stock) => (
          <Link 
            key={`${stock.symbol}-dup`} 
            to={`/stock/${stock.symbol}`}
            className="flex items-center gap-2 hover:bg-secondary/80 px-2 py-1 rounded-md transition-colors"
          >
            <span className="font-bold">{stock.symbol}</span>
            <span>${stock.price}</span>
            <span 
              className={`flex items-center gap-1 ${stock.change >= 0 ? 'stock-up' : 'stock-down'}`}
            >
              {stock.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;
