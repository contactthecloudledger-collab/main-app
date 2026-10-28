import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, ExternalLink, CheckCircle2, XCircle, Dot } from "lucide-react";

import { tools, getTool } from "../data/tools";
import { ToolLogo } from "./UI";
import "./compare.css";

const formatLabel = (key) =>
  key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());

const MISSING = "Not covered in our research";
const norm = (v) => JSON.stringify(v ?? "").trim().toLowerCase();

// Builds every comparison row from the two tool objects.
// type: "text" short value, "long" paragraph (collapsible), "list", "pros", "cons", "link"
function buildGroups(a, b) {
  const factKeys = (t) => Object.keys(t.facts || {}).filter((k) => k !== "factsChecked");
  const aKeys = factKeys(a);
  const bKeys = factKeys(b);
  const shared = aKeys.filter((k) => bKeys.includes(k));
  const onlyA = aKeys.filter((k) => !bKeys.includes(k));
  const onlyB = bKeys.filter((k) => !aKeys.includes(k));

  const factRow = (k) => ({
    label: formatLabel(k),
    type: "text",
    a: a.facts?.[k],
    b: b.facts?.[k],
  });

  return [
    {
      id: "glance",
      title: "At a glance",
      rows: [
        { label: "Editorial score", type: "text", a: `${a.score.toFixed(1)} / 10`, b: `${b.score.toFixed(1)} / 10` },
        { label: "Rank in our directory", type: "text", a: a.rank != null ? `#${a.rank}` : "Unranked", b: b.rank != null ? `#${b.rank}` : "Unranked" },
        { label: "Category", type: "text", a: a.category, b: b.category },
        { label: "Known for", type: "text", a: a.tag, b: b.tag },
        { label: "Best for", type: "text", a: a.best, b: b.best },
        { label: "Summary", type: "long", a: a.summary, b: b.summary },
        { label: "Website", type: "link", a: a, b: b },
      ],
    },
    {
      id: "pricing",
      title: "Pricing",
      rows: [
        { label: "Pricing model", type: "text", a: a.price, b: b.price },
        { label: "Full pricing details", type: "long", a: a.pricingDetails, b: b.pricingDetails },
        ...["freePlan", "billingModel"].filter((k) => shared.includes(k)).map(factRow),
      ],
    },
    {
      id: "features",
      title: "Features",
      rows: [
        { label: "Key features", type: "list", a: a.features, b: b.features },
        { label: "Where it shines", type: "pros", a: a.pros, b: b.pros },
        { label: "Where it falls short", type: "cons", a: a.cons, b: b.cons },
      ],
    },
    {
      id: "details",
      title: "Product details",
      rows: [
        ...shared.filter((k) => !["freePlan", "billingModel"].includes(k)).map(factRow),
        ...onlyA.map(factRow),
        ...onlyB.map(factRow),
      ],
    },
    {
      id: "verdict",
      title: "Our assessment",
      rows: [
        { label: "Verdict", type: "long", a: a.verdict, b: b.verdict },
        { label: "Why it ranks here", type: "long", a: a.rankingReason, b: b.rankingReason },
        { label: "How we researched it", type: "long", a: a.reviewStatus, b: b.reviewStatus },
        { label: "Facts last checked", type: "text", a: a.facts?.factsChecked, b: b.facts?.factsChecked },
      ],
    },
  ];
}

function Cell({ type, value, expanded }) {
  if (type === "link") {
    return (
      <div className="cmp-val">
        <a className="cmp-visit" href={value.url} target="_blank" rel="noopener noreferrer">
          {value.domain} <ExternalLink size={12} />
        </a>
      </div>
    );
  }

  if (value == null || value === "" || (Array.isArray(value) && !value.length)) {
    return <div className="cmp-val is-missing">{MISSING}</div>;
  }

  if (type === "list" || type === "pros" || type === "cons") {
    const Icon = type === "pros" ? CheckCircle2 : type === "cons" ? XCircle : Dot;
    return (
      <ul className={`cmp-list is-${type}`}>
        {value.map((item) => (
          <li key={item}><Icon size={15} />{item}</li>
        ))}
      </ul>
    );
  }

  if (type === "long") {
    return (
      <div className="cmp-val">
        <p className={expanded ? "cmp-long" : "cmp-long is-clamped"}>{value}</p>
      </div>
    );
  }

  return <div className="cmp-val">{value}</div>;
}

export default function CompareModal({ baseSlug, compareSlug, onChangeCompare, onClose }) {
  const a = getTool(baseSlug);
  const b = compareSlug !== baseSlug ? getTool(compareSlug) : undefined;
  const [onlyDiff, setOnlyDiff] = useState(false);
  const [open, setOpen] = useState({}); // expanded long rows
  const closeRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  // Reset expanded rows when the compared tool changes
  useEffect(() => setOpen({}), [compareSlug]);

  const groups = useMemo(() => (a && b ? buildGroups(a, b) : []), [a, b]);

  if (!a) return null;

  const options = tools.filter((t) => t.slug !== a.slug);
  const winner = b && a.score !== b.score ? (a.score > b.score ? "a" : "b") : null;

  const jump = (id) => {
    const el = scrollRef.current?.querySelector(`#cmp-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="cmp-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cmp-panel" role="dialog" aria-modal="true" aria-labelledby="cmp-title">
        <header className="cmp-top">
          <div className="cmp-top-text">
            <h2 id="cmp-title">
              {a.name} vs {b ? b.name : "…"}
            </h2>
            {b && (
              <nav className="cmp-nav" aria-label="Jump to section">
                {groups.map((g) => (
                  <button type="button" key={g.id} onClick={() => jump(g.id)}>
                    {g.title}
                  </button>
                ))}
              </nav>
            )}
          </div>
          <button ref={closeRef} className="cmp-close" onClick={onClose} aria-label="Close comparison">
            <X size={20} />
          </button>
        </header>

        <div className="cmp-scroll" ref={scrollRef}>
          <div className="cmp-heads">
            <div className="cmp-heads-label">
              <label className="cmp-toggle">
                <input type="checkbox" checked={onlyDiff} onChange={(e) => setOnlyDiff(e.target.checked)} />
                Only show differences
              </label>
            </div>

            {[a, b].map((t, i) => (
              <div className="cmp-head" key={i}>
                {t ? (
                  <>
                    <div className="cmp-head-id">
                      <ToolLogo tool={t} />
                      <div>
                        <strong>{t.name}</strong>
                        <span className={winner === (i ? "b" : "a") ? "cmp-score is-lead" : "cmp-score"}>
                          {t.score.toFixed(1)}
                          {winner === (i ? "b" : "a") && <small>Higher score</small>}
                        </span>
                      </div>
                    </div>
                    <div className="cmp-meter"><i style={{ width: `${t.score * 10}%` }} /></div>
                  </>
                ) : (
                  <p className="cmp-empty">Pick a tool to compare</p>
                )}

                {i === 1 && (
                  <select
                    className="cmp-select"
                    value={b?.slug || ""}
                    onChange={(e) => onChangeCompare(e.target.value)}
                    aria-label="Choose a tool to compare"
                  >
                    {!b && <option value="">Choose a tool</option>}
                    {options.map((t) => (
                      <option key={t.slug} value={t.slug}>{t.name}</option>
                    ))}
                  </select>
                )}
              </div>
            ))}
          </div>

          {groups.map((group) => {
            const rows = onlyDiff
              ? group.rows.filter((r) => r.type === "link" || norm(r.a) !== norm(r.b))
              : group.rows;
            if (!rows.length) return null;

            return (
              <section className="cmp-group" id={`cmp-${group.id}`} key={group.id}>
                <h3>{group.title}</h3>
                {rows.map((row) => {
                  const key = `${group.id}-${row.label}`;
                  const same = row.type !== "link" && norm(row.a) === norm(row.b);
                  const isLong = row.type === "long" && (row.a || row.b);
                  return (
                    <div className={same ? "cmp-row is-same" : "cmp-row"} key={key}>
                      <div className="cmp-label">
                        {row.label}
                        {isLong && (
                          <button
                            type="button"
                            className="cmp-more"
                            aria-expanded={!!open[key]}
                            onClick={() => setOpen((o) => ({ ...o, [key]: !o[key] }))}
                          >
                            {open[key] ? "Show less" : "Read in full"}
                          </button>
                        )}
                      </div>
                      <Cell type={row.type} value={row.a} expanded={open[key]} />
                      <Cell type={row.type} value={row.b} expanded={open[key]} />
                    </div>
                  );
                })}
              </section>
            );
          })}
        </div>

        {b && (
          <footer className="cmp-foot">
            <div />
            {[a, b].map((t) => (
              <div className="cmp-foot-actions" key={t.slug}>
                <Link className="ledger-btn" to={`/reviews/${t.slug}`} onClick={onClose}>
                  Read {t.name} review <ArrowRight size={15} />
                </Link>
                <a className="cmp-visit" href={t.url} target="_blank" rel="noopener noreferrer">
                  Visit site <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </footer>
        )}
      </div>
    </div>
  );
}