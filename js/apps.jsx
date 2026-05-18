// =====================================================================
// All app body components, plus content data (resume, skills, etc).
// =====================================================================

const RESUME = {
  name: "Sreenidhi Nallajerla",
  tagline: "Cybersecurity consultant & founder · Bengaluru",
  experience: [
    { role: "TASS", title: "Founder (Stealth)", dates: "Jul 2025 – Present", meta: "Remote", bullets: [
      "Building a spec-based code capability scanner from the ground up as solo founder — responsible for product design, architecture, and full-stack engineering.",
      "Developed an app (with Tree-sitter AST parsing) that scans pull requests for newly introduced capabilities (network calls, database writes, new dependencies, privilege patterns) and surfaces them for explicit human review before merge."
    ]},
    { role: "Caladrius Health AI", title: "Security Consultant", dates: "Nov 2025 – Present", meta: "Remote", bullets: [
      "Leading ABDM M1/M2/M3 certification readiness, developing automated bash test suites and end-to-end functional testing frameworks for NHA compliance.",
      "Conducting Web Application Security Assessments (WASA) and implementing a DAST pipeline, producing audit-ready findings reports from multi-tool analysis.",
      "Driving end-to-end agentic AI transformation — from enterprise developer tooling with policy governance, through LLM-assisted dev pipelines with integrated security remediation, to autonomous n8n-orchestrated workflows in production.",
      "Advising on AI infrastructure strategy: model provider architecture, autonomous development pipelines, and compliance-first document processing design."
    ]},
    { role: "NIFECARD", title: "Security Consultant", dates: "Aug 2025 – Present", meta: "Remote", bullets: [
      "Conducting iterative mobile application security assessments across Android APKs — static analysis, dynamic testing, and penetration testing across three engagements.",
      "Performing web application security assessments on the NIFECARD platform, identifying and reporting vulnerabilities across the full OWASP testing scope."
    ]},
    { role: "Dezerv", title: "Security Engineering Intern", dates: "Jan 2025 – Jun 2025", meta: "On-site, Bengaluru", bullets: [
      "Built Dezerv's internal vulnerability management pipeline with automated scanning, issue tracking, and dashboarding using GitHub Actions, GoSec, XEOL, and GitLeaks.",
      "Integrated security tooling into CI/CD, configured AWS backups, and ensured compliance with internal and external security standards.",
      "Led vulnerability triaging and collaborated with engineering for timely remediation, aligned with OWASP and DevSecOps best practices.",
      "Supported threat modeling and risk assessments for new features across on-prem and cloud deployments.",
      "Contributed to PII tokenization, Superset RBAC policy enforcement, and secure dashboard access for client financial relationship managers.",
      "Initiated and led the Security Champions program to evangelise secure coding practices across teams."
    ]},
    { role: "PES University", title: "Teaching Assistant (Information Security)", dates: "Jan 2025 – May 2025", meta: "On-site, Bengaluru", bullets: [
      "Selected as TA for an advanced elective covering threat modelling, application security, and penetration testing — worked directly with Prof. Sushma E.",
      "Designed and delivered lab assignments and demonstrations on Wireshark, OWASP ZAP, Kali Linux, and SeedLabs.",
      "Led weekly lab sessions; provided personalised feedback on student submissions, code reviews, and project evaluations."
    ]},
    { role: "Florida International University", title: "Research Intern, Global Forensic and Justice Center", dates: "Jun 2024 – Aug 2024", meta: "Remote · FINDS Research Center of Excellence (US Army Research Office)", bullets: [
      "Investigated network traffic obfuscation under traffic attacks; presented weekly progress reports and submitted a draft research paper."
    ]},
    { role: "CID Karnataka", title: "Software Development Intern, Center of Cybercrime Investigation", dates: "Jun 2024 – Aug 2024", meta: "Hybrid, Bengaluru", bullets: [
      "Developed an open-source, offline investigative tool with mobile dump file retrieval, face detection, object detection (weapons, plates, documents, substances), and chronological multimedia timeline mapping.",
      "Owned the project frontend and designed the timeline component; integrated backend data extraction with frontend visualisation for a seamless investigative UX.",
      "Worked directly with investigators to translate law enforcement requirements into technical specifications, ensuring the tool addressed real-world mobile forensics workflows."
    ]}
  ],
  skills: [
    ["Security & DevSecOps", ["Vulnerability Management","Threat Modeling","Pentesting (OWASP)","Secure Coding","CI/CD Security","GitHub Actions"]],
    ["Security Tools", ["GoSec","GitLeaks","Semgrep","Bearer","SonarQube","Checkov","Snyk","OWASP ZAP","Wireshark","Scapy","FTK Imager","Autopsy"]],
    ["Cloud & Infrastructure", ["AWS Security","Docker","Kubernetes","Terraform","Podman","Tailscale","DigitalOcean"]],
    ["Programming", ["Python","Golang","C","Bash"]],
    ["Frameworks & Standards", ["OWASP","NIST","SANS","CIS","ABDM/NHA"]],
    ["AI & Automation", ["n8n","LLM-assisted pipelines","Claude Code","Agentic workflow design"]],
    ["Other", ["Prometheus + Grafana","Superset","Snowflake","MySQL","MongoDB","PostgreSQL"]]
  ],
  certs: [
    "Secure Software Design Specialization — University of Colorado · Oct 2025",
    "Machine Learning Specialization — Stanford / DeepLearning.ai · Oct 2024",
    "Indo-Dutch Cyber Security School (IDCSS 2024) — DSCI / Hague Centre for Strategic Studies · Nov 2024",
    "The Great AppSec Hackathon — DSCI, Govt. of Telangana · Aug 2024",
    "3rd Place — Dark Web Monitoring Track, CIDECODE · CID Karnataka · Mar 2024",
    "Linux Kernel Development (LFD103) — The Linux Foundation · Feb 2023"
  ]
};

// ----- About / Welcome window
const AboutApp = () => (
  <>
    <div className="welcome-panel">
      <div className="welcome-icon">S</div>
      <div>
        <h1>Sreenidhi Nallajerla</h1>
        <p className="tagline">Cybersecurity consultant &amp; founder · Bengaluru</p>
      </div>
    </div>
    <p>I run security assessments and compliance programs for clients across <strong>healthcare, AI, and fintech</strong>: penetration testing, DAST pipelines, compliance standards (ABDM/NHA, OWASP), and agentic AI workflows. On the product side, I'm building <strong>TASS</strong> — a stealth-mode platform focused on AI capability drift detection and design-phase threat analysis.</p>
    <p>I believe the next generation of cybersecurity must shift from reactive defense to <em>continuous, AI-driven prevention</em> — catching threats and design flaws before they reach production, cost-effectively and at scale.</p>
    <div className="pull-quote">tracing the lines between self-trust and security.</div>
    <div style={{textAlign:'center', margin:'14px 0'}}>
      <img
        src="./assets/sreenidhi.jpg"
        alt="Sreenidhi Nallajerla"
        style={{
          width: 220,
          height: 220,
          objectFit: 'cover',
          border: '2px solid',
          borderTopColor: '#ffffff',
          borderLeftColor: '#ffffff',
          borderRightColor: '#404040',
          borderBottomColor: '#404040',
          boxShadow: 'inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080'
        }}
      />
      <div style={{fontSize: 10, color: '#666', marginTop: 4, fontStyle: 'italic'}}>
        — Sreenidhi, 2025
      </div>
    </div>
    <div className="info-grid">
      <div className="info-card">
        <h3>Currently</h3>
        <p>Founding TASS · Lead security consultant at Caladrius Health AI · Mobile &amp; web AppSec for NIFECARD · Writing on AI security at <a href="https://substack.com/@mozartchangedmylife" target="_blank" rel="noopener">mozartchangedmylife</a>.</p>
      </div>
      <div className="info-card">
        <h3>Background</h3>
        <p>B.Tech CSE (Cybersecurity), PES University — CGPA 8.83. 6× Distinction Award (DAC scholarship). Specialised in Cybersecurity &amp; Connected Systems.</p>
      </div>
    </div>
    <p style={{marginTop:14, fontSize:11, color:'#666'}}>Tip: try <em>Terminal.exe</em>, <em>TASS Scanner</em>, or right-click the desktop.</p>
  </>
);

// ----- Experience
const ExperienceApp = () => (
  <>
    {RESUME.experience.map((e, i) => (
      <div className="work-entry" key={i}>
        <div className="work-header">
          <div className="work-role">{e.role}<span className="work-role-title"> · {e.title}</span></div>
          <div className="work-dates">{e.dates}</div>
        </div>
        <div className="work-meta">{e.meta}</div>
        <ul>{e.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>
      </div>
    ))}
  </>
);

// ----- Skills
const SkillsApp = () => (
  <>
    {RESUME.skills.map(([head, items], i) => (
      <div className="skill-group" key={i}>
        <strong>{head}:</strong>{' '}
        {items.map((s,j) => <span className="skill-chip" key={j}>{s}</span>)}
      </div>
    ))}
  </>
);

// ----- Certifications & Awards
const CertsApp = () => (
  <>
    <h2>Certifications &amp; Awards</h2>
    <ul className="file-list">
      {RESUME.certs.map((c,i)=>(
        <li key={i}>
          <svg className="file-icon" viewBox="0 0 16 16">
            <rect x="2" y="2" width="12" height="12" fill="#fff" stroke="#666"/>
            <polyline points="5,8 7,11 11,5" fill="none" stroke="#3a8c3a" strokeWidth="1.5"/>
          </svg>
          <span>{c}</span>
        </li>
      ))}
    </ul>
    <h2>Beyond the terminal</h2>
    <ul className="file-list">
      <li>
        <svg className="file-icon" viewBox="0 0 16 16">
          <rect x="3" y="2" width="10" height="12" fill="#222" stroke="#000"/>
          <rect x="4" y="3" width="2" height="8" fill="#fff"/>
          <rect x="7" y="3" width="2" height="8" fill="#fff"/>
          <rect x="10" y="3" width="2" height="8" fill="#fff"/>
        </svg>
        <span><strong>Classical Piano</strong> — Trinity College of London. Merit/Distinction across all grades from Initial to Grade 8. Currently pursuing the Associate Diploma (ATCL) in Classical Piano Performance at Piano Passion, Bengaluru.</span>
      </li>
    </ul>
    <p style={{marginTop:10, fontSize:11, color:'#666'}}>Open <em>Piano.exe</em> from the desktop to hear a phrase.</p>
  </>
);

// ----- Contact
const ContactApp = () => (
  <div style={{padding:'4px 0'}}>
    <p style={{marginBottom:14}}>For consulting work, speaking, collaboration, or just to say hi:</p>
    <div className="btn-row">
      <a href="mailto:sreenidhin2002@gmail.com" className="xp-btn">✉ Email</a>
      <a href="https://www.linkedin.com/in/sreenidhi-nallajerla-2352491b1/" className="xp-btn" target="_blank" rel="noopener">🔗 LinkedIn</a>
      <a href="https://substack.com/@mozartchangedmylife" className="xp-btn" target="_blank" rel="noopener">📝 Substack</a>
      <a href="tel:+919611642552" className="xp-btn">📞 +91 96116 42552</a>
    </div>
    <p style={{textAlign:'right', color:'#888', fontSize:10, fontStyle:'italic', marginTop:24}}>
      — made with <span className="heart">💙</span> in Bengaluru
    </p>
  </div>
);

// ----- Notepad with Substack notes
const NOTEPAD_TEXT = `mozartchangedmylife.txt — Notepad
================================================================

Pianist in passing, cybersecurity engineer by trade.
Research-grade pieces on AI security, attack frameworks, and
the unseen layers of digital life.

Read at: https://substack.com/@mozartchangedmylife

----------------------------------------------------------------
LATEST NOTES
----------------------------------------------------------------

[1] https://substack.com/@mozartchangedmylife/note/p-195208679
[2] https://substack.com/@mozartchangedmylife/note/p-190380609
[3] https://substack.com/@mozartchangedmylife/note/p-178571219

----------------------------------------------------------------
ABOUT THIS NOTEPAD
----------------------------------------------------------------

This is plain text on purpose. The good security writing — like
the good security work — is mostly noticing what's been quietly
moved, renamed, or normalised since the last time you looked.

Open in browser ↗`;

const NotepadApp = () => {
  const lines = NOTEPAD_TEXT.split('\n');
  return (
    <div className="notepad-body">
      {lines.map((ln, i) => {
        const m = ln.match(/(https?:\/\/\S+)/);
        if (m) {
          const before = ln.slice(0, m.index);
          const url = m[1];
          const after = ln.slice(m.index + url.length);
          return <div key={i}>{before}<a href={url} target="_blank" rel="noopener">{url}</a>{after}</div>;
        }
        return <div key={i}>{ln || '\u00A0'}</div>;
      })}
    </div>
  );
};

// ====================================================================
// TERMINAL
// ====================================================================
const FS = {
  '/': { type: 'dir', children: ['about.txt', 'projects', 'writing', 'contact.txt', 'now.txt', 'README.md'] },
  '/about.txt': { type: 'file', body:
`Sreenidhi Nallajerla
Cybersecurity consultant & founder · Bengaluru

I run security assessments and compliance programs for clients
across healthcare, AI, and fintech. On the product side I'm building
TASS — a stealth-mode platform for AI capability drift detection
and design-phase threat analysis.

   tracing the lines between self-trust and security.` },
  '/now.txt': { type: 'file', body:
`Founding TASS (stealth)
Lead security consultant @ Caladrius Health AI
Mobile + web AppSec @ NIFECARD
Pursuing ATCL in Classical Piano Performance` },
  '/contact.txt': { type: 'file', body:
`email   : sreenidhin2002@gmail.com
phone   : +91 96116 42552
linkedin: linkedin.com/in/sreenidhi-nallajerla-2352491b1
substack: substack.com/@mozartchangedmylife` },
  '/README.md': { type: 'file', body:
`# this site
Built as a small love letter to the OS that taught me what windows are.
Try: ls projects/, cat about.txt, sudo trust me, help` },
  '/projects': { type: 'dir', children: ['tass.md', 'caladrius.md', 'nifecard.md', 'dezerv.md', 'cid.md'] },
  '/projects/tass.md': { type: 'file', body:
`# TASS — Founder (Jul 2025 – Present)
Spec-based code capability scanner. Tree-sitter AST parsing on
PRs to surface newly-introduced capabilities (network calls, DB
writes, new deps, privilege patterns) for explicit human review
before merge.` },
  '/projects/caladrius.md': { type: 'file', body:
`# Caladrius Health AI — Security Consultant
ABDM M1/M2/M3 certification readiness, automated bash test suites,
end-to-end functional testing for NHA compliance, WASA + DAST
pipeline. Driving agentic AI transformation across dev tooling
and n8n-orchestrated workflows.` },
  '/projects/nifecard.md': { type: 'file', body:
`# NIFECARD — Security Consultant
Iterative mobile (Android APK) security assessments — static, dynamic,
penetration. Web AppSec across the full OWASP scope.` },
  '/projects/dezerv.md': { type: 'file', body:
`# Dezerv — Security Engineering Intern
Built the internal vulnerability management pipeline (GitHub Actions,
GoSec, XEOL, GitLeaks). Led triaging, threat modeling, PII tokenization,
Superset RBAC, and the Security Champions program.` },
  '/projects/cid.md': { type: 'file', body:
`# CID Karnataka — SDE Intern, Center of Cybercrime Investigation
Open-source, offline investigative tool: mobile dump retrieval, face
detection, object detection (weapons / plates / docs / substances),
chronological multimedia timelines.` },
  '/writing': { type: 'dir', children: ['LATEST.md'] },
  '/writing/LATEST.md': { type: 'file', body:
`Latest notes at mozartchangedmylife:
  [1] substack.com/.../note/p-195208679
  [2] substack.com/.../note/p-190380609
  [3] substack.com/.../note/p-178571219` }
};

function joinPath(cwd, target) {
  if (target.startsWith('/')) return normalize(target);
  if (cwd === '/') return normalize('/' + target);
  return normalize(cwd + '/' + target);
}
function normalize(p) {
  const parts = p.split('/').filter(Boolean);
  const out = [];
  for (const part of parts) {
    if (part === '.') continue;
    if (part === '..') out.pop();
    else out.push(part);
  }
  return '/' + out.join('');
}

const TerminalApp = () => {
  const [history, setHistory] = React.useState([
    { type:'sys', text:'Microsoft Whimsy [Version 5.1.2600]\n(c) Copyright 2002-2026 Sreenidhi Nallajerla. Type "help" for commands.' }
  ]);
  const [cwd, setCwd] = React.useState('/');
  const [input, setInput] = React.useState('');
  const [pastIdx, setPastIdx] = React.useState(-1);
  const inputRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const cmdHistory = React.useRef([]);

  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const focus = () => inputRef.current && inputRef.current.focus();

  React.useEffect(() => { focus(); }, []);

  function pushOut(t, cls) { setHistory(h => [...h, { type: cls || 'out', text: t }]); }

  function run(raw) {
    const cmd = raw.trim();
    setHistory(h => [...h, { type:'cmd', text: `${promptStr(cwd)} ${raw}` }]);
    if (!cmd) return;
    cmdHistory.current.push(cmd);
    setPastIdx(-1);

    const [c, ...args] = cmd.split(/\s+/);
    const arg0 = args[0] || '';

    switch ((c || '').toLowerCase()) {
      case 'help':
        pushOut('Commands:\n  whoami            who am I?\n  ls [path]         list directory\n  cd <path>         change directory\n  cat <file>        print file\n  pwd               working directory\n  open <app>        open an app (about, experience, piano, tass, network, mines, notepad, contact)\n  date              current date and time\n  echo <text>       print text\n  clear / cls       clear screen\n  hire              :)\n  sudo <anything>   try it', 'out');
        return;
      case 'whoami':
        pushOut('sreenidhi  —  cybersec consultant, founder, pianist in passing.', 'ok');
        return;
      case 'pwd':
        pushOut(cwd, 'out'); return;
      case 'date':
        pushOut(new Date().toString(), 'out'); return;
      case 'echo':
        pushOut(args.join(' '), 'out'); return;
      case 'clear': case 'cls':
        setHistory([]); return;
      case 'ls': {
        const p = arg0 ? joinPath(cwd, arg0) : cwd;
        const node = FS[p || '/'];
        if (!node) { pushOut(`ls: cannot access '${arg0}': No such file or directory`, 'err'); return; }
        if (node.type !== 'dir') { pushOut(arg0, 'out'); return; }
        pushOut(node.children.map(n => {
          const full = (p === '/' ? '/' : p + '/') + n;
          return FS[full] && FS[full].type === 'dir' ? n + '/' : n;
        }).join('   '), 'accent');
        return;
      }
      case 'cd': {
        if (!arg0 || arg0 === '~') { setCwd('/'); return; }
        const p = joinPath(cwd, arg0);
        const node = FS[p || '/'];
        if (!node) { pushOut(`cd: ${arg0}: No such file or directory`, 'err'); return; }
        if (node.type !== 'dir') { pushOut(`cd: ${arg0}: Not a directory`, 'err'); return; }
        setCwd(p || '/');
        return;
      }
      case 'cat': {
        if (!arg0) { pushOut('cat: missing operand', 'err'); return; }
        const p = joinPath(cwd, arg0);
        const node = FS[p];
        if (!node) { pushOut(`cat: ${arg0}: No such file or directory`, 'err'); return; }
        if (node.type !== 'file') { pushOut(`cat: ${arg0}: Is a directory`, 'err'); return; }
        pushOut(node.body, 'out');
        return;
      }
      case 'open': {
        const map = { about: 'about', experience: 'experience', skills: 'skills', certs: 'certs', piano: 'piano', tass: 'tass', network: 'network', mines: 'mines', minesweeper: 'mines', notepad: 'notepad', writing: 'notepad', contact: 'contact' };
        const k = map[arg0.toLowerCase()];
        if (!k) { pushOut(`open: unknown app '${arg0}'. try: about | experience | skills | certs | piano | tass | network | mines | notepad | contact`, 'err'); return; }
        window.dispatchEvent(new CustomEvent('osm:open', { detail: { id: k }}));
        pushOut(`opening ${arg0}.exe ...`, 'ok');
        return;
      }
      case 'hire':
        pushOut('sreenidhin2002@gmail.com  —  let\'s talk.', 'accent');
        return;
      case 'sudo':
        pushOut(`[sudo] password for sreenidhi: \nSorry, user sreenidhi is not in the sudoers file. This incident will be logged. (just kidding)`, 'err');
        return;
      case 'exit':
        window.dispatchEvent(new CustomEvent('osm:close', { detail: { id: 'terminal' }}));
        return;
      default:
        pushOut(`'${c}' is not recognized as an internal or external command. Type "help".`, 'err');
    }
  }

  function onKey(e) {
    if (e.key === 'Enter') {
      run(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const h = cmdHistory.current;
      if (!h.length) return;
      const ni = pastIdx < 0 ? h.length - 1 : Math.max(0, pastIdx - 1);
      setPastIdx(ni); setInput(h[ni] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const h = cmdHistory.current;
      if (pastIdx < 0) return;
      const ni = pastIdx + 1;
      if (ni >= h.length) { setPastIdx(-1); setInput(''); }
      else { setPastIdx(ni); setInput(h[ni]); }
    }
  }

  function promptStr(p) { return `sreenidhi@os:${p}$`; }

  return (
    <div className="terminal-body" ref={bodyRef} onClick={focus}>
      {history.map((h, i) => (
        <div className="term-line" key={i}>
          {h.type === 'cmd' ? <span>{h.text}</span> :
           h.type === 'sys' ? <span style={{color:'#9cdcfe'}}>{h.text}</span> :
           <span className={h.type}>{h.text}</span>}
        </div>
      ))}
      <div className="term-input-row">
        <span className="prompt">{promptStr(cwd)}</span>
        <input
          ref={inputRef}
          className="term-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          autoFocus
          spellCheck={false}
        />
      </div>
    </div>
  );
};

// ====================================================================
// TASS DAST scan
// ====================================================================
const TASS_FILES = [
  'src/api/payments.go',
  'src/api/users.go',
  'src/api/admin.ts',
  'src/lib/auth.ts',
  'src/lib/db.ts',
  'src/lib/feature-flags.ts',
  'src/llm/agent.py',
  'src/llm/tools.py',
  'src/scripts/migrate.sh',
  'src/web/dashboard.tsx',
  'package.json',
  'go.mod'
];
const TASS_LINES = [
  { f:0, t:'info', m:'parsing AST (tree-sitter, lang=go)…' },
  { f:0, t:'warn', m:'  capability: net.http.Client → external POST in handler' },
  { f:1, t:'info', m:'parsing AST (tree-sitter, lang=go)…' },
  { f:1, t:'ok',   m:'  no new capabilities since baseline' },
  { f:2, t:'info', m:'parsing AST (tree-sitter, lang=ts)…' },
  { f:2, t:'crit', m:'  capability ADD: db.write on previously read-only path /admin/users' },
  { f:2, t:'crit', m:'  capability ADD: filesystem.write — fs.writeFile("/tmp/auth.cache")' },
  { f:3, t:'info', m:'parsing AST (tree-sitter, lang=ts)…' },
  { f:3, t:'warn', m:'  removed: rate-limit middleware on /auth/refresh' },
  { f:4, t:'info', m:'parsing AST (tree-sitter, lang=ts)…' },
  { f:4, t:'ok',   m:'  no new capabilities since baseline' },
  { f:5, t:'info', m:'parsing AST (tree-sitter, lang=ts)…' },
  { f:5, t:'warn', m:'  flag added: ENABLE_AGENT_TOOLS_BETA (default=true)' },
  { f:6, t:'info', m:'parsing AST (tree-sitter, lang=python)…' },
  { f:6, t:'crit', m:'  capability ADD: subprocess.run — agent can spawn shell processes' },
  { f:7, t:'info', m:'parsing AST (tree-sitter, lang=python)…' },
  { f:7, t:'warn', m:'  new tool registered: file_write (no allowlist found)' },
  { f:8, t:'info', m:'parsing AST (tree-sitter, lang=bash)…' },
  { f:8, t:'ok',   m:'  no new capabilities since baseline' },
  { f:9, t:'info', m:'parsing AST (tree-sitter, lang=tsx)…' },
  { f:9, t:'ok',   m:'  no new capabilities since baseline' },
  { f:10, t:'info', m:'diff dependencies…' },
  { f:10, t:'warn', m:'  + child_process-shim@1.0.2  (npm, 4 weeks old, 12 weekly downloads)' },
  { f:11, t:'info', m:'diff go.mod…' },
  { f:11, t:'ok',   m:'  no new modules' }
];
const TASS_FINDINGS = [
  { sev:'high',   id:'CAP-2031', loc:'src/api/admin.ts:142',  desc:'Privilege escalation surface: read-only path now writes to user records.' },
  { sev:'high',   id:'CAP-2032', loc:'src/llm/agent.py:88',   desc:'Agent gained subprocess.run — full shell capability without allowlist.' },
  { sev:'medium', id:'CAP-2033', loc:'src/lib/auth.ts:47',    desc:'Rate-limit middleware removed on /auth/refresh — credential-stuffing exposure.' },
  { sev:'medium', id:'DEP-2034', loc:'package.json',          desc:'New low-trust dependency child_process-shim@1.0.2 (npm, <1mo old).' },
  { sev:'low',    id:'CAP-2035', loc:'src/api/payments.go:201', desc:'New external POST destination — confirm allowlist.' },
  { sev:'info',   id:'OBS-2036', loc:'src/lib/feature-flags.ts', desc:'Beta agent-tools flag default-on; recommend default=false at merge.' }
];
const TassApp = () => {
  const [running, setRunning] = React.useState(false);
  const [doneFlag, setDoneFlag] = React.useState(false);
  const [logIdx, setLogIdx] = React.useState(0);
  const [findIdx, setFindIdx] = React.useState(0);
  const [scanFile, setScanFile] = React.useState(-1);
  const [doneFiles, setDoneFiles] = React.useState(new Set());
  const logRef = React.useRef(null);

  function start() {
    setRunning(true); setDoneFlag(false);
    setLogIdx(0); setFindIdx(0); setScanFile(-1); setDoneFiles(new Set());
  }
  function stop() {
    setRunning(false);
  }

  React.useEffect(() => {
    if (!running) return;
    if (logIdx >= TASS_LINES.length) {
      setRunning(false); setDoneFlag(true);
      return;
    }
    const t = setTimeout(() => {
      const line = TASS_LINES[logIdx];
      setScanFile(line.f);
      // mark previous as done
      setDoneFiles(prev => {
        const n = new Set(prev);
        for (let k = 0; k < line.f; k++) n.add(k);
        return n;
      });
      // emit findings progressively
      if (line.t === 'crit') setFindIdx(i => i + 1);
      if (line.t === 'warn' && Math.random() > 0.4) setFindIdx(i => i + 1);
      setLogIdx(i => i + 1);
      if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
    }, 280);
    return () => clearTimeout(t);
  }, [running, logIdx]);

  React.useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  });

  const visibleLog = TASS_LINES.slice(0, logIdx);
  const visibleFindings = TASS_FINDINGS.slice(0, Math.min(findIdx, TASS_FINDINGS.length));

  return (
    <div className="tass-body">
      <div className="tass-toolbar">
        <button onClick={start} disabled={running}>▶ scan PR #1247</button>
        <button onClick={stop} disabled={!running}>■ stop</button>
        <span style={{color:'#888'}}>repo: <span style={{color:'#9cdcfe'}}>caladrius/agent-platform</span> · diff: 12 files</span>
        <span className="tass-status">
          {running ? 'scanning…' : doneFlag ? '✓ scan complete' : 'idle'}
        </span>
      </div>
      <div className="tass-main">
        <div className="tass-files">
          {TASS_FILES.map((f,i) => (
            <div key={i} className={'f-item ' + (i === scanFile && running ? 'scanning' : doneFiles.has(i) || (doneFlag && i <= scanFile) ? 'done' : '')}>
              <span className="f-tick">{i === scanFile && running ? '◌' : doneFiles.has(i) || (doneFlag && i <= scanFile) ? '✓' : ' '}</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
        <div className="tass-output">
          <div className="tass-log" ref={logRef}>
            {visibleLog.length === 0 && (
              <div className="log-line l-dim">Click "scan PR #1247" to begin a capability diff.</div>
            )}
            {visibleLog.map((ln, i) => (
              <div key={i} className={'log-line l-' + ln.t}>
                {ln.t === 'crit' ? '✖ ' : ln.t === 'warn' ? '⚠ ' : ln.t === 'ok' ? '✓ ' : '  '}
                {TASS_FILES[ln.f]}: {ln.m}
              </div>
            ))}
            {doneFlag && <div className="log-line l-info">{'\n'}─── done. {TASS_FINDINGS.length} findings, {TASS_FINDINGS.filter(f=>f.sev==='high').length} high-severity. block merge until human review.</div>}
          </div>
          <div className="tass-findings">
            <div className="fnd-row" style={{background:'#333', position:'sticky', top:0, fontWeight:'bold', color:'#ddd'}}>
              <div>SEV</div><div>ID</div><div>FINDING</div>
            </div>
            {visibleFindings.length === 0 && (
              <div style={{padding:10, color:'#777', fontSize:11}}>findings will stream in as the scan progresses.</div>
            )}
            {visibleFindings.map((f,i) => (
              <div className="fnd-row" key={i}>
                <div className={'sev ' + f.sev}>{f.sev.toUpperCase()}</div>
                <div style={{color:'#9cdcfe'}}>{f.id}<div style={{fontSize:10, color:'#777'}}>{f.loc}</div></div>
                <div>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// NETWORK CAPTURE
// ====================================================================
const NET_BASE = [
  { p:'TCP',  s:'192.168.1.42',    d:'140.82.121.4 (github)',  l:'52', i:'[SYN] Seq=0 Win=64240' },
  { p:'TCP',  s:'140.82.121.4',    d:'192.168.1.42',           l:'52', i:'[SYN, ACK] Seq=0 Ack=1' },
  { p:'TLS',  s:'192.168.1.42',    d:'140.82.121.4 (github)',  l:'517', i:'Client Hello SNI=api.github.com' },
  { p:'HTTP', s:'192.168.1.42',    d:'10.0.0.55 (n8n.local)',  l:'412', i:'POST /webhook/scan-pr HTTP/1.1' },
  { p:'HTTP', s:'10.0.0.55',       d:'192.168.1.42',           l:'213', i:'200 OK  application/json' },
  { p:'DNS',  s:'192.168.1.42',    d:'1.1.1.1',                l:'78',  i:'A? mozartchangedmylife.substack.com' },
  { p:'DNS',  s:'1.1.1.1',         d:'192.168.1.42',           l:'94',  i:'A 35.227.196.50' },
  { p:'TLS',  s:'192.168.1.42',    d:'35.227.196.50',          l:'533', i:'Client Hello SNI=substack.com' },
  { p:'HTTP', s:'192.168.1.42',    d:'tass.local:8443',        l:'380', i:'GET /findings/PR-1247 HTTP/1.1' },
  { p:'ICMP', s:'192.168.1.42',    d:'8.8.8.8',                l:'74',  i:'Echo (ping) request id=0x42' },
  { p:'TCP',  s:'192.168.1.42',    d:'127.0.0.1:5901',         l:'60',  i:'[FIN, ACK] piano.exe → audio bus' },
  { p:'HTTP', s:'recruiter.local', d:'192.168.1.42:443',       l:'?',   i:"GET /hire HTTP/1.1   ← you should reply :)", flag:true }
];
const NetworkApp = () => {
  const [rows, setRows] = React.useState([]);
  const [running, setRunning] = React.useState(true);
  React.useEffect(() => {
    if (!running) return;
    if (rows.length >= NET_BASE.length) return;
    const t = setTimeout(() => {
      setRows(r => [...r, NET_BASE[r.length]]);
    }, 700);
    return () => clearTimeout(t);
  }, [rows, running]);

  return (
    <div className="net-body">
      <div className="net-toolbar">
        <button className="xp-btn" onClick={() => { setRows([]); setRunning(true); }}>▶ Restart</button>
        <button className="xp-btn" onClick={() => setRunning(r => !r)}>{running ? '■ Pause' : '▶ Resume'}</button>
        <span style={{marginLeft:'auto', color:'#666'}}>{rows.length} packets · interface eth0 · filter: <em>none</em></span>
      </div>
      <div className="net-table">
        <div className="net-row head">
          <div>#</div><div>Protocol</div><div>Source</div><div>Destination</div><div>Length</div><div>Info</div>
        </div>
        {rows.map((r,i) => (
          <div className={'net-row ' + (r.flag ? 'flag' : r.p.toLowerCase())} key={i}>
            <div>{i+1}</div>
            <div>{r.p}</div>
            <div>{r.s}</div>
            <div>{r.d}</div>
            <div>{r.l}</div>
            <div>{r.i}</div>
          </div>
        ))}
        {rows.length === NET_BASE.length && (
          <div style={{padding:'8px 10px', color:'#666', fontSize:11}}>
            capture ended.  no anomalies — except packet 12, which is openly soliciting employment.
          </div>
        )}
      </div>
    </div>
  );
};

// ====================================================================
// PIANO
// ====================================================================
// Rondo in A minor, K.511 — opening theme (right hand, simplified, no ornaments)
// Andante, 6/8. A minor.
const PIANO_PHRASE = [
  // Opening E + ornament
  [76, 0.5],              // E5

  [75, 0.15],             // D#5
  [76, 0.15],             // E5
  [77, 0.15],             // F5
  [76, 0.15],             // E5
  [75, 0.15],             // D#5
  [76, 0.35],             // E5

  // A below
  [69, 0.75],             // A4

  // A-Bb
  [69, 0.4],              // A4
  [70, 0.4],              // Bb4

  // B-C
  [71, 0.4],              // B4
  [72, 0.4],              // C5

  // C#-D
  [73, 0.4],              // C#5
  [74, 0.4],              // D5

  // D#-E
  [75, 0.4],              // D#5
  [76, 0.6],              // E5

  // Higher A
  [81, 0.9],              // A5

  // Descending
  [79, 0.4],              // G5
  [77, 0.4],              // F5

  [76, 0.4],              // E5
  [74, 0.4],              // D5

  [72, 0.4],              // C5
  [71, 0.4],              // B4

  [69, 0.75],             // A4
  [68, 1.2]               // G#4
];
const WHITES = ['C','D','E','F','G','A','B','C','D','E','F','G','A','B'];
const WHITE_MIDI = [60,62,64,65,67,69,71,72,74,76,77,79,81,83];
// black-key positions (relative within 7-note octave): C#,D#,F#,G#,A# at 0,1,3,4,5 (skipping E-F and B-C)
const BLACKS_PER_OCT = [0, 1, 3, 4, 5]; // index of "white-before"
const BLACK_MIDI_OFFSETS = [1, 3, 6, 8, 10]; // semitones from C
const PianoApp = ({ active }) => {
  const [activeNote, setActiveNote] = React.useState(null);
  const [readout, setReadout] = React.useState('Rondo in A minor, K. 511 — Mozart');
  const audioCtxRef = React.useRef(null);
  const playingRef = React.useRef(false);

  function ensureCtx() {
    if (!audioCtxRef.current) {
      try {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch(e) {}
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }
  function midiToFreq(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  function playNote(midi, dur) {
    const ctx = ensureCtx();
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = midiToFreq(midi);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(0.18, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(ctx.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
    setActiveNote(midi);
    setTimeout(() => setActiveNote(a => a === midi ? null : a), Math.min(dur*1000, 200));
  }

  async function playPhrase() {
    if (playingRef.current) return;
    playingRef.current = true;
    setReadout('♪ Rondo in A minor, K. 511');
    const ctx = ensureCtx();
    const tempo = 50;  // Andante
    const beat = 60 / tempo * 1000 * 0.85;
    for (const [m, b] of PIANO_PHRASE) {
      const dur = (b * beat) / 1000;
      playNote(m, dur);
      await new Promise(r => setTimeout(r, b * beat));
    }
    setReadout('Rondo in A minor, K. 511 — Mozart');
    playingRef.current = false;
  }

  // 14 white keys = 2 octaves
  const blackEls = [];
  for (let oct = 0; oct < 2; oct++) {
    for (let i = 0; i < 5; i++) {
      const whiteIdx = oct * 7 + BLACKS_PER_OCT[i];
      const midi = 60 + oct*12 + BLACK_MIDI_OFFSETS[i];
      // black key is positioned at right edge of (whiteIdx)
      const left = ((whiteIdx + 1) / 14) * 100;
      blackEls.push({ midi, left });
    }
  }

  return (
    <div className="piano-body">
      <div className="piano-readout">{readout}</div>
      <div className="piano-keys">
        <div className="piano-white-row">
          {WHITE_MIDI.map((m, i) => (
            <div
              key={m}
              className={'piano-white ' + (activeNote === m ? 'active' : '')}
              onMouseDown={() => playNote(m, 0.7)}
            >
              <div className="label">{WHITES[i]}</div>
            </div>
          ))}
        </div>
        <div className="piano-blacks">
          {blackEls.map((b, i) => (
            <div
              key={i}
              className={'piano-black ' + (activeNote === b.midi ? 'active' : '')}
              style={{ left: `calc(${b.left}% - 3.5%)` }}
              onMouseDown={() => playNote(b.midi, 0.7)}
            />
          ))}
        </div>
      </div>
      <div className="piano-controls">
        <button className="xp-btn" onClick={playPhrase}>▶ Play K.511</button>
        <button className="xp-btn" onClick={() => { setActiveNote(null); setReadout('— pianist in passing, cybersecurity engineer by trade —'); }}>About</button>
      </div>
      <div style={{color:'#a8845a', fontSize:11, fontFamily:'Trebuchet MS, sans-serif', textAlign:'center', maxWidth:480}}>
        Trinity College of London, Initial → Grade 8 (Merit / Distinction). Currently pursuing the ATCL diploma at Piano Passion, Bengaluru.
      </div>
    </div>
  );
};

// ====================================================================
// MINESWEEPER
// ====================================================================
const MS_SIZE = 9;
const MS_MINES = 10;
function buildMS() {
  const cells = Array.from({length: MS_SIZE * MS_SIZE}, () => ({ mine:false, n:0, revealed:false, flag:false }));
  let placed = 0;
  while (placed < MS_MINES) {
    const i = Math.floor(Math.random() * cells.length);
    if (!cells[i].mine) { cells[i].mine = true; placed++; }
  }
  for (let r = 0; r < MS_SIZE; r++) for (let c = 0; c < MS_SIZE; c++) {
    if (cells[r*MS_SIZE+c].mine) continue;
    let n = 0;
    for (let dr=-1; dr<=1; dr++) for (let dc=-1; dc<=1; dc++) {
      const rr=r+dr, cc=c+dc;
      if (rr<0||rr>=MS_SIZE||cc<0||cc>=MS_SIZE) continue;
      if (cells[rr*MS_SIZE+cc].mine) n++;
    }
    cells[r*MS_SIZE+c].n = n;
  }
  return cells;
}
const MinesApp = () => {
  const [cells, setCells] = React.useState(buildMS);
  const [face, setFace] = React.useState('🙂');
  const [over, setOver] = React.useState(false);
  const [won, setWon] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const startRef = React.useRef(null);

  React.useEffect(() => {
    if (over || won) return;
    if (!startRef.current) return;
    const t = setInterval(() => {
      setTime(Math.floor((Date.now() - startRef.current)/1000));
    }, 500);
    return () => clearInterval(t);
  }, [over, won]);

  function reset() {
    setCells(buildMS()); setFace('🙂'); setOver(false); setWon(false); setTime(0);
    startRef.current = null;
  }

  function reveal(i) {
    if (over || won) return;
    if (!startRef.current) startRef.current = Date.now();
    const next = cells.map(c => ({...c}));
    if (next[i].flag || next[i].revealed) return;
    if (next[i].mine) {
      next.forEach(c => { if (c.mine) c.revealed = true; });
      next[i].boom = true;
      setCells(next); setFace('💀'); setOver(true);
      return;
    }
    // flood-fill zeros
    const stack = [i];
    const seen = new Set();
    while (stack.length) {
      const k = stack.pop();
      if (seen.has(k)) continue;
      seen.add(k);
      if (next[k].flag) continue;
      next[k].revealed = true;
      if (next[k].n === 0) {
        const r = Math.floor(k/MS_SIZE), c = k%MS_SIZE;
        for (let dr=-1; dr<=1; dr++) for (let dc=-1; dc<=1; dc++) {
          const rr=r+dr, cc=c+dc;
          if (rr<0||rr>=MS_SIZE||cc<0||cc>=MS_SIZE) continue;
          const kk = rr*MS_SIZE+cc;
          if (!next[kk].revealed && !next[kk].mine) stack.push(kk);
        }
      }
    }
    // win check
    const hidden = next.filter(c => !c.revealed && !c.mine).length;
    if (hidden === 0) { setWon(true); setFace('😎'); }
    setCells(next);
  }
  function flag(i, e) {
    e.preventDefault();
    if (over || won) return;
    setCells(c => c.map((cc,j) => j===i && !cc.revealed ? {...cc, flag:!cc.flag} : cc));
  }

  const flagsLeft = MS_MINES - cells.filter(c => c.flag).length;

  return (
    <div className="ms-body">
      <div className="bevel-out ms-frame">
        <div className="ms-header bevel-in">
          <div className="ms-counter">{String(Math.max(0,flagsLeft)).padStart(3,'0')}</div>
          <div className="bevel-out ms-face" onClick={reset}>{face}</div>
          <div className="ms-counter">{String(Math.min(999,time)).padStart(3,'0')}</div>
        </div>
        <div className="bevel-in ms-grid">
          {cells.map((c, i) => {
            if (!c.revealed) {
              return (
                <div
                  key={i}
                  className="bevel-out ms-cell hidden"
                  onClick={() => reveal(i)}
                  onContextMenu={(e) => flag(i, e)}
                >{c.flag ? '🚩' : ''}</div>
              );
            }
            if (c.mine) return <div key={i} className="ms-cell revealed mine">💣</div>;
            return <div key={i} className={'ms-cell revealed ' + (c.n ? 'n'+c.n : '')}>{c.n || ''}</div>;
          })}
        </div>
        {(over || won) && (
          <div style={{textAlign:'center', marginTop:6, fontSize:11}}>
            {won ? '🎉 cleared. you have my attention.' : '💥 boom. right-click to flag, click face to reset.'}
          </div>
        )}
        <div style={{textAlign:'center', marginTop:4, fontSize:10, color:'#666'}}>left-click reveal · right-click flag</div>
      </div>
    </div>
  );
};

window.AppBodies = {
  about: { Body: AboutApp, title: 'sreenidhi.exe — Welcome', icon: 'User', menubar: true, w: 580, h: 460 },
  experience: { Body: ExperienceApp, title: 'Experience — My Work', icon: 'Briefcase', menubar: true, w: 620, h: 480 },
  skills: { Body: SkillsApp, title: 'Skills — Control Panel', icon: 'Gear', menubar: true, w: 540, h: 380 },
  certs: { Body: CertsApp, title: 'Certifications, Awards & Extracurriculars', icon: 'Trophy', menubar: true, w: 560, h: 420 },
  contact: { Body: ContactApp, title: 'Get in touch', icon: 'Mail', menubar: false, w: 460, h: 280, beige: true },
  notepad: { Body: NotepadApp, title: 'mozartchangedmylife.txt — Notepad', icon: 'TextFile', menubar: true, w: 560, h: 420, raw: true },
  terminal: { Body: TerminalApp, title: 'C:\\WINDOWS\\system32\\cmd.exe', icon: 'Terminal', menubar: false, w: 600, h: 360, raw: true },
  tass: { Body: TassApp, title: 'TASS — Capability Scanner', icon: 'Shield', menubar: false, w: 760, h: 520, raw: true },
  network: { Body: NetworkApp, title: 'Network Capture — eth0', icon: 'Network', menubar: false, w: 720, h: 400, raw: true },
  piano: { Body: PianoApp, title: 'Piano.exe', icon: 'Piano', menubar: false, w: 600, h: 360, raw: true },
  mines: { Body: MinesApp, title: 'Minesweeper', icon: 'Mine', menubar: false, w: 260, h: 320, raw: true }
};
