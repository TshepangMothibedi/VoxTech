# VoxTech

VoxTech now runs as a React website with split components.

## Run

```powershell
npm start
```

Open `http://localhost:3000`.

## Current Scope

- Public-facing React website
- Split components for hero, services, product showcase, process, proof, contact, and footer
- Embedded CRM showcase content using seeded product data
- Vite development server
- Vite development server

## Structure

- `src/main.jsx`: React entrypoint
- `src/App.jsx`: top-level website composition
- `src/components/site/`: public website sections
- `src/components/`: reusable React components and product showcase pieces
- `src/lib/`: shared formatting helpers
- `src/data.js`: seeded demo content
