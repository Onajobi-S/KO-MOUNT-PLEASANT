import Image from "next/image";

const BUSINESS = {
  name: "K. O. Mount Pleasant (Nigeria) Limited",
  tagline: "Sales, Repair & Hire of All Model Forklifts, Cranes & Earth Moving Equipment",
  phones: ["08143108355", "+2348036161062"],
  email: "Onajobisultan@gmail.com",
  addressLine1: "8, Tanimowo Street, Off Sadiku St",
  addressLine2: "Ilasa, Maja, Lagos, Nigeria",
  city: "Lagos",
};

const featured = [
  {
    title: "Forklifts",
    subtitle: "Sales • Hire • Repairs • Maintenance",
    image: "/machines/forklift.jpg",
    items: ["Diesel / Electric", "Short & long-term hire", "Site delivery available"],
  },
  {
    title: "Cranes",
    subtitle: "Heavy lifting for projects & sites",
    image: "/machines/crane.jpg",
    items: ["Mobile crane hire", "Project support", "Professional handling"],
  },
  {
    title: "Earth Moving Equipment",
    subtitle: "Construction & industrial operations",
    image: "/machines/excavator.jpg",
    items: ["Excavators", "Loaders & dozers", "Flexible rental plans"],
  },
];

const gallery = [
  "/machines/forklift.jpg",
  "/machines/crane.jpg",
  "/machines/excavator.jpg",
  "/machines/bulldozer.jpg",
];

function waLink(phone: string, message: string) {
  const p = phone.replace(/\s+/g, "").replace("+", "");
  return `https://wa.me/${p}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const wa1 = waLink(BUSINESS.phones[0], `Hello ${BUSINESS.name}, I’d like a quote for equipment hire or purchase.`);
  const wa2 = waLink(BUSINESS.phones[1], `Hello ${BUSINESS.name}, I’d like a quote for equipment hire or purchase.`);

  return (
    <main style={{ fontFamily: "system-ui", color: "#0f172a" }}>
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #e2e8f0",
          zIndex: 20,
        }}
      >
        <div
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                display: "grid",
                placeItems: "center",
                background: "white",
              }}
            >
              <Image src="/logo.png" alt="K.O Mount Pleasant logo" width={48} height={48} />
            </div>

            <div style={{ lineHeight: 1.15 }}>
              <strong style={{ fontSize: 15 }}>{BUSINESS.name}</strong>
              <div style={{ fontSize: 12, color: "#475569" }}>{BUSINESS.tagline}</div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 14, fontSize: 14, flexWrap: "wrap" }}>
            <a href="#equipment" style={{ textDecoration: "none", color: "#0f172a" }}>Equipment</a>
            <a href="#gallery" style={{ textDecoration: "none", color: "#0f172a" }}>Gallery</a>
            <a href="#videos" style={{ textDecoration: "none", color: "#0f172a" }}>Videos</a>
            <a href="#contact" style={{ textDecoration: "none", color: "#0f172a" }}>Contact</a>
          </nav>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={wa1}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                background: "#0f172a",
                color: "white",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              WhatsApp (Line 1)
            </a>
            <a
              href={wa2}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #cbd5e1",
                color: "#0f172a",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 13,
                background: "white",
              }}
            >
              WhatsApp (Line 2)
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "64px 18px 28px" }}>
        <div
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 18,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "6px 10px",
                border: "1px solid #e2e8f0",
                borderRadius: 999,
                color: "#334155",
                fontSize: 13,
              }}
            >
              Lagos • Sales • Repairs • Hire • Fast response
            </div>

            <h1 style={{ fontSize: 46, lineHeight: 1.05, margin: "14px 0 10px" }}>
              Reliable equipment for lifting, handling & construction projects.
            </h1>

            <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.6, margin: "0 0 18px" }}>
              We supply and lease forklifts, cranes, and earth moving equipment for businesses, warehouses,
              and construction sites across Nigeria. Request a quote and we’ll respond quickly.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="#equipment"
                style={{
                  padding: "12px 16px",
                  borderRadius: 14,
                  background: "#0f172a",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 900,
                }}
              >
                View Equipment
              </a>

              <a
                href="#contact"
                style={{
                  padding: "12px 16px",
                  borderRadius: 14,
                  border: "1px solid #cbd5e1",
                  color: "#0f172a",
                  textDecoration: "none",
                  fontWeight: 900,
                  background: "white",
                }}
              >
                Call / Contact
              </a>
            </div>

            <div style={{ display: "flex", gap: 16, marginTop: 16, color: "#64748b", fontSize: 13, flexWrap: "wrap" }}>
              <span>✅ Genuine support & servicing</span>
              <span>✅ Short & long-term hire</span>
              <span>✅ Sales & repairs</span>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 18,
              overflow: "hidden",
              background: "#f8fafc",
            }}
          >
            {/* You can swap this image later */}
            <Image
              src="/machines/forklift.jpg"
              alt="Forklift"
              width={900}
              height={650}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" style={{ padding: "26px 18px 10px" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>Equipment</h2>
          <p style={{ margin: "0 0 18px", color: "#475569", lineHeight: 1.6 }}>
            Explore our categories. If you need a specific model or capacity, message us and we’ll source it.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {featured.map((c) => (
              <div
                key={c.title}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "white",
                }}
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  width={900}
                  height={600}
                  style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <div>
                      <strong style={{ fontSize: 16 }}>{c.title}</strong>
                      <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>{c.subtitle}</div>
                    </div>
                    <a
                      href={wa1}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: "8px 10px",
                        borderRadius: 12,
                        border: "1px solid #cbd5e1",
                        textDecoration: "none",
                        color: "#0f172a",
                        fontWeight: 800,
                        fontSize: 13,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Get quote
                    </a>
                  </div>

                  <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "#475569", lineHeight: 1.7, fontSize: 14 }}>
                    {c.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{ padding: "34px 18px 10px" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>Gallery</h2>
          <p style={{ margin: "0 0 18px", color: "#475569", lineHeight: 1.6 }}>
            Upload your machine photos and completed job pictures — we’ll showcase them neatly.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {gallery.map((src) => (
              <div
                key={src}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "#f8fafc",
                }}
              >
                <Image
                  src={src}
                  alt="Machine"
                  width={900}
                  height={650}
                  style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" style={{ padding: "34px 18px 10px" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>Job Videos</h2>
          <p style={{ margin: "0 0 18px", color: "#475569", lineHeight: 1.6 }}>
            Add short clips of lifting, loading, site work, deliveries, and installations.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 14 }}>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 18, overflow: "hidden", background: "white" }}>
              <div style={{ padding: 12, fontWeight: 900 }}>Project Video 1</div>
              <video
  controls
  preload="metadata"
  style={{ width: "100%", display: "block", background: "#0b1220" }}
>
  <source src="/videos/job-1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
              <div style={{ padding: 12, color: "#64748b", fontSize: 14 }}>
                Replace this with a YouTube embed or MP4 clip.
              </div>
            </div>

            <div style={{ border: "1px solid #e2e8f0", borderRadius: 18, overflow: "hidden", background: "white" }}>
              <div style={{ padding: 12, fontWeight: 900 }}>Project Video 2</div>
              <video
  controls
  preload="metadata"
  style={{ width: "100%", display: "block", background: "#0b1220" }}
>
  <source src="/videos/job-2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
              <div style={{ padding: 12, color: "#64748b", fontSize: 14 }}>
                Add more clips for credibility and trust.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "40px 18px 60px" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 22,
              padding: 18,
              background: "white",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div>
              <h2 style={{ margin: "0 0 8px", fontSize: 28 }}>Contact & Quotes</h2>
              <p style={{ margin: "0 0 14px", color: "#475569", lineHeight: 1.6 }}>
                Send the equipment type, capacity, duration, and location — we’ll respond with price and availability.
              </p>

              <div style={{ color: "#0f172a", lineHeight: 1.7 }}>
                <div><strong>{BUSINESS.name}</strong></div>
                <div style={{ color: "#475569" }}>{BUSINESS.addressLine1}</div>
                <div style={{ color: "#475569" }}>{BUSINESS.addressLine2}</div>

                <div style={{ marginTop: 10 }}>
                  Phone 1: <a style={{ color: "#0f172a" }} href={`tel:${BUSINESS.phones[0]}`}>{BUSINESS.phones[0]}</a>
                </div>
                <div>
                  Phone 2: <a style={{ color: "#0f172a" }} href={`tel:${BUSINESS.phones[1]}`}>{BUSINESS.phones[1]}</a>
                </div>

                <div style={{ marginTop: 6 }}>
                  Email: <a style={{ color: "#0f172a" }} href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <a
                  href={wa1}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "#0f172a",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 900,
                  }}
                >
                  WhatsApp Line 1
                </a>

                <a
                  href={wa2}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "12px 14px",
                    borderRadius: 14,
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    textDecoration: "none",
                    fontWeight: 900,
                    background: "white",
                  }}
                >
                  WhatsApp Line 2
                </a>
              </div>
            </div>

            <div
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: 18,
                overflow: "hidden",
                background: "#f8fafc",
              }}
            >
              <div style={{ padding: 14, fontWeight: 900 }}>Location</div>
             <iframe
  title="KO Mount Pleasant Location"
  src="https://www.google.com/maps/embed?pb=!3m2!1sen!2suk!4v1770056206012!5m2!1sen!2suk!6m8!1m7!1s5Hat8bb4xSxZ5mlFnqKTGw!2m2!1d6.522729141302904!2d3.336169658483817!3f157.63567269102634!4f1.699270420741314!5f0.7820865974627469"
  width="100%"
  height="260"
  style={{ border: 0, display: "block" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
              <div style={{ padding: 14, color: "#64748b", fontSize: 14 }}>
                K. O. Mount Pleasant (Nigeria) Limited.
              </div>
            </div>
          </div>

          <footer style={{ marginTop: 18, color: "#64748b", fontSize: 13 }}>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </footer>
        </div>
      </section>
    </main>
  );
}