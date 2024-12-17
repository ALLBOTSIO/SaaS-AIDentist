import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function ElevenLabsWidget() {
  return (
    <elevenlabs-convai 
      agent-id="hadjLhIsDrBjctWIQ8tI"
      className="fixed bottom-4 right-4 z-50"
    ></elevenlabs-convai>
  );
}