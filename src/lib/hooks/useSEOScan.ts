import { useState, useCallback } from 'react';
import { trackSEOScan } from '@/lib/analytics';

interface ScanResult {
  score: number;
  recommendations: string[];
  status: 'pending' | 'completed' | 'error';
}

export const useSEOScan = () => {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const startScan = useCallback(async (businessData: {
    name: string;
    website?: string;
  }) => {
    setIsScanning(true);
    try {
      trackSEOScan({
        businessName: businessData.name,
        hasWebsite: !!businessData.website,
        scanCompleted: false
      });

      // Actual scan will be handled by the widget
      setScanResult({
        score: 0,
        recommendations: [],
        status: 'pending'
      });
    } catch (error) {
      setScanResult({
        score: 0,
        recommendations: [],
        status: 'error'
      });
    } finally {
      setIsScanning(false);
    }
  }, []);

  return {
    scanResult,
    isScanning,
    startScan
  };
};