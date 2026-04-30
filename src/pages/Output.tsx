import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import SectionCard from '../components/ui/SectionCard';
import StatsCard from '../components/ui/StatsCard';
import { projects, stats, toolLogos } from '../content/siteContent';

const filters = ['All', 'SEO', 'Social', 'PPC'] as const;
type Filter = (typeof filters)[number];

const Output = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState<Filter>('All');

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === 'All' || project.category === filter),
    [filter],
  );

  return (
    <Box component="main">
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Output That Proves the Strategy
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 720, lineHeight: 1.8, mb: 4 }}>
            Explore the kinds of campaigns, systems, and performance outcomes Power House is built to deliver.
          </Typography>
          <Tabs
            value={filter}
            onChange={(_event, nextValue: Filter) => setFilter(nextValue)}
            variant="scrollable"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            {filters.map((item) => (
              <Tab
                key={item}
                value={item}
                label={item}
                sx={{
                  color: theme.palette.text.secondary,
                  '&.Mui-selected': {
                    color: theme.palette.text.primary,
                  },
                }}
              />
            ))}
          </Tabs>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {filteredProjects.map((project) => (
              <SectionCard key={project.title} sx={{ p: 3.5, height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 2.5 }}>
                  <Chip
                    label={project.category}
                    variant="outlined"
                    sx={{
                      color: theme.palette.secondary.main,
                      borderColor: alpha(theme.palette.secondary.main, 0.35),
                    }}
                  />
                  <Typography color="primary" sx={{ fontWeight: 700 }}>
                    {project.result}
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ mb: 1.25 }}>
                  {project.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75, mb: 3 }}>
                  {project.description}
                </Typography>
                <PrimaryButton endIcon={<ArrowForwardIcon />} href="/contact">
                  View Case Study
                </PrimaryButton>
              </SectionCard>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Tools We Use
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 640, lineHeight: 1.8 }}>
            We work across the platforms and reporting stacks that matter most to modern growth teams.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
            {toolLogos.map((tool) => (
              <Chip
                key={tool}
                label={tool}
                sx={{
                  px: 1,
                  py: 2.5,
                  borderRadius: 999,
                  color: theme.palette.text.primary,
                  backgroundColor: alpha(theme.palette.common.white, 0.04),
                  border: `1px solid ${theme.palette.divider}`,
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: 6,
              border: `1px solid ${theme.palette.divider}`,
              background:
                `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.12)} 0%, ` +
                `${alpha(theme.palette.background.paper, 0.95)} 48%, ${alpha(theme.palette.primary.main, 0.14)} 100%)`,
            }}
          >
            <Typography variant="h2" sx={{ mb: 5 }}>
              Results at a glance
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                gap: 3,
              }}
            >
              {stats.map((stat) => (
                <StatsCard key={stat.label} {...stat} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Output;
