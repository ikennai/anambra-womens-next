import Image from "next/image";

const events = [
  {
    name: "Event Name",
    date: "June 10, 2018",
    location: "Centinela Banquet Hall",
    address: "12900 South Avalon Blvd., Los Angeles, CA 90061",
    time: "4:00 PM",
  },
  {
    name: "Event 2",
    date: "August 12, 2018",
    location: "Centinela Banquet Hall",
    address: "12900 South Avalon Blvd., Los Angeles, CA 90061",
    time: "4:00 PM",
  },
  {
    name: "Event 3",
    date: "August 12, 2018",
    location: "Centinela Banquet Hall",
    address: "12900 South Avalon Blvd., Los Angeles, CA 90061",
    time: "4:00 PM",
  },
];

export default function HomePage() {
  return (
    <div>
      <div className="relative w-full h-[220px] sm:h-[350px]">
        <Image
          src="/images/aswasc_group_photo_cropped.jpg"
          alt="ASWASC Group Photo"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="text-center text-2xl font-bold mb-6">
          Welcome to A.S.W.A.S.C!
        </h2>
        <hr className="mb-6" />

        <p className="mb-4">
          The official website of Anambra State Women Association of Southern
          California. We are driven by commitment to our mission which is:
        </p>
        <p className="mb-8">
          Philanthropic initiatives for improving living conditions,
          healthcare services, educational opportunities, nurturing cultural
          values, sustaining the environment, and adopting technologies to
          inspire and empower women and children in Anambra State, Nigeria and
          the United States of America.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.name}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
              <p>{event.date}</p>
              <p>
                {event.location}
                <br />
                {event.address}
              </p>
              <p>{event.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
