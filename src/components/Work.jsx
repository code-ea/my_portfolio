/**
 * @copyright 2025 code-ea
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import ProjectCard from "./ProjectCard";

const works = [
  
  {
    imgSrc: "/images/leetcode.jpg",
    title: "Leetcode Daily Tracker",
    tags: ["Daily Life", "Development"],
    projectLink: "https://leetracker.nitin-dev.com/",
    stage: ""
  },
  {
    imgSrc: "/images/notess.jpg",
    title: "Notionary",
    tags: ["Notes", "Development"],
    projectLink: "https://notes.nitin-dev.com/",
    stage: ""
  },
  {
    imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a88362152045049.63172c318bc75.png",
    title: "Full stack payment app",
    tags: ["DB", "Development"],
    projectLink: "https://www.nitin-dev.com/",
    stage: ""
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eComm Shop App",
    tags: ["eCommerce", "Development"],
    projectLink: "https://ecom.nitin-dev.com/",
    stage: ""
  },
  {
    imgSrc: "/images/paintings.jpg",
    title: "Painting-Crypto eComm.",
    tags: ["Painting-eComm", "INPROGRESS"],
    projectLink: "https://artgallery.nitin-dev.com/",
    stage: "inProgress"
  },
  {
    imgSrc: "/images/code-editor.jpg",
    title: "Realtime Code-Editor",
    tags: ["Compiler", "WebSockets"],
    projectLink: "https://realtime-compiler.nitin-dev.com/",
    stage: ""
  },
  {
    imgSrc: "/images/weather.jpg",
    title: "Weather App",
    tags: ["Open-Weather API", "Development"],
    projectLink: "https://code-ea.github.io/Weather-App/",
    stage: ""
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink, stage}, key) => (
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes={`reveal-up ${stage === "inProgress" ? "grayscale" : ""}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
