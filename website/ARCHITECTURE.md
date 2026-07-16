# Unity Architecture Portal

## Purpose

The Unity Architecture Portal is the public entry point into the Unity Architecture ecosystem.

Its goals are:

- Teach professional Unity architecture.
- Present the Toolkit.
- Sell handbook chapters.
- Document the framework.
- Grow without architectural rewrites.

The website follows the same engineering philosophy as the Unity Architecture Toolkit.

---

# Core Principles

## 1. Composition over implementation

Pages compose components.

Components implement presentation.

Example:

MainLayout
└── Section
    └── Container
        └── Hero

---

## 2. Single Responsibility

Every component has one responsibility.

Examples:

MainLayout
- Application shell

Header
- Navigation

Footer
- Footer content

Container
- Horizontal layout

Section
- Vertical spacing

Hero
- Hero presentation

Button
- Button rendering

---

## 3. Dependency Direction

Dependencies always flow downward.

Page
↓
Layout
↓
Section
↓
UI

Never the opposite.

---

## 4. Components receive data

Pages decide WHAT to display.

Components decide HOW to display it.

Example:

<Hero
    title="Unity Architecture"
    description="Opinionated architecture..."
/>

Never hardcode page content inside reusable components.

---

## 5. Reuse first

If something is used twice, consider making it a reusable component.

Examples:

Button

Card

Badge

Section

Container

---

## 6. Layout components never belong inside presentation components

Correct:

Page
└── Container
    └── Hero

Incorrect:

Hero
└── Container

The page owns composition.

---

## 7. Styling

No inline styles.

No duplicated styles.

Shared styling belongs to reusable components.

---

## Folder Structure

src/

components/
    layout/
    navigation/
    sections/
    ui/

layouts/

pages/

styles/

assets/

---

## Long-Term Goal

The website should evolve into a complete developer portal containing:

- Documentation
- Learning platform
- Store
- Toolkit explorer
- Package documentation
- Roadmap
- Developer resources

without changing the underlying architecture.