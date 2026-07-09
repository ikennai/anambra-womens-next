import type { Metadata } from "next";

export const metadata: Metadata = { title: "Past Executives | A.S.W.A.S.C." };

const terms = [
  {
    years: "2013-2015",
    members: [
      "President: Ngozi Onwualu",
      "Vice President: Ngozi Iluno",
      "Secretary: Ukay Bosah",
      "Assistant Secretary: Chinenye Ojukwu",
      "Financial Secretary: Esther Ikeji",
      "Treasurer: Emilia Muomegha",
      "Publicity Secretary: Pat Ani-Igbokwe",
      "Provost: Uche Onwuli",
      "Assistant Provost: Oby Nwafor",
    ],
  },
  {
    years: "2011-2013",
    members: [
      "President: Ngozi Onwualu",
      "Vice President: Ngozi Iluno",
      "Secretary: Nkeiru Ani",
      "Assistant Secretary: Nneka Chidueme",
      "Financial Secretary: Esther Ikeji",
      "Assistant Financial Secretary: Holly Asiegbu",
      "Treasurer: Emilia Muomegha",
      "Publicity Secretary: Joy Ochoifeoma",
      "Provost: MaryGrace Okoye",
      "Assistant Provost: Oby G. Omelu",
    ],
  },
  {
    years: "2009-2011",
    members: [
      "President: Dorothy Akpamgbo, Esq",
      "Vice President: Evelyn Okafor",
      "Secretary: Esther Ikeji",
      "Assistant Secretary: Nkechi Anako",
      "Financial Secretary: Ngozi Onwualu",
      "Assistant Financial Secretary: Holly Asiegbu",
      "Treasurer: Joy Ochoifeoma",
      "Publicity Secretary: Christy Onwuemelie",
      "Provost: Uche Onwuli",
      "Assistant Provost: Mrs. Nnenne Bosah",
    ],
  },
  {
    years: "2005-2008",
    members: [
      "President: Dorothy Akpamgbo",
      "Vice President: Evelyn Okafor",
      "Secretary: Esther Ikeji",
      "Assistant Secretary: Chinelo Onubah",
      "Financial Secretary: Patience Nnolim",
      "Assistant Financial Secretary:",
      "Treasurer: Joy Ochoifeoma",
      "Publicity Secretary: Christy Onwuemelie",
      "Provost: Dora Okoye",
      "Assistant Provost: Nnenne Bosah",
    ],
  },
];

export default function PastExecutivesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Past Executives</h1>
      <div className="space-y-10">
        {terms.map((term) => (
          <div key={term.years}>
            <h2 className="text-xl font-semibold mb-3">{term.years}</h2>
            <ul className="space-y-1">
              {term.members.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
