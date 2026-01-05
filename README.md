# Fatma's Portfolio

Welcome to the repository for **Fatma's Portfolio**. This project is a modern, responsive personal website designed to showcase professional experience, projects, and skills. It features an integrated **AI Chatbot** powered by Google's Gemini API that allows visitors to interactively ask questions about Fatma's background and expertise.

## 🛠️ Technologies Used

This project is built with a modern frontend stack to ensure performance and scalability:

- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed JavaScript for better developer tooling.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for lightning-fast development.
- **[Google GenAI SDK](https://ai.google.dev/)**: Integrates the Gemini model for the AI assistant.
- **[Lucide React](https://lucide.dev/)**: Beautiful, consistent icons.
- **[Tailwind CSS](https://tailwindcss.com/)** (implied via usage): For styling and responsive design.

## 🚀 How to Reuse This Template

If you like this portfolio and want to use it as a starting point for your own, follow these simple steps:

### 1. Clone the Repository

Clone this project to your local machine:

```bash
git clone <repository-url>
cd fatmas-portfolio
```

### 2. Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) installed, then install the required packages:

```bash
npm install
```

### 3. Configure the AI Chatbot

To enable the AI chatbot feature, you need a Google Gemini API key.

1.  Get your API key from [Google AI Studio](https://aistudio.google.com/).
2.  Create a file named `.env` in the root directory of the project.
3.  Add your API key to the file like this:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal) to see the site in action.

## 📝 Customization Tips

-   **Content:** Edit the components in the `components/` folder (like `Hero.tsx`, `Experience.tsx`) to update the text and images with your own information.
-   **AI Persona:** Update the `SYSTEM_INSTRUCTION` in `constants.tsx` to change how the AI chatbot describes you.
-   **Styles:** Modify the CSS or Tailwind classes to match your preferred color scheme.

---

*Feel free to star this repository if you find it useful!*