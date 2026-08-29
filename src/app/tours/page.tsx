import type { Metadata } from "next";
import Link from "next/link";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Boquete Tours, Coffee Farms, Hot Springs & Hikes | Boquete Taxi Cab",
  description:
    "Boquete tours and private rides to coffee farms, hot springs, hikes, scenic viewpoints, and Chiriqui day trips with English-speaking drivers.",
};

export default function ToursPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <RouteCanvas />
          <div className="page-hero-inner">
            <p className="eyebrow">
              <T en="Boquete tours" es="Tours en Boquete" />
            </p>
            <h1 className="page-title">
              <T
                en="Boquete Tours & Day Trips"
                es="Tours y paseos de dia en Boquete"
              />
            </h1>
            <p className="page-copy">
              <T
                en="Private rides to coffee farms, hot springs, hikes, viewpoints, and day trips with English-speaking drivers and clear USD pricing."
                es="Viajes privados a fincas de cafe, aguas termales, senderos, miradores y paseos con conductores que hablan ingles y precios en USD."
              />
            </p>
            <div className="cta-row">
              {/* Booking page on hold until the client asks for it.
              <Link className="solid-button" href="/book-now">
                <T en="Plan a tour ride" es="Planear tour" />
              </Link> */}
              <Link className="outline-button" href="/rates">
                <T en="Tour rates" es="Tarifas de tours" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="eyebrow">
              <T en="Popular ideas" es="Ideas populares" />
            </p>
            <h2 className="section-title">
              <T
                en="Tour transportation without the stress of driving."
                es="Transporte turistico sin el estres de manejar."
              />
            </h2>
            <div className="grid-4">
              <article className="card">
                <span className="mini-label">Coffee</span>
                <h2>
                  <T en="Coffee farm visits" es="Fincas de cafe" />
                </h2>
                <p>
                  <T
                    en="Pickup and return for tastings and farm tours around Boquete."
                    es="Recogida y retorno para catas y visitas a fincas."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">Water</span>
                <h2>
                  <T en="Hot springs" es="Aguas termales" />
                </h2>
                <p>
                  <T
                    en="Private transportation for a relaxed day trip outside town."
                    es="Transporte privado para un paseo relajado fuera del pueblo."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">Trail</span>
                <h2>
                  <T en="Hikes and viewpoints" es="Senderos y miradores" />
                </h2>
                <p>
                  <T
                    en="Schedule pickup for morning hikes, viewpoints, and return rides."
                    es="Coordine recogida para caminatas, miradores y regreso."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">Day trip</span>
                <h2>
                  <T en="Chiriqui day trips" es="Paseos por Chiriqui" />
                </h2>
                <p>
                  <T
                    en="Custom private rides for groups, families, and longer itineraries."
                    es="Viajes privados a la medida para grupos, familias e itinerarios largos."
                  />
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner split-grid">
            <div>
              <p className="eyebrow">
                <T en="Booking position" es="Reserva" />
              </p>
              <h2 className="section-title">
                <T
                  en="Tours should support the airport-transfer business."
                  es="Los tours apoyan el negocio de traslados."
                />
              </h2>
              <p className="section-copy">
                <T
                  en="Visitors who trust the airport pickup often book additional local rides and day trips during the same visit."
                  es="Quienes confian en el traslado de aeropuerto suelen reservar viajes locales y paseos durante la visita."
                />
              </p>
            </div>
            <div className="rate-note">
              <h2>
                <T en="Simple call to action" es="Accion simple" />
              </h2>
              <p>
                <T
                  en="Use the same Book Now flow, with WhatsApp available for custom questions."
                  es="Use el mismo flujo de reserva, con WhatsApp para preguntas personalizadas."
                />
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter blurb="Boquete tours, taxi rides, and private transfers.">
        <FooterContact />
        <div>
          <h3>Services</h3>
          <Link href="/airport-transfers">Airport transfers</Link>
          <Link href="/boquete-taxi">Local taxi</Link>
        </div>
        <div>
          <h3>Book</h3>
          {/* <Link href="/book-now">Booking form</Link> */}
          <Link href="/rates">Fixed USD rates</Link>
        </div>
      </SiteFooter>
    </>
  );
}
