import Link from 'next/link';
import {
  ShieldAlert, FileText, CheckCircle,
  Map, MessageCircle, ArrowRight, ShieldCheck, Star, AlertTriangle, Calendar, Clock, Zap
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { FaqItem } from '@/components/FaqItem';

export default function Home() {
  return (
    <div className="page-wrapper">
      
      {/* ── HERO ── */}
      <section className="hero-section" style={{ paddingBottom: 0 }}>
        <div className="hero-container hero-split" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }}>
          <FadeIn className="hero-content">
            <div className="hero-badge">For SaaS founders marketing on Reddit</div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4rem)', lineHeight: 1.08, fontWeight: 800 }}>
              Marketing on Reddit<br/>without getting <span className="highlight">suspended.</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.15rem', marginTop: '20px', maxWidth: '480px', lineHeight: 1.6 }}>
              We do the research: which subreddits accept promo, what to post, and how to reply. You execute manually.
            </p>
            <div className="hero-actions" style={{ marginTop: '28px', gap: '12px' }}>
              <Link href="/generate" className="btn btn-primary btn-lg">Build my campaign <ArrowRight size={18} /></Link>
              <Link href="#examples" className="btn btn-secondary btn-lg">See example output</Link>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '32px', fontSize: '0.85rem', color: 'var(--slate)', fontWeight: 600 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldCheck size={14} className="text-orange" /> No auto-posting</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldCheck size={14} className="text-orange" /> No mass DMs</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldCheck size={14} className="text-orange" /> Manual-first</span>
            </div>
          </FadeIn>

          <FadeIn className="hero-visual" delay={0.2}>
            <div className="hero-artifact">
              <div className="hero-artifact-header">
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span className="dot-red" style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block' }} />
                  <span className="dot-amber" style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block', background: 'var(--green)' }} />
                </div>
                <span style={{ fontSize: '.8rem', fontWeight: 700, color: 'rgba(255,255,255,.6)' }}>Campaign Brief</span>
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', fontWeight: 700, marginBottom: '8px' }}>Best First Post</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.4, marginBottom: '24px' }}>&ldquo;Drop your startup. I&rsquo;ll give you a quick brand direction.&rdquo;</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                  <div className="hero-stat-chip"><span className="hero-stat-num">6</span><span className="hero-stat-label">Subreddits</span></div>
                  <div className="hero-stat-chip"><span className="hero-stat-num">20</span><span className="hero-stat-label">Reply Templates</span></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['r/SideProject', 'r/SaaS', 'r/micro_saas'].map((s, i) => (
                    <div key={s} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', background: 'var(--bg-surface)', border: '1px solid var(--line)' }}>
                      <span style={{ fontWeight: 700, color: 'var(--orange-primary)', fontSize: '.9rem' }}>{s}</span>
                      <span className={`sub-badge ${i < 2 ? 'sub-badge-med' : 'sub-badge-low'}`} style={{ fontSize: '.7rem' }}>{i < 2 ? 'Medium' : 'Low'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" style={{ margin: '80px 0' }} />

      {/* ── PROBLEM ── */}
      <FadeIn>
        <div className="section-header"><h2>Most founders do Reddit wrong.</h2><p>They pitch too hard, pick the wrong subreddits, and get burned. Here&rsquo;s what we see over and over.</p></div>
        <StaggerContainer style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '16px' }}>
          {[
            { num: '01', title: 'Leading with the product link', desc: 'Founders post their link before earning any trust. Reddit auto-removes it or the community downvotes it within minutes.' },
            { num: '02', title: 'Ignoring subreddit culture', desc: 'Every subreddit has its own unwritten rules. What works in r/SaaS will get you banned in r/Entrepreneur.' },
            { num: '03', title: 'Writing like a marketer, not a person', desc: 'Reddit users can smell a pitch from three paragraphs away. Helpful founders get upvotes. Marketers get reported.' },
          ].map(p => (
            <StaggerItem key={p.num} className="problem-card-new">
              <div className="problem-num-new">{p.num}</div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{p.title}</h4>
                <p style={{ fontSize: '.95rem', color: 'var(--text-slate)' }}>{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div className="highlight-line">ThreadScout helps you show up as a helpful founder, not a marketer in disguise.</div>
        </div>
      </FadeIn>

      <div className="section-divider" style={{ margin: '96px 0' }} />

      {/* ── HOW IT WORKS ── */}
      <FadeIn>
        <div className="section-header">
          <span className="section-label">HOW IT WORKS</span>
          <h2>Your campaign in 60 seconds.</h2>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { step: '01', title: 'Tell us what you built', desc: 'Product name, who it\'s for, your goal, and the tone you want to hit.' },
            { step: '02', title: 'We build your brief', desc: 'Target subreddits, post drafts, reply templates, risk warnings, and a 7-day plan.' },
            { step: '03', title: 'You execute manually', desc: 'Copy the drafts, post them yourself, engage in the comments. No automation.' },
          ].map(s => (
            <div key={s.step} className="step-card-new">
              <div className="step-num-new">{s.step}</div>
              <h3 style={{ fontSize: '1.15rem', margin: '16px 0 8px' }}>{s.title}</h3>
              <p className="text-slate" style={{ fontSize: '.95rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="section-divider" style={{ margin: '96px 0' }} />

      {/* ── COMPARISON ── */}
      <FadeIn>
        <div className="section-header">
          <span className="section-label">WHY IT WORKS</span>
          <h2>Without a plan vs. with a brief.</h2>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div className="comparison-card comparison-bad">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Winging it on Reddit</h3>
            <ul className="comparison-list">
              <li>Post your link, hope someone clicks</li>
              <li>Get removed by automod within 10 minutes</li>
              <li>No idea which subreddits actually allow promo</li>
              <li>Same generic pitch across 5 communities</li>
              <li>Zero replies because you ghosted the comments</li>
            </ul>
          </div>
          <div className="comparison-card comparison-good">
            <h3 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '20px' }}>Using a ThreadScout brief</h3>
            <ul className="comparison-list" style={{ color: 'rgba(255,255,255,.7)' }}>
              <li>Subreddits pre-vetted for your niche and risk level</li>
              <li>Post drafts that sound like a founder, not an ad</li>
              <li>Reply templates for praise, criticism, and pricing questions</li>
              <li>Risk warnings so you don&rsquo;t break rules you didn&rsquo;t know about</li>
              <li>A 7-day plan so you actually follow through</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      <div className="section-divider" style={{ margin: '96px 0' }} />

      {/* ── WHAT YOU GET — Features ── */}
      <FadeIn>
        <div className="section-header"><h2>Everything in your campaign.</h2></div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            { icon: Map, title: 'Subreddit Map', desc: 'Best subreddits for your niche, sorted by fit and promotional risk.' },
            { icon: FileText, title: 'Post Drafts', desc: '3 full Reddit posts, written for each subreddit\'s tone and rules.' },
            { icon: MessageCircle, title: 'Reply Templates', desc: '20 reply templates grouped by situation: praise, criticism, pricing questions.' },
            { icon: ShieldAlert, title: 'Risk Detection', desc: 'Subreddit-specific warnings so you don\'t accidentally break a rule.' },
            { icon: Calendar, title: '7-Day Plan', desc: 'Day-by-day action plan: what to post, where, and when.' },
            { icon: Zap, title: 'Soft CTAs', desc: '5 natural ways to mention your product without sounding like an ad.' },
          ].map(f => (
            <StaggerItem key={f.title} className="feature-card-new">
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--orange-soft)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}><f.icon size={20} /></div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>{f.title}</h4>
              <p className="text-slate" style={{ fontSize: '.9rem' }}>{f.desc}</p>
            </StaggerItem>
          ))}
        </div>
      </FadeIn>

      <div className="section-divider" style={{ margin: '96px 0' }} />

      {/* ── EXAMPLE OUTPUT ── */}
      <FadeIn id="examples">
        <div className="section-header"><h2>See a real campaign output.</h2><p>Example product: Glyph — brand identity generator for startups.</p></div>
        <div className="report-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px', borderTop: '4px solid var(--orange-primary)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
            <div className="metric-box"><div className="metric-label">Product</div><div className="metric-val" style={{ fontSize: '1.1rem' }}>Glyph</div></div>
            <div className="metric-box"><div className="metric-label">Goal</div><div className="metric-val" style={{ fontSize: '1.1rem' }}>Feedback + users</div></div>
            <div className="metric-box"><div className="metric-label">Risk</div><div className="metric-val text-warning" style={{ fontSize: '1.1rem' }}>Medium</div></div>
            <div className="metric-box"><div className="metric-label">Type</div><div className="metric-val text-orange" style={{ fontSize: '1.1rem' }}>Free Audit</div></div>
          </div>
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ color: 'var(--orange-primary)', textTransform: 'uppercase', fontSize: '.8rem', letterSpacing: '.06em', marginBottom: '12px' }}>Best First Post</h4>
            <div style={{ padding: '20px', background: 'var(--bg-warm)', border: '1px solid var(--orange-soft)', borderRadius: 12, fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 600 }}>
              &ldquo;Drop your startup. I&rsquo;ll give you a quick brand direction.&rdquo;
            </div>
          </div>
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ color: 'var(--orange-primary)', textTransform: 'uppercase', fontSize: '.8rem', letterSpacing: '.06em', marginBottom: '12px' }}>Recommended Subreddits</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['r/SideProject', 'r/SaaS', 'r/micro_saas', 'r/startups'].map(s => (
                <span key={s} style={{ padding: '8px 16px', borderRadius: 99, background: 'var(--bg-surface)', border: '1px solid var(--line)', fontWeight: 700, fontSize: '.9rem' }}>{s}</span>
              ))}
            </div>
          </div>
          <div className="report-mistake">
            <AlertTriangle size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: 'text-bottom' }} />
            <strong>Mistake to avoid:</strong> Do not drop the product link in the first sentence. Earn the click through the comments.
          </div>
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-soft)', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <Link href="/generate" className="btn btn-primary">Generate your campaign <ArrowRight size={16} /></Link>
          </div>
        </div>
      </FadeIn>

      <div className="section-divider" style={{ margin: '96px 0' }} />

      {/* ── PRICING ── */}
      <FadeIn id="pricing">
        <div className="section-header"><h2>Simple pricing.</h2></div>
        <div className="pricing-grid">
          <div className="price-card" style={{ border: '1px solid var(--border-soft)' }}>
            <div className="price-name">Free Preview</div>
            <div className="price-val">$0</div>
            <p className="text-slate" style={{ marginBottom: '24px' }}>Test the strategy engine.</p>
            <ul className="price-features">
              <li><CheckCircle size={18} /> 1 campaign</li>
              <li><CheckCircle size={18} /> 3 subreddit targets</li>
              <li><CheckCircle size={18} /> Limited drafts</li>
            </ul>
            <Link href="/generate" className="btn btn-secondary btn-lg" style={{ marginTop: 'auto' }}>Get free preview</Link>
          </div>
          <div className="price-card featured" style={{ transform: 'scale(1.04)', zIndex: 10 }}>
            <div className="price-badge">Most Popular</div>
            <div className="price-name">Launch Pack</div>
            <div className="price-val">$19</div>
            <p style={{ color: 'rgba(255,250,241,.7)', marginBottom: '24px' }}>Full 7-day Reddit strategy.</p>
            <ul className="price-features">
              <li><CheckCircle size={18} style={{ color: 'var(--orange-accent)' }} /> Full 7-day campaign</li>
              <li><CheckCircle size={18} style={{ color: 'var(--orange-accent)' }} /> 6+ subreddit targets</li>
              <li><CheckCircle size={18} style={{ color: 'var(--orange-accent)' }} /> 3 post drafts</li>
              <li><CheckCircle size={18} style={{ color: 'var(--orange-accent)' }} /> 20 reply templates</li>
              <li><CheckCircle size={18} style={{ color: 'var(--orange-accent)' }} /> Risk detection</li>
            </ul>
            <Link href="/checkout?plan=launch-pack" className="btn btn-primary btn-lg" style={{ marginTop: 'auto', background: 'white', color: 'var(--ink)' }}>Get Launch Pack</Link>
          </div>
          <div className="price-card" style={{ border: '1px solid var(--border-soft)' }}>
            <div className="price-badge price-badge-urgent">Limited</div>
            <div className="price-name">Founder Review</div>
            <div className="price-val">$49</div>
            <p className="text-slate" style={{ marginBottom: '24px' }}>Manual human review.</p>
            <ul className="price-features">
              <li><Star size={18} /> Everything in Launch Pack</li>
              <li><Star size={18} /> Manual strategy review</li>
              <li><Star size={18} /> Custom post edits</li>
            </ul>
            <Link href="/checkout?plan=founder-review" className="btn btn-secondary btn-lg" style={{ marginTop: 'auto' }}>Get reviewed</Link>
          </div>
        </div>
      </FadeIn>

      <div className="section-divider" style={{ margin: '96px 0' }} />

      {/* ── FAQ ── */}
      <FadeIn>
        <div className="section-header"><h2>FAQ</h2></div>
        <div className="faq-section">
          <FaqItem question="Does ThreadScout post to Reddit for me?" answer="No. We help you plan manual, value-first campaigns. No auto-posting, no mass DMs. We give you the strategy, you do the posting." />
          <FaqItem question="Is this safe for Reddit?" answer="Yes. The entire approach is designed around subreddit rules and value-first participation. You still need to follow each community's rules, but our risk notes flag problems before you post." />
          <FaqItem question="Who is this for?" answer="SaaS founders, indie hackers, solo builders, and startup teams who want Reddit traffic without spammy tactics." />
          <FaqItem question="What do I get?" answer="Subreddit targets, post drafts, reply templates, risk notes, a 7-day plan, and a campaign tracker. All based on your specific product." />
        </div>
      </FadeIn>

      {/* ── FINAL CTA ── */}
      <FadeIn className="final-cta" style={{ margin: '96px auto 48px' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Stop overthinking Reddit.</h2>
        <p>Get your campaign brief in 60 seconds.</p>
        <Link href="/generate" className="btn btn-primary btn-lg" style={{ marginTop: '24px' }}>Build my campaign <ArrowRight size={20} /></Link>
      </FadeIn>

    </div>
  );
}
