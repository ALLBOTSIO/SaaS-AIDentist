import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { runFormTests, type FormTestResult } from '@/lib/test/formTesting';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

export const FormTestingDashboard = () => {
  const [testResults, setTestResults] = useState<FormTestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const runTests = async () => {
    setIsRunning(true);
    try {
      const results = await runFormTests();
      setTestResults(results);
      
      const failedTests = results.filter(r => r.status === 'failed').length;
      if (failedTests > 0) {
        toast({
          title: 'Test Run Complete',
          description: `${failedTests} tests failed. Please review the results.`,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Test Run Complete',
          description: 'All tests passed successfully!',
        });
      }
    } catch (error) {
      toast({
        title: 'Error Running Tests',
        description: 'An error occurred while running the tests.',
        variant: 'destructive',
      });
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    runTests();
  }, []);

  const passedTests = testResults.filter(r => r.status === 'passed').length;
  const failedTests = testResults.filter(r => r.status === 'failed').length;
  const totalTests = testResults.length;
  const passRate = totalTests > 0 ? (passedTests / totalTests) * 100 : 0;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Form Testing Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Comprehensive form validation and functionality testing
            </p>
          </div>
          <Button
            onClick={runTests}
            disabled={isRunning}
            className="flex items-center gap-2"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Running Tests...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                Run Tests
              </>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Pass Rate</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {passRate.toFixed(1)}%
                  </h3>
                </div>
                <div className={`p-2 rounded-full ${
                  passRate === 100 ? 'bg-green-100' : 
                  passRate >= 80 ? 'bg-yellow-100' : 'bg-red-100'
                }`}>
                  {passRate === 100 ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : passRate >= 80 ? (
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Passed Tests</p>
                  <h3 className="text-2xl font-bold text-green-600">{passedTests}</h3>
                </div>
                <div className="p-2 rounded-full bg-green-100">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Failed Tests</p>
                  <h3 className="text-2xl font-bold text-red-600">{failedTests}</h3>
                </div>
                <div className="p-2 rounded-full bg-red-100">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testResults.map((result, index) => (
                <motion.div
                  key={`${result.field}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-4 rounded-lg border ${
                    result.status === 'passed' 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {result.field}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {result.description}
                      </p>
                      {result.error && (
                        <p className="text-sm text-red-600 mt-1">
                          {result.error}
                        </p>
                      )}
                    </div>
                    <div className={`p-1 rounded-full ${
                      result.status === 'passed' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {result.status === 'passed' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};