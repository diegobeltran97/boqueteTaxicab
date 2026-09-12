import type { Metadata } from "next";
import Link from "next/link";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Boquete Taxi Cab | Airport Transfers & Local Taxi",
  description:
    "Learn how Boquete Taxi Cab helps travelers arrange airport transfers, local taxi rides, and private tour transportation around Boquete and Chiriqui.",
};

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <RouteCanvas />
          <div className="page-hero-inner">
            <p className="eyebrow">
              <T
                en="About Boquete Taxi Cab"
                es="Sobre Boquete Taxi Cab"
              />
            </p>
            <h1 className="page-title">
              <T
                en="Private taxi service for Boquete, airport arrivals, and day trips"
                es="Taxi privado para Boquete, llegadas de aeropuerto y paseos"
              />
            </h1>
            <p className="page-copy">
              <T
                en="Boquete Taxi Cab helps visitors arrange reliable private transportation before they arrive: airport pickups, local rides, and tour transportation with clear communication by phone or WhatsApp."
                es="Boquete Taxi Cab ayuda a visitantes a coordinar transporte privado confiable antes de llegar: recogidas en aeropuerto, viajes locales y transporte turistico con comunicacion clara por telefono o WhatsApp."
              />
            </p>
            <div className="cta-row">
              <a className="solid-button" href={CONTACT.whatsapp}>
                <T en="Message on WhatsApp" es="Escribir por WhatsApp" />
              </a>
              <a className="outline-button" href={CONTACT.phoneHref}>
                <T en="Call the driver" es="Llamar al conductor" />
              </a>
            </div>
            <div className="trust-strip">
              <div className="trust-item">
                <strong>
                  <T
                    en="Airport transfers"
                    es="Traslados al aeropuerto"
                  />
                </strong>
                <span>
                  <T
                    en="David Airport and Panama City transfers planned with pickup time, luggage, and flight details."
                    es="Traslados desde David y Ciudad de Panama coordinados con hora, equipaje y datos de vuelo."
                  />
                </span>
              </div>
              <div className="trust-item">
                <strong>
                  <T en="Local taxi rides" es="Viajes locales" />
                </strong>
                <span>
                  <T
                    en="Hotel pickups, restaurants, appointments, errands, coffee farms, and rides around Boquete."
                    es="Recogidas en hoteles, restaurantes, citas, diligencias, fincas de cafe y viajes dentro de Boquete."
                  />
                </span>
              </div>
              <div className="trust-item">
                <strong>
                  <T en="Tour transportation" es="Transporte turistico" />
                </strong>
                <span>
                  <T
                    en="Private rides to Boquete viewpoints, hikes, hot springs, coffee farms, and Chiriqui day trips."
                    es="Viajes privados a miradores, senderos, aguas termales, fincas de cafe y paseos por Chiriqui."
                  />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner split-grid">
            <div>
              <p className="eyebrow">
                <T
                  en="How the service works"
                  es="Como funciona el servicio"
                />
              </p>
              <h2 className="section-title">
                <T
                  en="A ride that is coordinated before you step outside."
                  es="Un viaje coordinado antes de salir."
                />
              </h2>
              <p className="section-copy">
                <T
                  en="Send your pickup point, destination, time, passenger count, luggage, and flight number when needed. The ride is confirmed in advance so you know where to meet, what to expect, and how to contact your driver."
                  es="Envie punto de recogida, destino, hora, cantidad de pasajeros, equipaje y numero de vuelo cuando aplique. El viaje se confirma antes para que sepa donde encontrarse, que esperar y como contactar al conductor."
                />
              </p>
            </div>
            <div className="rate-note">
              <span className="mini-label">
                <T en="What travelers value" es="Lo que valoran los viajeros" />
              </span>
              <ul className="check-list">
                <li>
                  <T
                    en="English and Spanish communication by phone or WhatsApp."
                    es="Comunicacion en ingles y espanol por telefono o WhatsApp."
                  />
                </li>
                <li>
                  <T
                    en="Clear pickup details for airports, hotels, homes, and tour meeting points."
                    es="Detalles claros de recogida en aeropuertos, hoteles, casas y puntos de encuentro."
                  />
                </li>
                <li>
                  <T
                    en="Private rides for airport transfers, local taxi service, and tour transportation."
                    es="Viajes privados para traslados al aeropuerto, taxi local y transporte turistico."
                  />
                </li>
                <li>
                  <T
                    en="Fixed USD price confirmed before the ride whenever the route can be quoted in advance."
                    es="Precio fijo en USD confirmado antes del viaje cuando la ruta se puede cotizar por adelantado."
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <p className="eyebrow">
              <T en="Real service moments" es="Momentos reales del servicio" />
            </p>
            <div className="photo-grid">
              <div className="photo-slot">
                <img
                  src="/whoWeAre/airport.jpeg"
                  alt="Boquete Taxi Cab at Enrique Malek International Airport"
                  loading="lazy"
                />
              </div>
              <div className="photo-slot">
                <img
                  src="/whoWeAre/service.jpeg"
                  alt="Boquete Taxi Cab driver with travelers in Boquete"
                  loading="lazy"
                />
              </div>
              <div className="photo-slot">
                <img
                  src="/whoWeAre/tour_experience.jpeg"
                  alt="Travelers walking a nature trail during a Boquete tour experience"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter blurb="Airport transfers, local taxi rides, and private tour transportation in Boquete.">
        <FooterContact />
        <div>
          <h3>Services</h3>
          <Link href="/airport-transfers">Airport transfers</Link>
          <Link href="/boquete-taxi">Local taxi</Link>
          <Link href="/tours">Tours</Link>
        </div>
        {/* Rates page on hold until the client asks for it.
        <div>
          <h3>Pricing</h3>
          <Link href="/rates">Fixed USD rates</Link>
        </div> */}
      </SiteFooter>
    </>
  );
}
