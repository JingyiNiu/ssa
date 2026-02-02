"use client";

import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { TiSocialSkype } from "react-icons/ti";
import { FooterSectionTitle } from "./FooterSectionTitle";

export const Footer = () => {
  const usefulLinks = [
    { label: "About", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Faqs", href: "#" },
    { label: "Our Blog", href: "#" },
    { label: "Shop Left Sidebar", href: "#" },
    { label: "Shop Right Sidebar", href: "#" },
  ];

  const popularPosts = [
    {
      id: 1,
      title: "What To Do If You Get Into...",
      date: "September 11, 2021",
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 2,
      title: "The 5 Best Christmas Lights Tours In...",
      date: "September 11, 2021",
      image: "/images/pics/image-placeholder.png",
    },
  ];

  return (
    <Box
      sx={{ bgcolor: "secondary.dark", color: "white" }}
      data-testid="footer"
    >
      {/* Main Footer Content */}
      <Box sx={{ py: 6 }}>
        <Box className="container mx-auto">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {/* Company Info */}
            <Box>
              <Box
                component="img"
                src="/images/logo/logo2.png"
                alt="logo"
                width={150}
                sx={{ mb: 4 }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mb: 2,
                  fontSize: "0.875rem",
                  lineHeight: 1.8,
                }}
              >
                The probability of someone needing your services or wantin Lorem
                ipsum dolor sit amet.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mb: 3,
                  fontSize: "0.875rem",
                  lineHeight: 1.8,
                }}
              >
                Phasellus porta lorem id nisl mattis, in sollicitudin augue
                scelerisque.
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <TiSocialSkype />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            {/* Useful Links */}
            <Box>
              <FooterSectionTitle title="Useful Links" />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {usefulLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Get in touch */}
            <Box>
              <FooterSectionTitle title="Get in touch" />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      mb: 0.5,
                      fontSize: "0.875rem",
                    }}
                  >
                    Contact Us
                  </Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
                    111-222-3333
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      color: "white",
                    }}
                  >
                    info@example.com
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      mb: 0.5,
                      fontSize: "0.875rem",
                    }}
                  >
                    Our Address
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                    4959 Adonais Way Duluth, GA 30136
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Popular Post */}
            <Box>
              <FooterSectionTitle title="Popular Post" />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {popularPosts.map((post) => (
                  <Box key={post.id} sx={{ display: "flex", gap: 2}}>
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
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNDQ1NTY2Ii8+PC9zdmc+";
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
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
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
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      {/* Footer Bottom */}
      <Box sx={{ py: 3 }}>
        <Box
          className="container mx-auto"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.875rem",
            }}
          >
            ©2025 Copyright Example. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="#"
              sx={{
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "white" },
              }}
            >
              Career
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "white" },
              }}
            >
              Fan's
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "white" },
              }}
            >
              Contact
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
