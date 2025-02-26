import { trackEvent } from './analytics';

export const measurePerformance = (metricName: string) => {
  if (typeof performance === 'undefined') return;

  const entry = performance.getEntriesByName(metricName);
  if (entry.length > 0) {
    trackEvent('performance_metric', {
      metric_name: metricName,
      value: entry[0].duration,
    });
  }
};

export const startMeasurement = (metricName: string) => {
  if (typeof performance === 'undefined') return;
  performance.mark(`${metricName}_start`);
};

export const endMeasurement = (metricName: string) => {
  if (typeof performance === 'undefined') return;
  performance.mark(`${metricName}_end`);
  performance.measure(metricName, `${metricName}_start`, `${metricName}_end`);
  measurePerformance(metricName);
};