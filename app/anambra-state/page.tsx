import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Anambra State | A.S.W.A.S.C." };

export default function AnambraStatePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Anambra State</h1>

      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold mb-4">State Governor</h2>
        <Image
          src="/images/state-governor-willie-obiano-238x300.jpg"
          alt="State Governor Willie Obiano"
          width={238}
          height={300}
          className="mx-auto rounded"
        />
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">State Governor's Wife</h2>
        <Image
          src="/images/state-governor-wife-obiano-195x300.jpg"
          alt="State Governor's Wife"
          width={195}
          height={300}
          className="mx-auto rounded"
        />
      </div>
    </div>
  );
}
