import { Box, Typography } from "@mui/material";
import { BlogPostCard } from "./BlogPostCard";
import { BlogPost } from "./blogpost";
import SectionTitle from "@/app/components/ui/SectionTitle";

export const LatestBlogPostsSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How To Remove Salt From Your Car's Interior And Exterior",
      category: "Latest News",
      date: "September 7, 2021",
      image: "/images/pics/value-proposition.png",
    },
    {
      id: 2,
      title: "What To Do If You Get Into A Car Accident In Ontario",
      category: "Latest News",
      date: "September 7, 2021",
      image: "/images/pics/value-proposition.png",
    },
    {
      id: 3,
      title: "How To Remove Salt From Your Car's Interior",
      description:
        "Proin rhoncus nunc id dui malesuada hendrerit eu eu nisl. Vestibulum ante ipsum primis in faucibus orci luctus...",
      category: "Our News",
      date: "September 7, 2021",
      image: "/images/pics/value-proposition.png",
      featured: true,
    },
  ];

  const smallPosts = blogPosts.filter((post) => !post.featured);
  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <Box sx={{ mb: 8 }} data-testid="latest-blog-posts-section">
      <Box className="container mx-auto">
        <SectionTitle title="Latest Blog Posts" />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 3,
          }}
        >
          {/* Left side - Small blog posts */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {smallPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </Box>

          {/* Right side - Featured blog post */}
          {featuredPost && <BlogPostCard post={featuredPost} featured />}
        </Box>
      </Box>
    </Box>
  );
};
