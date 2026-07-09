import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog | A.S.W.A.S.C." };

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <p className="text-gray-500">No posts yet. Check back soon.</p>
    </div>
  );
}
