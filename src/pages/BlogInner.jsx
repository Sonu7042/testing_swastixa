import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogLayout from "../components/blog/bloginnerPages/BlogLayout";

export default function BlogInner() {
  const { slug } = useParams();     

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p className="text-white p-10">Blog not found</p>;
  }

  return <BlogLayout blog={blog} />;
}