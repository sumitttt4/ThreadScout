'use client';

import { motion } from 'framer-motion';
import { Target, FileText, MessageCircle, Shield, Calendar, Check, Sparkles } from 'lucide-react';

const steps = [
  { icon: Target, label: 'Analyzing your product & audience', delay: 0 },
  { icon: Shield, label: 'Scanning subreddit rules & risks', delay: 1.2 },
  { icon: FileText, label: 'Writing post drafts', delay: 2.8 },
  { icon: MessageCircle, label: 'Generating reply templates', delay: 4.2 },
  { icon: Calendar, label: 'Building your 7-day action plan', delay: 5.4 },
];

export function LoadingScreen({ productName }: { productName: string }) {
  return (
    <div className="page-wrapper" style={{ padding: '80px 24px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 520, width: '100%', position: 'relative' }}>
        
        {/* Decorative background glow */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%', height: '120%',
            background: 'radial-gradient(circle, rgba(232,83,14,0.08) 0%, rgba(250,250,248,0) 70%)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <div className="report-card" style={{ padding: '48px 40px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <motion.div
              style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--orange-primary), var(--orange-accent))',
                margin: '0 auto 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(232,83,14,0.3)',
              }}
              animate={{
                boxShadow: [
                  '0 8px 32px rgba(232,83,14,0.3)',
                  '0 8px 64px rgba(232,83,14,0.5)',
                  '0 8px 32px rgba(232,83,14,0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles size={28} color="white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: '1.75rem', marginBottom: '8px', letterSpacing: '-0.02em' }}
            >
              Building your campaign
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ color: 'var(--text-slate)', fontSize: '1.05rem' }}
            >
              Crafting a custom strategy for <strong>{productName}</strong>
            </motion.p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0.4, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: step.delay, duration: 0.5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '16px 0',
                  position: 'relative',
                }}
              >
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: step.delay + 0.5, duration: 0.8 }}
                    style={{
                      position: 'absolute',
                      left: 20,
                      top: 48,
                      width: 2,
                      height: 32,
                      background: 'var(--border-soft)',
                      transformOrigin: 'top',
                      zIndex: 0
                    }}
                  />
                )}

                <motion.div
                  initial={{ scale: 0.8, backgroundColor: 'var(--bg-surface)', color: 'var(--text-muted)' }}
                  animate={{ scale: 1, backgroundColor: 'var(--orange-light)', color: 'var(--orange-primary)' }}
                  transition={{ delay: step.delay, duration: 0.4 }}
                  style={{
                    width: 42, height: 42, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, zIndex: 1
                  }}
                >
                  <step.icon size={18} />
                </motion.div>

                <span style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-charcoal)', letterSpacing: '-0.01em' }}>
                  {step.label}
                </span>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: step.delay + 0.8, type: 'spring', stiffness: 200 }}
                  style={{ marginLeft: 'auto' }}
                >
                  <Check size={20} color="var(--success)" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
