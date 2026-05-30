import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import type { Transition, Variants } from 'framer-motion';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Digital Marketing',
    description:
      'We create powerful marketing strategies that help your brand reach the right audience, generate leads, and grow your business online.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    tag: 'Strategy',
  },
  {
    title: 'Shoot & Edit',
    description:
      'From product shoots to promotional videos, we create high-quality visual content with professional editing that captures attention and builds brand value.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=700&q=80',
    tag: 'Creative',
  },
  {
    title: 'Meta Ads',
    description:
      'We run targeted Facebook and Instagram ad campaigns designed to increase reach, engagement, website traffic, and sales with maximum ROI.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80',
    tag: 'Advertising',
  },
  {
    title: 'Web Development',
    description:
      'We design and develop modern, responsive, and user-friendly websites that represent your brand professionally and deliver seamless user experiences.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80',
    tag: 'Development',
  },
  {
    title: 'SEO Services',
    description:
      'Our SEO strategies help your website rank higher on search engines, improve visibility, and attract organic traffic from potential customers.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=700&q=80',
    tag: 'Growth',
  },
  {
    title: 'Graphic Design',
    description:
      'We create eye-catching graphics, posters, banners, social media creatives, logos, and branding materials that make your business stand out.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80',
    tag: 'Design',
  },
  {
    title: 'Social Media Handling',
    description:
      'We manage your social media platforms with creative content, consistent posting, audience engagement, and growth-focused strategies.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=700&q=80',
    tag: 'Social',
  },
];

const heroStats = [
  { value: '200+', label: 'Clients Served' },
  { value: '7', label: 'Core Services' },
  { value: '5★', label: 'Average Rating' },
  { value: '3+', label: 'Years Experience' },
];

const MotionBox = motion(Box);
const revealEase = [0.22, 1, 0.36, 1] as const;
const revealTransition: Transition = { duration: 0.7, ease: revealEase };

type ServiceSectionProps = {
  service: (typeof services)[number];
  index: number;
  total: number;
};

function ServiceSection({ service, index, total }: ServiceSectionProps) {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: isEven ? -80 : 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: revealTransition,
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: isEven ? 80 : -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ...revealTransition, delay: 0.1 },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: [0, 0, 0.2, 1], delay: 0.3 },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        borderBottom: `1px solid ${theme.palette.divider}`,
        '&:last-child': { borderBottom: 'none' },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: isEven ? 'row' : 'row-reverse',
            },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
          <MotionBox
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            sx={{ flex: 1, width: '100%' }}
          >
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 4,
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                boxShadow: `0 24px 60px ${alpha(theme.palette.primary.main, 0.12)}`,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(180deg, ${alpha(theme.palette.primary.dark, 0.04)} 0%, ${alpha(theme.palette.primary.dark, 0.18)} 100%)`,
                  zIndex: 1,
                },
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: '100%',
                  height: { xs: 260, md: 380 },
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                  '&:hover': { transform: 'scale(1.04)' },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: isEven ? 'auto' : 16,
                  right: isEven ? 16 : 'auto',
                  zIndex: 2,
                }}
              >
                <Chip
                  label={service.tag}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    height: 30,
                    borderRadius: '8px',
                  }}
                />
              </Box>
            </Box>
          </MotionBox>

          <MotionBox
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            sx={{ flex: 1, width: '100%' }}
          >
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: theme.palette.text.secondary,
                }}
              >
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </Typography>

              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    lineHeight: 1.08,
                    color: theme.palette.text.primary,
                    mb: 1.5,
                  }}
                >
                  {service.title}
                </Typography>
                <MotionBox
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  sx={{
                    height: '4px',
                    width: 72,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.primary.main, 0.24)} 100%)`,
                    transformOrigin: 'left',
                    borderRadius: 999,
                  }}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.08rem' },
                  lineHeight: 1.9,
                  color: theme.palette.text.secondary,
                  maxWidth: 500,
                }}
              >
                {service.description}
              </Typography>

              <MotionBox
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400 }}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  width: 'fit-content',
                  color: theme.palette.primary.main,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                    pb: 0.25,
                  }}
                >
                  Learn More
                </Typography>
                <ArrowOutwardIcon sx={{ fontSize: '1rem' }} />
              </MotionBox>
            </Stack>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}

const About = () => {
  const theme = useTheme();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        ref={heroRef}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 10, md: 16 },
          pb: { xs: 8, md: 12 },
          borderBottom: `1px solid ${theme.palette.divider}`,
          background: `linear-gradient(180deg, ${alpha(theme.palette.secondary.main, 0.68)} 0%, ${theme.palette.background.default} 100%)`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at top right, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 35%)`,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 860 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: revealEase }}
            >
              <Typography
                sx={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              >
                Who We Are
              </Typography>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: revealEase, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '5.3rem' },
                  lineHeight: 1,
                  color: theme.palette.text.primary,
                  mb: 3,
                  maxWidth: 900,
                }}
              >
                We Build{' '}
                <Box
                  component="span"
                  sx={{
                    color: alpha(theme.palette.primary.main, 0.72),
                    fontStyle: 'italic',
                  }}
                >
                  Brands
                </Box>{' '}
                That Matter
              </Typography>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: revealEase, delay: 0.2 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '1.02rem', md: '1.18rem' },
                  lineHeight: 1.85,
                  color: theme.palette.text.secondary,
                  maxWidth: 640,
                }}
              >
                A full-service digital agency combining creativity, strategy, and
                technology to grow businesses in the modern landscape.
              </Typography>
            </MotionBox>
          </Box>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
              gap: { xs: 3, md: 5 },
              mt: 8,
              pt: 5,
              borderTop: `1px solid ${theme.palette.divider}`,
            }}
          >
            {heroStats.map((stat) => (
              <Box key={stat.label}>
                <Typography
                  sx={{
                    fontSize: { xs: '2rem', md: '2.7rem' },
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: theme.palette.text.secondary,
                    mt: 0.75,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </MotionBox>
        </Container>
      </Box>

      <Box>
        {services.map((service, index) => (
          <ServiceSection
            key={service.title}
            service={service}
            index={index}
            total={services.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default About;
