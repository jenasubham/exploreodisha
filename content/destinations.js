// ============================================================
// DESTINATIONS
// Each block is one card and its About page.
//
// name        Shown on the card and as the page title
// category    Short label, e.g. "Heritage"
// location    District or town, used by the search filter
// description One line shown on the card
// about       Paragraph shown on the About page
// highlights  Bullet list shown on the About page
// photo       What the photo should show (shown until an image is added)
// image       Path to the photo, e.g. "/images/destinations/puri.jpg".
//             Illustrated pictures are included. To use a real photo, drop it in
//             public/images/destinations/ and change this path (jpg, png, webp or svg).
//             Set to "" to show the coloured placeholder instead.
// colors      Two hex colours for the package card gradient
// ============================================================

export const destinations = [
  {
    name: "Puri",
    category: "Beach & pilgrimage",
    location: "Puri",
    description: "Jagannath Temple, a wide golden beach and the Rath Yatra town.",
    about:
      "Puri is one of India's four Char Dham pilgrimage sites, home to the 12th-century Jagannath Temple. Its wide golden beach and the Rath Yatra festival, when the deities are pulled through the streets on giant chariots, draw visitors from across the country.",
    highlights: ["Jagannath Temple", "Golden beach", "Rath Yatra festival"],
    photo: "Jagannath Temple and the golden beach",
    image: "/images/destinations/puri.jpg",
    colors: ["#e58f5a", "#1b6f8a"],
  },
  {
    name: "Konark",
    category: "Heritage",
    location: "Puri",
    description: "The 13th-century Sun Temple and its stone chariot wheels.",
    about:
      "The Sun Temple at Konark was built in the 13th century as a giant chariot for Surya, the sun god. Its carved stone wheels are among the most photographed features in Odisha.",
    highlights: ["Sun Temple", "Carved stone wheels", "Chandrabhaga beach nearby"],
    photo: "Konark Sun Temple and its stone wheel",
    image: "/images/destinations/konark.jpg",
    colors: ["#d9a441", "#8a4b2a"],
  },
  {
    name: "Chilika Lake",
    category: "Lakes & wildlife",
    location: "Puri",
    description: "Asia’s largest brackish lagoon with dolphins and migratory birds.",
    about:
      "Chilika is Asia's largest brackish-water lagoon, spread across three districts. Boats take visitors out to see Irrawaddy dolphins, and the lagoon fills with migratory birds in winter.",
    highlights: ["Irrawaddy dolphins", "Migratory birds in winter", "Boat rides"],
    photo: "Chilika lagoon with a boat",
    image: "/images/destinations/chilika.jpg",
    colors: ["#2c8aa3", "#1f4a3a"],
  },
  {
    name: "Daringbadi",
    category: "Hill station",
    location: "Kandhamal",
    description: "Odisha’s “Kashmir”: pine forests, coffee and cool winters.",
    about:
      "Daringbadi sits at about 1,000 metres in the Kandhamal hills, where pine forests and coffee estates keep the climate cool. It is often called the Kashmir of Odisha.",
    highlights: ["Pine forest walks", "Coffee estates", "Cool winter weather"],
    photo: "Pine forest in Daringbadi",
    image: "/images/destinations/daringbadi.jpg",
    colors: ["#4f8f6b", "#1f4a3a"],
  },
  {
    name: "Deomali",
    category: "Mountain",
    location: "Koraput",
    description: "Odisha’s highest peak with sweeping views over the Eastern Ghats.",
    about:
      "Deomali is the highest peak in Odisha, at around 1,670 metres. On a clear day the viewpoint at the top looks out over the Eastern Ghats.",
    highlights: ["Summit viewpoint", "Eastern Ghats views", "Hill road drive"],
    photo: "Deomali peak and hill views",
    image: "/images/destinations/deomali.jpg",
    colors: ["#6a8f7a", "#2a4b5a"],
  },
  {
    name: "Bhitarkanika",
    category: "Wildlife",
    location: "Kendrapara",
    description: "Mangrove creeks, saltwater crocodiles and Olive Ridley nesting nearby.",
    about:
      "Bhitarkanika is one of India's largest mangrove forests, with tidal creeks, saltwater crocodiles and rich birdlife. The nearby Gahirmatha beach is a major nesting site for Olive Ridley sea turtles.",
    highlights: ["Mangrove boat safari", "Saltwater crocodiles", "Olive Ridley turtles nearby"],
    photo: "Mangrove creek with a crocodile",
    image: "/images/destinations/bhitarkanika.jpg",
    colors: ["#2f7d5a", "#173d2f"],
  },
  {
    name: "Similipal",
    category: "Wildlife",
    location: "Mayurbhanj",
    description: "Tiger reserve with sal forest, grasslands and Barehipani falls.",
    about:
      "Similipal is a tiger reserve in the Mayurbhanj hills, covering sal forest, grasslands and waterfalls. Barehipani, one of its best-known falls, is reached on a forest road.",
    highlights: ["Jungle safari", "Barehipani falls", "Forest stays"],
    photo: "Sal forest and a waterfall in Similipal",
    image: "/images/destinations/similipal.jpg",
    colors: ["#3f7a3a", "#1d3a1f"],
  },
  {
    name: "Koraput",
    category: "Tribal culture",
    location: "Koraput",
    description: "Tribal markets, coffee hills and the Gupteswar cave temple.",
    about:
      "Koraput is home to many tribal communities, whose weekly markets sell local produce and crafts. The district is also known for its coffee hills and the Gupteswar cave shrine.",
    highlights: ["Weekly tribal market", "Coffee hills", "Gupteswar cave"],
    photo: "Tribal market in Koraput",
    image: "/images/destinations/koraphut.jpg",
    colors: ["#a5733e", "#4a3a2a"],
  },
  {
    name: "Satkosia",
    category: "Gorge & river",
    location: "Angul",
    description: "Mahanadi gorge with boating, gharials and forest camps.",
    about:
      "Satkosia is a gorge where the Mahanadi river cuts through forested hills. Visitors can take boat rides, look for gharials and stay in forest camps.",
    highlights: ["Boat rides", "Gharials", "Forest camps"],
    photo: "Mahanadi gorge at Satkosia",
    image: "/images/destinations/satkosia.jpg",
    colors: ["#3b8d83", "#1f4a3a"],
  },
  {
    name: "Chandipur",
    category: "Beach",
    location: "Balasore",
    description: "The beach where the sea retreats several kilometres at low tide.",
    about:
      "Chandipur beach near Balasore is known for its tides. At low tide the sea can pull back several kilometres, leaving flat sand to walk on.",
    highlights: ["Low-tide walks", "Sea retreat", "Sand walks"],
    photo: "Chandipur beach at low tide",
    image: "/images/destinations/chandipur.jpg",
    colors: ["#4aa0b8", "#1b6f8a"],
  },
  {
    name: "Balasore",
    category: "Heritage",
    location: "Balasore",
    description: "Temple town with Emami, Panchalingeswar and the Khirachora Gopinath temple at Remuna.",
    about:
      "Balasore is a good base for a temple-focused trip in northern Odisha. Remuna's Khirachora Gopinath Temple is one of the best-known Vaishnav shrines in the state, and Nilagiri's Jagannath Temple and Kuldiha Wildlife Sanctuary round out a short stay.",
    highlights: [
      "Khirachora Gopinath Temple",
      "Panchalingeswar Temple",
      "Emami Temple",
      "Nilagiri Jagannath Temple",
      "Kuldiha Wildlife Sanctuary",
    ],
    photo: "Khirachora Gopinath Temple, Remuna",
    image: "",
    colors: ["#c9873a", "#8a4b1b"],
  },
  {
    name: "Panchalingeswar Temple",
    category: "Temple and Mountain",
    location: "Balasore",
    description: "Panchalingeswar is a famous Shiva temple on a green hill in Balasore, Odisha.",
    about:
      "Panchalingeswar is a famous Hindu shrine and scenic picnic spot located on a hillock in the Nilagiri hills of Balasore district, Odisha.",
    highlights: ["Five Holy Stones", "Perennial Stream", "Unique Worship"],
    photo: "Panchalingeswar Temple",
    image: "/images/destinations/Panchulineswer.jpg",
    colors: ["#3b8d83", "#1f4a3a"],
  },
  {
    name: "Khirachora Gopinath Temple",
    category: "Temple",
    location: "Balasore",
    description: "Colourful Hindu temple featuring a courtyard & a pond, plus multiple paintings & statues of deities.",
    about:
      "Khirachora Gopinath Temple is a revered 13th-century Vaishnavite shrine in Remuna, Balasore, dedicated to Lord Krishna in his form as Gopinatha.",
    highlights: [
      "The Bas-Relief Gopinatha Idol",
      "Amruta Keli (Sweetened Milk Prasad)",
      "Gaudiya Vaishnava Samadhis & Footprints",
    ],
    photo: "Khirachora Gopinath Temple",
    image: "/images/destinations/khirichora Temple.jpg",
    colors: ["#3b8d83", "#1f4a3a"],
  },
  {
    name: "Kuldiha Wildlife Sanctuary",
    category: "Wildlife",
    location: "Balasore",
    description: "A forest sanctuary in Balasore with sal trees, elephants and birdlife.",
    about:
      "Kuldiha Wildlife Sanctuary is a forested sanctuary in Balasore district. Its sal forest is home to elephants, deer and many bird species, and it is a quiet nature stop on a Balasore trip.",
    highlights: ["Forest walks", "Elephants and deer", "Birdwatching"],
    photo: "Kuldiha Wildlife Sanctuary",
    image: "/images/destinations/Kuldhia.jpg",
    colors: ["#3b8d83", "#1f4a3a"],
  },
  {
    name: "Emami Jagannath Temple",
    category: "Temple",
    location: "Balasore",
    description: "A modern stone-carved Hindu temple in Balgopalpur, near Remuna in Balasore.",
    about:
      "Emami Jagannath Temple is a modern stone-carved Hindu temple located in Balgopalpur, near Remuna in the Balasore district of Odisha. Built by the Emami Group and inaugurated in November 2015, it was designed by the renowned sculptor Padma Vibhushan Raghunath Mohapatra.",
    highlights: ["Architectural Design", "Deities & Shrines", "Rituals & Atmosphere"],
    photo: "Emami Temple",
    image: "/images/destinations/Emami Temple.jpg",
    colors: ["#3b8d83", "#1f4a3a"],
  },
  {
    name: "Nilagiri Jagannath Temple",
    category: "Temple",
    location: "Balasore",
    description: "A historic Jagannath temple at the foothills of the Swarnachuda hills, next to the Nilagiri Royal Palace.",
    about:
      "Nilagiri Sri Jagannath Mandir is one of northern Odisha's most revered Jagannath temples, nestled peacefully at the foothills of the Swarnachuda hills in Nilagiri, Balasore district. Built by King Harichandan of the Nilagiri royal dynasty, the shrine serves as a historic cultural and spiritual landmark right next to the Nilagiri Royal Palace (Rajbati).",
    highlights: ["Royal Patronage", "Kalinga Design", "Deities & Complex"],
    photo: "Nilagiri Temple",
    image: "/images/destinations/Nilagiri Temple.jpg",
    colors: ["#3b8d83", "#1f4a3a"],
  },
];