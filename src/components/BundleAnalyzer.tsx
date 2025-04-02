import { useEffect, useState } from 'react';

interface BundleInfo {
  name: string;
  size: number;
  percentage: number;
}

/**
 * BundleAnalyzer - Composant pour analyser et afficher la taille des bundles en développement
 * Note: Ce composant ne doit être utilisé qu'en développement
 */
const BundleAnalyzer = () => {
  const [bundles, setBundles] = useState<BundleInfo[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  
  useEffect(() => {
    // Simulation de données de bundle pour démonstration
    // En production, ces données devraient être générées par un outil comme webpack-bundle-analyzer
    const mockBundleData = [
      { name: 'main.js', size: 512000 },  // 500 KB
      { name: 'vendor.js', size: 1024000 },  // 1 MB
      { name: 'styles.css', size: 102400 },  // 100 KB
      { name: 'react.js', size: 143360 },  // 140 KB
      { name: 'images.js', size: 307200 },  // 300 KB
    ];
    
    const total = mockBundleData.reduce((acc, bundle) => acc + bundle.size, 0);
    setTotalSize(total);
    
    const bundlesWithPercentage = mockBundleData.map(bundle => ({
      ...bundle,
      percentage: (bundle.size / total) * 100
    }));
    
    setBundles(bundlesWithPercentage);
  }, []);
  
  const formatSize = (size: number): string => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };
  
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  
  if (!isVisible) {
    return (
      <button 
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-indigo-700 z-50"
      >
        Analyser les Bundles
      </button>
    );
  }
  
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Analyse des Bundles</h2>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600">Taille totale: <span className="font-semibold">{formatSize(totalSize)}</span></p>
        </div>
        
        <div className="space-y-3">
          {bundles.map((bundle, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">{bundle.name}</span>
                <span className="text-gray-600">{formatSize(bundle.size)} ({bundle.percentage.toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${bundle.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Recommandations</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Envisagez de diviser les bundles volumineux avec le code splitting</li>
            <li>Utilisez l'import dynamique pour les composants lourds et non critiques</li>
            <li>Optimisez les dépendances tierces avec des alternatives plus légères</li>
            <li>Assurez-vous que tree-shaking fonctionne correctement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BundleAnalyzer; 