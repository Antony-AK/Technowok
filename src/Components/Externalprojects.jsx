import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import tanuvas1 from "../assets/Tanuvas1.png"
import nba from "../assets/Nba1.png"
import cuisine from "../assets/cuisine1.png"
import jnc from "../assets/jnc1.png"
import techivoes from "../assets/techivoes1.png"
import png from "../assets/png1.png"
import maruthi from "../assets/maruti2.png"
import online from "../assets/online1.png"
import muthu from "../assets/muthu1.png"
import selvi from "../assets/selvi1.png"
import thangam from "../assets/Thangam1.png"
import acme from "../assets/Acme1.png"
import marigan from "../assets/marigan1.png"
import hungry from "../assets/hungry1.png"
import tamil from "../assets/Tamil1.png"
import china from "../assets/china1.png"
import donate from "../assets/donate1.png"







export const EXTERNAL_PROJECTS = [
    {
        id: "idpoftanuvas",
        title: "TANUVAS — IDP Office",
        url: "https://idpoftanuvas.com/",
        description: "Official Institute Development & Placement portal of TANUVAS — shows academic notices, placement updates, recruitment info, and student resources.",
        heroImage: tanuvas1,
    },
    {
        id: "publicnews-tv",
        title: "PublicNewsTV",
        url: "https://publicnewstv.com/",
        description: "A news-media site delivering public news, video reports and current affairs — regularly updated with nationwide and regional stories.",
        heroImage: nba,
    },
    {
        id: "south-indian-cuisine",
        title: "South Indian Food Specialities",
        url: "https://southindianfoodspecialities.com/",
        description: "A culinary website showcasing traditional South Indian recipes, restaurant directories and gourmet food specials for enthusiasts of Indian cuisine.",
        heroImage: cuisine,
    },
    {
        id: "jnc-education",
        title: "JNC Education",
        url: "https://jnceducation.in/",
        description: "Educational services portal offering courses, resources and information for students — aims to streamline admissions and course details online.",
        heroImage: jnc,
    },
    {
        id: "techinoes",
        title: "Techinoes",
        url: "https://techinoes.com",
        description: "Technology-focused site covering software services, tech solutions and digital transformation offerings for clients seeking modern web/app solutions.",
        heroImage: techivoes,
    },
    {
        id: "maruthi-engg",
        title: "Maruthi Engineering",
        url: "https://maruthiengg.com",
        description: "Engineering & manufacturing firm’s website — highlights company services, capabilities and industrial solutions to clients.",
        heroImage: maruthi,
    },
    {
        id: "sakthi-copier",
        title: "Sakthi Copier (Online Services)",
        url: "https://sakthicopier.com/",
        description: "Online services portal presumably for copier & printing services — offers contact info, services overview and customer support online.",
        heroImage: online,
    },
    {
        id: "muthu-consultancy",
        title: "Muthu Consultancy",
        url: "https://muthuconsultancy.com",
        description: "Consultancy firm’s website offering advisory services — showcases services, contact details and client support for potential customers.",
        heroImage: muthu,
    },
    {
        id: "selvi-clinic",
        title: "Selvi Clinic",
        url: "https://selviclinic.com",
        description: "Healthcare clinic’s website providing information about medical services, contact details and patient support resources online.",
        heroImage: selvi,
    },
    {
        id: "thangam-weddingcards",
        title: "Thangam Wedding Cards",
        url: "https://thangamweddingcards.com",
        description: "Wedding-card printing & design services site — offers catalogue of card designs, customization options and contact details for orders.",
        heroImage: thangam,
    },
    {
        id: "acme-biocare",
        title: "ACME Biocare",
        url: "https://acmebiocare.in",
        description: "Biocare product / service provider website — showcases health products/services, company info and contact support.",
        heroImage: acme,
    },
    {
        id: "marigan-group",
        title: "Marigan Group",
        url: "https://marigangroup.com",
        description: "Corporate group’s website presenting the company’s businesses, services and group overview to potential clients and partners.",
        heroImage: marigan,
    },
    {
        id: "iamhungry-foundation",
        title: "I Am Hungry Foundation",
        url: "https://iamhungryfoundation.com/",
        description: "Non-profit / charity foundation’s site — highlights their mission, outreach programs and how people can donate or volunteer.",
        heroImage: hungry,
    },
    {
        id: "tamil-sneham",
        title: "Tamil Sneham",
        url: "https://tamilsneham.org/#/",
        description: "Community / social-welfare website aiming to support Tamil community interests, outreach activities and social support initiatives.",
        heroImage: tamil,
    },
    {
        id: "sevai-org",
        title: "Sevai Organisation",
        url: "https://www.sevai.org/",
        description: "Organisation site focusing on social service, welfare activities and community support programs — provides info on initiatives and how to contribute.",
        heroImage: china,
    },
    {
        id: "unity-charity",
        title: "Unity Charity",
        url: "https://unitycharity.in",
        description: "Charity / non-profit organisation website showcasing donation programs, charity works and ways to support social causes online.",
        heroImage: donate,
    }
];

export default function ExternalProjects() {
  return (
    <div className="w-full bg-black text-white py-24 px-6 mt-10 md:px-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Our <span className="text-red-500">External Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {EXTERNAL_PROJECTS.map((project, i) => (
          <CardFlip key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

/* ============================
   CARD COMPONENT (hover + tap)
=============================== */
function CardFlip({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile SAFELY (no SSR crash)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleClick() {
    if (isMobile) {
      setIsFlipped((prev) => !prev); // toggle for mobile
    }
  }

  return (
    <motion.div
      whileHover={!isMobile ? { scale: 1.04 } : {}} // desktop hover
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="group perspective w-full h-[280px] relative cursor-pointer"
    >
      <div
        className={`
          relative w-full h-full
          transition-transform duration-700
          preserve-3d
          ${isFlipped ? "rotate-y-180" : ""}
          ${!isMobile ? "group-hover:rotate-y-180" : ""} 
        `}
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden backface-hidden shadow-[0_0_25px_rgba(255,0,0,0.4)]">
          <img
            src={project.heroImage}
            className="w-full h-full object-cover brightness-75"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-2xl font-bold tracking-wide">
            {project.title}
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-3xl p-6 bg-gradient-to-br from-red-600 to-red-700 rotate-y-180 backface-hidden shadow-[0_0_35px_rgba(255,0,0,0.5)] flex flex-col justify-between">
          <p className="text-gray-200 text-sm leading-relaxed">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            className="mt-4 px-5 py-2 bg-black/70 text-white rounded-full text-center text-sm hover:bg-black/90 transition"
          >
            Visit Project →
          </a>
        </div>
      </div>
    </motion.div>
  );
}