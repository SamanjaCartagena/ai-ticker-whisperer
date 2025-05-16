
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChartBar, ChartLine, TrendingUp, TrendingDown, Calendar, Wallet, DollarSign, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardLayout from '../components/DashboardLayout';
import AIInsight from '../components/AIInsight';

// Mock stock historical data
const historicalData = [
  { date: '2025-04-16', price: 175.23 },
  { date: '2025-04-17', price: 176.45 },
  { date: '2025-04-18', price: 178.12 },
  { date: '2025-04-19', price: 177.89 },
  { date: '2025-04-20', price: 180.34 },
  { date: '2025-04-21', price: 182.67 },
  { date: '2025-04-22', price: 181.91 },
  { date: '2025-04-23', price: 183.45 },
  { date: '2025-04-24', price: 185.78 },
  { date: '2025-04-25', price: 184.56 },
  { date: '2025-04-26', price: 185.23 },
  { date: '2025-04-27', price: 187.89 },
  { date: '2025-04-28', price: 186.90 },
  { date: '2025-04-29', price: 188.23 },
  { date: '2025-04-30', price: 187.35 },
  { date: '2025-05-01', price: 188.67 },
  { date: '2025-05-02', price: 190.45 },
  { date: '2025-05-03', price: 191.23 },
  { date: '2025-05-04', price: 189.78 },
  { date: '2025-05-05', price: 190.56 },
  { date: '2025-05-06', price: 192.34 },
  { date: '2025-05-07', price: 193.67 },
  { date: '2025-05-08', price: 192.89 },
  { date: '2025-05-09', price: 194.23 },
  { date: '2025-05-10', price: 193.78 },
  { date: '2025-05-11', price: 195.45 },
  { date: '2025-05-12', price: 197.23 },
  { date: '2025-05-13', price: 196.78 },
  { date: '2025-05-14', price: 198.90 },
  { date: '2025-05-15', price: 197.35 },
  { date: '2025-05-16', price: 199.42 },
];

// Stock details dictionary for static data
const stockDetails: Record<string, {
  name: string;
  price: number;
  change: number;
  changePercent: number;
  open: number;
  high: number;
  low: number;
  volume: string;
  marketCap: string;
  pe: number;
  dividend: number;
  eps: number;
  week52High: number;
  week52Low: number;
}> = {
  'AAPL': {
    name: 'Apple Inc.',
    price: 187.42,
    change: 1.24,
    changePercent: 0.67,
    open: 186.28,
    high: 188.45,
    low: 185.92,
    volume: '38.5M',
    marketCap: '2.91T',
    pe: 31.2,
    dividend: 0.58,
    eps: 6.02,
    week52High: 199.62,
    week52Low: 164.18
  },
  'MSFT': {
    name: 'Microsoft Corporation',
    price: 412.65,
    change: -2.18,
    changePercent: -0.53,
    open: 414.89,
    high: 415.42,
    low: 410.27,
    volume: '24.2M',
    marketCap: '3.07T',
    pe: 35.6,
    dividend: 0.75,
    eps: 11.59,
    week52High: 430.82,
    week52Low: 309.45
  },
  'GOOGL': {
    name: 'Alphabet Inc.',
    price: 156.84,
    change: 0.76,
    changePercent: 0.49,
    open: 156.18,
    high: 157.43,
    low: 155.62,
    volume: '19.8M',
    marketCap: '1.96T',
    pe: 26.8,
    dividend: 0,
    eps: 5.85,
    week52High: 169.54,
    week52Low: 120.21
  },
  'AMZN': {
    name: 'Amazon.com, Inc.',
    price: 178.89,
    change: 2.34,
    changePercent: 1.32,
    open: 176.55,
    high: 179.32,
    low: 176.12,
    volume: '32.1M',
    marketCap: '1.87T',
    pe: 60.3,
    dividend: 0,
    eps: 2.97,
    week52High: 189.51,
    week52Low: 118.35
  },
  'META': {
    name: 'Meta Platforms, Inc.',
    price: 478.22,
    change: -5.67,
    changePercent: -1.17,
    open: 483.94,
    high: 485.12,
    low: 476.89,
    volume: '27.9M',
    marketCap: '1.22T',
    pe: 32.4,
    dividend: 0,
    eps: 14.76,
    week52High: 531.49,
    week52Low: 274.38
  },
  'TSLA': {
    name: 'Tesla, Inc.',
    price: 224.57,
    change: 4.83,
    changePercent: 2.20,
    open: 220.14,
    high: 225.67,
    low: 219.32,
    volume: '58.7M',
    marketCap: '713.4B',
    pe: 54.8,
    dividend: 0,
    eps: 4.10,
    week52High: 278.98,
    week52Low: 138.80
  },
  'NVDA': {
    name: 'NVIDIA Corporation',
    price: 932.13,
    change: 15.72,
    changePercent: 1.71,
    open: 917.45,
    high: 935.87,
    low: 916.23,
    volume: '45.3M',
    marketCap: '2.30T',
    pe: 78.5,
    dividend: 0.16,
    eps: 11.87,
    week52High: 945.37,
    week52Low: 471.12
  }
};

const StockDetails: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  
  // Use the symbol to get stock details or fallback to a default
  const stock = symbol && stockDetails[symbol] 
    ? stockDetails[symbol] 
    : {
        name: 'Unknown Stock',
        price: 0,
        change: 0,
        changePercent: 0,
        open: 0,
        high: 0,
        low: 0,
        volume: '0',
        marketCap: '0',
        pe: 0,
        dividend: 0,
        eps: 0,
        week52High: 0,
        week52Low: 0
      };
  
  const isPositive = stock.change >= 0;
  
  return (
    <DashboardLayout>
      <div className="mb-4">
        <Link to="/" className="text-primary hover:underline">← Back to Dashboard</Link>
      </div>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{symbol} - {stock.name}</h1>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-2xl font-semibold">${stock.price.toFixed(2)}</span>
          <div className={`flex items-center px-2 py-1 rounded ${isPositive ? 'bg-positive/10' : 'bg-negative/10'}`}>
            {isPositive ? <TrendingUp className="mr-1 h-4 w-4 stock-up" /> : <TrendingDown className="mr-1 h-4 w-4 stock-down" />}
            <span className={isPositive ? 'stock-up' : 'stock-down'}>
              {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
            </span>
          </div>
          <span className="text-sm text-muted-foreground">Today</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-panel p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Price Chart</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded bg-primary text-primary-foreground text-sm">1D</button>
                <button className="px-3 py-1 rounded bg-muted text-muted-foreground text-sm">1W</button>
                <button className="px-3 py-1 rounded bg-muted text-muted-foreground text-sm">1M</button>
                <button className="px-3 py-1 rounded bg-muted text-muted-foreground text-sm">1Y</button>
              </div>
            </div>
            
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={historicalData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fill: 'hsl(var(--foreground))' }}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return `${date.getDate()}/${date.getMonth() + 1}`;
                    }}
                  />
                  <YAxis 
                    tick={{ fill: 'hsl(var(--foreground))' }}
                    domain={['dataMin - 5', 'dataMax + 5']}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--foreground))'
                    }}
                    labelFormatter={(value) => {
                      const date = new Date(value);
                      return date.toLocaleDateString('en-US', { 
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      });
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke={isPositive ? "hsl(var(--positive))" : "hsl(var(--negative))"}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, fill: isPositive ? "hsl(var(--positive))" : "hsl(var(--negative))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="glass-panel p-6">
            <h2 className="text-lg font-semibold mb-4">Stock Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-muted-foreground mb-2">Price Info</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Open</span>
                    <span className="font-medium">${stock.open.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High</span>
                    <span className="font-medium">${stock.high.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Low</span>
                    <span className="font-medium">${stock.low.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volume</span>
                    <span className="font-medium">{stock.volume}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-muted-foreground mb-2">Company Info</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Market Cap</span>
                    <span className="font-medium">${stock.marketCap}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>P/E Ratio</span>
                    <span className="font-medium">{stock.pe.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dividend</span>
                    <span className="font-medium">{stock.dividend.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>EPS</span>
                    <span className="font-medium">${stock.eps.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-muted-foreground mb-2">Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>52 Week High</span>
                    <span className="font-medium">${stock.week52High.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>52 Week Low</span>
                    <span className="font-medium">${stock.week52Low.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="w-full h-2 bg-muted rounded-full relative">
                    <div 
                      className="absolute h-2 bg-gradient-to-r from-negative via-primary to-positive rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                    <div 
                      className="absolute w-2 h-4 bg-foreground rounded-full top-1/2 transform -translate-y-1/2"
                      style={{ 
                        left: `${((stock.price - stock.week52Low) / (stock.week52High - stock.week52Low)) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>${stock.week52Low.toFixed(2)}</span>
                    <span>${stock.week52High.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <AIInsight symbol={symbol || 'AAPL'} />
          
          <div className="glass-panel p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 rounded-md bg-primary/10 mr-3">
                  <ChartLine className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Growth Potential</div>
                  <div className="text-sm text-muted-foreground">Strong future outlook</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-md bg-primary/10 mr-3">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Volatility</div>
                  <div className="text-sm text-muted-foreground">Moderate volatility</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-md bg-primary/10 mr-3">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Value Analysis</div>
                  <div className="text-sm text-muted-foreground">Fairly valued at current price</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-md bg-primary/10 mr-3">
                  <Wallet className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Financial Health</div>
                  <div className="text-sm text-muted-foreground">Strong balance sheet</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Next Earnings Date</span>
                <span className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  July 28, 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StockDetails;
