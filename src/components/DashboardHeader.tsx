
import React from 'react';
import { useData } from '@/context/DataContext';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, ChartPie, Globe, Heart, Star } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  const { filteredData } = useData();

  // Calculate stats
  const avgIntensity = filteredData.length > 0
    ? (filteredData.reduce((sum, item) => sum + item.intensity, 0) / filteredData.length).toFixed(1)
    : '0.0';

  const avgLikelihood = filteredData.length > 0
    ? (filteredData.reduce((sum, item) => sum + item.likelihood, 0) / filteredData.length).toFixed(1)
    : '0.0';

  const avgRelevance = filteredData.length > 0
    ? (filteredData.reduce((sum, item) => sum + item.relevance, 0) / filteredData.length).toFixed(1)
    : '0.0';

  const uniqueCountries = new Set(filteredData.map(item => item.country)).size;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <Card>
        <CardContent className="flex items-center p-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <BarChart size={24} className="text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Avg. Intensity</p>
            <h3 className="text-2xl font-bold">{avgIntensity}</h3>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-4">
          <div className="bg-green-100 p-3 rounded-full">
            <ChartPie size={24} className="text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Avg. Likelihood</p>
            <h3 className="text-2xl font-bold">{avgLikelihood}</h3>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <Star size={24} className="text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Avg. Relevance</p>
            <h3 className="text-2xl font-bold">{avgRelevance}</h3>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <Globe size={24} className="text-orange-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Countries</p>
            <h3 className="text-2xl font-bold">{uniqueCountries}</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHeader;
