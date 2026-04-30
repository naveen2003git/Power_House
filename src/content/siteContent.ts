import type { SvgIconComponent } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import InsightsIcon from '@mui/icons-material/Insights';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export type StatItem = {
  value: string;
  label: string;
  icon: SvgIconComponent;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: SvgIconComponent;
  accent: 'primary' | 'secondary';
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type ProjectItem = {
  title: string;
  category: 'SEO' | 'Social' | 'PPC';
  result: string;
  description: string;
};

export const companyTagline = 'We Power Your Digital Growth';
export const companySubheading =
  'Power House is a full-service digital marketing agency helping brands dominate online — from SEO to paid media, content to conversion.';
export const companyEmail = 'hello@powerhouseagency.com';
export const companyPhone = '+1 (800) 123-4567';
export const companyAddress = '123 Digital Ave, San Francisco, CA 94105';
export const primaryCtaText = 'Start Growing Today';
export const secondaryCtaText = 'See Our Work';

export const stats: StatItem[] = [
  { value: '200+', label: 'Happy Clients', icon: GroupsIcon },
  { value: '500+', label: 'Projects Delivered', icon: EmojiEventsIcon },
  { value: '8+', label: 'Years Experience', icon: StarIcon },
  { value: '340%', label: 'Average ROI', icon: TrendingUpIcon },
];

export const services: ServiceItem[] = [
  {
    title: 'SEO',
    description: 'Own high-intent search with technical SEO, content strategy, and authority building.',
    icon: SearchIcon,
    accent: 'primary',
  },
  {
    title: 'Social Media',
    description: 'Build communities and campaigns that turn attention into measurable brand lift.',
    icon: CampaignIcon,
    accent: 'secondary',
  },
  {
    title: 'PPC Ads',
    description: 'Launch sharp paid media systems that scale efficiently across search and social.',
    icon: MonetizationOnIcon,
    accent: 'primary',
  },
  {
    title: 'Content Marketing',
    description: 'Create strategic editorial, landing pages, and creative that keeps pipelines moving.',
    icon: ArticleIcon,
    accent: 'secondary',
  },
  {
    title: 'Email Marketing',
    description: 'Design nurture journeys and lifecycle automations that increase retention and revenue.',
    icon: EmailIcon,
    accent: 'primary',
  },
  {
    title: 'Analytics',
    description: 'Translate data into action with dashboards, attribution insights, and conversion analysis.',
    icon: BarChartIcon,
    accent: 'secondary',
  },
];

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Leads strategy with a sharp focus on growth systems, premium positioning, and measurable outcomes.',
  },
  {
    name: 'Jordan Lee',
    role: 'Head of SEO',
    bio: 'Builds search ecosystems that turn content and technical depth into sustained visibility.',
  },
  {
    name: 'Sam Patel',
    role: 'Creative Director',
    bio: 'Shapes bold campaigns with strong visual storytelling and conversion-minded creative direction.',
  },
];

export const coreTeam: TeamMember[] = [
  ...leadershipTeam,
  {
    name: 'Casey Wu',
    role: 'Paid Media Lead',
    bio: 'Optimizes acquisition engines across Google, Meta, and high-performing paid channels.',
  },
  {
    name: 'Riley Torres',
    role: 'Content Strategist',
    bio: 'Connects brand voice, editorial planning, and search intent into scalable content programs.',
  },
  {
    name: 'Morgan Kim',
    role: 'Data Analyst',
    bio: 'Turns reporting into decisions with attribution clarity, testing insights, and growth forecasting.',
  },
];

export const values = [
  {
    title: 'Innovation',
    description: 'We test fast, learn faster, and keep the strategy ahead of the market.',
    icon: LightbulbIcon,
  },
  {
    title: 'Integrity',
    description: 'We communicate clearly, report honestly, and build trust through consistency.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Results',
    description: 'Every campaign is designed to move revenue, pipeline, or measurable brand growth.',
    icon: InsightsIcon,
  },
  {
    title: 'Collaboration',
    description: 'We work as an extension of your team with shared goals and strong feedback loops.',
    icon: Diversity3Icon,
  },
];

export const missionVision = [
  {
    title: 'Our Mission',
    description:
      'To give ambitious brands a marketing engine that pairs creative boldness with performance discipline.',
  },
  {
    title: 'Our Vision',
    description:
      'To become the growth partner teams trust when they need authority, clarity, and lasting digital momentum.',
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Atlas Commerce Search Rebuild',
    category: 'SEO',
    result: '+186% organic traffic',
    description: 'Technical cleanup, category content, and authority strategy reshaped their acquisition funnel.',
  },
  {
    title: 'Northline Social Launch',
    category: 'Social',
    result: '4.8M campaign impressions',
    description: 'Creative-led social campaigns pushed awareness and drove a stronger branded search lift.',
  },
  {
    title: 'PeakForm Paid Media Sprint',
    category: 'PPC',
    result: '3.9x ROAS in 90 days',
    description: 'Landing page testing and audience segmentation cut waste while improving conversion quality.',
  },
  {
    title: 'BrightPath Visibility Program',
    category: 'SEO',
    result: '+72 first-page keywords',
    description: 'Search content clusters and technical fixes expanded ranking coverage for core services.',
  },
  {
    title: 'Luma Brand Accelerator',
    category: 'Social',
    result: '+240% engagement growth',
    description: 'A stronger publishing rhythm and high-velocity creative turned followers into qualified traffic.',
  },
  {
    title: 'Vertex Lead Gen System',
    category: 'PPC',
    result: '-31% cost per lead',
    description: 'Intent-driven ad structures and conversion tracking sharpened every stage of paid acquisition.',
  },
];

export const toolLogos = ['Google Ads', 'Meta', 'SEMrush', 'HubSpot', 'GA4', 'Search Console'];

export const businessHours = [
  'Monday - Friday: 9:00 AM - 6:00 PM',
  'Saturday: 10:00 AM - 2:00 PM',
  'Sunday: Closed',
];

export const aboutHighlights = [
  'Strategy first, execution fast',
  'Creative built for performance',
  'Reporting that drives decisions',
];

export const aboutImageBadge = {
  title: 'Growth Partners',
  subtitle: 'From discovery to conversion',
  icon: AutoAwesomeIcon,
};
