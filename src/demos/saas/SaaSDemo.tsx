import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { InView } from '../../components/motion-primitives/in-view';
import { Tilt } from '../../components/motion-primitives/tilt';
import { Spotlight } from '../../components/motion-primitives/spotlight';
import { TextEffect } from '../../components/motion-primitives/text-effect';
import {
  Zap, Activity, Cpu, ShieldCheck, Check, ArrowRight, 
  Terminal, Sparkles, ChevronDown, CheckCircle2, X, Play,
  RefreshCw
} from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Developer',
    priceMonthly: 29,
    priceAnnual: 24,
    description: 'Essential telemetry for indie developers and fast-moving startup projects.',
    features: [
      'Up to 10M trace spans/month',
      '7-day high-resolution retention',
      'Automatic service map discovery',
      'Standard Slack & Discord alerts',
      'Community & email support',
    ],
    ctaText: 'Start 14-Day Free Trial',
  },
  {
    id: 'pro',
    name: 'Growth & Scale',
    badge: 'Most Popular',
    popular: true,
    priceMonthly: 89,
    priceAnnual: 69,
    description: 'Engineered for scaling engineering teams that require automated anomaly detection.',
    features: [
      'Up to 100M trace spans/month',
      '30-day retention with cold storage',
      'AI Root-Cause Incident Synthesis',
      'Continuous eBPF CPU & Memory profiling',
      'Custom webhook & PagerDuty integration',
      'Priority 24/7 incident assistance',
    ],
    ctaText: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Global Enterprise',
    badge: 'Mission Critical',
    priceMonthly: 249,
    priceAnnual: 199,
    description: 'Tailored for regulated enterprises requiring multi-region tenancy and custom SLAs.',
    features: [
      'Unlimited spans & custom ingest pipelines',
      '365-day compliance data retention',
      'Dedicated VPC peering & SSO/SAML',
      'Air-gapped deployment option',
      '99.99% uptime SLA guarantee',
      'Dedicated technical account manager',
    ],
    ctaText: 'Deploy Enterprise Demo',
  },
];

const FAQS = [
  {
    q: 'How does ApexFlow collect traces without degrading production performance?',
    a: 'ApexFlow leverages kernel-level eBPF probes and asynchronous ring buffers. Telemetry capture operates with less than 0.8% CPU overhead and negligible latency impact, even under spikes exceeding 250,000 requests per second.',
  },
  {
    q: 'Can ApexFlow integrate with our existing OpenTelemetry pipelines?',
    a: 'Yes. ApexFlow is 100% compliant with the OpenTelemetry (OTel) standard. Simply configure your existing OTLP collectors to forward endpoints, with zero SDK migration or vendor lock-in required.',
  },
  {
    q: 'How does the AI Root-Cause Synthesis feature work?',
    a: 'When an anomaly or error rate spike occurs, our local deterministic causal inference model evaluates dependency graph differentials, recent deployment metadata, and logs to provide an actionable triage summary in seconds.',
  },
  {
    q: 'Is our sensitive customer payload data protected?',
    a: 'All spans and payload values pass through client-side redaction masks before leaving your cluster. We support SOC2 Type II compliance, end-to-end encryption with customer-managed keys (CMEK), and regional data isolation.',
  },
  {
    q: 'What happens when my 14-day free trial concludes?',
    a: 'At the end of your trial, you can either upgrade to a paid tier or automatically transition into our free Developer Tier without unexpected billing charges.',
  },
];

export const SaaSDemo: React.FC = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [activeTab, setActiveTab] = useState<'traces' | 'incidents' | 'runbooks'>('traces');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Growth & Scale');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('developer@acmecorp.io');

  // Interactive Live Sandbox Counters
  const [simulatedLoad, setSimulatedLoad] = useState(1420);
  const [isSimulating, setIsSimulating] = useState(false);

  const triggerSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSimulatedLoad((prev) => prev + Math.floor(Math.random() * 300) + 150);
      setIsSimulating(false);
    }, 600);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupSuccess(true);
  };

  const resetTrial = () => {
    setSignupSuccess(false);
    setTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
      {/* Top Demo Header */}
      <DemoHeader
        currentDemo="saas"
        title="ApexFlow Telemetry Platform Concept"
        badgeColor="text-cyan-400 border-cyan-400/30 bg-cyan-400/10"
      />

      {/* Concept Sub-Banner */}
      <div className="bg-[#0B1324] border-b border-cyan-500/15 py-1.5 px-4 text-center text-[11px] font-mono text-cyan-200/80 flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>CONCEPT PROJECT DEMO — High-converting modern SaaS product architecture engineered for demonstration only.</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-[41px] z-40 bg-[#070A12]/90 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  ApexFlow
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  AI
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block -mt-1">
                Cloud Observability
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#preview" className="hover:text-cyan-400 transition-colors">Product Preview</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">Architecture &amp; FAQ</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedPlan('Growth & Scale');
                setTrialModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden border-b border-white/5">
        {/* Background glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md">
            <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Next-Gen eBPF Observability • Concept Showcase</span>
          </div>

          {/* Headline with TextEffect */}
          <div className="max-w-4xl mx-auto mb-6">
            <h1 className="sr-only">Real-Time Telemetry for High-Velocity Teams</h1>
            <TextEffect
              as="p"
              per="word"
              preset="fade-in-blur"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Real-Time Telemetry for High-Velocity Teams
            </TextEffect>
          </div>

          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-lg leading-relaxed mb-10">
            Diagnose microservice latency bottlenecks in milliseconds. ApexFlow combines zero-overhead eBPF tracing with AI root-cause synthesis before downtime impacts revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => {
                setSelectedPlan('Growth & Scale');
                setTrialModalOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Start 14-Day Free Trial</span>
            </button>
            <a
              href="#preview"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0E1526] hover:bg-[#141F38] text-slate-200 border border-white/10 hover:border-cyan-500/40 font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span>Explore Interactive Sandbox</span>
            </a>
          </div>

          {/* High-Fidelity Interactive Dashboard Preview Card with Tilt & Spotlight */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Tilt rotationFactor={5} className="rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-indigo-500/20 to-transparent shadow-2xl">
              <div className="rounded-[22px] bg-[#0A0F1E] border border-white/10 p-4 sm:p-6 text-left relative overflow-hidden">
                <Spotlight className="from-cyan-500/20 via-indigo-500/10 to-transparent" size={320} />
                
                {/* Browser-like Mockup Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                      dashboard.apexflow.io/cluster/prod-eu-west-1
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={triggerSimulation}
                      className="px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                    >
                      <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                      <span>Simulate Traffic Spike</span>
                    </button>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live Stream
                    </span>
                  </div>
                </div>

                {/* Dashboard Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#0E1528] border border-white/5">
                    <div className="text-[11px] font-mono text-slate-400">Total Ingestion</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
                      {simulatedLoad.toLocaleString()} <span className="text-xs text-cyan-400">req/s</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">▲ 4.8% nominal</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0E1528] border border-white/5">
                    <div className="text-[11px] font-mono text-slate-400">P99 Latency</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300 mt-1">
                      18.4 <span className="text-xs text-slate-400">ms</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">▼ 1.2ms improved</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0E1528] border border-white/5">
                    <div className="text-[11px] font-mono text-slate-400">Error Budget</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
                      99.98%
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">SLA: 99.95% target</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0E1528] border border-white/5">
                    <div className="text-[11px] font-mono text-slate-400">Active Anomalies</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mt-1">
                      0 Detected
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">AI Sentinel Guarding</div>
                  </div>
                </div>

                {/* Simulated Telemetry Stream Table */}
                <div className="rounded-xl bg-[#080C17] border border-white/5 overflow-x-auto text-xs font-mono">
                  <div className="p-3 border-b border-white/5 flex items-center justify-between text-slate-400 font-semibold">
                    <span>Active Distributed Traces (Last 30s)</span>
                    <span className="text-[10px] text-cyan-400">eBPF Low-Overhead Sampling</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    <div className="p-3 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-white font-semibold">POST /api/v2/checkout</span>
                        <span className="text-slate-400 text-[10px] hidden sm:inline">payment-gateway-svc</span>
                      </div>
                      <div className="flex items-center gap-4 text-[11px]">
                        <span className="text-slate-400">200 OK</span>
                        <span className="text-cyan-300 font-bold">14.2 ms</span>
                      </div>
                    </div>

                    <div className="p-3 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-white font-semibold">GET /api/v2/telemetry/stream</span>
                        <span className="text-slate-400 text-[10px] hidden sm:inline">ingest-pipeline-svc</span>
                      </div>
                      <div className="flex items-center gap-4 text-[11px]">
                        <span className="text-slate-400">200 OK</span>
                        <span className="text-cyan-300 font-bold">8.6 ms</span>
                      </div>
                    </div>

                    <div className="p-3 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-white font-semibold">POST /auth/oauth/token</span>
                        <span className="text-slate-400 text-[10px] hidden sm:inline">iam-identity-svc</span>
                      </div>
                      <div className="flex items-center gap-4 text-[11px]">
                        <span className="text-slate-400">200 OK</span>
                        <span className="text-cyan-300 font-bold">22.1 ms</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Tilt>
          </InView>

        </div>
      </header>

      {/* Feature Pillars Section */}
      <section id="features" className="py-24 relative bg-[#090D18] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Observability Without the Overhead Tax
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Replace brittle custom loggers and complex agent deployments with modern eBPF kernel inspection and intelligent triage.
            </p>
          </InView>

          {/* 3 Core Pillar Cards with Tilt & Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <InView
              variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Tilt rotationFactor={6} className="h-full rounded-2xl bg-[#0E1528] border border-white/10 hover:border-cyan-500/50 p-8 flex flex-col justify-between transition-all group relative overflow-hidden">
                <Spotlight className="from-cyan-500/25 via-transparent to-transparent" size={240} />
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Distributed Tracing
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Correlate HTTP, gRPC, and database queries across microservices automatically. Zero code annotations needed.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>OpenTelemetry compliant OTLP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Cross-cloud service topological maps</span>
                  </div>
                </div>
              </Tilt>
            </InView>

            <InView
              variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Tilt rotationFactor={6} className="h-full rounded-2xl bg-[#0E1528] border border-white/10 hover:border-indigo-500/50 p-8 flex flex-col justify-between transition-all group relative overflow-hidden">
                <Spotlight className="from-indigo-500/25 via-transparent to-transparent" size={240} />
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    AI Incident Synthesis
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Autonomous causal analysis correlates error spikes with pull requests, configuration drift, and database locks.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Actionable root-cause suggestions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                    <span>De-duplication of noisy alarm storms</span>
                  </div>
                </div>
              </Tilt>
            </InView>

            <InView
              variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Tilt rotationFactor={6} className="h-full rounded-2xl bg-[#0E1528] border border-white/10 hover:border-violet-500/50 p-8 flex flex-col justify-between transition-all group relative overflow-hidden">
                <Spotlight className="from-violet-500/25 via-transparent to-transparent" size={240} />
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    Zero-Overhead Profiling
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Continuous flamegraphs across Go, Rust, Java, and Node.js runtimes in production with less than 1% CPU utilization.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-violet-400" />
                    <span>Memory allocation leak detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-violet-400" />
                    <span>Kernel-level eBPF continuous sampling</span>
                  </div>
                </div>
              </Tilt>
            </InView>

          </div>

        </div>
      </section>

      {/* Interactive Product Preview Tabs Section */}
      <section id="preview" className="py-24 relative bg-[#070A12] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Interactive Product Walkthrough
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Inspect the ApexFlow Workspace
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Click the tabs below to explore our telemetry inspector, topological graph, and automated mitigation runbooks.
            </p>
          </InView>

          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab('traces')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'traces'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#0E1528] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Telemetry Waterfall</span>
            </button>
            <button
              onClick={() => setActiveTab('incidents')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'incidents'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#0E1528] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Causal Synthesis</span>
            </button>
            <button
              onClick={() => setActiveTab('runbooks')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'runbooks'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#0E1528] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Automated Runbooks</span>
            </button>
          </div>

          {/* Interactive Tab Viewport */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B1020] border border-white/10 p-6 sm:p-8">
            {activeTab === 'traces' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="font-mono text-xs text-cyan-300 font-semibold">
                    Trace ID: 7f3b890a-11ce-492a-8c3b-18a7f019c0de
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Total Duration: 48.2ms</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>1. edge-ingress-gateway (HTTP GET /orders)</span>
                      <span className="text-cyan-300">48.2ms (100%)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-cyan-500 h-full rounded-full w-full" />
                    </div>
                  </div>

                  <div className="pl-4">
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>2. order-management-svc (Auth + Validation)</span>
                      <span className="text-indigo-400">22.4ms (46%)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full rounded-full w-[46%]" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>3. postgres-read-replica (SELECT * FROM orders)</span>
                      <span className="text-emerald-400">9.1ms (19%)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full w-[19%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'incidents' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-cyan-300 font-bold">
                      AI Incident Investigation Completed
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Identified transient database connection starvation on node <code className="text-cyan-400">pg-worker-03</code> correlated with deployment commit <code className="text-cyan-400">#4f992a</code> (PR #142: pool size configuration change).
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#0E1528] border border-white/5">
                    <span className="text-slate-400">Recommended Remediation:</span>
                    <p className="text-white mt-1">Revert PR #142 or bump max_connections to 400.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0E1528] border border-white/5">
                    <span className="text-slate-400">Estimated Impact:</span>
                    <p className="text-emerald-400 mt-1">Zero downtime, resolved in 3 seconds.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'runbooks' && (
              <div className="space-y-3 font-mono text-xs animate-fadeIn">
                <div className="p-3 rounded-xl bg-[#060A14] border border-white/10 text-slate-300">
                  <span className="text-cyan-400 font-bold">$</span> apexflow runbook execute --target=redis-cache-flush --cluster=prod-eu
                </div>
                <div className="p-3 rounded-lg bg-[#0E1528] border border-white/5 space-y-1.5 text-[11px]">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Runbook verified against active cluster credentials</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Graceful cache warm-up initiated across 4 nodes</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Latency restored to 14ms baseline</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Pricing Cards Section */}
      <section id="pricing" className="py-24 relative bg-[#090D18] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Predictable Plans for Modern Engineering
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              No hidden egress penalties. No surprise per-seat pricing. Scale telemetry with confidence.
            </p>

            {/* Billing Frequency Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-[#0E1528] border border-white/10 mt-4">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  !annualBilling ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  annualBilling ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-400/20 text-emerald-300 font-bold">
                  SAVE 20%
                </span>
              </button>
            </div>
          </InView>

          {/* 3 Pricing Cards Grid with Tilt & Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, idx) => (
              <InView
                key={tier.id}
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Tilt
                  rotationFactor={5}
                  className={`h-full rounded-2xl p-8 flex flex-col justify-between transition-all group relative overflow-hidden ${
                    tier.popular
                      ? 'bg-[#0E172F] border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20'
                      : 'bg-[#0B1020] border border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  <Spotlight className="from-cyan-500/20 via-transparent to-transparent" size={260} />

                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                      {tier.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white">
                        ${annualBilling ? tier.priceAnnual : tier.priceMonthly}
                      </span>
                      <span className="text-xs font-mono text-slate-400">/month</span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-6 border-t border-white/10 text-xs">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Included Features:
                      </div>
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan CTA */}
                  <div className="pt-8 mt-8">
                    <button
                      onClick={() => {
                        setSelectedPlan(tier.name);
                        setTrialModalOpen(true);
                      }}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        tier.popular
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20'
                          : 'bg-[#141F38] hover:bg-[#1A294C] text-white border border-white/10 hover:border-cyan-500/40'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Tilt>
              </InView>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section id="faq" className="py-24 relative bg-[#070A12] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Technical Due Diligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Everything engineering leaders ask regarding security, overhead, and implementation timelines.
            </p>
          </InView>

          {/* Accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#0B1020] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Trial Signup Modal */}
      {trialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0B1122] border border-cyan-500/40 shadow-2xl p-6 sm:p-8">
            
            <button
              onClick={resetTrial}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!signupSuccess ? (
              <form onSubmit={handleSignup} className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Interactive Front-End Demo</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Start Your 14-Day Free Trial
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Selected Plan: <span className="text-cyan-300 font-semibold">{selectedPlan}</span>. No credit card required.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B16] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Organization Name</label>
                  <input
                    type="text"
                    defaultValue="Acme Cloud Technologies"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B16] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div className="p-3 rounded-lg bg-[#0E1528] border border-white/5 text-[11px] text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Instant sandbox cluster provisioned in 30 seconds</span>
                  </div>
                  <p>Includes complete OTLP collector endpoint and access keys.</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  Activate Demo Account
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Trial Workspace Ready</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    This is an interactive concept demo. Your simulated cluster has been provisioned:
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070B16] border border-cyan-500/30 text-left font-mono text-xs space-y-1.5">
                  <div className="text-slate-400 text-[10px]">INGEST ENDPOINT:</div>
                  <div className="text-cyan-300 font-bold truncate">otlp.eu-central.apexflow.concept:4317</div>
                  <div className="text-slate-400 text-[10px] pt-1">API TOKEN:</div>
                  <div className="text-emerald-400 font-bold truncate">af_live_998a4bce9011_demo</div>
                </div>

                <button
                  onClick={resetTrial}
                  className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all"
                >
                  Close Demo Modal
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 bg-[#04060B] border-t border-white/5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-white block">ApexFlow Telemetry Platform</span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Concept project created by Vaibhav Sonkusare for demonstration purposes only.
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">Top</a>
            <a href="#features" className="hover:text-cyan-300 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-cyan-300 transition-colors">Pricing</a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-cyan-400 hover:underline"
            >
              ← Back to Main Portfolio
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
