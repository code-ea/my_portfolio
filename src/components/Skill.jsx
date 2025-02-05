/**
 * @copyright 2025 code-ea
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "https://th.bing.com/th/id/OIP.Wan48DmTomFcXEWcrAPKuwHaHa?rs=1&pid=ImgDetMain",
    label: "AWS (EC2 & S3)",
    desc: "Deployment",
  },
  {
    imgSrc: "https://static-00.iconduck.com/assets.00/cloudflare-icon-2048x2048-k5hf9ugn.png",
    label: "Cloudflare",
    desc: "Server Hosting",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
