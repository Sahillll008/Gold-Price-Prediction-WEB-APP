import React from 'react';
import { TrendingUp } from 'lucide-react';

interface PredictionFormProps {
  formData: {
    spx: string;
    uso: string;
    slv: string;
    eurUsd: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isDark: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
  isDark,
}) => {
  return (
    <div className={`rounded-lg p-6 shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <TrendingUp className="mr-2" />
        Input Market Indicators
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">S&P 500 (SPX)</label>
          <input
            type="number"
            name="spx"
            value={formData.spx}
            onChange={onInputChange}
            className={`w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}
            required
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Crude Oil (USO)</label>
          <input
            type="number"
            name="uso"
            value={formData.uso}
            onChange={onInputChange}
            className={`w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}
            required
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Silver (SLV)</label>
          <input
            type="number"
            name="slv"
            value={formData.slv}
            onChange={onInputChange}
            className={`w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}
            required
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">EUR/USD Exchange Rate</label>
          <input
            type="number"
            name="eurUsd"
            value={formData.eurUsd}
            onChange={onInputChange}
            className={`w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}
            required
            step="0.0001"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Predict Price
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;