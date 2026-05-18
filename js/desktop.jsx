// =====================================================================
// Desktop, window manager, taskbar, start menu, context menu, boot/login.
// =====================================================================

const TASKBAR_H = 30;

// ---------- Window component ----------
function Window({ win, isActive, onActivate, onClose, onMinimize, onToggleMax, onMove, onResize }) {
  const App = window.AppBodies[win.id];
  const Body = App.Body;
  const dragRef = React.useRef(null);
  const resizeRef = React.useRef(null);

  function startDrag(e) {
    if (e.button !== 0) return;
    if (win.maximized) return;
    onActivate();
    const sx = e.clientX, sy = e.clientY;
    const ox = win.x, oy = win.y;
    function move(ev) {
      onMove(ev.clientX - sx + ox, Math.max(0, ev.clientY - sy + oy));
    }
    function up() {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    }
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }
  function startResize(e) {
    if (e.button !== 0) return;
    if (win.maximized) return;
    onActivate();
    e.stopPropagation();
    const sx = e.clientX, sy = e.clientY;
    const ow = win.w, oh = win.h;
    function move(ev) {
      onResize(Math.max(280, ow + ev.clientX - sx), Math.max(160, oh + ev.clientY - sy));
    }
    function up() {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    }
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }

  if (win.minimized) return null;

  const style = win.maximized
    ? { left: 0, top: 0, width: '100vw', height: `calc(100vh - ${TASKBAR_H}px)`, zIndex: win.z, borderRadius: 0 }
    : { left: win.x, top: win.y, width: win.w, height: win.h, zIndex: win.z };

  const IconCmp = window.Icon[App.icon] || window.Icon.TextFile;

  return (
    <div
      className={'window ' + (isActive ? '' : 'inactive')}
      style={style}
      onMouseDown={onActivate}
    >
      <div
        className="titlebar"
        ref={dragRef}
        onMouseDown={startDrag}
        onDoubleClick={onToggleMax}
      >
        <span style={{display:'inline-flex'}}><IconCmp size={16}/></span>
        <span className="titlebar-text">{App.title}</span>
        <div className="tb-buttons">
          <button className="tb-btn" title="Minimize" onClick={(e)=>{e.stopPropagation(); onMinimize();}}>_</button>
          <button className="tb-btn" title="Maximize" onClick={(e)=>{e.stopPropagation(); onToggleMax();}}>{win.maximized ? '❐' : '▢'}</button>
          <button className="tb-btn close" title="Close" onClick={(e)=>{e.stopPropagation(); onClose();}}>✕</button>
        </div>
      </div>
      {App.menubar && (
        <div className="menubar">
          <span className="menubar-item"><u>F</u>ile</span>
          <span className="menubar-item"><u>E</u>dit</span>
          <span className="menubar-item"><u>V</u>iew</span>
          <span className="menubar-item"><u>H</u>elp</span>
        </div>
      )}
      {App.raw ? <Body active={isActive}/> : (
        <div className={'window-body' + (App.beige ? ' beige' : '')}>
          <Body active={isActive}/>
        </div>
      )}
      {App.statusbar && (
        <div className="statusbar"><span>Ready</span></div>
      )}
      {!win.maximized && (
        <div
          onMouseDown={startResize}
          style={{
            position:'absolute', right:0, bottom:0, width:14, height:14,
            cursor:'nwse-resize',
            background: 'linear-gradient(135deg, transparent 0%, transparent 40%, #888 41%, #888 50%, transparent 51%, transparent 60%, #888 61%, #888 70%, transparent 71%)'
          }}
        />
      )}
    </div>
  );
}

// ---------- Desktop icons ----------
function DesktopIcons({ onOpen, selected, setSelected }) {
  const items = [
    { id: 'about',      label: 'About Me.txt',     icon: 'TextFile' },
    { id: 'experience', label: 'Experience',       icon: 'Briefcase' },
    { id: 'skills',     label: 'Skills',           icon: 'Gear' },
    { id: 'certs',      label: 'Certs & Awards',   icon: 'Trophy' },
    { id: 'notepad',    label: 'Writing.txt',      icon: 'Substack' },
    { id: 'terminal',   label: 'Terminal',         icon: 'Terminal' },
    { id: 'tass',       label: 'TASS Scanner',     icon: 'Shield' },
    { id: 'network',    label: 'NetCapture',       icon: 'Network' },
    { id: 'piano',      label: 'Piano.exe',        icon: 'Piano' },
    { id: 'mines',      label: 'Minesweeper',      icon: 'Mine' },
    { id: 'contact',    label: 'Contact',          icon: 'Mail' }
  ];
  return (
    <div className="desktop-icons">
      {items.map(it => {
        const Ic = window.Icon[it.icon];
        return (
          <div
            key={it.id}
            className={'desktop-icon ' + (selected === it.id ? 'selected' : '')}
            onClick={(e) => { e.stopPropagation(); setSelected(it.id); }}
            onDoubleClick={() => onOpen(it.id)}
          >
            <span className="desktop-icon-img"><Ic size={36}/></span>
            <div className="desktop-icon-label">{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ---------- Start menu ----------
function StartMenu({ open, onClose, onOpen, onShutdown }) {
  if (!open) return null;
  const programs = [
    { id: 'terminal', name: 'Terminal', sub: 'cmd.exe', icon: 'Terminal' },
    { id: 'tass',     name: 'TASS Scanner', sub: 'capability diff for PRs', icon: 'Shield' },
    { id: 'network',  name: 'Network Capture', sub: 'eth0 packet view', icon: 'Network' },
    { id: 'piano',    name: 'Piano.exe', sub: 'play a phrase', icon: 'Piano' },
    { id: 'mines',    name: 'Minesweeper', sub: 'flag the mines', icon: 'Mine' }
  ];
  const docs = [
    { id: 'about',      name: 'About Me',      sub: 'who I am',         icon: 'TextFile' },
    { id: 'experience', name: 'Experience',    sub: 'work & projects',  icon: 'Briefcase' },
    { id: 'skills',     name: 'Skills',        sub: 'tools & frameworks', icon: 'Gear' },
    { id: 'certs',      name: 'Certs & Awards',sub: 'and one piano',    icon: 'Trophy' },
    { id: 'notepad',    name: 'Writing',       sub: 'mozartchangedmylife', icon: 'Substack' },
    { id: 'contact',    name: 'Contact',       sub: 'reach out',        icon: 'Mail' }
  ];
  return (
    <div className="start-menu" onMouseDown={(e)=>e.stopPropagation()}>
      <div className="sm-header">
        <div className="sm-avatar">S</div>
        <div>
          Sreenidhi Nallajerla
          <div style={{fontSize:11, fontWeight:'normal', opacity:0.85}}>cybersec consultant · founder</div>
        </div>
      </div>
      <div className="sm-body">
        <div className="sm-col left">
          <div className="sm-section-label">Programs</div>
          {programs.map(p => {
            const Ic = window.Icon[p.icon];
            return (
              <div className="sm-item" key={p.id} onClick={() => { onOpen(p.id); onClose(); }}>
                <span className="sm-ico"><Ic size={24}/></span>
                <span className="sm-item-text">
                  <span className="sm-item-name">{p.name}</span>
                  <span className="sm-item-sub">{p.sub}</span>
                </span>
              </div>
            );
          })}
        </div>
        <div className="sm-col right">
          <div className="sm-section-label">My Portfolio</div>
          {docs.map(p => {
            const Ic = window.Icon[p.icon];
            return (
              <div className="sm-item" key={p.id} onClick={() => { onOpen(p.id); onClose(); }}>
                <span className="sm-ico"><Ic size={24}/></span>
                <span className="sm-item-text">
                  <span className="sm-item-name">{p.name}</span>
                  <span className="sm-item-sub">{p.sub}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sm-footer">
        <span className="sm-foot-btn" onClick={() => { onShutdown(); onClose(); }}>⏻ Log off / Restart</span>
      </div>
    </div>
  );
}

// ---------- Taskbar ----------
function Taskbar({ wins, activeId, onTabClick, onStart, startOpen, time }) {
  return (
    <div className="taskbar">
      <button className={'start-button ' + (startOpen ? 'active' : '')} onClick={(e)=>{ e.stopPropagation(); onStart(); }}>
        <span className="start-flag"></span>
        start
      </button>
      <div className="taskbar-tabs">
        {wins.map(w => {
          const App = window.AppBodies[w.id];
          const Ic = window.Icon[App.icon];
          return (
            <div
              key={w.key}
              className={'taskbar-tab ' + (activeId === w.key && !w.minimized ? 'active' : '') + (w.minimized ? ' minimized' : '')}
              onClick={() => onTabClick(w.key)}
            >
              <span className="tt-icon"><Ic size={14}/></span>
              <span className="tt-label">{App.title.split(' — ')[0]}</span>
            </div>
          );
        })}
      </div>
      <div className="system-tray">
        <svg className="tray-icon" viewBox="0 0 16 16">
          <path d="M2,8 L8,2 L14,8 L11,8 L11,14 L5,14 L5,8 Z" fill="#fff" stroke="#1a3a6e"/>
        </svg>
        <svg className="tray-icon" viewBox="0 0 16 16">
          <rect x="2" y="6" width="12" height="6" fill="#c8c4b0" stroke="#666"/>
          <rect x="3" y="7" width="3" height="4" fill="#4a90d8"/>
        </svg>
        <span>{time}</span>
      </div>
    </div>
  );
}

// ---------- Context menu ----------
function ContextMenu({ x, y, items, onClose }) {
  if (!items) return null;
  return (
    <div className="ctx-menu" style={{left:x, top:y}} onMouseDown={(e)=>e.stopPropagation()}>
      {items.map((it, i) => it.divider ? <div className="ctx-divider" key={i}/> : (
        <div
          key={i}
          className={'ctx-item' + (it.disabled ? ' disabled' : '')}
          onClick={() => { if (!it.disabled) { it.onClick && it.onClick(); onClose(); } }}
        >{it.label}</div>
      ))}
    </div>
  );
}

// ---------- Cursor trail ----------
function CursorTrail({ enabled }) {
  const [dots, setDots] = React.useState([]);
  const idRef = React.useRef(0);
  React.useEffect(() => {
    if (!enabled) return;
    let lastT = 0;
    function onMove(e) {
      const now = performance.now();
      if (now - lastT < 35) return;
      lastT = now;
      const id = ++idRef.current;
      setDots(d => [...d.slice(-9), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setDots(d => d.filter(p => p.id !== id)), 500);
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled]);
  if (!enabled) return null;
  return (
    <>
      {dots.map((d, i) => (
        <div
          key={d.id}
          className="trail-dot"
          style={{
            left: d.x - 3, top: d.y - 3,
            opacity: (i+1) / dots.length * 0.55,
            transform: `scale(${0.3 + (i+1)/dots.length * 0.7})`,
            transition: 'opacity 0.3s, transform 0.3s'
          }}
        />
      ))}
    </>
  );
}

// ---------- Boot screen ----------
function BootScreen({ onDone }) {
  const lines = [
    'Award Modular BIOS v6.00PG, An Energy Star Ally',
    'Copyright (C) 1984-2002, Award Software, Inc.',
    '',
    'Main Processor : Intel(R) Pentium(R) III  933 MHz',
    'Memory Testing : 524288K OK',
    '',
    'Detecting IDE drives...',
    '  Primary Master  : ST380011A      80.0 GB',
    '  Primary Slave   : None',
    '  Secondary Master: SAMSUNG CDRW/DVD',
    '',
    'Booting from C:\\WINDOWS...',
    '',
    'Mounting /home/sreenidhi  ............ [ OK ]',
    'Loading kernel modules ............... [ OK ]',
    'Starting tcp/ip stack ................ [ OK ]',
    'Starting capability monitor (TASS)  .. [ OK ]',
    'Starting audio bus (piano)  .......... [ OK ]',
    '',
    'Welcome.'
  ];
  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    if (shown >= lines.length) {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown(s => s + 1), shown < 3 ? 80 : 95);
    return () => clearTimeout(t);
  }, [shown]);
  return (
    <div className="boot-overlay">
      <div className="boot-screen">
        {lines.slice(0, shown).map((l, i) => <div className="b-line" key={i}>{l || '\u00A0'}</div>)}
        {shown < lines.length && <div className="b-line boot-cursor"></div>}
      </div>
    </div>
  );
}

// ---------- Login ----------
function LoginScreen({ onEnter }) {
  return (
    <div className="login">
      <div className="login-window">
        <div className="login-tb">
          <span style={{flex:1}}>Welcome to sreenidhiOS</span>
          <span style={{opacity:0.85}}>?</span>
        </div>
        <div className="login-body">
          <div className="login-side">
            <img
              src="assets/sreenidhi.jpg"
              alt="Sreenidhi Nallajerla"
              style={{
                width: '100%', maxWidth: 120,
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                border: '2px solid',
                borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
                borderRightColor: '#404040', borderBottomColor: '#404040',
                marginBottom: 8
              }}
            />
            <div className="big">sreenidhi<span style={{color:'#ffffff'}}>OS</span></div>
            <div style={{fontSize:10, fontWeight:'normal', opacity:0.9, lineHeight:1.3, marginTop:2}}>a one-stop portfolio</div>
          </div>
          <div className="login-main">
            <h2>Log On to sreenidhiOS</h2>
            <p>To begin, click a user name below.</p>
            <p style={{color:'#444'}}>Everything is interactive — drag windows, right-click the desktop, open the Terminal.</p>
            <div style={{margin:'10px 0 0'}}>
              <div onClick={onEnter} className="login-user-row">
                <div style={{
                  width:48, height:48,
                  background:'#000080',
                  border:'2px solid',
                  borderTopColor:'#ffffff', borderLeftColor:'#ffffff',
                  borderRightColor:'#404040', borderBottomColor:'#404040',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#ffffff', fontWeight:'bold', fontSize:28,
                  flexShrink:0,
                  fontFamily:'"MS Sans Serif", sans-serif',
                  letterSpacing:'-1px'
                }}>S</div>
                <div>
                  <div style={{fontWeight:'bold', fontSize:12, color:'#000080'}}>Sreenidhi</div>
                  <div style={{fontSize:11, color:'#444'}}>cybersec · founder · pianist</div>
                </div>
              </div>
              <div onClick={onEnter} className="login-user-row">
                <div style={{
                  width:48, height:48,
                  background:'#c0c0c0',
                  border:'2px solid',
                  borderTopColor:'#ffffff', borderLeftColor:'#ffffff',
                  borderRightColor:'#404040', borderBottomColor:'#404040',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#000080', fontWeight:'bold', fontSize:24,
                  flexShrink:0,
                  fontFamily:'"MS Sans Serif", sans-serif'
                }}>?</div>
                <div>
                  <div style={{fontWeight:'bold', fontSize:12, color:'#000080'}}>Guest</div>
                  <div style={{fontSize:11, color:'#444'}}>have a look around</div>
                </div>
              </div>
            </div>
            <div className="login-actions">
              <button className="xp-btn" onClick={onEnter}>Log On</button>
              <button className="xp-btn" onClick={onEnter}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.OSM = { Window, DesktopIcons, StartMenu, Taskbar, ContextMenu, CursorTrail, BootScreen, LoginScreen, TASKBAR_H };
