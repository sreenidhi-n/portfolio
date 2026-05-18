// ===================== Main desktop OS shell =====================
const { Window, DesktopIcons, StartMenu, Taskbar, ContextMenu, CursorTrail, BootScreen, LoginScreen, TASKBAR_H } = window.OSM;

function App() {
  // Phase: 'boot' | 'login' | 'desktop'
  const [phase, setPhase] = React.useState('boot');
  const [wins, setWins] = React.useState([]);
  const [activeKey, setActiveKey] = React.useState(null);
  const [zCounter, setZCounter] = React.useState(100);
  const [keyCounter, setKeyCounter] = React.useState(1);
  const [startOpen, setStartOpen] = React.useState(false);
  const [ctx, setCtx] = React.useState(null);
  const [selectedIcon, setSelectedIcon] = React.useState(null);
  const [time, setTime] = React.useState('');
  const [trailOn, setTrailOn] = React.useState(true);

  // Clock
  React.useEffect(() => {
    function tick() {
      const d = new Date();
      let h = d.getHours();
      const m = d.getMinutes().toString().padStart(2,'0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      setTime(`${h}:${m} ${ampm}`);
    }
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  // Open requests from terminal etc.
  React.useEffect(() => {
    function onOpen(e) { openApp(e.detail.id); }
    function onClose(e) {
      const id = e.detail.id;
      setWins(ws => ws.filter(w => !(w.id === id)));
    }
    window.addEventListener('osm:open', onOpen);
    window.addEventListener('osm:close', onClose);
    return () => {
      window.removeEventListener('osm:open', onOpen);
      window.removeEventListener('osm:close', onClose);
    };
  });

  function openApp(id) {
    const App = window.AppBodies[id];
    if (!App) return;
    // If already open, focus it
    const existing = wins.find(w => w.id === id);
    if (existing) {
      activate(existing.key);
      setWins(ws => ws.map(w => w.key === existing.key ? {...w, minimized:false} : w));
      return;
    }
    document.body.classList.add('busy');
    setTimeout(() => document.body.classList.remove('busy'), 350);

    const k = keyCounter; setKeyCounter(c => c + 1);
    const newZ = zCounter + 1; setZCounter(newZ);
    const baseW = App.w || 520, baseH = App.h || 380;
    const offset = (wins.length % 6) * 26;
    const maxW = window.innerWidth, maxH = window.innerHeight - TASKBAR_H;
    const w = Math.min(baseW, maxW - 40);
    const h = Math.min(baseH, maxH - 40);
    const x = Math.max(40, Math.floor((maxW - w) / 2) + offset);
    const y = Math.max(20, Math.floor((maxH - h) / 2) - 30 + offset);
    setWins(ws => [...ws, { key:k, id, x, y, w, h, z:newZ, minimized:false, maximized:false }]);
    setActiveKey(k);
  }

  function activate(key) {
    if (activeKey === key) {
      const w = wins.find(w => w.key === key);
      if (w && w.z === zCounter) return;
    }
    const newZ = zCounter + 1; setZCounter(newZ);
    setWins(ws => ws.map(w => w.key === key ? {...w, z:newZ, minimized:false} : w));
    setActiveKey(key);
  }
  function close(key) { setWins(ws => ws.filter(w => w.key !== key)); }
  function minimize(key) {
    setWins(ws => ws.map(w => w.key === key ? {...w, minimized:true} : w));
    setActiveKey(null);
  }
  function toggleMax(key) {
    setWins(ws => ws.map(w => w.key === key ? {...w, maximized: !w.maximized, minimized:false} : w));
  }
  function move(key, x, y) {
    setWins(ws => ws.map(w => w.key === key ? {...w, x, y} : w));
  }
  function resize(key, w, h) {
    setWins(ws => ws.map(ww => ww.key === key ? {...ww, w, h} : ww));
  }
  function tabClick(key) {
    const w = wins.find(w => w.key === key);
    if (!w) return;
    if (w.minimized) activate(key);
    else if (activeKey === key) minimize(key);
    else activate(key);
  }

  function onDesktopClick() {
    setStartOpen(false);
    setCtx(null);
    setSelectedIcon(null);
  }

  function onDesktopContext(e) {
    e.preventDefault();
    setCtx({
      x: Math.min(e.clientX, window.innerWidth - 200),
      y: Math.min(e.clientY, window.innerHeight - 280),
      items: [
        { label: 'View  ▸', disabled: true },
        { label: 'Sort by  ▸', disabled: true },
        { label: 'Refresh', onClick: () => {
            document.body.classList.add('busy');
            setTimeout(() => document.body.classList.remove('busy'), 700);
        }},
        { divider: true },
        { label: 'New  ▸', disabled: true },
        { label: 'Run "whoami" in Terminal', onClick: () => { openApp('terminal'); }},
        { label: 'Open TASS Scanner', onClick: () => openApp('tass') },
        { label: 'Play piano (K.545)', onClick: () => openApp('piano') },
        { divider: true },
        { label: trailOn ? '✓ Cursor sparkles' : '   Cursor sparkles', onClick: () => setTrailOn(t => !t) },
        { divider: true },
        { label: 'Properties — sreenidhiOS v1.2', disabled: true }
      ]
    });
  }

  function shutdown() {
    setWins([]); setActiveKey(null); setStartOpen(false); setCtx(null);
    setPhase('boot');
  }

  // After boot+login completes: open About by default
  React.useEffect(() => {
    if (phase === 'desktop' && wins.length === 0) {
      // small delay so the desktop "renders" first
      const t = setTimeout(() => openApp('about'), 350);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === 'boot') {
    return (
      <>
        <div className="desktop-bg"></div>
        <BootScreen onDone={() => setPhase('login')}/>
      </>
    );
  }
  if (phase === 'login') {
    return (
      <>
        <div className="desktop-bg"></div>
        <LoginScreen onEnter={() => setPhase('desktop')}/>
      </>
    );
  }

  return (
    <>
      <div
        className="desktop-bg"
        style={{cursor:'default'}}
        onClick={onDesktopClick}
        onContextMenu={onDesktopContext}
      ></div>

      <DesktopIcons onOpen={openApp} selected={selectedIcon} setSelected={setSelectedIcon}/>

      {wins.map(w => (
        <Window
          key={w.key}
          win={w}
          isActive={activeKey === w.key}
          onActivate={() => activate(w.key)}
          onClose={() => close(w.key)}
          onMinimize={() => minimize(w.key)}
          onToggleMax={() => toggleMax(w.key)}
          onMove={(x,y) => move(w.key, x, y)}
          onResize={(ww,hh) => resize(w.key, ww, hh)}
        />
      ))}

      <Taskbar
        wins={wins}
        activeId={activeKey}
        onTabClick={tabClick}
        onStart={() => setStartOpen(s => !s)}
        startOpen={startOpen}
        time={time}
      />

      <StartMenu
        open={startOpen}
        onClose={() => setStartOpen(false)}
        onOpen={openApp}
        onShutdown={shutdown}
      />

      <ContextMenu
        x={ctx ? ctx.x : 0}
        y={ctx ? ctx.y : 0}
        items={ctx ? ctx.items : null}
        onClose={() => setCtx(null)}
      />

      <CursorTrail enabled={trailOn}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
