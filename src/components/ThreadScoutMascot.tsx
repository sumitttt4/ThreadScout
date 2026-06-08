'use client';

import { motion } from 'framer-motion';

export function ThreadScoutMascot() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '360px', aspectRatio: '1', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* ── ROTATING RADAR RINGS (Background) ── */}
      <motion.svg
        viewBox="0 0 400 400"
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {/* Radar concentric circular rings */}
        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.12" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.2" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="var(--border)" strokeWidth="2" strokeDasharray="2 4" opacity="0.3" />
        
        {/* Crosshair guidelines */}
        <line x1="200" y1="20" x2="200" y2="380" stroke="var(--border)" strokeWidth="1" strokeDasharray="5 5" opacity="0.15" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="var(--border)" strokeWidth="1" strokeDasharray="5 5" opacity="0.15" />
      </motion.svg>

      {/* ── FLOATING DATA PANELS (Side Graphics) ── */}
      {/* Left Data Stream */}
      <motion.div
        style={{
          position: 'absolute', left: '-20px', top: '30%',
          background: '#ffffff', border: '1.5px solid var(--border)',
          borderRadius: 'var(--radius-sm)', padding: '8px 12px',
          boxShadow: '3px 3px 0 var(--border)', zIndex: 2, fontSize: '0.72rem', fontWeight: 700
        }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
      >
        <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          <span>r/SideProject</span>
        </div>
        <div style={{ color: 'var(--fg-muted)', marginTop: '2px' }}>Match: 98%</div>
      </motion.div>

      {/* Right Data Stream */}
      <motion.div
        style={{
          position: 'absolute', right: '-20px', bottom: '25%',
          background: '#ffffff', border: '1.5px solid var(--border)',
          borderRadius: 'var(--radius-sm)', padding: '8px 12px',
          boxShadow: '3px 3px 0 var(--border)', zIndex: 2, fontSize: '0.72rem', fontWeight: 700
        }}
        animate={{ y: [4, -4, 4] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
      >
        <div style={{ color: 'var(--accent-yellow)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-yellow)', display: 'inline-block' }} />
          <span>r/SaaS</span>
        </div>
        <div style={{ color: 'var(--fg-muted)', marginTop: '2px' }}>Risk: Low</div>
      </motion.div>

      {/* ── CORE THREAD RADAR CONSOLE (Center) ── */}
      <motion.svg
        viewBox="0 0 300 300"
        style={{ width: '80%', height: '80%', zIndex: 1 }}
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
      >
        <defs>
          {/* Subtle Orange-Red brand gradient */}
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-yellow)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Concentric Pulse Waves (Scanning Animation) */}
        <motion.circle
          cx="150" cy="150" r="45" fill="none" stroke="var(--accent)" strokeWidth="2"
          animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeOut' }}
        />
        <motion.circle
          cx="150" cy="150" r="45" fill="none" stroke="var(--accent-yellow)" strokeWidth="1.5"
          animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeOut', delay: 1.5 }}
        />

        {/* 2. Sleek Speech Balloon Base (Dialogue/Thread representer) */}
        {/* Shadow offsets for Qvery style print aesthetic */}
        <path
          d="M100 110 C100 76.8 122.4 50 150 50 C177.6 50 200 76.8 200 110 C200 143.2 177.6 170 150 170 C141.8 170 134 167.5 127.5 163 L102 178 C100.5 178.8 98.8 177.6 98.8 175.8 L98.8 155.5 C99.6 152 100 148 100 144 Z"
          fill="var(--border)"
          transform="translate(4, 4)"
          opacity="0.15"
        />
        <path
          d="M100 110 C100 76.8 122.4 50 150 50 C177.6 50 200 76.8 200 110 C200 143.2 177.6 170 150 170 C141.8 170 134 167.5 127.5 163 L102 178 C100.5 178.8 98.8 177.6 98.8 175.8 L98.8 155.5 C99.6 152 100 148 100 144 Z"
          fill="#ffffff"
          stroke="var(--border)"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* 3. Magnifying Scope Ring (Scout representer) */}
        <circle cx="150" cy="110" r="28" fill="none" stroke="var(--border)" strokeWidth="4.5" />
        
        {/* Diagonal Magnifying Glass Handle */}
        <line x1="170" y1="130" x2="188" y2="148" stroke="var(--border)" strokeWidth="7" strokeLinecap="round" />
        
        {/* Inner Scanning Radar Area */}
        <circle cx="150" cy="110" r="21" fill="url(#brandGradient)" opacity="0.85" />
        
        {/* 4. Target Dot inside Scope (Pulsing) */}
        <motion.circle
          cx="150"
          cy="110"
          r="4"
          fill="#ffffff"
          filter="url(#softGlow)"
          animate={{ scale: [0.8, 1.5, 0.8] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />

        {/* 5. Glowing Sweep Line inside Scope */}
        <motion.line
          x1="150" y1="110" x2="168" y2="98"
          stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
          style={{ originX: '150px', originY: '110px' }}
        />

        {/* 6. Dialogue Bubble details */}
        {/* Small horizontal details representing dialogue lines */}
        <line x1="125" y1="210" x2="175" y2="210" stroke="var(--border)" strokeWidth="4" strokeLinecap="round" />
        <line x1="140" y1="222" x2="160" y2="222" stroke="var(--border)" strokeWidth="4" strokeLinecap="round" />
      </motion.svg>

      {/* ── Radar Sweep Laser Line ── */}
      <motion.div
        style={{
          position: 'absolute',
          left: '12%',
          width: '76%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 2,
        }}
        animate={{ y: ['90px', '210px', '90px'] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      />
    </div>
  );
}
