
import React from 'react';
import { useData } from '@/context/DataContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TopicDistributionChart: React.FC = () => {
  const { filteredData } = useData();

  // Count occurrences of each topic
  const processedData = React.useMemo(() => {
    const topicCounts = new Map();
    
    filteredData.forEach(item => {
      const key = item.topic;
      if (!topicCounts.has(key)) {
        topicCounts.set(key, { topic: key, count: 1 });
      } else {
        const current = topicCounts.get(key);
        topicCounts.set(key, { ...current, count: current.count + 1 });
      }
    });
    
    return Array.from(topicCounts.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 10); // Show top 10 topics
  }, [filteredData]);

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={processedData}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 100,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={true} vertical={false} />
          <XAxis type="number" domain={[0, 'auto']} />
          <YAxis dataKey="topic" type="category" width={100} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: number) => [`${value} records`, 'Count']}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
          />
          <Bar dataKey="count" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopicDistributionChart;
