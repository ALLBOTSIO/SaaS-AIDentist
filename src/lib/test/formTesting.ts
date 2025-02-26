import { z } from 'zod';
import { trackEvent } from '@/lib/analytics';

export interface FormTestResult {
  field: string;
  status: 'passed' | 'failed';
  description: string;
  error?: string;
}

export interface FormValidationTest {
  name: string;
  value: any;
  expectedError?: string;
}

export const formTestSchema = z.object({
  practiceName: z.string().min(1, 'Practice name is required'),
  contactPerson: z.string().min(1, 'Contact person is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, 'Phone must be in format: XXX-XXX-XXXX'),
  locations: z.number().min(1, 'Must have at least 1 location'),
  message: z.string().min(1, 'Message is required').max(500, 'Message too long'),
});

export const testCases: FormValidationTest[] = [
  { name: 'practiceName', value: '', expectedError: 'Practice name is required' },
  { name: 'practiceName', value: 'Test Practice', expectedError: undefined },
  { name: 'email', value: 'invalid-email', expectedError: 'Invalid email address' },
  { name: 'email', value: 'test@example.com', expectedError: undefined },
  { name: 'phone', value: '1234567890', expectedError: 'Phone must be in format: XXX-XXX-XXXX' },
  { name: 'phone', value: '123-456-7890', expectedError: undefined },
  { name: 'locations', value: 0, expectedError: 'Must have at least 1 location' },
  { name: 'locations', value: 1, expectedError: undefined },
  { name: 'message', value: '', expectedError: 'Message is required' },
  { name: 'message', value: 'Test message', expectedError: undefined },
];

export async function runFormTests(): Promise<FormTestResult[]> {
  const results: FormTestResult[] = [];
  
  for (const testCase of testCases) {
    try {
      const testObject = { [testCase.name]: testCase.value };
      const validationResult = await formTestSchema.safeParseAsync(testObject);
      
      if (testCase.expectedError) {
        if (!validationResult.success) {
          results.push({
            field: testCase.name,
            status: 'passed',
            description: `Validation correctly failed for ${testCase.name}`,
          });
        } else {
          results.push({
            field: testCase.name,
            status: 'failed',
            description: `Expected validation to fail for ${testCase.name}`,
            error: `Expected error: ${testCase.expectedError}`,
          });
        }
      } else {
        if (validationResult.success) {
          results.push({
            field: testCase.name,
            status: 'passed',
            description: `Validation passed for ${testCase.name}`,
          });
        } else {
          results.push({
            field: testCase.name,
            status: 'failed',
            description: `Unexpected validation failure for ${testCase.name}`,
            error: validationResult.error.message,
          });
        }
      }
    } catch (error) {
      results.push({
        field: testCase.name,
        status: 'failed',
        description: `Test execution failed for ${testCase.name}`,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  trackEvent('form_tests_completed', {
    total_tests: results.length,
    passed_tests: results.filter(r => r.status === 'passed').length,
    failed_tests: results.filter(r => r.status === 'failed').length,
  });

  return results;
}