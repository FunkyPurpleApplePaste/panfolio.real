import React from "react";

export default function TestimonialsBanner({ testimonials = [] }) {
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="pf-testimonials" style={{marginBottom:"2rem",marginTop:"-5.5rem"}}>
      <div className="pf-testimonials-track">
        {loopedTestimonials.map((t, i) => (
          <span key={i} className="pf-testimonial">
            "{t.quote}" — {t.name}
          </span>
        ))}
      </div>
    </section>
  );
}
