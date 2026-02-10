import { IconButton, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface HeaderIconButtonProps {
  icon: ReactNode;
  tooltip: string;
  onClick: () => void;
  ariaLabel: string;
}

export const HeaderIconButton = ({
  icon,
  tooltip,
  onClick,
  ariaLabel,
}: HeaderIconButtonProps) => {
  return (
    <Tooltip title={tooltip} arrow>
      <IconButton
        onClick={onClick}
        aria-label={ariaLabel}
        sx={{
          width: { xs: 36, lg: 64 },
          height: { xs: 36, lg: 64 },
          color: "primary.main",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};
