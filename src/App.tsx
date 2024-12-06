import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import PredictionForm from './components/PredictionForm';
import Charts from './components/Charts';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({
    spx: '',
    uso: '',
    slv: '',
    eurUsd: ''
  });
  const [prediction, setPrediction] = useState<number | null>(null);

  // Sample historical data
  const [historicalData] = useState([
    { date: '2008', GLD: 84.86, SPX: 1447.16, USO: 78.47, SLV: 15.18, 'EUR/USD': 1.4716 },
    { date: '2010', GLD: 120.58, SPX: 1257.64, USO: 39.27, SLV: 16.54, 'EUR/USD': 1.3306 },
    { date: '2012', GLD: 158.92, SPX: 1426.19, USO: 33.37, SLV: 29.37, 'EUR/USD': 1.2859 },
    { date: '2014', GLD: 124.48, SPX: 1845.86, USO: 35.32, SLV: 18.71, 'EUR/USD': 1.3810 },
    { date: '2016', GLD: 122.54, SPX: 1940.24, USO: 9.65, SLV: 13.59, 'EUR/USD': 1.0937 },
    { date: '2018', GLD: 125.18, SPX: 2673.61, USO: 14.41, SLV: 15.45, 'EUR/USD': 1.1931 }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockPrediction = (
      parseFloat(formData.spx) * 0.05 +
      parseFloat(formData.uso) * 0.2 +
      parseFloat(formData.slv) * 0.4 +
      parseFloat(formData.eurUsd) * 0.35
    ).toFixed(2);
    setPrediction(parseFloat(mockPrediction));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Gold Price Prediction</h1>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Advanced machine learning model to predict gold prices based on market indicators
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <PredictionForm
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              isDark={isDark}
            />
            {prediction !== null && (
              <div className={`mt-8 p-6 rounded-lg shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className="text-2xl font-semibold mb-4">Prediction Result</h2>
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  ${prediction}
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Predicted Gold Price
                </p>
              </div>
            )}
          </div>
          
          <div>
            <Charts data={historicalData} isDark={isDark} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;