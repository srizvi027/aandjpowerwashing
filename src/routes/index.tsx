import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, Instagram, Menu, X, ArrowRight, CheckCircle2, Star,
  Home, Building2, Sparkles, SprayCan, Clock, ShieldCheck, Wrench, BadgeCheck, DollarSign, Droplets,
} from "lucide-react";
import { toast, Toaster } from "sonner";

import { Loader } from "@/components/Loader";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

import logo from "@/assets/logo1.png";
import hero from "@/assets/hero.jpg";
import beforeDriveway from "@/assets/before-driveway.jpg";
import afterDriveway from "@/assets/after-driveway.jpg";
import beforeHouse from "@/assets/before-house.jpg";
import afterHouse from "@/assets/after-house.jpg";
import beforeSidewalk from "@/assets/before-sidewalk.jpg";
import afterSidewalk from "@/assets/after-sidewalk.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#quote", label: "Quote" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-black/80 backdrop-blur-xl border-b border-[#0588C6]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="A&J Power Washing Services" className="header-logo" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-white/80 hover:text-[#0588C6] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:8055149050" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#0588C6]">
            <Phone className="h-4 w-4" /> (805) 514-9050
          </a>
          <a href="#quote" className="px-5 py-2.5 brand-gradient text-white text-sm font-bold rounded-md hover:opacity-90 transition shadow-[0_0_24px_rgba(5,136,198,0.45)]">
            FREE QUOTE
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#0588C6]/20 bg-black px-4 py-4 space-y-3">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-white/90 font-medium py-2">
              {n.label}
            </a>
          ))}
          <a href="tel:8055149050" className="flex items-center gap-2 text-[#0588C6] font-semibold pt-2 border-t border-white/10">
            <Phone className="h-4 w-4" /> (805) 514-9050
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Mist particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl animate-mist"
            style={{
              width: `${200 + i * 60}px`,
              height: `${200 + i * 60}px`,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 80}%`,
              background: i % 2 ? "rgba(5,136,198,0.18)" : "rgba(7,86,127,0.18)",
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0588C6]/40 bg-[#0588C6]/10 text-[11px] tracking-[0.25em] font-semibold text-[#7ed3ff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0588C6] animate-pulse" />
            LOCAL · FAMILY OWNED · LICENSED
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95]">
            <span className="steel-text-gradient">PROFESSIONAL</span>
            <br />
            <span className="brand-text-gradient">POWER WASHING</span>
            <br />
            <span className="text-white">THAT RESTORES & PROTECTS.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Residential and commercial power washing services delivering spotless results with
            professional-grade equipment and dependable service. Built on quality, speed,
            and the trust of our community.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="group inline-flex items-center gap-2 px-6 py-4 brand-gradient text-white font-bold rounded-lg shadow-[0_0_30px_rgba(5,136,198,0.45)] hover:shadow-[0_0_44px_rgba(5,136,198,0.7)] transition">
              GET FREE QUOTE <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="tel:8055149050" className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold rounded-lg transition">
              <Phone className="h-4 w-4" /> CALL NOW
            </a>
            <a href="#results" className="inline-flex items-center gap-2 px-6 py-4 text-white/80 hover:text-[#0588C6] font-bold transition">
              VIEW RESULTS <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {["Residential", "Commercial", "Professional Equipment", "Reliable Service"].map(t => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="h-4 w-4 text-[#0588C6]" /> {t}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:8055149050" className="flex items-center gap-2 text-white/90 hover:text-[#0588C6]">
              <Phone className="h-4 w-4 text-[#0588C6]" />
              <span className="font-semibold">(805) 514-9050</span>
            </a>
            <span className="text-white/30 hidden sm:inline">•</span>
            <a href="tel:8056250511" className="flex items-center gap-2 text-white/90 hover:text-[#0588C6]">
              <Phone className="h-4 w-4 text-[#0588C6]" />
              <span className="font-semibold">(805) 625-0511</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Home, label: "Residential Power Washing" },
    { icon: Building2, label: "Commercial Cleaning" },
    { icon: Clock, label: "Fast Response Times" },
    { icon: Sparkles, label: "Professional Results" },
    { icon: ShieldCheck, label: "Fully Equipped & Insured" },
    { icon: BadgeCheck, label: "100% Satisfaction" },
  ];
  return (
    <section className="bg-brand-deep border-y border-[#0588C6]/20 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-3 px-8">
            <it.icon className="h-5 w-5 text-[#0588C6]" />
            <span className="text-sm md:text-base font-semibold tracking-wide text-white/85 uppercase">
              {it.label}
            </span>
            <span className="text-[#0588C6]/40 ml-8">/</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, sub, children }: { id?: string; eyebrow?: string; title: React.ReactNode; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-12 md:mb-16">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] font-bold text-[#0588C6] mb-4">
              <Droplets className="h-3.5 w-3.5" /> {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.05]">
            {title}
          </h2>
          {sub && <p className="mt-4 text-white/65 text-base sm:text-lg leading-relaxed">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Home, title: "Residential Power Washing", items: ["Driveways", "Sidewalks", "Patios", "House exteriors"] },
    { icon: Building2, title: "Commercial Power Washing", items: ["Storefront cleaning", "Parking lots", "Commercial buildings", "Walkways"] },
    { icon: SprayCan, title: "Surface Restoration", items: ["Dirt removal", "Mildew removal", "Stain cleaning", "Deep pressure cleaning"] },
    { icon: Wrench, title: "Exterior Cleaning", items: ["Walls", "Fences", "Decks", "Concrete surfaces"] },
  ];
  return (
    <Section id="services" eyebrow="WHAT WE CLEAN" title={<>Powerful services <span className="brand-text-gradient">built for every surface.</span></>} sub="From driveways to storefronts — we restore the surfaces that define your property's first impression.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl p-6 glossy border border-white/5 hover:border-[#0588C6]/50 transition"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#0588C6]/10 blur-3xl group-hover:bg-[#0588C6]/25 transition" />
            <div className="relative">
              <div className="h-12 w-12 grid place-items-center rounded-xl brand-gradient text-white shadow-[0_0_24px_rgba(5,136,198,0.4)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="h-4 w-4 text-[#0588C6] shrink-0" /> {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-px brand-gradient opacity-0 group-hover:opacity-100 transition" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Results() {
  const pairs = [
    { before: beforeHouse, after: afterHouse, label: "House Exterior Restoration" },
    { before: beforeDriveway, after: afterDriveway, label: "Driveway Deep Clean" },
    { before: beforeSidewalk, after: afterSidewalk, label: "Sidewalk Stain Removal" },
  ];
  return (
    <section id="results" className="relative py-20 md:py-28 bg-[#020000] border-y border-[#0588C6]/20">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] font-bold text-[#0588C6] mb-4">
            <Droplets className="h-3.5 w-3.5" /> TRANSFORMATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            See <span className="brand-text-gradient">The Difference.</span>
          </h2>
          <p className="mt-4 text-white/65 text-base sm:text-lg">Drag the slider on each photo to reveal the transformation. Real jobs. Real results.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairs.map(p => (
            <BeforeAfterSlider key={p.label} before={p.before} after={p.after} label={p.label} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#quote" className="inline-flex items-center gap-2 px-7 py-4 brand-gradient text-white font-bold rounded-lg shadow-[0_0_30px_rgba(5,136,198,0.45)]">
            REQUEST YOUR TRANSFORMATION <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="ABOUT A&J" title={<>A local family business <span className="brand-text-gradient">built on reliability.</span></>}>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 text-white/75 text-base sm:text-lg leading-relaxed">
          <p>
            A&J Power Washing Services specializes in residential and commercial exterior cleaning
            solutions designed to restore curb appeal and protect surfaces. With professional-grade
            equipment and attention to detail, every project is completed with precision and care.
          </p>
          <p>
            We're locally owned and operated — proud of every driveway brightened, every storefront
            renewed, and every customer we've earned. When you call, you talk directly to the people
            doing the work.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { k: "100%", v: "Satisfaction" },
              { k: "24h", v: "Quote Response" },
              { k: "2", v: "Local Owners" },
            ].map(s => (
              <div key={s.v} className="rounded-xl border border-[#0588C6]/30 bg-[#07101a] p-4 text-center">
                <div className="text-2xl font-extrabold brand-text-gradient">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { name: "Jovanny Figueroa", role: "Co-Owner", phone: "(805) 514-9050", tel: "8055149050" },
            { name: "Adrian Figueroa", role: "Co-Owner", phone: "(805) 625-0511", tel: "8056250511" },
          ].map(o => (
            <div key={o.name} className="relative overflow-hidden rounded-2xl p-6 glossy border border-white/5">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#0588C6]/15 blur-2xl" />
              <div className="relative">
                <div className="h-14 w-14 rounded-full brand-gradient grid place-items-center text-white text-xl font-extrabold shadow-[0_0_20px_rgba(5,136,198,0.5)]">
                  {o.name.split(" ").map(p => p[0]).join("")}
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{o.name}</h3>
                <p className="text-sm text-[#7ed3ff]">{o.role}</p>
                <a href={`tel:${o.tel}`} className="mt-4 inline-flex items-center gap-2 text-white hover:text-[#0588C6] font-semibold">
                  <Phone className="h-4 w-4 text-[#0588C6]" /> {o.phone}
                </a>
              </div>
            </div>
          ))}
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
            <a href="mailto:ajpowerws@gmail.com" className="flex-1 flex items-center gap-3 rounded-xl border border-[#0588C6]/30 bg-[#07101a] p-4 hover:border-[#0588C6] transition">
              <Mail className="h-5 w-5 text-[#0588C6]" />
              <div>
                <div className="text-xs text-white/55 uppercase tracking-wider">Email</div>
                <div className="text-white font-semibold text-sm">ajpowerws@gmail.com</div>
              </div>
            </a>
            <a href="https://instagram.com/aj_powerwashingservices" target="_blank" rel="noreferrer" className="flex-1 flex items-center gap-3 rounded-xl border border-[#0588C6]/30 bg-[#07101a] p-4 hover:border-[#0588C6] transition">
              <Instagram className="h-5 w-5 text-[#0588C6]" />
              <div>
                <div className="text-xs text-white/55 uppercase tracking-wider">Instagram</div>
                <div className="text-white font-semibold text-sm">@aj_powerwashingservices</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyUs() {
  const items = [
    { icon: Wrench, t: "Professional Equipment", d: "Commercial-grade pressure washers and cleaning solutions." },
    { icon: Clock, t: "Reliable Scheduling", d: "On-time arrivals and clear communication from quote to completion." },
    { icon: Building2, t: "Residential & Commercial", d: "Trusted for homes, storefronts, and large commercial properties." },
    { icon: Sparkles, t: "Attention To Detail", d: "Every corner, edge, and surface cleaned with precision." },
    { icon: DollarSign, t: "Affordable Pricing", d: "Fair, upfront quotes — no surprises, no hidden fees." },
    { icon: ShieldCheck, t: "Local & Trustworthy", d: "Family-owned and accountable to the community we serve." },
  ];
  return (
    <Section eyebrow="WHY CHOOSE US" title={<>Built for the job. <span className="brand-text-gradient">Backed by trust.</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl p-6 border border-white/5 glossy hover:border-[#0588C6]/40 transition group"
          >
            <div className="h-11 w-11 rounded-lg bg-[#0588C6]/15 grid place-items-center text-[#0588C6] group-hover:bg-[#0588C6] group-hover:text-white transition">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-white">{it.t}</h3>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">{it.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Reviews() {
  const reviews = [
    { n: "Maria S.", r: "Our driveway looks brand new. Jovanny and Adrian were on time, professional, and the price was fair. Highly recommend!", role: "Homeowner" },
    { n: "Carlos R.", r: "Booked them for our storefront. They handled it after hours so we never lost business. Sidewalks have never looked cleaner.", role: "Business Owner" },
    { n: "Jennifer P.", r: "The transformation on our patio was unbelievable. Years of grime gone in one visit. Will absolutely call them again.", role: "Homeowner" },
    { n: "Dan M.", r: "Quick quote, easy booking, fantastic results. These guys take pride in their work — it shows.", role: "Property Manager" },
  ];
  return (
    <Section id="reviews" eyebrow="REVIEWS" title={<>What customers <span className="brand-text-gradient">are saying.</span></>}>
      <div className="grid md:grid-cols-2 gap-5">
        {reviews.map(r => (
          <div key={r.n} className="relative rounded-2xl p-6 glossy border border-white/5">
            <div className="flex items-center gap-1 text-[#0588C6]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 text-white/85 leading-relaxed">"{r.r}"</p>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">{r.n}</div>
                <div className="text-xs text-white/55">{r.role}</div>
              </div>
              <div className="text-[10px] tracking-widest font-bold text-[#0588C6]">VERIFIED</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function QuoteSection() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    if (!name || name.length > 100) return toast.error("Please enter your name.");
    if (!phone || phone.length > 30) return toast.error("Please enter a valid phone number.");

    setSubmitting(true);
    const body = encodeURIComponent(
      `New Quote Request:\n\nName: ${name}\nPhone: ${phone}\nService: ${fd.get("service")}\nProperty: ${fd.get("property")}\n\nMessage:\n${fd.get("message")}`
    );
    const subject = encodeURIComponent(`Quote Request — ${name}`);
    setTimeout(() => {
      window.location.href = `mailto:ajpowerws@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email — we'll respond within 24 hours!");
      form.reset();
      setSubmitting(false);
    }, 400);
  }

  return (
    <section id="quote" className="relative py-20 md:py-28 bg-gradient-to-b from-[#010305] to-black border-t border-[#0588C6]/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#0588C6]/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#07567F]/30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] font-bold text-[#0588C6] mb-4">
              <Droplets className="h-3.5 w-3.5" /> FREE QUOTE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.05]">
              Request Your <span className="brand-text-gradient">Free Quote Today.</span>
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Tell us about your project — we'll respond within 24 hours with a fair, upfront quote.
              Or pick up the phone and talk to an owner directly.
            </p>

            <div className="mt-8 space-y-3">
              <a href="tel:8055149050" className="flex items-center gap-4 p-4 rounded-xl border border-[#0588C6]/30 bg-black/40 hover:border-[#0588C6] transition">
                <div className="h-11 w-11 rounded-lg brand-gradient grid place-items-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/55 uppercase tracking-wider">Jovanny Figueroa</div>
                  <div className="text-white font-bold">(805) 514-9050</div>
                </div>
              </a>
              <a href="tel:8056250511" className="flex items-center gap-4 p-4 rounded-xl border border-[#0588C6]/30 bg-black/40 hover:border-[#0588C6] transition">
                <div className="h-11 w-11 rounded-lg brand-gradient grid place-items-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/55 uppercase tracking-wider">Adrian Figueroa</div>
                  <div className="text-white font-bold">(805) 625-0511</div>
                </div>
              </a>
              <a href="mailto:ajpowerws@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-[#0588C6]/30 bg-black/40 hover:border-[#0588C6] transition">
                <div className="h-11 w-11 rounded-lg bg-white/5 grid place-items-center">
                  <Mail className="h-5 w-5 text-[#0588C6]" />
                </div>
                <div>
                  <div className="text-xs text-white/55 uppercase tracking-wider">Email</div>
                  <div className="text-white font-bold">ajpowerws@gmail.com</div>
                </div>
              </a>
              <a href="https://instagram.com/aj_powerwashingservices" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-[#0588C6]/30 bg-black/40 hover:border-[#0588C6] transition">
                <div className="h-11 w-11 rounded-lg bg-white/5 grid place-items-center">
                  <Instagram className="h-5 w-5 text-[#0588C6]" />
                </div>
                <div>
                  <div className="text-xs text-white/55 uppercase tracking-wider">Instagram</div>
                  <div className="text-white font-bold">@aj_powerwashingservices</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="relative rounded-2xl p-6 sm:p-8 bg-[#07101a]/90 backdrop-blur-xl border border-[#0588C6]/30 shadow-[0_0_60px_rgba(5,136,198,0.15)]">
            <h3 className="text-xl font-bold text-white">Get Your Free Quote</h3>
            <p className="text-sm text-white/55 mt-1">No obligation. We respond within 24 hours.</p>

            <div className="mt-6 space-y-4">
              <Field label="Name" name="name" required maxLength={100} placeholder="Your full name" />
              <Field label="Phone" name="phone" required type="tel" maxLength={30} placeholder="(805) 555-0000" />

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">Service Needed</label>
                <select name="service" required className="w-full bg-black/60 border border-[#0588C6]/30 rounded-lg px-4 py-3 text-white focus:border-[#0588C6] outline-none">
                  <option>Residential Power Washing</option>
                  <option>Commercial Power Washing</option>
                  <option>Driveway / Sidewalk</option>
                  <option>House / Building Exterior</option>
                  <option>Surface Restoration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">Property Type</label>
                <select name="property" required className="w-full bg-black/60 border border-[#0588C6]/30 rounded-lg px-4 py-3 text-white focus:border-[#0588C6] outline-none">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Multi-family</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">Message</label>
                <textarea name="message" rows={4} maxLength={1000} placeholder="Tell us about your project..." className="w-full bg-black/60 border border-[#0588C6]/30 rounded-lg px-4 py-3 text-white focus:border-[#0588C6] outline-none resize-none" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button type="submit" disabled={submitting} className="flex-1 px-6 py-4 brand-gradient text-white font-bold rounded-lg shadow-[0_0_30px_rgba(5,136,198,0.45)] hover:opacity-95 transition disabled:opacity-50">
                  {submitting ? "SENDING..." : "GET FREE QUOTE"}
                </button>
                <a href="tel:8055149050" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold rounded-lg transition">
                  <Phone className="h-4 w-4" /> CALL NOW
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">{label}</label>
      <input {...props} className="w-full bg-black/60 border border-[#0588C6]/30 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#0588C6] outline-none" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-[#0588C6]/20 pt-16 pb-28 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logo} alt="A&J Power Washing Services" className="h-14 w-auto" />
            <p className="mt-4 text-white/65 max-w-md text-sm leading-relaxed">
              Professional residential and commercial power washing services.
              Local, family-owned, and committed to restoring the surfaces that matter to you.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0588C6] mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {NAV.map(n => (
                <li key={n.href}><a href={n.href} className="text-white/70 hover:text-[#0588C6]">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0588C6] mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="tel:8055149050" className="hover:text-[#0588C6]">📞 (805) 514-9050</a></li>
              <li><a href="tel:8056250511" className="hover:text-[#0588C6]">📞 (805) 625-0511</a></li>
              <li><a href="mailto:ajpowerws@gmail.com" className="hover:text-[#0588C6]">✉ ajpowerws@gmail.com</a></li>
              <li><a href="https://instagram.com/aj_powerwashingservices" target="_blank" rel="noreferrer" className="hover:text-[#0588C6]">@aj_powerwashingservices</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/45">
          <div>© {new Date().getFullYear()} A&J Power Washing Services. All rights reserved.</div>
          <div>Locally owned & operated.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-black text-white">
      <Loader />
      <Toaster theme="dark" position="top-center" richColors />
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Results />
      <About />
      <WhyUs />
      <Reviews />
      <QuoteSection />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
