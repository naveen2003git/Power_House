import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import CustomTextField from '../components/ui/CustomTextField';
import SectionCard from '../components/ui/SectionCard';
import {
  businessHours,
  companyAddress,
  companyEmail,
  companyPhone,
  companySubheading,
} from '../content/siteContent';

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const Contact = () => {
  const theme = useTheme();
  const [form, setForm] = useState<FormState>(initialForm);

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box component="main">
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Let&apos;s Build Your Next Growth Move
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.8 }}>
            {companySubheading}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' },
              gap: 4,
              alignItems: 'start',
            }}
          >
            <SectionCard sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h4" sx={{ mb: 1.5 }}>
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
                <CustomTextField
                  label="Message"
                  multiline
                  name="message"
                  onChange={handleChange('message')}
                  required
                  rows={6}
                  value={form.message}
                />
                <Box>
                  <PrimaryButton endIcon={<SendIcon />} size="large" type="submit">
                    Send Inquiry
                  </PrimaryButton>
                </Box>
              </Box>
            </SectionCard>

            <Stack spacing={3}>
              <SectionCard sx={{ p: 3 }}>
                <Stack spacing={2.5}>
                  <Typography variant="h5">Contact Details</Typography>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <EmailIcon sx={{ color: theme.palette.secondary.main, mt: 0.25 }} />
                    <Typography color="text.secondary">{companyEmail}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <PhoneIcon sx={{ color: theme.palette.secondary.main, mt: 0.25 }} />
                    <Typography color="text.secondary">{companyPhone}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <LocationOnIcon sx={{ color: theme.palette.secondary.main, mt: 0.25 }} />
                    <Typography color="text.secondary">{companyAddress}</Typography>
                  </Stack>
                </Stack>
              </SectionCard>

              <SectionCard sx={{ p: 0, overflow: 'hidden' }}>
                <Box
                  sx={{
                    minHeight: 260,
                    display: 'grid',
                    placeItems: 'center',
                    color: theme.palette.text.secondary,
                    background:
                      `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.14)} 0%, ` +
                      `${alpha(theme.palette.background.paper, 0.92)} 50%, ${alpha(theme.palette.primary.main, 0.16)} 100%)`,
                  }}
                >
                  <Typography>Google Map Embed Placeholder</Typography>
                </Box>
              </SectionCard>

              <SectionCard sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Business Hours
                </Typography>
                <Stack spacing={1.25}>
                  {businessHours.map((item) => (
                    <Typography key={item} color="text.secondary">
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </SectionCard>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'center' }}>
            {[LinkedInIcon, TwitterIcon, InstagramIcon].map((Icon, index) => (
              <IconButton
                key={index}
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    borderColor: alpha(theme.palette.primary.main, 0.45),
                  },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
