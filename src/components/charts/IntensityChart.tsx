
import React from 'react';
import { useData } from '@/context/DataContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const IntensityChart: React.FC = () => {
  const { filteredData } = useData();

  // Aggregate data by sector and calculate average intensity
  const processedData = React.useMemo(() => {
    const sectorMap = new Map();
    
    filteredData.forEach(item => {
      if (!sectorMap.has(item.sector)) {
        sectorMap.set(item.sector, { 
          sector: item.sector, 
          intensitySum: item.intensity, 
          count: 1 
        });
      } else {
        const current = sectorMap.get(item.sector);
        sectorMap.set(item.sector, {
          ...current, 
          intensitySum: current.intensitySum + item.intensity,
          count: current.count + 1
        });
      }
    });
    
    return Array.from(sectorMap.values()).map(({ sector, intensitySum, count }) => ({
      sector,
      avgIntensity: intensitySum / count
    })).sort((a, b) => b.avgIntensity - a.avgIntensity).slice(0, 8);
  }, [filteredData]);

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={processedData}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="sector" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
            formatter={(value: number) => [value.toFixed(1), 'Avg. Intensity']}
          />
          <Bar dataKey="avgIntensity" fill="#3b82f6" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IntensityChart;
