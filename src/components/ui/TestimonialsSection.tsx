import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import type { TestimonialItem } from '../../content/siteContent';

type TestimonialsSectionProps = {
  items: TestimonialItem[];
};

const TestimonialsSection = ({ items }: TestimonialsSectionProps) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  return (
    <Box sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 720, mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Testimonials from brands we&apos;ve helped grow.
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Real feedback from businesses that trusted Power House to sharpen their
            digital presence, campaigns, and creative direction.
          </Typography>
        </Box>

        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: { xs: 5, md: 6 },
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            backgroundColor: theme.palette.background.paper,
            boxShadow: `0 24px 60px ${alpha(theme.palette.primary.main, 0.08)}`,
            maxWidth: 1180,
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' },
            }}
          >
            <Box
              sx={{
                minHeight: { xs: 280, md: 480 },
                backgroundImage: `url(${activeItem.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.light,
                p: { xs: 3.5, md: 4.5 },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: alpha(theme.palette.secondary.main, 0.72),
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontSize: '0.78rem',
                    mb: 2,
                  }}
                >
                  Client Story
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1.25rem', md: '2.15rem' },
                    lineHeight: 1.45,
                    color: theme.palette.secondary.light,
                    mb: 3,
                  }}
                >
                  "{activeItem.quote}"
                </Typography>
              </Box>

              <Box>
                <Stack direction="row" spacing={1.5} sx={{ mb: 2.25 }}>
                  <IconButton
                    aria-label="Previous testimonial"
                    onClick={goPrevious}
                    sx={{
                      width: 46,
                      height: 46,
                      border: `1px solid ${alpha(theme.palette.secondary.main, 0.28)}`,
                      color: theme.palette.secondary.light,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                      },
                    }}
                  >
                    <NavigateBeforeIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Next testimonial"
                    onClick={goNext}
                    sx={{
                      width: 46,
                      height: 46,
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.dark,
                      },
                    }}
                  >
                    <NavigateNextIcon />
                  </IconButton>
                </Stack>

                <Typography variant="h5" sx={{ color: theme.palette.secondary.light, mb: 0.75 }}>
                  {activeItem.name}
                </Typography>
                <Typography
                  sx={{
                    color: alpha(theme.palette.secondary.main, 0.76),
                    mb: 2.25,
                  }}
                >
                  {activeItem.role} at {activeItem.company}
                </Typography>

                <Button
                  href="/contact"
                  variant="outlined"
                  sx={{
                    px: 3.5,
                    py: 1.1,
                    borderRadius: 2,
                    borderColor: alpha(theme.palette.secondary.main, 0.55),
                    color: theme.palette.secondary.light,
                    '&:hover': {
                      borderColor: theme.palette.secondary.main,
                      backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                    },
                  }}
                >
                  See our story with clients
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
