# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and achievements with smooth animations and a clean design.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Dark/Light Theme**: Automatic theme detection with beautiful gradient backgrounds
- **Interactive Sections**:
  - Hero section with animated introduction
  - About section with personal information and skills
  - Projects showcase with detailed project cards
  - Certificates section displaying achievements
  - Contact form with EmailJS integration
- **Loading Screen**: Elegant loading animation while the page loads
- **Mobile-First Navigation**: Responsive navbar with mobile hamburger menu
- **Scroll Animations**: Elements animate into view as you scroll

## 🛠️ Tech Stack

<div align="center">

### 🚀 Frontend & Build Tools
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

### 🎨 Animation & UI
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-E91E63?style=for-the-badge&logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)

### 🛠️ Development Tools
[![ESLint](https://img.shields.io/badge/ESLint-9.30.1-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Definitions-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

### 📧 External Services
[![EmailJS](https://img.shields.io/badge/EmailJS-3.2.0-FF6B35?style=for-the-badge&logo=gmail&logoColor=white)](https://www.emailjs.com/)

---

<div align="center">
  <strong>Built with modern technologies for optimal performance and developer experience</strong>
</div>

</div>

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- EmailJS account (for contact form functionality)

## ⚡ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the `.env` file and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/
│   ├── LoadingScreen.jsx      # Initial loading animation
│   ├── Navbar.jsx             # Main navigation bar
│   ├── MobileMenu.jsx         # Mobile hamburger menu
│   ├── RevealOnScroll.jsx     # Scroll animation wrapper
│   └── sections/
│       ├── Home.jsx           # Hero/landing section
│       ├── About.jsx          # About me section
│       ├── Projects.jsx       # Portfolio projects showcase
│       ├── Certificate.jsx    # Certificates and achievements
│       ├── Contact.jsx        # Contact form with EmailJS
│       └── footer.jsx         # Site footer
├── assets/                    # Static assets (images, etc.)
├── allDetails/                # Data files for content
├── App.jsx                    # Main app component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles and Tailwind imports
```

## 🎨 Customization

### Content Management

Most content can be easily customized by editing the files in the `src/allDetails/` directory:
- Personal information
- Skills and technologies
- Project details
- Certificate information
- Contact details

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify `tailwind.config.js` for theme customization
- Edit `src/index.css` for global styles
- Update component-specific styles in each JSX file

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the import and component to `App.jsx`
3. Style with Tailwind CSS classes
4. Add any necessary animations with Framer Motion

## 🔗 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a new email service (Gmail, Outlook, etc.)
3. Create an email template for the contact form
4. Copy your Service ID, Template ID, and Public Key to the `.env` file

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify (Recommended)
1. Build the project locally
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)
3. Or connect your Git repository for automatic deployments

### Other Platforms
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated builds
- **Traditional Hosting**: Upload the `dist` folder contents

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:
- Responsive typography and spacing
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Proper viewport meta tags for mobile devices

## ⚡ Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load only when needed
- **Optimized Assets**: Vite optimizes images and assets automatically
- **Modern JavaScript**: Uses modern ES modules and features

## 🔒 Security Features

- Environment variables for sensitive API keys
- Input validation and sanitization
- Protected against common web vulnerabilities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues) if you want to contribute.

## 📞 Contact

For questions or support, please use the contact form on the portfolio website or reach out through the provided contact information.

---

Built with ❤️ using React, Vite, and modern web technologies.
