import { Box, Typography, Link, Divider } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { FooterSectionTitle } from "./FooterSectionTitle";

export const PopularPost = () => {
  const popularPosts = [
    {
      id: 1,
      title: "What To Do If You Get Into...",
      date: "September 11, 2021",
      image: "/images/pics/value-proposition.png",
    },
    {
      id: 2,
      title: "The 5 Best Christmas Lights Tours In...",
      date: "September 11, 2021",
      image: "/images/pics/value-proposition.png",
    },
  ];

  return (
    <Box data-testid="popular-post" mb={{ xs: 4, md: 0 }}>
      <FooterSectionTitle title="Popular Post" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {popularPosts.map((post) => (
          <Box key={post.id} sx={{ display: "flex", gap: 2 }}>
            <Box
              component="img"
              src={post.image}
              alt={post.title}
              sx={{
                width: 60,
                height: 60,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  mb: 0.5,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  cursor: "pointer",
                  "&:hover": { color: "#e05440" },
                }}
              >
                {post.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarTodayIcon
                  sx={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                  }}
                >
                  {post.date}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PopularPost;
