import BlogCard from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";

export default function BlogGrid({ blogs, loading }) {
    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                    <BlogSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (


        <div className="grid grid-cols-1 xl:pt-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-14"
            
        >
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}
