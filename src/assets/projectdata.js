const projectdata = [
  {
    id: 1,
    title: "AI Battle Arena",
    description:
      "A multi-agent AI comparison platform where multiple LLMs solve the same problem and a Gemini-based judge evaluates their responses.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "LangGraph",
      "LangChain",
      "Mistral AI",
      "Cohere",
      "Google Gemini",
      "Zod"
    ],
    features: [
      "Multi-agent LLM comparison architecture",
      "Mistral and Cohere generate independent solutions in parallel",
      "Gemini evaluates both solutions as an impartial judge",
      "LangGraph StateGraph for AI workflow orchestration",
      "Structured AI responses using Zod validation",
      "Parallel LLM execution using Promise.all",
      "Scores and reasoning generated for each solution",
      "React frontend with Markdown and code-formatted responses"
    ],
    github: "https://github.com/arunz6/battelarena",
    live: "https://battelarena-1-0q5k.onrender.com/"
  },

  {
    id: 2,
    title: "Snitch",
    description:
      "A full-stack MERN e-commerce platform with authentication, seller management, product variants, inventory control and Razorpay payments.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    skills: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Razorpay"
    ],
    features: [
      "Buyer and seller role-based authentication",
      "JWT authentication with HTTP-only cookies",
      "Google OAuth 2.0 using Passport.js",
      "Seller product creation and management",
      "Multi-image product uploads using Multer and ImageKit",
      "Product variants with size, color, price, stock and images",
      "Stock-safe cart management",
      "MongoDB aggregation using $lookup, $match, $group and $unwind",
      "Razorpay checkout and payment verification",
      "Redux-based cart and application state management"
    ],
    github: "https://github.com/arunz6/snitch",
    live: "https://snitch-taml.onrender.com/"
  },

  {
    id: 3,
    title: "Perplexity AI Clone",
    description:
      "An agentic AI chat application that uses a ReAct agent to decide when live web search is required and retrieves information using Tavily.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "LangChain",
      "LangGraph",
      "Mistral AI",
      "Tavily",
      "MongoDB",
      "Socket.io"
    ],
    features: [
      "Agentic ReAct architecture for intelligent tool calling",
      "Mistral Large as the primary AI model",
      "Tavily web search tool for live information",
      "Agent decides when internet search is required",
      "JWT authentication with HTTP-only cookies",
      "Email verification using Nodemailer",
      "Persistent users, chats and messages in MongoDB",
      "Chat creation, history retrieval and deletion",
      "Automatic AI-generated chat titles",
      "Socket.io for persistent client-server communication"
    ],
    github: "https://github.com/arunz6/perplexity-ai",
    live: "https://perplexity-ai-kj4l.onrender.com/"
  },

  {
    id: 4,
    title: "PhishGuard",
    description:
      "An offline Chrome extension that detects potentially malicious websites using URL analysis, DOM analysis and weighted heuristic scoring.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    skills: [
      "JavaScript",
      "Chrome Extension",
      "Manifest V3",
      "Service Workers",
      "Content Scripts",
      "DOM Analysis"
    ],
    features: [
      "URL-based phishing detection",
      "Runtime DOM analysis",
      "Weighted heuristic risk scoring",
      "Safe, Suspicious and Phishing classifications",
      "Automatic blocking of high-risk websites",
      "Dynamic local blacklist",
      "User-controlled whitelist",
      "Chrome Manifest V3 architecture",
      "Service worker and content script integration",
      "Fully offline privacy-focused detection",
      "No external APIs, ML models or telemetry"
    ],
    github: "https://github.com/",
    live: "https://example.com/"
  },

  {
    id: 5,
    title: "Creative Portfolio",
    description:
      "A creative personal portfolio built from scratch with interactive 3D visuals, smooth animations and responsive layouts.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766",
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Three.js",
      "GSAP",
      "ScrollTrigger",
      "SplitText",
      "Draggable",
      "Observer"
    ],
    features: [
      "Interactive Three.js 3D hero section",
      "GSAP animated intro",
      "Character and word-level text animations",
      "Scroll-pinned project showcase",
      "Scrubbed GSAP timelines",
      "Drag-to-scroll project cards",
      "Mouse-wheel synchronized interactions",
      "Responsive layouts for mobile, tablet and desktop",
      "Custom animated mobile navigation",
      "Creative interactive frontend experience"
    ],
    github: "https://github.com/arunz6/arun-rajput-portfolio",
    live: "https://arun-rajput-portfolio.onrender.com/"
  }
];

export default projectdata;