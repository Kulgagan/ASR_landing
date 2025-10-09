import type { MenuItem } from '@/types';

// Navigation Menu
export const navMenu: MenuItem[] = [
  { href: '/', label: 'Product' },
  { href: '/', label: 'Solutions' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/', label: 'About' },
];

// Hero Section
export const heroData = {
  sectionSubtitle: 'Haul with Confidence.',
  sectionTitle: ['Trucks Built to Haul.', 'Service Built to Last.'],
  sectionText: 'ASR promises top-quality hauling and premium materials — delivered safely, on time, and tailored to your projects needs.',
};

// Features Section
export const featureData = {
  sectionSubtitle: 'Features',
  sectionTitle: 'Discover Powerful Features',
  sectionText: 'Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.',
  features: [
    {
      icon: "ChartPie",
      iconBoxColor: 'bg-blue-600',
      title: 'Advance Analytics',
      desc: 'Experience advanced analytics capabilities that enable you to dive deep into data, uncover meaningful patterns, and derive actionable insights',
    },
    {
      icon: "Files",
      iconBoxColor: 'bg-cyan-500',
      title: 'Automated Reports',
      desc: 'Save time and effort with automated reporting, generating comprehensive and accurate reports automatically, streamlining your data analysis',
    },
    {
      icon: "UserRoundPen",
      iconBoxColor: 'bg-yellow-500',
      title: 'Retention Report',
      desc: 'Enhance retention with our report, maximizing customer engagement and loyalty for business',
    },
    {
      icon: "GitFork",
      iconBoxColor: 'bg-red-500',
      title: 'A/B Test Variants',
      desc: 'Efficiently compare A/B test variants to determine the most effective strategies',
    },
    {
      icon: "Blocks",
      iconBoxColor: 'bg-purple-500',
      title: 'Integration Directory',
      desc: 'Seamlessly integrate with our directory, maximizing efficiency and unlocking the full potentials',
    },
  ],
};

// Process Section
export const processData = {
  sectionSubtitle: 'How it works',
  sectionTitle: 'Easy Process to Get Started',
  sectionText: 'Discover how it works by leveraging advanced algorithms and data analysis techniques.',
  list: [
    {
      icon: "LaptopMinimal",
      title: 'Create your account',
      text: 'Join us now and create your account to start exploring our platform and unlocking exciting features.',
    },
    {
      icon: "ArrowBigDownDash",
      title: 'Install our tracking app',
      text: 'Install our tracking app to effortlessly monitor and manage your activities, gaining valuable insights and optimizing your performance.',
    },
    {
      icon: "CreditCard",
      title: 'Add your payment method',
      text: 'Add your payment method to unlock premium features and enjoy a seamless experience with our platform.',
    },
  ],
};

// Footer
export const footerData = {
  copyright: '© 2025 ASR Carriers',
};

// Pricing Plans
export const plans = [
  {
    name: "Starter",
    price: "$199",
    originalPrice: "$499",
    description: "Perfect for small teams starting with technical interviews",
    features: [
      "Up to 10 interviews per month",
      "AI behavioral interviews",
      "Basic whiteboard system",
      "Standard technical assessments",
      "Email support",
      "Basic analytics dashboard"
    ],
    buttonText: "Contact Sales",
    popular: false,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Professional",
    price: "$499",
    originalPrice: "$1499",
    description: "Ideal for growing companies with regular hiring needs",
    features: [
      "Up to 50 interviews per month",
      "Advanced AI behavioral interviews",
      "Full whiteboard system",
      "Customized technical assessments",
      "Priority support",
      "Advanced analytics dashboard",
      "Team collaboration features",
      "Custom branding"
    ],
    buttonText: "Contact Sales",
    popular: true,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited interviews",
      "Custom AI interview models",
      "Advanced whiteboard features",
      "Custom assessment frameworks",
      "Dedicated support team",
      "Enterprise analytics",
      "API access",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment"
    ],
    buttonText: "Contact Sales",
    popular: false,
    color: "from-pink-500/20 to-orange-500/20"
  }
];