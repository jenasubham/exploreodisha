// ============================================================
// TOUR PACKAGES
// "locations" lists the places covered. The first one is used for
// the card colour and the destination preselected by "Book Now".
// "itinerary" is one line per day, in order.
//
// name        Package title (also shown in the booking form dropdown)
// area        Short line under the title
// days        Number of days (should match the number of itinerary lines)
// price       Per person, in rupees. Numbers only, e.g. 12500
// category    Short label shown on the card header
// locations   Destination names from content/destinations.js (spelled exactly)
// highlights  Bullet list on the card
// itinerary   One line per day
// image       Optional photo, e.g. "/images/packages/golden-triangle.jpg".
//             Leave as "" to use the coloured gradient.
// ============================================================

export const packages = [
  {
    name: "Golden Triangle of Odisha",
    area: "Puri · Konark · Bhubaneswar",
    days: 4,
    price: 12500,
    category: "Heritage",
    image: "/images/packages/golden-triangle.jpg",
    locations: ["Puri", "Konark"],
    highlights: ["Jagannath Temple", "Sun Temple", "Lingaraj and Udayagiri"],
    itinerary: [
      "Arrive Bhubaneswar, temple tour",
      "Konark and Chandrabhaga beach",
      "Puri and Jagannath area",
      "Chilika sunrise cruise, drop",
    ],
  },
  {
    name: "Chilika & Puri Escape",
    area: "Beach and lagoon",
    days: 3,
    price: 9800,
    category: "Beach",
    image: "/images/packages/chilika-puri.jpg",
    locations: ["Chilika Lake", "Puri"],
    highlights: ["Dolphin boat ride", "Beach evening", "Local seafood"],
    itinerary: [
      "Arrive Puri",
      "Full-day Chilika boat trip",
      "Konark stop and departure",
    ],
  },
  {
    name: "Wild Odisha: Similipal & Bhitarkanika",
    area: "Wildlife",
    days: 6,
    price: 24500,
    category: "Wildlife",
    image: "/images/packages/wild-odisha.jpg",
    locations: ["Similipal", "Bhitarkanika"],
    highlights: ["Jungle safari", "Mangrove boat ride", "Forest stays"],
    itinerary: [
      "Bhubaneswar to Similipal",
      "Safari and Joranda falls",
      "Safari and Barehipani",
      "Travel to Bhitarkanika",
      "Creek boat safari",
      "Drop-off Bhubaneswar",
    ],
  },
  {
    name: "Hills & Tribal Trails",
    area: "Koraput · Daringbadi · Deomali",
    days: 5,
    price: 18900,
    category: "Mountain",
    image: "/images/packages/hills-tribal.jpg",
    locations: ["Koraput", "Daringbadi", "Deomali"],
    highlights: ["Weekly tribal market", "Coffee estates", "Deomali viewpoint"],
    itinerary: [
      "Arrive Koraput",
      "Gupteswar and tribal villages",
      "Deomali",
      "Travel to Daringbadi",
      "Pine walks, departure",
    ],
  },
  {
    name: "Balasore 360°",
    area: "Temples · Wildlife · Beach",
    days: 4,
    price: 11500, // placeholder: change to your real price
    category: "Heritage",
    locations:["Balasore"],
    image: "/images/packages/Balasore360.jpg", // or "" for the gradient
    highlights: [
      "Panchalingeswar Temple",
      "Emami Temple",
      "Khirachora Gopinath Temple",
      "Kuldiha Wildlife Sanctuary",
      "Chandipur beach",
      "Nilagiri Jagannath Temple",
    ],
    itinerary: [
      "Arrive Balasore, Emami Temple and Khirachora Gopinath Temple (Remuna)",
      "Panchalingeswar Temple and Nilagiri Jagannath Temple",
      "Kuldiha Wildlife Sanctuary safari",
      "Chandipur beach, departure",
    ],
  },
];