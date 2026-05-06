'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="faq-item-new"
      style={{ borderColor: open ? 'var(--orange-primary)' : undefined }}
    >
      <div className="faq-item-head">
        <h4 style={{ fontSize: '1rem', margin: 0 }}>{question}</h4>
        <ChevronDown
          size={18}
          style={{
            flexShrink: 0,
            color: 'var(--muted)',
            transition: 'transform .25s var(--ease)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>
      <div
        className="faq-item-body"
        style={{
          maxHeight: open ? '200px' : '0px',
          opacity: open ? 1 : 0,
          marginTop: open ? '12px' : '0px',
        }}
      >
        <p style={{ color: 'var(--slate)', fontSize: '.95rem', lineHeight: 1.6 }}>{answer}</p>
      </div>
    </button>
  );
}
