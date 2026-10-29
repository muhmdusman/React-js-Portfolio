import React from 'react';

export default function ContactInfo({ contactInfoData }) {
  return (
    <div className="contact-info">
      {contactInfoData.map((item, index) => (
        <div
          className="contact-info-in"
          key={index}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={index * 100}
        >
          <label>{item.title}</label>
          {item.email && (
            <a href={`mailto:${item.email}`}>
              {/* <wbr> lets the long address wrap after "@" instead of overflowing the column */}
              {item.email.split('@')[0]}@<wbr />{item.email.split('@')[1]}
            </a>
          )}
          {item.tel && <a href={`tel:${item.tel}`}>{item.tel}</a>}
        </div>
      ))}
    </div>
  );
}
