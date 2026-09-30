import {useState,useMemo,useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const mods=import.meta.glob('./data/*.json',{eager:true})
const ORDER=['c','java','python','web','bd','reseaux','uml','secu','ia','maths','linux']
const SUBJ=Object.values(mods).map(m=>m.default).sort((a,b)=>ORDER.indexOf(a.id)-ORDER.indexOf(b.id))
const ALL=SUBJ.flatMap(s=>s.sections.map(x=>({...x,sid:s.id})))
const curve=(a,b,c,d)=>{const k=(c-a)*.55;return `M${a} ${b}C${a+k} ${b},${c-k} ${d},${c} ${d}`}
const load=()=>{try{return JSON.parse(localStorage.getItem('rev')||'{}')}catch{return{}}}
const find=(q)=>{const t=q.toLowerCase().split(/\s+/).filter(w=>w.length>2);if(!t.length)return[]
 return ALL.map(s=>({s,n:t.reduce((n,w)=>n+(s.t.toLowerCase().includes(w)?8:0)+(s.x.toLowerCase().split(w).length-1),0)})).filter(r=>r.n>0).sort((a,b)=>b.n-a.n).slice(0,8).map(r=>r.s)}

function preprocessMarkdown(text) {
  let lines = text.split('\n');
  let out = [];
  let inAlert = false;
  let inCode = false;
  
  for(let i=0; i<lines.length; i++) {
    let l = lines[i];
    let m = l.match(/^\s*([❖➔➣◆☞★✿])\s*(.*)/);
    
    let isCode = /^\s*\d{1,3}\s{2,}\S/.test(l) || (/^\s{3,}\S/.test(l)&&/[{};]|#include|gcc|echo|ls|cat|cd|mkdir/.test(l));
    if (/^\s*$/.test(l) || /^\s*#/.test(l) || /^\s*[-*]\s/.test(l)) isCode = false;
    
    if (m) {
      if (inCode) { out.push('```\n'); inCode = false; }
      inAlert = true;
      let type = m[1]==='❖'?'def': m[1]==='☞'?'warn': m[1]==='➔'?'sum': m[1]==='◆'?'concept':'info';
      out.push(`\n> [ALERT|${type}|${m[1]}|${m[2]}]\n> `);
    } else if (inAlert) {
      if (l.trim().length === 0) {
        inAlert = false;
        out.push(l);
      } else {
        out.push(`> ${l.replace(/^\s*/, '')}`);
      }
    } else if (isCode) {
      if (!inCode) { out.push('\n```\n'); inCode = true; }
      out.push(l.replace(/^\s*\d{1,3}\s{2,}/,'').trimEnd());
    } else {
      if (inCode && l.trim().length === 0) {
        let nextIsCode = false;
        for (let k = i + 1; k < Math.min(lines.length, i + 3); k++) {
           if (/^\s*\d{1,3}\s{2,}\S/.test(lines[k]) || /^\s{3,}\S/.test(lines[k])) { nextIsCode = true; break; }
        }
        if (nextIsCode) out.push('');
        else { out.push('\n```\n'); inCode = false; }
      } else if (inCode && !isCode) {
        out.push('\n```\n'); inCode = false;
        out.push(l);
      } else {
        if (/^\s*—\s/.test(l)) out.push(l.replace(/^\s*—\s/, '- '));
        else out.push(l);
      }
    }
  }
  if (inCode) out.push('\n```\n');
  return out.join('\n');
}

const MarkdownComponents = {
  blockquote: ({node, children, ...props}) => {
    let type = 'info', icon = '◆', title = 'Note';
    let bodyChildren = children;
    
    if (Array.isArray(children) && children.length > 0) {
        let firstP = children[0];
        if (firstP && firstP.props && typeof firstP.props.children === 'string') {
            const text = firstP.props.children;
            const m = text.match(/^\[ALERT\|(.*?)\|(.*?)\|(.*?)\]\s*/);
            if (m) {
                type = m[1]; icon = m[2]; title = m[3];
                const remainingText = text.substring(m[0].length);
                if (remainingText.trim()) bodyChildren = [<p key="p0" style={{marginBottom: 12, lineHeight: 1.6, color: '#ddd'}}>{remainingText}</p>, ...children.slice(1)];
                else bodyChildren = children.slice(1);
                
                return <div className={`alert ${type}`} {...props}>
                  <div className="alert-h"><span>{icon}</span> <b>{title}</b></div>
                  <div className="alert-b">{bodyChildren}</div>
                </div>;
            }
        } else if (firstP && firstP.props && Array.isArray(firstP.props.children)) {
            const textNode = firstP.props.children[0];
            if (typeof textNode === 'string') {
                const m = textNode.match(/^\[ALERT\|(.*?)\|(.*?)\|(.*?)\]\s*/);
                if (m) {
                    type = m[1]; icon = m[2]; title = m[3];
                    let clonedP = {...firstP, props: {...firstP.props, children: [...firstP.props.children]}};
                    clonedP.props.children[0] = textNode.substring(m[0].length);
                    bodyChildren = [clonedP, ...children.slice(1)];
                    return <div className={`alert ${type}`} {...props}>
                      <div className="alert-h"><span>{icon}</span> <b>{title}</b></div>
                      <div className="alert-b">{bodyChildren}</div>
                    </div>;
                }
            }
        }
    }
    
    return <blockquote style={{borderLeft: '4px solid var(--theme-c)', paddingLeft: 15, color: '#ccc', margin: '10px 0'}} {...props}>{children}</blockquote>;
  },
  code: ({node, inline, className, children, ...props}) => {
    const match = /language-(\w+)/.exec(className || '');
    if (!match && (!className || !className.includes('language-'))) {
        return <code style={{background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4, fontFamily: 'monospace', color: '#fff'}} {...props}>{children}</code>;
    }
    return <pre style={{background: 'rgba(0,0,0,0.3)', padding: 15, borderRadius: 8, overflowX: 'auto', border: '1px solid rgba(255,255,255,0.05)', marginTop: 10, marginBottom: 10}} {...props}><code style={{fontFamily: 'monospace', fontSize: 13, lineHeight: 1.4, color: '#e2e8f0'}} className={className}>{children}</code></pre>;
  },
  ul: ({node, children, ...props}) => <ul style={{marginLeft: 25, listStyleType: 'disc', marginBottom: 15}} {...props}>{children}</ul>,
  ol: ({node, children, ...props}) => <ol style={{marginLeft: 25, listStyleType: 'decimal', marginBottom: 15}} {...props}>{children}</ol>,
  li: ({node, children, ...props}) => <li style={{marginBottom: 6, color: '#ddd'}} {...props}>{children}</li>,
  h1: ({node, children, ...props}) => <h2 style={{marginTop: 25, marginBottom: 15, color: 'var(--theme-c)', fontSize: '1.5em', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 5}} {...props}>{children}</h2>,
  h2: ({node, children, ...props}) => <h3 style={{marginTop: 20, marginBottom: 10, fontSize: '1.25em', color: 'var(--theme-c)'}} {...props}>{children}</h3>,
  h3: ({node, children, ...props}) => <h4 style={{marginTop: 15, marginBottom: 10, fontSize: '1.1em', color: '#fff'}} {...props}>{children}</h4>,
  p: ({node, children, ...props}) => <p style={{marginBottom: 12, lineHeight: 1.6, color: '#ddd'}} {...props}>{children}</p>,
  a: ({node, children, ...props}) => <a style={{color: 'var(--theme-c)', textDecoration: 'underline'}} {...props}>{children}</a>,
  strong: ({node, children, ...props}) => <strong style={{color: '#fff', fontWeight: 600}} {...props}>{children}</strong>,
  table: ({node, children, ...props}) => <table style={{width: '100%', marginBottom: 15, borderCollapse: 'collapse'}} {...props}>{children}</table>,
  th: ({node, children, ...props}) => <th style={{textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--theme-c)'}} {...props}>{children}</th>,
  td: ({node, children, ...props}) => <td style={{padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#ddd'}} {...props}>{children}</td>,
}

function Body({text}) {
  const md = preprocessMarkdown(text);
  return <div className="txt markdown-body">
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
      {md}
    </ReactMarkdown>
  </div>
}

function Quiz({S,onClose,savedState,onUpdate}){
 const qs=S.quiz
 const [i,setI]=useState(savedState?.i||0),[pick,setPick]=useState(null),[sc,setSc]=useState(savedState?.sc||0),[end,setEnd]=useState(false)
 const q=qs[i]
 const choose=k=>{if(pick!==null)return;setPick(k);if(k===q.a)setSc(s=>s+1)}
 const next=()=>{
  if(i+1>=qs.length){
   setEnd(true);
   onUpdate(0,0,Math.round(100*sc/qs.length))
  }else{
   setI(i+1);setPick(null);
   onUpdate(i+1,sc)
  }
 }
 return <div className="overlay"><motion.div initial={{opacity:0, scale:0.95, y:20}} animate={{opacity:1, scale:1, y:0}} exit={{opacity:0, scale:0.95, y:20}} className="glass quiz">
  <button className="x" onClick={onClose}>✕</button>
  {end?<><h2>Résultat – {S.name}</h2><div className="big">{sc}/{qs.length}</div><p>{Math.round(100*sc/qs.length)} % de réussite</p><button className="btn" onClick={onClose}>Fermer</button></>:<>
  <small>{S.name} · Question {i+1}/{qs.length}</small>
  <pre className="q">{q.q}</pre>
  {q.o.map((o,k)=><button key={k} onClick={()=>choose(k)} className={'opt '+(pick===null?'':k===q.a?'ok':k===pick?'ko':'')}><b>{'ABCDE'[k]}</b>{o}</button>)}
  {pick!==null&&<div className="expl"><b>{pick===q.a?'✔ Correct':'✘ Réponse : '+'ABCDE'[q.a]}</b><p>{q.e}</p><button className="btn" onClick={next}>{i+1>=qs.length?'Terminer':'Suivant →'}</button></div>}</>}
 </motion.div></div>
}

function Graph({S,chap,setChap,sec,setSec,p}){
 const chs=useMemo(()=>{const m={};S.sections.forEach(s=>(m[s.c]??=[]).push(s));return Object.entries(m).map(([c,l])=>({c:+c,l}))},[S])
 const ci=Math.max(0,chs.findIndex(x=>x.c===chap)),cur=chs[ci]
 
 const chapGap = 58, secGap = 42;
 const chapH = chs.length * chapGap;
 const secH = cur.l.length * secGap;
 const H = Math.max(500, chapH + 80, secH + 80);
 
 const orbX = 80, orbY = H/2;
 
 const getChapPos = (i) => {
   const y = (H - chapH)/2 + i * chapGap + chapGap/2;
   const dy = y - H/2;
   const x = 280 - (dy * dy) / 2000; // Organic convex arc shape
   return { x, y };
 };
 
 const getSecPos = (i) => ({
   x: 650,
   y: (H - secH)/2 + i * secGap + secGap/2
 });

 return <div className="graph" style={{height:H,width:850}}>
  <svg width="850" height={H} style={{position:'absolute', left:0, top:0, zIndex:0}}>
   {chs.map((c,i)=>{
     const p = getChapPos(i);
     return <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.4, delay:i*0.03}} key={c.c} d={curve(orbX,orbY,p.x,p.y)} className={i===ci?'on':''}/>
   })}
   <AnimatePresence>
   {cur.l.map((s,i)=>{
     const cP = getChapPos(ci);
     const sP = getSecPos(i);
     return <motion.path initial={{pathLength:0, opacity:0}} animate={{pathLength:1, opacity:1}} exit={{opacity:0}} transition={{duration:0.3, delay:i*0.02}} key={s.id} d={curve(cP.x,cP.y,sP.x,sP.y)} className={sec?.id===s.id?'on':''}/>
   })}
   </AnimatePresence>
  </svg>
  <motion.div initial={{scale:0, x:'-50%', y:'-50%'}} animate={{scale:1, x:'-50%', y:'-50%'}} className="orb" style={{left:orbX,top:orbY}}><i/><span>{S.name}</span></motion.div>
  {chs.map((c,i)=>{
    const pos = getChapPos(i);
    return <motion.button initial={{opacity:0, x:'-50%', y:'-50%'}} animate={{opacity:1, x:'-50%', y:'-50%'}} transition={{delay:i*0.03}} key={c.c} className={'chap glass '+(i===ci?'sel':'')} style={{left:pos.x,top:pos.y, zIndex:2}} onClick={()=>{setChap(c.c);setSec(null)}}>
     <b>{c.l.length}</b><small>Chap. {c.c}</small></motion.button>
  })}
  <AnimatePresence>
  {cur.l.map((s,i)=>{
    const pos = getSecPos(i);
    // Golden angle approximation for well-distributed distinct colors
    const hue = (i * 137.508) % 360; 
    const color = `hsl(${hue}, 80%, 65%)`;
    return <motion.button initial={{opacity:0, x:'-50%', y:'-50%'}} animate={{opacity:1, x:'-50%', y:'-50%'}} exit={{opacity:0, scale:0.9, x:'-50%', y:'-50%'}} transition={{delay:i*0.02}} key={s.id} className={'sn glass '+(sec?.id===s.id?'sel':'')} style={{left:pos.x,top:pos.y, width: 340, '--c': color}} onClick={()=>setSec(s)}>
     <em className={p.done[S.id+':'+s.id]?'d':''}/><small>{s.id}</small>{s.t}</motion.button>
  })}
  </AnimatePresence>
 </div>
}

function Panel({S,sec,p,toggle,open,onQuiz}){
 const list=S?S.sections:ALL
 const done=list.filter(s=>p.done[(s.sid||S.id)+':'+s.id]).length,pct=Math.round(100*done/list.length)
 const nq=S?S.quiz.length:SUBJ.reduce((n,s)=>n+s.quiz.length,0)
 const curIdx = (S && sec) ? S.sections.findIndex(x => x.id === sec.id) : -1;
 const nextSec = (curIdx !== -1 && curIdx < S.sections.length - 1) ? S.sections[curIdx + 1] : null;
 const handleNext = () => {
   if (!p.done[S.id+':'+sec.id]) toggle(S.id+':'+sec.id);
   if (nextSec) open(S.id, nextSec);
   else open(S.id, null);
 };
 return <aside className={`panel glass ${sec ? 'expanded' : ''}`}>
  <div className="pin">
  <AnimatePresence mode="wait">
  <motion.div key={sec?sec.id:(S?S.id:'home')} initial={{opacity:0, y:15}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-15}} transition={{duration:0.25}}>
  {sec?<>
   <small className="tag">{S.name} · {sec.id}</small><h2>{sec.t}</h2>
   <div className="body"><Body text={sec.x}/></div></>:<>
   <small className="tag">{S?S.name:'Vue d’ensemble'}</small><h2>{S?'Révision – '+S.name:'Fiche Master · Concours Informatique'}</h2>
   <div className="ring" style={{'--p':pct+'%'}}><b>{pct}%</b><small>Acquis</small></div>
   <div className="stats">
    <div className="glass"><b>{list.length}</b><small>Sections</small></div>
    <div className="glass"><b>{nq}</b><small>QCM</small></div>
    <div className="glass"><b>{done}</b><small>Acquises</small></div>
    <div className="glass"><b>{S?p.best[S.id]??'–':SUBJ.length}</b><small>{S?'Meilleur QCM %':'Matières'}</small></div></div>
   <div className="row">{S&&S.quiz.length>0&&<button className="btn" onClick={onQuiz}>{p.quizProgress?.[S.id]?.i > 0 ? 'Reprendre le QCM' : 'Lancer le QCM'}</button>}</div>
   {!S&&<p className="hint">Choisis une matière sur la carte, explore les chapitres puis les sections. Les QCM viennent directement de la fiche.</p>}</>}
  </motion.div>
  </AnimatePresence>
  </div>
  {sec && (
   <div style={{marginTop:'14px'}}>
    <button className="btn" style={{margin:0, width:'100%', padding:'14px', fontSize:'15px', fontWeight:'bold'}} onClick={handleNext}>
     {nextSec ? 'Valider et Passer au suivant ➔' : 'Valider et Terminer la matière ✔'}
    </button>
   </div>
  )}
 </aside>
}

export default function App(){
 const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
 const [p,setP]=useState(()=>({done:{},best:{},quizProgress:{},...load()}))
 const [sid,setSid]=useState(null),[sec,setSec]=useState(null),[chap,setChap]=useState(null),[quiz,setQuiz]=useState(false)
 useEffect(()=>{try{localStorage.setItem('rev',JSON.stringify(p))}catch{}},[p])
 useEffect(()=>{try{localStorage.setItem('theme',theme)}catch{}},[theme])
 const S=SUBJ.find(s=>s.id===sid)
 const toggle=k=>setP(o=>({...o,done:{...o.done,[k]:!o.done[k]}}))
 const open=(id,s)=>{setSid(id);setSec(s||null);setChap(s?s.c:null)}
 const updateQuiz = (i, sc, finalScore) => {
   setP(o => {
     const best = finalScore !== undefined ? Math.max(finalScore, o.best[S.id]||0) : o.best[S.id];
     return { ...o, best: { ...o.best, [S.id]: best }, quizProgress: { ...o.quizProgress, [S.id]: { i, sc } } };
   })
 }
 const R=250
 return <div className={`app ${theme}`} style={{'--c':S?.color||'#8b9cff'}}>
  <div className="bar glass">
   <button onClick={()=>setTheme(t=>t==='dark'?'light':'dark')} title="Changer le thème">
     {theme==='dark'?'☀️ Mode Clair':'🌙 Mode Sombre'}
   </button>
   <button onClick={()=>open(null)} className={!S?'on':''}>◉ Carte</button>
   {SUBJ.map(s=><button key={s.id} className={sid===s.id?'on':''} onClick={()=>open(s.id)} title={s.name}>{s.name.split(' ')[0]}</button>)}</div>
  <main>
   <section className={`stage ${sec ? 'shrunk' : ''}`}>
    <AnimatePresence mode="wait">
    <motion.div key={S?S.id:'main'} initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.95}} transition={{duration:0.3}} className="w-full h-full" style={{display:'flex', flexDirection:'column', minHeight:'100%'}}>
    {!S?<div className="graph" style={{height:700,width:860, margin:'auto'}}>
     <svg width="860" height="700">{SUBJ.map((s,i)=>{const a=i/SUBJ.length*6.283-1.57;return <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1, delay:0.2}} key={s.id} d={`M430 350 L${430+R*1.55*Math.cos(a)} ${350+R*1.2*Math.sin(a)}`} style={{'--c':s.color}} />})}</svg>
     <motion.div initial={{scale:0, x:'-50%', y:'-50%'}} animate={{scale:1, x:'-50%', y:'-50%'}} className="orb" style={{left:430,top:350}}><i/><span>Fiche Master</span></motion.div>
     {SUBJ.map((s,i)=>{const a=i/SUBJ.length*6.283-1.57,d=s.sections.filter(x=>p.done[s.id+':'+x.id]).length
      return <motion.button initial={{opacity:0, scale:0.5, x:'-50%', y:'-50%'}} animate={{opacity:1, scale:1, x:'-50%', y:'-50%'}} transition={{delay:i*0.08}} key={s.id} className="sn glass hub" style={{left:430+R*1.55*Math.cos(a),top:350+R*1.2*Math.sin(a),'--c':s.color}} onClick={()=>open(s.id)}>
       <b>{s.name}</b><small>{s.sections.length} sections · {s.quiz.length} QCM</small><u style={{width:100*d/s.sections.length+'%'}}/></motion.button>})}
    </div>:<Graph S={S} chap={chap??S.sections[0].c} setChap={setChap} sec={sec} setSec={setSec} p={p}/>}
    </motion.div>
    </AnimatePresence>
   </section>
   <Panel key={sid+(sec?.id||'')} S={S} sec={sec} p={p} toggle={toggle} open={open} onQuiz={()=>setQuiz(true)}/>
  </main>
  <AnimatePresence>
  {quiz&&S&&<Quiz S={S} onClose={()=>setQuiz(false)} savedState={p.quizProgress?.[S.id]} onUpdate={updateQuiz}/>}
  </AnimatePresence>
 </div>
}
