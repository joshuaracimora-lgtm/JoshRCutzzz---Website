# JoshRCutz — Barber Portfolio

A bold, high-impact portfolio site for **Joshua Racimora**, a Bay Area barber specializing in precision cuts, clean fades, and sharp lines. Built to feel less like a business card and more like a statement — barbershop meets streetwear brand.

🔗 **Live:** [joshrcutzz.lovable.app](https://joshrcutzz.lovable.app)

---

## ✂️ About

JoshRCutz is a single-page portfolio designed to do one thing exceptionally well: convert visitors into booked chairs. Every section is intentional — no filler, no fluff.

- **Hero** — Oversized typographic statement with the shop location front and center
- **Featured Cuts** — Auto-advancing gallery showcasing real client work
- **Mission** — Joshua's philosophy: consultant first, barber second
- **Contact** — Direct booking through Instagram, phone, and email

---

## 🎨 Design System

A confident, commanding visual identity built around a tight palette and heavy typography.

| Element | Spec |
|---|---|
| **Display Font** | Bebas Neue / Anton — heavy, uppercase, impactful |
| **Body Font** | Inter (500–900) — confident, never soft |
| **Background** | Deep charcoal `oklch(0.14 0.005 60)` |
| **Accent** | Signature gold `oklch(0.82 0.17 82)` |
| **Foreground** | Warm cream `oklch(0.96 0.012 85)` |
| **Borders** | Bold 4px gold dividers between every section |

All colors are tokenized as CSS variables in `src/styles.css` — no hardcoded hex values in components.

---

## 🛠️ Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19, SSR-ready)
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4 (native CSS `@theme` tokens)
- **Routing:** File-based via TanStack Router
- **Icons:** Lucide React
- **Deployment:** Cloudflare Workers (edge)
- **Platform:** [Lovable](https://lovable.dev)

---

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun dev

# Build for production
bun run build
```

The dev server runs on `http://localhost:8080`.

---

## 📁 Project Structure

```
src/
├── routes/
│   ├── __root.tsx        # Root layout, meta, fonts
│   └── index.tsx         # Hero, Gallery, About, Contact
├── assets/
│   ├── logo-mark.png     # Barber mark next to JoshRCutz wordmark
│   └── photo-*.png       # Featured Cuts gallery images
├── styles.css            # Design tokens + global styles
└── router.tsx            # TanStack Router config
```

---

## 📸 Updating the Gallery

The Featured Cuts carousel pulls from the `gallery` array in `src/routes/index.tsx`:

```tsx
const gallery = [photo1, photo3, photo4, photo5, photo6, photo7, photo8];
```

To add a photo: drop it in `src/assets/`, import it at the top of `index.tsx`, and append it to the array. The carousel auto-rotates every 4 seconds with a 1.5s crossfade.

---

## 📞 Contact

- **Instagram:** [@JoshR.Cutzzz](https://instagram.com/JoshR.Cutzzz)
- **Phone:** 925.339.2761
- **Email:** joshuaracimora@gmail.com
- **Location:** 759 Anderson Road, Davis, CA 95616

---

## 📄 License

© Joshua Racimora. All rights reserved. Site content, photography, and branding are not licensed for reuse.

---

*Built with [Lovable](https://lovable.dev) — precision in pixels, like the cuts.*
