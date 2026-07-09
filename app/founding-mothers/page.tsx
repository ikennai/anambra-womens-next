import type { Metadata } from "next";

export const metadata: Metadata = { title: "Founding Mothers | A.S.W.A.S.C." };

const members = [
  "Dr. (Mrs) Adaku Mogbo",
  "Mrs. Holly Asiegbu",
  "Dr. (Mrs) Ngozi Iluno",
  "Mrs. Amaka Machie",
  "Mrs. Adaobi Udeze",
];

export default function FoundingMothersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Founding Mothers</h1>
      <ul className="space-y-2">
        {members.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
