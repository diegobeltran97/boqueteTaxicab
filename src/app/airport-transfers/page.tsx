import type { Metadata } from "next";
import Link from "next/link";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "David Airport to Boquete Transfer | Boquete Taxi Cab",
  description:
    "Book a private David Airport to Boquete transfer or Panama City to Boquete taxi with English-speaking drivers, fixed USD prices, and meet-and-greet pickup.",
};

export default function AirportTransfersPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <RouteCanvas />
          <div className="page-hero-inner">
            <p className="eyebrow">
              <T en="Airport transfers" es="Traslados al aeropuerto" />
            </p>
            <h1 className="page-title">
              <T
                en="David Airport to Boquete Transfer"
                es="Traslado del Aeropuerto de David a Boquete"
              />
            </h1>
            <p className="page-copy">
              <T
                en="Pre-book a private transfer from DAV to Boquete with an English-speaking driver, fixed USD price, flight tracking, luggage help, and a sign at arrival."
                es="Reserve traslado privado de DAV a Boquete con conductor que habla ingles, precio fijo en USD, seguimiento de vuelo, ayuda con equipaje y letrero al llegar."
              />
            </p>
            <div className="cta-row">
              {/* Booking page on hold until the client asks for it.
              <Link className="solid-button" href="/book-now">
                <T en="Book airport transfer" es="Reservar traslado" />
              </Link> */}
              <Link className="outline-button" href="/rates">
                <T en="See fixed rates" es="Ver tarifas fijas" />
              </Link>
            </div>
            <div className="trust-strip">
              <div className="trust-item">
                <strong>DAV to Boquete</strong>
                <span>
                  <T
                    en="Around 40 minutes depending on traffic and weather."
                    es="Unos 40 minutos segun trafico y clima."
                  />
                </span>
              </div>
              <div className="trust-item">
                <strong>
                  <T en="Driver with sign" es="Conductor con letrero" />
                </strong>
                <span>
                  <T
                    en="Your driver meets you at arrivals."
                    es="Su conductor lo espera en llegadas."
                  />
                </span>
              </div>
              <div className="trust-item">
                <strong>
                  <T en="Fixed USD price" es="Precio fijo USD" />
                </strong>
                <span>
                  <T
                    en="Know the fare before your flight."
                    es="Conozca la tarifa antes del vuelo."
                  />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner split-grid">
            <div>
              <p className="eyebrow">DAV</p>
              <h2 className="section-title">
                <T
                  en="David Airport pickup made simple."
                  es="Recogida sencilla en el Aeropuerto de David."
                />
              </h2>
              <p className="section-copy">
                <T
                  en="This is the most important route for visitors coming to Boquete. The form captures your flight number and arrival time so pickup can be planned before you land."
                  es="Esta es la ruta mas importante para visitantes que llegan a Boquete. El formulario toma su numero de vuelo y hora de llegada para coordinar antes de aterrizar."
                />
              </p>
            </div>
            <div className="card">
              <span className="mini-label">
                <T en="What is included" es="Incluye" />
              </span>
              <ul className="check-list">
                <li>
                  <T
                    en="Meet-and-greet pickup with your name on a sign."
                    es="Bienvenida con su nombre en un letrero."
                  />
                </li>
                <li>
                  <T
                    en="Help with luggage from arrivals to the vehicle."
                    es="Ayuda con equipaje desde llegadas hasta el vehiculo."
                  />
                </li>
                <li>
                  <T
                    en="Flight number collected for timing updates."
                    es="Numero de vuelo para coordinar horarios."
                  />
                </li>
                <li>
                  <T
                    en="Clear fixed fare in USD before pickup."
                    es="Tarifa fija en USD antes de la recogida."
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <p className="eyebrow">PTY</p>
            <h2 className="section-title">
              <T
                en="Panama City to Boquete taxi planning."
                es="Taxi de Ciudad de Panama a Boquete."
              />
            </h2>
            <p className="section-copy">
              <T
                en="For travelers arriving through Tocumen or staying in Panama City, the page should explain private long-distance transfer options, timing, luggage space, and rest stops."
                es="Para viajeros que llegan por Tocumen o se quedan en Ciudad de Panama, la pagina explica traslado privado, duracion, equipaje y paradas."
              />
            </p>
            <div className="grid-3">
              <article className="card">
                <h3>
                  <T en="Door-to-door" es="Puerta a puerta" />
                </h3>
                <p>
                  <T
                    en="Pickup at hotel, airport, or residence with direct travel to Boquete."
                    es="Recogida en hotel, aeropuerto o residencia con viaje directo a Boquete."
                  />
                </p>
              </article>
              <article className="card">
                <h3>
                  <T en="Published prices" es="Precios publicados" />
                </h3>
                <p>
                  <T
                    en="Use placeholders now, then replace with final fixed USD rates."
                    es="Use marcadores ahora y luego reemplace con tarifas fijas finales."
                  />
                </p>
              </article>
              <article className="card">
                <h3>
                  <T en="Easy booking" es="Reserva facil" />
                </h3>
                <p>
                  <T
                    en="Travelers can submit the form before leaving the U.S."
                    es="Los viajeros pueden enviar el formulario antes de salir de EE. UU."
                  />
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter blurb="English-speaking drivers. Fixed USD prices. Book ahead.">
        <FooterContact />
        <div>
          <h3>Book</h3>
          {/* <Link href="/book-now">Booking form</Link> */}
          <Link href="/rates">Fixed rates</Link>
        </div>
        <div>
          <h3>Service area</h3>
          <p>Boquete, David Airport, Panama City, Chiriqui</p>
        </div>
      </SiteFooter>
    </>
  );
}
