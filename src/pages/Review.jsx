import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ExternalLink,
  Star,
  ChevronRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

import { tools, getTool } from '../data/tools';
import { ToolLogo } from '../components/UI';

const anchors = [
  ['overview', 'Overview'],
  ['verdict', 'Our verdict'],
  ['features', 'Key features'],
  ['pricing', 'Pricing'],
  ['facts', 'Fact sheet'],
  ['alternatives', 'Alternatives'],
  ['reader-reviews', 'Reader reviews'],
];

export default function Review() {
  const { slug } = useParams();
  const tool = getTool(slug) || tools[0];
  const others = tools.filter((x) => x.slug !== tool.slug).slice(0, 4);

  // Review form state
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo submission only. No data is sent to a server.
    setSubmitted(true);

    // Reset all form fields
    setRating(0);
    setTitle('');
    setBody('');
    setName('');
    setRole('');
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
                <span>#{tool.rank} in our directory</span>
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
              <i style={{ width: `${tool.score * 10}%` }} />
            </div>

            <a
              className="ledger-btn"
              href={tool.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit {tool.name}
              <ExternalLink size={15} />
            </a>

            <small>Ratings are provisional until hands-on testing.</small>
          </div>
        </div>
      </div>

      {/* Sticky Section Navigation */}
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
            <section id="overview" className="ledger-review-section">
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

              <div className="ledger-product-visual">
                <div className="ledger-product-visual-top">
                  <span>PRODUCT CAPABILITY OVERVIEW</span>
                  <span>{tool.category}</span>
                </div>

                <div className="ledger-product-visual-content">
                  <ToolLogo tool={tool} size="large" />

                  <h3>{tool.name}</h3>
                  <p>{tool.tag}</p>

                  <div className="ledger-capabilities">
                    {tool.features.map((feature) => (
                      <span key={feature}>
                        <Check size={15} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <small className="ledger-visual-caption">
                Feature summary graphic, not an actual vendor dashboard screenshot.
              </small>
            </section>

            {/* Editorial Verdict */}
            <section id="verdict" className="ledger-review-section">
              <span className="ledger-overline">EDITORIAL ASSESSMENT</span>

              <h2>Our verdict on {tool.name}</h2>

              <p>
                {tool.name} focuses on {tool.category.toLowerCase()}.{' '}
                {tool.summary}
              </p>

              <p>
                For teams evaluating cloud spending tools, the important
                question is whether the platform addresses the largest source
                of waste in their environment. {tool.name} is particularly
                relevant for {tool.best.toLowerCase()}.
              </p>

              <p>
                We recommend checking supported cloud services, access
                requirements and commercial terms with the vendor before
                choosing a platform. A thorough hands-on review should also
                validate the actual savings and day-to-day workflows.
              </p>

              <div className="ledger-callout">
                <h3>Why {tool.name} makes the shortlist</h3>

                <p>
                  {tool.tag}. Its primary strengths include{' '}
                  {tool.pros.slice(0, 3).join(', ').toLowerCase()}.
                </p>

                <Link to="/how-we-test">
                  Read how we evaluate tools
                  <ArrowRight size={15} />
                </Link>
              </div>
            </section>

            {/* Key Features */}
            <section id="features" className="ledger-review-section">
              <span className="ledger-overline">WHAT IT DOES</span>

              <h2>Key features and capabilities</h2>

              <p>
                These are the product capabilities worth exploring in a demo
                or trial.
              </p>

              <div className="ledger-feature-list">
                {tool.features.map((feature, index) => (
                  <div key={feature}>
                    <span>{String(index + 1).padStart(2, '0')}</span>

                    <div>
                      <h3>{feature}</h3>

                      <p>
                        Assess how this capability works for your accounts,
                        workloads and approval process. Ask the vendor for an
                        example using your own cloud billing profile.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="ledger-review-section">
              <span className="ledger-overline">COMMERCIAL DETAILS</span>

              <h2>{tool.name} pricing</h2>

              <div className="ledger-pricing-pills">
                <span>{tool.category}</span>
                <span>Confirm current terms with vendor</span>
              </div>

              <p>
                {tool.price}. Pricing structures and eligibility can change.
                Confirm the latest fees, any minimum commitments and billing
                terms with the vendor.
              </p>

              <div className="ledger-price-card">
                <div>
                  <h3>Questions to ask before buying</h3>

                  <ul>
                    <li>How is eligible cloud spend calculated?</li>
                    <li>Are there onboarding fees or minimum commitments?</li>
                    <li>What happens if usage falls unexpectedly?</li>
                    <li>Which cloud accounts and services are supported?</li>
                  </ul>
                </div>

                <div>
                  <h3>Official pricing information</h3>

                  <p>
                    Review the vendor's published pricing or request a
                    tailored assessment.
                  </p>

                  <a
                    className="ledger-btn ledger-btn-outline"
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See vendor website
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </section>

            {/* Implementation Roadmap */}
            <section className="ledger-review-section v2-process">
              <span className="ledger-overline">IMPLEMENTATION ROADMAP</span>

              <h2>What getting started looks like</h2>

              <div className="v2-process-list">
                {[
                  [
                    '01',
                    'Discover your cost baseline',
                    'Review the accounts, workloads and billing dimensions that matter.',
                  ],
                  [
                    '02',
                    'Validate fit and permissions',
                    'Confirm supported services, access scope and the product workflow.',
                  ],
                  [
                    '03',
                    'Measure and improve',
                    'Track savings, coverage and ongoing optimization results.',
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
            <section id="facts" className="ledger-review-section">
              <span className="ledger-overline">PRODUCT PROFILE</span>

              <h2>{tool.name} fact sheet</h2>

              <div className="ledger-facts">
                {[
                  ['Product', tool.name],
                  ['Category', tool.category],
                  ['Best for', tool.best],
                  ['Pricing', tool.price],
                  ['Cloud cost focus', tool.tag],
                  ['Notable features', tool.features.join(', ')],
                  ['Website', tool.domain],
                  ['Last editorial update', 'October 2026'],
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
              <span className="ledger-overline">COMPARISON</span>

              <h2>How {tool.name} compares</h2>

              <p>
                Different products solve different parts of the FinOps
                workflow. Compare them by core use case rather than rating
                alone.
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
                    {[tool, ...others.slice(0, 3)].map((item) => (
                      <tr key={item.slug}>
                        <td>
                          <b>{item.name}</b>
                        </td>

                        <td>{item.category}</td>
                        <td>{item.score.toFixed(1)}</td>

                        <td>
                          <Link to={`/reviews/${item.slug}`}>
                            Read review
                            <ArrowRight size={15} strokeWidth={2} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Alternatives */}
            <section id="alternatives" className="ledger-review-section">
              <span className="ledger-overline">EXPLORE OPTIONS</span>

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
            <section id="reader-reviews" className="ledger-review-section">
              <span className="ledger-overline">COMMUNITY PERSPECTIVES</span>

              <h2>Have you used {tool.name}?</h2>

              <p>
                Share your experience with features, onboarding and pricing.
                This prototype previews the submission experience.
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
                        fill={number <= rating ? '#f5b84c' : 'none'}
                        color={number <= rating ? '#e8a72d' : '#9baac0'}
                      />
                    </button>
                  ))}

                  <small>
                    {rating ? `${rating} of 5 stars` : 'Select a rating'}
                  </small>
                </div>

                <label htmlFor="review-title">Review title</label>

                <input
                  id="review-title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Summarize your experience"
                />

                <label htmlFor="review-body">Your review</label>

                <textarea
                  id="review-body"
                  required
                  minLength={30}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="What worked well? What would you improve?"
                />

                <div className="ledger-form-grid">
                  <div>
                    <label htmlFor="review-name">Your name</label>

                    <input
                      id="review-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="review-role">Your role</label>

                    <input
                      id="review-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. FinOps lead"
                    />
                  </div>
                </div>

                <label className="ledger-check">
                  <input
                    type="checkbox"
                    required
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
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
                  <p className="ledger-form-notice" role="status">
                    ✓ Review submitted successfully! Thank you for sharing
                    your experience.
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
                ['Editor score', `${tool.score.toFixed(1)} / 10`],
                ['Pricing', tool.price],
                ['Best for', tool.best],
                ['Category', tool.category],
                ['Updated', 'October 2026'],
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
                rel="noreferrer"
              >
                Visit {tool.name}
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="ledger-aside-links">
              <h3>Compare {tool.name}</h3>

              {others.map((item) => (
                <Link
                  key={item.slug}
                  to={`/reviews/${item.slug}`}
                >
                  {tool.name} vs {item.name}
                  <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}