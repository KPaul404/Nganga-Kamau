import { Experience, Project, Award, Skill } from './types';

export const SOCIAL_LINKS = {
  kaggle: "https://www.kaggle.com/paulnkamau",
  zindi: "https://zindi.africa/users/Paul_K",
  email: "ngangapaulkamau@gmail.com"
};

export const SKILLS: Skill[] = [
  { category: "Data Science & AI", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Generative AI", "Multi-Agent Systems"] },
  { category: "Engineering & Geospatial", items: ["Petroleum Engineering", "Reservoir Simulation", "GIS", "Remote Sensing", "Sentinel-2 Data", "Fluid Mechanics"] },
  { category: "Data Engineering & Cloud", items: ["SQL", "AWS", "Google Cloud Platform", "ETL Pipelines", "Docker", "Git", "BigQuery"] },
  { category: "Visualization & Tools", items: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Observable HQ"] },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "p1",
    title: "StyleSnapp Virtual Try-on",
    description: "An AI-powered virtual try-on experience using a multi-agent system and quality-control AI Judge to perfect outfits.",
    tags: ["GenAI", "Computer Vision", "Multi-Agent Systems", "Python"],
    link: "https://www.youtube.com/watch?v=G3UxIYOgyVY&t=4s",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000" 
  },
  {
    id: "p4",
    title: "Atlas: Infectious Diseases",
    description: "A climate data storytelling project analyzing how climate change compounds vulnerabilities across Sub-Saharan Africa, specifically tracking infectious disease spread.",
    tags: ["Data Storytelling", "Observable HQ", "Epidemiology", "Climate"],
    link: "https://observablehq.com/@paulk/adaptation-atlas-hackathon-track-4-infectious-diseases",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "p5",
    title: "Atlas: Soil & Food Security",
    description: "Adaptation Atlas Data Storytelling analyzing soil health data to visualize food security risks and agricultural sustainability patterns.",
    tags: ["Data Storytelling", "Observable HQ", "Agriculture", "Food Security"],
    link: "https://observablehq.com/@paulk/track-3-soil-health-and-food-security",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "p6",
    title: "Atlas: Forest Cover Analysis",
    description: "Adaptation Atlas visualization of forest cover changes and their environmental impact using D3.js on Observable.",
    tags: ["Data Storytelling", "Observable HQ", "Environment", "Conservation"],
    link: "https://observablehq.com/@paulk/adaptation-atlas-hackathon-track_6_paul_k",
    image: "https://cdn.pixabay.com/photo/2017/10/07/16/22/river-2826927_1280.jpg?auto=format&fit=crop&q=80&w=1000"
  }
];

export const AWARDS_DATA: Award[] = [
  {
    id: "a1",
    title: "BinEgo-360 Challenge (ICCV 2025)",
    organization: "IEEE/CVF Conference on Computer Vision",
    date: "Aug 2025",
    description: "Winner of the prizes for 2nd Place in Temporal Action Localization (TAL) Track & 3rd Place in Classification Track.",
    rank: "2nd & 3rd Place",
    link: "https://x360dataset.github.io/BinEgo-360/#challenge"
  },
  {
    id: "a2",
    title: "Japan's 3rd AI Grand Prix",
    organization: "Japan Association for Informatic Education",
    date: "Aug 2025",
    description: "Grand Prize Winner for 'Symphonic Mood Therapy', a multimodal therapeutic music recommendation framework.",
    rank: "Grand Prize",
    link: "https://sites.google.com/view/20250803/%E3%83%9B%E3%83%BC%E3%83%A0/ai-grand-prix"
  },
  {
    id: "a3",
    title: "Amini GeoFM Challenge",
    organization: "Zindi Africa & Amini",
    date: "Aug 2025",
    description: "Winner of the 1st Place Prize. Built a pixel-time-series classifier using GeoFM embeddings to map crop types.",
    rank: "1st Place",
    link: "https://zindi.africa/competitions/amini-geofm-decoding-the-field-challenge"
  },
  {
    id: "a4",
    title: "WAI Kaggle Challenge 2025",
    organization: "Shutterstock & Women in AI Ireland",
    date: "Mar 2025",
    description: "Winners of Best Global South Team Prize in the Detect AI vs Human-Generated Images (F1-score 0.88).",
    rank: "Best Global South Team",
    link: "https://www.kaggle.com/competitions/detect-ai-vs-human-generated-images/discussion/568391"
  },
  {
    id: "a5",
    title: "Lelapa AI Buzuzu-Mavi",
    organization: "Zindi Africa",
    date: "Apr 2025",
    description: "Bronze Medal. Engineered compressed language model for low-resource African languages.",
    rank: "Bronze Medal",
    link: "https://zindi.africa/users/Paul_K/competitions/certificate"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are an intelligent portfolio assistant for Paul Ng'ang'a Kamau.
Your goal is to represent Paul professionally.
Keep answers concise, professional, and enthusiastic.
Dont use any form of formating in your responses i.e no bullet points (but you can number them in a short message), no italics, no bold text.

CONTEXT:
Name: Paul Ng'ang'a Kamau
Role: Petroleum Engineer and Data Scientist.
Focus: Applied ML, Geospatial Modeling, Multimodal Video Understanding.
Contact: ngangapaulkamau@gmail.com.

Highlights:
- Co-founder of KenyaLearn AI.
- Seasoned Data Scientist.
- Grand Prize Winner: Japan's 3rd AI Grand Prix.
- 1st Place: Amini GeoFM Challenge.
- 2nd Place: BinEgo-360 (ICCV 2025).


Skills: Python, Computer Vision, NLP, Geospatial Analysis, Petroleum Engineering.

If asked about experience, focus on his Tech, Data, and Engineering roles.
Tone: Modern, confident, tech-savvy.
`;
