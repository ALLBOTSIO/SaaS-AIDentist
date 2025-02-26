import { useState, useCallback } from 'react';
import { voiceAgentService } from '../services/voice-agent.service';
import { CallContext, Transcription, CallMetrics } from '../types';
import { useToast } from '@/components/ui/use-toast';
import { useErrorHandler } from '@/lib/hooks/useErrorHandler';

export const useVoiceAgent = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentCall, setCurrentCall] = useState<CallContext | null>(null);
  const [transcription, setTranscription] = useState<Transcription | null>(null);
  const [metrics, setMetrics] = useState<CallMetrics | null>(null);
  
  const { toast } = useToast();
  const { handleError } = useErrorHandler();

  const processCall = useCallback(async (audioData: ArrayBuffer) => {
    setIsProcessing(true);
    try {
      // Handle incoming call
      const callContext = await voiceAgentService.handleIncomingCall(audioData);
      setCurrentCall(callContext);

      // Transcribe audio
      const transcriptionResult = await voiceAgentService.transcribeAudio(audioData);
      setTranscription(transcriptionResult);

      // Analyze call
      const callMetrics = await voiceAgentService.analyzeCall(callContext);
      setMetrics(callMetrics);

      toast({
        title: 'Call Processed Successfully',
        description: `Intent detected: ${callContext.intent} (${Math.round(callContext.confidence * 100)}% confidence)`,
      });

      return {
        context: callContext,
        transcription: transcriptionResult,
        metrics: callMetrics,
      };
    } catch (error) {
      handleError(error);
      toast({
        title: 'Error Processing Call',
        description: 'An error occurred while processing the call. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  }, [toast, handleError]);

  return {
    isProcessing,
    currentCall,
    transcription,
    metrics,
    processCall,
  };
};