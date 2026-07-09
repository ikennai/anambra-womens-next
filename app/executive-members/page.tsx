import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Executive Members | A.S.W.A.S.C.",
};

type Member = {
  name: string;
  role: string;
  image?: string;
  bio?: string[];
};

const members: Member[] = [
  {
    name: "Mrs. Amaka Ada Akudinobi, Esq.",
    role: "President",
    image: "/images/Pres_Amaka_AkudinobiW200sm.png",
    bio: [
      "Attorney Amaka Ada Akudinobi, was admitted to the Nigerian Bar Association in 1990 and the California Bar in 1994. She is currently on the United States Secretary of State's Hague Attorney's panel. With an enduring interest in social justice, she put her principles and vision into voluntary work, early on, at Maynard Toll Center, Los Angeles, California, where she assisted pro per litigants in Family Law proceedings, including divorce, paternity and domestic violence proceedings. In 1996, she was recognized as an Outstanding Family Law Volunteer, by the Los Angeles County Bar Association, from which she has gone on to earn four Awards of Merit from the National Center for Missing and Exploited Children, in appreciation for her outstanding commitment to the protection of children and knowledge of the Hague Convention on the Civil aspects of International Child Abduction. Her interest in social justice, women's education and empowerment stems from a disposition to inspire, and the principle that every human being must be given an opportunity to achieve his or her full potential.",
      "She is the current President of Anambra State Women Association of Southern California, an organization that focuses on the social, educational, cultural needs of women and children in the United States of America and Nigeria. She is also an active member of Igbo Catholic Women Organization, based in California. Mrs. Akudinobi, is a member of the Board of the following California based organizations, Life and Times Magazine, Upward African Woman and the Eagle Collegiate Academy.",
    ],
  },
  {
    name: "Ukay Bosah",
    role: "Vice President",
    image: "/images/Ukay_BosahW200sm.png",
  },
  {
    name: "Lady Chinenye Ojukwu, ADAIFE",
    role: "Secretary: Mrs. Chinenye Ojukwu",
    image: "/images/Lady_Chinenye_OjukwuW200.png",
    bio: [
      "Education: BSc (Nursing Education), MPH",
      "Work History: Credentialed School Nurse, Los Angeles Unified School District",
      "Positions Held in the Community: Assistant Secretary ASWA 2013 – 2015",
      "President Women Ministry All Saints Anglican Church, Los Angeles 2009 – 2012",
      "Women Leader Christ Anglican Church Los Angeles 2012 – January 2014",
    ],
  },
  {
    name: "Mrs. Agatha Iloka",
    role: "Assistant Secretary",
    image: "/images/Iloka_AgathaW200.png",
    bio: [
      "My name is Mrs. Agatha Ndudi ILoka aka Azu-Enwe-ILo. I was born in Lagos State Of Nigeria to the family of Late Chief Peter Uchemefune. First of Seven children. A Deltian by birth. I am married to Mr. Ifeanyichukwu ILoka a native of Ogbunike in Oyi LGA of Anambra State. We are blessed with two beautiful children.",
      "Graduated with BSc. Degree /BSN from Georgia State University. A Registered Nurse by profession.",
      "I am the current Financial Secretary of Anioma Women's League of SoCal, the current Secretary General of Umuada Di Igbo Mma LLC, Los Angeles Chapter. Also a member of Ogbunike Progressive Union of SoCal.",
      "I am a woman of faith, believing that \"Nothing is Impossible with God.\" I love people and love to surround myself with good people. My late father was my inspiration. He taught me not to forsake the gathering of my people. He also taught me to believe in God and in myself.",
      "My hobbies include: Music, singing, cooking, shopping and sports.",
    ],
  },
  {
    name: "Mrs. Joy Ochoifeom",
    role: "Financial Secretary",
  },
  {
    name: "Mrs. Esther Ikeji",
    role: "Assistant Financial Secretary",
  },
  {
    name: "Imma Ikebudu (Ochendo)",
    role: "Treasurer: Mrs. Imma Ikebudu",
    image: "/images/Imma_Ikebudu001W200sm.png",
    bio: [
      "Imma Ikebudu (Ochendo) is a nurse, a Community volunteer, and a mother.",
      "She is from Umuchu in Anambra State, Nigeria.",
      "Imma Ikebudu did her primary education in Onitsha and secondary education from Maria Regina Secondary school Nnewi.",
      "After her nursing training and licensing as a midwife in Nigeria, she worked at Adazi and Borrowmeo hospitals before proceeding to the USA. As a United States trained registered nurse she worked in many hospitals in Los Angeles.",
      "She has BSN degree in Nursing and certificate in Public Health.",
      "Imma Ikebudu currently is an employee of Los Angeles Unified School District as a School Nurse. She is an active and a founding member of some community and church organizations.",
      "She is always an elected member of the executive in the organization. She loves people and likes to volunteer to help the needy and children.",
      "She is a mother of three and her interests include singing, cooking, entertainment, movies and traveling.",
    ],
  },
  {
    name: "Gloria Ekwy Ezeh, (B.sc, MPA, M.ED, M.SC.)",
    role: "Publicity Secretary: Mrs. Gloria Ezeh",
    image: "/images/Gloria_Ekwy_Ezeh001W200.png",
    bio: [
      "My name is Gloria Ekwy Ezeh, (B.sc, MPA, M.ED, M.SC.), currently teaching at Los Angeles Unified School District.",
      "I am married with four children. I am a member of Anambra state women organization, and have helped in sub committees; I am the newly elected publicity secretary. I am also a member of my town's association Ezinifite USA, where I have been the national treasurer for the past four years. I am also a member of Aguata Orumba Women Association - AGORWA, and the publicity secretary of the noble association.",
      "I am a Sunday school teacher and newly elected as assistant secretary of my women meeting, Christ Anglican church Los Angeles. I am also a member of Sister's Fellowship International Los Angeles and a believer of Our Lord Jesus Christ. With God On my side, I always do my best in all my contribution and selfless services in any organization I belong.",
      "God bless you all.",
    ],
  },
  {
    name: "Ms. Anthonia Anyakorah",
    role: "Assistant Publicity Secretary",
    image: "/images/Uchenna_OnwuliW200sm-1.png",
    bio: [
      "Anthonia Anyakora is from Umuoji, Idemili L.G.A, Anambra State. She is a proud mother of three Blessed Children. She lives in Inland Empire in San Bernardino County, USA. She was a former Assistant Secretary General for National, State and local Chapter of Umuada Igbo in Diaspora, Umuada Ndi Igbo and Umuada Di Igbo Mma. Currently, she is the Assistant Secretary General of Enyimba Social Club, Los Angeles Chapter, and the Assistant Publicity Secretary of Anambra Women in Los Angeles California.",
      "Anthonia is a Registered Nurse with Masters Degree in Science of Nursing/Health Education, Bachelors Degree in Science of Nursing/Public Health. Worked and served the community as a Registered Nurse in different hospitals including the State of California. Currently, she is a Director of Patient Care Services in a Home Health Agency.",
      "She is a God-Fearing woman who believes in giving thanks to God always for His greatness. Above all, she believes that life is too short to mistreat others because it's ONLY ONE LIFE TO LIVE.",
    ],
  },
  {
    name: "Mrs. Uche Onwuli",
    role: "Provost",
    image: "/images/Uchenna_OnwuliW200sm.png",
    bio: [
      "My name is Mrs. Uchenna Winifred Onwuli Nee Onyia (Dibueze). I am from Udi in Udi local government area in Enugu State Nigeria, and I am happily married to a wonderful husband Mr. Orakwue Onwuli who is from Iyiawu Village in Onitsha local government area of Anambra State Nigeria. I have been married for 17 years, I have three beautiful children, Odera (boy) 16 years old, Chiamaka (girl) 13 years and Olisa (boy) 9 years. I came to America (LA) since 2000 with lottery visa. I am a Nurse with Los Angeles Sheriff department (correctional facility). Graduated with Master's degree in Nursing and FNP. I love to spend time with my family.",
      "Higher-Education - HND-IMT Enugu for Mass-Communication, Trade-TECH. Los Angeles CA, USA for Registered Nurse, California State University Dominguez Hills Carson for Bachelors Degree in Nursing and Charles Drew University LA for Master's Degree in Nursing and Family Nurse Practitioner (FNP).",
    ],
  },
  {
    name: "Mrs. Adaobi Ezeagwula",
    role: "Assistant Provost",
    image: "/images/Adaobi_EzeagwulaW200.png",
  },
];

export default function ExecutiveMembersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-8">
        Executive Members
      </h1>
      <div className="space-y-12">
        {members.map((member) => (
          <div key={member.name} className="text-center">
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                width={256}
                height={256}
                className="mx-auto rounded-full mb-4"
              />
            )}
            <h2 className="text-lg font-semibold">{member.role}</h2>
            {member.role !== member.name && (
              <p className="text-gray-600">{member.name}</p>
            )}
            {member.bio?.map((para, i) => (
              <p key={i} className="text-left mt-3">
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
