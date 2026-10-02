import React, { useState } from 'react';
import Starburst from './Starburst';
import { Sliders, Sparkles, Check, Copy, Type } from 'lucide-react';

export default function SpecimenLab() {
  const [sampleText, setSampleText] = useState('Poppins & Roboto in Production.');
  const [selectedFont, setSelectedFont] = useState('display'); // 'display' (Poppins) or 'body' (Roboto)
  const [fontSize, setFontSize] = useState(48);
  const [fontWeight, setFontWeight] = useState(700);
  const [isItalic, setIsItalic] = useState(false);
  const [activeTab, setActiveTab] = useState('type');
  const [copiedToken, setCopiedToken] = useState(null);

  const tokens = [
    { name: 'Royal Purple', value: '#7c3aed', code: 'var(--color-purple)' },
    { name: 'Electric Blue', value: '#2563eb', code: 'var(--color-blue)' },
    { name: 'Void Obsidian', value: '#05030a', code: 'var(--bg-obsidian)' },
    { name: 'Night Card', value: '#0d0918', code: 'rgba(13, 9, 24, 0.7)' },
    { name: 'Cyan Glow', value: '#06b6d4', code: 'var(--color-cyan)' },
    { name: 'Glass Border', value: 'rgba(255,255,255,0.12)', code: 'rgba(255, 255, 255, 0.12)' }
  ];

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedToken(code);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  return (
    <section id="specimen" className="min-h-screen flex flex-col justify-center py-20 sm:py-24 relative overflow-hidden scroll-mt-12">
      
      {/* Background blue & purple radial accent */}
      <div className="pointer-events-none absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#7c3aed]/20 to-[#2563eb]/15 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Typography & Color Tokens<span className="text-white/40">.</span>
            </h2>
            <p className="mt-2 font-body text-base text-slate-300 max-w-xl">
              Preview Poppins (Display & Headlines) and Roboto (Body & Data Tables) alongside the blue, purple & black design tokens.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10 self-start md:self-end">
            <button
              onClick={() => setActiveTab('type')}
              className={`px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
                activeTab === 'type'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white font-bold shadow-md shadow-purple-500/25'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Type Specimen
            </button>
            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
                activeTab === 'tokens'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white font-bold shadow-md shadow-purple-500/25'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Color Tokens
            </button>
            <button
              onClick={() => setActiveTab('components')}
              className={`px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
                activeTab === 'components'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white font-bold shadow-md shadow-purple-500/25'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              UI Components
            </button>
          </div>
        </div>

        {/* Tab 1: Typography Scaler */}
        {activeTab === 'type' && (
          <div className="rounded-2xl border border-white/10 bg-[#0c0819]/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
            
            {/* Control Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 mb-8 border-b border-white/10 text-xs">
              
              {/* Custom Input */}
              <div className="lg:col-span-2">
                <label className="block text-slate-400 font-mono mb-2">Editable Test String</label>
                <input
                  type="text"
                  value={sampleText}
                  onChange={(e) => setSampleText(e.target.value)}
                  placeholder="Type anything..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6] transition font-body"
                />
              </div>

              {/* Font Family Selector */}
              <div>
                <label className="block text-slate-400 font-mono mb-2">Font Family</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedFont('display')}
                    className={`px-3 py-2 rounded-xl text-xs font-display transition ${
                      selectedFont === 'display'
                        ? 'bg-purple-600 text-white font-bold'
                        : 'bg-white/[0.04] text-slate-300 hover:text-white'
                    }`}
                  >
                    Plus Jakarta
                  </button>
                  <button
                    onClick={() => setSelectedFont('body')}
                    className={`px-3 py-2 rounded-xl text-xs font-body transition ${
                      selectedFont === 'body'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-white/[0.04] text-slate-300 hover:text-white'
                    }`}
                  >
                    Roboto
                  </button>
                </div>
              </div>

              {/* Weight & Size Controls */}
              <div>
                <div className="flex justify-between text-slate-400 font-mono mb-2">
                  <span>Size & Weight</span>
                  <span className="text-white">{fontSize}px / {fontWeight}</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="20"
                    max="96"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="flex-1 accent-[#8b5cf6] cursor-pointer"
                  />
                  <button
                    onClick={() => setIsItalic(!isItalic)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-serif ${
                      isItalic
                        ? 'bg-[#8b5cf6] border-[#8b5cf6] text-white font-bold'
                        : 'bg-white/[0.04] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    I
                  </button>
                </div>
              </div>

            </div>

            {/* Live Specimen View Area */}
            <div className="min-h-[220px] flex items-center justify-center p-6 bg-black/50 rounded-xl border border-white/5 overflow-x-auto">
              <p
                style={{
                  fontFamily: selectedFont === 'display' ? 'var(--font-display)' : 'var(--font-body)',
                  fontSize: `${fontSize}px`,
                  fontWeight: fontWeight,
                  fontStyle: isItalic ? 'italic' : 'normal',
                  lineHeight: 1.15
                }}
                className="text-white tracking-tight break-words text-center transition-all duration-150 select-all"
              >
                {sampleText || (selectedFont === 'display' ? 'Plus Jakarta Sans' : 'Roboto')}
              </p>
            </div>

            {/* Specimen Glyphs Row */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <span>ACTIVE: {selectedFont === 'display' ? 'Plus Jakarta Sans (Headlines & Display)' : 'Roboto (Body & Data Tables)'}</span>
              <span className="text-[#a855f7] font-medium">Janssen Sombrio Design System</span>
            </div>
          </div>
        )}

        {/* Tab 2: Design Token Palette */}
        {activeTab === 'tokens' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokens.map((token) => (
              <div
                key={token.name}
                onClick={() => handleCopy(token.code)}
                className="p-5 rounded-2xl border border-white/10 bg-[#0c0819]/75 hover:bg-[#140d28] backdrop-blur-xl flex items-center justify-between group cursor-pointer transition-all hover:border-[#8b5cf6]/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl border border-white/20 shadow-inner shrink-0"
                    style={{ background: token.value }}
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white group-hover:text-[#a855f7] transition-colors">
                      {token.name}
                    </h4>
                    <span className="text-xs font-mono text-slate-400 block mt-0.5">
                      {token.code}
                    </span>
                  </div>
                </div>

                <div className="text-slate-400 group-hover:text-white transition-colors">
                  {copiedToken === token.code ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: UI Components Preview */}
        {activeTab === 'components' && (
          <div className="rounded-2xl border border-white/10 bg-[#0c0819]/80 backdrop-blur-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
              {/* Pills & Badges */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                  Pill Badges & Tabs
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-display font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md">
                    Active Pill
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-display font-medium bg-white/[0.06] border border-white/15 text-white">
                    Ghost Pill
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-purple-500/20 border border-purple-500/40 text-purple-300">
                    Status: Verified
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                  Action Buttons
                </span>
                <div className="flex flex-col gap-3 font-display">
                  <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:from-[#8b5cf6] hover:to-[#3b82f6] text-white text-xs font-bold transition shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Purple & Blue Primary</span>
                  </button>
                  <button className="px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/15 hover:bg-white/10 text-white text-xs font-medium transition flex items-center justify-center gap-2">
                    <span>Secondary Glass</span>
                  </button>
                </div>
              </div>

              {/* Micro Overlays & Dots */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                  Editorial Glyphs
                </span>
                <div className="flex items-center gap-6 p-4 rounded-xl bg-black/50 border border-white/5">
                  <Starburst className="w-8 h-8 text-[#8b5cf6]" spin={true} />
                  <div className="text-xs font-mono text-slate-300">
                    <div>16-Ray Radial Asterisk</div>
                    <div className="text-slate-400 text-[10px]">Plus Jakarta Display System</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
