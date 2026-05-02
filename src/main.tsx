import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { SeoCtaCard } from './components/SeoCtaCard';
import { seoPages, subredditRows, sitemapRoutes } from './data/seoPages';
import './styles.css';

const trackEvent = (eventName:string, properties:Record<string, unknown>={}) => { if (import.meta.env.DEV) console.log('[trackEvent]', eventName, properties); };
const Header=()=> <header className='top'><Link to='/' className='logo'><Compass size={18}/> <b>Thread</b>Scout</Link><nav><Link to='/generate'>Generate</Link><Link to='/examples'>Examples</Link></nav></header>;
const Footer=()=> <footer className='foot'><p>Value-first Reddit campaigns for SaaS founders. No auto-posting. No mass DMs.</p></footer>;

const Landing=()=> <Card><h1>ThreadScout</h1><p>Value-first Reddit campaigns for SaaS founders.</p><Link to='/generate'><Button>Build my campaign</Button></Link></Card>;
const Generate=()=>{const nav=useNavigate(); const [email,setEmail]=React.useState(''); React.useEffect(()=>trackEvent('generator_started'),[]); return <Card><h1>Generate</h1><label>Where should we send your campaign?<input value={email} onChange={e=>setEmail(e.target.value)} /></label><Button onClick={()=>{trackEvent('email_submitted'); trackEvent('campaign_generated'); nav('/result?email='+encodeURIComponent(email));}}>Generate free preview</Button></Card>}
const Result=()=>{const [s]=useSearchParams(); const brief=`Email: ${s.get('email')||''}`; return <Card><h1>Your 7-Day Reddit Campaign</h1><p>Free preview ready.</p><Button onClick={()=>trackEvent('launch_pack_clicked')}>Get Launch Pack — $19</Button><Button variant='outline' onClick={()=>trackEvent('founder_review_clicked')}>Get Founder Review — $49</Button><pre>{brief}</pre><Button onClick={()=>trackEvent('brief_copied')}>Copy brief</Button></Card>}

const SeoTemplate=()=>{const { '*': slugPath } = useParams(); const route='/' + (slugPath||''); const page=seoPages.find(p=>p.route===route); React.useEffect(()=>{if(!page)return; document.title=page.metaTitle; const up=(sel:string,key:'name'|'property',val:string)=>{const el=document.querySelector(sel)||Object.assign(document.head.appendChild(document.createElement('meta')),{[key]:sel.match(/"(.+)"/)?.[1]||''}); (el as HTMLMetaElement).setAttribute('content',val);}; up('meta[name="description"]','name',page.metaDescription); up('meta[property="og:title"]','property',page.metaTitle); up('meta[property="og:description"]','property',page.metaDescription);},[page]); if(!page) return <Card><h1>Not found</h1></Card>;
return <div className='stack'><section className='card rail'><Badge className='accent'>{page.primaryKeyword}</Badge><h1>{page.h1}</h1><p>{page.intro}</p><p><b>Audience:</b> {page.audience}</p></section>
{page.sections.map(sec=><Card key={sec.title}><h2>{sec.title}</h2><ul>{sec.content.map(c=><li key={c}>{c}</li>)}</ul></Card>)}
<Card><h2>Example Reddit post angles</h2><ul>{page.examplePostTitles.map(t=><li key={t}>{t}</li>)}</ul></Card>
{page.kind==='subreddit'&&<Card><h2>Best subreddits</h2><table><thead><tr><th>Subreddit</th><th>Best for</th><th>Promotion risk</th><th>Best post type</th><th>What to avoid</th><th>Example post title</th></tr></thead><tbody>{subredditRows.map(r=><tr key={r[0]}>{r.map(c=><td key={c}>{c}</td>)}</tr>)}</tbody></table></Card>}
{page.kind==='usecase'&&<Card><h2>7-day action plan</h2><ol><li>Day 1: choose one subreddit and ask one useful question.</li><li>Day 2: reply to every comment with specifics.</li><li>Day 3: post a follow-up with lessons learned.</li><li>Day 4-7: iterate message, not spam volume.</li></ol></Card>}
{page.kind==='compare'&&<Card><h2>Comparison</h2><table><thead><tr><th>Field</th><th>ThreadScout</th><th>Alternative</th></tr></thead><tbody>{['Best for','Main workflow','Founder campaign planning','Subreddit strategy','Post generation','Reply generation','Rules/risk guidance','Tracking','Pricing positioning'].map(f=><tr key={f}><td>{f}</td><td>SaaS-founder-specific campaign builder</td><td>Appears focused on broader Reddit workflows</td></tr>)}</tbody></table></Card>}
{page.kind==='story'&&<Card><h2>Founder story</h2><p>I tried Reddit manually. Direct pitching was weaker. Value-first posts got more comments and views. The winning format was “Drop your startup, I’ll help.” That became ThreadScout.</p><ul><li>Free audit campaign</li><li>Roast my landing page campaign</li><li>Founder story campaign</li><li>Revenue/milestone campaign</li></ul><Link to='/generate'><Button>Build your value-first Reddit campaign</Button></Link></Card>}
<SeoCtaCard title={page.ctaTitle} description={page.ctaDescription}/>
<Card><h2>FAQ</h2>{page.faqs.map(f=><p key={f.q}><b>{f.q}</b> {f.a}</p>)}</Card>
<Card><h2>Related links</h2><ul>{page.relatedLinks.map(l=><li key={l.href}><Link to={l.href}>{l.label}</Link></li>)}</ul></Card></div>}

const App=()=> <BrowserRouter><Header/><main><Routes><Route path='/' element={<Landing/>}/><Route path='/generate' element={<Generate/>}/><Route path='/result' element={<Result/>}/>{sitemapRoutes.map(r=><Route key={r} path={r} element={<SeoTemplate/>}/>)}</Routes></main><Footer/></BrowserRouter>;
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
