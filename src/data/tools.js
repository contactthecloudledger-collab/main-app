export const tools = [
  {
    slug: "usage-ai",
    name: "Usage.ai",
    initial: "U",
    color: "#2563EB",
    category: "Commitment Automation",
    score: 9.5,
    rank: 1,
    tag: "Insured, hands-off commitment management",
    summary: "Usage.ai buys and manages cloud commitments for you across AWS, Azure and Google Cloud, with cashback on eligible underuse. You pay only a share of the savings it delivers, with no platform fee.",
    price: "Share of realized savings; no platform fee or contract",
    best: "Teams that want commitment discounts without long-term lock-in",
    url: "https://www.usage.ai/",
    domain: "usage.ai",
    logo: "https://www.google.com/s2/favicons?domain=usage.ai&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/usage.ai-dashboard-scaled.png",
    pros: [
      "Long-term discount rates without long-term lock-in, through Flex Insured Commitments",
      "Cashback Protection refunds eligible underuse if your usage drops",
      "No platform fee, minimum or contract; you pay only from realized savings",
      "Setup takes minutes, with no code or infrastructure changes",
      "Cost visibility across your cloud accounts, plus rightsizing recommendations"
    ],
    cons: [
      "Rightsizing is recommendation-only: it won't resize, stop or tune resources for you",
      "Your fee percentage comes with your savings assessment, not from a public price list"
    ],
    features: [
      "Flex Insured Commitments",
      "Autopilot commitment management across 50+ services",
      "Cashback Protection on eligible underuse",
      "Cost visibility across AWS, Azure and Google Cloud",
      "Rightsizing recommendations"
    ],
    verdict: "Usage.ai is a commitment management platform for AWS, Azure and Google Cloud. It studies your usage, then buys and manages discounted commitments on your behalf through Flex Insured Commitments, while Autopilot keeps laddering and rebalancing the portfolio as usage changes across more than 50 cloud services. What sets it apart is downside protection: native Savings Plans and Reserved Instances lock you in for one or three years, while Usage.ai pairs long-term rates with Cashback Protection, which refunds eligible underuse if usage falls. Pricing follows the same logic, with no platform fee, no minimum and no contract, just a share of realized savings. Beyond commitments, it gives you cost visibility and rightsizing recommendations, but it doesn't act on those recommendations itself, so teams that want resizing, idle shutdown or Kubernetes tuning automated can pair it with a resource optimization tool. Choose Usage.ai when you want the deepest commitment discounts with the least risk and effort.",
    rankingReason: "Usage.ai scores highest on the two criteria weighted most: savings and automation. Flex Insured Commitments pursue long-term discount rates with cashback on eligible underuse, and Autopilot buys and rebalances commitments across AWS, Azure and Google Cloud without manual work. It gives up some ground on visibility and allocation, where nOps and CloudZero go deeper, and on pricing clarity, since the fee rate comes with the savings assessment rather than a public price list.",
    pricingDetails: "Usage.ai charges a percentage of the savings it realizes, billed monthly against verified savings. The invoice arrives the month after the savings period, once AWS, Azure or Google Cloud finalizes the billing data, on net-30 terms. There is no platform fee, minimum or contract. Companies spending under $200K a month on cloud can use Usage.ai free for 6 months to review the recommendations it surfaces. A savings assessment shows projected savings, Usage.ai's fee and expected net savings before you commit.",
    facts: {
      freePlan: "Yes, 6 months free for companies under $200K a month in cloud spend, to review recommendations",
      billingModel: "Share of realized savings",
      supportedClouds: "AWS, Azure, Google Cloud",
      platformFee: "None",
      contract: "None required",
      servicesCovered: "50+, including EC2, RDS, ElastiCache, Redshift and OpenSearch on AWS, and Cloud SQL, Cloud Run and Vertex AI on Google Cloud",
      commitmentManagement: "Yes, automated with Autopilot",
      underuseProtection: "Cashback on eligible Flex Insured Commitments",
      costVisibility: "Yes, across AWS, Azure and Google Cloud accounts",
      rightsizing: "Recommendations only; you decide whether to apply them",
      access: "Read-only role, then a purchase-only role",
      timeToFirstSavings: "5 to 10 minutes, per the vendor",
      certifications: "SOC 2 Type II",
      whereToBuy: "Direct or through AWS Marketplace",
      factsChecked: "October 2026"
    },
    alternatives: ["nops", "prosperops", "vantage"],
    reviewStatus: "Editorial research from Usage.ai's website, documentation and pricing page, checked October 2026, plus client-provided details on the free plan and rightsizing recommendations. The client-provided free-plan terms differ from the 60-day free period on Usage.ai's public pricing page and should be confirmed. Not independently hands-on tested."
  },
  {
    slug: "nops",
    name: "nOps",
    initial: "n",
    color: "#2563EB",
    category: "Cloud Optimization",
    score: 9.3,
    rank: 2,
    tag: "All-in-one FinOps with automated optimization",
    summary: "A broad FinOps platform that pairs cost visibility and allocation with automated commitment and Kubernetes optimization.",
    price: "Fixed fee by cloud spend, plus share of savings for rate optimization",
    best: "Multicloud teams that want visibility and hands-off savings in one tool",
    url: "https://www.nops.io/",
    domain: "nops.io",
    logo: "https://www.google.com/s2/favicons?domain=nops.io&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/nops-website-scaled.png",
    pros: [
      "Covers AWS, Azure, GCP, Kubernetes, SaaS and AI costs in one view",
      "Allocation, showback, chargeback, forecasting and budgets built in",
      "Automates Reserved Instances, Savings Plans and committed-use discounts",
      "Kubernetes and EKS container rightsizing, plus resource scheduling"
    ],
    cons: [
      "No free plan, only a 14-day trial",
      "The platform fee rises as your cloud spend grows",
      "Rate optimization adds a share-of-savings fee on top of the platform fee"
    ],
    features: [
      "Cost visibility and allocation",
      "Commitment management",
      "Kubernetes optimization",
      "Anomaly detection and forecasting"
    ],
    verdict: "nOps is a cloud financial management platform for engineering, finance and FinOps teams. It brings together cost analysis across AWS, Azure, GCP, Kubernetes, SaaS and AI with allocation, showback, chargeback, dashboards, forecasting and budgets. Beyond reporting, it acts on what it finds: real-time anomaly detection, rightsizing and idle-resource recommendations, storage optimization, resource scheduling, Kubernetes container rightsizing and commitment management for Reserved Instances, Savings Plans and committed-use discounts. Choose nOps when you want visibility and optimization from a single vendor; look elsewhere if you need a free tier or pricing that isn't tied to your cloud spend.",
    rankingReason: "nOps is one of the strongest tools here on visibility and allocation, and close to the top on automation. It ranks below Usage.ai because its fees are harder to predict, with a platform fee tied to spend plus a share of savings for rate optimization, and because it doesn't offer insured protection on commitments.",
    pricingDetails: "Cost visibility uses fixed-fee pricing based on your cloud spend. Autonomous rate optimization is priced as a share of the savings it generates. A 14-day trial lets you evaluate the platform before you pay; nOps doesn't list a free plan.",
    facts: {
      freePlan: "No, 14-day trial",
      billingModel: "Fixed fee by cloud spend, plus share of savings for rate optimization",
      supportedClouds: "AWS, Azure, GCP",
      alsoCovers: "Kubernetes, SaaS and AI costs",
      commitmentManagement: "Yes, automated",
      rightsizing: "Recommendations, including Kubernetes containers",
      integrations: "Slack, Jira, Datadog, Snowflake, OpenAI, GitHub, GitLab, Terraform and more",
      certifications: "SOC 2, HIPAA",
      support: "Email and documentation",
      factsChecked: "October 2026"
    },
    alternatives: ["usage-ai", "prosperops", "vantage"],
    reviewStatus: "Editorial research from nOps' website and pricing information as summarized in a third-party software directory listing, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "prosperops",
    name: "ProsperOps",
    initial: "P",
    color: "#2563EB",
    category: "Commitment Automation",
    score: 9.1,
    rank: 3,
    tag: "Autonomous discount management, now part of Flexera",
    summary: "ProsperOps buys and adjusts Savings Plans, Reserved Instances and committed-use discounts as your usage changes. It charges a share of realized savings rather than a share of spend.",
    price: "Share of realized savings; rate not published",
    best: "Teams with steady compute spend who want discounts managed for them",
    url: "https://www.prosperops.com/",
    domain: "prosperops.com",
    logo: "https://www.google.com/s2/favicons?domain=prosperops.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/prosperops-dashboard.png",
    pros: [
      "Continuously manages commitments on AWS, Azure and Google Cloud",
      "Fee is a share of realized savings, not of your cloud spend",
      "Free savings analysis before you sign",
      "Backed by Flexera, and still sold under its own brand"
    ],
    cons: [
      "The fee percentage isn't published on its pricing page",
      "Workload optimization is a separate product with its own per-resource fee",
      "Packaging may change as it integrates with Flexera's FinOps suite"
    ],
    features: [
      "Autonomous Discount Management",
      "Savings and Effective Savings Rate reporting",
      "Autonomous Resource Management",
      "ProsperOps+ bundle with Flexera's Kubernetes and spot optimization"
    ],
    verdict: "ProsperOps pioneered autonomous commitment management. Its Autonomous Discount Management product runs a portfolio of Savings Plans, Reserved Instances and committed-use discounts across AWS, Azure and Google Cloud, buying and adjusting commitments as usage shifts instead of in quarterly batches. Pricing is outcome-based: it takes a percentage of realized savings, as measured by your provider's billing data, while a separate product, Autonomous Resource Management, charges a flat fee per managed resource. Flexera acquired ProsperOps in January 2026 and runs it as a standalone division. Choose it for mature, hands-off rate optimization, and compare it closely with Usage.ai if protection against usage drops matters to you.",
    rankingReason: "ProsperOps is one of the most mature commitment managers here and scores well on savings and automation. It ranks just below Usage.ai and nOps because it doesn't publish its fee rate, and its downside protection works by managing lock-in risk rather than refunding underused commitments.",
    pricingDetails: "Autonomous Discount Management takes a small percentage of realized savings, as determined by your cloud provider's billing data, not a percentage of your spend. The exact rate isn't published. Autonomous Resource Management is priced separately, as a flat monthly fee per managed resource. A free savings analysis shows current and potential savings before you sign.",
    facts: {
      freePlan: "No, free savings analysis",
      billingModel: "Share of realized savings",
      supportedClouds: "AWS, Azure, Google Cloud",
      commitmentManagement: "Yes, autonomous",
      workloadOptimization: "Separate product, flat fee per managed resource",
      savingsMetrics: "Effective Savings Rate reporting",
      ownership: "Flexera, since January 2026",
      factsChecked: "October 2026"
    },
    alternatives: ["usage-ai", "nops", "vantage"],
    reviewStatus: "Editorial research from ProsperOps' website, pricing page and Flexera's acquisition announcement, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "vantage",
    name: "Vantage",
    initial: "V",
    color: "#2563EB",
    category: "Cost Management",
    score: 9.0,
    rank: 4,
    tag: "Developer-friendly cost reporting with published prices",
    summary: "Clean cost reporting across 20+ providers, with a real free tier and flat prices published on its site.",
    price: "Free up to $2,500 of tracked monthly spend; Pro from $30 a month",
    best: "Small and mid-size teams that want clear reports and predictable pricing",
    url: "https://www.vantage.sh/",
    domain: "vantage.sh",
    logo: "https://www.google.com/s2/favicons?domain=vantage.sh&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/vantage-dash-scaled.png",
    pros: [
      "Free Starter plan for up to $2,500 of monthly cloud spend",
      "Flat, published prices, with Pro from $30 a month",
      "Tracks 20+ providers, from Oracle Cloud to Grafana and ClickHouse",
      "Virtual tagging, Kubernetes cost allocation, an API and an MCP server"
    ],
    cons: [
      "Price jumps can be steep as your spend passes each tier's cap",
      "Automation is limited to Autopilot for AWS Savings Plans",
      "Lower tiers cap the number of users and how long data is kept"
    ],
    features: [
      "Cost reports and dashboards",
      "Virtual tagging",
      "Autopilot for AWS Savings Plans",
      "Kubernetes cost allocation agent"
    ],
    verdict: "Vantage is a cost visibility platform built for engineering teams. It tracks spend across AWS, Azure, Google Cloud, Oracle Cloud and more than a dozen other providers, with virtual tagging for allocation, plus budgets, forecasts, anomaly alerts and recommendations. Its pricing is the most transparent on this list: a free Starter tier, then flat monthly plans gated by how much spend you track, not a percentage of it, and Pro adds Autopilot, which buys AWS Savings Plans for you. Choose Vantage when you want clear reports fast at a predictable price; look elsewhere if you need automation beyond AWS Savings Plans, such as idle shutdown or Kubernetes tuning.",
    rankingReason: "Vantage leads this list on pricing clarity and setup, and it's strong on visibility. It ranks fourth because its automation is narrower than the tools above it, which act on commitments across all three major clouds.",
    pricingDetails: "Vantage charges a flat monthly price based on how much cloud spend you track, not a percentage of it. Starter is free up to $2,500 of tracked monthly spend. Pro costs $30 a month for up to $7,500 of tracked spend and adds Autopilot. Business costs $200 a month for up to $20,000 of tracked spend, and Enterprise is custom for unlimited tracked spend. Autopilot for AWS Savings Plans adds a small share of the savings it generates on top of the plan price. Paid plans include a 14-day trial.",
    facts: {
      freePlan: "Yes, up to $2,500 a month of tracked spend",
      billingModel: "Flat monthly tiers by tracked spend",
      supportedClouds: "20+ providers, including AWS, Azure, Google Cloud and Oracle Cloud",
      paidFrom: "$30 a month",
      commitmentManagement: "Autopilot for AWS Savings Plans",
      allocation: "Virtual tagging",
      kubernetes: "Cost allocation agent",
      developerAccess: "API, Terraform provider and MCP server",
      singleSignOn: "SAML on every plan",
      factsChecked: "October 2026"
    },
    alternatives: ["usage-ai", "nops", "cloudzero"],
    reviewStatus: "Editorial research from Vantage's pricing page and product documentation, checked October 2026. The Business plan price and Autopilot fee come from third-party listings and should be confirmed. Not independently hands-on tested."
  },
  {
    slug: "harness",
    name: "Harness CCM",
    initial: "H",
    color: "#2563EB",
    category: "Cloud Optimization",
    score: 8.8,
    rank: 5,
    tag: "AutoStopping for idle non-production resources",
    summary: "Cost management from the Harness software delivery platform, best known for AutoStopping idle non-production resources. It has a Free Forever plan for smaller cloud bills.",
    price: "Free Forever plan; Enterprise pricing on request",
    best: "Engineering teams with large dev, test and staging environments",
    url: "https://www.harness.io/",
    domain: "harness.io",
    logo: "https://www.google.com/s2/favicons?domain=harness.io&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/harness-dash.png",
    pros: [
      "Free Forever plan with no contract",
      "AutoStopping shuts down idle VMs, Kubernetes clusters and RDS, then restarts them on demand",
      "Commitment orchestration and spot instance management",
      "Cost Perspectives group spend across AWS, Azure, GCP and on-premises"
    ],
    cons: [
      "The free plan caps AutoStopping at 10 rules",
      "Enterprise pricing isn't published",
      "The Free Forever plan has a cloud spend limit, so larger teams move to Enterprise"
    ],
    features: [
      "AutoStopping",
      "Commitment orchestration",
      "Cost Perspectives and Cost Categories",
      "AI cost management"
    ],
    verdict: "Harness Cloud and AI Cost Management is part of the Harness software delivery platform. It gives one view of AWS, Azure, Google Cloud and on-premises costs, grouped with Cost Perspectives and Cost Categories, and tracks AI spend alongside cloud costs. Its standout feature is AutoStopping, which detects idle non-production resources such as VMs, Kubernetes clusters and RDS instances, stops them and restarts them when someone needs them, while Enterprise plans add commitment orchestration and spot instance management. Choose Harness when dev, test and staging environments drive a big share of your bill; look elsewhere if most of your savings opportunity is commitments for steady production usage.",
    rankingReason: "Harness scores well on automation and offers a genuine free plan. It ranks fifth because its biggest strength, AutoStopping, targets non-production waste, while the tools above it deliver larger savings on steady production spend.",
    pricingDetails: "The Free Forever plan has no contract and covers the essentials, including up to 10 AutoStopping rules, for organizations under its cloud spend limit. Enterprise plans are priced against the total cloud spend Harness manages and add unlimited AutoStopping rules, commitment orchestration and spot management. Enterprise pricing is on request, and the exact Free Forever spend limit is not consistently stated in Harness documentation.",
    facts: {
      freePlan: "Yes, Free Forever (cloud spend limit applies)",
      billingModel: "Enterprise priced on cloud spend managed",
      supportedClouds: "AWS, Azure, GCP and on-premises",
      idleResources: "AutoStopping for VMs, Kubernetes clusters and RDS",
      commitmentManagement: "Commitment orchestration",
      spotInstances: "Spot instance management",
      allocation: "Cost Perspectives and Cost Categories",
      aiCosts: "Token, agent and model spend",
      factsChecked: "October 2026"
    },
    alternatives: ["cast-ai", "nops", "usage-ai"],
    reviewStatus: "Editorial research from Harness' website, pricing page and documentation, checked October 2026. The Free Forever spend limit varies across Harness sources and should be confirmed. Not independently hands-on tested."
  },
  {
    slug: "cloudzero",
    name: "CloudZero",
    initial: "C",
    color: "#2563EB",
    category: "Cost Intelligence",
    score: 8.7,
    rank: 6,
    tag: "Unit economics for cloud spend",
    summary: "Cost intelligence that ties cloud spend to customers, features and teams, even when tagging is incomplete.",
    price: "Tiered by cloud spend; pricing by quote",
    best: "SaaS companies that need cost per customer or per feature",
    url: "https://www.cloudzero.com/",
    domain: "cloudzero.com",
    logo: "https://www.google.com/s2/favicons?domain=cloudzero.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/cloudzero-.png",
    pros: [
      "Unit costs such as cost per customer, feature or transaction",
      "CostFormation allocates shared and untagged costs",
      "Anomaly detection down to hourly granularity",
      "No overage charges when your bill spikes"
    ],
    cons: [
      "No free plan listed; pricing is by quote",
      "Getting full value takes real allocation design work up front",
      "It surfaces savings opportunities but doesn't automate commitment purchases or resource changes"
    ],
    features: [
      "Unit cost analytics",
      "CostFormation allocation",
      "Anomaly detection",
      "AnyCost for unsupported cost sources"
    ],
    verdict: "CloudZero is built around unit economics. It ingests billing data from AWS, Azure, Google Cloud, Kubernetes and other sources, normalizes it, and lets you define business dimensions with CostFormation, so you can see cost per customer, product, feature or team. It handles messy reality well: shared and untagged costs get allocated by rule, anomaly detection flags unusual spend down to the hour, and budgets and forecasts can be built on unit costs, while sources it doesn't support natively can be added through its AnyCost framework. Choose CloudZero when finance or product leaders need to know what each customer or feature costs; look elsewhere if you mainly want automation that lowers the bill without manual work.",
    rankingReason: "CloudZero is the strongest tool here for allocation and unit economics. It ranks sixth because the scoring weights delivered savings and automation most heavily, and CloudZero focuses on insight rather than acting on it.",
    pricingDetails: "CloudZero prices in tiers based on the cloud spend you bring onto the platform, so the price grows with your estate, not with the number of users. It doesn't charge overages when your bill spikes. Pricing is by quote and a free plan is not publicly listed.",
    facts: {
      freePlan: "Not publicly listed",
      billingModel: "Tiered by cloud spend",
      supportedClouds: "AWS, Azure, GCP, Oracle Cloud",
      alsoCovers: "Kubernetes, PaaS and SaaS sources",
      allocation: "CostFormation, including shared and untagged costs",
      unitEconomics: "Cost per customer, feature or team",
      anomalyDetection: "Hourly granularity",
      cloudAccess: "Read-only connections",
      support: "Dedicated FinOps account manager",
      factsChecked: "October 2026"
    },
    alternatives: ["finout", "vantage", "nops"],
    reviewStatus: "Editorial research from CloudZero's website, documentation and published product listings, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "cast-ai",
    name: "CAST AI",
    initial: "C",
    color: "#2563EB",
    category: "Kubernetes Optimization",
    score: 8.6,
    rank: 7,
    tag: "Automated Kubernetes resizing, repacking and repricing",
    summary: "CAST AI automates Kubernetes autoscaling, bin packing, rightsizing and spot instances instead of handing you recommendations. Cost monitoring is free for unlimited clusters.",
    price: "Free monitoring; automation charged per managed CPU",
    best: "Kubernetes-heavy teams ready to let automation resize clusters",
    url: "https://cast.ai/",
    domain: "cast.ai",
    logo: "https://www.google.com/s2/favicons?domain=cast.ai&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/cast.ai-site-scaled.png",
    pros: [
      "Free cost monitoring for unlimited clusters",
      "Automated autoscaling, bin packing and workload rightsizing",
      "Spot instance automation",
      "Live migration of running containers, including stateful workloads"
    ],
    cons: [
      "Covers Kubernetes only, so the rest of your bill needs another tool",
      "Paid automation pricing isn't fully published",
      "Onboarding needs solid Kubernetes and cloud networking skills"
    ],
    features: [
      "Autoscaling and bin packing",
      "Workload rightsizing",
      "Spot automation",
      "Live container migration"
    ],
    verdict: "CAST AI focuses on Kubernetes running on AWS, Azure, Google Cloud and Oracle Cloud. Rather than listing recommendations, it acts on them: autoscaling nodes, packing pods onto fewer nodes, rightsizing workloads and moving work to spot instances. The free tier monitors unlimited clusters and breaks down costs by namespace, workload and allocation group, while automation is a paid upgrade charged by the managed CPU. Choose CAST AI when most of your compute runs in Kubernetes and you trust automation to change it; look elsewhere for spend outside your clusters, or pair it with a commitment tool.",
    rankingReason: "CAST AI is the strongest Kubernetes automation on this list and scores well on automation. It ranks seventh because it covers only cluster spend, so its savings ceiling on a typical whole-cloud bill is lower than broader tools.",
    pricingDetails: "Cost monitoring and savings recommendations are free for unlimited clusters. Automation is a paid upgrade charged by the managed CPU, with custom enterprise pricing. Published per-CPU figures vary, so current rates should be confirmed with CAST AI.",
    facts: {
      freePlan: "Yes, monitoring for unlimited clusters",
      billingModel: "Per managed CPU",
      supportedClouds: "AWS, Azure, GCP, Oracle Cloud",
      platforms: "EKS, AKS, GKE",
      autoscaling: "Yes, automated",
      rightsizing: "Automated workload rightsizing",
      spotInstances: "Automated",
      founded: "2019",
      factsChecked: "October 2026"
    },
    alternatives: ["harness", "nops", "usage-ai"],
    reviewStatus: "Editorial research from CAST AI's website, AWS Marketplace listing and documentation, checked October 2026. Dashboard screenshot sourced from CAST AI documentation. Not independently hands-on tested."
  },
  {
    slug: "finout",
    name: "Finout",
    initial: "F",
    color: "#2563EB",
    category: "Cost Management",
    score: 8.4,
    rank: 8,
    tag: "One MegaBill for cloud, data platform and SaaS costs",
    summary: "Finout combines cloud, Kubernetes, data platform and SaaS costs into one bill and allocates it with virtual tags instead of infrastructure changes.",
    price: "Custom quote",
    best: "Teams consolidating cloud, SaaS and data platform spend",
    url: "https://www.finout.io/",
    domain: "finout.io",
    logo: "https://www.google.com/s2/favicons?domain=finout.io&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/finout-dash-scaled.png",
    pros: [
      "MegaBill combines clouds, Kubernetes, Snowflake, Databricks, Datadog and more",
      "Virtual tags allocate and reallocate shared costs without touching your tags",
      "Financial plans for budgeting and forecasting",
      "SOC 2 and ISO 27001 certified"
    ],
    cons: [
      "No free plan; pricing is by private quote",
      "Built for allocation and reporting more than automated savings",
      "Best value comes once you have several cost sources to combine"
    ],
    features: [
      "MegaBill",
      "Virtual tags",
      "Financial plans",
      "CostGuard waste and anomaly detection"
    ],
    verdict: "Finout is an enterprise FinOps platform built around allocation. Its MegaBill pulls costs from AWS, Azure, Google Cloud and Oracle Cloud, plus Kubernetes, data platforms like Snowflake and Databricks, and tools like Datadog, into one bill at any level of detail. Virtual tags let you allocate every line of that bill to teams, environments or products, and reallocate shared costs by any metric, without changing tags in your infrastructure, with dashboards, financial plans, anomaly alerts and waste detection on top. Choose Finout when your costs span many platforms and allocation is your biggest headache; look elsewhere if you want a tool that lowers the bill automatically.",
    rankingReason: "Finout is excellent at consolidating and allocating spend from many sources. It ranks eighth because the scoring weights delivered savings and automation most, and Finout is mainly a visibility and allocation platform.",
    pricingDetails: "Finout sells through custom quotes and private offers, priced on the length and terms of the contract. It doesn't list a free plan. Ask whether the price scales with spend, cost sources or users before comparing it with other tools.",
    facts: {
      freePlan: "No",
      billingModel: "Custom contract",
      supportedClouds: "AWS, Azure, GCP, OCI",
      alsoCovers: "Kubernetes, Snowflake, Databricks, Datadog, CDNs and more",
      allocation: "Virtual tags with shared-cost reallocation",
      forecasting: "Financial plans and budgets",
      optimization: "CostGuard waste detection and anomaly alerts",
      setup: "Codeless integration",
      certifications: "SOC 2, ISO 27001",
      factsChecked: "October 2026"
    },
    alternatives: ["cloudzero", "vantage", "ternary"],
    reviewStatus: "Editorial research from Finout's website, published product materials and marketplace listings, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "ternary",
    name: "Ternary",
    initial: "T",
    color: "#2563EB",
    category: "Cost Management",
    score: 8.2,
    rank: 9,
    tag: "Multicloud FinOps you can self-host",
    summary: "A FinOps Foundation certified platform for multicloud teams, and one of the few you can run in your own Google Cloud environment.",
    price: "Tiered by cloud spend, fixed contract price",
    best: "Enterprises that need multicloud FinOps with a self-hosted option",
    url: "https://ternary.app/",
    domain: "ternary.app",
    logo: "https://www.google.com/s2/favicons?domain=ternary.app&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/ternary-scaled.png",
    pros: [
      "Self-hosted option for strict security, compliance or data-residency needs",
      "Supports AWS, Azure, Google Cloud, Alibaba Cloud and OCI",
      "Built on the FOCUS billing standard for consistent multicloud data",
      "Chargebacks, fiscal calendars and bill splitting for managed service providers"
    ],
    cons: [
      "No free plan publicly listed; pricing is by quote",
      "Reviewers say new features can be slow to arrive",
      "Self-hosting means you pay for and run the infrastructure"
    ],
    features: [
      "Ternary Self-Hosted",
      "FOCUS billing data",
      "Anomaly detection and forecasting",
      "Chargebacks and MSP bill splitting"
    ],
    verdict: "Ternary is a multicloud FinOps platform for finance, engineering and FinOps teams. It covers reporting, allocation, budgeting, forecasting and anomaly detection, plus rightsizing and commitment recommendations, across AWS, Azure, Google Cloud and more. Its differentiator is deployment: beyond SaaS, Ternary Self-Hosted runs the full platform in a dedicated Google Cloud environment you control, which suits financial services, government and other regulated organizations, and it standardizes billing data on FOCUS, the FinOps Foundation's open specification. Choose Ternary when data control and multicloud reporting matter most; look elsewhere if you want automation that captures savings for you.",
    rankingReason: "Ternary is a solid, certified FinOps platform with a rare self-hosted option. It ranks ninth because its strengths are reporting and governance rather than automated savings, which the scoring weights most.",
    pricingDetails: "Ternary prices in tiers based on cloud spend, with a fixed contract price so you can budget for it. If you self-host, your own cloud bill also covers the infrastructure Ternary runs on. A free plan is not publicly listed.",
    facts: {
      freePlan: "Not publicly listed",
      billingModel: "Tiered by cloud spend, fixed contract price",
      supportedClouds: "AWS, Azure, Google Cloud, Alibaba Cloud, OCI",
      deployment: "SaaS, or self-hosted in your Google Cloud environment",
      billingStandard: "FOCUS",
      certifications: "FinOps Foundation Certified Platform",
      optimization: "Rightsizing and commitment recommendations",
      integrations: "Jira, Datadog, Snowflake",
      factsChecked: "October 2026"
    },
    alternatives: ["finout", "cloudzero", "nops"],
    reviewStatus: "Editorial research from Ternary's website, documentation and analyst and peer-review listings, checked October 2026. Dashboard screenshot sourced from Ternary documentation. Not independently hands-on tested."
  },
  {
    slug: "zesty",
    name: "Zesty",
    initial: "Z",
    color: "#2563EB",
    category: "Kubernetes Optimization",
    score: 8.1,
    rank: 10,
    tag: "Kubernetes autoscaling plus a savings-priced Commitment Manager",
    summary: "Zesty pairs Kubernetes autoscaling and headroom reduction with a Commitment Manager that builds Savings Plans in small, staggered units.",
    price: "Share of savings for commitments; Kubernetes priced per product",
    best: "Kubernetes-heavy teams that also want commitments managed",
    url: "https://zesty.co/",
    domain: "zesty.co",
    logo: "https://www.google.com/s2/favicons?domain=zesty.co&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/zesty-scaled.png",
    pros: [
      "Unifies horizontal and vertical pod autoscaling in real time",
      "Commitment Manager builds Savings Plans in small, staggered units",
      "Persistent volume autoscaling and CPU headroom reduction",
      "Commitment Manager is priced on the savings it generates"
    ],
    cons: [
      "Pricing differs by product, so a full setup means several quotes",
      "Commitment coverage centers on AWS and Azure",
      "Limits commitment risk with short, staggered terms rather than refunds"
    ],
    features: [
      "Multi-dimensional pod autoscaling",
      "Headroom reduction",
      "Persistent volume autoscaling",
      "Commitment Manager"
    ],
    verdict: "Zesty started in commitment management and has grown into a Kubernetes optimization platform. Its Kubernetes products unify horizontal and vertical autoscaling, reduce CPU headroom and autoscale persistent volumes, so clusters track real demand instead of peak estimates. Its Commitment Manager buys Savings Plans in small units and lets them expire as usage falls, building a flexible portfolio that follows your workload across AWS and Azure, and it charges a share of the savings it creates. Choose Zesty if Kubernetes efficiency and commitment coverage are both on your list; look elsewhere if you need broad cost allocation and reporting.",
    rankingReason: "Zesty scores well on automation for both Kubernetes and commitments. It ranks tenth because its pricing is spread across separate products, and its visibility and allocation tools are lighter than the platforms above it.",
    pricingDetails: "Commitment Manager uses success-based pricing: Zesty takes a percentage of the savings it generates. Kubernetes optimization products are priced separately per product, so ask for a combined quote if you plan to use more than one. A free plan is not publicly listed.",
    facts: {
      freePlan: "Not publicly listed",
      billingModel: "Share of savings for commitments, per product for Kubernetes",
      supportedClouds: "AWS, Azure",
      kubernetes: "Pod autoscaling, headroom reduction, persistent volume autoscaling",
      commitmentManagement: "Yes, small staggered Savings Plans",
      rightsizing: "Automated for Kubernetes workloads",
      factsChecked: "October 2026"
    },
    alternatives: ["cast-ai", "usage-ai", "spot"],
    reviewStatus: "Editorial research from Zesty's website, product pages and AWS Marketplace listing, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "archera",
    name: "Archera",
    initial: "A",
    color: "#2563EB",
    category: "Commitment Automation",
    score: 8.0,
    rank: 11,
    tag: "Free commitment platform with optional insured commitments",
    summary: "A free commitment management platform with optional Insured Commitments that pay you back if your usage drops, on terms as short as 30 days.",
    price: "Free platform; premium only on insured commitments",
    best: "Teams that want commitment insurance on short terms",
    url: "https://www.archera.ai/",
    domain: "archera.ai",
    logo: "https://www.google.com/s2/favicons?domain=archera.ai&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/09/Archera-Dashboard.webp",
    pros: [
      "Core platform is free, with no fees on spend or savings",
      "Insured Commitments come with a money-back guarantee",
      "Insured terms as short as 30 days",
      "SOC 2 Type II and ISO 27001 certified"
    ],
    cons: [
      "Premiums add up as you insure more commitments",
      "Insured Commitments are most established on AWS and Azure",
      "Focused on rates, not resource or Kubernetes optimization"
    ],
    features: [
      "Free commitment platform",
      "Insured Commitments",
      "Short 30-day terms",
      "Commitment Planner"
    ],
    verdict: "Archera, originally Reserved.ai, built its commitment platform around insurance. The free platform covers cost visibility, forecasting, commitment planning and native purchasing automation, and many teams use it without ever paying Archera. The paid layer is Insured Commitments: Reserved Instances, Savings Plans and committed-use discounts wrapped in a guarantee, so if workloads shrink and commitments go unused, Archera pays you back, with terms from 30 days and a premium only on what you insure. Choose Archera when you want commitment-level discounts with a safety net and full control over what you buy; look elsewhere if you want resource changes automated too.",
    rankingReason: "Archera scores well on pricing clarity and offers a genuinely free platform. It ranks eleventh because your savings depend on how much you choose to insure and manage, while the tools above it automate more of the work.",
    pricingDetails: "The core platform is free, with no fees based on spend or savings. Insured Commitments carry a premium that depends on the term and coverage you choose, on 30-day or 1-year terms. You can buy through AWS Marketplace, Azure Marketplace or directly.",
    facts: {
      freePlan: "Yes, the core platform",
      billingModel: "Premium on insured commitments only",
      supportedClouds: "AWS, Azure, GCP",
      commitmentManagement: "Planning, purchasing and lifecycle management",
      underuseProtection: "Money-back guarantee on Insured Commitments",
      shortestTerm: "30 days",
      certifications: "SOC 2 Type II, ISO 27001",
      whereToBuy: "Direct, AWS Marketplace, Azure Marketplace",
      founded: "2019, as Reserved.ai",
      factsChecked: "October 2026"
    },
    alternatives: ["usage-ai", "prosperops", "zesty"],
    reviewStatus: "Editorial research from Archera's website, the FinOps Foundation tool listing and published product comparisons, checked October 2026. Sources disagree on Google Cloud support for Insured Commitments. Not independently hands-on tested."
  },
  {
    slug: "cloudability",
    name: "IBM Cloudability",
    initial: "I",
    color: "#2563EB",
    category: "Cost Management",
    score: 7.9,
    rank: 12,
    tag: "Enterprise FinOps for allocation, showback and budgeting",
    summary: "A long-standing enterprise FinOps platform for allocation, showback, budgeting and optimization across clouds and containers.",
    price: "Annual contract, tiered by managed spend",
    best: "Large enterprises running a formal FinOps practice",
    url: "https://www.ibm.com/products/cloudability",
    domain: "ibm.com",
    logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/05/IBM-Cloudability-Apptio-Dashboard-scaled.webp",
    pros: [
      "Business mappings automate allocation, showback and chargeback",
      "Budgets, forecasts and anomaly detection",
      "Container cost allocation and rightsizing recommendations",
      "Works with IBM Turbonomic for resource automation"
    ],
    cons: [
      "No permanent free plan; trials run through AWS Marketplace",
      "Onboarding and setup take real effort",
      "Price rises with the cloud spend you put under management"
    ],
    features: [
      "Business mappings",
      "Budgets and forecasts",
      "Anomaly detection",
      "Rightsizing and commitment recommendations"
    ],
    verdict: "IBM Cloudability, part of IBM since its acquisition of Apptio, is one of the original FinOps platforms. It covers AWS, Azure, Google Cloud, IBM Cloud and Oracle Cloud, with business mappings that turn raw billing data into allocation, showback and chargeback. Finance and FinOps teams get budgets, forecasts, anomaly detection and dashboards, plus recommendations for rightsizing, containers, Savings Plans and reservations, and paired with IBM Turbonomic those recommendations can become automated resource actions. Choose Cloudability when you run a mature FinOps practice in a large enterprise; look elsewhere if you are a smaller team that wants quick setup or savings handled automatically.",
    rankingReason: "Cloudability is strong on visibility, allocation and governance. It ranks twelfth because most savings still depend on teams acting on recommendations, and its contracts and setup are heavier than most tools here.",
    pricingDetails: "Cloudability sells annual contracts with tiers based on how much cloud spend you put under management, so the fee grows with your estate. There is no public price list and no permanent free plan. A trial is available through AWS Marketplace, and professional services are priced separately.",
    facts: {
      freePlan: "No; trial through AWS Marketplace",
      billingModel: "Annual contract, tiered by managed spend",
      supportedClouds: "AWS, Azure, Google Cloud, IBM Cloud, OCI",
      allocation: "Business mappings, showback and chargeback",
      forecasting: "Budgets and forecasts",
      optimization: "Rightsizing, container and commitment recommendations",
      automation: "Through IBM Turbonomic",
      ownership: "IBM, through its 2023 acquisition of Apptio",
      factsChecked: "October 2026"
    },
    alternatives: ["nops", "cloudhealth", "finout"],
    reviewStatus: "Editorial research from IBM's product materials, AWS Marketplace listing, government procurement listings and peer reviews, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "spot",
    name: "Spot by Flexera",
    initial: "S",
    color: "#2563EB",
    category: "Cloud Optimization",
    score: 7.8,
    rank: 13,
    tag: "Spot instance and Kubernetes infrastructure automation",
    summary: "Spot runs production workloads on discounted spot capacity with automatic fallback, plus Kubernetes infrastructure automation and AWS commitment management.",
    price: "Contract plus usage-based fees",
    best: "Teams ready to run production workloads on spot instances",
    url: "https://www.flexera.com/",
    domain: "flexera.com",
    logo: "https://www.google.com/s2/favicons?domain=flexera.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/spot-dash.avif",
    pros: [
      "Ocean automates scaling, bin packing and rightsizing on EKS, AKS, GKE and ECS",
      "Elastigroup blends spot, reserved and on-demand capacity",
      "Falls back to on-demand when spot capacity runs out",
      "Eco manages Reserved Instances and Savings Plans across 14 AWS services"
    ],
    cons: [
      "Usage-based fees and minimums make costs harder to predict",
      "Packaging may keep changing as Flexera merges its FinOps products",
      "Little allocation or reporting beyond its own products"
    ],
    features: [
      "Ocean for Kubernetes and containers",
      "Elastigroup",
      "Eco commitment management",
      "Spot interruption handling"
    ],
    verdict: "Spot, now part of Flexera, built its name on making spot instances safe for production. Elastigroup manages compute across spot, reserved and on-demand capacity, predicting interruptions and falling back to on-demand when spot capacity disappears. Ocean applies the same approach to Kubernetes and containers on EKS, AKS, GKE and ECS, automating scaling, bin packing and rightsizing, while Eco handles Reserved Instances and Savings Plans across 14 AWS services. Choose Spot when compute is your biggest cost and your workloads can run on spot capacity; look elsewhere if you need broad FinOps reporting in one tool.",
    rankingReason: "Spot scores high on savings potential and automation for compute. It ranks thirteenth because its pricing is harder to predict and its strengths are narrower than the broader platforms above it.",
    pricingDetails: "Spot products are billed as a contract plus usage-based charges, such as vCPU hours managed or savings realized. Minimum monthly or yearly fees apply, and the products are available through AWS Marketplace. Exact rates are not publicly listed.",
    facts: {
      freePlan: "Not publicly listed",
      billingModel: "Contract plus usage-based fees",
      supportedClouds: "AWS, Azure, GCP",
      kubernetes: "Ocean for EKS, AKS, GKE and ECS",
      spotInstances: "Elastigroup, with on-demand fallback",
      commitmentManagement: "Eco, across 14 AWS services",
      ownership: "Flexera, since 2025",
      factsChecked: "October 2026"
    },
    alternatives: ["cast-ai", "prosperops", "zesty"],
    reviewStatus: "Editorial research from Flexera and Spot product materials, AWS Marketplace listings and published pricing guides, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "kubecost",
    name: "IBM Kubecost",
    initial: "I",
    color: "#2563EB",
    category: "Kubernetes Optimization",
    score: 7.7,
    rank: 14,
    tag: "Kubernetes cost allocation built on OpenCost",
    summary: "The best-known Kubernetes cost monitoring tool, built on the open-source OpenCost project, with a free tier for smaller environments.",
    price: "Free tier up to 250 cores; enterprise by quote",
    best: "Platform teams that need cost allocation inside Kubernetes",
    url: "https://www.ibm.com/products/kubecost",
    domain: "ibm.com",
    logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/kubercost-scaled.png",
    pros: [
      "Free tier for unlimited clusters up to 250 cores",
      "Costs broken down by namespace, deployment, label and pod",
      "Works on EKS, AKS, GKE and on-premises clusters",
      "Enterprise tiers add SSO, RBAC and cloud bill reconciliation"
    ],
    cons: [
      "The free tier keeps only 15 days of data",
      "Enterprise pricing is by quote and grows with cluster size",
      "Recommends changes rather than automating most of them"
    ],
    features: [
      "Kubernetes cost allocation",
      "Cloud bill reconciliation",
      "Rightsizing recommendations",
      "Enterprise controls with SSO and RBAC"
    ],
    verdict: "Kubecost, now part of IBM, is the most widely recognized Kubernetes cost tool. It builds on OpenCost, the open-source CNCF project, and allocates cluster costs by namespace, deployment, label and pod. The free tier covers unlimited clusters up to 250 cores with 15 days of retention, while paid tiers add multi-cluster views, reconciliation against your real cloud bill, longer retention, SSO, RBAC and integration with IBM Turbonomic. Choose Kubecost when platform teams need trustworthy Kubernetes allocation and chargeback; look elsewhere if you want cluster changes automated.",
    rankingReason: "Kubecost is a strong, proven choice for Kubernetes visibility and allocation. It ranks fourteenth because it mostly reports and recommends, while the tools above it act on savings.",
    pricingDetails: "The free Foundations tier covers unlimited clusters up to 250 cores combined, with 15 days of metric retention. Enterprise Self-Hosted adds unlimited cores and retention with SSO and RBAC, and Enterprise Cloud is a managed SaaS option. Both enterprise plans are priced by quote from IBM.",
    facts: {
      freePlan: "Yes, up to 250 cores",
      billingModel: "Free tier, enterprise by quote",
      supportedClouds: "EKS, AKS, GKE and on-premises clusters",
      allocation: "Namespace, deployment, label and pod",
      openSource: "Built on OpenCost, a CNCF project",
      enterpriseFeatures: "SSO, RBAC, bill reconciliation",
      dataRetention: "15 days on the free tier",
      ownership: "IBM",
      factsChecked: "October 2026"
    },
    alternatives: ["cast-ai", "vantage", "kubex"],
    reviewStatus: "Editorial research from IBM Kubecost pricing information, OpenCost materials and published product comparisons, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "doit",
    name: "DoiT",
    initial: "D",
    color: "#2563EB",
    category: "Cost Management",
    score: 7.6,
    rank: 15,
    tag: "Cloud reseller and FinOps platform in one",
    summary: "Buy AWS, Google Cloud or Azure through DoiT and get cost analytics, Flexsave automated savings and access to certified cloud architects.",
    price: "Usage-based, scales with managed spend",
    best: "Fast-growing companies that want a cloud partner, not just a tool",
    url: "https://www.doit.com/",
    domain: "doit.com",
    logo: "https://www.google.com/s2/favicons?domain=doit.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/do-it-web-scaled.png",
    pros: [
      "Flexsave gives on-demand AWS compute one-year commitment pricing",
      "Cost allocation, reporting and AI-assisted insights",
      "Certified cloud architects for purchasing and architecture advice",
      "One consolidated bill across AWS, Google Cloud and Azure"
    ],
    cons: [
      "Best value requires buying your cloud through DoiT",
      "Pricing scales with managed spend, so it is harder to predict as you grow",
      "Less resource automation than dedicated optimization tools"
    ],
    features: [
      "Flexsave",
      "Cloud Analytics",
      "DoiT Insights",
      "Cloud procurement and consolidated billing"
    ],
    verdict: "DoiT is part reseller, part FinOps platform. You buy AWS, Google Cloud or Azure through DoiT as your channel partner, and in return you get partner pricing, consolidated billing, the DoiT Cloud Intelligence platform and access to certified cloud architects. Flexsave automates commitment management on AWS, giving on-demand workloads such as EC2, Fargate, Lambda, RDS and SageMaker one-year commitment pricing without forecasting or buying anything yourself, while the platform adds cost allocation, reporting and AI-assisted recommendations reviewed by DoiT's engineers. Choose DoiT when you want a cloud partner that combines savings, tooling and people; look elsewhere if you want to keep buying cloud directly or need deep resource automation.",
    rankingReason: "DoiT earns points for Flexsave and its expert support. It ranks fifteenth because much of its value is tied to buying cloud through DoiT, and its automation is narrower than the dedicated tools above it.",
    pricingDetails: "DoiT's pricing is consumption-based and scales with the cloud spend it manages. Customers who buy cloud through DoiT get platform access as part of that relationship. Exact rates are not publicly listed, so ask how pricing changes if you keep your existing billing.",
    facts: {
      freePlan: "Depends on how you buy cloud through DoiT",
      billingModel: "Usage-based, scales with managed spend",
      supportedClouds: "AWS, Google Cloud, Azure",
      commitmentManagement: "Flexsave for AWS compute",
      allocation: "Cloud Analytics and reports",
      support: "Certified cloud architects",
      partnerStatus: "AWS Premier Tier Services Partner, Google Cloud Premier Partner",
      factsChecked: "October 2026"
    },
    alternatives: ["usage-ai", "nops", "vantage"],
    reviewStatus: "Editorial research from DoiT's website, Flexsave materials and software directory listings, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "datadog",
    name: "Datadog CCM",
    initial: "D",
    color: "#2563EB",
    category: "Cost Intelligence",
    score: 7.5,
    rank: 16,
    tag: "Cost management inside the Datadog observability platform",
    summary: "Datadog Cloud Cost Management puts cloud and SaaS costs alongside the metrics, traces and logs engineers already use, with recommendations and optional automation.",
    price: "Free tier; Pro from $5 per $1,000 of spend a month",
    best: "Engineering teams already running Datadog",
    url: "https://www.datadoghq.com/",
    domain: "datadoghq.com",
    logo: "https://www.google.com/s2/favicons?domain=datadoghq.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/datadog-dashboard.png",
    pros: [
      "Free Cost Visibility tier",
      "Recommendations that combine billing and performance data",
      "Automations that apply approved recommendations",
      "Kubernetes cost visibility and Karpenter node recommendations"
    ],
    cons: [
      "Some recommendations need Datadog Infrastructure or Container Monitoring",
      "Spend-based fees on top of your existing Datadog bill",
      "Commitment features cover reporting, not automated purchasing"
    ],
    features: [
      "Cost Visibility",
      "Cloud Cost Recommendations",
      "Cost Optimization Automation",
      "Cluster Autoscaling recommendations for Karpenter"
    ],
    verdict: "Datadog Cloud Cost Management brings cost data into the observability platform engineers already use every day, so when spend jumps, teams can trace it to the service, deployment or resource behind it with the same tools they use for performance. Recommendations combine billing and observability data to flag downsizing, deletion, storage and AI-spend opportunities, and Cost Optimization Automation can apply approved recommendations for you, with allocation, budgets, anomaly detection and a FinOps agent rounding it out. Choose Datadog CCM when your engineers already live in Datadog; look elsewhere if you are not a Datadog customer or want commitments purchased for you.",
    rankingReason: "Datadog CCM is a natural pick for Datadog customers and offers a real free tier. It ranks sixteenth because its value depends on other Datadog products, and it doesn't automate commitment purchases.",
    pricingDetails: "The Cost Visibility tier is free. Pro costs $5 per $1,000 of cloud and SaaS spend a month, billed annually, and Enterprise costs $10 per $1,000. Month-to-month rates are higher, and automations can add Workflow Automation charges.",
    facts: {
      freePlan: "Yes, Cost Visibility",
      billingModel: "Per $1,000 of cloud and SaaS spend",
      supportedClouds: "AWS, Azure, GCP, plus SaaS",
      recommendations: "Downsizing, deletion, storage and AI spend",
      automation: "Applies approved recommendations",
      kubernetes: "Cost visibility and Karpenter recommendations",
      dependencies: "Some features need Infrastructure or Container Monitoring",
      factsChecked: "October 2026"
    },
    alternatives: ["vantage", "cloudzero", "finout"],
    reviewStatus: "Editorial research from Datadog's product pages, release notes and published pricing summaries, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "cloudhealth",
    name: "CloudHealth",
    initial: "C",
    color: "#2563EB",
    category: "Cost Management",
    score: 7.4,
    rank: 17,
    tag: "Long-standing multicloud FinOps, now sold through Arrow",
    summary: "One of the original multicloud FinOps platforms, now VMware Tanzu CloudHealth under Broadcom, sold and supported exclusively by Arrow Electronics.",
    price: "Custom quote through Arrow Electronics",
    best: "Enterprises and MSPs with established CloudHealth workflows",
    url: "https://secure.arrow.com/cloudhealth",
    domain: "arrow.com",
    logo: "https://www.google.com/s2/favicons?domain=arrow.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/05/A-screenshot-of-CloudHealth-dashboard.webp",
    pros: [
      "Mature multicloud cost reporting and allocation",
      "Policy-based governance and rightsizing recommendations",
      "Reservation and Savings Plan management",
      "Established tooling for managed service providers"
    ],
    cons: [
      "Changes in ownership and sales add roadmap uncertainty",
      "Pricing is by quote only",
      "Savings depend on teams acting on recommendations"
    ],
    features: [
      "Multicloud cost reporting",
      "Perspectives for allocation",
      "Governance policies",
      "Rightsizing and reservation recommendations"
    ],
    verdict: "CloudHealth, now VMware Tanzu CloudHealth under Broadcom, was one of the first multicloud FinOps platforms. It gives finance and engineering teams cost reporting, allocation, governance policies and optimization recommendations across AWS, Azure and Google Cloud. Since May 2024, Arrow Electronics has been its exclusive provider, handling sales, marketing and technical support, while Broadcom continues to run research and development. Choose CloudHealth if you already rely on it or work with an MSP that does; new buyers should compare it closely with newer platforms that automate more of the savings.",
    rankingReason: "CloudHealth remains a capable governance and reporting platform. It ranks seventeenth because its changing ownership adds uncertainty, and its savings depend mostly on teams acting on recommendations.",
    pricingDetails: "CloudHealth is priced by quote through Arrow Electronics, its exclusive provider. Public pricing and free plan details are not publicly listed. If you are moving from an older VMware agreement, ask Arrow how contracts and support carry over.",
    facts: {
      freePlan: "Not publicly listed",
      billingModel: "Custom contract through Arrow Electronics",
      supportedClouds: "AWS, Azure, Google Cloud",
      allocation: "Perspectives",
      governance: "Policy-based rules and alerts",
      optimization: "Rightsizing and reservation recommendations",
      salesAndSupport: "Arrow Electronics, since May 2024",
      development: "Broadcom",
      factsChecked: "October 2026"
    },
    alternatives: ["cloudability", "nops", "vantage"],
    reviewStatus: "Editorial research from Broadcom, VMware and Arrow Electronics announcements, checked October 2026. Feature descriptions are general and should be confirmed with Arrow. Not independently hands-on tested."
  },
  {
    slug: "kubex",
    name: "Kubex",
    initial: "K",
    color: "#2563EB",
    category: "Kubernetes Optimization",
    score: 7.3,
    rank: 18,
    tag: "Kubernetes and GPU rightsizing, formerly Densify",
    summary: "AI-driven resource optimization for Kubernetes, GPUs and cloud instances, with published per-vCPU pricing.",
    price: "From $1 per vCPU a month",
    best: "Platform teams rightsizing Kubernetes and GPU workloads",
    url: "https://kubex.ai/",
    domain: "kubex.ai",
    logo: "https://www.google.com/s2/favicons?domain=kubex.ai&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/kubex-densify-dashboard-ml-rightsizing-1.webp",
    pros: [
      "Published pricing: $1 per vCPU a month for Kubernetes optimization",
      "Rightsizes containers, pods and nodes",
      "GPU and AI workload optimization on enterprise plans",
      "Also optimizes cloud instances, auto scaling groups and RDS"
    ],
    cons: [
      "Focused on resources, not commitments or allocation",
      "GPU features need a custom enterprise plan",
      "Oracle Cloud support is still on the roadmap"
    ],
    features: [
      "Kubernetes rightsizing",
      "GPU optimization",
      "Cloud instance, auto scaling group and RDS optimization",
      "MCP server"
    ],
    verdict: "Kubex, known as Densify until January 2026, focuses on automated resource optimization. It predicts resource needs from historical data and rightsizes Kubernetes containers, pods and nodes, and applies the same approach to GPU and AI workloads. Beyond Kubernetes, it optimizes cloud instances, auto scaling group and scale set configurations, and RDS databases, while an MCP server and chat-based interface make its analysis easier to explore. Choose Kubex when rightsizing Kubernetes and GPU workloads is your main goal and you want predictable per-vCPU pricing; look elsewhere for commitment or allocation tools.",
    rankingReason: "Kubex is a capable rightsizing engine with clear pricing. It ranks eighteenth because it covers resource optimization only, which addresses a smaller share of a typical bill than broader tools.",
    pricingDetails: "The Kubernetes Resource Optimization plan costs $1 per vCPU a month and covers Kubernetes and cloud infrastructure. The Enterprise K8s and GPU Optimization plan adds GPU optimization and enterprise controls, priced per vCPU and per GPU by quote. A free plan is not publicly listed.",
    facts: {
      freePlan: "Not publicly listed",
      billingModel: "Per vCPU, plus per GPU on enterprise plans",
      supportedClouds: "AWS, Azure, GCP",
      kubernetes: "Container, pod and node rightsizing",
      gpu: "GPU and AI workload optimization",
      cloudResources: "Instances, auto scaling groups, scale sets, RDS",
      previouslyKnownAs: "Densify, until January 2026",
      factsChecked: "October 2026"
    },
    alternatives: ["cast-ai", "sedai", "kubecost"],
    reviewStatus: "Editorial research from Kubex's website, published pricing page and rebrand announcement, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "sedai",
    name: "Sedai",
    initial: "S",
    color: "#2563EB",
    category: "Cloud Optimization",
    score: 7.2,
    rank: 19,
    tag: "Autonomous resource optimization with automatic rollbacks",
    summary: "Sedai tunes live cloud and Kubernetes resources for cost and performance, with safety checks and automatic rollbacks.",
    price: "Resource-based, by quote",
    best: "Teams comfortable letting software tune production",
    url: "https://www.sedai.io/",
    domain: "sedai.io",
    logo: "https://www.google.com/s2/favicons?domain=sedai.io&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/sedai-web-scaled.png",
    pros: [
      "Three modes: Datapilot, Copilot and Autopilot",
      "Covers Kubernetes, serverless and cloud resources on AWS, Azure and GCP",
      "Health checks and automatic rollbacks on every change",
      "Also optimizes Databricks and GPU workloads"
    ],
    cons: [
      "Detailed pricing is by quote",
      "Requires trust in autonomous changes to production",
      "Not a commitment or allocation tool"
    ],
    features: [
      "Autopilot mode",
      "Copilot one-click approvals",
      "Health verification and automatic rollbacks",
      "Sed assistant"
    ],
    verdict: "Sedai is built around autonomous action. It learns how each application behaves, then adjusts resources, scaling and configuration to cut cost and latency, checking health as it goes and rolling back if something degrades. Teams can start in Datapilot for visibility, move to Copilot to approve each change with one click, and switch to Autopilot once they trust it, with coverage across Kubernetes, serverless and cloud resources on AWS, Azure and Google Cloud, plus Databricks and GPUs. Choose Sedai when you want optimization to run continuously without engineering tickets; look elsewhere if every production change must go through manual review.",
    rankingReason: "Sedai is among the most automated tools on this list. It ranks nineteenth because it focuses on resources rather than rates or allocation, and its pricing is less transparent than most.",
    pricingDetails: "Sedai prices by the resources it optimizes. Detailed per-unit rates are not publicly listed, so contact sales for a quote. For Kubernetes, Sedai recommends a demo to set pricing based on your environment.",
    facts: {
      freePlan: "Not publicly listed",
      billingModel: "Resource-based, by quote",
      supportedClouds: "AWS, Azure, GCP",
      kubernetes: "Autonomous rightsizing and scaling",
      serverless: "Supported",
      otherWorkloads: "Databricks and GPU optimization",
      modes: "Datapilot, Copilot, Autopilot",
      factsChecked: "October 2026"
    },
    alternatives: ["cast-ai", "kubex", "harness"],
    reviewStatus: "Editorial research from Sedai's website, product pages and blog, checked October 2026. Not independently hands-on tested."
  },
  {
    slug: "cloudfix",
    name: "CloudFix",
    initial: "C",
    color: "#2563EB",
    category: "Cloud Optimization",
    score: 7.1,
    rank: 20,
    tag: "Automated fixes for AWS-recommended savings",
    summary: "CloudFix finds AWS-recommended savings every week and applies the fixes you approve, with no manual work.",
    price: "Free version; paid fixed rate scaled to AWS spend",
    best: "AWS teams that want routine fixes handled for them",
    url: "https://cloudfix.com/",
    domain: "cloudfix.com",
    logo: "https://www.google.com/s2/favicons?domain=cloudfix.com&sz=128",
    screenshot: "https://www.usage.ai/wp-content/uploads/2026/10/cloudfix-dashboard.png",
    pros: [
      "Tracks more than 50 AWS savings advisories a week",
      "Applies approved fixes automatically",
      "Free version and free trial",
      "Pre-vetted fixes designed to be safe to apply"
    ],
    cons: [
      "AWS only",
      "Covers routine fixes, not commitments or Kubernetes",
      "Single sign-on isn't built in and is enabled after purchase"
    ],
    features: [
      "AWS advisory tracking",
      "Automated fixes on approval",
      "Free version",
      "Pre-vetted changes"
    ],
    verdict: "CloudFix turns AWS's own savings advice into action. AWS publishes dozens of cost advisories every week; CloudFix finds the ones that apply to your accounts, lets you approve them and applies the fixes automatically. Its fixes are pre-vetted and narrow, which makes them low-risk to run continuously, pricing scales with your AWS spend, and a free version lets you see what it would find first. Choose CloudFix when you run on AWS and want routine optimization handled for you; look elsewhere if you use other clouds or need commitment and Kubernetes coverage.",
    rankingReason: "CloudFix is simple, safe and genuinely automated. It ranks twentieth because it covers only AWS and a narrower set of savings than the tools above it.",
    pricingDetails: "CloudFix offers a free version and a free trial. Paid pricing is a fixed rate that scales with your AWS spend; software directory listings show it starting at $25,000 per $5 million of AWS spend, which should be confirmed with CloudFix.",
    facts: {
      freePlan: "Yes, free version",
      billingModel: "Fixed rate by AWS spend",
      supportedClouds: "AWS only",
      fixes: "AWS-recommended savings, applied on approval",
      advisoriesTracked: "50+ a week",
      freeTrial: "Yes",
      factsChecked: "October 2026"
    },
    alternatives: ["harness", "nops", "sedai"],
    reviewStatus: "Editorial research from CloudFix's website, support documentation and software directory listings, checked October 2026. The paid price comes from directory listings, not CloudFix's own site. Dashboard screenshot sourced from CloudFix support documentation. Not independently hands-on tested."
  }
];

export const categories = [...new Set(tools.map(t => t.category))]
  .map(name => ({ name, icon: "cloud", count: tools.filter(t => t.category === name).length }));

export const getTool = (slug) => tools.find((tool) => tool.slug === slug);