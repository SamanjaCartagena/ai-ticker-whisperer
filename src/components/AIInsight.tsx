
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for AI prediction
const predictionData = [
  { date: 'Jan', actual: 100, predicted: 102 },
  { date: 'Feb', actual: 120, predicted: 118 },
  { date: 'Mar', actual: 115, predicted: 116 },
  { date: 'Apr', actual: 130, predicted: 128 },
  { date: 'May', actual: 128, predicted: 132 },
  { date: 'Jun', actual: 145, predicted: 148 },
  { date: 'Jul', actual: 160, predicted: 155 },
  { date: 'Aug', actual: 170, predicted: 175 },
  // Future predictions (only have predicted values)
  { date: 'Sep', actual: null, predicted: 180 },
  { date: 'Oct', actual: null, predicted: 188 },
  { date: 'Nov', actual: null, predicted: 192 },
  { date: 'Dec', actual: null, predicted: 205 },
];

interface AIInsightProps {
  symbol: string;
}

const AIInsight: React.FC<AIInsightProps> = ({ symbol }) => {
  return (
    <div className="glass-panel p-6">
      <h2 className="text-lg font-bold mb-4">AI Price Prediction for {symbol}</h2>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={predictionData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
            <XAxis dataKey="date" tick={{ fill: 'hsl(var(--foreground))' }} />
            <YAxis tick={{ fill: 'hsl(var(--foreground))' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--foreground))'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="hsl(var(--foreground))" 
              strokeWidth={2} 
              dot={{ fill: 'hsl(var(--foreground))' }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2} 
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(var(--primary))' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 px-4 py-3 bg-background/50 rounded border border-border">
        <h3 className="font-medium">AI Recommendation</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Our AI model predicts a <span className="text-primary font-medium">16.5% growth</span> over the next 3 months for {symbol}. 
          The prediction is based on technical indicators, market sentiment, and historical patterns.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <div className="px-2 py-1 rounded bg-positive/10 text-sm font-medium text-[hsl(var(--positive))]">
            BUY
          </div>
          <span className="text-sm text-muted-foreground">
            Confidence: <span className="text-foreground">High (85%)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIInsight;
