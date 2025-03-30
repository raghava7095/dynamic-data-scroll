
import { DataProvider } from '@/context/DataContext';
import Dashboard from '@/components/Dashboard';
import DashboardHeader from '@/components/DashboardHeader';

const Index = () => {
  return (
    <DataProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
          <h1 className="text-xl font-bold">Data Visualization Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Explore insights and trends from the dataset
          </p>
        </header>
        <main className="container mx-auto py-6 px-4">
          <DashboardHeader />
          <Dashboard />
        </main>
      </div>
    </DataProvider>
  );
};

export default Index;
