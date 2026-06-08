import Link from 'next/link';
import {
  ArrowRight, ShieldCheck, CheckCircle, AlertTriangle, ArrowUp,
  Globe, ShieldAlert, Cpu, Sparkles, MessageSquare, Target
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { FaqItem } from '@/components/FaqItem';

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: '#F4F0E8' }}>
      
      {/* ── VERTICAL GRIDLINES (Visual Rhythm from Screenshot) ── */}
      <div className="grid-lines-container no-print">
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* ── HERO SECTION (Centered Qvery Style) ── */}
        <section style={{ padding: '120px 0 100px', textAlign: 'center' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FadeIn style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', maxWidth: '800px' }}>
              <span className="tag-badge">[ 00 // REDDIT PROMOTION STRATEGY ]</span>
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', textAlign: 'center', margin: '16px 0 24px', lineHeight: '1.05' }}>
                Stop guessing Reddit.<br />
                Launch with a <span style={{ color: 'var(--accent)' }}>campaign brief.</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--fg-muted)', lineHeight: '1.5', maxWidth: '580px', margin: '0 0 32px' }}>
                90% of self-promotion on Reddit gets banned instantly. We build value-first campaign briefs so you can drive organic traffic without getting flagged.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }} className="hero-actions">
                <Link href="/generate" className="btn btn-primary btn-lg" style={{ background: 'var(--accent)', borderColor: 'var(--accent)' }}>
                  Build Campaign Brief <ArrowRight size={16} />
                </Link>
                <Link href="#brief-preview" className="btn btn-secondary btn-lg">
                  See Example Brief
                </Link>
              </div>

              <div style={{ display: 'flex', gap: '24px', marginTop: '24px', fontSize: '0.82rem', fontFamily: 'ui-monospace, monospace', color: 'var(--fg-subtle)', fontWeight: 500 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldCheck size={14} style={{ color: 'var(--accent)' }} /> NO AUTOMATED SPAM</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldCheck size={14} style={{ color: 'var(--accent)' }} /> 100% MANUAL-FIRST</span>
              </div>
            </FadeIn>

            {/* Central High-Fidelity Mockup */}
            <FadeIn delay={0.2} style={{ width: '100%', maxWidth: '960px', marginTop: '80px' }}>
              <div className="hero-dashboard-preview" style={{ textAlign: 'left' }}>
                <div className="dashboard-header">
                  <div className="dashboard-dots">
                    <span className="dashboard-dot" style={{ background: 'var(--accent)', borderColor: 'var(--accent)' }} />
                    <span className="dashboard-dot" />
                    <span className="dashboard-dot" />
                  </div>
                  <span className="dashboard-title" style={{ fontFamily: 'ui-monospace, monospace' }}>scout_brief_active.json</span>
                </div>
                <div className="dashboard-body">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span className="dashboard-label" style={{ fontFamily: 'ui-monospace, monospace' }}>Recommended First Move</span>
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, fontStyle: 'italic', margin: 0, borderLeft: '3px solid var(--accent)', paddingLeft: '12px' }}>
                      &ldquo;Roast my brand guidelines. Be brutal.&rdquo;
                    </p>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="dashboard-grid">
                    <div className="dashboard-card">
                      <span className="dashboard-label" style={{ fontFamily: 'ui-monospace, monospace' }}>Subreddits</span>
                      <div className="dashboard-stat" style={{ color: 'var(--accent)', marginTop: '4px' }}>6 Target</div>
                    </div>
                    <div className="dashboard-card">
                      <span className="dashboard-label" style={{ fontFamily: 'ui-monospace, monospace' }}>Post Drafts</span>
                      <div className="dashboard-stat" style={{ marginTop: '4px' }}>3 Angles</div>
                    </div>
                    <div className="dashboard-card">
                      <span className="dashboard-label" style={{ fontFamily: 'ui-monospace, monospace' }}>Templates</span>
                      <div className="dashboard-stat" style={{ marginTop: '4px' }}>20 Replies</div>
                    </div>
                  </div>

                  <div className="dashboard-subreddits" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                    <span className="dashboard-label" style={{ fontFamily: 'ui-monospace, monospace', marginBottom: '8px', display: 'block' }}>Best Channels</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div className="dashboard-sub-row">
                        <span className="dashboard-sub-name" style={{ fontWeight: 600 }}>r/SideProject</span>
                        <span className="badge-low" style={{ fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px' }}>Low Risk</span>
                      </div>
                      <div className="dashboard-sub-row">
                        <span className="dashboard-sub-name" style={{ fontWeight: 600 }}>r/SaaS</span>
                        <span className="badge-low" style={{ fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px', color: '#b45309', borderColor: '#fef3c7', background: '#fffbeb' }}>Med Risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── TARGET CHANNELS STRIP (Niche Bar mimicking Partner logos) ── */}
        <section style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center', fontWeight: 700, fontSize: '0.85rem', color: 'var(--fg-muted)', fontFamily: 'ui-monospace, monospace', letterSpacing: '0.05em' }} className="grid-4">
              <div>// DEVELOPER TOOLS</div>
              <div>// AI & MACHINE LEARNING</div>
              <div>// SAAS PLATFORMS</div>
              <div>// INDIE DESIGN CREATORS</div>
            </div>
          </div>
        </section>

        {/* ── ALTERNATING FEATURES (One campaign. Four workflows.) ── */}
        <section className="section-wrapper">
          <div className="container">
            <div className="section-header" style={{ alignItems: 'center', textAlign: 'center', margin: '0 auto 100px' }}>
              <span className="tag-badge">[ 01 // THE WORKFLOWS ]</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', textAlign: 'center' }}>One campaign. Four instruments.</h2>
              <p className="section-paragraph" style={{ textAlign: 'center' }}>
                We guide you from discovery to execution. No bots, no automatic API posts — just targeted planning built for manual operations.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
              
              {/* Row 1: Subreddit Discovery */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="feature-row">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }} className="feature-text-block">
                  <span className="tag-badge">[ 01 // DISCOVERY ]</span>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>Find communities already discussing your category.</h3>
                  <p style={{ color: 'var(--fg-muted)', margin: 0 }}>
                    We scan Reddit to locate the exact channels matching your niche. We verify active user thresholds and traffic cycles so you focus effort where it counts.
                  </p>
                  <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--fg-muted)', fontSize: '0.95rem' }}>
                    <li>6 target subreddits mapped in your category.</li>
                    <li>Daily visitor activity and policy checks.</li>
                  </ul>
                </div>
                
                <div className="q-card" style={{ background: '#ffffff' }}>
                  <span className="dashboard-label" style={{ fontFamily: 'ui-monospace, monospace', marginBottom: '12px', display: 'block' }}>Target Subreddits Map</span>
                  <table className="tracker-table" style={{ width: '100%' }}>
                    <thead>
                      <tr><th>Subreddit</th><th>Fit</th><th>Best Style</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 700, color: 'var(--accent)' }}>r/SideProject</td>
                        <td><span className="badge-low" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>Low Risk</span></td>
                        <td>Update log</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 700, color: 'var(--accent)' }}>r/SaaS</td>
                        <td><span className="badge-low" style={{ fontSize: '0.68rem', padding: '2px 6px', color: '#b45309', borderColor: '#fef3c7', background: '#fffbeb' }}>Med Risk</span></td>
                        <td>Founder story</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Row 2: Post Drafts */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="feature-row reverse">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }} className="feature-text-block">
                  <span className="tag-badge">[ 02 // DRAFTS ]</span>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>Generate posts that sound like a founder, not a marketer.</h3>
                  <p style={{ color: 'var(--fg-muted)', margin: 0 }}>
                    Reddit users spot advertising templates immediately. We build post drafts styled as organic, value-first log entries, story breakdowns, or roast requests.
                  </p>
                  <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--fg-muted)', fontSize: '0.95rem' }}>
                    <li>3 customizable post angles included in every pack.</li>
                    <li>Strict copy guidelines written in conversational tone.</li>
                  </ul>
                </div>

                <div className="q-card feature-row-visual-left" style={{ background: '#ffffff', width: '100%' }}>
                  <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px', marginBottom: '16px' }}>
                    <span className="dashboard-label" style={{ fontFamily: 'ui-monospace, monospace' }}>Generated Draft Angle (r/SaaS)</span>
                  </div>
                  <p style={{ fontStyle: 'italic', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 12px', color: 'var(--accent)', borderLeft: '2px solid var(--accent)', paddingLeft: '8px' }}>
                    &ldquo;I spent 40 hours analyzing trials. Here is why users churn.&rdquo;
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>
                    Hey r/SaaS, founder of Churnfix here. We analyzed 500 trial funnels to find user blockages. Key reason: trial onboardings exceeding 4 steps drive a 58% drop-off.
                  </p>
                </div>
              </div>

              {/* Row 3: Reply commentary */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="feature-row">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }} className="feature-text-block">
                  <span className="tag-badge">[ 03 // REPLY Blueprints ]</span>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>Keep conversations moving with reply templates.</h3>
                  <p style={{ color: 'var(--fg-muted)', margin: 0 }}>
                    The real conversion on Reddit happens inside the comment tree. We build situation-specific script blueprints to handle audits, code requests, and soft product CTAs.
                  </p>
                  <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--fg-muted)', fontSize: '0.95rem' }}>
                    <li>20 situation reply comment variations.</li>
                    <li>Scripts to safely present links when requested.</li>
                  </ul>
                </div>

                <div className="reddit-mockup" style={{ background: '#ffffff', width: '100%' }}>
                  <div className="reddit-votes">
                    <ArrowUp size={16} className="reddit-vote-btn upvoted" />
                    <span>42</span>
                  </div>
                  <div className="reddit-content">
                    <div className="reddit-meta">
                      <span className="reddit-meta-sub" style={{ fontWeight: 700 }}>r/SideProject</span>
                      <span>• Posted by u/saasfounder</span>
                    </div>
                    <span className="reddit-title" style={{ fontSize: '0.95rem', fontWeight: 600 }}>Drop your startup onboarding, I will audit it for free</span>
                    <div className="reddit-comment-tree">
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>u/designguy</span>
                        <p style={{ fontSize: '0.82rem', margin: '2px 0 0' }}>Check mine: glyph.app - it auto-creates guidelines.</p>
                      </div>
                      <div className="reddit-comment-tree" style={{ borderLeftColor: 'var(--accent)' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)' }}>u/saasfounder (OP)</span>
                        <p style={{ fontSize: '0.82rem', color: 'var(--fg-muted)', margin: '2px 0 0' }}>Logo layout is clean. Reduce font weights. Early access code is GLYPH50.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Safety Warning */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="feature-row reverse">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }} className="feature-text-block">
                  <span className="tag-badge">[ 04 // COMPLIANCE ]</span>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>Avoid domain blacklisting and account suspensions.</h3>
                  <p style={{ color: 'var(--fg-muted)', margin: 0 }}>
                    We analyze implicit rules and moderator guidelines for every channel. We warn you about forbidden link-dumping tactics so you protect your domain's credibility.
                  </p>
                  <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--fg-muted)', fontSize: '0.95rem' }}>
                    <li>Targeted channel rules and anti-spam protocols.</li>
                    <li>藍-flag mitigation guidelines to avoid reports.</li>
                  </ul>
                </div>

                <div className="feature-row-visual-left" style={{ border: '1px solid #fef3c7', background: '#fffbeb', padding: '24px', borderRadius: '6px', display: 'flex', gap: '16px', alignItems: 'flex-start', color: '#b45309', width: '100%' }}>
                  <AlertTriangle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Implicit Subreddit Rules Alert</strong>
                    <p style={{ fontSize: '0.85rem', color: '#b45309', margin: 0, lineHeight: 1.4 }}>
                      Do not include a landing page link in the main post body. Only provide your link to users who explicitly request it in the comments.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── THE PROCESS SECTION (Diagnose. Treat. Repeat. Horizontal Row) ── */}
        <section className="section-wrapper" style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '100px 0' }}>
          <div className="container">
            <div className="section-header" style={{ alignItems: 'center', textAlign: 'center', margin: '0 auto 80px' }}>
              <span className="tag-badge">[ 02 // PROCESS ]</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', textAlign: 'center' }}>Diagnose. Treat. Repeat.</h2>
              <p className="section-paragraph" style={{ textAlign: 'center' }}>
                A structured, connected strategy for organic growth, designed for manual execution.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="grid-4">
              
              {/* Card 1 */}
              <div style={{ background: '#FDF1EC', padding: '32px 24px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: 'ui-monospace, monospace', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 700 }}>[ 01 // DISCOVER ]</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Scout subreddits</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>
                  Locate where your target customers discuss issues.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{ background: '#EDF7F2', padding: '32px 24px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: 'ui-monospace, monospace', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 700 }}>[ 02 // ANALYZE ]</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Assess risk</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>
                  Calculate posting risk scores based on mod patterns.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{ background: '#FCF8E8', padding: '32px 24px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: 'ui-monospace, monospace', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 700 }}>[ 03 // GENERATE ]</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Script materials</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>
                  Create native-sounding posts and situation replies.
                </p>
              </div>

              {/* Card 4 */}
              <div style={{ background: '#EFF5F9', padding: '32px 24px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: 'ui-monospace, monospace', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 700 }}>[ 04 // EXECUTE ]</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Post manually</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>
                  Publish briefs manually to build genuine authority.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── PRICING SECTION (Simple pricing. Every plan. Dark highlight) ── */}
        <section className="section-wrapper" id="pricing">
          <div className="container">
            <div className="section-header" style={{ alignItems: 'center', textAlign: 'center', margin: '0 auto 80px' }}>
              <span className="tag-badge">[ 03 // THE OFFER ]</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', textAlign: 'center' }}>Simple pricing. The full strategy.</h2>
              <p className="section-paragraph" style={{ textAlign: 'center' }}>
                Get your campaigns in minutes. Start with a free preview brief or unlock full campaign lists.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }} className="pricing-grid">
              
              {/* Card 1: Starter */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: 'var(--fg-subtle)', fontWeight: 600 }}>STARTER</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '8px 0' }}>Free Preview</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--fg)', margin: '16px 0 8px' }}>$0 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--fg-muted)' }}>/ month</span></div>
                <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', marginBottom: '24px' }}>Test our matching rules engine with a single preview campaign matching your category.</p>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }} className="price-features">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg-muted)' }}><CheckCircle size={14} style={{ color: 'var(--fg-subtle)' }} /> 1 campaign brief</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg-muted)' }}><CheckCircle size={14} style={{ color: 'var(--fg-subtle)' }} /> 3 target subreddits</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg-muted)' }}><CheckCircle size={14} style={{ color: 'var(--fg-subtle)' }} /> Limited drafts access</li>
                </ul>
                <Link href="/generate" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', background: 'var(--bg-subtle)' }}>
                  Start Free
                </Link>
              </div>

              {/* Card 2: Recommended (Dark highlight!) */}
              <div style={{ background: '#121212', color: '#ffffff', border: '2px solid var(--accent)', borderRadius: 'var(--radius-md)', padding: '40px 32px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', background: 'var(--accent)', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>RECOMMENDED</span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>LAUNCH PACK</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '8px 0', color: '#ffffff' }}>Full Strategy</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', margin: '16px 0 8px' }}>$29 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>/ month</span></div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>Our full 7-day manual growth blueprint with vetted subreddits, drafts, and comment copy.</p>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }} className="price-features">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)' }}><CheckCircle size={14} style={{ color: 'var(--accent)' }} /> 6+ pre-vetted subreddits</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)' }}><CheckCircle size={14} style={{ color: 'var(--accent)' }} /> 3 post drafts & 20 scripts</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)' }}><CheckCircle size={14} style={{ color: 'var(--accent)' }} /> 7-day checklist schedule</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)' }}><CheckCircle size={14} style={{ color: 'var(--accent)' }} /> Custom safety warning rules</li>
                </ul>
                <Link href="/checkout?plan=launch-pack" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', background: 'var(--accent)', borderColor: 'var(--accent)', color: '#ffffff' }}>
                  Get Launch Pack
                </Link>
                <div style={{ marginTop: '16px', fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: 'var(--accent)', fontWeight: 600, textAlign: 'center' }}>
                  [ BILLED MONTHLY // CANCEL ANYTIME ]
                </div>
              </div>

              {/* Card 3: Expert Review */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: 'var(--fg-subtle)', fontWeight: 600 }}>FOUNDER</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '8px 0' }}>Expert Review</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--fg)', margin: '16px 0 8px' }}>$49 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--fg-muted)' }}>/ month</span></div>
                <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', marginBottom: '24px' }}>Get everything in the Launch Pack plus a manual campaign audit and custom copy rewrite by our founder.</p>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }} className="price-features">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg-muted)' }}><CheckCircle size={14} style={{ color: 'var(--fg-subtle)' }} /> Everything in Launch Pack</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg-muted)' }}><CheckCircle size={14} style={{ color: 'var(--fg-subtle)' }} /> Custom manual copy rewrite</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg-muted)' }}><CheckCircle size={14} style={{ color: 'var(--fg-subtle)' }} /> Strategy audit commentary</li>
                </ul>
                <Link href="/checkout?plan=founder-review" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', background: 'var(--bg-subtle)' }}>
                  Get Custom Review
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── FAQ ACCORDION SECTION ── */}
        <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '100px', paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="section-header" style={{ alignItems: 'center', textAlign: 'center', margin: '0 auto 64px' }}>
              <span className="tag-badge">[ 04 // QUESTIONS ]</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', textAlign: 'center' }}>Common questions.</h2>
            </div>

            <div className="faq-grid" style={{ marginBottom: '60px' }}>
              <FaqItem
                question="Does ThreadScout post to Reddit for me?"
                answer="No. We build copy scripts and subreddit schedules. You submit manually from your own account. This preserves account credibility and satisfies Reddit's anti-bot guidelines."
              />
              <FaqItem
                question="Is this strategy safe for my domain name?"
                answer="Yes. By avoiding mass DMs, automated auto-posting scripts, and raw link dumping in titles, your domain name avoids getting blacklisted by Reddit system filters."
              />
              <FaqItem
                question="Who is this designed for?"
                answer="Solo builders, SaaS founders, indie hackers, and creators looking to find early beta users, get feedback, or validate their products without paying for expensive ads."
              />
              <FaqItem
                question="What is included in the campaign briefs?"
                answer="A matching subreddit map with fit risk scores, 3 post draft scripts, 20 situation reply comment templates, account safety notes, and a 7-day checklist schedule."
              />
            </div>

            {/* Bottom Support CTA */}
            <div style={{ background: '#ffffff', border: '1px solid var(--border-subtle)', padding: '32px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <strong style={{ fontSize: '1.05rem', display: 'block' }}>Have other questions?</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--fg-muted)' }}>We are here to help. Contact us anytime.</span>
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--accent)', borderColor: 'var(--accent)' }}>Contact Support</Link>
            </div>
          </div>
        </section>

        {/* ── FULL-BLEED CTA SECTION ── */}
        <section style={{ background: '#121212', color: '#ffffff', padding: '120px 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <h2 style={{ color: '#ffffff', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', textAlign: 'center', margin: 0, lineHeight: 1.1 }}>
                Be in the answer,<br />
                not just on the page.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.2rem', maxWidth: '500px', margin: 0 }}>
                Build your first value-first campaign brief in under 60 seconds.
              </p>
              <Link href="/generate" className="btn btn-primary btn-lg" style={{ background: '#ffffff', color: '#121212', border: '1px solid #ffffff', marginTop: '16px' }}>
                Build your campaign <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
