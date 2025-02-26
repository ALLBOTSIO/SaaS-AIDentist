import { z } from 'zod';

// HIPAA Compliance Types
export const encryptionConfigSchema = z.object({
  algorithm: z.enum(['AES-256-GCM', 'AES-256-CBC']),
  keyRotationDays: z.number().min(1).max(90),
  backupEnabled: z.boolean(),
});

export const auditLogSchema = z.object({
  timestamp: z.date(),
  userId: z.string(),
  action: z.enum(['access', 'modify', 'delete']),
  resource: z.string(),
  details: z.string(),
  ipAddress: z.string(),
});

export const complianceStatusSchema = z.object({
  encryptionStatus: z.boolean(),
  lastAuditDate: z.date(),
  violations: z.array(z.string()),
  remediationSteps: z.array(z.string()),
});

// Voice Agent Types
export const callContextSchema = z.object({
  callId: z.string(),
  patientId: z.string().optional(),
  timestamp: z.date(),
  intent: z.string(),
  confidence: z.number().min(0).max(1),
  language: z.string(),
});

export const transcriptionSchema = z.object({
  text: z.string(),
  confidence: z.number(),
  speakerId: z.string(),
  timestamp: z.date(),
});

export const callMetricsSchema = z.object({
  duration: z.number(),
  sentiment: z.number().min(-1).max(1),
  resolution: z.boolean(),
  transferRequired: z.boolean(),
  category: z.string(),
});

// Type exports
export type EncryptionConfig = z.infer<typeof encryptionConfigSchema>;
export type AuditLog = z.infer<typeof auditLogSchema>;
export type ComplianceStatus = z.infer<typeof complianceStatusSchema>;
export type CallContext = z.infer<typeof callContextSchema>;
export type Transcription = z.infer<typeof transcriptionSchema>;
export type CallMetrics = z.infer<typeof callMetricsSchema>;