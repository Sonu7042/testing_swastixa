import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogLayout from "../components/blog/bloginnerPages/BlogLayout";
import SEO from "../components/SEO";

export default function BlogInner() {
  const { slug } = useParams();     

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <><SEO title="Blog Not Found | Swastixa" description="The requested article could not be found." noIndex /><p className="text-white p-10">Blog not found</p></>;
  }

  return <><SEO title={blog.hero.metaTitle} description={blog.hero.description} image={blog.hero.image} type="article" /><BlogLayout blog={blog} /></>;
}
