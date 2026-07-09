import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Mission | A.S.W.A.S.C." };

const goals = [
  "To foster unity, mutual understanding, harmony, interdependent living among all the members and different communities in the United States of America.",
  "To preserve, uphold, and promote our cultural heritage and cultural relationship with other organizations in our community and United States of America.",
  "To encourage and promote the exchange of ideas and information in order to enhance understanding between the local community, members of the association and United States of America at large.",
  "To engage in community projects that would foster educational, cultural, and recreational activities such as dance, music and African Language within our Community and in the United States of America.",
  "To engage in humanitarian, philanthropic, charitable activities and events including but not limited to education, medicine, healthcare, environment, culture, and Technology, in Anambra State, Nigeria and United States of America.",
  "To hold meetings, conferences, fun-fares, and conventions aimed at exchanging ideas on matters of good citizenship/promoting good public relations between our people and citizens of other countries.",
  "To engage in any other lawful and legal activity for the improvement and betterment of mankind in consonance with the laws and constitutions of California and the United States of America.",
];

export default function OurMissionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
      <p className="mb-6">
        Philanthropic initiatives for improving living conditions, healthcare
        services, educational opportunities, nurturing cultural values,
        sustaining the environment, and adopting technologies to inspire and
        empower women and children in Anambra State, Nigeria and the United
        States of America.
      </p>
      <h3 className="text-xl font-semibold mb-3">Our Goals</h3>
      <ul className="list-disc pl-6 space-y-3">
        {goals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
    </div>
  );
}
