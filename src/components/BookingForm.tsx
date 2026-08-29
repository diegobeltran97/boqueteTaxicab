"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLang } from "@/components/LangProvider";
import { T } from "@/components/T";
import { CONTACT, WHATSAPP_NUMBER } from "@/lib/site";

export function BookingForm() {
  const { lang } = useLang();
  const [whatsappHref, setWhatsappHref] = useState(CONTACT.whatsapp);
  const [submitCount, setSubmitCount] = useState(0);
  const confirmationRef = useRef<HTMLDivElement>(null);

  // Placeholders swap with the language, like the template's data-placeholder-*.
  const ph = (en: string, es: string) => (lang === "es" ? es : en);

  useEffect(() => {
    if (submitCount === 0) return;
    confirmationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [submitCount]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "");
    const optional = (key: string) => value(key) || "N/A";

    const summary = [
      "Hello Boquete Taxi Cab, I would like to pre-book a ride.",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone/WhatsApp: ${value("phone")}`,
      `Pickup: ${value("pickup")}`,
      `Drop-off: ${value("dropoff")}`,
      `Date/time: ${value("date")} ${value("time")}`,
      `Passengers: ${value("passengers")}`,
      `Luggage: ${value("luggage")}`,
      `Flight: ${optional("flight")}`,
      `Arrival time: ${optional("arrival")}`,
      `Notes: ${optional("notes")}`,
    ].join("\n");

    setWhatsappHref(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`,
    );
    setSubmitCount((count) => count + 1);
  }

  return (
    <form className="form-panel booking-form" onSubmit={handleSubmit}>
      <div>
        <p className="eyebrow">
          <T en="Booking form" es="Formulario de reserva" />
        </p>
        <h2 className="section-title">
          <T en="Request a ride" es="Solicitar un viaje" />
        </h2>
        <p className="section-copy">
          <T
            en="This static prototype shows the flow. Final version can send to email, CRM, or WhatsApp."
            es="Este prototipo muestra el flujo. La version final puede enviar por email, CRM o WhatsApp."
          />
        </p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">
            <T en="Full name" es="Nombre completo" />
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder={ph("Jane Smith", "Nombre y apellido")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <T en="Email" es="Correo" />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={ph("jane@example.com", "correo@ejemplo.com")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">
            <T en="WhatsApp / phone" es="WhatsApp / telefono" />
          </label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            placeholder={ph("+1 or +507 number", "Numero con codigo de pais")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="passengers">
            <T en="Passengers" es="Pasajeros" />
          </label>
          <select id="passengers" name="passengers" required defaultValue="">
            <option value="">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="pickup">
            <T en="Pickup location" es="Lugar de recogida" />
          </label>
          <input
            id="pickup"
            name="pickup"
            required
            placeholder={ph(
              "David Airport, hotel, address",
              "Aeropuerto, hotel o direccion",
            )}
          />
        </div>
        <div className="form-field">
          <label htmlFor="dropoff">
            <T en="Drop-off" es="Destino" />
          </label>
          <input
            id="dropoff"
            name="dropoff"
            required
            placeholder={ph(
              "Boquete hotel or address",
              "Hotel o direccion en Boquete",
            )}
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">
            <T en="Date" es="Fecha" />
          </label>
          <input id="date" name="date" type="date" required />
        </div>
        <div className="form-field">
          <label htmlFor="time">
            <T en="Pickup time" es="Hora de recogida" />
          </label>
          <input id="time" name="time" type="time" required />
        </div>
        <div className="form-field">
          <label htmlFor="luggage">
            <T en="Luggage" es="Equipaje" />
          </label>
          <input
            id="luggage"
            name="luggage"
            required
            placeholder={ph("2 suitcases, 2 carry-ons", "2 maletas, 2 bolsos")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="flight">
            <T en="Flight number" es="Numero de vuelo" />
          </label>
          <input
            id="flight"
            name="flight"
            placeholder={ph(
              "Required for airport pickups",
              "Necesario para aeropuerto",
            )}
          />
        </div>
        <div className="form-field">
          <label htmlFor="arrival">
            <T en="Flight arrival time" es="Hora de llegada del vuelo" />
          </label>
          <input
            id="arrival"
            name="arrival"
            placeholder={ph("Example: 2:35 PM", "Ejemplo: 2:35 PM")}
          />
        </div>
        <div className="form-field full">
          <label htmlFor="notes">
            <T en="Notes" es="Notas" />
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder={ph(
              "Child seat, extra stop, special pickup instructions",
              "Silla de nino, parada extra, instrucciones especiales",
            )}
          />
          <span className="form-help">
            <T
              en="For airport pickups, include airline, flight number, and arrival time."
              es="Para aeropuerto, incluya aerolinea, vuelo y hora de llegada."
            />
          </span>
        </div>
      </div>

      <button className="solid-button" type="submit">
        <T en="Submit booking request" es="Enviar solicitud" />
      </button>

      <div
        ref={confirmationRef}
        className={`confirmation${submitCount > 0 ? " is-visible" : ""}`}
      >
        <h2>
          <T en="Request prepared" es="Solicitud preparada" />
        </h2>
        <p>
          <T
            en="This prototype has prepared your request. In the final site, this can send automatically. For now, continue on WhatsApp with one tap."
            es="Este prototipo preparo la solicitud. En el sitio final se puede enviar automaticamente. Por ahora, continue por WhatsApp."
          />
        </p>
        <a className="solid-button" href={whatsappHref}>
          <T en="Continue on WhatsApp" es="Continuar en WhatsApp" />
        </a>
      </div>
    </form>
  );
}
