
import React from 'react';
import { useData } from '@/context/DataContext';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

const SectorComparisonChart: React.FC = () => {
  const { filteredData } = useData();

  // Calculate average intensity, relevance, and count for each sector
  const processedData = React.useMemo(() => {
    const sectorMap = new Map();
    
    filteredData.forEach(item => {
      if (!sectorMap.has(item.sector)) {
        sectorMap.set(item.sector, { 
          sector: item.sector, 
          intensitySum: item.intensity,
          relevanceSum: item.relevance,
          count: 1 
        });
      } else {
        const current = sectorMap.get(item.sector);
        sectorMap.set(item.sector, {
          ...current, 
          intensitySum: current.intensitySum + item.intensity,
          relevanceSum: current.relevanceSum + item.relevance,
          count: current.count + 1
        });
      }
    });
    
    return Array.from(sectorMap.values()).map(({ sector, intensitySum, relevanceSum, count }) => ({
      sector,
      avgIntensity: Number((intensitySum / count).toFixed(2)),
      avgRelevance: Number((relevanceSum / count).toFixed(2)),
      count
    }));
  }, [filteredData]);

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis 
            type="number" 
            dataKey="avgIntensity" 
            name="Avg. Intensity" 
            domain={[0, 10]} 
            label={{ value: 'Avg. Intensity', position: 'bottom', offset: 0 }}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            type="number" 
            dataKey="avgRelevance" 
            name="Avg. Relevance" 
            domain={[0, 5]} 
            label={{ value: 'Avg. Relevance', angle: -90, position: 'left' }}
            tick={{ fontSize: 12 }}
          />
          <ZAxis dataKey="count" range={[40, 400]} />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }}
            formatter={(value: number, name: string) => [value, name.replace('avg', 'Avg.')]}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
            wrapperStyle={{ zIndex: 100 }}
            labelFormatter={(value) => value}
          />
          <Scatter 
            name="Sectors" 
            data={processedData} 
            fill="#3b82f6" 
            shape="circle" 
            nameKey="sector"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SectorComparisonChart;
