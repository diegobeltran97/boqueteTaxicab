import type { Metadata } from "next";
import Link from "next/link";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Boquete Taxi & Local Rides | Boquete Taxi Cab",
  description:
    "Boquete taxi service for local rides, hotels, restaurants, coffee farms, appointments, and private transportation with English-speaking drivers.",
};

export default function BoqueteTaxiPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <RouteCanvas />
          <div className="page-hero-inner">
            <p className="eyebrow">
              <T en="Around town" es="Dentro de Boquete" />
            </p>
            <h1 className="page-title">
              <T
                en="Boquete Taxi & Local Rides"
                es="Taxi local y viajes en Boquete"
              />
            </h1>
            <p className="page-copy">
              <T
                en="Reliable private rides for hotels, restaurants, neighborhoods, coffee farms, appointments, and errands around Boquete."
                es="Viajes privados confiables para hoteles, restaurantes, comunidades, fincas de cafe, citas y diligencias en Boquete."
              />
            </p>
            <div className="cta-row">
              {/* Booking page on hold until the client asks for it.
              <Link className="solid-button" href="/book-now">
                <T en="Request a ride" es="Solicitar viaje" />
              </Link> */}
              <Link className="outline-button" href="/rates">
                <T en="View local rates" es="Ver tarifas locales" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="eyebrow">
              <T en="Local service" es="Servicio local" />
            </p>
            <h2 className="section-title">
              <T
                en="A taxi service designed for visitors who want clarity."
                es="Taxi para visitantes que quieren claridad."
              />
            </h2>
            <div className="grid-3">
              <article className="card">
                <h2>
                  <T en="Hotel pickups" es="Recogidas en hoteles" />
                </h2>
                <p>
                  <T
                    en="Book pickup from your hotel, rental home, or meeting point in Boquete."
                    es="Reserve desde hotel, casa de alquiler o punto de encuentro en Boquete."
                  />
                </p>
              </article>
              <article className="card">
                <h2>
                  <T
                    en="Restaurants and errands"
                    es="Restaurantes y diligencias"
                  />
                </h2>
                <p>
                  <T
                    en="Simple around-town rides with phone, WhatsApp, or booking form access."
                    es="Viajes locales sencillos por telefono, WhatsApp o formulario."
                  />
                </p>
              </article>
              <article className="card">
                <h2>
                  <T en="Fixed route pricing" es="Precios por ruta" />
                </h2>
                <p>
                  <T
                    en="Use published USD prices for common routes so riders know what to expect."
                    es="Use precios en USD para rutas comunes y evite sorpresas."
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
                <T
                  en="For retirees and tourists"
                  es="Para turistas y residentes"
                />
              </p>
              <h2 className="section-title">
                <T
                  en="Safe, calm, and easy to coordinate."
                  es="Seguro, tranquilo y facil de coordinar."
                />
              </h2>
              <p className="section-copy">
                <T
                  en="The local rides page should reassure older travelers and first-time visitors that they can communicate clearly and avoid negotiating fares."
                  es="Esta pagina debe dar confianza a visitantes y personas mayores: comunicacion clara y sin negociar tarifas."
                />
              </p>
            </div>
            <div className="rate-note">
              <h2>
                <T
                  en="Always visible contact"
                  es="Contacto siempre visible"
                />
              </h2>
              <p>
                <T
                  en="The sticky Book, WhatsApp, and Call bar stays available on every page for fast action."
                  es="La barra de Reservar, WhatsApp y Llamar queda disponible en todas las paginas."
                />
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter blurb="Boquete taxi service with English-speaking drivers and fixed USD prices.">
        <FooterContact />
        <div>
          <h3>Book</h3>
          {/* <Link href="/book-now">Booking form</Link> */}
          <Link href="/rates">Local rates</Link>
        </div>
        <div>
          <h3>Airport</h3>
          <Link href="/airport-transfers">David Airport to Boquete</Link>
          <Link href="/airport-transfers">Panama City to Boquete</Link>
        </div>
      </SiteFooter>
    </>
  );
}
