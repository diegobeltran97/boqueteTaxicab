import { T } from "@/components/T";
import {
  getGoogleReviews,
  GOOGLE_REVIEWS_URL,
  relativeDate,
  REVIEW_LIMIT,
  type GoogleReview,
} from "@/lib/reviews";

/**
 * Shown until FEATURABLE_WIDGET_ID is set (see `src/lib/reviews.ts`). These are
 * deliberately marked as placeholders — never ship invented reviews.
 */
const PLACEHOLDER_REVIEWS = [
  {
    en: "Replace with a verified review about the driver waiting at David Airport with a sign.",
    es: "Reemplazar con una opinion real sobre el conductor esperando en David con letrero.",
  },
  {
    en: "Replace with a verified review about English communication and a clean vehicle.",
    es: "Reemplazar con una opinion real sobre comunicacion en ingles y vehiculo limpio.",
  },
  {
    en: "Replace with a verified review about a fixed price from David Airport to Boquete.",
    es: "Reemplazar con una opinion real sobre precio fijo desde David a Boquete.",
  },
];

/** The Google "G", for attribution next to the rating. */
function GoogleMark() {
  return (
    <svg className="google-mark" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <p className="review-stars" role="img" aria-label={`${rating} / 5`}>
      {"★★★★★".slice(0, rating)}
      <span className="review-stars-empty">{"★★★★★".slice(rating)}</span>
    </p>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const en = review.publishedAt ? relativeDate(review.publishedAt, "en") : null;
  const es = review.publishedAt ? relativeDate(review.publishedAt, "es") : null;

  return (
    <article className="testimonial review-card">
      {review.rating !== null && <Stars rating={review.rating} />}
      <p>{review.text}</p>
      {review.originalText && (
        <p className="review-note">
          <T en="Translated by Google" es="Traducido por Google" />
        </p>
      )}
      <div className="review-meta">
        {review.photo ? (
          <img
            className="review-avatar"
            src={review.photo}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="review-avatar review-avatar-blank" aria-hidden="true">
            {review.author.slice(0, 1).toUpperCase()}
          </span>
        )}
        <span className="review-author">
          {review.author}
          {en && es && (
            <span className="review-date">
              <T en={en} es={es} />
            </span>
          )}
        </span>
      </div>
    </article>
  );
}

/**
 * Home page reviews section. Server-rendered, so the review text is in the HTML
 * Google crawls. No `aggregateRating`/`Review` JSON-LD on purpose: reviews about
 * this business, hosted on its own site, are "self-serving" and ineligible for
 * star rich results.
 */
export async function GoogleReviews() {
  const data = await getGoogleReviews();

  return (
    <section className="section">
      <div className="section-inner">
        <p className="eyebrow">
          <T en="Traveler reviews" es="Opiniones de viajeros" />
        </p>
        <h2 className="section-title">
          {data ? (
            <T
              en="What travelers say after the ride."
              es="Lo que dicen los viajeros despues del viaje."
            />
          ) : (
            <T
              en="Use verified Google reviews here."
              es="Use opiniones verificadas de Google aqui."
            />
          )}
        </h2>

        {data?.averageRating !== null && data?.averageRating !== undefined && (
          <p className="reviews-summary">
            <GoogleMark />
            <strong>{data.averageRating.toFixed(1)}</strong>
            <T
              en={`from ${data.totalReviewCount} Google reviews`}
              es={`de ${data.totalReviewCount} opiniones en Google`}
            />
          </p>
        )}

        <div className="testimonial-grid reviews-grid">
          {data
            ? data.reviews
                .slice(0, REVIEW_LIMIT)
                .map((review) => <ReviewCard key={review.id} review={review} />)
            : PLACEHOLDER_REVIEWS.map((placeholder) => (
                <article className="testimonial" key={placeholder.en}>
                  <h3>Google review placeholder</h3>
                  <p>
                    <T en={placeholder.en} es={placeholder.es} />
                  </p>
                </article>
              ))}
        </div>

        <div className="cta-row">
          <a
            className="outline-button"
            href={data?.reviewsUrl ?? GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <T en="View Google reviews" es="Ver resenas en Google" />
          </a>
        </div>
      </div>
    </section>
  );
}
