import { Box, Typography, Paper, Collapse } from "@mui/material";
import { stores } from "./dealers";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface DealerCardProps {
  store: (typeof stores)[number];
  index: number;
  isExpanded: boolean;
  handleDealerClick: (index: number) => void;
}

const DealerCard = ({
  store,
  index,
  isExpanded,
  handleDealerClick,
}: DealerCardProps) => {
  return (
    <Box
      onClick={() => handleDealerClick(index)}
      sx={{
        cursor: "pointer",
        borderBottom: "1px solid",
        borderColor: "divider",
        px: 2,
        py: 1.5,
        transition: "background-color 0.2s ease",
        "&:hover": {
          bgcolor: "action.hover",
        },
      }}
    >
      {/* 店名和展开图标 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "#fff",
            pr: 2,
          }}
        >
          {store.name}
        </Typography>
        <ChevronRightIcon
          sx={{
            color: "#fff",
            fontSize: 24,
          }}
        />
      </Box>

      {/* 详细信息（可折叠） */}
      <Collapse in={isExpanded}>
        <Box sx={{ mt: 1, pl: 0 }}>
          {/* 地址 */}
          <Typography
            variant="body2"
            sx={{
              color: "grey",
              lineHeight: 1.6,
            }}
          >
            {store.address}
          </Typography>

          {/* 电话 */}
          <Typography
            variant="body2"
            sx={{
              color: "grey",
              lineHeight: 1.6,
            }}
          >
            {store.phone.join(", ")}
            {store.mobile && `, ${store.mobile.join(", ")}`}
          </Typography>

          {/* 邮箱 */}
          <Typography
            variant="body2"
            sx={{
              color: "grey",
              lineHeight: 1.6,
            }}
          >
            {store.email}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default DealerCard;
