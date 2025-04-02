import { useEffect } from 'react';
import { Metric, onCLS, onFID, onLCP, onFCP, onTTFB, onINP } from 'web-vitals';

type MetricName = 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB' | 'INP';

interface WebVitalMetric extends Metric {
  name: MetricName;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Fonction pour déterminer le niveau de performance (bon, à améliorer, mauvais)
const getRating = (name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' => {
  switch (name) {
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    case 'FID':
    case 'INP':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
    default:
      return 'needs-improvement';
  }
};

// Fonction pour envoyer les métriques à Google Analytics
const sendToGoogleAnalytics = ({ name, value, rating, id }: WebVitalMetric) => {
  // Vérifier si Google Analytics est disponible
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
      metric_rating: rating,
      metric_value: value,
      metric_delta: Math.round(value)
    });
  }
};

// Fonction pour gérer les métriques Web Vitals
const reportWebVitals = (metric: Metric, name: MetricName) => {
  // Ajouter une évaluation à la métrique
  const ratedMetric: WebVitalMetric = {
    ...metric,
    name,
    rating: getRating(name, metric.value)
  };

  // Log dans la console en développement
  if (process.env.NODE_ENV === 'development') {
    console.info(`Web Vital: ${name} - ${metric.value} (${ratedMetric.rating})`);
  }

  // Envoyer à Google Analytics
  sendToGoogleAnalytics(ratedMetric);
};

const WebVitals = () => {
  useEffect(() => {
    // Mesurer les Core Web Vitals
    if (typeof window !== 'undefined') {
      onCLS(metric => reportWebVitals(metric, 'CLS'));
      onFID(metric => reportWebVitals(metric, 'FID'));
      onLCP(metric => reportWebVitals(metric, 'LCP'));
      onFCP(metric => reportWebVitals(metric, 'FCP'));
      onTTFB(metric => reportWebVitals(metric, 'TTFB'));
      onINP(metric => reportWebVitals(metric, 'INP'));
    }
  }, []);

  // Ce composant ne rend rien dans le DOM
  return null;
};

export default WebVitals; 