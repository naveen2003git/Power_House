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
import heroImage from '../assets/hero.png';

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

export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};

export const companyTagline = 'We Power Your Digital Growth';
export const companySubheading =
  'Power House is a full-service digital marketing agency helping brands dominate online — from SEO to paid media, content to conversion.';
export const companyEmail = 'powerhousemarketingcompany@gmail.com';
export const companyPhone = '+91 9715768735';
export const companyAddress = 'Lakshmi Nagar, Erode, Tamil Nadu 638316';
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
    title: 'Digital Marketing',
    description:
      'We create powerful marketing strategies that help your brand reach the right audience, generate leads, and grow your business online.',
    icon: CampaignIcon,
    accent: 'primary',
  },
  {
    title: 'Shoot & Edit',
    description:
      'From product shoots to promotional videos, we create high-quality visual content with professional editing that captures attention and builds brand value.',
    icon: AutoAwesomeIcon,
    accent: 'secondary',
  },
  {
    title: 'Meta Ads',
    description:
      'We run targeted Facebook and Instagram ad campaigns designed to increase reach, engagement, website traffic, and sales with maximum ROI.',
    icon: MonetizationOnIcon,
    accent: 'primary',
  },
  {
    title: 'Web Development',
    description:
      'We design and develop modern, responsive, and user-friendly websites that represent your brand professionally and deliver seamless user experiences.',
    icon: ArticleIcon,
    accent: 'secondary',
  },
  {
    title: 'SEO Services',
    description:
      'Our SEO strategies help your website rank higher on search engines, improve visibility, and attract organic traffic from potential customers.',
    icon: SearchIcon,
    accent: 'primary',
  },
  {
    title: 'Graphic Design',
    description:
      'We create eye-catching graphics, posters, banners, social media creatives, logos, and branding materials that make your business stand out.',
    icon: BarChartIcon,
    accent: 'secondary',
  },
  {
    title: 'Social Media Handling',
    description:
      'We manage your social media platforms with creative content, consistent posting, audience engagement, and growth-focused strategies.',
    icon: EmailIcon,
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

export const testimonials: TestimonialItem[] = [
  {
    name: 'Ariana Brooks',
    role: 'Founder',
    company: 'Northline Studio',
    quote:
      'Power House helped us turn scattered marketing into one clear growth engine. In a few months, our brand looked sharper and our leads became far more consistent.',
    image: heroImage,
  },
  {
    name: 'Daniel Carter',
    role: 'Marketing Head',
    company: 'PeakForm Labs',
    quote:
      'Their team brought strategy, content, and paid media together in a way that finally made our digital efforts feel measurable, premium, and scalable.',
    image: heroImage,
  },
  {
    name: 'Maya Fernandez',
    role: 'Co-Founder',
    company: 'Luma Retail',
    quote:
      'We saw stronger engagement, better creative direction, and more confidence in every campaign launch. Power House felt like an extension of our own team.',
    image: heroImage,
  },
];

export const toolLogos = ['Google Ads', 'Meta', 'SEMrush', 'HubSpot', 'GA4', 'Search Console'];

export const businessHours = [
  'Monday - Saturday: 9:00 AM - 6:00 PM',
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
