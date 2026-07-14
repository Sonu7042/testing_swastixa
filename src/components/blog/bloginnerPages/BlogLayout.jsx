

import BlogHero from "./BlogHero";
import BlogContent from "./BlogContent";
import FAQ from "../../faq/FAQ";

export default function BlogLayout({ blog }) {
  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-16 py-10 md:py-20">
      <div className="max-w-[900px] mx-auto">
        <BlogHero hero={blog.hero} />

        <div className="mt-12 md:mt-20">
          <BlogContent content={blog.content} />
        </div>

        {/* FAQ Section */}
        {blog.faq && blog.faq.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/10">
            <FAQ faqs={blog.faq} />
          </div>
        )}
      </div>
    </section>
  );
}
