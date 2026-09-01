import type { Metadata } from "next";
import Link from "next/link";
import { RouteCanvas } from "@/components/RouteCanvas";
import { FooterContact, SiteFooter } from "@/components/SiteFooter";
import { T } from "@/components/T";
import { TourArt } from "@/components/TourScene";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Boquete Tours: Volcan Baru, Macho de Monte & Chorcha | Boquete Taxi Cab",
  description:
    "Private rides from Boquete to Volcan Baru, Canon Macho de Monte, and Cascada de la Chorcha, plus coffee farms, hot springs, and Chiriqui day trips with English-speaking drivers.",
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
                en="Private rides to Volcan Baru, Macho de Monte, La Chorcha, coffee farms, and hot springs, with English-speaking drivers and clear USD pricing."
                es="Viajes privados al Volcan Baru, Macho de Monte, La Chorcha, fincas de cafe y aguas termales, con conductores que hablan ingles y precios en USD."
              />
            </p>
            <div className="cta-row">
              {/* Booking page on hold until the client asks for it.
              <Link className="solid-button" href="/book-now">
                <T en="Plan a tour ride" es="Planear tour" />
              </Link> */}
              <a className="outline-button" href={CONTACT.whatsapp}>
                <T en="Ask about a tour" es="Consultar por un tour" />
              </a>
              {/* Rates page on hold until the client asks for it.
              <Link className="outline-button" href="/rates">
                <T en="Tour rates" es="Tarifas de tours" />
              </Link> */}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="eyebrow">
              <T en="Signature day trips" es="Paseos destacados" />
            </p>
            <h2 className="section-title">
              <T
                en="Three Chiriqui landmarks worth the drive."
                es="Tres lugares de Chiriqui que valen el viaje."
              />
            </h2>
            <p className="section-copy">
              <T
                en="Each one is a private round trip from Boquete: your driver takes you out, waits or returns at an agreed time, and brings you back. Entrance fees and local guides are arranged separately."
                es="Cada uno es un viaje privado de ida y vuelta desde Boquete: el conductor lo lleva, espera o regresa a la hora acordada y lo trae de vuelta. Entradas y guias locales se coordinan aparte."
              />
            </p>

            <div className="tour-grid">
              <article className="tour-card">
                <TourArt
                  scene="baru"
                  alt="The Volcan Baru National Park sign at the summit, above a bank of clouds"
                />
                <div className="tour-body">
                  <span className="mini-label">
                    <T en="Volcan Baru" es="Volcan Baru" />
                  </span>
                  <h3>
                    <T
                      en="Volcán Barú sunrise run"
                      es="Amanecer en el Volcán Barú"
                    />
                  </h3>
                  <p>
                    <T
                      en="Panama's highest point at 3,474 m (11,398 ft). Most visitors leave Boquete around midnight so they reach the summit for sunrise, when both oceans can be visible on a clear morning. We handle the ride to and from the trailhead or the 4x4 meeting point."
                      es="El punto mas alto de Panama, 3,474 m (11,398 pies). La mayoria sale de Boquete cerca de medianoche para llegar a la cima al amanecer, cuando en dias despejados se ven los dos oceanos. Nosotros llevamos y recogemos en el sendero o en el punto del 4x4."
                    />
                  </p>
                  <ul className="tour-facts">
                    <li>
                      <T
                        en="Midnight or pre-dawn pickup"
                        es="Recogida a medianoche o antes del amanecer"
                      />
                    </li>
                    <li>
                      <T
                        en="Trailhead is minutes from Boquete"
                        es="El sendero esta a minutos de Boquete"
                      />
                    </li>
                    <li>
                      <T
                        en="Dress for near-freezing wind at the top"
                        es="Abrigue bien: en la cima hace mucho frio y viento"
                      />
                    </li>
                  </ul>
                </div>
              </article>

              <article className="tour-card">
                <TourArt
                  scene="canyon"
                  alt="Green volcanic peaks and cloud over the Chiriqui highlands"
                />
                <div className="tour-body">
                  <span className="mini-label">
                    <T en="Macho de Monte" es="Macho de Monte" />
                  </span>
                  <h3>
                    <T
                      en="Cañón Macho de Monte"
                      es="Cañón Macho de Monte"
                    />
                  </h3>
                  <p>
                    <T
                      en="A narrow slot canyon at Cuesta de Piedra, cut through volcanic rock by the Macho de Monte river: roughly 4 to 6 m wide and up to 30 m deep, with cold natural pools and small falls off the walls. About 20 minutes past Volcan, an easy half day from Boquete."
                      es="Un canon angosto en Cuesta de Piedra, tallado en roca volcanica por el rio Macho de Monte: entre 4 y 6 m de ancho y hasta 30 m de profundidad, con pozas frias y pequenas caidas por las paredes. A unos 20 minutos de Volcan, medio dia desde Boquete."
                    />
                  </p>
                  <ul className="tour-facts">
                    <li>
                      <T en="Half-day round trip" es="Medio dia ida y vuelta" />
                    </li>
                    <li>
                      <T
                        en="Swimming, rappelling, and short trails"
                        es="Natacion, rapel y senderos cortos"
                      />
                    </li>
                    <li>
                      <T
                        en="Go with a local guide, and skip it after heavy rain"
                        es="Vaya con guia local y evitelo tras lluvias fuertes"
                      />
                    </li>
                  </ul>
                </div>
              </article>

              <article className="tour-card">
                <TourArt
                  scene="waterfall"
                  alt="A suspension bridge on a jungle trail in the Boquete highlands"
                />
                <div className="tour-body">
                  <span className="mini-label">
                    <T en="La Chorcha" es="La Chorcha" />
                  </span>
                  <h3>
                    <T
                      en="Cascada de la Chorcha"
                      es="Cascada de la Chorcha"
                    />
                  </h3>
                  <p>
                    <T
                      en="One of the tallest waterfalls in Panama, dropping off the Chorcha plateau between David, Gualaca, and San Lorenzo. The hike in is around 7.5 km round trip and steep, and howler monkeys are common along the way. Strongest in the rainy season."
                      es="Una de las cascadas mas altas de Panama, cae desde la meseta de Chorcha entre David, Gualaca y San Lorenzo. La caminata es de unos 7.5 km ida y vuelta y es empinada, y es comun escuchar monos aulladores. Mas caudalosa en epoca de lluvias."
                    />
                  </p>
                  <ul className="tour-facts">
                    <li>
                      <T
                        en="Full day from Boquete"
                        es="Dia completo desde Boquete"
                      />
                    </li>
                    <li>
                      <T
                        en="Steep hike, about 400 m of climbing"
                        es="Caminata empinada, unos 400 m de ascenso"
                      />
                    </li>
                    <li>
                      <T
                        en="Views over the Gulf of Chiriqui"
                        es="Vistas al Golfo de Chiriqui"
                      />
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt">
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
                <h3>
                  <T en="Coffee farm visits" es="Fincas de cafe" />
                </h3>
                <p>
                  <T
                    en="Pickup and return for tastings and farm tours around Boquete."
                    es="Recogida y retorno para catas y visitas a fincas."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">Water</span>
                <h3>
                  <T en="Hot springs" es="Aguas termales" />
                </h3>
                <p>
                  <T
                    en="Private transportation for a relaxed day trip outside town."
                    es="Transporte privado para un paseo relajado fuera del pueblo."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">Trail</span>
                <h3>
                  <T en="Hikes and viewpoints" es="Senderos y miradores" />
                </h3>
                <p>
                  <T
                    en="Schedule pickup for morning hikes, viewpoints, and return rides."
                    es="Coordine recogida para caminatas, miradores y regreso."
                  />
                </p>
              </article>
              <article className="card">
                <span className="mini-label">Day trip</span>
                <h3>
                  <T en="Chiriqui day trips" es="Paseos por Chiriqui" />
                </h3>
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

        <section className="section">
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
                  en="Message on WhatsApp with your dates, group size, and which destination you want, and you get a fixed USD price for the ride."
                  es="Escriba por WhatsApp con sus fechas, tamano del grupo y el destino que quiere, y recibe un precio fijo en USD por el viaje."
                />
              </p>
              <div className="cta-row">
                <a className="solid-button" href={CONTACT.whatsapp}>
                  <T en="Plan a tour ride" es="Planear un tour" />
                </a>
              </div>
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
        {/* Booking and rates pages on hold until the client asks for them.
        <div>
          <h3>Book</h3>
          <Link href="/book-now">Booking form</Link>
          <Link href="/rates">Fixed USD rates</Link>
        </div> */}
      </SiteFooter>
    </>
  );
}
