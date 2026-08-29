import type { Metadata } from "next";
import Link from "next/link";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Why Choose Boquete Taxi Cab | English-Speaking Drivers",
  description:
    "Learn why travelers choose Boquete Taxi Cab for safe private transfers, English-speaking drivers, fixed USD prices, and reliable airport pickup.",
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
                en="Why Travelers Choose Boquete Taxi Cab"
                es="Por que elegir Boquete Taxi Cab"
              />
            </h1>
            <p className="page-copy">
              <T
                en="Premium does not need to feel flashy. It should feel safe, clear, punctual, and easy to trust before a visitor arrives in Panama."
                es="Premium no tiene que sentirse exagerado. Debe sentirse seguro, claro, puntual y facil de confiar antes de llegar a Panama."
              />
            </p>
            <div className="trust-strip">
              <div className="trust-item">
                <strong>
                  <T
                    en="English-speaking drivers"
                    es="Conductores que hablan ingles"
                  />
                </strong>
                <span>
                  <T
                    en="Clear communication for U.S. visitors and retirees."
                    es="Comunicacion clara para visitantes y residentes."
                  />
                </span>
              </div>
              <div className="trust-item">
                <strong>
                  <T en="Reliable pickup" es="Recogida confiable" />
                </strong>
                <span>
                  <T
                    en="Book ahead and know who is meeting you."
                    es="Reserve antes y sepa quien lo espera."
                  />
                </span>
              </div>
              <div className="trust-item">
                <strong>
                  <T en="Fixed USD prices" es="Precios fijos en USD" />
                </strong>
                <span>
                  <T
                    en="No surprise fares after a long travel day."
                    es="Sin sorpresas despues de un largo viaje."
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
                  en="Safety and confidence"
                  es="Seguridad y confianza"
                />
              </p>
              <h2 className="section-title">
                <T
                  en="Built for travelers who plan ahead."
                  es="Pensado para viajeros que planifican."
                />
              </h2>
              <p className="section-copy">
                <T
                  en="This page should eventually include the company story, years of experience, driver names, vehicle details, licensing notes, and real photos."
                  es="Esta pagina debe incluir historia, anos de experiencia, nombres de conductores, detalles de vehiculos, permisos y fotos reales."
                />
              </p>
            </div>
            <div className="rate-note">
              <span className="mini-label">
                <T en="Content to add" es="Contenido para agregar" />
              </span>
              <ul className="check-list">
                <li>
                  <T
                    en="Years in business and service area."
                    es="Anos de experiencia y area de servicio."
                  />
                </li>
                <li>
                  <T
                    en="Vehicle photos and capacity."
                    es="Fotos de vehiculos y capacidad."
                  />
                </li>
                <li>
                  <T
                    en="Driver photos and short bios."
                    es="Fotos y biografias cortas de conductores."
                  />
                </li>
                <li>
                  <T
                    en="Verified Google review excerpts."
                    es="Extractos reales de resenas de Google."
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <p className="eyebrow">
              <T en="Photo direction" es="Direccion de fotos" />
            </p>
            <h2 className="section-title">
              <T
                en="Add real cars and drivers here."
                es="Agregue aqui fotos reales de carros y conductores."
              />
            </h2>
            <div className="photo-grid">
              <div className="photo-slot">
                <p>
                  <T
                    en="Vehicle exterior photo"
                    es="Foto exterior del vehiculo"
                  />
                </p>
              </div>
              <div className="photo-slot">
                <p>
                  <T en="Driver portrait photo" es="Foto del conductor" />
                </p>
              </div>
              <div className="photo-slot">
                <p>
                  <T
                    en="Airport pickup photo"
                    es="Foto de recogida en aeropuerto"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter blurb="Safe, reliable private transfers in Boquete.">
        <FooterContact />
        <div>
          <h3>Services</h3>
          <Link href="/airport-transfers">Airport transfers</Link>
          <Link href="/boquete-taxi">Local taxi</Link>
          <Link href="/tours">Tours</Link>
        </div>
        <div>
          <h3>Pricing</h3>
          <Link href="/rates">Fixed USD rates</Link>
        </div>
      </SiteFooter>
    </>
  );
}
