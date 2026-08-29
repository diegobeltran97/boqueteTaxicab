import type { Metadata } from "next";
import Link from "next/link";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fixed USD Taxi Rates in Boquete | Boquete Taxi Cab",
  description:
    "See placeholder fixed USD prices for David Airport to Boquete transfer, Panama City to Boquete taxi, Boquete taxi rides, and Boquete tours.",
};

// Replace the placeholder prices with the final approved rates.
const RATES = [
  {
    route: "David Airport (DAV) to Boquete",
    service: "Private airport transfer",
    time: "About 40 min",
    price: "$XX",
  },
  {
    route: "Boquete to David Airport (DAV)",
    service: "Private airport transfer",
    time: "About 40 min",
    price: "$XX",
  },
  {
    route: "Panama City / Tocumen (PTY) to Boquete",
    service: "Private long-distance transfer",
    time: "Custom timing",
    price: "$XXX",
  },
  {
    route: "Boquete local ride",
    service: "Taxi around town",
    time: "Local",
    price: "$XX",
  },
  {
    route: "Boquete coffee farm ride",
    service: "Tour transportation",
    time: "By route",
    price: "$XX",
  },
  {
    route: "Hot springs / day trip",
    service: "Private tour ride",
    time: "Half or full day",
    price: "$XXX",
  },
];

export default function RatesPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <RouteCanvas />
          <div className="page-hero-inner">
            <p className="eyebrow">
              <T en="No surprise fares" es="Sin sorpresas" />
            </p>
            <h1 className="page-title">
              <T
                en="Fixed USD Taxi Rates in Boquete"
                es="Tarifas fijas en USD en Boquete"
              />
            </h1>
            <p className="page-copy">
              <T
                en="A clean rate table helps U.S. travelers understand the fare before booking. Replace these placeholders with final approved prices."
                es="Una tabla clara ayuda a viajeros a conocer la tarifa antes de reservar. Reemplace estos marcadores con precios finales."
              />
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="rates-table-wrap">
              <table className="rates-table">
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>Service</th>
                    <th>Travel time</th>
                    <th>Fixed USD price</th>
                  </tr>
                </thead>
                <tbody>
                  {RATES.map((rate) => (
                    <tr key={rate.route}>
                      <td>{rate.route}</td>
                      <td>{rate.service}</td>
                      <td>{rate.time}</td>
                      <td className="price">{rate.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid-3">
              <article className="rate-note">
                <h2>
                  <T en="Published prices" es="Precios publicados" />
                </h2>
                <p>
                  <T
                    en="Use real prices here once approved. Keep USD visible in headings and table labels."
                    es="Use precios reales cuando esten aprobados. Mantenga USD visible."
                  />
                </p>
              </article>
              <article className="rate-note">
                <h2>
                  <T en="Airport priority" es="Prioridad aeropuerto" />
                </h2>
                <p>
                  <T
                    en="Rates should push visitors toward the booking form for airport pickup details."
                    es="Las tarifas deben llevar al formulario para detalles de aeropuerto."
                  />
                </p>
              </article>
              <article className="rate-note">
                <h2>
                  <T en="No negotiation" es="Sin negociar" />
                </h2>
                <p>
                  <T
                    en="The table is a trust signal for travelers booking before they arrive."
                    es="La tabla da confianza a viajeros que reservan antes de llegar."
                  />
                </p>
              </article>
            </div>
            <div className="cta-row">
              {/* Booking page on hold until the client asks for it.
              <Link className="solid-button" href="/book-now">
                <T
                  en="Book with fixed USD price"
                  es="Reservar con precio fijo USD"
                />
              </Link> */}
              <a className="outline-button" href={CONTACT.whatsapp}>
                <T en="Ask a question" es="Hacer una pregunta" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter blurb="Fixed USD prices for Boquete taxi and airport transfers.">
        <FooterContact />
        <div>
          <h3>Airport</h3>
          <Link href="/airport-transfers">David Airport transfer</Link>
          <Link href="/airport-transfers">Panama City transfer</Link>
        </div>
        {/* Whole column commented out: the booking link was its only entry.
        <div>
          <h3>Book</h3>
          <Link href="/book-now">Booking form</Link>
        </div> */}
      </SiteFooter>
    </>
  );
}
