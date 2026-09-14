"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BookOpen, Building2, Check, ChevronRight, CircleCheck, Facebook, GraduationCap, Images, Instagram, Landmark, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Target, X, Youtube } from "lucide-react";
import { createContext, useContext, useEffect, useState, type FormEvent, type ReactNode } from "react";
import policeImage from "@/assets/police-training.jpg";
import booksImage from "@/assets/study-material.jpg";
import { benefits, contact, courses, nav, t, type Copy, type Language } from "@/data/site-content";

function imageSource(image: string | { src: string }) {
  return typeof image === "string" ? image : image.src;
}

const heroPoster = "/logos.png";
const heroVideos = ["/career-academy-hero.mp4", "/career-academy-hero01.mp4"];

const LanguageContext = createContext<{ lang: Language; setLang: (value: Language) => void }>({ lang: "mr", setLang: () => undefined });
export const useLanguage = () => useContext(LanguageContext);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("mr");
  useEffect(() => { document.documentElement.lang = lang === "mr" ? "mr" : "en"; }, [lang]);
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function Brand() {
  return <Link href="/" className="brand" aria-label="Career Academy home"><img className="brand-logo" src="/logos.png" alt="Sarkar Career Academy" /></Link>;
}

export function Header() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <div className="topline"><div className="site-container topline-inner"><span><MapPin size={14} /> Nashik, Maharashtra</span><a href="tel:+918805667100"><Phone size={14} /> 8805667100</a></div></div>
    <header className="site-header"><div className="site-container header-inner"><Brand />
      <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(item => <Link key={item.to} href={item.to} className={`nav-link ${pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to)) ? "active" : ""}`}>{t(item.label, lang)}</Link>)}</nav>
      <div className="header-actions"><div className="language-switch" aria-label="Language"><button className={lang === "mr" ? "active" : ""} onClick={() => setLang("mr")}>मराठी</button><span>|</span><button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>English</button></div><Link href="/contact" className="button button-primary header-cta">{lang === "mr" ? "प्रवेशासाठी संपर्क करा" : "Contact for admission"}</Link><button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Open navigation">{open ? <X /> : <Menu />}</button></div>
    </div></header>
    <AnimatePresence>{open && <motion.nav className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>{nav.map(item => <Link key={item.to} href={item.to}>{t(item.label, lang)}<ChevronRight size={18} /></Link>)}<Link href="/contact" className="button button-primary">{lang === "mr" ? "प्रवेशासाठी संपर्क करा" : "Contact for admission"}</Link></motion.nav>}</AnimatePresence>
  </>;
}

export function Footer() {
  const { lang } = useLanguage();
  return <footer className="footer"><div className="site-container footer-grid"><div><Brand /><p>{lang === "mr" ? "स्पर्धा परीक्षा मार्गदर्शन प्रबोधिनी, नाशिक." : "Competitive exam guidance institute, Nashik."}</p></div><div><h3>{lang === "mr" ? "महत्त्वाचे दुवे" : "Quick links"}</h3>{nav.slice(0, 7).map(item => <Link key={item.to} href={item.to}>{t(item.label, lang)}</Link>)}</div><div><h3>{lang === "mr" ? "संपर्क" : "Contact"}</h3>{contact.phones.map(phone => <a key={phone} href={`tel:+91${phone}`}>{phone}</a>)}<p><MapPin size={17} />{t(contact.nashik, lang)}</p></div></div><div className="footer-social"><h3>{lang === "mr" ? "आमच्याशी संपर्क साधा" : "Connect with us"}</h3><div className="social-links"><a href="tel:+918805667100" aria-label="Call Career Academy" title="Call"><Phone /></a><a href="https://wa.me/918805667100" target="_blank" rel="noreferrer" aria-label="Career Academy on WhatsApp" title="WhatsApp"><MessageCircle /></a><a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="Career Academy on YouTube" title="YouTube"><Youtube /></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Career Academy on Instagram" title="Instagram"><Instagram /></a><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Career Academy on Facebook" title="Facebook"><Facebook /></a></div></div><div className="footer-bottom"><div className="site-container">© 2026 Career Academy · {lang === "mr" ? "सर्व हक्क राखीव" : "All rights reserved"}</div></div></footer>;
}

export function MobileActions() {
  const { lang } = useLanguage();
  return <div className="mobile-actions"><a href="tel:+918805667100"><Phone size={20} /><span>{lang === "mr" ? "कॉल करा" : "Call"}</span></a><a href="https://wa.me/918805667100" target="_blank" rel="noreferrer"><MessageCircle size={20} /><span>WhatsApp</span></a><Link href="/contact"><GraduationCap size={20} /><span>{lang === "mr" ? "प्रवेश" : "Admission"}</span></Link></div>;
}

export function AppShell({ children }: { children: ReactNode }) { return <SiteProvider><Header /><main>{children}</main><Footer /><MobileActions /></SiteProvider>; }

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55, ease: "easeOut" }}>{children}</motion.div>;
}

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: Copy; title: Copy; copy?: Copy; align?: "left" | "center" }) {
  const { lang } = useLanguage(); return <div className={`section-heading ${align === "center" ? "is-centered" : ""}`}><span>{t(eyebrow, lang)}</span><h2>{t(title, lang)}</h2>{copy && <p>{t(copy, lang)}</p>}</div>;
}

export function Hero() {
  const { lang } = useLanguage();
  const [videoIndex, setVideoIndex] = useState(0);
  return <section className="hero"><video key={videoIndex} className="hero-video" autoPlay muted playsInline poster={heroPoster} onEnded={() => setVideoIndex(current => (current + 1) % heroVideos.length)} aria-label={lang === "mr" ? "स्पर्धा परीक्षेची तयारी करणारे विद्यार्थी" : "Students preparing for competitive exams"}><source src={heroVideos[videoIndex] ?? heroVideos[0]} type="video/mp4" /></video><div className="hero-shade" /><div className="site-container hero-content"><motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}><div className="hero-kicker"><ShieldCheck size={18} />{lang === "mr" ? "स्पर्धा परीक्षा मार्गदर्शन प्रबोधिनी, नाशिक" : "Competitive Exam Guidance Institute, Nashik"}</div><h1>{lang === "mr" ? "स्पर्धा परीक्षेतील यशासाठी योग्य मार्गदर्शन" : "The right guidance for success in competitive exams"}</h1><p>{lang === "mr" ? "सरकार करिअर अकॅडमी, नाशिक — MPSC, PSI, TET आणि पोलीस भरती परीक्षांसाठी मार्गदर्शन." : "Sarkar Career Academy, Nashik — guidance for MPSC, PSI, TET and Police recruitment examinations."}</p><div className="hero-actions"><Link href="/contact" className="button button-primary">{lang === "mr" ? "प्रवेशासाठी संपर्क करा" : "Contact for admission"}<ChevronRight size={18} /></Link><Link href="/courses" className="button button-light">{lang === "mr" ? "अभ्यासक्रम पहा" : "View courses"}</Link></div><small><CircleCheck size={17} />{lang === "mr" ? "विद्यार्थ्यांच्या यशाला केंद्रस्थानी ठेवणारे मार्गदर्शन" : "Guidance that puts student success at the centre"}</small></motion.div></div></section>;
}

const icons = [Landmark, ShieldCheck, GraduationCap, Target];
export function CoursesGrid({ limit }: { limit?: number }) { const { lang } = useLanguage(); return <div className="card-grid courses-grid">{courses.slice(0, limit).map((course, index) => { const Icon = icons[index] ?? Target; return <Reveal key={course.key} className="course-card"><div className="card-icon"><Icon /></div><span className="card-number">0{index + 1}</span><h3>{t(course.name, lang)}</h3><p>{t(course.desc, lang)}</p><div className="course-suitable"><b>{lang === "mr" ? "योग्य परीक्षा" : "Suitable exam"}</b><span>{t(course.suitable, lang)}</span></div><Link href={course.to}>{lang === "mr" ? "अधिक माहिती" : "Learn more"}<ChevronRight size={17} /></Link></Reveal>; })}</div>; }

export function Benefits() { const { lang } = useLanguage(); return <div className="benefits-grid">{benefits.map((benefit, i) => <Reveal key={benefit.mr} className="benefit-item"><span>{String(i + 1).padStart(2, "0")}</span><Check /><h3>{t(benefit, lang)}</h3></Reveal>)}</div>; }

export function SuccessPreview({ dedicated = false }: { dedicated?: boolean }) { const { lang } = useLanguage(); const labels = dedicated ? ["TET", "TET", "TET", "TET", "TET", "TET"] : ["TET", "PSI", "TET", "Police"]; return <div className={`success-grid ${dedicated ? "six" : ""}`}>{labels.map((exam, i) => <Reveal key={`${exam}-${i}`} className="success-card"><div className="success-photo"><GraduationCap /><span>{lang === "mr" ? "विद्यार्थ्याचा फोटो" : "Student photo"}</span></div><div><span className="badge">{exam}</span><h3>{lang === "mr" ? "विद्यार्थ्याचे नाव" : "Student name"}</h3><p>{lang === "mr" ? "माहिती उपलब्ध झाल्यावर प्रदर्शित केली जाईल" : "Details will appear when supplied"}</p></div></Reveal>)}</div>; }

export function SplitFeature({ kind = "police", title, copy, children }: { kind?: "police" | "books"; title: Copy; copy: Copy; children?: ReactNode }) { const { lang } = useLanguage(); const image = kind === "police" ? policeImage : booksImage; return <section className="split-feature"><div className="split-image"><img src={imageSource(image)} alt={t(title, lang)} loading="lazy" width={kind === "police" ? 1400 : 1200} height={900} /></div><div className="split-copy"><span className="eyebrow">{kind === "police" ? "PSI / POLICE" : (lang === "mr" ? "अभ्यास साहित्य" : "STUDY MATERIAL")}</span><h2>{t(title, lang)}</h2><p>{t(copy, lang)}</p>{children}</div></section>; }

export function EnquiryForm({ compact = false }: { compact?: boolean }) { const { lang } = useLanguage(); const [sent, setSent] = useState(false); function submit(e: FormEvent) { e.preventDefault(); setSent(true); } if (sent) return <div className="form-success"><CircleCheck /><h3>{lang === "mr" ? "आपली विनंती नोंदवली आहे" : "Your enquiry has been recorded"}</h3><p>{lang === "mr" ? "त्वरित संपर्कासाठी कृपया Call किंवा WhatsApp वापरा." : "For immediate assistance, please call or use WhatsApp."}</p><button className="button button-secondary" onClick={() => setSent(false)}>{lang === "mr" ? "आणखी एक विनंती" : "Send another enquiry"}</button></div>; return <form className={`enquiry-form ${compact ? "compact" : ""}`} onSubmit={submit}><label><span>{lang === "mr" ? "नाव" : "Name"}</span><input required name="name" autoComplete="name" placeholder={lang === "mr" ? "तुमचे पूर्ण नाव" : "Your full name"} /></label><label><span>{lang === "mr" ? "मोबाईल नंबर" : "Mobile number"}</span><input required name="phone" inputMode="tel" pattern="[0-9]{10}" placeholder="10 digit mobile number" /></label><label><span>{lang === "mr" ? "कोणत्या परीक्षेसाठी तयारी करायची आहे?" : "Which exam are you preparing for?"}</span><select required name="exam" defaultValue=""><option value="" disabled>{lang === "mr" ? "परीक्षा निवडा" : "Choose an exam"}</option>{["MPSC", "PSI", "TET", "Police", "Military", lang === "mr" ? "इतर" : "Other"].map(x => <option key={x}>{x}</option>)}</select></label>{!compact && <label className="full"><span>{lang === "mr" ? "संदेश" : "Message"}</span><textarea name="message" rows={4} placeholder={lang === "mr" ? "तुमचा प्रश्न लिहा" : "Write your question"} /></label>}<button className="button button-primary full" type="submit">{lang === "mr" ? "मार्गदर्शनासाठी संपर्क करा" : "Request guidance"}<ChevronRight size={18} /></button></form>; }

export function PageHero({ eyebrow, title, copy }: { eyebrow: Copy; title: Copy; copy: Copy }) { const { lang } = useLanguage(); return <section className="page-hero"><div className="site-container"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}><span>{t(eyebrow, lang)}</span><h1>{t(title, lang)}</h1><p>{t(copy, lang)}</p></motion.div></div></section>; }

export function ContactStrip() { const { lang } = useLanguage(); return <section className="contact-strip"><div className="site-container contact-strip-inner"><div><span>{lang === "mr" ? "पुढचे पाऊल आजच उचला" : "Take your next step today"}</span><h2>{lang === "mr" ? "योग्य परीक्षेसाठी योग्य मार्गदर्शन मिळवा" : "Get the right guidance for your exam"}</h2></div><div><a className="button button-light" href="tel:+918805667100"><Phone size={18}/>{lang === "mr" ? "कॉल करा" : "Call now"}</a><a className="button button-gold" href="https://wa.me/918805667100" target="_blank" rel="noreferrer"><MessageCircle size={18}/>WhatsApp</a></div></div></section>; }

export const galleryItems = [
  { category: "academy", image: heroPoster, mr: "अकॅडमीतील अभ्यास", en: "Study at the academy" },
  { category: "courses", image: policeImage, mr: "भरती प्रशिक्षण", en: "Recruitment training" },
  { category: "books", image: booksImage, mr: "अभ्यास साहित्य", en: "Study material" },
];

export function Gallery({ interactive = false }: { interactive?: boolean }) { const { lang } = useLanguage(); const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null); return <><div className="gallery-grid">{galleryItems.map(item => <button key={item.category} className="gallery-item" onClick={() => interactive && setSelected(item)} aria-label={t({ mr: item.mr, en: item.en }, lang)}><img src={imageSource(item.image)} alt={t({ mr: item.mr, en: item.en }, lang)} loading="lazy" /><span>{t({ mr: item.mr, en: item.en }, lang)}</span></button>)}</div><AnimatePresence>{selected && <motion.div className="lightbox" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><button aria-label="Close"><X /></button><img src={imageSource(selected.image)} alt={lang === "mr" ? selected.mr : selected.en} /></motion.div>}</AnimatePresence></>; }

export function EmptyAssetNote({ type }: { type: "logo" | "students" | "mentor" | "books" }) { const { lang } = useLanguage(); const copy = { logo: { mr: "मूळ लोगोची फाइल उपलब्ध झाल्यावर येथे जतन करून वापरली जाईल.", en: "The original logo will be used here when its file is supplied." }, students: { mr: "मूळ विद्यार्थी छायाचित्रे व नावे उपलब्ध झाल्यावर येथे प्रदर्शित केली जातील.", en: "Original student photographs and names will appear here when supplied." }, mentor: { mr: "प्रा. रविंद्र सरकार यांचे मूळ छायाचित्र उपलब्ध झाल्यावर येथे प्रदर्शित केले जाईल.", en: "Prof. Ravindra Sarkar's original photograph will appear here when supplied." }, books: { mr: "मूळ पुस्तकांची मुखपृष्ठे व पुष्टी केलेली शीर्षके उपलब्ध झाल्यावर येथे प्रदर्शित केली जातील.", en: "Original book covers and confirmed titles will appear here when supplied." } }; return <p className="asset-note"><Images size={18}/>{t(copy[type], lang)}</p>; }

export function Mentor() { const { lang } = useLanguage(); return <div className="mentor"><div className="mentor-photo"><GraduationCap /><span>{lang === "mr" ? "मूळ छायाचित्र प्रतीक्षेत" : "Original photograph pending"}</span></div><div><span className="eyebrow">{lang === "mr" ? "मार्गदर्शक नेतृत्व" : "MENTORSHIP"}</span><h2>{lang === "mr" ? "प्रा. रविंद्र सरकार" : "Prof. Ravindra Sarkar"}</h2><h3>{lang === "mr" ? "लेखक - मार्गदर्शक - संचालक" : "Author · Mentor · Director"}</h3><p>{lang === "mr" ? "स्पर्धा परीक्षेच्या तयारीसाठी परीक्षाभिमुख दिशा, अभ्यास नियोजन आणि सातत्यपूर्ण मार्गदर्शन." : "Exam-oriented direction, study planning and consistent guidance for competitive examination preparation."}</p><EmptyAssetNote type="mentor" /></div></div>; }
