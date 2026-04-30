import TextField, { type TextFieldProps } from '@mui/material/TextField';
import { alpha, useTheme } from '@mui/material/styles';

type CustomTextFieldProps = Omit<TextFieldProps, 'variant' | 'fullWidth'>;

const CustomTextField = ({ sx, slotProps, ...props }: CustomTextFieldProps) => {
  const theme = useTheme();

  return (
    <TextField
      fullWidth
      variant="outlined"
      slotProps={{
        ...slotProps,
        inputLabel: {
          ...slotProps?.inputLabel,
          sx: {
            color: theme.palette.text.secondary,
            '&.Mui-focused': {
              color: theme.palette.secondary.main,
            },
            ...(slotProps?.inputLabel &&
            typeof slotProps.inputLabel === 'object' &&
            'sx' in slotProps.inputLabel
              ? slotProps.inputLabel.sx
              : {}),
          },
        },
      }}
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: alpha(theme.palette.common.white, 0.02),
          transition: 'all 0.3s ease',
          '& fieldset': {
            borderColor: alpha(theme.palette.common.white, 0.1),
          },
          '&:hover fieldset': {
            borderColor: alpha(theme.palette.primary.main, 0.45),
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.12)}`,
          },
        },
        ...sx,
      }}
    />
  );
};

export default CustomTextField;
