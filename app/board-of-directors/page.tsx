import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board of Directors | A.S.W.A.S.C.",
};

const members = [
  "Mrs Evelyn Okafor: Chairwoman",
  "Mrs. Amaka Ada Akudinobi, Esq. Secretary",
  "Mrs. Dorothy Akpamgbo, Esq.",
  "Mrs. Ego Mmeje",
  "Mrs. Victoria Onwualu",
];

export default function BoardOfDirectorsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Board of Directors</h1>
      <ul className="space-y-2">
        {members.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
