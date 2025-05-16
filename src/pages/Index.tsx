
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import StockTicker from '../components/StockTicker';
import StockCard from '../components/StockCard';
import AIInsight from '../components/AIInsight';

// Sample stock data
const topStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 187.42, change: 1.24, changePercent: 0.67, volume: '38.5M' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 412.65, change: -2.18, changePercent: -0.53, volume: '24.2M' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 156.84, change: 0.76, changePercent: 0.49, volume: '19.8M' },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 178.89, change: 2.34, changePercent: 1.32, volume: '32.1M' },
];

const trendingStocks = [
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 224.57, change: 4.83, changePercent: 2.20, volume: '58.7M' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 932.13, change: 15.72, changePercent: 1.71, volume: '45.3M' },
  { symbol: 'META', name: 'Meta Platforms, Inc.', price: 478.22, change: -5.67, changePercent: -1.17, volume: '27.9M' },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 187.14, change: -0.93, changePercent: -0.49, volume: '12.6M' },
];

const Index = () => {
  return (
    <DashboardLayout>
      <StockTicker />
      
      <div className="mt-8 mb-12">
        <h1 className="text-3xl font-bold mb-2">AI Stock Trading Dashboard</h1>
        <p className="text-muted-foreground">Get AI-powered insights to make smarter trading decisions</p>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {topStocks.map((stock) => (
              <StockCard key={stock.symbol} {...stock} />
            ))}
          </div>
          
          <h2 className="text-xl font-semibold mb-4 mt-8">Trending Today</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trendingStocks.map((stock) => (
              <StockCard key={stock.symbol} {...stock} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
          <AIInsight symbol="NVDA" />
          
          <div className="mt-6 glass-panel p-6">
            <h2 className="text-lg font-bold mb-4">Market Sentiment</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Bullish</span>
                  <span className="text-sm">72%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-positive h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Neutral</span>
                  <span className="text-sm">18%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Bearish</span>
                  <span className="text-sm">10%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-negative h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-background/50 rounded border border-border">
              <h3 className="font-medium">AI Market Analysis</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Market sentiment remains bullish with strong momentum in tech and AI-related stocks. 
                Expect volatility in the upcoming earnings season with potential upside for quality growth stocks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
