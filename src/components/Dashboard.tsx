
import React from 'react';
import { useData } from '@/context/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FilterPanel from './FilterPanel';
import IntensityChart from './charts/IntensityChart';
import LikelihoodChart from './charts/LikelihoodChart';
import RegionDistributionChart from './charts/RegionDistributionChart';
import TopicDistributionChart from './charts/TopicDistributionChart';
import SectorComparisonChart from './charts/SectorComparisonChart';
import DataTable from './DataTable';

const Dashboard: React.FC = () => {
  const { filteredData } = useData();

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Data Visualization Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          {filteredData.length} records found
        </div>
      </div>

      <FilterPanel />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Intensity by Sector</CardTitle>
          </CardHeader>
          <CardContent>
            <IntensityChart />
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Likelihood Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <LikelihoodChart />
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Regional Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <RegionDistributionChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Topic Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <TopicDistributionChart />
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Sector Comparison (Intensity vs Relevance)</CardTitle>
          </CardHeader>
          <CardContent>
            <SectorComparisonChart />
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Data Records</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
