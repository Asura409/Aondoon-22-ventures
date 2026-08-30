/* ANDOON 22 JEWELRY — Site configuration
   Fill in your real WhatsApp number and Facebook page link below.
   Every WhatsApp / Facebook button on the site reads from this file. */

const SITE_CONFIG = {
  // Use full international format, digits only, no + or spaces. Example: "233241234567"
  whatsappNumber: "233000000000",
  facebookUrl: "https://facebook.com/Andoon22Jewelry",
  instagramUrl: "", // leave blank to hide the Instagram button
  brandName: "Andoon 22 Jewelry"
};

function waLink(message) {
  const base = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function waProductMessage(productName) {
  return `Hello Andoon 22 Jewelry 👋\n\nI'm interested in the following item:\n\nProduct: ${productName}\n\nCould you please provide more information?`;
}
