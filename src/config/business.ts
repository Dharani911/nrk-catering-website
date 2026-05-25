export const business = {
  name: "NRK Catering",
  tagline: "Authentic Tamil Nadu Catering for Memorable Celebrations",
  location: "Vignesh Avenue, 2/239 - 8, 2nd St, Karuppayurani, Madurai, Tamil Nadu 625020, India",
  serviceArea: "Serving weddings, family functions, corporate events, and traditional celebrations across Tamil Nadu",
  phoneDisplay: "+91 95666 58376",
  whatsappNumber: "919566658376",
  email: "nrkcatering@gmail.com",
  instagram: "https://www.instagram.com/nrkcatering/",
};

export function buildWhatsAppLink(message = "Hello NRK Catering, I would like to enquire about catering service for an event.") {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
