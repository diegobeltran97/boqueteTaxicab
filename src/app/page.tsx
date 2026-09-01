import Link from "next/link";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";
import { CONTACT } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <main id="main">
        <section className="hero">
          <RouteCanvas />
          <div className="hero-inner">
            <img
              className="hero-logo"
              src="/assets/boquete-logo.png"
              alt="Boquete Taxi Cab"
            />
            <div>
              <p className="eyebrow">
                <T
                  en="Boquete, Panama airport transfers"
                  es="Traslados al aeropuerto en Boquete, Panama"
                />
              </p>
              <h1 className="hero-title">
                <T
                  en="Private Airport Transfers & Taxi in Boquete"
                  es="Traslados privados y taxi en Boquete"
                />
              </h1>
              <p className="hero-copy">
                <T
                  en="Book ahead from the U.S. with English-speaking drivers, fixed published prices in USD, and reliable pickup with your driver waiting with a sign."
                  es="Reserve antes de viajar con conductores que hablan ingles, precios fijos publicados en USD y recogida confiable con letrero a su llegada."
                />
              </p>
              <div className="hero-actions">
                {/*  <Link className="solid-button" href="/book-now">
                  <T en="Book Now" es="Reservar" />
                </Link> */}
                <a className="outline-button" href={CONTACT.whatsapp}>
                  <T en="WhatsApp" es="WhatsApp" />
                </a>
              </div>
            </div>
            <div className="trust-strip">
              <div className="trust-item">
                <strong>
                  <T
                    en="English-speaking drivers"
                    es="Conductores que hablan ingles"
                  />
                </strong>
                <T
                  en="Easy communication before pickup, during the ride, and when plans change."
                  es="Comunicacion clara antes de la recogida, durante el viaje y si cambian los planes."
                />
              </div>
              <div className="trust-item">
                <strong>
                  <T en="Fixed USD prices" es="Precios fijos en USD" />
                </strong>
                <T
                  en="Panama uses the U.S. dollar, so your fare is clear before you arrive."
                  es="Panama usa el dolar estadounidense, asi que la tarifa queda clara antes de llegar."
                />
              </div>
              <div className="trust-item">
                <strong>
                  <T
                    en="Driver waiting with a sign"
                    es="Conductor esperando con letrero"
                  />
                </strong>
                <T
                  en="Pre-book airport pickups with flight details, luggage help, and meet-and-greet service."
                  es="Reserve recogidas de aeropuerto con datos de vuelo, ayuda con equipaje y bienvenida."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="eyebrow">
              <T en="Top services" es="Servicios principales" />
            </p>
            <h2 className="section-title">
              <T
                en="Private rides for arrivals, local trips, and Boquete adventures."
                es="Viajes privados para llegadas, rutas locales y aventuras en Boquete."
              />
            </h2>
            <div className="grid-4">
              <article className="card">
                <span className="mini-label">DAV</span>
                <h3>
                  <T
                    en="David Airport to Boquete transfer"
                    es="Aeropuerto de David a Boquete"
                  />
                </h3>
                <p>
                  <T
                    en="The primary route for visitors flying into Chiriqui, usually about 40 minutes."
                    es="La ruta principal para visitantes que llegan a Chiriqui, normalmente unos 40 minutos."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">PTY</span>
                <h3>
                  <T
                    en="Panama City to Boquete taxi"
                    es="Ciudad de Panama a Boquete"
                  />
                </h3>
                <p>
                  <T
                    en="Long-distance private transfer planning for travelers coming from Tocumen or the city."
                    es="Traslados privados de larga distancia desde Tocumen o la ciudad."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">LOCAL</span>
                <h3>
                  <T en="Boquete taxi rides" es="Taxi local en Boquete" />
                </h3>
                <p>
                  <T
                    en="Hotels, restaurants, coffee farms, neighborhoods, and around-town pickups."
                    es="Hoteles, restaurantes, fincas de cafe, comunidades y recogidas locales."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">TOURS</span>
                <h3>
                  <T en="Boquete tours" es="Tours en Boquete" />
                </h3>
                <p>
                  <T
                    en="Volcan Baru, Macho de Monte, La Chorcha, coffee farms, hot springs, and day trips with local drivers."
                    es="Volcan Baru, Macho de Monte, La Chorcha, fincas de cafe, aguas termales y paseos de dia."
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
                <T en="Why pre-book" es="Por que reservar antes" />
              </p>
              <h2 className="section-title">
                <T
                  en="Arrive in Panama with your ride already handled."
                  es="Llegue a Panama con su transporte ya coordinado."
                />
              </h2>
              <p className="section-copy">
                <T
                  en="Airport transfers are the money page because travelers want certainty before they land. The site should make booking feel safer than negotiating a ride after arrival."
                  es="Los traslados al aeropuerto son clave porque los viajeros quieren certeza antes de aterrizar. La pagina debe hacer que reservar sea mas seguro que negociar al llegar."
                />
              </p>
            </div>
            <div className="money-panel">
              <span className="mini-label">Trust signals</span>
              <ul className="check-list">
                <li>
                  <T
                    en="Fixed published prices in USD before pickup."
                    es="Precios fijos publicados en USD antes de la recogida."
                  />
                </li>
                <li>
                  <T
                    en="English-speaking driver assigned ahead of time."
                    es="Conductor que habla ingles asignado con anticipacion."
                  />
                </li>
                <li>
                  <T
                    en="Driver waits with a sign and helps with luggage."
                    es="El conductor espera con letrero y ayuda con el equipaje."
                  />
                </li>
                <li>
                  <T
                    en="Flight number requested for airport pickups."
                    es="Se solicita numero de vuelo para recogidas de aeropuerto."
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="eyebrow">
              <T en="Traveler reviews" es="Opiniones de viajeros" />
            </p>
            <h2 className="section-title">
              <T
                en="Use verified Google reviews here."
                es="Use opiniones verificadas de Google aqui."
              />
            </h2>
            <div className="testimonial-grid">
              <article className="testimonial">
                <h3>Google review placeholder</h3>
                <p>
                  <T
                    en="Replace with a verified review about the driver waiting at David Airport with a sign."
                    es="Reemplazar con una opinion real sobre el conductor esperando en David con letrero."
                  />
                </p>
              </article>
              <article className="testimonial">
                <h3>Google review placeholder</h3>
                <p>
                  <T
                    en="Replace with a verified review about English communication and a clean vehicle."
                    es="Reemplazar con una opinion real sobre comunicacion en ingles y vehiculo limpio."
                  />
                </p>
              </article>
              <article className="testimonial">
                <h3>Google review placeholder</h3>
                <p>
                  <T
                    en="Replace with a verified review about a fixed price from David Airport to Boquete."
                    es="Reemplazar con una opinion real sobre precio fijo desde David a Boquete."
                  />
                </p>
              </article>
            </div>
            <div className="cta-row">
              <a
                className="outline-button"
                href="https://www.google.com/search?q=Boquete+Taxi+Cab+reviews"
              >
                <T en="View Google reviews" es="Ver resenas en Google" />
              </a>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">
              <T
                en="Questions travelers ask before booking."
                es="Preguntas antes de reservar."
              />
            </h2>
            <div className="grid-3">
              <article className="card">
                <h3>
                  <T
                    en="Do prices change at pickup?"
                    es="Cambian los precios al recoger?"
                  />
                </h3>
                <p>
                  <T
                    en="No. The goal is fixed, published USD pricing per route, confirmed before the ride."
                    es="No. La idea es tener precios fijos en USD por ruta, confirmados antes del viaje."
                  />
                </p>
              </article>
              <article className="card">
                <h3>
                  <T
                    en="Can I book from the U.S.?"
                    es="Puedo reservar desde EE. UU.?"
                  />
                </h3>
                <p>
                  <T
                    en="Yes. Use the booking form first for airport transfers, then continue on WhatsApp if needed."
                    es="Si. Use primero el formulario para traslados de aeropuerto y luego WhatsApp si hace falta."
                  />
                </p>
              </article>
              <article className="card">
                <h3>
                  <T
                    en="What if my flight is delayed?"
                    es="Y si mi vuelo se retrasa?"
                  />
                </h3>
                <p>
                  <T
                    en="Airport bookings collect your flight number and arrival time so the driver can plan around changes."
                    es="Las reservas de aeropuerto incluyen numero de vuelo y hora de llegada para coordinar cambios."
                  />
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        blurb={
          <T
            en="Private airport transfers and Boquete taxi rides with fixed USD pricing."
            es="Traslados privados al aeropuerto y taxi local con precios fijos en USD."
          />
        }
      >
        <FooterContact title={<T en="Contact" es="Contacto" />} />
        <div>
          <h3>
            <T en="Routes" es="Rutas" />
          </h3>
          <Link href="/airport-transfers">David Airport to Boquete</Link>
          <Link href="/airport-transfers">Panama City to Boquete</Link>
          <Link href="/boquete-taxi">Boquete taxi</Link>
          <Link href="/tours">Boquete tours</Link>
        </div>
        {/* Booking and rates pages on hold until the client asks for them.
        <div>
          <h3>
            <T en="Book ahead" es="Reserve antes" />
          </h3>
          <Link href="/book-now">
            <T en="Booking form" es="Formulario de reserva" />
          </Link>
          <Link href="/rates">
            <T en="Fixed USD rates" es="Tarifas fijas en USD" />
          </Link>
        </div> */}
      </SiteFooter>
    </>
  );
}
