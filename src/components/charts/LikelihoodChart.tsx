
import React from 'react';
import { useData } from '@/context/DataContext';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const LikelihoodChart: React.FC = () => {
  const { filteredData } = useData();

  // Count occurrences of each likelihood value
  const processedData = React.useMemo(() => {
    const likelihoodCounts = new Map();
    
    filteredData.forEach(item => {
      const key = item.likelihood;
      if (!likelihoodCounts.has(key)) {
        likelihoodCounts.set(key, { value: key, count: 1 });
      } else {
        const current = likelihoodCounts.get(key);
        likelihoodCounts.set(key, { ...current, count: current.count + 1 });
      }
    });
    
    return Array.from(likelihoodCounts.values()).sort((a, b) => a.value - b.value);
  }, [filteredData]);

  const COLORS = ['#10b981', '#3b82f6', '#f97316', '#8b5cf6', '#f43f5e'];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={processedData}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={80}
            paddingAngle={5}
            dataKey="count"
            label={({ value, name }) => `${name}: ${value}`}
            labelLine={false}
          >
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, name: string) => [value, `Likelihood ${name}`]}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
          />
          <Legend
            formatter={(value) => `Likelihood ${value}`}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LikelihoodChart;
