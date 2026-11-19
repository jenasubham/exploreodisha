# Explore Odisha

## Run it

```bash
npm install
npm run dev        # preview at http://localhost:3000
npm run check      # checks all your content for mistakes
npm run build      # production build (runs the check first)
```

## What is in each folder

```
explore-odisha/
├─ content/        EDIT THESE: all text, prices, destinations, packages, gems
│   ├─ site.js          headings, hero text + picture, contact, button/form labels
│   ├─ destinations.js  destination cards and About pages
│   ├─ packages.js      tour packages, prices, itineraries
│   └─ gems.js          hidden gems
├─ public/images/  EDIT THESE: your pictures
│   ├─ hero/            top banner picture (hero.jpg)
│   ├─ gems/            pictures for the Hidden Gems cards
│   ├─ why/             pictures for the Why choose us cards
│   ├─ background/      pattern behind Destinations + Packages (light and dark)
│   ├─ destinations/    one picture per destination (puri.jpg, konark.jpg ...)
│   └─ packages/        one picture per package
├─ app/globals.css Colours and styling (colours are at the top)
├─ components/     Page building blocks (you normally never touch these)
├─ lib/ scripts/   Booking logic and the content checker (never touch)
└─ app/page.js, app/layout.js   Page order and fonts (rarely touched)
```

## How to update the site

Everything you see on the page comes from the `content/` folder. Open the file, edit, save. The page updates straight away in `npm run dev`. You never need to touch the `components/` or `app/` folders.

| To change...                                                            | Edit this file            |
| ----------------------------------------------------------------------- | ------------------------- |
| Headings, hero, contact, WhatsApp number, menu, "Why choose" points     | `content/site.js`         |
| Button and label text (e.g. "Book now", "Search...")                    | `content/site.js` → `ui`  |
| Booking form labels, error messages, max travellers, WhatsApp greeting  | `content/site.js` → `booking` |
| Destination cards and About pages                                       | `content/destinations.js` |
| Tour packages, prices, itineraries                                      | `content/packages.js`     |
| Hidden gems                                                             | `content/gems.js`         |
| Hero banner picture                                                     | `content/site.js` → `hero.image` |
| Background behind Destinations + Packages                               | files in `public/images/background/`, or `content/site.js` → `background` |
| Colours (green, gold, ocean...)                                         | top of `app/globals.css`  |

## Safety check

`npm run check` reads every content file and tells you in plain words if something is wrong, for example:

- a package uses a destination name that doesn't exist (spelling)
- a price has quotes or a ₹ sign
- a photo path points to a file that isn't in `public/`
- the WhatsApp number is in the wrong format, or is still the sample number
- two destinations or packages share a name

It runs automatically before `npm run dev` and `npm run build`, so a typo can't reach the live site.

## Common changes

**Change the WhatsApp number:** in `content/site.js`, set `whatsappNumber` (country code + number, no `+` or spaces, e.g. `"919876543210"`). **The sample number must be replaced before going live.**

**Change a photo:** replace the file in `public/images/destinations/` with a new one of the same name (e.g. `puri.jpg`), or save it under a new name and update that destination's `image` in `content/destinations.js`. Wide photos about 1200 pixels across work best.

**Koraput** still uses a drawn picture (`koraput.svg`). Save a photo as `koraput.jpg` and set its `image` to `"/images/destinations/koraput.jpg"`.

**Change the top banner picture:** replace `public/images/hero/hero.jpg`, or change `hero.image` in `content/site.js`.

**Add a photo to a package:** same idea, using `public/images/packages/` and the package's `image` field. Leave `""` to keep the coloured gradient.

**Add a destination:** copy one block in `content/destinations.js`, paste it at the end, change the fields. It appears in the list, the filters and the booking dropdown automatically.

**Add a package:** copy a block in `content/packages.js`. Each name in `locations` must match a destination name exactly.

**Change a price:** edit `price` in `content/packages.js` (rupees, numbers only).

**Add a day to a package:** add a line to `itinerary` and raise `days` by one.

**Change a menu link:** edit `navLinks` in `content/site.js`. Add `footer: true` to also show it under "Quick links".

**Remove something:** delete its block from the file.

## Deploy

Push the folder to GitHub, then import it into [Vercel](https://vercel.com). It detects Next.js automatically.

## Notes

- Enquiries are sent through WhatsApp with a pre-filled message. Nothing is stored on a server.
- Prices and availability are samples. The site says your team confirms them after an enquiry.
