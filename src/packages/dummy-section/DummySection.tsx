import React from 'react';

interface IDummySectionProps {
  content: string;
  header: string;
}

export const DummySection: React.FC<IDummySectionProps> = ({ content, header }) => (
  <>
    <div style={{ fontSize: '16px', color: 'white' }}>{header}</div>
    <div style={{ color: 'white', fontSize: '14px' }}>{content}</div>
  </>
)
