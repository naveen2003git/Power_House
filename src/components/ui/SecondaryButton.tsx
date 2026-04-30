import Button, { type ButtonProps } from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

type SecondaryButtonProps = Omit<ButtonProps, 'variant' | 'color'> & {
  href?: string;
};

const SecondaryButton = ({ children, href, sx, ...props }: SecondaryButtonProps) => {
  const theme = useTheme();
  const internalLink = href?.startsWith('/');

  return (
    <Button
      color="secondary"
      variant="outlined"
      {...(href
        ? internalLink
          ? { component: RouterLink, to: href }
          : { component: 'a', href }
        : {})}
      {...props}
      sx={{
        borderColor: alpha(theme.palette.secondary.main, 0.45),
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: theme.palette.secondary.main,
          boxShadow: `0 0 0 4px ${alpha(theme.palette.secondary.main, 0.12)}`,
          backgroundColor: alpha(theme.palette.secondary.main, 0.08),
          transform: 'translateY(-2px)',
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
