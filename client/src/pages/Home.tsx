import { useState } from "react";
import { TRANSLATIONS } from "@/const";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  ArrowRight, 
  Globe, 
  Menu, 
  X, 
  Check, 
  Calendar, 
  Activity, 
  ChevronRight,
  Heart,
  Eye,
  Brain,
  Sparkles
} from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"de" | "en">("de");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"core" | "advanced" | "royal">("advanced");
  const [formData, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleLanguageToggle = () => {
    setLang(lang === "de" ? "en" : "de");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(lang === "de" ? "Bitte füllen Sie alle Pflichtfelder aus." : "Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success(t.contact.success);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground font-sans transition-colors duration-300">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="container mx-auto h-20 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663217967817/GtzZpAt8haA3Ykn9NJsENN/boe_logo-YQZ43LPjNd5jibcifWHmmp.webp" 
              alt="B.O.E Logo" 
              className="h-10 w-10 object-contain invert dark:invert-0"
            />
            <div className="hidden sm:flex flex-col whitespace-nowrap">
              <span className="font-serif text-base font-semibold tracking-wider uppercase">Body of Evidence</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Drs. Bessard • Vienna</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest">
            <button onClick={() => scrollToSection("concept")} className="hover:text-accent transition-colors duration-200">{t.nav.concept}</button>
            <button onClick={() => scrollToSection("assessments")} className="hover:text-accent transition-colors duration-200">{t.nav.assessments}</button>
            <button onClick={() => scrollToSection("timeline")} className="hover:text-accent transition-colors duration-200">{t.nav.timeline}</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-accent transition-colors duration-200">{t.nav.about}</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-accent transition-colors duration-200">{t.nav.contact}</button>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={handleLanguageToggle} 
              className="flex items-center space-x-1.5 text-xs uppercase tracking-widest border border-border px-3 py-1.5 hover:bg-secondary transition-all duration-200"
            >
              <Globe className="h-3 w-3" />
              <span>{t.nav.language}</span>
            </button>
            <Button 
              variant="default" 
              onClick={() => scrollToSection("contact")}
              className="text-xs uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 px-6 py-5"
            >
              {t.hero.cta_primary}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={handleLanguageToggle} 
              className="text-xs uppercase tracking-widest border border-border px-2 py-1"
            >
              {t.nav.language}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-6 text-xl uppercase tracking-widest font-serif">
            <button onClick={() => scrollToSection("concept")} className="text-left py-2 border-b border-border">{t.nav.concept}</button>
            <button onClick={() => scrollToSection("assessments")} className="text-left py-2 border-b border-border">{t.nav.assessments}</button>
            <button onClick={() => scrollToSection("timeline")} className="text-left py-2 border-b border-border">{t.nav.timeline}</button>
            <button onClick={() => scrollToSection("about")} className="text-left py-2 border-b border-border">{t.nav.about}</button>
            <button onClick={() => scrollToSection("contact")} className="text-left py-2 border-b border-border">{t.nav.contact}</button>
          </nav>
          <div className="pb-12">
            <Button 
              variant="default" 
              onClick={() => scrollToSection("contact")}
              className="w-full text-xs uppercase tracking-widest py-6 bg-foreground text-background"
            >
              {t.hero.cta_primary}
            </Button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663217967817/GtzZpAt8haA3Ykn9NJsENN/hero_medical-etCx6QY5goRY4bmQopxAc2.webp" 
            alt="Medical background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        
        <div className="container mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">
          <div className="lg:col-span-7 flex flex-col space-y-8 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              {t.hero.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight text-foreground">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Button 
                variant="default" 
                onClick={() => scrollToSection("contact")}
                className="text-xs uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 px-8 py-6 transition-all duration-200"
              >
                {t.hero.cta_primary}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("concept")}
                className="text-xs uppercase tracking-widest border border-border text-foreground hover:bg-secondary px-8 py-6 transition-all duration-200"
              >
                {t.hero.cta_secondary}
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2 cursor-pointer" onClick={() => scrollToSection("concept")}>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="h-12 w-[1px] bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-4 bg-foreground animate-bounce" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / CONCEPT SECTION */}
      <section id="concept" className="py-32 border-b border-border relative bg-background transition-colors duration-300">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column - Text */}
            <div className="lg:col-span-6 flex flex-col space-y-8">
              <div className="flex flex-col space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{t.concept.subtitle}</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">{t.concept.title}</h2>
              </div>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                {t.concept.p1}
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {t.concept.p2}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="flex flex-col">
                  <span className="text-4xl font-serif font-light text-foreground">{t.concept.stat1_num}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.concept.stat1_text}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif font-light text-foreground">{t.concept.stat2_num}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.concept.stat2_text}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif font-light text-foreground">{t.concept.stat3_num}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.concept.stat3_text}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Luxury Interior Image */}
            <div className="lg:col-span-6 relative aspect-video lg:aspect-square overflow-hidden bg-secondary">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663217967817/GtzZpAt8haA3Ykn9NJsENN/rudolfinerhaus_interior-nSX7n6KbyHjJhhQKUZLcTz.webp" 
                alt="Rudolfinerhaus Suite" 
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm p-4 border border-border">
                <p className="text-xs uppercase tracking-widest text-foreground font-medium">Rudolfinerhaus Privatklinik Wien</p>
                <p className="text-[10px] text-muted-foreground mt-1">Exklusive Privat-Suite & Diagnostikzentrum</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ASSESSMENTS / PACKAGES SECTION */}
      <section id="assessments" className="py-32 bg-secondary/30 border-b border-border transition-colors duration-300">
        <div className="container mx-auto">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{t.assessments.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">{t.assessments.title}</h2>
            <div className="h-[1px] w-20 bg-border mt-4" />
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex border border-border p-1 bg-background">
              <button 
                onClick={() => setActiveTab("core")}
                className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-200 ${activeTab === "core" ? "bg-foreground text-background font-medium" : "hover:text-accent"}`}
              >
                {t.assessments.core.title}
              </button>
              <button 
                onClick={() => setActiveTab("advanced")}
                className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-200 ${activeTab === "advanced" ? "bg-foreground text-background font-medium" : "hover:text-accent"}`}
              >
                {t.assessments.advanced.title}
              </button>
              <button 
                onClick={() => setActiveTab("royal")}
                className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-200 ${activeTab === "royal" ? "bg-foreground text-background font-medium" : "hover:text-accent"}`}
              >
                {t.assessments.royal.title}
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start bg-background border border-border p-8 lg:p-16 animate-in fade-in duration-300">
            
            {/* Left Column: Title, Price, Description */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {activeTab === "core" && t.assessments.core.subtitle}
                {activeTab === "advanced" && t.assessments.advanced.subtitle}
                {activeTab === "royal" && t.assessments.royal.subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                {activeTab === "core" && t.assessments.core.title}
                {activeTab === "advanced" && t.assessments.advanced.title}
                {activeTab === "royal" && t.assessments.royal.title}
              </h3>
              
              {/* Price Tag */}
              <div className="py-6 border-y border-border my-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl md:text-6xl font-serif font-light text-foreground">
                    {activeTab === "core" && `${t.assessments.currency} ${t.assessments.core.price}`}
                    {activeTab === "advanced" && `${t.assessments.currency} ${t.assessments.advanced.price}`}
                    {activeTab === "royal" && t.assessments.royal.price}
                  </span>
                  {activeTab !== "royal" && (
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{t.assessments.per_patient}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {activeTab === "royal" ? "Individuelle Kalkulation nach Logistik und Aufwand" : "Inklusive aller Facharzthonorare und Suite-Miete"}
                </p>
              </div>

              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {activeTab === "core" && t.assessments.core.desc}
                {activeTab === "advanced" && t.assessments.advanced.desc}
                {activeTab === "royal" && t.assessments.royal.desc}
              </p>

              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full lg:w-auto text-xs uppercase tracking-widest py-6 bg-foreground text-background mt-6"
              >
                {t.assessments.request}
              </Button>
            </div>

            {/* Right Column: Features List */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-16">
              <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-6">Leistungsumfang & Medizinische Tiefe</h4>
              <ul className="space-y-4">
                {(activeTab === "core" ? t.assessments.core.features : activeTab === "advanced" ? t.assessments.advanced.features : t.assessments.royal.features).map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80 font-light">
                    <Check className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="timeline" className="py-32 border-b border-border bg-background transition-colors duration-300">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left sticky column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{t.timeline.subtitle}</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">{t.timeline.title}</h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {t.timeline.desc}
              </p>
            </div>

            {/* Right timeline steps */}
            <div className="lg:col-span-8 border-l border-border pl-8 lg:pl-16 space-y-16 relative">
              {t.timeline.steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Dot indicator */}
                  <div className="absolute -left-[41px] lg:-left-[73px] top-1.5 bg-background border border-border h-4 w-4 rounded-full group-hover:bg-foreground transition-all duration-300" />
                  
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs uppercase tracking-widest font-mono font-semibold text-muted-foreground">{step.time} Uhr</span>
                    <h3 className="text-xl font-serif font-medium text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xl">{step.desc}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT US / DOCTORS PORTRAIT */}
      <section id="about" className="py-32 bg-secondary/30 border-b border-border transition-colors duration-300">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Professional Editorial Portrait */}
            <div className="lg:col-span-6 relative aspect-[3/2] lg:aspect-square overflow-hidden bg-secondary">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663217967817/GtzZpAt8haA3Ykn9NJsENN/bessard_portrait-eT2GXHqPS4w6wy9bYJvNPk.webp" 
                alt="Dr. Patricia Bessard & Dr. Georg Bessard" 
                className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm p-4 border border-border">
                <p className="text-xs uppercase tracking-widest text-foreground font-medium">Dr. Patricia & Dr. Georg Bessard</p>
                <p className="text-[10px] text-muted-foreground mt-1">Ärztliche Leitung & Gründer</p>
              </div>
            </div>

            {/* Right: Text / Biography */}
            <div className="lg:col-span-6 flex flex-col space-y-8">
              <div className="flex flex-col space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{t.about.subtitle}</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">{t.about.title}</h2>
              </div>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {t.about.p2}
              </p>
              <div className="pt-6 border-t border-border">
                <span className="font-serif text-xl italic text-foreground">{t.about.sig}</span>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Wien, Österreich</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT / CALL TO ACTION */}
      <section id="contact" className="py-32 bg-background transition-colors duration-300">
        <div className="container mx-auto max-w-4xl">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{t.contact.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">{t.contact.title}</h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-lg mt-2">
              {t.contact.desc}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/10 border border-border p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{t.contact.name} *</label>
                <Input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setForm({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-foreground transition-all duration-200 py-6"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{t.contact.email} *</label>
                <Input 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setForm({ ...formData, email: e.target.value })}
                  className="bg-background border-border focus:border-foreground transition-all duration-200 py-6"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{t.contact.phone} *</label>
              <Input 
                type="tel" 
                value={formData.phone} 
                onChange={(e) => setForm({ ...formData, phone: e.target.value })}
                className="bg-background border-border focus:border-foreground transition-all duration-200 py-6"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{t.contact.message}</label>
              <Textarea 
                rows={4}
                value={formData.message} 
                onChange={(e) => setForm({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-foreground transition-all duration-200"
              />
            </div>

            <Button 
              type="submit" 
              disabled={sending}
              className="w-full text-xs uppercase tracking-widest py-6 bg-foreground text-background"
            >
              {sending ? t.contact.sending : t.contact.send}
            </Button>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary/40 border-t border-border py-16 transition-colors duration-300">
        <div className="container mx-auto flex flex-col items-center text-center space-y-8">
          
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663217967817/GtzZpAt8haA3Ykn9NJsENN/boe_logo-YQZ43LPjNd5jibcifWHmmp.webp" 
            alt="B.O.E Logo" 
            className="h-12 w-12 object-contain invert dark:invert-0 opacity-80"
          />

          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-wider uppercase">Body of Evidence</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Drs. Bessard • Vienna</span>
          </div>

          <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
            {t.contact.imprint}
          </p>

          <div className="text-[10px] uppercase tracking-widest text-muted-foreground/60 pt-8 border-t border-border w-full">
            © {new Date().getFullYear()} Body of Evidence. All rights reserved. • Project Owner: Dr. Georg Bessard
          </div>

        </div>
      </footer>

    </div>
  );
}
