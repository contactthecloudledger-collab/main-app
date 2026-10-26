export const tools = [
  {
    slug: "usage-ai",
    name: "Usage.ai",
    initial: "U",
    color: "#2563eb",
    category: "Commitment Automation",
    score: 9.5,
    rank: 1,
    tag: "Insured, hands-off commitment management",
    summary:
      "Hands-off commitment management for AWS, Azure and Google Cloud, with cashback on eligible underuse and no platform fee.",
    price: "Share of realized savings; no platform fee or contract",
    best: "Teams that want commitment discounts without long-term lock-in",
    url: "https://www.usage.ai/",
    domain: "usage.ai",
    logo: "https://www.google.com/s2/favicons?domain=usage.ai&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/usage.ai-dashboard-scaled.png",
    pros: [
      "Long-term discount rates with Flex Insured Commitments",
      "Cashback Protection for eligible underuse",
      "No platform fee, minimum or contract",
      "Setup in minutes without infrastructure changes",
      "Cost visibility and rightsizing recommendations",
    ],
    cons: [
      "Rightsizing is recommendation-only",
      "Fee percentage is provided during the savings assessment",
    ],
    features: [
      "Flex Insured Commitments",
      "Autopilot commitment management",
      "Cashback Protection",
      "Multicloud cost visibility",
      "Rightsizing recommendations",
    ],
    verdict:
      "Usage.ai is a commitment management platform for AWS, Azure and Google Cloud. It studies your usage, then buys and manages discounted commitments on your behalf through what it calls Flex Insured Commitments. Its Autopilot keeps laddering and rebalancing that portfolio as your usage changes, across more than 50 cloud services. What sets it apart is downside protection. Native Savings Plans and Reserved Instances lock you in for one or three years. Usage.ai pairs long-term rates with Cashback Protection, which refunds eligible underuse if your usage falls. Pricing follows the same logic: no platform fee, no minimum and no contract, just a share of realized savings, invoiced the month after from your provider’s finalized billing data. Beyond commitments, Usage.ai gives you visibility into your cloud costs and rightsizing recommendations. It doesn’t act on those recommendations itself: you decide which to apply, so nothing in your infrastructure changes without your say. Teams that want resizing, idle shutdown or Kubernetes tuning done automatically can pair it with a resource optimization tool. Choose Usage.ai when you want the deepest commitment discounts with the least risk and effort.",
    rankingReason:
      "Ranks first for savings and automation, with cashback protection on eligible underuse. Its visibility and allocation capabilities are less extensive than some broader FinOps suites, and its fee rate is quote-based.",
    pricingDetails:
      "Usage.ai charges a share of verified realized savings, billed monthly after cloud-provider billing is finalized. No platform fee, minimum or contract. According to the client-provided information, companies under $200K in monthly cloud spend can review recommendations free for six months.",
    facts: {
      freePlan:
        "Six months free to review recommendations for companies under $200K/month in cloud spend",
      billingModel: "Share of realized savings",
      platformFee: "None",
      contract: "None required",
      supportedClouds: "AWS, Azure, Google Cloud",
      servicesCovered: "50+",
      commitmentManagement: "Autopilot",
      underuseProtection:
        "Cashback on eligible Flex Insured Commitments",
      rightsizing: "Recommendations only",
      access: "Read-only role, then purchase-only role",

      factsChecked: "October 2026",
    },
    alternatives: ["nops", "prosperops", "vantage"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "nops",
    name: "nOps",
    initial: "n",
    color: "#2563eb",
    category: "Cloud Optimization",
    score: 9.3,
    rank: 2,
    tag: "All-in-one FinOps with automated optimization",
    summary:
      "A broad FinOps platform pairing multicloud cost visibility and allocation with automated commitment and Kubernetes optimization.",
    price:
      "Fixed fee by cloud spend plus share of savings for rate optimization",
    best:
      "Multicloud teams wanting visibility and hands-off savings in one tool",
    url: "https://www.nops.io/",
    domain: "nops.io",
    logo: "https://www.google.com/s2/favicons?domain=nops.io&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/nops-website-scaled.png",
    pros: [
      "Visibility across AWS, Azure, GCP, Kubernetes, SaaS and AI costs",
      "Allocation, showback, chargeback, forecasting and budgets",
      "Automated commitment management",
      "Kubernetes rightsizing and resource scheduling",
    ],
    cons: [
      "No free plan; 14-day trial",
      "Platform fee increases with cloud spend",
      "Rate optimization adds a share-of-savings fee",
    ],
    features: [
      "Cost visibility and allocation",
      "Commitment management",
      "Kubernetes optimization",
      "Anomaly detection and forecasting",
    ],
    verdict:
      "nOps combines cloud cost reporting, allocation and forecasting with optimization actions such as commitment management, scheduling and Kubernetes rightsizing. It suits teams seeking visibility and optimization from one provider.",
    rankingReason:
      "Strong on visibility, allocation and automation, but ranks below Usage.ai because of its combined platform and savings-based fees and lack of insured commitment protection.",
    pricingDetails:
      "Cost visibility is charged as a fixed fee based on cloud spend; autonomous rate optimization adds a share of generated savings. A 14-day trial is available.",
    facts: {
      freePlan: "No; 14-day trial",
      billingModel: "Fixed fee by spend plus share of savings",
      supportedClouds: "AWS, Azure, GCP",
      additionalCoverage: "Kubernetes, SaaS and AI costs",
      commitmentManagement: "Automated",
      rightsizing:
        "Recommendations and Kubernetes container optimization",
      factsChecked: "October 2026",
    },
    alternatives: ["usage-ai", "prosperops", "vantage"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "prosperops",
    name: "ProsperOps",
    initial: "P",
    color: "#2563eb",
    category: "Commitment Automation",
    score: 9.1,
    rank: 3,
    tag: "Autonomous discount management",
    summary:
      "Autonomous discount management that buys and adjusts Savings Plans, Reserved Instances and committed-use discounts as usage changes.",
    price:
      "Share of realized savings; workload optimization priced separately",
    best:
      "Teams with steady compute spend wanting discounts managed automatically",
    url: "https://www.prosperops.com/",
    domain: "prosperops.com",
    logo:
      "https://www.google.com/s2/favicons?domain=prosperops.com&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/prosperops-dashboard.png",
    pros: [
      "Continuous commitment management across AWS, Azure and GCP",
      "Fee based on realized savings rather than cloud spend",
      "Free savings analysis",
      "Backed by Flexera",
    ],
    cons: [
      "Fee percentage is not publicly listed",
      "Resource optimization is a separate per-resource product",
      "Packaging may change as Flexera integrates products",
    ],
    features: [
      "Autonomous Discount Management",
      "Effective Savings Rate reporting",
      "Autonomous Resource Management",
      "ProsperOps+",
    ],
    verdict:
      "ProsperOps autonomously manages commitment portfolios across the three major clouds. Its discount management is priced as a share of realized savings, while workload optimization is a separate product. Flexera acquired ProsperOps in January 2026, according to the client-provided information.",
    rankingReason:
      "A mature autonomous commitment manager, ranked third because its fee rate is unpublished and its approach to commitment risk differs from cashback protection for underuse.",
    pricingDetails:
      "Autonomous Discount Management charges a percentage of realized savings. Autonomous Resource Management has a separate flat monthly fee per managed resource. A free savings analysis is offered.",
    facts: {
      freePlan: "No; free savings analysis",
      billingModel: "Share of realized savings",
      supportedClouds: "AWS, Azure, Google Cloud",
      commitmentManagement: "Autonomous",
      workloadOptimization: "Separate per-resource product",
      savingsMetrics: "Effective Savings Rate",
      ownership: "Flexera, since January 2026",
      founded: "2018",
      factsChecked: "October 2026",
    },
    alternatives: ["usage-ai", "nops", "vantage"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "vantage",
    name: "Vantage",
    initial: "V",
    color: "#2563eb",
    category: "Cost Management",
    score: 9.0,
    rank: 4,
    tag: "Developer-friendly cost reporting with published pricing",
    summary:
      "Cost reporting across more than 20 providers, with a free tier, virtual tagging and published monthly pricing.",
    price: "Free Starter plan; paid plans from $30/month",
    best:
      "Small and mid-size teams wanting clear reports and predictable pricing",
    url: "https://www.vantage.sh/",
    domain: "vantage.sh",
    logo:
      "https://www.google.com/s2/favicons?domain=vantage.sh&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/vantage-dash-scaled.png",
    pros: [
      "Free Starter plan for up to $2,500 monthly tracked spend",
      "Published flat monthly pricing",
      "Tracks 20+ providers",
      "Virtual tagging, Kubernetes allocation, API and MCP server",
    ],
    cons: [
      "Tier changes can raise prices sharply",
      "Automation primarily targets AWS Savings Plans",
      "Lower tiers limit users and data retention",
    ],
    features: [
      "Cost reports and dashboards",
      "Virtual tagging",
      "AWS Savings Plans Autopilot",
      "Kubernetes cost allocation",
    ],
    verdict:
      "Vantage provides developer-friendly reporting, allocation, budgets, forecasts and anomaly alerts across cloud and other infrastructure providers. Its free tier and published pricing make it accessible, while automated savings are more limited than dedicated commitment managers.",
    rankingReason:
      "Ranks highly for pricing transparency, setup and reporting, but fourth overall because its automation is narrower than the top three tools.",
    pricingDetails:
      "Client-provided October 2026 figures: Starter free up to $2,500 monthly tracked spend; Pro $30/month up to $7,500; Business $200/month up to $20,000; Enterprise custom. AWS Savings Plans Autopilot adds a savings-based fee.",
    facts: {
      freePlan: "Yes; up to $2,500/month tracked spend",
      billingModel: "Flat monthly tiers by tracked spend",
      paidFrom: "$30/month",
      supportedProviders: "20+",
      commitmentManagement: "AWS Savings Plans Autopilot",
      allocation: "Virtual tagging",
      kubernetes: "Cost allocation agent",
      developerAccess: "API, Terraform provider, MCP server",
      singleSignOn: "SAML on every plan",
      factsChecked: "October 2026",
    },
    alternatives: ["usage-ai", "nops", "cloudzero"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "harness",
    name: "Harness CCM",
    initial: "H",
    color: "#2563eb",
    category: "Cloud Optimization",
    score: 8.8,
    rank: 5,
    tag: "Cloud and AI cost management with AutoStopping",
    summary:
      "Cloud cost management with a free plan and automation that stops idle non-production resources and restarts them on demand.",
    price: "Free Forever plan; Enterprise pricing on request",
    best:
      "Engineering teams with large development, testing and staging environments",
    url: "https://www.harness.io/",
    domain: "harness.io",
    logo:
      "https://www.google.com/s2/favicons?domain=harness.io&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/harness-dash.png",
    pros: [
      "Free Forever plan",
      "AutoStopping for idle VMs, Kubernetes clusters and RDS",
      "Commitment orchestration and spot management",
      "Cost Perspectives across clouds and on-premises",
    ],
    cons: [
      "Free plan limited to 10 AutoStopping rules",
      "Enterprise pricing not published",
      "Free plan subject to a cloud spend limit",
    ],
    features: [
      "AutoStopping",
      "Commitment orchestration",
      "Cost Perspectives",
      "AI cost management",
    ],
    verdict:
      "Harness Cloud and AI Cost Management brings cloud cost visibility together with AutoStopping, which pauses idle non-production infrastructure and restarts it when needed. It is particularly relevant to teams with substantial dev, test and staging costs.",
    rankingReason:
      "Strong automation and a free plan, but its signature savings capability focuses on non-production idle resources rather than steady production commitments.",
    pricingDetails:
      "Free Forever includes core features and up to 10 AutoStopping rules, subject to a cloud spend limit. Enterprise pricing is based on managed cloud spend and is available by quote.",
    facts: {
      freePlan: "Free Forever; limits apply",
      billingModel: "Enterprise priced on managed cloud spend",
      supportedClouds: "AWS, Azure, GCP and on-premises",
      idleResources: "VMs, Kubernetes clusters and RDS",
      commitmentManagement: "Commitment orchestration",
      spotInstances: "Spot management",
      allocation: "Cost Perspectives and Cost Categories",
      aiCosts: "Token, agent and model spend",
      factsChecked: "October 2026",
    },
    alternatives: ["cast-ai", "nops", "usage-ai"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "cloudzero",
    name: "CloudZero",
    initial: "C",
    color: "#2563eb",
    category: "Cost Intelligence",
    score: 8.7,
    rank: 6,
    tag: "Cloud cost intelligence and unit economics",
    summary:
      "Connects cloud spending to customers, features and teams, including shared and untagged costs.",
    price: "Tiered by cloud spend; custom quote",
    best: "SaaS companies measuring cost per customer or feature",
    url: "https://www.cloudzero.com/",
    domain: "cloudzero.com",
    logo:
      "https://www.google.com/s2/favicons?domain=cloudzero.com&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/cloudzero-.png",
    pros: [
      "Unit economics by customer, feature or transaction",
      "CostFormation allocation for shared and untagged costs",
      "Hourly-granularity anomaly detection",
      "No overage charges for spend spikes",
    ],
    cons: [
      "No listed free plan; pricing by quote",
      "Allocation design requires upfront work",
      "Does not automate commitment purchases or infrastructure changes",
    ],
    features: [
      "Unit cost analytics",
      "CostFormation",
      "Anomaly detection",
      "AnyCost",
    ],
    verdict:
      "CloudZero turns cloud billing data into business-level unit economics, using CostFormation for cost allocation and AnyCost for additional sources. It excels at understanding spend rather than automatically changing infrastructure or buying commitments.",
    rankingReason:
      "Strongest for unit economics and allocation, but sixth under a methodology that weights delivered savings and automation more heavily.",
    pricingDetails:
      "Custom tiered pricing based on cloud spend brought onto the platform, with no overage charges when spending spikes.",
    facts: {
      freePlan: "Not listed",
      billingModel: "Tiered by cloud spend",
      supportedClouds: "AWS, Azure, GCP, Oracle Cloud",
      additionalCoverage: "Kubernetes, PaaS and SaaS",
      allocation: "CostFormation",
      unitEconomics: "Cost per customer, feature or team",
      anomalyDetection: "Hourly granularity",
      cloudAccess: "Read-only",
      support: "Dedicated FinOps account manager",
      factsChecked: "October 2026",
    },
    alternatives: ["finout", "vantage", "nops"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "cast-ai",
    name: "CAST AI",
    initial: "C",
    color: "#2563eb",
    category: "Kubernetes Optimization",
    score: 8.6,
    rank: 7,
    tag: "Automated Kubernetes optimization",
    summary:
      "Continuously optimizes Kubernetes clusters through autoscaling, bin packing, workload rightsizing and spot automation.",
    price: "Free monitoring; automation priced per managed CPU",
    best:
      "Kubernetes-heavy teams ready for automated cluster changes",
    url: "https://cast.ai/",
    domain: "cast.ai",
    logo:
      "https://www.google.com/s2/favicons?domain=cast.ai&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/cast.ai-site-scaled.png",
    pros: [
      "Free monitoring for unlimited clusters",
      "Automated autoscaling, bin packing and rightsizing",
      "Spot instance automation",
      "Live container migration",
    ],
    cons: [
      "Only covers Kubernetes-related spend",
      "Paid automation pricing not fully published",
      "Requires Kubernetes and networking expertise for onboarding",
    ],
    features: [
      "Autoscaling and bin packing",
      "Workload rightsizing",
      "Spot automation",
      "Live container migration",
    ],
    verdict:
      "CAST AI automates Kubernetes infrastructure optimization on major clouds, including node scaling, workload rightsizing and spot usage. Its free tier covers monitoring, while automation is paid.",
    rankingReason:
      "Excellent Kubernetes automation, but ranks seventh because it does not address costs outside clusters.",
    pricingDetails:
      "Free cost monitoring and recommendations for unlimited clusters. Paid automation is charged per managed CPU, with enterprise quotes available.",
    facts: {
      freePlan: "Yes; monitoring for unlimited clusters",
      billingModel: "Per managed CPU",
      supportedClouds: "AWS, Azure, GCP, Oracle Cloud",
      platforms: "EKS, AKS, GKE",
      autoscaling: "Automated",
      rightsizing: "Automated Kubernetes workloads",
      spotInstances: "Automated",
      founded: "2019",
      factsChecked: "October 2026",
    },
    alternatives: ["harness", "nops", "usage-ai"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "finout",
    name: "Finout",
    initial: "F",
    color: "#2563eb",
    category: "Cost Intelligence",
    score: 8.4,
    rank: 8,
    tag: "Unified cost allocation across cloud and SaaS",
    summary:
      "Combines cloud, data platform and SaaS costs in a MegaBill, with virtual tagging and shared-cost allocation.",
    price: "Custom contract pricing",
    best:
      "Teams consolidating cloud, SaaS and data platform spending",
    url: "https://www.finout.io/",
    domain: "finout.io",
    logo:
      "https://www.google.com/s2/favicons?domain=finout.io&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/finout-dash-scaled.png",
    pros: [
      "MegaBill consolidates cloud, Kubernetes and data platform costs",
      "Virtual tagging without infrastructure changes",
      "Budgeting and forecasting",
      "SOC 2 and ISO 27001 certification",
    ],
    cons: [
      "No free plan; pricing by quote",
      "Focused more on allocation than automatic savings",
      "Most valuable when consolidating multiple cost sources",
    ],
    features: [
      "MegaBill",
      "Virtual tags",
      "Financial plans",
      "CostGuard",
    ],
    verdict:
      "Finout consolidates cloud, Kubernetes, data platform and SaaS bills and allocates them with virtual tags. It suits organizations with many cost sources and complex shared-cost allocation needs.",
    rankingReason:
      "Strong consolidation and allocation, but ranks eighth because its core value is visibility rather than automated savings.",
    pricingDetails:
      "Custom contract-based pricing. Ask the vendor how spend, sources, users and contract terms affect the quote.",
    facts: {
      freePlan: "No",
      billingModel: "Custom contract",
      supportedClouds: "AWS, Azure, GCP, OCI",
      additionalCoverage:
        "Kubernetes, Snowflake, Databricks, Datadog and CDNs",
      allocation: "Virtual tags",
      forecasting: "Financial plans and budgets",
      optimization: "CostGuard",
      setup: "Codeless integration",
      ce: "SOC 2, ISO 27001",
      factsChecked: "October 2026",
    },
    alternatives: ["cloudzero", "vantage", "ternary"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "ternary",
    name: "Ternary",
    initial: "T",
    color: "#2563eb",
    category: "Cost Management",
    score: 8.2,
    rank: 9,
    tag: "Multicloud FinOps with self-hosting",
    summary:
      "Multicloud FinOps reporting and governance with a self-hosted deployment option and FOCUS-standard billing data.",
    price: "Tiered by cloud spend; fixed contract quote",
    best:
      "Enterprises needing multicloud FinOps with self-hosting",
    url: "https://ternary.app/",
    domain: "ternary.app",
    logo:
      "https://www.google.com/s2/favicons?domain=ternary.app&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/ternary-scaled.png",
    pros: [
      "Self-hosted option for data control",
      "Supports five major cloud providers",
      "FOCUS-standard billing data",
      "MSP chargebacks and bill splitting",
    ],
    cons: [
      "No listed free plan",
      "Client-provided material notes slower feature delivery in some reviews",
      "Self-hosting adds infrastructure responsibility and cost",
    ],
    features: [
      "Ternary Self-Hosted",
      "FOCUS billing data",
      "Anomaly detection and forecasting",
      "Enterprise finance and MSP tools",
    ],
    verdict:
      "Ternary supports multicloud reporting, allocation, forecasting and governance. Its differentiator is a self-hosted option in a customer-controlled Google Cloud environment, alongside FOCUS-based billing normalization.",
    rankingReason:
      "A strong governance and reporting platform, ranked ninth because its emphasis is less on automated savings.",
    pricingDetails:
      "Tiered pricing based on cloud spend with a fixed contract price. Self-hosted deployments also incur the customer's own infrastructure costs.",
    facts: {
      freePlan: "Not listed",
      billingModel: "Tiered by cloud spend; fixed contract",
      supportedClouds:
        "AWS, Azure, Google Cloud, Alibaba Cloud, OCI",
      deployment: "SaaS or self-hosted in Google Cloud",
      billingStandard: "FOCUS",
      certification: "FinOps Foundation Certified Platform",
      optimization: "Rightsizing and commitment recommendations",
      integrations: "Jira, Datadog, Snowflake",
      factsChecked: "October 2026",
    },
    alternatives: ["finout", "cloudzero", "nops"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "zesty",
    name: "Zesty",
    initial: "Z",
    color: "#2563eb",
    category: "Cloud Optimization",
    score: 8.1,
    rank: 10,
    tag: "Kubernetes optimization and commitment management",
    summary:
      "Combines Kubernetes autoscaling and commitment management to match cluster capacity and discounts to demand.",
    price:
      "Share of savings for commitments; separate Kubernetes product pricing",
    best:
      "Kubernetes-heavy teams also seeking commitment management",
    url: "https://zesty.co/",
    domain: "zesty.co",
    logo:
      "https://www.google.com/s2/favicons?domain=zesty.co&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/zesty-scaled.png",
    pros: [
      "Horizontal and vertical pod autoscaling",
      "Staggered Savings Plans with Commitment Manager",
      "Persistent volume autoscaling and CPU headroom reduction",
      "Savings-based pricing for Commitment Manager",
    ],
    cons: [
      "Separate product quotes can complicate pricing",
      "Commitment coverage centers on AWS and Azure",
      "Manages risk with staggered commitments rather than refunds",
    ],
    features: [
      "Multi-dimensional autoscaling",
      "Headroom reduction",
      "Persistent volume autoscaling",
      "Commitment Manager",
    ],
    verdict:
      "Zesty combines Kubernetes resource efficiency with a Commitment Manager that builds a staggered portfolio of Savings Plans. It suits teams wanting both cluster optimization and discount management.",
    rankingReason:
      "Strong automation, but ranks tenth because pricing spans multiple products and reporting and allocation are less extensive than broader FinOps platforms.",
    pricingDetails:
      "Commitment Manager takes a share of generated savings. Kubernetes products are priced separately, so request a combined quote when evaluating multiple products.",
    facts: {
      freePlan: "Not listed",
      billingModel: "Share of savings plus per-product fees",
      supportedClouds: "AWS, Azure",
      kubernetes:
        "Pod autoscaling, headroom reduction, persistent volume autoscaling",
      commitmentManagement: "Staggered Savings Plans",
      rightsizing: "Automated Kubernetes workloads",
      factsChecked: "October 2026",
    },
    alternatives: ["cast-ai", "usage-ai", "prosperops"],
    reviewStatus:
      "Editorial research based on client-provided information; independent hands-on testing not established",
  },

  {
    slug: "kubecost",
    name: "Kubecost",
    initial: "K",
    color: "#2563eb",
    category: "Kubernetes Optimization",
    score: 8.6,
    rank: null,
    tag: "Kubernetes cost allocation",
    summary:
      "Provides Kubernetes cost visibility, allocation and optimization insights across namespaces, deployments and workloads.",
    price: "See official pricing page",
    best:
      "Platform teams needing Kubernetes cost transparency",
    url: "https://www.kubecost.com/",
    domain: "kubecost.com",
    logo:
      "https://www.google.com/s2/favicons?domain=kubecost.com&sz=128",
    screenshot:
      "https://www.usage.ai/wp-content/uploads/2026/10/kubercost-scaled.png",
    pros: [
      "Kubernetes allocation",
      "Workload cost visibility",
      "Savings insights",
      "Team accountability",
    ],
    cons: [
      "Focused on Kubernetes",
      "Not a commitment purchasing platform",
    ],
    features: [
      "Cost allocation",
      "Cluster visibility",
      "Optimization insights",
      "Workload reporting",
    ],
    reviewStatus:
      "Existing entry retained; not included in the client's verified top-10 rankings",
  },
];

export const categories = [
  { name: "Cloud Optimization", icon: "cloud", count: 3 },
  { name: "Commitment Automation", icon: "cloud", count: 2 },
  { name: "Cost Intelligence", icon: "cloud", count: 2 },
  { name: "Cost Management", icon: "cloud", count: 2 },
  { name: "Kubernetes Optimization", icon: "cloud", count: 2 },
];

export const getTool = (slug) =>
  tools.find((tool) => tool.slug === slug);