"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  Sun,
  Moon,
  Scale,
  FileText,
  Shield,
  User,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Briefcase,
  Lock,
  Gavel,
  Linkedin,
  Facebook,
  Menu,
  X,
  ArrowRight,
  Clock,
  CheckCircle2,
  GraduationCap,
  Landmark
} from "lucide-react";

/* ─────────────────────────────────────────────
   Dicționar de traduceri (RO / EN)
───────────────────────────────────────────── */
const translations = {
  ro: {
    nav: {
      home: "Acasă",
      services: "Servicii",
      about: "Despre Mine",
      contact: "Contact",
      cta: "Programează Consultația",
    },
    hero: {
      badge: "Consultanță Strategică de Business",
      title: "Siguranță și Claritate pentru Afacerea sau Proiectul Tău",
      subtitle:
        "Ofer soluții specializate, de la structurarea acordurilor comerciale la consultanță strategică pentru startup-uri și IMM-uri. Integritate, confidențialitate și rezultate concrete.",
      cta: "Programează o Consultație",
      ctaSecondary: "Descoperă Serviciile",
      stats: [
        { value: "20+", label: "Ani experiență" },
        { value: "200+", label: "Clienți mulțumiți" },
        { value: "98%", label: "Rată de succes" },
      ],
    },
    services: {
      title: "Servicii pentru Afaceri",
      subtitle:
        "Soluții complete adaptate nevoilor tale, fie că ești antreprenor, freelancer sau reprezinți o companie.",
      items: [
        {
          title: "Structurare Acorduri & Parteneriate",
          description:
            "Acorduri comerciale, de prestări servicii, parteneriate și acorduri de confidențialitate — redactate cu precizie profesională și claritate.",
        },
        {
          title: "Consultanță Business & Startups",
          description:
            "Ghidare strategică pentru înființarea firmei, structurarea acționariatului, termeni & condiții și conformitate operațională.",
        },
        {
          title: "Mentorat pentru admiterea în profesiile juridice",
          description:
            "Pregatire teoretică pentru admiterea în profesia de avocat, magistrat, grefier. Grile și spețe specifice.",
        },
        {
          title: "Soluționarea Disputelor Comerciale",
          description:
            "Mediere, negociere și suport în dispute comerciale, optimizarea recuperării creanțelor și soluționarea conflictelor operaționale.",
        },
      ],
    },
    about: {
      title: "Despre Mine",
      subtitle: "Partenerul tău de încredere în business",
      name: "Claudia Pencea",
      role: "Consultant de Business",
      bio1:
        "Cu peste 20 ani de experiență în management și consultanță pentru afaceri, am dedicat cariera mea protejării intereselor clienților prin soluții strategice clare, eficiente și adaptate contextului real al fiecărui caz.",
      bio2:
        "Cred cu tărie în abordarea personalizată: fiecare client primește atenție deplină, explicații accesibile și strategii eficiente aliniate obiectivelor sale de business.",
      values: [
        {
          title: "Integritate",
          description: "Transparență totală în fiecare etapă a colaborării.",
        },
        {
          title: "Confidențialitate",
          description: "Protecția datelor și a informațiilor sensibile este prioritară.",
        },
        {
          title: "Abordare Personalizată",
          description: "Soluții adaptate, nu șabloane generice.",
        },
      ],
    },
    contact: {
      title: "Contactează-mă",
      subtitle:
        "Completează formularul sau folosește datele de contact de mai jos. Răspund în maxim 24 de ore.",
      form: {
        name: "Nume complet",
        namePlaceholder: "Ex: Ion Popescu",
        email: "Adresă Email",
        emailPlaceholder: "exemplu@email.com",
        phone: "Telefon",
        phonePlaceholder: "+40 7XX XXX XXX",
        message: "Scurtă descriere a situației",
        messagePlaceholder:
          "Descrie pe scurt situația profesională sau întrebarea ta...",
        submit: "Trimite Cerere",
        success: "Cererea a fost trimisă! Te voi contacta în curând.",
      },
      info: {
        title: "Date de Contact",
        address: "Str. Aviatorilor nr. 15, Et. 3, București, Sector 1",
        phone: "+40 728 118 356",
        email: "claudiapencea@yahoo.com",
        hours: "Luni – Vineri: 09:00 – 18:00",
      },
    },
    footer: {
      rights: "© 2026 Claudia Pencea. Toate drepturile rezervate.",
      disclaimer:
        "Notă Informativă: Informațiile prezentate pe acest site au caracter informativ general și nu constituie consultanță personalizată. Contactarea consultantului nu creează o relație profesională formală până la semnarea unui acord de colaborare. Pentru situații specifice, solicitați o consultație individuală.",
      social: "Urmărește-mă",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Me",
      contact: "Contact",
      cta: "Book a Consultation",
    },
    hero: {
      badge: "Strategic Business Consulting",
      title: "Safety and Clarity for Your Business or Project",
      subtitle:
        "I provide tailored solutions — from structuring commercial agreements to strategic consulting for startups and SMEs. Integrity, confidentiality, and tangible results.",
      cta: "Schedule a Consultation",
      ctaSecondary: "Explore Services",
      stats: [
        { value: "20+", label: "Years of experience" },
        { value: "200+", label: "Satisfied clients" },
        { value: "98%", label: "Success rate" },
      ],
    },
    services: {
      title: "Business Services",
      subtitle:
        "Comprehensive solutions tailored to your needs, whether you are an entrepreneur, freelancer, or represent a company.",
      items: [
        {
          title: "Structuring Agreements & Partnerships",
          description:
            "Commercial agreements, service agreements, partnerships, and NDAs — drafted with professional precision and clarity.",
        },
        {
          title: "Business & Startup Consulting",
          description:
            "Strategic guidance for company formation, shareholder structuring, terms & conditions, and operational compliance.",
        },
        {
          title: "Mentoring for admission to the legal professions",
          description:
            "Theoretical preparation for admission to the profession of lawyer, magistrate, clerk. Specific scales and cases.",
        },
        {
          title: "Commercial Dispute Resolution",
          description:
            "Mediation, negotiation, and support in commercial disputes, debt recovery optimization, and operational conflict resolution.",
        },
      ],
    },
    about: {
      title: "About Me",
      subtitle: "Your trusted business partner",
      name: "Claudia Pencea",
      role: "Business Consultant",
      bio1:
        "With over 20 years of experience in management and business consulting, I have dedicated my career to protecting clients' interests through clear, efficient strategic solutions tailored to each case's real context.",
      bio2:
        "I firmly believe in a personalized approach: every client receives full attention, accessible explanations, and effective strategies aligned with their business objectives.",
      values: [
        {
          title: "Integrity",
          description: "Full transparency at every stage of our collaboration.",
        },
        {
          title: "Confidentiality",
          description: "Protection of data and sensitive information is a priority.",
        },
        {
          title: "Personalized Approach",
          description: "Tailored solutions, not generic templates.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Fill out the form or use the contact details below. I respond within 24 hours.",
      form: {
        name: "Full Name",
        namePlaceholder: "E.g. John Smith",
        email: "Email Address",
        emailPlaceholder: "example@email.com",
        phone: "Phone",
        phonePlaceholder: "+40 7XX XXX XXX",
        message: "Brief situation description",
        messagePlaceholder:
          "Briefly describe your professional situation or question...",
        submit: "Submit Request",
        success: "Request sent! I will contact you shortly.",
      },
      info: {
        title: "Contact Details",
        address: "15 Aviatorilor St., Floor 3, Bucharest, Sector 1",
        phone: "+40 728 118 356",
        email: "claudiapencea@yahoo.com",
        hours: "Monday – Friday: 09:00 – 18:00",
      },
    },
    footer: {
      rights: "© 2026 Claudia Pencea. All rights reserved.",
      disclaimer:
        "Disclaimer: The information presented on this website is for general informational purposes only and does not constitute personalized advice. Contacting the consultant does not create a formal professional relationship until a collaboration agreement is signed. For specific situations, please request an individual consultation.",
      social: "Follow me",
    },
  },
} as const;

type Lang = "ro" | "en";
type Theme = "light" | "dark";

const serviceIcons = [FileText, Briefcase, GraduationCap, Gavel];
const valueIcons = [Shield, Lock, User];

const navLinks = [
  { id: "hero", key: "home" as const },
  { id: "services", key: "services" as const },
  { id: "about", key: "about" as const },
  { id: "contact", key: "contact" as const },
];

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("ro");
  const [theme, setTheme] = useState<Theme>("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-navy-900 transition-colors duration-300 dark:bg-navy-950 dark:text-slate-100 ${theme === "dark" ? "dark" : ""}`}
    >
      {/* ── Navbar ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md dark:border-navy-700 dark:bg-navy-950/95"
            : "border-b border-transparent bg-slate-50/80 backdrop-blur-sm dark:bg-navy-950/80"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="group flex items-center gap-2.5 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-gold-400 transition-colors group-hover:bg-navy-700 dark:bg-gold-500 dark:text-navy-950">
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight text-navy-900 dark:text-white">
                Claudia Pencea
              </p>
              <p className="text-xs text-navy-500 dark:text-slate-400">
                {lang === "ro" ? "Consultanță" : "Consulting"}
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium text-navy-600 transition-colors hover:text-gold-500 dark:text-slate-300 dark:hover:text-gold-400"
                >
                  {t.nav[link.key]}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen((v) => !v)}
                className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold uppercase text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-navy-700 dark:text-slate-300 dark:hover:border-gold-500 dark:hover:text-gold-400"
                aria-label="Select language"
              >
                {lang}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-28 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-navy-700 dark:bg-navy-900">
                  {(["ro", "en"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setLangDropdownOpen(false);
                      }}
                      className={`block w-full px-3 py-2 text-left text-sm transition-colors hover:bg-slate-50 dark:hover:bg-navy-800 ${
                        lang === l
                          ? "font-semibold text-gold-500"
                          : "text-navy-700 dark:text-slate-300"
                      }`}
                    >
                      {l === "ro" ? "Română" : "English"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-navy-700 dark:text-slate-300 dark:hover:border-gold-500 dark:hover:text-gold-400"
              aria-label={theme === "light" ? "Dark mode" : "Light mode"}
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            {/* Desktop CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden rounded-lg bg-navy-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 sm:block"
            >
              {t.nav.cta}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-navy-700 md:hidden dark:border-navy-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-navy-800 dark:bg-navy-950">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="block w-full py-2 text-left text-sm font-medium text-navy-700 dark:text-slate-300"
                  >
                    {t.nav[link.key]}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo("contact")}
                  className="mt-2 w-full rounded-lg bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white dark:bg-gold-500 dark:text-navy-950"
                >
                  {t.nav.cta}
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl dark:bg-gold-500/10" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-navy-800/5 blur-3xl dark:bg-navy-700/20" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
              <Scale className="h-3.5 w-3.5" />
              {t.hero.badge}
            </span>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl dark:text-white">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600 dark:text-slate-400">
              {t.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-800/20 transition-all hover:bg-navy-700 hover:shadow-xl dark:bg-gold-500 dark:text-navy-950 dark:shadow-gold-500/20 dark:hover:bg-gold-400"
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-200 px-7 py-3.5 text-sm font-semibold text-navy-800 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-navy-700 dark:text-slate-200 dark:hover:border-gold-500 dark:hover:text-gold-400"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white/60 p-4 text-center backdrop-blur-sm sm:p-6 dark:border-navy-800 dark:bg-navy-900/60"
              >
                <p className="text-2xl font-bold text-navy-900 sm:text-3xl dark:text-gold-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-navy-500 sm:text-sm dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl dark:text-white">
              {t.services.title}
            </h2>
            <p className="mt-4 text-navy-600 dark:text-slate-400">
              {t.services.subtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {t.services.items.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-xl hover:shadow-navy-900/5 dark:border-navy-800 dark:bg-navy-900 dark:hover:border-gold-500/30 dark:hover:shadow-navy-950/50"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800/5 text-navy-800 transition-colors group-hover:bg-gold-400/10 group-hover:text-gold-600 dark:bg-gold-500/10 dark:text-gold-400 dark:group-hover:bg-gold-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="border-y border-slate-200 bg-white py-20 sm:py-28 dark:border-navy-800 dark:bg-navy-900/50"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Avatar / Visual */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-2xl dark:from-navy-800 dark:to-navy-950">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-400/40 bg-navy-700/50">
                    <User className="h-12 w-12 text-gold-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">{t.about.name}</p>
                  <p className="mt-2 text-sm text-gold-400">{t.about.role}</p>
                  <div className="mt-8 flex gap-3">
                    {[Landmark, GraduationCap, FileText].map((Icon, idx) => (
                      <div
                        key={idx}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"
                      >
                        <Icon className="h-5 w-5 text-gold-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border-4 border-white bg-gold-400/20 dark:border-navy-950" />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                {t.about.subtitle}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl dark:text-white">
                {t.about.title}
              </h2>
              <p className="mt-6 leading-relaxed text-navy-600 dark:text-slate-400">
                {t.about.bio1}
              </p>
              <p className="mt-4 leading-relaxed text-navy-600 dark:text-slate-400">
                {t.about.bio2}
              </p>

              <div className="mt-10 space-y-5">
                {t.about.values.map((value, i) => {
                  const Icon = valueIcons[i];
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-800/5 text-navy-800 dark:bg-gold-500/10 dark:text-gold-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900 dark:text-white">
                          {value.title}
                        </p>
                        <p className="mt-0.5 text-sm text-navy-600 dark:text-slate-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl dark:text-white">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-navy-600 dark:text-slate-400">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-navy-800 dark:bg-navy-900"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30 dark:border-navy-600 dark:bg-navy-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-gold-500 dark:focus:ring-gold-500/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30 dark:border-navy-600 dark:bg-navy-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-gold-500 dark:focus:ring-gold-500/20"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  placeholder={t.contact.form.phonePlaceholder}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30 dark:border-navy-600 dark:bg-navy-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-gold-500 dark:focus:ring-gold-500/20"
                />
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">
                  {t.contact.form.message}
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30 dark:border-navy-600 dark:bg-navy-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-gold-500 dark:focus:ring-gold-500/20"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-800 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-navy-700 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 sm:w-auto"
                >
                  {t.contact.form.submit}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {formSubmitted && (
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  {t.contact.form.success}
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-navy-800 dark:bg-navy-900">
                <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                  {t.contact.info.title}
                </h3>
                <ul className="mt-6 space-y-5">
                  {/* Address
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span className="text-sm leading-relaxed text-navy-600 dark:text-slate-400">
                      {t.contact.info.address}
                    </span>
                  </li>
                  */}
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <a
                      href={`tel:${t.contact.info.phone.replace(/\s/g, "")}`}
                      className="text-sm text-navy-600 transition-colors hover:text-gold-500 dark:text-slate-400 dark:hover:text-gold-400"
                    >
                      {t.contact.info.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <a
                      href={`mailto:${t.contact.info.email}`}
                      className="text-sm text-navy-600 transition-colors hover:text-gold-500 dark:text-slate-400 dark:hover:text-gold-400"
                    >
                      {t.contact.info.email}
                    </a>
                  </li> 
                  {/* Working Hours 
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span className="text-sm text-navy-600 dark:text-slate-400">
                      {t.contact.info.hours}
                    </span>
                  </li>
                  */}
                </ul>
              </div>

              <div className="rounded-2xl bg-navy-800 p-8 text-white dark:bg-navy-800">
                <Landmark className="h-8 w-8 text-gold-400" />
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {lang === "ro"
                    ? "Prima consultație include o evaluare inițiară a situației și recomandări preliminare."
                    : "The first consultation includes an initial assessment of your situation and preliminary recommendations."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 bg-navy-900 py-12 text-slate-300 dark:border-navy-800 dark:bg-navy-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/20">
                <Landmark className="h-5 w-5 text-gold-400" />
              </div>
              <div>
                <p className="font-bold text-white">Claudia Pencea</p>
                <p className="text-xs text-slate-400">
                  {lang === "ro" ? "Consultanță" : "Consulting"}
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-sm font-medium text-slate-400">
                {t.footer.social}
              </p>
              <div className="mt-3 flex gap-3 justify-center sm:justify-end">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-gold-500/20 hover:text-gold-400"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-gold-500/20 hover:text-gold-400"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-center text-xs leading-relaxed text-slate-500">
              {t.footer.disclaimer}
            </p>
            <p className="mt-4 text-center text-sm text-slate-400">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
