# Karishma Rajput — Portfolio

A personal portfolio website for **Karishma Rajput**, a Software Developer and Data Science Engineer (B.Tech CSE — Data Science, NSUT Delhi). Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

---

## Features

- **Terminal-style hero** with a typing animation that introduces name, focus areas, and availability
- **Sticky navigation** with scroll-based active-section highlighting and a mobile hamburger menu
- **Scroll-reveal animations** for sections and cards as you scroll
- **Animated stat counters** and **animated skill progress bars**
- **Tech stack, experience timeline, projects, coding profiles, skills, achievements, education, services, and contact sections**
- Fully **responsive** across desktop, tablet, and mobile
- Respects `prefers-reduced-motion` for accessibility
- No dependencies — pure HTML/CSS/JS

## Tech Stack

| Category | Tools |
|---|---|
| Markup & Styling | HTML5, CSS3 (custom properties, Grid, Flexbox) |
| Scripting | Vanilla JavaScript (Intersection Observer API) |
| Fonts | [Fraunces](https://fonts.google.com/specimen/Fraunces), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

## Project Structure

```
.
├── index.html      # Page markup and content
├── style.css       # Design system, layout, and animations
├── script.js       # Nav behavior, scroll reveals, counters, terminal animation
├── resume.pdf      # Downloadable résumé (linked from the Resume button)
└── profile.jpg     # Optional — add your own photo here (see below)
```

## Running Locally

No build tools required. Either:

1. **Open directly** — double-click `index.html` to open it in your browser, or
2. **Serve locally** (recommended, avoids any local file restrictions):

   ```bash
   # Python
   python3 -m http.server 8000

   # Node (if you have npx)
   npx serve .
   ```

   Then visit `http://localhost:8000`.


## Customization

- **Colors & fonts:** all defined as CSS custom properties at the top of `style.css` under `:root` — change once, applies everywhere.
- **Content:** all copy lives directly in `index.html`, organized by section (`<section id="...">`) for easy editing.
- **Terminal script:** the typed lines in the hero terminal are defined in the `terminalScript` array in `script.js`.

## Contact

- **Email:** mkarishma526@gmail.com
- **GitHub:** [github.com/Pari219](https://github.com/Pari219)
- **LeetCode:** [Profile](https://share.google/ysfUr5kqgxs0OlFd2)

## License

This project is open for personal reference. If you fork or reuse the structure, please don't reuse the personal content — swap it for your own details.

---

Designed & developed by **Karishma Rajput** · © 2026
