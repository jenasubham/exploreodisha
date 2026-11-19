// ============================================================
// SITE TEXT AND CONTACT DETAILS
// Every word you see on the page comes from the content/ folder.
// Change the text between the quotes, save, and the site updates.
// Do not remove the {curly} placeholders: they are filled in automatically.
// ============================================================

export const site = {
  name: "Explore Odisha",
  tagline: "Discover the Beauty Beyond Destinations.",
  description:
    "Beaches, temples, wildlife and waterfalls across Odisha. Browse destinations and tour packages and send a booking enquiry.",

  // WhatsApp number for enquiries: country code + number, no "+" or spaces.
  // IMPORTANT: replace this sample number before going live.
  whatsappNumber: "9810552367",
  email: "hello@exploreodisha.ex",
  address: "Bhubaneswar, Odisha, India",
  copyright: "© 2026 Explore Odisha. All rights reserved.",

  // Top menu. Set footer: true to also list a link under "Quick links" in the footer.
  navLinks: [
    { label: "Destinations", href: "#destinations", footer: true },
    { label: "Tour Packages", href: "#packages", footer: true },
    { label: "Hidden Gems", href: "#gems", footer: true },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    // Background picture for the top banner. Replace the file in
    // public/images/hero/ or change this path. Set to "" for the sunset artwork.
    image: "/images/hero/hero.jpg",
    title: "Discover the Untouched Beauty of Odisha",
    text: "Explore beaches, mountains, temples, waterfalls and unforgettable experiences.",
  },

  // Background behind "Popular destinations" and "Featured tour packages".
  // The picture files live in public/images/background/. To change the look,
  // replace those files (keep the names) or point to your own files here.
  //   fit: "tile"  repeats a small pattern (the default artwork)
  //   fit: "cover" stretches one photo over the whole section
  // Set a path to "" to show a plain colour for that mode.
  background: {
    light: "/images/background/pattern-light.svg", // used in light mode
    dark: "/images/background/pattern-dark.svg", //   used in dark mode
    fit: "tile",
  },

  destinationsTitle: "Popular destinations",
  destinationsIntro:
    "From the Konark sun temple to the mangrove creeks of Bhitarkanika.",

  packagesTitle: "Featured tour packages",
  packagesIntro:
    "Sample packages and prices. Final price and availability are confirmed by our team after your enquiry.",

  whyTitle: "Why choose Explore Odisha",
  whyIntro: "A local team that plans trips around what you want to see.",
  // Each card can have a picture (file in public/images/why/). "" shows a coloured placeholder.
  whyReasons: [
    {
      title: "Local travel experiences",
      image: "/images/why/local-experiences.svg",
      colors: ["#e0a04a", "#7a3a22"],
      photo: "Village stay and boat ride",
      text: "Village stays, temple walks and boat rides led by people who live there.",
    },
    {
      title: "Affordable packages",
      image: "/images/why/affordable.svg",
      colors: ["#3f8f6a", "#1d4a3a"],
      photo: "Clear, fair prices",
      text: "Clear per-person pricing with inclusions and exclusions listed.",
    },
    {
      title: "Trusted travel partners",
      image: "/images/why/trusted-partners.svg",
      colors: ["#2a6f9a", "#1d3a5a"],
      photo: "Hotels, drivers and guides we trust",
      text: "Hotels, drivers and guides we work with repeatedly.",
    },
    {
      title: "Customised itineraries",
      image: "/images/why/customised.svg",
      colors: ["#d9a441", "#8a4b2a"],
      photo: "Your route, your dates",
      text: "Tell us your dates and budget and we adjust the plan.",
    },
    {
      title: "Local destination knowledge",
      image: "/images/why/local-knowledge.svg",
      colors: ["#4f8f7a", "#1f4a3a"],
      photo: "Seasons, permits and roads",
      text: "Seasons, permits and road conditions explained before you go.",
    },
  ],

  gemsTitle: "Hidden gems of Odisha",
  gemsIntro: "Quieter places worth the detour.",

  // ----------------------------------------------------------
  // BUTTONS AND LABELS
  // ----------------------------------------------------------
  ui: {
    headerButton: "Book Your Trip",
    heroPrimaryButton: "Explore Destinations",
    heroSecondaryButton: "Plan Your Trip",

    searchPlaceholder: "Search by name or location",
    searchLabel: "Search destinations",
    allCategories: "All categories",
    allLocations: "All locations",
    noResults: "No destinations match. Clear a filter or try another name.",
    aboutButton: "About {name}", //     {name} = destination name
    backButton: "← Back to destinations",
    enquireButton: "Enquire about {name}", // {name} = destination name

    packageFrom: "From",
    packagePerPerson: "per person",
    packageDays: "{days} days · {category}", // text on the package card header
    itineraryTitle: "Day-by-day itinerary",
    bookNowButton: "Book now",
    carouselLabel: "Tour packages, scroll or use arrow keys",
    previousPackage: "Previous package",
    nextPackage: "Next package",
    showPackage: "Show package {number}",

    footerContactTitle: "Contact",
    footerLinksTitle: "Quick links",
    footerWhatsApp: "Chat on WhatsApp",
  },

  // ----------------------------------------------------------
  // BOOKING FORM
  // ----------------------------------------------------------
  booking: {
    title: "Send a booking enquiry",
    note: "This is an enquiry, not a confirmed booking. Our team will contact you to confirm.",

    nameLabel: "Full name",
    phoneLabel: "Phone",
    emailLabel: "Email",
    destinationLabel: "Destination",
    destinationNone: "Not sure yet",
    packageLabel: "Package",
    packageNone: "Custom trip",
    dateLabel: "Travel date",
    travellersLabel: "Travellers",
    passengerName: "Passenger {number} name",
    passengerAge: "Age",
    requirementsLabel: "Special requirements",

    submitButton: "Send on WhatsApp",
    closeButton: "Close",
    readyText: "Your enquiry is ready.",
    openLink: "Open WhatsApp to send it",
    afterLink: ". Nothing is booked until our team confirms.",

    // Limits for the form.
    maxTravellers: 10,

    // Error messages.
    errors: {
      name: "Enter your full name.",
      phone: "Enter a valid phone number.",
      email: "Enter a valid email address.",
      passengers: "Enter a name and an age (0–120) for each passenger.",
    },

    // Start of the WhatsApp message the customer sends you.
    messageIntro: "Hello {siteName}, I'd like to enquire about a trip.",
  },
};
