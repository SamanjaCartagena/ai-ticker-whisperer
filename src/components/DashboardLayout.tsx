
import React from 'react';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="py-4 px-6 text-center text-muted-foreground text-sm">
        <p>© 2025 AI Stock Trader. Market data is for informational purposes only.</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
