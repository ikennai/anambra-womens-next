import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us | A.S.W.A.S.C." };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>We can use this section to add the history of the ASWASC.</p>
    </div>
  );
}
