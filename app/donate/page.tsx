import type { Metadata } from "next";

export const metadata: Metadata = { title: "Donate | A.S.W.A.S.C." };

const CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "CHF",
  "AUD",
  "HKD",
  "CAD",
  "JPY",
  "NZD",
  "SGD",
  "SEK",
  "DKK",
  "PLN",
  "NOK",
  "HUF",
  "CZK",
  "ILS",
  "MXN",
];

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Donate to ASWASC</h1>

      {/* PayPal business email must be set via NEXT_PUBLIC_PAYPAL_BUSINESS_EMAIL before going live */}
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="paypal"
        className="flex flex-wrap items-center gap-3"
      >
        <input type="hidden" name="cmd" value="_donations" />
        <input
          type="hidden"
          name="business"
          value={process.env.NEXT_PUBLIC_PAYPAL_BUSINESS_EMAIL ?? ""}
        />
        <input type="hidden" name="return" value="http://www.aswasc.com" />
        <input type="hidden" name="undefined_quantity" value="0" />
        <input type="hidden" name="item_name" value="Donation" />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          maxLength={6}
          className="border border-gray-300 rounded px-3 py-2 w-32 text-right"
        />
        <select
          name="currency_code"
          className="border border-gray-300 rounded px-3 py-2"
        >
          {CURRENCIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input type="hidden" name="charset" value="utf-8" />
        <input type="hidden" name="no_shipping" value="1" />
        <input type="hidden" name="cancel_return" value="http://www.aswasc.com" />
        <input type="hidden" name="no_note" value="0" />
        <button
          type="submit"
          className="bg-[#690639] text-white px-5 py-2 rounded hover:bg-[#4c0026] transition-colors"
        >
          Donate with PayPal
        </button>
      </form>
    </div>
  );
}
