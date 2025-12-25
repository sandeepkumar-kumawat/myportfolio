# Sandeep Kumar Kumawat - Academic Portfolio

This projects creates a professional, academic-leaning portfolio website built with Vite, React, and Tailwind CSS.
It is designed for a postgraduate student in biotechnology/bioinformatics.

## 🧱 Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx    # Sticky navigation
│   ├── Hero.jsx      # Introduction & CTAs
│   ├── About.jsx     # Biography & research interests
│   ├── Projects.jsx  # Research cards
│   └── ...
├── data/
│   └── portfolio_data.js  # Centralized content file
├── index.css         # Global styles & Tailwind imports
└── App.jsx           # Main application layout
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd sandeep-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser at `http://localhost:5173`.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` directory. You can preview it locally using:

```bash
npm run preview
```

## 🌍 Deployment

This project is deployment-ready for platforms like Vercel or Netlify.

### Vercel / Netlify
1.  Connect your GitHub repository.
2.  The build settings should be automatically detected:
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`

## 📝 Customization

- **Content**: Edit `src/data/portfolio_data.js` to update text, skills, education, and projects without touching the UI code.
- **Styling**: Modify `tailwind.config.js` to change the color palette or fonts.
