import Image from "next/image";


const services = [
  {
    title: "تنظيم المؤتمرات",
    text: "إدارة متكاملة للمؤتمرات والندوات الطبية، من التخطيط والبرنامج العلمي إلى التسجيل والاستضافة.",
    red: false,
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3M7 9h10M7 13h6" />
      </>
    ),
  },
  {
    title: "منح التحاليل الطبية",
    text: "منح دراسية وتدريبية في مجال التحاليل الطبية للراغبين في تطوير مهاراتهم المعملية.",
    red: false,
    icon: (
      <>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
        <path d="M8 15h8" />
      </>
    ),
  },
  {
    title: "تدريب الإسعافات الأولية",
    text: "دورات عملية تُعلّم التصرف الصحيح في اللحظات الحرجة، للأفراد والمؤسسات والمدارس.",
    red: true,
    icon: (
      <>
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
        <path d="M12 9v5M9.5 11.5h5" />
      </>
    ),
  },
];

const events = [
  { date: "[التاريخ]", title: "[اسم المؤتمر]", text: "[المكان] · [وصف قصير للفعالية]" },
  { date: "[التاريخ]", title: "[اسم الدورة التدريبية]", text: "[المكان] · [وصف قصير للدورة]" },
  { date: "[التاريخ]", title: "[ورشة الإسعافات الأولية]", text: "[المكان] · [وصف قصير للورشة]" },
];

export default function Home() {
  return (
    <>
      <div className="wrap">
        <header className="header">
          <div className="brand">
            <span>نيوروميديكا جروب</span>
          </div>
          <nav className="nav">
            <a href="#services">خدماتنا</a>
            <a href="#scholarships">المنح</a>
            <a href="#events">الفعاليات</a>
            <a href="#contact">تواصل معنا</a>
          </nav>
          <a href="#contact" className="btn btn-accent">سجّل الآن</a>
        </header>

        <section className="hero" style={{ padding: "56px 0 80px" }}>
          <div className="hero-text">
            <span className="badge">تنظيم مؤتمرات · تدريب · منح</span>
            <h1>نُنظّم المعرفة الطبية،<br />ونُدرّب من ينقذ الأرواح</h1>
            <p>
              نيوروميديكا شركة متخصصة في تنظيم المؤتمرات الطبية والدورات التدريبية،
              ونقدّم منحًا في التحاليل الطبية وبرامج الإسعافات الأولية.
            </p>
            <div className="actions">
              <a href="#scholarships" className="btn btn-primary">اعرف المنح المتاحة</a>
              <a href="#services" className="btn btn-outline">استكشف خدماتنا</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <svg viewBox="0 0 400 400" aria-hidden="true">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#fff" strokeOpacity="0.12" strokeWidth="2" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="2" />
                <path d="M30 250h90l24-60 40 110 32-80 20 30h134" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="164" y="112" width="72" height="72" rx="18" fill="#D6453D" />
                <path d="M192 126h16v16h16v16h-16v16h-16v-16h-16v-16h16z" fill="#fff" />
              </svg>
            </div>
          </div>
        </section>
      </div>

      <section id="services" className="services">
        <div className="wrap">
          <div className="section-head">
            <h2>ماذا نقدّم</h2>
            <p>ثلاث ركائز نعمل عليها لرفع كفاءة الكوادر الطبية والمجتمع.</p>
          </div>
          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <div className={s.red ? "icon red" : "icon"}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {s.icon}
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="scholarships">
        <div className="wrap split">
          <div className="split-text">
            <h2>منح تغيّر المسار المهني</h2>
            <p>نقدّم منحًا في التحاليل الطبية والإسعافات الأولية. التقديم بسيط والاختيار على أساس الجدارة.</p>
            <ul className="checks">
              <li>[تفاصيل شروط التقديم]</li>
              <li>[نسبة تغطية المنحة]</li>
              <li>[آخر موعد للتقديم]</li>
            </ul>
            <a href="#contact" className="btn btn-primary">قدّم على منحة</a>
          </div>
          <div className="split-cards">
            <div className="mini">
              <small>منحة</small>
              <strong>التحاليل الطبية</strong>
              <span>4 ايام · طنطا</span>
            </div>
            <div className="mini">
              <small className="red">منحة</small>
              <strong>الإسعافات الأولية</strong>
              <span>3 ايام · طنطا</span>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="events">
        <div className="wrap">
          <h2>فعالياتنا القادمة</h2>
          <div className="cards">
            {events.map((e) => (
              <article className="event" key={e.title}>
                <small>{e.date}</small>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-box">
            <h2>جاهز تبدأ مع نيوروميديكا؟</h2>
            <p>راسلنا لحجز مقعدك في دورة، أو للتقديم على منحة، أو لتنظيم مؤتمرك القادم.</p>
            <div className="actions">
              <a href="#" className="btn btn-accent">+201006814899</a>
              <a href="#" className="btn btn-outline">info@neuromedicagroup.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">© نيوروميديكا جروب — تنظيم مؤتمرات وتدريب طبي</footer>
    </>
  );
}
