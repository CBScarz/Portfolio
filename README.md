# Backend Developer Portfolio - Next.js

A modern, performant portfolio built with Next.js and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.js          # Root layout with metadata
│   └── page.js            # Home page
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section
│   ├── Work.js            # Projects showcase
│   ├── Skills.js          # Technical skills
│   ├── About.js           # About section
│   ├── Contact.js         # Contact CTA
│   └── Footer.js          # Footer
├── styles/
│   └── globals.css        # Global styles
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies
```

## Customization

### Update Your Information

**Header/Logo** - Edit `components/Header.js`:
- Change "Scarz" to your name

**Hero Section** - Edit `components/Hero.js`:
- Update the main headline and subtitle

**Projects** - Edit `components/Work.js`:
- Modify the `projects` array with your actual projects
- Each project needs:
  - `title`: Project name
  - `techs`: Array of 3 technologies
  - `description`: Brief project description
  - `metrics`: Array of 2 metric objects with `value` and `label`
  - Update GitHub and Live links

**Skills** - Edit `components/Skills.js`:
- Update the `skills` array with your technologies
- Organize by category

**About** - Edit `components/About.js`:
- Replace placeholder text with your bio

**Contact** - Edit `components/Contact.js`:
- Update email and social media links

### Styling

This project uses Tailwind CSS for styling. All components use utility classes.

To modify the color scheme, edit `tailwind.config.js` or use Tailwind's inline utilities.

### Deployment

#### Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic on every push)

#### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

#### Custom Domain
Simply point your domain's DNS to your hosting provider.

## Features

✨ **Modern Design** - Dark theme optimized for developers
🚀 **Next.js 13+** - Latest framework features with App Router
⚡ **Performance** - Optimized rendering and CSS
📱 **Responsive** - Mobile-first design
🎨 **Tailwind CSS** - Utility-first styling
🔍 **SEO Ready** - Metadata and semantic HTML
✅ **Component-based** - Easy to maintain and extend

## Technologies Used

- **Next.js** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **JavaScript** - Language

## Tips for Backend Developer Portfolios

1. **Showcase Real Projects** - Link to actual GitHub repositories
2. **Include Metrics** - Show performance improvements, scalability, etc.
3. **Highlight System Design** - Demonstrate understanding of architecture
4. **Feature Different Tech Stacks** - Show versatility
5. **Clean Code** - Your portfolio code should be well-written
6. **Deployment Ready** - Projects should be deployable or have live demos

## Support

For questions or customization help, check the component files for detailed comments and structure.
