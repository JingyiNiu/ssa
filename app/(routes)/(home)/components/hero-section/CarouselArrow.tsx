import { IconButton, IconButtonProps } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type CarouselArrowProps = IconButtonProps & {
  direction: "left" | "right";
};

export function CarouselArrow({ direction, sx, ...rest }: CarouselArrowProps) {
  const Icon = direction === "left" ? MdChevronLeft : MdChevronRight;

  return (
    <IconButton
      sx={{
        position: "absolute",
        [direction]: { xs: 20, md: 40 },
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0,0,0, 0.1)",
        color: "#fff",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "#fff",
        },
        ...sx,
      }}
      {...rest}
    >
      <Icon size={32} />
    </IconButton>
  );
}
