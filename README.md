# Zihntech Landing Showcase

This is my first React project: a one-page portfolio built from 11 small components and styled with Tailwind only. It shows what I am learning at Zihntech Academy, the projects I have built so far, and where to find my code.

## Live site

(https://zihntech-landing-showcase.vercel.app)

## Run it

Needs Node.js.

```bash
git clone https://github.com/muhammad-hussein-ui/zihntech-landing-showcase.git
cd zihntech-landing-showcase
npm install
npm run dev
```

Then open the address shown in the terminal, usually http://localhost:5173.

## Built with

React, Vite and Tailwind CSS v4.

## Components

| Component    | What it does                                                | Where it is used                            |
| ------------ | ----------------------------------------------------------- | ------------------------------------------- |
| App          | Assembles the page from the components below                | main.jsx                                    |
| Navbar       | Brand name and navigation links                             | App                                         |
| Hero         | Headline, short introduction and two buttons                | App                                         |
| Button       | A link styled as a button; takes `label` and `href` props   | Hero (2), PricingCard (3), CallToAction (1) |
| Skills       | Section holding three skill cards                           | App                                         |
| SkillCard    | One skill; takes `title` and `text` props                   | Skills (3)                                  |
| Projects     | Section holding three project cards                         | App                                         |
| ProjectCard  | One project; takes `title`, `description` and `tools` props | Projects (3)                                |
| Pricing      | Section holding three sample service packages               | App                                         |
| PricingCard  | One package; takes `name`, `price` and `summary` props      | Pricing (3)                                 |
| CallToAction | Closing section with a link to GitHub                       | App                                         |
| Footer       | Copyright line with the current year                        | App                                         |

## Folder structure

```
src/
├── main.jsx
├── App.jsx
├── index.css          (only @import "tailwindcss";)
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Button.jsx
    ├── Skills.jsx
    ├── SkillCard.jsx
    ├── Projects.jsx
    ├── ProjectCard.jsx
    ├── Pricing.jsx
    ├── PricingCard.jsx
    ├── CallToAction.jsx
    └── Footer.jsx
```

## Notes

- The prices in the Pricing section are placeholders written for this assignment.
- The project cards use colour blocks where screenshots could go.
- Four components take props, which was the optional challenge in the assignment brief.
