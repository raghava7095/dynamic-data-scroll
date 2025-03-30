
import React from 'react';
import { useData } from '@/context/DataContext';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const RegionDistributionChart: React.FC = () => {
  const { filteredData } = useData();

  // Count occurrences of each region
  const processedData = React.useMemo(() => {
    const regionCounts = new Map();
    
    filteredData.forEach(item => {
      const key = item.region;
      if (!regionCounts.has(key)) {
        regionCounts.set(key, { name: key, value: 1 });
      } else {
        const current = regionCounts.get(key);
        regionCounts.set(key, { ...current, value: current.value + 1 });
      }
    });
    
    return Array.from(regionCounts.values())
      .sort((a, b) => b.value - a.value)
      .slice(0, 6); // Show top 6 regions
  }, [filteredData]);

  const COLORS = ['#3b82f6', '#10b981', '#f97316', '#8b5cf6', '#f43f5e', '#eab308'];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={processedData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, name: string) => [value, name]}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegionDistributionChart;
