import { Button, ButtonProps } from "@mui/material";

type OutlineButtonProps = ButtonProps & {
  children: React.ReactNode;
};

export const OutlineButton = ({
  children,
  sx,
  ...rest
}: OutlineButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        position: "relative",
        color: "primary.main",
        borderColor: "prmary",
        px: 4,
        py: 1.5,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        borderRadius: 0,
        overflow: "hidden",
        zIndex: 1,
        "&:hover": {
          color: "white",
          bgcolor: "primary.main",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
