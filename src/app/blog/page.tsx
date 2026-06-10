import BlogHero from "@/components/sections/blog/BlogHero";
import BlogFeatured from "@/components/sections/blog/BlogFeatured";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import BlogNewsletter from "@/components/sections/blog/BlogNewsletter";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </>
  );
}