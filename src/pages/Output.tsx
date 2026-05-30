import FiberNewIcon from '@mui/icons-material/FiberNew';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import type { Transition, Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';

const MotionBox = motion(Box);

type VideoItem = {
  id: number;
  title: string;
  category: Category;
  duration: string;
  views: string;
  isNew: boolean;
  isFeatured: boolean;
  src: string;
  thumb: string;
};

const videos = [
  {
    id: 1,
    title: 'Brand Story Reel',
    category: 'Branding',
    duration: '0:45',
    views: '12.4K',
    isNew: true,
    isFeatured: true,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://picsum.photos/seed/vid1/400/700',
  },
  {
    id: 2,
    title: 'Product Launch',
    category: 'Commercial',
    duration: '1:12',
    views: '8.7K',
    isNew: false,
    isFeatured: false,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://picsum.photos/seed/vid2/400/700',
  },
  {
    id: 3,
    title: 'Summer Campaign',
    category: 'Social Media',
    duration: '0:30',
    views: '21.1K',
    isNew: true,
    isFeatured: false,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://picsum.photos/seed/vid3/400/700',
  },
  {
    id: 4,
    title: 'Event Highlights',
    category: 'Events',
    duration: '2:05',
    views: '5.2K',
    isNew: false,
    isFeatured: true,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://picsum.photos/seed/vid4/400/700',
  },
  {
    id: 5,
    title: 'Testimonial Cut',
    category: 'Testimonials',
    duration: '1:30',
    views: '3.8K',
    isNew: false,
    isFeatured: false,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://picsum.photos/seed/vid5/400/700',
  },
  {
    id: 6,
    title: 'Behind the Scenes',
    category: 'BTS',
    duration: '3:20',
    views: '9.0K',
    isNew: true,
    isFeatured: false,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://picsum.photos/seed/vid6/400/700',
  },
] as const satisfies readonly VideoItem[];

const categories = [
  'All',
  'Branding',
  'Commercial',
  'Social Media',
  'Events',
  'Testimonials',
  'BTS',
] as const;

type Category = Exclude<(typeof categories)[number], 'All'>;
type Filter = (typeof categories)[number];

const revealEase = [0.22, 1, 0.36, 1] as const;
const cardTransition: Transition = { duration: 0.55, ease: revealEase };

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.93 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: cardTransition,
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] },
  },
};

type VideoCardProps = {
  video: VideoItem;
  index: number;
};

function VideoCard({ video, index }: VideoCardProps) {
  const theme = useTheme();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const accent = theme.palette.secondary.dark;
  const accentSoft = alpha(theme.palette.secondary.contrastText, 0.9);

  const togglePlay = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
      return;
    }

    void videoRef.current.play();
    setPlaying(true);
  };

  const toggleMute = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <MotionBox
      variants={cardVariants}
      sx={{
        minWidth: 0,
      }}
    >
      <MotionBox
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        sx={{
          position: 'relative',
          borderRadius: '28px',
          overflow: 'hidden',
          cursor: 'pointer',
          aspectRatio: '9 / 16',
          background:
            `linear-gradient(180deg, ${alpha(theme.palette.secondary.dark, 0.96)} 0%, ` +
            `${theme.palette.secondary.main} 100%)`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
          boxShadow: hovered
            ? `0 28px 60px ${alpha(theme.palette.primary.dark, 0.24)}, 0 0 0 1px ${alpha(theme.palette.primary.main, 0.18)}`
            : `0 14px 36px ${alpha(theme.palette.primary.dark, 0.12)}`,
          transition: 'box-shadow 0.35s ease',
        }}
      >
        <video
          ref={videoRef}
          src={video.src}
          muted={muted}
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: playing ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
        <Box
          component="img"
          src={video.thumb}
          alt={video.title}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: playing ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              `linear-gradient(to top, ${alpha(theme.palette.primary.dark, 0.7)} 0%, ` +
              `${alpha(theme.palette.primary.dark, 0.14)} 48%, ${alpha(theme.palette.primary.dark, 0.28)} 100%)`,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 14,
            left: 14,
            right: 14,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack direction="row" spacing={0.8}>
            {video.isNew && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4, type: 'spring' }}
              >
                <Chip
                  icon={<FiberNewIcon sx={{ fontSize: 14 }} />}
                  label="NEW"
                  size="small"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                    fontWeight: 800,
                    fontSize: '0.62rem',
                    letterSpacing: 1,
                    height: 22,
                    '& .MuiChip-icon': { color: theme.palette.secondary.main },
                  }}
                />
              </motion.div>
            )}
            {video.isFeatured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5, type: 'spring' }}
              >
                <Chip
                  icon={<StarOutlinedIcon sx={{ fontSize: 12 }} />}
                  label="FEATURED"
                  size="small"
                  sx={{
                    bgcolor: alpha(theme.palette.background.paper, 0.12),
                    backdropFilter: 'blur(8px)',
                    color: theme.palette.primary.main,
                    fontWeight: 800,
                    fontSize: '0.62rem',
                    letterSpacing: 1,
                    height: 22,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    '& .MuiChip-icon': { color: accentSoft },
                  }}
                />
              </motion.div>
            )}
          </Stack>

          <IconButton
            size="small"
            onClick={(event) => {
              event.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            sx={{ color: alpha(theme.palette.primary.main, 0.62), p: 0.5 }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>

        <AnimatePresence>
          {(!playing || hovered) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
              }}
            >
              <IconButton
                onClick={togglePlay}
                sx={{
                  bgcolor: alpha(theme.palette.background.paper, 0.16),
                  backdropFilter: 'blur(12px)',
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.22)}`,
                  color: theme.palette.primary.main,
                  width: 58,
                  height: 58,
                  '&:hover': {
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.primary.main,
                    transform: 'scale(1.08)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                {playing ? <PauseIcon sx={{ fontSize: 28 }} /> : <PlayArrowIcon sx={{ fontSize: 28 }} />}
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              style={{
                position: 'absolute',
                top: 50,
                right: 14,
                zIndex: 4,
              }}
            >
              <Box
                sx={{
                  minWidth: 148,
                  p: 1,
                  borderRadius: 3,
                  backgroundColor: alpha(theme.palette.secondary.light, 0.96),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                  boxShadow: `0 18px 32px ${alpha(theme.palette.primary.dark, 0.12)}`,
                }}
              >
                <Typography sx={{ px: 1, py: 0.75, color: theme.palette.primary.main, fontSize: '0.78rem' }}>
                  Preview options
                </Typography>
                <Typography sx={{ px: 1, py: 0.75, color: alpha(theme.palette.primary.main, 0.68), fontSize: '0.72rem' }}>
                  Full controls coming soon
                </Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
          }}
        >
          <motion.div
            initial={false}
            animate={{ y: hovered ? 0 : 6, opacity: hovered ? 1 : 0.88 }}
            transition={{ duration: 0.25 }}
          >
            <Chip
              label={video.category}
              size="small"
              sx={{
                mb: 1,
                bgcolor: alpha(theme.palette.background.paper, 0.12),
                backdropFilter: 'blur(6px)',
                color: alpha(theme.palette.primary.main, 0.82),
                fontSize: '0.65rem',
                letterSpacing: 1.2,
                height: 20,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: '1.04rem',
                lineHeight: 1.25,
                mb: 1,
              }}
            >
              {video.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Stack direction="row" spacing={0.4} sx={{ alignItems: 'center' }}>
                  <VisibilityIcon sx={{ fontSize: 12, color: alpha(theme.palette.primary.main, 0.5) }} />
                  <Typography sx={{ color: alpha(theme.palette.primary.main, 0.58), fontSize: '0.68rem' }}>
                    {video.views}
                  </Typography>
                </Stack>
                <Typography sx={{ color: alpha(theme.palette.primary.main, 0.44), fontSize: '0.68rem' }}>
                  {video.duration}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={0.25} sx={{ alignItems: 'center' }}>
                <IconButton
                  size="small"
                  onClick={toggleMute}
                  sx={{
                    color: alpha(theme.palette.primary.main, 0.62),
                    p: 0.4,
                    '&:hover': { color: theme.palette.primary.main },
                  }}
                >
                  {muted ? <VolumeOffIcon sx={{ fontSize: 16 }} /> : <VolumeUpIcon sx={{ fontSize: 16 }} />}
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: alpha(theme.palette.primary.main, 0.5),
                    p: 0.4,
                    '&:hover': { color: theme.palette.primary.main },
                  }}
                >
                  <FullscreenIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Stack>
            </Box>
          </motion.div>
        </Box>

        <AnimatePresence>
          {playing && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                background: accent,
                transformOrigin: 'left',
              }}
            />
          )}
        </AnimatePresence>
      </MotionBox>
    </MotionBox>
  );
}

const Output = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState<Filter>('All');

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? videos
        : videos.filter((video) => video.category === activeCategory),
    [activeCategory],
  );

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            `radial-gradient(circle at top left, ${alpha(theme.palette.primary.main, 0.07)} 0%, transparent 28%), ` +
            `radial-gradient(circle at bottom right, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 32%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
        <MotionBox variants={headerVariants} initial="hidden" animate="show" sx={{ mb: 6 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.4rem', md: '3.8rem' },
                  color: theme.palette.primary.main,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
              >
                Our Output
              </Typography>
              <Typography
                sx={{
                  color: alpha(theme.palette.primary.main, 0.54),
                  mt: 1.5,
                  fontSize: '0.98rem',
                }}
              >
                {videos.length} crafted edits, reels, and campaign cuts built for modern brands
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <VideoLibraryIcon sx={{ color: alpha(theme.palette.primary.main, 0.24), fontSize: 18 }} />
              <Typography sx={{ color: alpha(theme.palette.primary.main, 0.24), fontSize: '0.85rem' }}>
                {filtered.length} showing
              </Typography>
            </Stack>
          </Stack>

          <Box
            sx={{
              mt: 4,
              height: 1,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '40%',
                background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.primary.main, 0.45)}, transparent)`,
              }}
            />
          </Box>
        </MotionBox>


        <AnimatePresence mode="wait">
          <MotionBox key={activeCategory} variants={containerVariants} initial="hidden" animate="show">
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, minmax(0, 1fr))',
                  md: 'repeat(3, minmax(0, 1fr))',
                  xl: 'repeat(4, minmax(0, 1fr))',
                },
                gap: 3,
              }}
            >
              {filtered.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </Box>
          </MotionBox>
        </AnimatePresence>

        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Box
                sx={{
                  textAlign: 'center',
                  py: 12,
                  color: alpha(theme.palette.primary.main, 0.24),
                }}
              >
                <VideoLibraryIcon sx={{ fontSize: 64, mb: 2 }} />
                <Typography variant="h6">No videos in this category</Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          sx={{
            mt: 8,
            pt: 4,
            borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: alpha(theme.palette.primary.main, 0.2),
              fontSize: '0.75rem',
              letterSpacing: '0.22em',
            }}
          >
            © 2026 STUDIO OUTPUT
          </Typography>
          <Typography
            sx={{
              color: alpha(theme.palette.primary.main, 0.14),
              fontSize: '0.7rem',
            }}
          >
            All rights reserved
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Output;
