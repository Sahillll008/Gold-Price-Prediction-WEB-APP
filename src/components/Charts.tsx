import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';

interface ChartsProps {
  data: any[];
  isDark: boolean;
}

const Charts: React.FC<ChartsProps> = ({ data, isDark }) => {
  const chartStyle = {
    backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
    color: isDark ? '#9CA3AF' : '#374151',
  };

  return (
    <div className="space-y-8">
      <div className={`p-4 rounded-lg shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className="text-xl font-semibold mb-4">Historical Gold Price Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
            <XAxis dataKey="date" stroke={chartStyle.color} />
            <YAxis stroke={chartStyle.color} />
            <Tooltip
              contentStyle={{ backgroundColor: chartStyle.backgroundColor, border: 'none' }}
              labelStyle={{ color: chartStyle.color }}
            />
            <Legend />
            <Line type="monotone" dataKey="GLD" stroke="#3B82F6" name="Gold Price" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={`p-4 rounded-lg shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className="text-xl font-semibold mb-4">Market Indicators Correlation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
            <XAxis dataKey="date" stroke={chartStyle.color} />
            <YAxis stroke={chartStyle.color} />
            <Tooltip
              contentStyle={{ backgroundColor: chartStyle.backgroundColor, border: 'none' }}
              labelStyle={{ color: chartStyle.color }}
            />
            <Legend />
            <Area type="monotone" dataKey="SPX" stackId="1" stroke="#10B981" fill="#10B981" />
            <Area type="monotone" dataKey="USO" stackId="1" stroke="#F59E0B" fill="#F59E0B" />
            <Area type="monotone" dataKey="SLV" stackId="1" stroke="#6366F1" fill="#6366F1" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className={`p-4 rounded-lg shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className="text-xl font-semibold mb-4">EUR/USD Exchange Rate Impact</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
            <XAxis dataKey="date" stroke={chartStyle.color} />
            <YAxis stroke={chartStyle.color} />
            <Tooltip
              contentStyle={{ backgroundColor: chartStyle.backgroundColor, border: 'none' }}
              labelStyle={{ color: chartStyle.color }}
            />
            <Legend />
            <Bar dataKey="EUR/USD" fill="#EC4899" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;