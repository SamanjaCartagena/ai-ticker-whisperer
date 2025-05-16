
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, ChartLine } from 'lucide-react';

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
}

const StockCard: React.FC<StockCardProps> = ({
  symbol,
  name,
  price,
  change,
  changePercent,
  volume,
}) => {
  const isPositive = change >= 0;

  return (
    <Link to={`/stock/${symbol}`} className="w-full">
      <div className="glass-panel p-4 transition-all hover:shadow-md hover:border-primary/30">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg">{symbol}</h3>
            <p className="text-muted-foreground text-sm truncate">{name}</p>
          </div>
          <div className={`flex items-center px-2 py-1 rounded ${isPositive ? 'bg-positive/10' : 'bg-negative/10'}`}>
            {isPositive ? <TrendingUp className="mr-1 h-4 w-4 stock-up" /> : <TrendingDown className="mr-1 h-4 w-4 stock-down" />}
            <span className={isPositive ? 'stock-up' : 'stock-down'}>
              {isPositive ? '+' : ''}{changePercent.toFixed(2)}%
            </span>
          </div>
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <div className="text-2xl font-semibold">${price.toFixed(2)}</div>
            <div className={`text-sm ${isPositive ? 'stock-up' : 'stock-down'}`}>
              {isPositive ? '+' : ''}{change.toFixed(2)} today
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="text-xs text-muted-foreground">
              Volume: {volume}
            </div>
            <div className="mt-2">
              <ChartLine className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Simple mini chart placeholder */}
        <div className="h-12 mt-3 flex items-end">
          {[...Array(15)].map((_, i) => {
            const height = 10 + Math.random() * 25;
            return (
              <div 
                key={i}
                className={`w-full h-[${height}px] mx-0.5 ${isPositive ? 'bg-positive/30' : 'bg-negative/30'}`}
                style={{ height: `${height}px` }}
              />
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default StockCard;
