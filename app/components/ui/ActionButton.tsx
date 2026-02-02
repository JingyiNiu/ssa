import Button, { ButtonProps } from "@mui/material/Button";

type ActionButtonProps = ButtonProps & {
  loading?: boolean;
};

export function ActionButton({
  loading,
  disabled,
  children,
  sx,
  ...rest
}: ActionButtonProps) {
  return (
    <Button
      variant="contained"
      disabled={disabled || loading}
      sx={{
        position: "relative",
        bgcolor: "primary.main",
        color: "white",
        fontWeight: 600,
        minWidth: 120,
        py: 1.2,
        boxShadow: "none",
        overflow: "hidden",
        zIndex: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "secondary.dark",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease-in-out",
          zIndex: -1,
        },
        "&:hover::before": {
          transform: "scaleX(1)",
        },
        "&:hover": {
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
        },
        "&:focus": {
          boxShadow: "none",
        },
        "&:focus-visible": {
          boxShadow: "none",
        },
        ...sx,
      }}
      {...rest}
    >
      {loading ? "..." : children}
    </Button>
  );
}
