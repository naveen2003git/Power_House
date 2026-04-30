import Button, { type ButtonProps } from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

type PrimaryButtonProps = Omit<ButtonProps, 'variant' | 'color'> & {
  href?: string;
};

const PrimaryButton = ({ children, href, sx, ...props }: PrimaryButtonProps) => {
  const theme = useTheme();
  const internalLink = href?.startsWith('/');

  return (
    <Button
      color="primary"
      variant="contained"
      {...(href
        ? internalLink
          ? { component: RouterLink, to: href }
          : { component: 'a', href }
        : {})}
      {...props}
      sx={{
        boxShadow: `0 12px 30px ${theme.palette.primary.main}33`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: `0 16px 32px ${theme.palette.primary.main}44`,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
