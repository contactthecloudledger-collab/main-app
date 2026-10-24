import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  ChartNoAxesCombined,
  Wallet,
  Server,
  Tags,
  ShieldCheck,
  BookOpen,
  ExternalLink,
} from "lucide-react";

import { tools } from "../data/tools";
import { ToolLogo } from "../components/UI";
const money = [
  ["On-demand compute", "$48,200", 59, "#2755d9", "Commitment Automation"],
  ["Idle environments", "$9,400", 12, "#6389ff", "Cloud Optimization"],
  ["Unattached storage", "$2,150", 3, "#a6bdff", "Cost Management"],
  ["Kubernetes nodes", "$14,800", 18, "#f38a48", "Kubernetes Optimization"],
  ["Unallocated spend", "$6,900", 8, "#a2aec1", "Cost Intelligence"],
];
const questions = [
  [
    "How do commitment tools lower costs?",
    "They help purchase and manage cloud discounts such as Savings Plans and Reserved Instances for eligible usage.",
  ],
  [
    "Can I use more than one FinOps platform?",
    "Yes. Many teams combine commitment management, cost allocation and Kubernetes optimization.",
  ],
  [
    "How are editorial scores calculated?",
    "The scores currently illustrate the design. Our published methodology will use documented tests and weighted criteria.",
  ],
  [
    "Do I need to connect my cloud account?",
    "Some products require read-only billing access for analysis. Permissions vary by provider and product.",
  ],
];
export default function Home() {
  const [active, setActive] = useState(-1);
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [faq, setFaq] = useState(-1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const categories = [
    "All",
    "Commitment Automation",
    "Cost Intelligence",
    "Kubernetes Optimization",
    "Cloud Optimization",
    "Cost Management",
  ];
  let ranked = tools.filter((t) => filter === "All" || t.category === filter);
  return (
    <main className="ledger-home">
      <section className="ledger-hero">
        <div className="ledger-wrap ledger-hero-grid">
          <div>
            <span className="ledger-kicker">
              <b>2026 EDITION</b> Independent FinOps reviews
            </span>
            <h1>Find the right cloud cost optimization platform.</h1>
            <p>
              Compare the tools that help teams reduce cloud spend, automate
              savings and understand where every dollar goes.
            </p>
            <div className="ledger-hero-actions">
              <a className="ledger-btn" href="#rankings">
                Explore rankings <ArrowRight size={17} />
              </a>
              <Link className="ledger-btn ledger-btn-outline" to="/reviews">
                Browse reviews
              </Link>
            </div>
            <div className="ledger-proof">
              <div className="ledger-stack">
                {tools.slice(0, 4).map((t) => (
                  <ToolLogo key={t.slug} tool={t} />
                ))}
              </div>
              <span>
                <strong>{tools.length} platforms</strong> compared across cloud
                cost categories
              </span>
            </div>
          </div>
          <div className="ledger-spend">
            <div className="ledger-spend-head">
              <div>
                <small>MONTHLY CLOUD SPEND</small>
                <h3>
                  $81,450 <span>example account</span>
                </h3>
              </div>
              <span className="ledger-tag">Example data</span>
            </div>
            <div className="ledger-segments">
              {money.map((m, i) => (
                <i key={i} style={{ background: m[3], flex: m[2] }} />
              ))}
            </div>
            {money.map((m, i) => (
              <button
                type="button"
                onClick={() => {
                  setActive(i);
                  setFilter(m[4]);
                  document
                    .getElementById("rankings")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={"ledger-spend-row " + (active === i ? "chosen" : "")}
                key={m[0]}
              >
                <span className="ledger-dot" style={{ background: m[3] }} />
                <span>{m[0]}</span>
                <strong>{m[1]}</strong>
                <small>{m[2]}%</small>
                <ArrowRight size={14} />
              </button>
            ))}
            <div className="ledger-spend-bottom">
              Select a cost category to find relevant tools below.
            </div>
            <Link className="ledger-floating" to="/reviews/usage-ai">
              <span>EDITOR'S FEATURED PICK</span>
              <div>
                <ToolLogo tool={tools[0]} />
                <strong>{tools[0].name}</strong>
                <b>{tools[0].score.toFixed(1)} / 10</b>
              </div>
              <small>
                Explore the detailed review <ArrowRight size={13} />
              </small>
            </Link>
          </div>
        </div>
      </section>
      <section className="ledger-section ledger-soft">
        <div className="ledger-wrap">
          <div className="ledger-heading">
            <div>
              <span className="ledger-overline">THE SHORTLIST</span>
              <h2>Top picks for cloud teams</h2>
              <p>Different strengths for different cloud cost challenges.</p>
            </div>
            <Link to="/best-tools">
              View all platforms <ArrowRight size={16} />
            </Link>
          </div>
          <div className="ledger-picks">
            {[
              tools[0],
              tools.find((t) => t.slug === "cloudzero"),
              tools.find((t) => t.slug === "vantage"),
            ]
              .filter(Boolean)
              .map((t, i) => (
                <div className="ledger-pick" key={t.slug}>
                  <span className="ledger-pick-label">
                    {
                      [
                        "Best for commitments",
                        "Best for unit economics",
                        "Best for reporting",
                      ][i]
                    }
                  </span>
                  <div className="ledger-pick-title">
                    <ToolLogo tool={t} />
                    <h3>{t.name}</h3>
                    <strong>
                      {t.score.toFixed(1)}
                      <small>/10</small>
                    </strong>
                  </div>
                  <p>{t.summary}</p>
                  <div className="ledger-pick-actions">
                    <Link className="ledger-btn" to={"/reviews/" + t.slug}>
                      Read review <ArrowRight size={15} />
                    </Link>
                    <a href={t.url} target="_blank" rel="noreferrer">
                      Vendor website <ExternalLink size={16} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section
        id="rankings"
        className="ledger-section ledger-soft ledger-rankings"
      >
        <div className="ledger-wrap">
          <div className="ledger-heading">
            <div>
              <span className="ledger-overline">EDITORIAL DIRECTORY</span>
              <h2>Best cloud cost tools in 2026</h2>
              <p>
                Explore product strengths, pricing approaches and use cases.
              </p>
            </div>
            
          </div>
          <div className="ledger-filters">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setFilter(c);
                  setShowAll(false);
                }}
                className={filter === c ? "selected" : ""}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="ledger-list">
            {ranked.slice(0, showAll ? undefined : 5).map((t, i) => (
              <article className="ledger-rank-row" key={t.slug}>
                <div className="ledger-rank-num">{t.rank}</div>
                <ToolLogo tool={t} />
                <div className="ledger-rank-info">
                  <div className="ledger-rank-name">
                    <h3>{t.name}</h3>
                    <span>{t.category}</span>
                  </div>
                  <p>{t.summary}</p>
                  <small>
                    <b>Best for:</b> {t.best}
                  </small>
                  <ul>
                    {t.pros.slice(0, 3).map((x) => (
                      <li key={x}>
                        <Check size={15} />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ledger-rank-score">
                  <div>
                    <strong>{t.score.toFixed(1)}</strong>
                    <span>/10 editor score</span>
                  </div>
                  <div className="ledger-meter">
                    <i style={{ width: t.score * 10 + "%" }} />
                  </div>
                  <small>{t.price}</small>
                  <Link className="ledger-btn" to={"/reviews/" + t.slug}>
                    Read {t.name} review
                  </Link>
                  <a href={t.url} target="_blank" rel="noreferrer">
                    Visit website <ExternalLink size={15} strokeWidth={1.9} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          {ranked.length > 5 && (
            <button
              className="ledger-show"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show fewer platforms"
                : "Show all " + ranked.length + " platforms"}{" "}
              <ChevronDown size={16} />
            </button>
          )}
        </div>
      </section>
      <section className="ledger-section">
        <div className="ledger-wrap">
          <div className="ledger-heading">
            <div>
              <span className="ledger-overline">SIDE BY SIDE</span>
              <h2>Compare at a glance</h2>
              <p>Find the tools that match your requirements.</p>
            </div>
            <Link to="/reviews">
              Explore every review <ArrowRight size={16} />
            </Link>
          </div>
          <div className="ledger-table-wrap">
            <table className="ledger-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Score</th>
                  <th>Best for</th>
                  <th>Pricing approach</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {tools.slice(0, 8).map((t) => (
                  <tr key={t.slug}>
                    <td>
                      <ToolLogo tool={t} />
                      <b>{t.name}</b>
                    </td>
                    <td>
                      <strong>{t.score.toFixed(1)}</strong>
                    </td>
                    <td>{t.best}</td>
                    <td>{t.price}</td>
                    <td>
                      <Link to={"/reviews/" + t.slug}>
                        View review <ArrowRight size={16} strokeWidth={2} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="ledger-section ledger-soft">
        <div className="ledger-wrap">
          <div className="ledger-heading">
            <div>
              <span className="ledger-overline">BUYER'S GUIDE</span>
              <h2>Not sure where to start?</h2>
              <p>Choose the problem you want to solve first.</p>
            </div>
          </div>
          <div className="ledger-usecases">
            {[
              [
                Wallet,
                "Lower commitment costs",
                "Automate cloud discounts across predictable workloads",
                "usage-ai",
              ],
              [
                Server,
                "Optimize Kubernetes",
                "Find waste in container infrastructure and clusters",
                "cast-ai",
              ],
              [
                Tags,
                "Understand unit economics",
                "Allocate cloud costs to customers, teams and products",
                "cloudzero",
              ],
              [
                ChartNoAxesCombined,
                "Monitor multi-cloud spend",
                "See budgets, reports and anomalies in one place",
                "vantage",
              ],
            ].map(([Icon, title, desc, slug]) => {
              let t = tools.find((x) => x.slug === slug);
              return (
                <Link to={"/reviews/" + slug} key={slug}>
                  <span className="ledger-case-icon">
                    <Icon size={23} />
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div>
                    <ToolLogo tool={t} />
                    <b>{t.name}</b>
                    <ArrowRight size={17} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="ledger-section">
        <div className="ledger-wrap ledger-method">
          <div>
            <span className="ledger-overline">TRANSPARENT RESEARCH</span>
            <h2>How we evaluate platforms</h2>
            <p>
              We compare capabilities, usability, savings potential and pricing
              clarity. Published testing findings will be distinguished from
              vendor documentation.
            </p>
            <Link className="ledger-btn ledger-btn-outline" to="/how-we-test">
              Read our methodology <ArrowRight size={16} />
            </Link>
          </div>
          <div className="ledger-method-cards">
            {[
              ["30%", "Savings potential"],
              ["25%", "Automation"],
              ["20%", "Visibility & allocation"],
              ["15%", "Pricing clarity"],
              ["10%", "Setup & support"],
            ].map(([n, l]) => (
              <div key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ledger-section ledger-guides">
        <div className="ledger-wrap">
          <div className="ledger-heading">
            <div>
              <span className="ledger-overline">
                FIELD NOTES / FINOPS LIBRARY
              </span>
              <h2>Guides for a smarter cloud bill</h2>
              <p>
                Understand the decisions behind cloud pricing before choosing a
                platform.
              </p>
            </div>
            <Link to="/how-we-test">
              Explore our research <ArrowRight size={16} />
            </Link>
          </div>
          <div className="v2-guides">
            <Link className="v2-guide-main" to="/how-we-test">
              <div className="v2-guide-graphic">
                <div className="v2-chart-title">
                  Commitment coverage vs on-demand
                </div>
                <div className="v2-chart">
                  <i style={{ height: "49%" }} />
                  <i style={{ height: "67%" }} />
                  <i style={{ height: "56%" }} />
                  <i style={{ height: "79%" }} />
                  <i style={{ height: "64%" }} />
                  <i style={{ height: "89%" }} />
                  <i style={{ height: "73%" }} />
                  <i style={{ height: "92%" }} />
                  <i style={{ height: "76%" }} />
                </div>
              </div>
              <div className="v2-guide-copy">
                <span>COMMITMENT STRATEGY · 8 MIN READ</span>
                <h3>
                  Savings Plans vs Reserved Instances: choosing the right
                  commitment
                </h3>
                <p>
                  When flexibility matters more than the deepest possible
                  discount.
                </p>
                <b>Read the guide →</b>
              </div>
            </Link>
            <div className="v2-guide-side">
              <Link to="/reviews/usage-ai">
                <span className="v2-mini-icon">%</span>
                <div>
                  <small>PRICING</small>
                  <h3>How savings-based pricing really works</h3>
                  <p>Understand fees tied to realized savings.</p>
                  <b>Explore →</b>
                </div>
              </Link>
              <Link to="/reviews/cast-ai">
                <span className="v2-mini-icon">⌘</span>
                <div>
                  <small>KUBERNETES</small>
                  <h3>Where Kubernetes cost waste hides</h3>
                  <p>Capacity, idle nodes and automation explained.</p>
                  <b>Explore →</b>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="ledger-section ledger-soft">
        <div className="ledger-wrap ledger-faq">
          <div>
            <span className="ledger-overline">COMMON QUESTIONS</span>
            <h2>Questions cloud buyers ask</h2>
            <p>Practical answers before you book a demo.</p>
          </div>
          <div>
            {questions.map(([q, a], i) => (
              <div className="ledger-faq-item" key={q}>
                <button onClick={() => setFaq(faq === i ? -1 : i)}>
                  {q}
                  <span>{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ledger-section">
        <div className="ledger-wrap ledger-newsletter">
          <div>
            <span>THE MONTHLY CLOUD COST BRIEF</span>
            <h2>Better cloud decisions, in your inbox.</h2>
            <p>Review updates, pricing changes and useful FinOps research.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <label htmlFor="newsletter">Work email</label>
            <div>
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
              />
              <button type="submit">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
            <small>
              {subscribed
                ? "Thanks! we recieved you submission."
                : ""}
            </small>
          </form>
        </div>
      </section>
    </main>
  );
}
