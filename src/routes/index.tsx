import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Gamepad2, Trophy, Users, Clock, Zap, CalendarCheck, MessageCircle,
  Instagram, MapPin, Phone, ChevronDown, Sparkles, Monitor, Sword,
  Send, CheckCircle2, X, Home, Image as ImageIcon, Loader2, Copy, Check,
} from "lucide-react";
import logo from "@/assets/logo.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { LogoAdsCarousel } from "@/components/LogoAdsCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ninja Zone Center | صالة ألعاب نينجا زون سنتر في الرمادي" },
      {
        name: "description",
        content:
          "احجز جلستك في Ninja Zone Center، صالة ألعاب إلكترونية حديثة في الرمادي تقدم أحدث أجهزة الألعاب، بطولات وتحديات يومية، جلسات مريحة، وأجواء Gaming احترافية.",
      },
      {
        name: "keywords",
        content:
          "Ninja Zone Center, صالة ألعاب الرمادي, ألعاب إلكترونية العراق, Gaming Center Ramadi, صالة بلايستيشن الرمادي, بطولات ألعاب, حجز صالة ألعاب",
      },
      { property: "og:title", content: "Ninja Zone Center | صالة ألعاب نينجا زون سنتر" },
      {
        property: "og:description",
        content: "احجز جلستك الآن في أحدث صالة ألعاب إلكترونية في الرمادي.",
      },
      { property: "og:image", content: logo },
      { property: "twitter:image", content: logo },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "9647844433345";
const INSTAGRAM_URL = "https://instagram.com/ninjazonegc";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ramadi+Iraq";

const NAV = [
  { id: "home", label: "الرئيسية" },
  { id: "about", label: "عن الصالة" },
  { id: "services", label: "الخدمات" },
  { id: "booking", label: "الحجز" },
  { id: "tournaments", label: "البطولات" },
  { id: "gallery", label: "المعرض" },
  { id: "location", label: "الموقع" },
  { id: "contact", label: "تواصل معنا" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundFX />
      <Header />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Tournaments />
      <Gallery />
      <Location />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--neon-pink)] opacity-20 blur-3xl" />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-[var(--neon-cyan)] opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[var(--neon-purple)] opacity-20 blur-3xl" />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-[oklch(0.85_0.18_195_/_0.15)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Ninja Zone Center" className="h-11 w-11 rounded-lg object-cover neon-glow-pink" />
          <div className="leading-tight">
            <div className="font-extrabold text-base gradient-text">نينجا زون سنتر</div>
            <div className="text-[10px] text-muted-foreground hidden sm:block">NINJA ZONE CENTER</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-foreground/80 hover:text-[var(--neon-cyan)] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#booking" className="btn-neon hidden md:inline-flex text-sm">
            <CalendarCheck className="h-4 w-4" /> احجز الآن
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md glass" aria-label="القائمة">
            {open ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-[oklch(0.85_0.18_195_/_0.15)]">
          <nav className="flex flex-col p-4 gap-3">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="text-sm font-medium py-2 border-b border-border/40">
                {n.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="btn-neon mt-2 text-sm">احجز الآن</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-right animate-fade-up">
          <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--neon-cyan)] mb-6">
            <Sparkles className="h-3.5 w-3.5" /> أحدث صالة ألعاب في الرمادي
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 tracking-tight leading-tight">
            <span className="gradient-text">صالة ألعاب</span>
            <br />
            <span className="text-neon-cyan">نينجا زون سنتر</span>
          </h1>
          <p className="text-sm md:text-base font-bold mb-4 text-muted-foreground tracking-widest">
            NINJA ZONE CENTER
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-3 leading-relaxed">
            عالم من التحديات، المتعة، والأجواء الاحترافية لعشاق الألعاب الإلكترونية في الرمادي.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            ابدأ التحدي وعِش تجربة Gaming متكاملة مع أحدث الأجهزة والأجواء الحماسية.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#booking" className="btn-neon">
              <CalendarCheck className="h-5 w-5" /> احجز الآن
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost-neon"
            >
              <MessageCircle className="h-5 w-5" /> تواصل عبر واتساب
            </a>
          </div>
        </div>
        <div className="animate-fade-up">
          <LogoAdsCarousel
            logo={logo}
            alt="شعار Ninja Zone Center"
            width={520}
            height={520}
            className="relative w-full max-w-md rounded-3xl animate-float animate-neon-pulse"
          />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center mb-12">
      {kicker && <div className="text-xs font-bold tracking-[0.3em] text-[var(--neon-cyan)] mb-3">{kicker}</div>}
      <h2 className="text-3xl md:text-5xl font-black gradient-text" style={{ direction: "rtl" }}>
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full" style={{ background: "var(--gradient-neon)" }} />
    </div>
  );
}

function About() {
  const features = [
    { icon: Monitor, label: "أحدث الأجهزة" },
    { icon: Zap, label: "أجواء احترافية" },
    { icon: Trophy, label: "بطولات يومية" },
    { icon: Clock, label: "جلسات مريحة" },
    { icon: Users, label: "مكان يجمع الجيمرز" },
    { icon: Sparkles, label: "تجربة متكاملة" },
  ];
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="ABOUT US" title="عن Ninja Zone Center" />
        <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-loose mb-12">
          في صالة ألعاب نينجا زون سنتر تعيش تجربة Gaming متكاملة تجمع بين أحدث أجهزة الألعاب،
          الجلسات المريحة، الأجواء الاحترافية، البطولات اليومية، والتحديات الحماسية في مكان
          واحد يجمع الجيمرز في الرمادي.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.label} className="neon-card rounded-xl p-5 flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-lg grid place-items-center" style={{ background: "var(--gradient-neon)" }}>
                <f.icon className="h-5 w-5 text-background" />
              </div>
              <div className="font-bold">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Gamepad2, title: "أحدث أجهزة الألعاب", desc: "تجربة لعب حديثة بأداء قوي وأجواء احترافية." },
    { icon: Trophy, title: "بطولات وتحديات يومية", desc: "اختبر مهاراتك وعِش أجواء المنافسة الحماسية." },
    { icon: Clock, title: "جلسات مريحة", desc: "جلسات منظمة ومريحة لتجربة لعب ممتعة مع الأصدقاء." },
    { icon: Users, title: "لعب جماعي", desc: "اجمع فريقك وابدأ تجربة تنافسية مليئة بالحماس." },
    { icon: Zap, title: "أجواء Gaming احترافية", desc: "إضاءة نيون، شاشات، أجهزة، وتنظيم يمنحك تجربة مختلفة." },
    { icon: CalendarCheck, title: "حجز إلكتروني سريع", desc: "احجز جلستك من الموقع واختر الوقت المناسب لك بسهولة." },
  ];
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="SERVICES" title="خدمات ومزايا الصالة" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="neon-card rounded-2xl p-6">
              <div className="h-14 w-14 rounded-xl grid place-items-center mb-5 neon-border">
                <it.icon className="h-7 w-7 text-[var(--neon-cyan)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type BookingState = {
  name: string; phone: string; type: string; device: string;
  players: string; date: string; time: string; duration: string; notes: string;
};

function Booking() {
  const [form, setForm] = useState<BookingState>({
    name: "", phone: "", type: "جلسة فردية", device: "PlayStation",
    players: "1", date: "", time: "", duration: "ساعة واحدة", notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: keyof BookingState, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const validate = () => {
    const e: Partial<Record<keyof BookingState, string>> = {};
    if (!form.name.trim()) e.name = "الاسم مطلوب";
    if (!/^[+\d\s-]{7,}$/.test(form.phone.trim())) e.phone = "رقم هاتف غير صحيح";
    if (!form.date) e.date = "اختر التاريخ";
    if (!form.time) e.time = "اختر الوقت";
    if (!form.players || +form.players < 1) e.players = "أدخل عدد اللاعبين";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildMessage = () => {
    return `مرحباً Ninja Zone Center، أريد تأكيد حجز جديد.
الاسم: ${form.name}
رقم الهاتف: ${form.phone}
نوع الحجز: ${form.type}
نوع الجهاز: ${form.device}
عدد اللاعبين: ${form.players}
التاريخ: ${form.date}
الوقت: ${form.time}
مدة الحجز: ${form.duration}
ملاحظات: ${form.notes || "—"}`;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;

  const fieldCls = "w-full glass rounded-xl px-4 py-4 text-base bg-input/40 border border-border focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]/30 transition";

  return (
    <section id="booking" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle kicker="BOOKING" title="احجز جلستك الآن" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10">
          املأ الحقول التالية في خطوة واحدة وسيتم التواصل معك عبر واتساب لتأكيد الموعد.
        </p>

        {submitted ? (
          <div className="neon-card rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <CheckCircle2 className="h-16 w-16 mx-auto text-[var(--neon-cyan)] mb-4" />
              <h3 className="text-2xl font-bold mb-2">تم تجهيز طلب الحجز</h3>
              <p className="text-muted-foreground mb-6">راجع نص الرسالة قبل إرسالها عبر واتساب.</p>
            </div>

            <MessagePreview text={buildMessage()} />

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-neon h-14 text-base w-full sm:w-auto">
                <MessageCircle className="h-5 w-5" /> إرسال عبر واتساب
              </a>
              <button onClick={() => setSubmitted(false)} className="btn-ghost-neon h-14 text-base w-full sm:w-auto">
                تعديل الحجز
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="neon-card rounded-2xl p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <Field label="الاسم الكامل" error={errors.name}>
              <input value={form.name} onChange={(e) => update("name", e.target.value)} className={fieldCls} placeholder="اكتب اسمك" autoComplete="name" />
            </Field>
            <Field label="رقم الهاتف / واتساب" error={errors.phone}>
              <input type="tel" inputMode="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={fieldCls} placeholder="+964 7XX XXX XXXX" dir="ltr" autoComplete="tel" />
            </Field>
            <Field label="نوع الحجز">
              <select value={form.type} onChange={(e) => update("type", e.target.value)} className={fieldCls}>
                {["جلسة فردية", "جلسة جماعية", "بطولة / تحدي", "حجز خاص"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="نوع الجهاز">
              <select value={form.device} onChange={(e) => update("device", e.target.value)} className={fieldCls}>
                {["PlayStation", "PC Gaming", "Multiplayer", "Tournament Setup", "أخرى"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="عدد اللاعبين" error={errors.players}>
              <input type="number" inputMode="numeric" min={1} value={form.players} onChange={(e) => update("players", e.target.value)} className={fieldCls} />
            </Field>
            <Field label="مدة الحجز">
              <select value={form.duration} onChange={(e) => update("duration", e.target.value)} className={fieldCls}>
                {["ساعة واحدة", "ساعتان", "3 ساعات", "حسب التوفر"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="التاريخ" error={errors.date}>
              <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={fieldCls} />
            </Field>
            <Field label="الوقت" error={errors.time}>
              <input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className={fieldCls} />
            </Field>
            <div className="md:col-span-2">
              <Field label="ملاحظات إضافية (اختياري)">
                <textarea rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} className={fieldCls} placeholder="أي تفاصيل تود إضافتها..." />
              </Field>
            </div>
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-neon w-full h-14 text-base disabled:opacity-70 disabled:cursor-wait"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> جارٍ إرسال الطلب...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> تأكيد الحجز
                  </>
                )}
              </button>
              <p className="text-xs text-center text-muted-foreground mt-3">
                بالضغط على تأكيد الحجز سيتم تجهيز رسالة واتساب تلقائياً لإرسالها إلى الصالة.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-bold mb-2 text-foreground">{label}</span>
      {children}
      {error && <span className="block text-xs text-destructive mt-1">{error}</span>}
    </label>
  );
}

function MessagePreview({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="glass neon-border rounded-2xl p-4 md:p-5" dir="rtl">
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[var(--neon-cyan)]">
          <MessageCircle className="h-4 w-4" />
          معاينة رسالة واتساب
        </div>
        <button
          type="button"
          onClick={onCopy}
          aria-label="نسخ نص الرسالة"
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            copied
              ? "bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)]"
              : "bg-input/40 border border-border hover:border-[var(--neon-cyan)]/60"
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" /> تم النسخ
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> نسخ
            </>
          )}
        </button>
      </div>
      <pre
        className="whitespace-pre-wrap break-words text-sm text-foreground/90 leading-loose font-sans max-h-72 overflow-auto"
        style={{ fontFamily: "var(--font-arabic)" }}
      >
        {text}
      </pre>
    </div>
  );
}

function Tournaments() {
  const cards = [
    { icon: Sword, title: "تحديات EA FC", desc: "نزال كرة قدم احترافي بين أفضل اللاعبين." },
    { icon: Sword, title: "تحديات قتالية", desc: "ألعاب القتال الأكثر شعبية في مواجهات مباشرة." },
    { icon: Users, title: "تحديات جماعية", desc: "تكتيك، تعاون، ومتعة مع فريقك." },
    { icon: Trophy, title: "مسابقات أسبوعية", desc: "جدولة منتظمة لمنح الجميع فرصة المنافسة." },
    { icon: Zap, title: "أجواء منافسة", desc: "إضاءة، صوت، وحماس على مستوى الإسبورتس." },
    { icon: Sparkles, title: "جوائز وخصومات", desc: "مفاجآت وعروض مستقبلية لأبطال الصالة." },
  ];
  return (
    <section id="tournaments" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="TOURNAMENTS" title="بطولات وتحديات يومية" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          اختبر مهاراتك، نافس أصدقاءك، وعِش أجواء الحماس داخل Ninja Zone Center.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cards.map((c) => (
            <div key={c.title} className="neon-card rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-[var(--neon-pink)]/20 blur-2xl" />
              <c.icon className="h-8 w-8 text-[var(--neon-pink)] mb-3" />
              <h3 className="text-lg font-bold mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("أريد الانضمام إلى تحدي في Ninja Zone Center")}`}
             target="_blank" rel="noopener noreferrer" className="btn-neon">
            <Trophy className="h-5 w-5" /> انضم إلى التحدي
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [g1, g2, g3, g4, g5, g6];
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="GALLERY" title="شاهد أجواء الصالة" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          شاهد أجواء اللعب، الإضاءة، الأجهزة، والجلسات داخل Ninja Zone Center.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <button key={i} onClick={() => setLightbox(src)} className="group relative overflow-hidden rounded-2xl neon-border aspect-[4/3]">
              <img src={src} alt={`أجواء الصالة ${i + 1}`} loading="lazy" width={1024} height={768}
                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <div onClick={() => setLightbox(null)}
             className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm grid place-items-center p-4 animate-fade-up">
          <button className="absolute top-4 left-4 glass rounded-full p-2" aria-label="إغلاق">
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="معاينة" className="max-h-[85vh] max-w-full rounded-2xl neon-glow-cyan" />
        </div>
      )}
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="LOCATION" title="زورنا في الرمادي" />
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="neon-card rounded-2xl p-8">
            <MapPin className="h-10 w-10 text-[var(--neon-pink)] mb-4" />
            <h3 className="text-2xl font-bold mb-3">عنوان الصالة</h3>
            <p className="text-lg text-muted-foreground leading-loose mb-6">
              الرمادي / السدة قرب فلكة الدلافين / مقابل مديرية الطرق والجسور
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-neon">
                <MapPin className="h-5 w-5" /> افتح الموقع على الخريطة
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-ghost-neon">
                <MessageCircle className="h-5 w-5" /> تواصل قبل الوصول
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden neon-border aspect-video">
            <iframe
              title="موقع Ninja Zone Center"
              src="https://www.google.com/maps?q=Ramadi,Iraq&output=embed"
              className="w-full h-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errs, setErrs] = useState<{ name?: string; phone?: string; message?: string }>({});

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const e2: typeof errs = {};
    if (!form.name.trim()) e2.name = "الاسم مطلوب";
    if (!/^[+\d\s-]{7,}$/.test(form.phone)) e2.phone = "رقم هاتف غير صحيح";
    if (!form.message.trim()) e2.message = "الرسالة مطلوبة";
    setErrs(e2);
    if (Object.keys(e2).length) return;
    setSent(true);
  };

  const fieldCls = "w-full glass rounded-lg px-4 py-3 text-sm bg-input/40 border border-border focus:border-[var(--neon-cyan)] focus:outline-none";

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="CONTACT" title="تواصل معنا" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="neon-card rounded-2xl p-8 space-y-5">
            <ContactRow icon={<Phone className="h-5 w-5" />} label="واتساب">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} dir="ltr" className="text-[var(--neon-cyan)] font-bold">+964 784 443 3345</a>
            </ContactRow>
            <ContactRow icon={<Instagram className="h-5 w-5" />} label="إنستقرام">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--neon-pink)] font-bold" dir="ltr">@ninjazonegc</a>
            </ContactRow>
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="الموقع">
              <span className="text-muted-foreground">الرمادي / السدة قرب فلكة الدلافين / مقابل مديرية الطرق والجسور</span>
            </ContactRow>
            <div className="flex flex-wrap gap-3 pt-3">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-neon">
                <MessageCircle className="h-5 w-5" /> تواصل عبر واتساب
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-neon">
                <Instagram className="h-5 w-5" /> تابعنا على إنستقرام
              </a>
            </div>
          </div>

          {sent ? (
            <div className="neon-card rounded-2xl p-8 text-center grid place-items-center">
              <CheckCircle2 className="h-14 w-14 text-[var(--neon-cyan)] mb-4" />
              <p className="text-lg font-bold">تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="neon-card rounded-2xl p-8 space-y-4">
              <Field label="الاسم" error={errs.name}>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={fieldCls} />
              </Field>
              <Field label="رقم الهاتف" error={errs.phone}>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={fieldCls} dir="ltr" placeholder="+964..." />
              </Field>
              <Field label="الرسالة" error={errs.message}>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={fieldCls} />
              </Field>
              <button type="submit" className="btn-neon w-full">
                <Send className="h-5 w-5" /> إرسال
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-lg grid place-items-center neon-border text-[var(--neon-cyan)]">{icon}</div>
      <div>
        <div className="text-xs text-muted-foreground mb-1">{label}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

function FAQ() {
  const items = [
    { q: "هل يمكن الحجز مسبقاً؟", a: "نعم، يمكنك الحجز إلكترونياً عبر الموقع أو التواصل معنا عبر واتساب." },
    { q: "هل توجد بطولات يومية؟", a: "نعم، توجد تحديات وبطولات حسب الجدول المتوفر داخل الصالة." },
    { q: "هل المكان مناسب للمجموعات؟", a: "نعم، الصالة مناسبة للأفراد والمجموعات وعشاق اللعب الجماعي." },
    { q: "أين تقع الصالة؟", a: "تقع الصالة في الرمادي / السدة قرب فلكة الدلافين / مقابل مديرية الطرق والجسور." },
    { q: "كيف أؤكد الحجز؟", a: "بعد إرسال طلب الحجز سيتم التواصل معك عبر واتساب لتأكيد الموعد." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle kicker="FAQ" title="الأسئلة الشائعة" />
        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="neon-card rounded-xl overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-right">
                  <span className="font-bold">{it.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[var(--neon-cyan)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{it.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 mt-10 py-12 glass">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Ninja Zone Center" className="h-12 w-12 rounded-lg" />
            <div>
              <div className="font-black gradient-text">نينجا زون سنتر</div>
              <div className="text-xs text-muted-foreground">صالة ألعاب نينجا زون سنتر</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            وجهتك المثالية لعالم التحدي، المتعة، والـ Gaming الاحترافي في الرمادي.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-[var(--neon-cyan)]">روابط سريعة</h4>
          <ul className="space-y-2 text-sm">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="text-muted-foreground hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-[var(--neon-cyan)]">تواصل</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li dir="ltr" className="text-right">واتساب: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-foreground">+964 784 443 3345</a></li>
            <li>إنستقرام: <a href={INSTAGRAM_URL} className="text-foreground" dir="ltr">@ninjazonegc</a></li>
            <li>الرمادي / السدة قرب فلكة الدلافين</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
        جميع الحقوق محفوظة © Ninja Zone Center
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank" rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed left-4 z-50 h-14 w-14 rounded-full grid place-items-center neon-glow-cyan animate-float bottom-24 lg:bottom-6"
      style={{ background: "var(--gradient-neon)" }}
    >
      <MessageCircle className="h-7 w-7 text-background" />
    </a>
  );
}

function MobileBottomNav() {
  const items = [
    { id: "home", label: "الرئيسية", icon: Home },
    { id: "services", label: "الخدمات", icon: Gamepad2 },
    { id: "booking", label: "الحجز", icon: CalendarCheck },
    { id: "gallery", label: "المعرض", icon: ImageIcon },
    { id: "contact", label: "تواصل", icon: Phone },
  ];
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 glass border-t border-[oklch(0.85_0.18_195_/_0.2)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <ul className="grid grid-cols-5">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] text-foreground/70 hover:text-[var(--neon-cyan)] active:scale-95 transition"
            >
              <it.icon className="h-5 w-5" />
              <span className="font-bold">{it.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
