"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, CalendarDays, Check, ChevronRight, Clock3, Headphones, House, MessageCircle, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";

type Message = { text: string; from: "agent" | "user" };

const answers: Record<string, string> = {
  "Find a 2-bed in Bristol": "I can help with that. I’ve found a lovely 2-bedroom home in Clifton, Bristol for £1,650 pcm. Would you like to see the details or book a viewing?",
  "Book a viewing": "Of course! I have viewing slots on Thursday at 4:30pm or Saturday at 11:00am. Which works best for you?",
  "Speak to an agent": "Absolutely. I’ve let the team know you’d like to speak with an agent. What’s the best number or email to reach you on?"
};

function ChatPreview() {
  return <div className="product-card" aria-label="Example conversation with the SidePath assistant">
    <div className="card-top"><div className="agent-ident"><div className="agent-dot"><Sparkles size={16}/></div><div>SidePath assistant <div style={{fontWeight:400,color:"#86918a",fontSize:9,marginTop:3}}>Oak &amp; Stone Properties</div></div></div><div className="online"><span className="pulse"/> Online</div></div>
    <div className="chat-body"><div className="chat-time">TODAY, 10:42 AM</div>
      <div className="chat-bubble">Hi! I’m looking for a two-bed flat in Bristol, ideally under £1,800 a month.</div>
      <div className="chat-bubble user">I can help you find a match. Do you have a preferred area or move-in date?</div>
      <div className="chat-bubble">Clifton would be great. Hoping to move next month.</div>
      <div className="listing-mini"><div className="listing-photo"/><div><div className="listing-name">Bright 2-bed in Clifton</div><div className="listing-detail">Clifton, Bristol · Available 1 June</div><div className="listing-price">£1,650 pcm</div></div></div>
      <div className="chat-input"><span>Type your message...</span><button aria-label="Send" className="send-button"><Send size={12}/></button></div>
    </div>
  </div>;
}

function DemoWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{text:"Hello! I’m the SidePath demo assistant. What can I help you with today?",from:"agent"}]);
  const [selected, setSelected] = useState<string | null>(null);

  function choose(prompt: string) {
    setSelected(prompt);
    setMessages((items) => [...items, {text:prompt,from:"user"}, {text:answers[prompt],from:"agent"}]);
  }

  return <div className="demo-widget">
    {open && <div className="widget-panel" role="dialog" aria-label="SidePath interactive demo">
      <div className="widget-head"><div><strong>SidePath assistant</strong><small>Demo · Online now</small></div><button onClick={()=>setOpen(false)} aria-label="Close demo"><X size={17}/></button></div>
      <div className="widget-messages">{messages.map((msg,i)=><div key={i} className={`widget-msg ${msg.from === "user" ? "user" : ""}`}>{msg.text}</div>)}</div>
      <div className="widget-options">{!selected ? Object.keys(answers).map((prompt)=><button key={prompt} onClick={()=>choose(prompt)}>{prompt} <ChevronRight size={12} style={{float:"right"}}/></button>) : <button onClick={()=>{setSelected(null);setMessages([{text:"Hello! I’m the SidePath demo assistant. What can I help you with today?",from:"agent"}]);}}>Start a new demo <ArrowRight size={12} style={{float:"right"}}/></button>}</div>
      <div className="widget-disclaimer">Demo conversation · No messages are sent or stored</div>
    </div>}
    <button className="widget-toggle" onClick={()=>setOpen(!open)} aria-label={open ? "Close chat demo" : "Open chat demo"}>{open ? <X size={23}/> : <MessageCircle size={23}/>}</button>
  </div>;
}

export default function HomePage() {
  return <main>
    <nav className="nav shell"><a href="#home" className="logo"><span className="logo-mark"><ArrowUpRight size={19}/></span>sidepath<span style={{color:"#b6f36a"}}>uk</span></a><div className="nav-links"><a href="#how">How it works</a><a href="#features">What it does</a><a href="#integrations">Integrations</a><a className="nav-cta" href="#contact">Book a demo <ArrowRight size={13} style={{display:"inline",verticalAlign:"middle",marginLeft:4}}/></a></div></nav>
    <section className="hero" id="home"><div className="shell hero-inner"><div>
      <div className="eyebrow"><span className="pulse"/> Your always-on estate agency assistant</div>
      <h1>Every enquiry.<br/>A better <em>next step.</em></h1>
      <p className="hero-copy">SidePath helps estate agents capture new leads, answer property questions, book viewings and follow up—so your team can focus on the people ready to move.</p>
      <div className="hero-actions"><a className="button-primary" href="#contact">See what SidePath can do <ArrowRight size={15}/></a><a className="button-quiet" href="#how"><span style={{width:28,height:28,border:"1px solid rgba(255,255,255,.28)",borderRadius:"50%",display:"grid",placeItems:"center"}}><ArrowDown size={13}/></span> Explore how it works</a></div>
      <div className="trust-row"><div className="avatar-stack"><span>J</span><span>A</span><span>M</span></div><span>Built around the way your agency works</span></div>
    </div><div className="hero-visual"><ChatPreview/><div className="floating-note note-one"><span className="note-icon"><CalendarDays size={15}/></span> Viewing booked · Sat 11:00</div><div className="floating-note note-two"><span className="note-icon"><Check size={15}/></span> New lead captured</div></div></div></section>

    <section className="section" id="features"><div className="shell"><div className="section-heading"><div className="section-kicker">More time for people</div><h2>Small tasks, handled.<br/>Great service, remembered.</h2><p>Give every enquiry a helpful first response—even when your team is busy, out on viewings, or off for the day.</p></div><div className="features-grid">
      <article className="feature"><div className="feature-icon"><MessageCircle size={19}/></div><h3>Reply to new enquiries</h3><p>Answer common questions quickly using your approved property details and agency information.</p></article>
      <article className="feature"><div className="feature-icon"><Users size={19}/></div><h3>Capture useful lead details</h3><p>Understand what someone is looking for, their preferred area, budget and move-in timeframe.</p></article>
      <article className="feature"><div className="feature-icon"><CalendarDays size={19}/></div><h3>Make booking simple</h3><p>Help interested people request a viewing and send your team the details to confirm.</p></article>
      <article className="feature"><div className="feature-icon"><Clock3 size={19}/></div><h3>Follow up thoughtfully</h3><p>Keep a conversation moving with agreed reminders and useful next steps—not noisy automation.</p></article>
      <article className="feature"><div className="feature-icon"><Headphones size={19}/></div><h3>Bring your team in</h3><p>Pass tricky, sensitive or uncertain questions to a person, with the conversation context.</p></article>
      <article className="feature"><div className="feature-icon"><ShieldCheck size={19}/></div><h3>Your agency stays in control</h3><p>Use your tone, your information and your rules. People review important decisions and documents.</p></article>
    </div></div></section>

    <section className="section workflow" id="how"><div className="shell workflow-grid"><div className="workflow-copy"><div className="section-kicker">Designed to fit your process</div><h2>From first hello to booked viewing.</h2><p>SidePath can support the repetitive steps in an enquiry—while keeping your people in charge of the relationship.</p><div className="steps">
      <div className="step"><div className="step-number">01</div><div><strong>A lead gets in touch</strong><span>Website chat or a connected channel—start with what your team already uses.</span></div></div>
      <div className="step"><div className="step-number">02</div><div><strong>SidePath answers and listens</strong><span>It responds using approved information and asks the right next question.</span></div></div>
      <div className="step"><div className="step-number">03</div><div><strong>Your team gets the handover</strong><span>Lead details and viewing requests go to your chosen tools for a human to follow through.</span></div></div>
    </div></div>
    <div className="workflow-panel"><div className="panel-header"><span>Enquiry overview</span><small>Sample agency dashboard · Today</small></div><div className="lead-row head"><span>LEAD</span><span>INTEREST</span><span>STATUS</span><span>TIME</span></div>
      <div className="lead-row"><div className="lead-person"><span className="lead-avatar">LM</span>Lauren M.</div><span>2-bed · Bristol</span><span className="status">Viewing</span><span>10:42</span></div>
      <div className="lead-row"><div className="lead-person"><span className="lead-avatar" style={{background:"#f1dfbd"}}>DK</span>David K.</div><span>House · Bath</span><span className="status warm">Follow up</span><span>10:18</span></div>
      <div className="lead-row"><div className="lead-person"><span className="lead-avatar" style={{background:"#d8dcf5"}}>AS</span>Aisha S.</div><span>Flat · Cardiff</span><span className="status new">New lead</span><span>09:56</span></div>
      <div className="stats-row"><div className="stat"><span>Enquiries handled</span><strong>24</strong></div><div className="stat"><span>Viewing requests</span><strong>08</strong></div><div className="stat"><span>Team handovers</span><strong>06</strong></div></div>
    </div></div></section>

    <section className="section" id="integrations"><div className="shell"><div className="section-heading"><div className="section-kicker">Works with your toolkit</div><h2>Start simple. Connect what you need.</h2><p>Every agency works differently. We’ll shape the setup around the tools and channels your team already uses.</p><div className="integrations"><span className="integration">Website chat</span><span className="integration">WhatsApp</span><span className="integration">Google Calendar</span><span className="integration">HubSpot</span><span className="integration">Follow Up Boss</span><span className="integration">Email</span></div></div></div></section>

    <section className="cta-section" id="contact"><div className="shell"><div className="cta-box"><div className="cta-copy"><div className="eyebrow"><span className="pulse"/> Let’s talk about your workflow</div><h2>What could your team do with a little more time?</h2><p>Tell us how enquiries move through your agency. We’ll show you what a tailored assistant could look like.</p></div><a className="button-primary" href="mailto:hello@sidepathuk.co.uk?subject=SidePath%20demo%20request">Book a free walkthrough <ArrowRight size={15}/></a></div></div></section>

    <footer className="footer"><div className="shell footer-inner"><div><a href="#home" className="logo"><span className="logo-mark"><ArrowUpRight size={19}/></span>sidepath<span style={{color:"#b6f36a"}}>uk</span></a><div className="footer-note">A more helpful first step for every property enquiry.</div></div><div className="footer-links"><span>Built for UK estate agencies</span><a href="mailto:hello@sidepathuk.co.uk">Get in touch</a><span>© {new Date().getFullYear()} SidePathUK</span></div></div></footer>
    <DemoWidget/>
  </main>;
}
