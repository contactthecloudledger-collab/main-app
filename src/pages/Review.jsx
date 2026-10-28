import React, { useState, useCallback } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Star,
  ChevronRight,
  CheckCircle2,
  XCircle,
  ArrowLeftRight,
} from "lucide-react";

import { tools, getTool } from "../data/tools";
import { ToolLogo } from "../components/UI";
import CompareModal from "../components/CompareModal";

const anchors = [
  ["overview", "Overview"],
  ["verdict", "Our verdict"],
  ["features", "Key features"],
  ["pricing", "Pricing"],
  ["facts", "Fact sheet"],
  ["alternatives", "Alternatives"],
  ["reader-reviews", "Reader reviews"],
];

const formatFactLabel = (key) =>
  key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (character) => character.toUpperCase());

export default function Review() {
  const { slug } = useParams();

  const tool = getTool(slug);

  // Compare modal state lives in the URL (?compare=nops) so it is shareable
  const [searchParams, setSearchParams] = useSearchParams();
  const compareSlug = searchParams.get("compare");
  const openCompare = useCallback(
    (otherSlug) => setSearchParams({ compare: otherSlug }),
    [setSearchParams]
  );
  const changeCompare = useCallback(
    (otherSlug) => setSearchParams({ compare: otherSlug }, { replace: true }),
    [setSearchParams]
  );
  const closeCompare = useCallback(
    () => setSearchParams({}, { replace: true }),
    [setSearchParams]
  );

  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!tool) {
    return (
      <main className="ledger-review">
        <div className="ledger-wrap">
          <h1>Review not found</h1>
          <p>The requested software review is not available.</p>
          <Link to="/reviews">Browse reviews</Link>
        </div>
      </main>
    );
  }

  const others = [
    ...(tool.alternatives || [])
      .map((alternativeSlug) => getTool(alternativeSlug))
      .filter(Boolean),
    ...tools.filter(
      (item) =>
        item.slug !== tool.slug &&
        !(tool.alternatives || []).includes(item.slug)
    ),
  ].slice(0, 4);

  const factRows = tool.facts
    ? Object.entries(tool.facts).map(([key, value]) => [
        formatFactLabel(key),
        value,
      ])
    : [
        ["Product", tool.name],
        ["Category", tool.category],
        ["Best for", tool.best],
        ["Pricing", tool.price],
        ["Cloud cost focus", tool.tag],
        ["Notable features", tool.features.join(", ")],
        ["Website", tool.domain],
      ];

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo only. No review is saved or sent to a server.
    setSubmitted(true);

    setRating(0);
    setTitle("");
    setBody("");
    setName("");
    setRole("");
    setConfirmed(false);
  };

  return (
    <main className="ledger-review">
      <div className="ledger-wrap">
        {/* Breadcrumb */}
        <div className="ledger-crumb">
          <Link to="/">Home</Link>

          <ChevronRight size={13} />

          <Link to="/reviews">Reviews</Link>

          <ChevronRight size={13} />

          <span>{tool.name}</span>
        </div>

        {/* Review Hero */}
        <div className="ledger-review-hero">
          <div className="ledger-review-identity">
            <ToolLogo tool={tool} size="large" />

            <div>
              <span className="ledger-overline">
                IN-DEPTH SOFTWARE REVIEW · 2026
              </span>

              <h1>{tool.name} review</h1>

              <div className="ledger-badges">
                {tool.rank != null && (
                  <span>#{tool.rank} in our directory</span>
                )}

                <span>{tool.category}</span>

                <span>Cloud cost optimization</span>
              </div>

              <p>{tool.summary}</p>
            </div>
          </div>

          <div className="ledger-review-rating">
            <div>
              <strong>{tool.score.toFixed(1)}</strong>
              <span>/10 editorial score</span>
            </div>

            <div className="ledger-meter">
              <i
                style={{
                  width: `${tool.score * 10}%`,
                }}
              />
            </div>

            <a
              className="ledger-btn"
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {tool.name}
              <ExternalLink size={15} />
            </a>

            <button
              type="button"
              className="ledger-btn ledger-btn-outline cmp-open"
              onClick={() => openCompare(others[0]?.slug)}
            >
              <ArrowLeftRight size={15} />
              Compare with another tool
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="ledger-review-tabs">
        <div className="ledger-wrap">
          {anchors.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="ledger-review-body">
        <div className="ledger-wrap ledger-review-grid">
          <article>
            {/* Overview */}
            <section
              id="overview"
              className="ledger-review-section"
            >
              <div className="ledger-pros-cons">
                <div>
                  <h3>Where it shines</h3>

                  {tool.pros.map((pro) => (
                    <p key={pro}>
                      <CheckCircle2 size={18} />
                      {pro}
                    </p>
                  ))}
                </div>

                <div>
                  <h3>Where it falls short</h3>

                  {tool.cons.map((con) => (
                    <p key={con}>
                      <XCircle size={18} />
                      {con}
                    </p>
                  ))}
                </div>
              </div>

              {/* Actual Product Screenshot */}
              <div
                className="ledger-product-visual"
                style={{
                  padding: 0,
                  minHeight: 0,
                  height: "auto",
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                {tool.screenshot ? (
                  <img
                    src={tool.screenshot}
                    alt={`${tool.name} product interface screenshot`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      display: "block",
                      width: "100%",
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <div className="ledger-product-visual-content">
                    <ToolLogo tool={tool} size="large" />

                    <h3>{tool.name}</h3>

                    <p>{tool.tag}</p>
                  </div>
                )}
              </div>

              <small className="ledger-visual-caption">
                {tool.name} product interface image.
                Features and interface may change.
              </small>
            </section>

            {/* Editorial Verdict */}
            <section
              id="verdict"
              className="ledger-review-section"
            >
              <span className="ledger-overline">
                EDITORIAL ASSESSMENT
              </span>

              <h2>Our verdict on {tool.name}</h2>

              <p>
                {tool.verdict ||
                  `${tool.name} focuses on ${tool.category.toLowerCase()}. ${tool.summary}`}
              </p>

              <p>
                {tool.name} is particularly relevant for{" "}
                {tool.best.toLowerCase()}.
              </p>

              <div className="ledger-callout">
                <h3>
                  Why {tool.name} makes the shortlist
                </h3>

                <p>
                  {tool.rankingReason ||
                    `${tool.tag}. Its primary strengths include ${tool.pros
                      .slice(0, 3)
                      .join(", ")
                      .toLowerCase()}.`}
                </p>

                <Link to="/how-we-test">
                  Read how we evaluate tools
                  <ArrowRight size={15} />
                </Link>
              </div>
            </section>

            {/* Key Features */}
            <section
              id="features"
              className="ledger-review-section"
            >
              <span className="ledger-overline">
                WHAT IT DOES
              </span>

              <h2>Key features and capabilities</h2>

              <p>
                These are the product capabilities worth
                exploring in a demo or trial.
              </p>

              <div className="ledger-feature-list">
                {tool.features.map((feature, index) => (
                  <div key={feature}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3>{feature}</h3>

                      <p>
                        Ask the vendor how this capability
                        works for your accounts, workloads,
                        permissions and approval process.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section
              id="pricing"
              className="ledger-review-section"
            >
              <span className="ledger-overline">
                COMMERCIAL DETAILS
              </span>

              <h2>{tool.name} pricing</h2>

              <div className="ledger-pricing-pills">
                <span>{tool.category}</span>

                <span>
                  Confirm current terms with vendor
                </span>
              </div>

              <p>{tool.pricingDetails || tool.price}</p>

              <div className="ledger-price-card">
                <div>
                  <h3>Questions to ask before buying</h3>

                  <ul>
                    <li>
                      How is eligible cloud spend calculated?
                    </li>

                    <li>
                      Are there onboarding fees or minimum
                      commitments?
                    </li>

                    <li>
                      What happens if usage falls unexpectedly?
                    </li>

                    <li>
                      Which cloud accounts and services
                      are supported?
                    </li>
                  </ul>
                </div>

                <div>
                  <h3>Official pricing information</h3>

                  <p>
                    Review the vendor's published pricing
                    or request a tailored assessment.
                  </p>

                  <a
                    className="ledger-btn ledger-btn-outline"
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See vendor website
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </section>

            {/* Implementation Roadmap */}
            <section className="ledger-review-section v2-process">
              <span className="ledger-overline">
                IMPLEMENTATION ROADMAP
              </span>

              <h2>What getting started looks like</h2>

              <div className="v2-process-list">
                {[
                  [
                    "01",
                    "Discover your cost baseline",
                    "Review the accounts, workloads and billing dimensions that matter.",
                  ],
                  [
                    "02",
                    "Validate fit and permissions",
                    "Confirm supported services, access scope and the product workflow.",
                  ],
                  [
                    "03",
                    "Measure and improve",
                    "Track savings, coverage and ongoing optimization results.",
                  ],
                ].map(([number, heading, description]) => (
                  <div key={number}>
                    <b>{number}</b>

                    <div>
                      <h3>{heading}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fact Sheet */}
            <section
              id="facts"
              className="ledger-review-section"
            >
              <span className="ledger-overline">
                PRODUCT PROFILE
              </span>

              <h2>{tool.name} fact sheet</h2>

              <div className="ledger-facts">
                {[
                  ["Product", tool.name],
                  ["Category", tool.category],
                  ["Best for", tool.best],
                  ["Pricing", tool.price],
                  ...factRows.filter(
                    ([key]) =>
                      ![
                        "Product",
                        "Category",
                        "Best for",
                        "Pricing",
                      ].includes(key)
                  ),
                  ["Website", tool.domain],
                ].map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison */}
            <section className="ledger-review-section">
              <span className="ledger-overline">
                COMPARISON
              </span>

              <h2>How {tool.name} compares</h2>

              <p>
                Different products solve different parts
                of the FinOps workflow. Compare them by
                core use case rather than rating alone.
              </p>

              <div className="ledger-table-wrap">
                <table className="ledger-table">
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Specialty</th>
                      <th>Score</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {[tool, ...others.slice(0, 3)].map(
                      (item) => (
                        <tr key={item.slug}>
                          <td>
                            <b>{item.name}</b>
                          </td>

                          <td>{item.category}</td>

                          <td>
                            {item.score.toFixed(1)}
                          </td>

                          <td>
                            {item.slug !== tool.slug && (
                              <button
                                type="button"
                                className="cmp-trigger"
                                style={{ margin: "0 0 6px" }}
                                onClick={() => openCompare(item.slug)}
                              >
                                Compare side by side
                              </button>
                            )}
                            <Link
                              to={`/reviews/${item.slug}`}
                            >
                              Read review
                              <ArrowRight
                                size={15}
                                strokeWidth={2}
                              />
                            </Link>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Alternatives */}
            <section
              id="alternatives"
              className="ledger-review-section"
            >
              <span className="ledger-overline">
                EXPLORE OPTIONS
              </span>

              <h2>Alternatives to {tool.name}</h2>

              <div className="ledger-alternatives">
                {others.map((item) => (
                  <Link
                    to={`/reviews/${item.slug}`}
                    key={item.slug}
                  >
                    <ToolLogo tool={item} />

                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.tag}</small>
                    </div>

                    <b>{item.score.toFixed(1)}</b>

                    <ArrowRight size={17} />
                  </Link>
                ))}
              </div>
            </section>

            {/* Reader Reviews */}
            <section
              id="reader-reviews"
              className="ledger-review-section"
            >
              <span className="ledger-overline">
                COMMUNITY PERSPECTIVES
              </span>

              <h2>Have you used {tool.name}?</h2>

              <p>
                Share your experience with features,
                onboarding and pricing.
              </p>

              <form
                className="ledger-review-form"
                onSubmit={handleSubmit}
                onChange={() => {
                  if (submitted) setSubmitted(false);
                }}
              >
                <label>Your rating</label>

                <div className="ledger-stars">
                  {[1, 2, 3, 4, 5].map((number) => (
                    <button
                      type="button"
                      aria-label={`${number} stars`}
                      aria-pressed={rating === number}
                      onClick={() => {
                        setRating(number);
                        setSubmitted(false);
                      }}
                      key={number}
                    >
                      <Star
                        size={25}
                        fill={
                          number <= rating
                            ? "#f5b84c"
                            : "none"
                        }
                        color={
                          number <= rating
                            ? "#e8a72d"
                            : "#9baac0"
                        }
                      />
                    </button>
                  ))}

                  <small>
                    {rating
                      ? `${rating} of 5 stars`
                      : "Select a rating"}
                  </small>
                </div>

                <label htmlFor="review-title">
                  Review title
                </label>

                <input
                  id="review-title"
                  required
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="Summarize your experience"
                />

                <label htmlFor="review-body">
                  Your review
                </label>

                <textarea
                  id="review-body"
                  required
                  minLength={30}
                  value={body}
                  onChange={(event) =>
                    setBody(event.target.value)
                  }
                  placeholder="What worked well? What would you improve?"
                />

                <div className="ledger-form-grid">
                  <div>
                    <label htmlFor="review-name">
                      Your name
                    </label>

                    <input
                      id="review-name"
                      required
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="review-role">
                      Your role
                    </label>

                    <input
                      id="review-role"
                      value={role}
                      onChange={(event) =>
                        setRole(event.target.value)
                      }
                      placeholder="e.g. FinOps lead"
                    />
                  </div>
                </div>

                <label className="ledger-check">
                  <input
                    type="checkbox"
                    required
                    checked={confirmed}
                    onChange={(event) =>
                      setConfirmed(event.target.checked)
                    }
                  />

                  I confirm this reflects my own experience.
                </label>

                <button
                  className="ledger-btn"
                  type="submit"
                  disabled={!rating}
                >
                  Submit review
                  <ArrowRight size={16} />
                </button>

                {submitted && (
                  <p
                    className="ledger-form-notice"
                    role="status"
                  >
                    This is a demo form. Your review has
                    not been saved or published.
                  </p>
                )}
              </form>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="ledger-review-sidebar">
            <div className="ledger-aside-card">
              <h3>At a glance</h3>

              {[
                [
                  "Editor score",
                  `${tool.score.toFixed(1)} / 10`,
                ],
                ["Pricing", tool.price],
                ["Best for", tool.best],
                ["Category", tool.category],
                ["Updated", "October 2026"],
              ].map(([key, value]) => (
                <div key={key}>
                  <span>{key}</span>
                  <strong>{value}</strong>
                </div>
              ))}

              <a
                className="ledger-btn"
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {tool.name}
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="ledger-aside-links">
              <h3>Compare {tool.name}</h3>

              {others.map((item) => (
                <button
                  type="button"
                  className="cmp-trigger"
                  key={item.slug}
                  onClick={() => openCompare(item.slug)}
                >
                  {tool.name} vs {item.name}
                  <ArrowRight size={13} />
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
      {compareSlug && (
        <CompareModal
          baseSlug={tool.slug}
          compareSlug={compareSlug}
          onChangeCompare={changeCompare}
          onClose={closeCompare}
        />
      )}
    </main>
  );
}