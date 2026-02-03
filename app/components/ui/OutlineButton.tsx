import { Button, ButtonProps } from "@mui/material"

type OutlineButtonProps = ButtonProps & {
  children: React.ReactNode
}

export const OutlineButton = ({ children, sx, ...rest }: OutlineButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        position: "relative",
        color: "primary.main",
        borderColor: "primary.main",
        px: 4,
        py: 1.5,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        borderRadius: 0,
        overflow: "hidden",
        zIndex: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "primary.main",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease-in-out",
          zIndex: -1,
        },
        "&:hover::before": {
          transform: "scaleX(1)",
        },
        "&:hover": {
          color: "white",
          borderColor: "primary.main",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
