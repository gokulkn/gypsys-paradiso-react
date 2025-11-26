# React Migration Walkthrough

I have successfully migrated your website from HTML/CSS/JS to a modern React application using Vite.

## Project Structure

The new project is located in `React Website/`.

```
React Website/
├── public/
│   └── images/       # All your original images
├── src/
│   ├── components/   # React components for each section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Reviews.jsx
│   │   └── ...
│   ├── App.jsx       # Main application layout
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles (ported from styles.css)
├── index.html        # HTML entry point
├── package.json      # Dependencies
└── vite.config.js    # Build configuration
```

## How to Run

Since I set up the project files but cannot run the installation commands in your environment, please follow these steps:

1.  Open your terminal in the `React Website` folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the link shown in the terminal (usually `http://localhost:5173`) to see your React site.

## Key Changes & Improvements

*   **Componentization**: Each section (Hero, Reviews, etc.) is now a separate file. This makes it much easier to edit specific parts without scrolling through a huge HTML file.
*   **React Hooks**:
    *   `useEffect` is used for the scroll animations and parallax effects.
    *   `useState` is used for the Lightbox and Mobile Menu (if added later).
    *   `useRef` is used for the Review section scrolling.
*   **Performance**: The map now loads lazily with a React state to show the loader until it's ready.
*   **Maintainability**: If you want to change the "Book Stay" link, you only change it in `Navbar.jsx` and `Footer.jsx`, or you could even make a shared constant.

## Next Steps

*   **Deployment**: You can deploy this easily to Vercel or Netlify by connecting your GitHub repository.
*   **Dynamic Content**: You can now easily fetch reviews or gallery images from an API or a CMS (like Sanity or Strapi) instead of hardcoding them.
