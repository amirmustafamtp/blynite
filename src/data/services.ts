export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  introduction: string;
  icon: "code" | "brain" | "layers" | "devices" | "cloud" | "network";
  useCases: string[];
  deliverables: string[];
  approach: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Engineering",
    shortTitle: "Custom software",
    icon: "code",
    description:
      "Scalable applications and systems shaped around the way your business works.",
    introduction:
      "The right software should fit your business, not force your business to fit it. We design and engineer tailored systems that make complex workflows clear, connected, and dependable.",
    useCases: [
      "Customer and partner portals",
      "Operational platforms and workflow systems",
      "Modernization of existing applications",
    ],
    deliverables: [
      "Solution architecture and technical plan",
      "Tested application and API implementation",
      "Deployment, documentation, and handover",
    ],
    approach:
      "We start with the problem and the people using the system. Small, reviewable releases help us validate decisions early, while automated tests and clear documentation support the software beyond its first launch.",
    related: ["cloud-integrations", "enterprise-solutions"],
  },
  {
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    shortTitle: "AI & automation",
    icon: "brain",
    description:
      "Practical intelligence that connects knowledge, streamlines work, and supports better decisions.",
    introduction:
      "AI is useful when it solves a specific problem. We build assistants, knowledge tools, and automations around real workflows, with thoughtful boundaries, evaluation, and human oversight.",
    useCases: [
      "Internal knowledge search and grounded assistants",
      "Document processing and information extraction",
      "Workflow automation with human review",
    ],
    deliverables: [
      "Use-case assessment and evaluation criteria",
      "Integrated AI workflow or application",
      "Monitoring, guardrails, and operational guidance",
    ],
    approach:
      "We check data readiness and define what a reliable outcome means before choosing a model. We evaluate behavior on representative tasks, design for failure, and keep people in control where decisions matter.",
    related: ["custom-software", "cloud-integrations"],
  },
  {
    slug: "saas-development",
    title: "SaaS Product Development",
    shortTitle: "SaaS products",
    icon: "layers",
    description:
      "From the first product decision to a platform ready for its next chapter.",
    introduction:
      "A successful product needs more than a feature list. We connect product strategy, user experience, and engineering to help shape focused SaaS products that can evolve with their customers.",
    useCases: [
      "New SaaS products and focused first releases",
      "Multi-tenant business platforms",
      "Product expansion and platform improvements",
    ],
    deliverables: [
      "Product scope, roadmap, and experience design",
      "Application, account, and integration architecture",
      "Release pipeline and ongoing improvement plan",
    ],
    approach:
      "We focus the first release on the core user need. Architecture, access control, subscriptions, and operations are considered together, with a practical path from early validation to continued development.",
    related: ["web-mobile", "cloud-integrations"],
  },
  {
    slug: "web-mobile",
    title: "Web & Mobile Applications",
    shortTitle: "Web & mobile",
    icon: "devices",
    description:
      "Thoughtful digital experiences that feel natural on every screen.",
    introduction:
      "Good applications make complicated things feel straightforward. We build responsive web experiences and mobile applications with attention to usability, accessibility, speed, and the details people notice.",
    useCases: [
      "Customer-facing web and mobile applications",
      "Responsive business applications",
      "Digital experiences connected to existing platforms",
    ],
    deliverables: [
      "User flows, interface designs, and reusable components",
      "Responsive web or mobile application",
      "Accessibility, performance, and release checks",
    ],
    approach:
      "We design around real tasks, prototype the important interactions, and test across screen sizes. Shared components and considered API boundaries keep the experience consistent and the code maintainable.",
    related: ["saas-development", "custom-software"],
  },
  {
    slug: "cloud-integrations",
    title: "Cloud & Integrations",
    shortTitle: "Cloud & integrations",
    icon: "cloud",
    description:
      "Reliable infrastructure and connected systems that work better together.",
    introduction:
      "Your applications are only part of the system. We connect services, data, and infrastructure so your technology can operate reliably and adapt without unnecessary complexity.",
    useCases: [
      "API design and third-party integrations",
      "Cloud deployment and environment setup",
      "Data synchronization and system connections",
    ],
    deliverables: [
      "Infrastructure and integration architecture",
      "APIs, integrations, and deployment automation",
      "Observability, runbooks, and recovery guidance",
    ],
    approach:
      "We map dependencies and failure modes first. Clear interfaces, automated deployment, meaningful monitoring, and documented operations make systems easier to run and evolve.",
    related: ["custom-software", "ai-automation"],
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    shortTitle: "Enterprise solutions",
    icon: "network",
    description:
      "Connected operational software that brings clarity to complex organizations.",
    introduction:
      "Complex operations need systems that reflect how people actually work. We develop internal platforms and business applications that connect teams, simplify processes, and support accountable decisions.",
    useCases: [
      "Internal management and approval platforms",
      "Business process and operational systems",
      "Connected reporting and administrative tools",
    ],
    deliverables: [
      "Workflow analysis and solution design",
      "Role-based platform and system integrations",
      "Rollout plan, documentation, and support guidance",
    ],
    approach:
      "We work through the needs of different users and the constraints of existing systems. Incremental delivery, clear permissions, and thoughtful change management help make adoption part of the engineering process.",
    related: ["custom-software", "ai-automation"],
  },
];
