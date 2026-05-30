import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { motion, useInView, useScroll, useTransform, type Variants } from 'framer-motion';
import { type ChangeEvent, type FormEvent, type ReactNode, useRef, useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import CustomTextField from '../components/ui/CustomTextField';
import {
  businessHours,
  companyAddress,
  companyEmail,
  companyPhone,
  companySubheading,
} from '../content/siteContent';
import ContactCard from '../components/ui/ContactCard';

/* ─── Framer Motion variants ───────────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeOut' as const, delay },
  }),
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const, delay },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }),
};

/* ─── Reusable animated wrappers ────────────────────────────────────────────── */

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

function AnimateWhenVisible({
  children,
  variant = fadeUp,
  delay = 0,
  sx,
}: {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  sx?: object;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <MotionBox
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
      sx={sx}
    >
      {children}
    </MotionBox>
  );
}

/* ─── Decorative floating orb ──────────────────────────────────────────────── */

function FloatingOrb({ color, size, top, left, right, delay = 0 }: {
  color: string; size: number; top?: string; left?: string; right?: string; delay?: number;
}) {
  return (
    <MotionBox
      animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      sx={{
        position: 'absolute',
        top,
        left,
        right,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        filter: 'blur(48px)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

/* ─── Contact info row ─────────────────────────────────────────────────────── */

function ContactRow({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  const theme = useTheme();
  return (
    <MotionStack
      variants={staggerItem}
      direction="row"
      spacing={1.5}
      sx={{ alignItems: 'flex-start' }}
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <Box
        sx={{
          p: 0.9,
          borderRadius: 1.5,
          background: alpha(theme.palette.secondary.main, 0.12),
          display: 'flex',
          flexShrink: 0,
        }}
      >
        <Icon sx={{ color: theme.palette.secondary.main, fontSize: 18 }} />
      </Box>
      <Typography color="text.secondary" sx={{ pt: 0.4, lineHeight: 1.7 }}>
        {text}
      </Typography>
    </MotionStack>
  );
}

/* ─── Types ─────────────────────────────────────────────────────────────────── */

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = { name: '', email: '', phone: '', service: '', message: '' };

/* ─── Page ──────────────────────────────────────────────────────────────────── */

const Contact = () => {
  const theme = useTheme();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  /* Subtle parallax on the hero headline */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const socialLinks = [
    { name: 'Instagram', Icon: InstagramIcon, url: 'https://www.instagram.com' },
    { name: 'LinkedIn', Icon: LinkedInIcon, url: 'https://www.linkedin.com' },
  ];

  return (
    <Box component="main" sx={{ overflow: 'hidden' }}>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <Box
        ref={heroRef}
        sx={{
          position: 'relative',
          py: { xs: 10, md: 16 },
          overflow: 'hidden',
        }}
      >

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Eyebrow label */}
          <AnimateWhenVisible variant={fadeIn} delay={0}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                px: 1.75,
                py: 0.55,
                mb: 3,
                borderRadius: 10,
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.35)}`,
                background: alpha(theme.palette.secondary.main, 0.07),
              }}
            >
              
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Get in touch
              </Typography>
            </Box>
          </AnimateWhenVisible>

          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <AnimateWhenVisible variant={fadeUp} delay={0.1}>
              <Typography
                variant="h1"
                sx={{
                  mb: 2.5,
                  fontSize: { xs: '2.4rem', md: '3.6rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.12,
                  maxWidth: 720,
                }}
              >
                Let&apos;s Build Your{' '}Let's Build Your Next Growth Move
              </Typography>
            </AnimateWhenVisible>

            <AnimateWhenVisible variant={fadeUp} delay={0.22}>
              <Typography
                color="text.secondary"
                sx={{ maxWidth: 600, lineHeight: 1.85, fontSize: '1.05rem' }}
              >
                {companySubheading}
              </Typography>
            </AnimateWhenVisible>
          </motion.div>
        </Container>
      </Box>

      {/* ── Form + Sidebar ─────────────────────────────────────────────────── */}
      <Box sx={{ pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.2fr 0.8fr' },
              gap: 4,
              alignItems: 'start',
            }}
          >
            {/* ── Contact Form ──────────────────────────────────────────────── */}
            <AnimateWhenVisible variant={scaleIn} delay={0.05}>
              <ContactCard
                sx={{
                  p: { xs: 3, md: 4.5 },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
                  },
                }}
              >
                <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                  Start a conversation
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                  Tell us what you&apos;re building, where growth feels blocked, and what kind of support would make the biggest impact.
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: 'grid', gap: 2.5 }}
                >
                  {/* Row 1 */}
                  <AnimateWhenVisible variant={slideRight} delay={0.1}>
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                        gap: 2.5,
                      }}
                    >
                      <CustomTextField
                        label="Name"
                        name="name"
                        onChange={handleChange('name')}
                        required
                        value={form.name}
                      />
                      <CustomTextField
                        label="Email"
                        name="email"
                        onChange={handleChange('email')}
                        required
                        type="email"
                        value={form.email}
                      />
                    </Box>
                  </AnimateWhenVisible>

                  {/* Row 2 */}
                  <AnimateWhenVisible variant={slideRight} delay={0.18}>
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                        gap: 2.5,
                      }}
                    >
                      <CustomTextField
                        label="Phone"
                        name="phone"
                        onChange={handleChange('phone')}
                        value={form.phone}
                      />
                      <CustomTextField
                        select
                        label="Service"
                        name="service"
                        onChange={handleChange('service')}
                        value={form.service}
                      >
                        {['SEO', 'Social Media', 'PPC Ads', 'Content Marketing', 'Email Marketing', 'Analytics'].map(
                          (option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ),
                        )}
                      </CustomTextField>
                    </Box>
                  </AnimateWhenVisible>

                  {/* Message */}
                  <AnimateWhenVisible variant={slideRight} delay={0.24}>
                    <CustomTextField
                      label="Message"
                      multiline
                      name="message"
                      onChange={handleChange('message')}
                      required
                      rows={6}
                      value={form.message}
                    />
                  </AnimateWhenVisible>

                  {/* Submit */}
                  <AnimateWhenVisible variant={fadeUp} delay={0.3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <MotionBox
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                      >
                        <PrimaryButton endIcon={<SendIcon />} size="large" type="submit">
                          Send Inquiry
                        </PrimaryButton>
                      </MotionBox>

                      {/* Success flash */}
                      <MotionBox
                        initial={{ opacity: 0, x: -10 }}
                        animate={submitted ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.success.main, fontWeight: 600 }}
                        >
                          ✓ Message sent!
                        </Typography>
                      </MotionBox>
                    </Box>
                  </AnimateWhenVisible>
                </Box>
              </ContactCard>
            </AnimateWhenVisible>

            {/* ── Sidebar ───────────────────────────────────────────────────── */}
            <Stack spacing={3}>
              {/* Contact Details */}
              <AnimateWhenVisible variant={fadeUp} delay={0.15}>
                <ContactCard sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 700 }}>
                    Contact Details
                  </Typography>
                  <MotionStack
                    spacing={2.5}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <ContactRow icon={EmailIcon} text={companyEmail} />
                    <ContactRow icon={PhoneIcon} text={companyPhone} />
                    <ContactRow icon={LocationOnIcon} text={companyAddress} />
                  </MotionStack>
                </ContactCard>
              </AnimateWhenVisible>

              {/* Map placeholder */}
              <AnimateWhenVisible variant={fadeUp} delay={0.22}>
                <ContactCard sx={{ p: 0, overflow: 'hidden', minHeight: { xs: 280, md: 360 } }}>
                  <MotionBox
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: { xs: 280, md: 360 },
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="iframe"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d929.2776201014577!2d77.66835346104186!3d11.43626900470084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1779961191351!5m2!1sen!2sin"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        border: 0,
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </MotionBox>
                </ContactCard>
              </AnimateWhenVisible>

              {/* Business Hours */}
              <AnimateWhenVisible variant={fadeUp} delay={0.28}>
                <ContactCard sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 700 }}>
                    Business Hours
                  </Typography>
                  <MotionStack
                    spacing={1.25}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {businessHours.map((item) => (
                      <motion.div key={item} variants={staggerItem}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            '&::before': {
                              content: '""',
                              width: 4,
                              height: 4,
                              borderRadius: '50%',
                              background: alpha(theme.palette.secondary.main, 0.55),
                              flexShrink: 0,
                            },
                          }}
                        >
                          <Typography color="text.secondary">{item}</Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </MotionStack>
                </ContactCard>
              </AnimateWhenVisible>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── Social Row ──────────────────────────────────────────────────────── */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          borderTop: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle bottom orb */}
        <FloatingOrb
          color={alpha(theme.palette.primary.main, 0.1)}
          size={300}
          top="-100px"
          left="50%"
          delay={1}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <AnimateWhenVisible variant={fadeUp} delay={0}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: 'center', mb: 2.5, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600 }}
            >
              Follow us
            </Typography>
          </AnimateWhenVisible>

          <MotionStack
            direction="row"
            spacing={1.5}
            sx={{ justifyContent: 'center' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map(({ Icon, url, name }, index) => (
              <motion.div key={index} variants={staggerItem}>
                <MotionBox
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 20 }}
                >
                  <IconButton
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    sx={{
                      border: `1px solid ${theme.palette.divider}`,
                      color: theme.palette.text.secondary,
                      width: 44,
                      height: 44,
                      transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        borderColor: alpha(theme.palette.primary.main, 0.45),
                        background: alpha(theme.palette.primary.main, 0.06),
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                </MotionBox>
              </motion.div>
            ))}
          </MotionStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;