// Pixel-style icons drawn fresh as SVG. No reproductions of any branded artwork.
const Icon = {};

Icon.User = ({size=16}) => (
  <svg width={size} height={size} viewBox="0 0 16 16">
    <circle cx="8" cy="6" r="3" fill="#ffd2a6" stroke="#6b3a14" strokeWidth="0.5"/>
    <path d="M2,15 C2,11 5,9 8,9 C11,9 14,11 14,15 Z" fill="#3a6dc5" stroke="#1f4ba8" strokeWidth="0.5"/>
  </svg>
);

Icon.TextFile = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <rect x="5" y="3" width="22" height="26" fill="#fffce8" stroke="#666" strokeWidth="0.6"/>
    <polyline points="22,3 22,8 27,8" fill="#fff" stroke="#666"/>
    <line x1="8" y1="11" x2="20" y2="11" stroke="#316ac5" strokeWidth="0.7"/>
    <line x1="8" y1="14" x2="24" y2="14" stroke="#999" strokeWidth="0.5"/>
    <line x1="8" y1="17" x2="24" y2="17" stroke="#999" strokeWidth="0.5"/>
    <line x1="8" y1="20" x2="22" y2="20" stroke="#999" strokeWidth="0.5"/>
    <line x1="8" y1="23" x2="18" y2="23" stroke="#999" strokeWidth="0.5"/>
  </svg>
);

Icon.Folder = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <path d="M3,9 L3,7 L11,7 L13,9 L29,9 L29,27 L3,27 Z" fill="#f6c84a" stroke="#a07820" strokeWidth="0.6"/>
    <path d="M3,11 L29,11 L29,27 L3,27 Z" fill="#fad77a" opacity="0.4"/>
  </svg>
);

Icon.Substack = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <rect x="4" y="4" width="24" height="24" rx="2" fill="#fff" stroke="#666"/>
    <rect x="6" y="8" width="20" height="2" fill="#ff6719"/>
    <rect x="6" y="12" width="20" height="2" fill="#ff6719"/>
    <rect x="6" y="16" width="14" height="2" fill="#ff6719"/>
    <text x="16" y="26" fontFamily="Georgia" fontSize="6" fill="#666" textAnchor="middle">writing</text>
  </svg>
);

Icon.Mail = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <rect x="3" y="8" width="26" height="18" rx="1" fill="#fff" stroke="#666"/>
    <polyline points="3,8 16,18 29,8" fill="none" stroke="#316ac5" strokeWidth="1.5"/>
    <polyline points="3,26 12,17 3,17" fill="none" stroke="#aaa" strokeWidth="0.5"/>
    <polyline points="29,26 20,17 29,17" fill="none" stroke="#aaa" strokeWidth="0.5"/>
  </svg>
);

Icon.Terminal = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <rect x="3" y="5" width="26" height="22" rx="1" fill="#000" stroke="#444"/>
    <rect x="3" y="5" width="26" height="3" fill="#444"/>
    <text x="6" y="16" fontFamily="Consolas, monospace" fontSize="7" fill="#6cd06c" fontWeight="bold">{'>_'}</text>
    <text x="13" y="16" fontFamily="Consolas, monospace" fontSize="7" fill="#d6d6d6">whoami</text>
  </svg>
);

Icon.Shield = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <path d="M16,3 L27,7 L27,16 C27,22 22,27 16,29 C10,27 5,22 5,16 L5,7 Z" fill="#3a8c3a" stroke="#1c4f1c" strokeWidth="0.6"/>
    <path d="M16,3 L16,29 C10,27 5,22 5,16 L5,7 Z" fill="#2c6c2c" opacity="0.6"/>
    <text x="16" y="20" fontFamily="Trebuchet MS, sans-serif" fontSize="11" fill="#fff" textAnchor="middle" fontWeight="bold">T</text>
  </svg>
);

Icon.Network = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="#1a3a6e" stroke="#0c2a5e"/>
    <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#88c5ee" strokeWidth="0.7"/>
    <ellipse cx="16" cy="16" rx="5" ry="13" fill="none" stroke="#88c5ee" strokeWidth="0.7"/>
    <line x1="3" y1="16" x2="29" y2="16" stroke="#88c5ee" strokeWidth="0.5"/>
    <line x1="16" y1="3" x2="16" y2="29" stroke="#88c5ee" strokeWidth="0.5"/>
    <circle cx="16" cy="16" r="2.5" fill="#ffd55b"/>
  </svg>
);

Icon.Piano = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <rect x="3" y="9" width="26" height="18" fill="#222" stroke="#000"/>
    <g>
      <rect x="4" y="12" width="3" height="14" fill="#fff"/>
      <rect x="7.5" y="12" width="3" height="14" fill="#fff"/>
      <rect x="11" y="12" width="3" height="14" fill="#fff"/>
      <rect x="14.5" y="12" width="3" height="14" fill="#fff"/>
      <rect x="18" y="12" width="3" height="14" fill="#fff"/>
      <rect x="21.5" y="12" width="3" height="14" fill="#fff"/>
      <rect x="25" y="12" width="3" height="14" fill="#fff"/>
    </g>
    <g fill="#000">
      <rect x="6" y="12" width="2" height="9"/>
      <rect x="9.5" y="12" width="2" height="9"/>
      <rect x="16.5" y="12" width="2" height="9"/>
      <rect x="20" y="12" width="2" height="9"/>
      <rect x="23.5" y="12" width="2" height="9"/>
    </g>
  </svg>
);

Icon.Mine = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <rect x="3" y="3" width="26" height="26" fill="#c0c0c0" stroke="#888"/>
    <rect x="5" y="5" width="22" height="22" fill="#a0a0a0"/>
    <circle cx="16" cy="17" r="7" fill="#000"/>
    <rect x="15" y="8" width="2" height="3" fill="#000"/>
    <circle cx="13" cy="14" r="1.5" fill="#fff"/>
    <line x1="9" y1="10" x2="11" y2="12" stroke="#000" strokeWidth="1"/>
    <line x1="23" y1="10" x2="21" y2="12" stroke="#000" strokeWidth="1"/>
  </svg>
);

Icon.Trophy = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <path d="M10,5 L22,5 L22,14 C22,18 19,21 16,21 C13,21 10,18 10,14 Z" fill="#f6c84a" stroke="#a07820"/>
    <path d="M10,7 L6,7 L6,11 C6,13 8,15 10,15" fill="none" stroke="#a07820" strokeWidth="1.2"/>
    <path d="M22,7 L26,7 L26,11 C26,13 24,15 22,15" fill="none" stroke="#a07820" strokeWidth="1.2"/>
    <rect x="13" y="21" width="6" height="3" fill="#a07820"/>
    <rect x="10" y="24" width="12" height="3" fill="#a07820"/>
  </svg>
);

Icon.Briefcase = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <rect x="4" y="11" width="24" height="16" rx="1" fill="#7a4a1a" stroke="#3e240a"/>
    <rect x="11" y="6" width="10" height="5" fill="none" stroke="#3e240a" strokeWidth="1.4"/>
    <rect x="4" y="16" width="24" height="2" fill="#5a3a16"/>
    <rect x="14" y="16" width="4" height="3" fill="#ffd55b"/>
  </svg>
);

Icon.Gear = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="9" fill="#c8c4b0" stroke="#666"/>
    <circle cx="16" cy="16" r="4" fill="#666"/>
    <g fill="#888">
      <rect x="15" y="2" width="2" height="5"/>
      <rect x="15" y="25" width="2" height="5"/>
      <rect x="2" y="15" width="5" height="2"/>
      <rect x="25" y="15" width="5" height="2"/>
    </g>
  </svg>
);

Icon.Recycle = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <path d="M7,10 L25,10 L23,28 L9,28 Z" fill="#88c5ee" stroke="#2469b0"/>
    <line x1="13" y1="14" x2="14" y2="24" stroke="#2469b0" strokeWidth="1"/>
    <line x1="16" y1="14" x2="16" y2="24" stroke="#2469b0" strokeWidth="1"/>
    <line x1="19" y1="14" x2="18" y2="24" stroke="#2469b0" strokeWidth="1"/>
    <rect x="11" y="6" width="10" height="3" fill="#2469b0"/>
  </svg>
);

Icon.Computer = ({size=36}) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <rect x="4" y="4" width="24" height="18" rx="1" fill="#c8c4b0" stroke="#444"/>
    <rect x="6" y="6" width="20" height="14" fill="#1a3a6e"/>
    <rect x="11" y="22" width="10" height="4" fill="#a8a496"/>
    <rect x="8" y="26" width="16" height="2" fill="#888"/>
  </svg>
);

Icon.Help = ({size=16}) => (
  <svg width={size} height={size} viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="7" fill="#316ac5" stroke="#0c3e8c"/>
    <text x="8" y="11.5" fontFamily="Trebuchet MS" fontSize="10" fill="#fff" textAnchor="middle" fontWeight="bold">?</text>
  </svg>
);

window.Icon = Icon;
