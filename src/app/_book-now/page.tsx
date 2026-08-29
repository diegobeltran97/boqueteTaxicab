// Not routed: the parent folder's "_" prefix keeps it out of the App Router
// until the client asks for the booking flow. Rename the folder to "book-now"
// to publish it again.
import type { Metadata } from "next";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Book a Boquete Taxi or Airport Transfer | Boquete Taxi Cab",
  description:
    "Book a Boquete taxi, David Airport to Boquete transfer, or Panama City to Boquete taxi with fixed USD prices and English-speaking drivers.",
};

export default function BookNowPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <RouteCanvas />
          <div className="page-hero-inner">
            <p className="eyebrow">
              <T en="Book ahead" es="Reserve antes" />
            </p>
            <h1 className="page-title">
              <T
                en="Book Your Boquete Taxi Cab"
                es="Reserve su Boquete Taxi Cab"
              />
            </h1>
            <p className="page-copy">
              <T
                en="For airport transfers, the form is the best first step. Send pickup details, flight number, passengers, luggage, and preferred time so the ride can be confirmed clearly."
                es="Para traslados de aeropuerto, el formulario es el primer paso ideal. Envie recogida, vuelo, pasajeros, equipaje y hora para confirmar bien el viaje."
              />
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-inner split-grid">
            <BookingForm />

            <aside className="rate-note">
              <span className="mini-label">Trust signals</span>
              <h2>
                <T
                  en="Best for airport transfers"
                  es="Ideal para traslados de aeropuerto"
                />
              </h2>
              <p>
                <T
                  en="The booking form gives travelers more confidence than starting only in WhatsApp. WhatsApp stays available for quick questions."
                  es="El formulario da mas confianza que empezar solo por WhatsApp. WhatsApp queda disponible para preguntas rapidas."
                />
              </p>
              <ul className="check-list">
                <li>
                  <T
                    en="English-speaking driver confirmation."
                    es="Confirmacion con conductor que habla ingles."
                  />
                </li>
                <li>
                  <T
                    en="Fixed published USD price before the ride."
                    es="Precio fijo en USD antes del viaje."
                  />
                </li>
                <li>
                  <T
                    en="Driver waiting with a sign for airport pickups."
                    es="Conductor esperando con letrero en aeropuerto."
                  />
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter blurb="Private airport transfers and taxi service in Boquete.">
        <FooterContact />
        <div>
          <h3>Rates</h3>
          <Link href="/rates">Fixed USD prices</Link>
          <Link href="/airport-transfers">Airport transfers</Link>
        </div>
        <div>
          <h3>Location</h3>
          <p>Boquete, Chiriqui, Panama</p>
        </div>
      </SiteFooter>
    </>
  );
}
