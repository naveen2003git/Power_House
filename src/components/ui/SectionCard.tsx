import Card, { type CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

type SectionCardProps = CardProps;

const SectionCard = ({ children, sx, ...props }: SectionCardProps) => {
  const theme = useTheme();
  const radius =
    typeof theme.shape.borderRadius === 'number' ? theme.shape.borderRadius : 12;

  return (
    <Card
      {...props}
      sx={{
        backgroundColor: alpha(theme.palette.common.white, 0.03),
        backdropFilter: 'blur(12px)',
        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
        borderRadius: radius * 1.5,
        boxShadow: 'none',
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

export default SectionCard;
