/**
 * @copyright 2024 code-ea
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a88362152045049.63172c318bc75.png",
    title: "Full stack payment app",
    tags: ["DB", "Development"],
    projectLink: "https://paytm-t8rv.vercel.app/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website UI",
    tags: ["eCommerce", "Development"],
    projectLink: "https://shopapp.nitin-dev.com/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
