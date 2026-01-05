import { useEffect, useMemo, useState } from "react";
import styles from "./App.styles.module.scss";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "science", label: "Science" },
  { id: "sustainability", label: "Sustainability" },
  { id: "traction", label: "Traction" },
  { id: "roadmap", label: "Roadmap" },
  { id: "model", label: "Model" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Badge({ children }) {
  return <span className={styles.badge}>{children}</span>;
}

function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}

function Section({ id, eyebrow, title, lead, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          {eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
          <h2 className={styles.h2}>{title}</h2>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const sections = useMemo(() => SECTIONS, []);
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-10% 0px -70% 0px",
      }
    );

    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, [sections]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#overview">
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <button
              className={styles.brand}
              type="button"
              onClick={() => scrollToId("overview")}
              aria-label="Go to top"
            >
              <span className={styles.brandMark} aria-hidden="true">
                S
              </span>
              <span className={styles.brandText}>
                <span className={styles.brandName}>SQUELLET™</span>
                <span className={styles.brandTag}>Sustainable Marine Nutraceuticals</span>
              </span>
            </button>

            <nav className={styles.nav} aria-label="Primary">
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`${styles.navLink} ${
                    active === s.id ? styles.navLinkActive : ""
                  }`}
                  onClick={() => scrollToId(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </nav>

            <div className={styles.headerCtas}>
              <button
                type="button"
                className={styles.ghostBtn}
                onClick={() => scrollToId("contact")}
              >
                Request deck
              </button>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={() => scrollToId("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.badgeRow}>
                  <Badge>Early-stage</Badge>
                  <Badge>Marine biotech</Badge>
                  <Badge>Clean-label</Badge>
                </div>

                <h1 className={styles.h1}>
                  Turning squid by-products into{" "}
                  <span className={styles.grad}>science-led</span> immune &amp; gut wellness
                  ingredients.
                </h1>

                <p className={styles.subtitle}>
                  SQUELLET™ develops sustainable, marine-derived nutraceuticals by transforming
                  underutilized squid and marine by-products—especially squid ink—into premium
                  bioactives.
                </p>

                <div className={styles.heroCtas}>
                  <button
                    type="button"
                    className={styles.primaryBtn}
                    onClick={() => scrollToId("solution")}
                  >
                    Explore the solution
                  </button>
                  <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={() => scrollToId("traction")}
                  >
                    View traction
                  </button>
                </div>

                <div className={styles.trustRow}>
                  <span className={styles.trustLabel}>Validated through:</span>
                  <div className={styles.trustBadges}>
                    <span className={styles.trustBadge}>UC Davis Entrepreneurship Academy</span>
                    <span className={styles.trustBadge}>NSF I-Corps Customer Discovery</span>
                  </div>
                </div>

                <p className={styles.disclaimer}>
                  *Dietary supplements are not intended to diagnose, treat, cure, or prevent any
                  disease. This site reflects an early-stage R&amp;D venture.
                </p>
              </div>

              <div className={styles.heroVisual} aria-hidden="true">
                <div className={styles.visualOrb} />
                <div className={styles.visualRing} />
                <div className={styles.visualGrid} />
                <div className={styles.visualCaption}>
                  <div className={styles.visualTitle}>Squid ink bioactives</div>
                  <div className={styles.visualText}>
                    Melanin-rich compounds • peptides • omega-3s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <Section
          id="overview"
          eyebrow="What we do"
          title="A sustainable marine nutraceutical platform"
          lead="We upcycle squid-derived materials into high-value bioactives for future consumer supplements and B2B ingredient partnerships."
        >
          <div className={styles.grid3}>
            <Card title="Health focus">
              Immune function, gut health, and metabolic wellness—guided by bioactive marine
              compounds.
            </Card>
            <Card title="Differentiation">
              Beyond fish oil and collagen: squid ink is an underutilized marine bioresource with a
              unique functional profile.
            </Card>
            <Card title="Circular economy">
              Turning low-value by-products into premium, clean-label nutrition inputs—reducing
              seafood waste.
            </Card>
          </div>
        </Section>

        {/* PROBLEM */}
        <Section
          id="problem"
          eyebrow="Why it matters"
          title="Marine supplements are crowded—and sustainability is inconsistent"
          lead="Many products are undifferentiated and rely on narrow ingredient categories. Meanwhile, valuable seafood by-products remain underused."
        >
          <div className={styles.grid2}>
            <Card title="What customers & brands struggle with">
              <ul className={styles.list}>
                <li>Generic formulations with limited functional differentiation</li>
                <li>Sourcing transparency and waste concerns</li>
                <li>Need for science-backed ingredients that stand out</li>
              </ul>
            </Card>
            <Card title="The opportunity">
              <ul className={styles.list}>
                <li>Squid by-products can be converted into higher-value bioactives</li>
                <li>Squid ink enables a distinctive product + brand narrative</li>
                <li>Growing preference for natural, traceable wellness</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* SOLUTION */}
        <Section
          id="solution"
          eyebrow="Our solution"
          title="Squid ink → stable, bioavailable nutraceutical ingredients"
          lead="We optimize extraction and formulation to preserve activity and enable reproducible quality suitable for nutraceutical pathways."
        >
          <div className={styles.grid3}>
            <Card title="Eco-friendly processing">
              Gentle extraction and low-temperature drying to preserve bioactivity while improving
              purity and stability.
            </Card>
            <Card title="Science-led formulation">
              Built around squid-derived peptides/amino acids, omega-3s, and melanin-rich compounds
              found in squid ink.
            </Card>
            <Card title="Built-in sustainability">
              Upcycling underutilized marine by-products reduces waste while creating premium wellness
              ingredients.
            </Card>
          </div>

          <div className={styles.ctaBand}>
            <div>
              <div className={styles.ctaTitle}>Taglines (pick one)</div>
              <div className={styles.ctaText}>
                “From ocean by-product to daily wellness.” <span className={styles.dot}>•</span>{" "}
                “Squid ink bioactives, reimagined.”
              </div>
            </div>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => scrollToId("contact")}
            >
              Ask for our one-pager
            </button>
          </div>
        </Section>

        {/* SCIENCE */}
        <Section
          id="science"
          eyebrow="Scientific foundation"
          title="What’s inside the platform"
          lead="Our R&D focuses on stabilizing and delivering key squid-derived compounds in formats suitable for nutraceutical use."
        >
          <div className={styles.grid3}>
            <Card title="Marine peptides & amino acids">
              Investigated for roles in gut barrier support and immune-related pathways (guides assay
              targets).
            </Card>
            <Card title="Omega-3 fatty acids (EPA/DHA)">
              Known for anti-inflammatory and cardiovascular relevance; complements broader functional
              positioning.
            </Card>
            <Card title="Marine melanin & polysaccharides">
              Squid ink is melanin-rich and associated with antioxidant and immune-regulatory potential
              in extract form.
            </Card>
          </div>

          <div className={styles.note}>
            <strong>Important:</strong> We communicate benefits as research-informed directions and
            validate through staged R&amp;D and pilot work.
          </div>
        </Section>

        {/* SUSTAINABILITY */}
        <Section
          id="sustainability"
          eyebrow="Impact"
          title="Marine circular economy, not more extraction"
          lead="SQUELLET creates value from existing seafood streams—supporting sustainability goals while enabling differentiated wellness products."
        >
          <div className={styles.grid2}>
            <Card title="How we reduce waste">
              <ul className={styles.list}>
                <li>Upcycle squid and marine by-products typically underused</li>
                <li>Increase value per unit biomass through premium bioactives</li>
                <li>Enable brands to source traceable, sustainability-aligned ingredients</li>
              </ul>
            </Card>
            <Card title="Why it matters">
              <ul className={styles.list}>
                <li>Stronger sustainability narrative than commodity marine oils</li>
                <li>Supports premium positioning and differentiation</li>
                <li>Aligned with clean-label and traceability expectations</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* TRACTION */}
        <Section
          id="traction"
          eyebrow="Progress"
          title="Validated concept + early lab-scale proof-of-concept"
          lead="We’ve progressed through structured entrepreneurship programs and early technical validation."
        >
          <div className={styles.grid3}>
            <Card title="Concept validation">
              Completed via structured entrepreneurship programs and customer discovery.
            </Card>
            <Card title="Lab-scale proof-of-concept">
              Pilot assays indicating antioxidant and immunomodulatory potential (guides next
              experiments).
            </Card>
            <Card title="Commercial readiness">
              Advancing formulation strategy, regulatory planning, and IP landscape work.
            </Card>
          </div>
        </Section>

        {/* ROADMAP */}
        <Section
          id="roadmap"
          eyebrow="Next 12 months"
          title="From formulation to pilot studies"
          lead="Our near-term plan focuses on stability, bioavailability, small-batch production, and early validation."
        >
          <div className={styles.timeline}>
            <div className={styles.step}>
              <div className={styles.stepDot} aria-hidden="true" />
              <div>
                <div className={styles.stepTitle}>Optimize formulation &amp; encapsulation</div>
                <div className={styles.stepText}>
                  Improve stability and bioavailability for nutraceutical formats.
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepDot} aria-hidden="true" />
              <div>
                <div className={styles.stepTitle}>Small-batch pilot production</div>
                <div className={styles.stepText}>
                  Establish reproducible processing and quality checks.
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepDot} aria-hidden="true" />
              <div>
                <div className={styles.stepTitle}>Controlled pilot studies</div>
                <div className={styles.stepText}>
                  Collect structured feedback with early adopters and advisors.
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepDot} aria-hidden="true" />
              <div>
                <div className={styles.stepTitle}>Regulatory &amp; IP strategy</div>
                <div className={styles.stepText}>
                  Refine nutraceutical safety pathway and defensibility plan.
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* BUSINESS MODEL */}
        <Section
          id="model"
          eyebrow="Go-to-market"
          title="Hybrid model: B2C + B2B"
          lead="We plan to launch direct-to-consumer supplements while enabling B2B partnerships through ingredient supply, licensing, and co-development."
        >
          <div className={styles.grid2}>
            <Card title="B2C (Direct-to-consumer)">
              <ul className={styles.list}>
                <li>Premium marine-derived supplements with sustainability narrative</li>
                <li>Faster iteration via direct customer feedback</li>
                <li>Captures retail margins</li>
              </ul>
            </Card>
            <Card title="B2B (Brands & manufacturers)">
              <ul className={styles.list}>
                <li>Functional marine ingredient supply</li>
                <li>Licensing or co-development for differentiated SKUs</li>
                <li>Scaling through partnerships</li>
              </ul>
            </Card>
          </div>

          <div className={styles.subtlePanel}>
            <div className={styles.subtleTitle}>Why this works</div>
            <div className={styles.subtleText}>
              Product revenue builds brand validation; partnerships scale distribution and accelerate
              adoption.
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Use this website link in applications today"
          lead="Replace the placeholder email (and optionally add a deck link). This page is designed to scan well for judges and investors."
        >
          <div className={styles.grid2}>
            <Card title="Quick actions">
              <div className={styles.contactBtns}>
                {/* Replace with your real email */}
                <a className={styles.primaryBtn} href="mailto:your-email@yourdomain.com">
                  Email us
                </a>
                <button type="button" className={styles.secondaryBtn} onClick={handlePrint}>
                  Print / Save as PDF
                </button>
              </div>
              <p className={styles.small}>
                Optional: add “View deck” once you have a share link.
              </p>
            </Card>

            <Card title="What we can share (on request)">
              <ul className={styles.list}>
                <li>1–2 page one-pager</li>
                <li>Roadmap + milestones</li>
                <li>Science + differentiation narrative</li>
                <li>Partnership concept brief</li>
              </ul>
            </Card>
          </div>

          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <div>
                <div className={styles.footerBrand}>SQUELLET™</div>
                <div className={styles.footerNote}>
                  Sustainable Marine-Derived Nutraceutical Innovation
                </div>
              </div>
              <button
                type="button"
                className={styles.footerLink}
                onClick={() => scrollToId("overview")}
              >
                Back to top ↑
              </button>
            </div>
          </footer>
        </Section>
      </main>
    </div>
  );
}
