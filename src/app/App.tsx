import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Mail, ArrowDown, TrendingUp, Award, Globe } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1, title: "Maison Aurore", category: "Luxury E-Commerce", year: "2024",
    desc: "A high-end French fragrance house demanding a digital presence as refined as its scent collection. Crafted full visual identity and storefront.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format",
    tags: ["E-Commerce", "Brand Identity", "Motion"],
  },
  {
    id: 2, title: "Vela Studio", category: "Architecture Portfolio", year: "2024",
    desc: "Minimalist portfolio for a Barcelona architecture firm. Grid-driven, photograph-forward, built to let the work command silence.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format",
    tags: ["Portfolio", "Web Design", "Photography"],
  },
  {
    id: 3, title: "Crestline Capital", category: "Financial Services", year: "2023",
    desc: "Dashboard and marketing site for a boutique investment firm in London. Authority without austerity — warm, precise, trustworthy.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop&auto=format",
    tags: ["Dashboard", "Marketing", "UI/UX"],
  },
  {
    id: 4, title: "Terroir", category: "Restaurant & Hospitality", year: "2023",
    desc: "Digital home for a Michelin-starred tasting menu restaurant in Copenhagen. Reservations, seasonal menus, and sensory atmosphere.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop&auto=format",
    tags: ["Hospitality", "Booking", "Editorial"],
  },
  {
    id: 5, title: "Pulse Health", category: "Healthcare SaaS", year: "2023",
    desc: "Patient-facing app and marketing site for a digital health startup. Warm clinical design that reduces anxiety and builds trust.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&auto=format",
    tags: ["SaaS", "App Design", "Branding"],
  },
  {
    id: 6, title: "Solstice Collective", category: "Creative Agency", year: "2022",
    desc: "A provocative, scroll-heavy showcase for an independent creative collective. Deliberately confrontational — every scroll is a statement.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&auto=format",
    tags: ["Creative", "Experimental", "Motion"],
  },
];

const services = [
  { num: "01", title: "Web Design", desc: "From first sketch to final pixel. Every layout earns its place." },
  { num: "02", title: "Brand Identity", desc: "Visual systems built to endure — not just impress on launch day." },
  { num: "03", title: "UX Strategy", desc: "Research-grounded flows that reduce friction and build loyalty." },
  { num: "04", title: "Motion & Interaction", desc: "Micro-interactions that make interfaces feel alive and intentional." },
];

// ── Background Effects ─────────────────────────────────────────────────────────

function SteamParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="steam-particle absolute rounded-full"
          style={{
            left: `${10 + (i * 5.2) % 80}%`, bottom: `${20 + (i * 7) % 40}%`,
            width: `${2 + (i % 4)}px`, height: `${2 + (i % 4)}px`,
            animationDelay: `${(i * 0.4) % 6}s`, animationDuration: `${5 + (i % 5)}s`, opacity: 0,
            background: `rgba(200, 150, 12, ${0.3 + (i % 4) * 0.1})`,
          }} />
      ))}
    </div>
  );
}

function GoldOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="gold-orb absolute w-96 h-96 rounded-full" style={{ top: "10%", right: "5%", background: "radial-gradient(circle, rgba(200,150,12,0.12) 0%, transparent 70%)", animationDelay: "0s" }} />
      <div className="gold-orb absolute w-64 h-64 rounded-full" style={{ bottom: "20%", left: "8%", background: "radial-gradient(circle, rgba(240,192,64,0.08) 0%, transparent 70%)", animationDelay: "2s" }} />
      <div className="gold-orb absolute w-80 h-80 rounded-full" style={{ top: "40%", left: "30%", background: "radial-gradient(circle, rgba(200,150,12,0.06) 0%, transparent 70%)", animationDelay: "4s" }} />
    </div>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(12,7,2,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,150,12,0.15)" : "none",
      }}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-bold tracking-wider text-accent"
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.12em", fontSize: "1.1rem" }}>
          ELENA<span style={{ color: "#C8960C" }}>.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {["Work", "About", "Services", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-accent"
              style={{ color: "rgba(242,226,192,0.65)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.14em" }}>
              {l}
            </a>
          ))}
        </div>
        <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-accent hover:text-black"
          style={{
            fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.14em",
            border: "1px solid rgba(200,150,12,0.5)", color: "#C8960C", borderRadius: "2px",
          }}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}

// ── FadeUp ────────────────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

// ── Hero Visual ───────────────────────────────────────────────────────────────

function MockBrowser({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      borderRadius: 10, overflow: "hidden",
      boxShadow: "0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(200,150,12,0.2)",
      border: "1px solid rgba(200,150,12,0.25)",
      ...style,
    }}>
      {/* Browser chrome */}
      <div style={{ height: 28, background: "#1A0A02", display: "flex", alignItems: "center", paddingLeft: 10, gap: 5, flexShrink: 0 }}>
        {["#F87171", "#FBBF24", "#34D399"].map(c => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.85 }} />
        ))}
        <div style={{ flex: 1, height: 14, borderRadius: 7, background: "rgba(255,255,255,0.05)", margin: "0 10px", display: "flex", alignItems: "center", paddingLeft: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(200,150,12,0.4)", marginRight: 5 }} />
          <div style={{ height: 4, width: "60%", borderRadius: 2, background: "rgba(242,226,192,0.1)" }} />
        </div>
      </div>
      {/* Page content */}
      <div style={{ overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Main browser: Luxury E-Commerce "Maison Aurore" ── */
function LuxurySiteContent() {
  return (
    <div style={{ background: "#080300", padding: 12, height: 202 }}>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, borderBottom: "1px solid rgba(200,150,12,0.15)", paddingBottom: 8 }}>
        <span style={{ fontSize: 8, fontWeight: 800, color: "#C8960C", letterSpacing: 2, fontFamily: "'DM Mono',monospace" }}>MAISON AURORE</span>
        <div style={{ display: "flex", gap: 10 }}>
          {["Shop", "About", "Contact"].map(l => (
            <span key={l} style={{ fontSize: 7, color: "rgba(242,226,192,0.35)", fontFamily: "'DM Sans',sans-serif" }}>{l}</span>
          ))}
        </div>
      </div>
      {/* Hero text + glow */}
      <div style={{ position: "relative", marginBottom: 10 }}>
        <div style={{ position: "absolute", top: -8, left: -8, width: 80, height: 50, background: "radial-gradient(circle, rgba(200,150,12,0.18) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ fontSize: 7, color: "rgba(200,150,12,0.6)", marginBottom: 3, letterSpacing: 1.5, fontFamily: "'DM Mono',monospace" }}>— LUXURY FRAGRANCES</div>
        <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.15, color: "#F2E2C0", fontFamily: "'Playfair Display',serif" }}>
          Discover<br />
          <em style={{ color: "#C8960C", fontStyle: "italic" }}>Rare</em> Scents.
        </div>
      </div>
      {/* Stats */}
      <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
        {[["340%", "Sales Lifted"], ["#1", "Luxury Brand"], ["12K+", "Customers"]].map(([v, l]) => (
          <div key={l} style={{ flex: 1, padding: "4px 5px", border: "1px solid rgba(200,150,12,0.2)", borderRadius: 4, background: "rgba(200,150,12,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#C8960C", fontFamily: "'DM Mono',monospace" }}>{v}</div>
            <div style={{ fontSize: 6, color: "rgba(242,226,192,0.4)", marginTop: 1 }}>{l}</div>
          </div>
        ))}
      </div>
      {/* Products */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
        {[["#C8960C", "Noir Oud", "€95"], ["#8B5E14", "Aurore", "€120"], ["#D4A017", "Soleil", "€85"]].map(([c, name, price]) => (
          <div key={name} style={{ borderRadius: 4, overflow: "hidden", border: "1px solid rgba(200,150,12,0.15)" }}>
            <div style={{ height: 26, background: `linear-gradient(135deg, ${c}30, ${c}08)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: c as string, opacity: 0.75, boxShadow: `0 0 8px ${c}60` }} />
            </div>
            <div style={{ padding: "3px 5px", background: "rgba(0,0,0,0.5)" }}>
              <div style={{ fontSize: 6.5, color: "rgba(242,226,192,0.75)", fontWeight: 600 }}>{name}</div>
              <div style={{ fontSize: 6, color: "#C8960C" }}>{price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Left browser: Architecture portfolio ── */
function PortfolioSiteContent() {
  return (
    <div style={{ background: "#080B12", padding: 10, height: 130 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 7, fontWeight: 700, color: "#818CF8", letterSpacing: 1.5, fontFamily: "'DM Mono',monospace" }}>VELA STUDIO</span>
        <div style={{ width: 32, height: 10, borderRadius: 2, background: "rgba(129,140,248,0.2)" }} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.1, color: "#E2E8F0", fontFamily: "'Playfair Display',serif" }}>Architecture<br />Beyond Form</div>
        <div style={{ fontSize: 6, color: "rgba(148,163,184,0.5)", marginTop: 2, fontFamily: "'DM Sans',sans-serif" }}>Barcelona · 47 Projects · Est. 2015</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
        {["#0F1929", "#131D2E", "#0A1520", "#111E30"].map((bg, i) => (
          <div key={i} style={{ height: 22, borderRadius: 3, background: bg, border: "1px solid rgba(129,140,248,0.12)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 8, background: "rgba(129,140,248,0.08)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Right browser: Analytics dashboard ── */
function AnalyticsSiteContent() {
  return (
    <div style={{ background: "#050A10", padding: 10, height: 115 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
        <span style={{ fontSize: 7, fontWeight: 700, color: "#34D399", letterSpacing: 1, fontFamily: "'DM Mono',monospace" }}>PULSE ANALYTICS</span>
        <span style={{ fontSize: 6, color: "#34D399", background: "rgba(52,211,153,0.1)", padding: "1px 5px", borderRadius: 2, fontFamily: "'DM Mono',monospace" }}>LIVE</span>
      </div>
      {/* Upward chart */}
      <div style={{ height: 46, marginBottom: 7, position: "relative" }}>
        <svg viewBox="0 0 180 46" width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#34D399" stopOpacity={0} />
            </linearGradient>
          </defs>
          <polyline points="0,42 25,36 50,28 75,20 100,13 130,7 160,3 180,1"
            fill="none" stroke="#34D399" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="0,42 25,36 50,28 75,20 100,13 130,7 160,3 180,1 180,46 0,46"
            fill="url(#chartGrad)" />
          {/* Dot at peak */}
          <circle cx={180} cy={1} r={3} fill="#34D399" />
          <text x={140} y={12} fill="#34D399" fontSize={9} fontWeight={700} fontFamily="'DM Mono',monospace">+247%</text>
        </svg>
      </div>
      {/* Metrics */}
      <div style={{ display: "flex", gap: 5 }}>
        {[["€84K", "Revenue"], ["2.4K", "Clients"], ["99%", "Uptime"]].map(([v, l]) => (
          <div key={l} style={{ flex: 1, textAlign: "center", padding: "3px 0", borderTop: "1px solid rgba(52,211,153,0.15)" }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: "#34D399", fontFamily: "'DM Mono',monospace" }}>{v}</div>
            <div style={{ fontSize: 5.5, color: "rgba(148,163,184,0.5)" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Floating metric badge ── */
function MetricBadge({ value, label, icon: Icon, color, style }: {
  value: string; label: string; icon: React.ElementType; color: string; style?: React.CSSProperties;
}) {
  return (
    <div className="badge-float absolute flex items-center gap-2 px-3 py-2 rounded-xl"
      style={{
        background: "rgba(12,7,2,0.88)", backdropFilter: "blur(12px)",
        border: `1px solid ${color}35`, boxShadow: `0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px ${color}15`,
        ...style,
      }}>
      <div className="flex items-center justify-center w-6 h-6 rounded-lg flex-shrink-0"
        style={{ background: `${color}18` }}>
        <Icon size={12} style={{ color }} />
      </div>
      <div>
        <div className="font-bold leading-none" style={{ color, fontFamily: "'DM Mono',monospace", fontSize: 11 }}>{value}</div>
        <div style={{ color: "rgba(242,226,192,0.45)", fontFamily: "'DM Sans',sans-serif", fontSize: 9, marginTop: 2 }}>{label}</div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative hidden lg:block flex-shrink-0" style={{ width: 520, height: 500 }}>
      {/* Background growth chart — very subtle */}
      <svg viewBox="0 0 520 500" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <defs>
          <linearGradient id="bgChartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8960C" stopOpacity={0.06} />
            <stop offset="100%" stopColor="#C8960C" stopOpacity={0} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Rising chart curve from bottom-left to top-right */}
        <path d="M 20 480 C 80 460 120 420 180 380 S 280 280 360 200 S 460 120 510 60"
          fill="none" stroke="rgba(200,150,12,0.12)" strokeWidth={2} strokeDasharray="6,4" />
        <path d="M 20 480 C 80 460 120 420 180 380 S 280 280 360 200 S 460 120 510 60 L 510 500 L 20 500 Z"
          fill="url(#bgChartGrad)" />
        {/* Scatter dots */}
        {[[80, 440], [160, 390], [240, 310], [330, 230], [410, 160], [480, 90]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={2.5} fill="rgba(200,150,12,0.25)" />
        ))}
      </svg>

      {/* Gold glow behind main browser */}
      <div className="absolute pointer-events-none" style={{
        top: 160, left: 80, width: 360, height: 260,
        background: "radial-gradient(ellipse at center, rgba(200,150,12,0.12) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(30px)",
      }} aria-hidden />

      {/* Left browser — Portfolio site */}
      <div style={{ position: "absolute", top: 80, left: 0, animation: "browserFloatLeft 5s ease-in-out infinite", transformOrigin: "center", transform: "rotate(-7deg)" }}>
        <MockBrowser>
          <PortfolioSiteContent />
        </MockBrowser>
      </div>

      {/* Top-right browser — Analytics dashboard */}
      <div style={{ position: "absolute", top: 20, right: 0, animation: "browserFloatRight 4s ease-in-out infinite", transformOrigin: "center", transform: "rotate(6deg)" }}>
        <MockBrowser style={{ width: 210 }}>
          <AnalyticsSiteContent />
        </MockBrowser>
      </div>

      {/* Main browser — Luxury E-Commerce (front and center) */}
      <div style={{ position: "absolute", top: 148, left: 90, animation: "browserFloatMain 4.5s ease-in-out infinite", zIndex: 10 }}>
        <MockBrowser style={{ width: 340 }}>
          <LuxurySiteContent />
        </MockBrowser>
      </div>

      {/* ── Floating metric badges ── */}
      <MetricBadge value="+340%" label="Avg Revenue Growth" icon={TrendingUp} color="#34D399"
        style={{ top: 28, left: 38, zIndex: 20, animationDelay: "0.5s" }} />
      <MetricBadge value="47 Sites" label="Launched & Live" icon={Globe} color="#C8960C"
        style={{ bottom: 28, right: 16, zIndex: 20, animationDelay: "1s" }} />
      <MetricBadge value="23 Awards" label="Design Recognition" icon={Award} color="#F0C040"
        style={{ bottom: 120, left: 8, zIndex: 20, animationDelay: "1.5s" }} />

      {/* Corner sparkles */}
      {[[60, 260], [400, 380], [180, 60], [470, 200], [30, 440], [330, 110]].map(([x, y], i) => (
        <div key={i} className="absolute rounded-full sparkle-dot"
          style={{
            left: x, top: y, width: i % 2 === 0 ? 3 : 2, height: i % 2 === 0 ? 3 : 2,
            background: i % 3 === 0 ? "#F0C040" : "#C8960C",
            animationDelay: `${i * 0.6}s`,
          }} aria-hidden />
      ))}
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "#0C0702" }}>
      <GoldOrbs />
      <SteamParticles />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, transparent 60%, rgba(200,150,12,0.04) 100%)" }} aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 justify-between">
        {/* Left — text */}
        <div className="flex-1 min-w-0">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: "#C8960C" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C8960C", fontFamily: "'DM Mono', monospace" }}>
              Web Designer & Creative Director
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif", lineHeight: 1, fontWeight: 700, color: "#F2E2C0",
              fontSize: "clamp(3.2rem, 7vw, 7.5rem)", letterSpacing: "-0.02em",
            }}>
            Crafting
            <br />
            <em style={{
              fontStyle: "italic", background: "linear-gradient(90deg, #C8960C, #F0C040, #C8960C)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>digital</em>
            <br />
            experiences.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-8 max-w-md text-lg leading-relaxed"
            style={{ color: "rgba(242,226,192,0.6)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
            Elena Vasquez — independent web designer with 8 years shaping digital presence for luxury brands, startups, and studios.
          </motion.p>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }} className="mt-10 flex items-center gap-8">
            <a href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 font-medium text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.12em",
                background: "linear-gradient(135deg, #C8960C, #F0C040)", color: "#0C0702",
                borderRadius: "2px",
              }}>
              View Work
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#about"
              className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-accent"
              style={{ color: "rgba(242,226,192,0.5)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.14em" }}>
              About Me
            </a>
          </motion.div>

          {/* Inline stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 flex items-center gap-8 pt-8"
            style={{ borderTop: "1px solid rgba(200,150,12,0.15)" }}>
            {[["47+", "Projects Shipped"], ["8", "Years Experience"], ["23", "Awards"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#C8960C" }}>{n}</div>
                <div className="text-xs mt-1 tracking-widest uppercase" style={{ color: "rgba(242,226,192,0.4)", fontFamily: "'DM Mono', monospace", fontSize: 9 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Visual illustration */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <HeroVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(200,150,12,0.5)", fontFamily: "'DM Mono', monospace" }}>Scroll</span>
        <div className="scroll-bounce"><ArrowDown size={14} style={{ color: "#C8960C" }} /></div>
      </motion.div>
    </section>
  );
}

// ── Projects ───────────────────────────────────────────────────────────────────

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer" style={{ borderRadius: "4px", overflow: "hidden" }}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", background: "#1A0D04" }}>
        <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }} />
        <div className="absolute inset-0 transition-opacity duration-500"
          style={{ background: "linear-gradient(to top, rgba(12,7,2,0.95) 0%, rgba(12,7,2,0.4) 50%, transparent 100%)", opacity: hovered ? 1 : 0.7 }} />
        <div className="absolute top-5 right-5 flex items-center justify-center w-12 h-12"
          style={{
            background: "rgba(200,150,12,0.9)", borderRadius: "50%",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1) rotate(0deg)" : "scale(0.6) rotate(-45deg)",
            transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}>
          <ArrowUpRight size={18} color="#0C0702" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {p.tags.map(t => (
              <span key={t} className="text-xs px-2.5 py-1 tracking-wider"
                style={{
                  fontFamily: "'DM Mono', monospace", color: "rgba(200,150,12,0.9)",
                  background: "rgba(200,150,12,0.12)", border: "1px solid rgba(200,150,12,0.25)", borderRadius: "2px",
                }}>{t}</span>
            ))}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#F2E2C0", fontWeight: 600 }}>{p.title}</h3>
          <p className="text-sm mt-1" style={{ color: "rgba(242,226,192,0.55)", fontFamily: "'DM Sans', sans-serif" }}>{p.category} · {p.year}</p>
        </div>
      </div>
      <div className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: hovered ? "80px" : "0px", background: "#1A0D04", borderTop: "1px solid rgba(200,150,12,0.12)" }}>
        <p className="px-6 py-4 text-sm leading-relaxed" style={{ color: "rgba(242,226,192,0.65)", fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="work" className="py-28" style={{ background: "#0C0702" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#C8960C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C8960C", fontFamily: "'DM Mono', monospace" }}>Selected Work</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F2E2C0", fontWeight: 700, lineHeight: 1.1 }}>
              Projects that<br /><em style={{ color: "#C8960C" }}>define presence.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "rgba(242,226,192,0.55)", fontFamily: "'DM Sans', sans-serif" }}>
              Each project is a collaboration — a deep dive into a brand&apos;s world to surface what makes it singular.
            </p>
          </FadeUp>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(200,150,12,0.08)", borderRadius: "4px", overflow: "hidden" }}>
          {projects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "#110905" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(200,150,12,0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(200,150,12,0.04) 0%, transparent 50%)" }} aria-hidden />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <FadeUp>
          <div className="relative">
            <div className="absolute -inset-3 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(200,150,12,0.15), transparent)", borderRadius: "6px" }} aria-hidden />
            <div className="relative overflow-hidden" style={{ borderRadius: "4px", aspectRatio: "3/4" }}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1067&fit=crop&auto=format&crop=face"
                alt="Elena Vasquez, web designer" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,7,2,0.6) 0%, transparent 60%)" }} />
            </div>
            <div className="absolute -bottom-6 -right-6 px-6 py-5" style={{ background: "#C8960C", borderRadius: "4px" }}>
              <div className="text-3xl font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif", color: "#0C0702" }}>8+</div>
              <div className="text-xs mt-1 tracking-widest" style={{ fontFamily: "'DM Mono', monospace", color: "rgba(12,7,2,0.7)" }}>YEARS</div>
            </div>
          </div>
        </FadeUp>
        <div>
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#C8960C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C8960C", fontFamily: "'DM Mono', monospace" }}>About</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#F2E2C0", fontWeight: 700, lineHeight: 1.2 }}>
              Design is how<br /><em style={{ color: "#C8960C" }}>trust is built</em> at scale.
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(242,226,192,0.65)", fontFamily: "'DM Sans', sans-serif" }}>
              I&apos;m Elena Vasquez, an independent web designer based between Madrid and New York. I work with brands who believe that the quality of an interface reflects the quality of a company&apos;s values.
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(242,226,192,0.65)", fontFamily: "'DM Sans', sans-serif" }}>
              My approach starts with listening — to the founders, the users, the competitors, and the market — then moves swiftly into making. I believe great design is earned, not decorated.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {["Figma / Framer", "React / Next.js", "Motion Design", "Brand Strategy", "User Research", "Creative Direction"].map(s => (
                <div key={s} className="flex items-center gap-2.5 py-2.5 px-4"
                  style={{ border: "1px solid rgba(200,150,12,0.18)", borderRadius: "2px", background: "rgba(200,150,12,0.04)" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C8960C" }} />
                  <span className="text-sm" style={{ color: "rgba(242,226,192,0.75)", fontFamily: "'DM Sans', sans-serif" }}>{s}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ── Services ───────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-28" style={{ background: "#0C0702" }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#C8960C" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C8960C", fontFamily: "'DM Mono', monospace" }}>Services</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F2E2C0", fontWeight: 700, lineHeight: 1.1, marginBottom: "4rem" }}>
            What I do<br /><em style={{ color: "#C8960C" }}>exceptionally well.</em>
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(200,150,12,0.1)", borderRadius: "4px", overflow: "hidden" }}>
          {services.map((s, i) => (
            <FadeUp key={s.num} delay={i * 0.1}>
              <div className="group p-10 transition-colors duration-300 cursor-default" style={{ background: "#0C0702" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1A0D04"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#0C0702"; }}>
                <div className="text-xs mb-6 tracking-widest" style={{ fontFamily: "'DM Mono', monospace", color: "rgba(200,150,12,0.5)" }}>{s.num}</div>
                <h3 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#F2E2C0", fontWeight: 600, lineHeight: 1.2 }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(242,226,192,0.55)", fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
                <div className="mt-6 h-px w-0 group-hover:w-16 transition-all duration-500" style={{ background: "#C8960C" }} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Marquee ────────────────────────────────────────────────────────────────────

function Marquee() {
  const items = ["Web Design", "Brand Identity", "UX Strategy", "Motion Design", "Creative Direction", "Digital Experience"];
  return (
    <div className="py-6 overflow-hidden" style={{ background: "#C8960C" }}>
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-sm tracking-[0.2em] uppercase flex-shrink-0 flex items-center gap-12"
            style={{ fontFamily: "'DM Mono', monospace", color: "#0C0702" }}>
            {item}
            <span style={{ color: "rgba(12,7,2,0.4)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Contact ────────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ background: "#110905" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(200,150,12,0.08) 0%, transparent 60%)" }} aria-hidden />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <FadeUp>
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C8960C", fontFamily: "'DM Mono', monospace" }}>Let&apos;s Work Together</span>
          <h2 className="mt-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#F2E2C0", fontWeight: 700, lineHeight: 1.1 }}>
            Have a project<br /><em style={{ color: "#C8960C" }}>in mind?</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed mx-auto max-w-md" style={{ color: "rgba(242,226,192,0.55)", fontFamily: "'DM Sans', sans-serif" }}>
            I take on 3–4 projects per quarter. If you want to make something that lasts, let&apos;s talk.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:elena@vasquez.design"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.12em", background: "linear-gradient(135deg, #C8960C, #F0C040)", color: "#0C0702", fontWeight: 600, borderRadius: "2px" }}>
              <Mail size={16} />
              elena@vasquez.design
            </a>
            <a href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:border-primary"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.12em", border: "1px solid rgba(200,150,12,0.3)", color: "rgba(242,226,192,0.7)", borderRadius: "2px" }}>
              Schedule a Call
              <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-16 flex items-center justify-center gap-6">
            {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map(s => (
              <a key={s} href="#"
                className="text-xs tracking-widest uppercase transition-colors duration-300 hover:text-accent"
                style={{ color: "rgba(242,226,192,0.35)", fontFamily: "'DM Mono', monospace" }}>{s}</a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8" style={{ background: "#0C0702", borderTop: "1px solid rgba(200,150,12,0.12)" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#C8960C", letterSpacing: "0.1em" }}>ELENA<span style={{ color: "rgba(242,226,192,0.4)" }}>.</span></span>
        <p className="text-xs" style={{ color: "rgba(242,226,192,0.3)", fontFamily: "'DM Mono', monospace" }}>© 2024 Elena Vasquez · All rights reserved</p>
        <p className="text-xs" style={{ color: "rgba(200,150,12,0.4)", fontFamily: "'DM Mono', monospace" }}>Madrid · New York</p>
      </div>
    </footer>
  );
}

// ── Global Styles ──────────────────────────────────────────────────────────────

const globalStyles = `
  @keyframes steamRiseA { 0%{transform:translateY(0) translateX(0) scale(1);opacity:0} 20%{opacity:0.6} 100%{transform:translateY(-140px) translateX(18px) scale(2.8);opacity:0} }
  @keyframes steamRiseB { 0%{transform:translateY(0) translateX(0) scale(1);opacity:0} 20%{opacity:0.5} 100%{transform:translateY(-100px) translateX(-22px) scale(2.2);opacity:0} }
  @keyframes steamRiseC { 0%{transform:translateY(0) translateX(0) scale(1);opacity:0} 20%{opacity:0.7} 100%{transform:translateY(-160px) translateX(10px) scale(3);opacity:0} }
  .steam-particle:nth-child(3n+1){animation:steamRiseA var(--dur,6s) ease-out infinite}
  .steam-particle:nth-child(3n+2){animation:steamRiseB var(--dur,5s) ease-out infinite}
  .steam-particle:nth-child(3n){animation:steamRiseC var(--dur,7s) ease-out infinite}

  @keyframes goldPulse { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
  .gold-orb{animation:goldPulse 8s ease-in-out infinite}

  @keyframes scrollBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
  .scroll-bounce{animation:scrollBounce 2s ease-in-out infinite}

  @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-33.333%)} }
  .marquee-track{animation:marqueeScroll 22s linear infinite}

  @keyframes browserFloatMain {
    0%,100%{transform:translateY(0) rotate(-1deg)}
    50%{transform:translateY(-12px) rotate(-1deg)}
  }
  @keyframes browserFloatLeft {
    0%,100%{transform:translateY(-6px) rotate(-7deg)}
    50%{transform:translateY(8px) rotate(-7deg)}
  }
  @keyframes browserFloatRight {
    0%,100%{transform:translateY(0) rotate(6deg)}
    50%{transform:translateY(-14px) rotate(6deg)}
  }

  @keyframes badgeFloat {
    0%,100%{transform:translateY(0) scale(1)}
    50%{transform:translateY(-5px) scale(1.02)}
  }
  .badge-float{animation:badgeFloat 3.5s ease-in-out infinite}

  @keyframes sparkle {
    0%,100%{opacity:0.2;transform:scale(1)}
    50%{opacity:0.8;transform:scale(1.6)}
  }
  .sparkle-dot{animation:sparkle 2.5s ease-in-out infinite}

  html{scroll-behavior:smooth}
  ::-webkit-scrollbar{width:4px}
  ::-webkit-scrollbar-track{background:#0C0702}
  ::-webkit-scrollbar-thumb{background:rgba(200,150,12,0.3);border-radius:4px}
`;

// ── App ────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0C0702" }}>
        <Nav />
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
