import Card, { type CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

type SectionCardProps = CardProps;

const ContactCard = ({ children, sx, ...props }: SectionCardProps) => {
  const theme = useTheme();
  const radius =
    typeof theme.shape.borderRadius === 'number' ? theme.shape.borderRadius : 12;

  return (
    <Card
      {...props}
      sx={{
        backgroundColor: alpha(theme.palette.common.white, 0.03),
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

export default ContactCard;
