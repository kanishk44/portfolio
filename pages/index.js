import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiExpress,
  SiPython,
  SiFlask,
  SiRedux,
  SiJavascript,
  SiDocker,
  SiNextdotjs,
  SiStyledcomponents,
  SiHashnode,
  SiAmazons3,
  SiAmazonec2,
  SiCplusplus,
  SiVisualstudiocode,
  SiPlanetscale,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import Image from "next/image";
import devkanishk from "../public/dev-kanishk-avatar.webp";
import nextjsBlog from "../public/nextjs-blog.png";
import chatgpt from "../public/chatgpt.png";
import sortingVisualizer from "../public/sorting-viz.png";
import linkedinClone from "../public/linkedin-clone.png";
import sampleSize from "../public/sample-size.png";
import weather from "../public/weather.png";
import { useState } from "react";
import Timeline from "@/components/timeline";
import resumePDF from "../public/Kanishk_Shedsale_Resume.pdf";
import portfolio from "../public/portfolio.png";

export default function Home() {
  const handleResumeDownload = () => {
    window.open(resumePDF, "_blank");
  };
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark " : ""}>
      <Head>
        <title>Kanishk Shedsale Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kanishk Shedsale Portfolio" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:bg-gradient-to-r from-slate-200 via-slate-100 to-slate-400 dark:text-transparent dark:bg-clip-text">
              developedbykanishk
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 to-emerald-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                  onClick={handleResumeDownload}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-emerald-300">
              Kanishk Shedsale
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-100">
              Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-slate-200">
              I build beautiful and scalable web applications using the latest
              technolgies and web frameworks, lets connect and explore
              opportunities to work together!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/kanishk-shedsale/"
              target="_blank"
            >
              <AiFillLinkedin className="text-blue-500 cursor-pointer" />
            </a>
            <a href="https://github.com/kanishk44" target="_blank">
              <AiFillGithub className="dark: text-gray-700 dark:text-slate-100 cursor-pointer" />
            </a>
            {/* <a href="https://kanishkwrites.hashnode.dev/" target="_blank">
              <SiHashnode className="text-violet-700 cursor-pointer" />
            </a>
            <a href="https://twitter.com/kanishk_777" target="_blank">
              <AiFillTwitterCircle className="text-sky-400 cursor-pointer" />
            </a> */}
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={devkanishk}
              fill={true}
              style={{ objectFit: "cover" }}
              alt="dev-kanishk"
            />
          </div>
        </section>

        <section className="mt-16">
          <div>
            <h2 className="text-3xl text-center font-medium py-10 pb-2 dark:text-gray-100">
              Hey there! I&apos;m Kanishk...
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
              {`As an experienced Software Engineer, I've refined my skills in
              crafting compelling user interfaces and robust server-side
              solutions using React.js and Node.js. My expertise extends to AWS,
              where I've mastered cloud-based deployment and scalability
              strategies. I recently embarked on an exciting project inspired by
              LinkedIn, showcasing my ability to transform intricate ideas into
              practical applications. I'm actively seeking Frontend, Backend, or
              Full-Stack Developer roles in the United States, and I'm eager to
              collaborate with like-minded professionals to create innovative
              web solutions that make a lasting impact on society. When I'm not
              immersed in code, I'm indulging in my love for literature, staying
              active through fitness, and experimenting in the culinary arts.`}
              <br />
              <br />
              Want to find out more about my experience? Check out my{" "}
              <span
                onClick={handleResumeDownload}
                className="text-teal-500 cursor-pointer"
              >
                resume{" "}
              </span>
              and{" "}
              <a href="#projects" className="text-teal-500 cursor-pointer">
                projects
              </a>{" "}
              I have made.
            </p>
          </div>
          <div>
            <h2 className="text-3xl text-center font-medium py-10 pb-2 dark:text-slate-50">
              Skills
            </h2>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="py-4 text-teal-600 text-2xl dark:text-emerald-300">
                Development
              </h4>
              <div className="grid grid-cols-3 gap-5 place-items-center text-gray-800 dark:text-slate-100">
                <span className="flex flex-row items-center gap-1">
                  <SiJavascript className="text-3xl py-1" />
                  <p className="py-1">JavaScript</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <FaPython className="text-3xl py-1" />
                  <p className=" py-1">Python</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiCplusplus className="text-3xl py-1" />
                  <p className=" py-1">C++</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <FaLinux className="text-3xl py-1" />
                  <p className=" py-1">Linux</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <AiFillGithub className="text-3xl py-1" />
                  <p className=" py-1">Git</p>
                </span>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="py-4 text-teal-600 text-2xl dark:text-emerald-300">
                Frontend
              </h4>
              <div className="grid grid-cols-3 gap-5 place-items-center text-gray-800 dark:text-slate-100">
                <span className="flex flex-row items-center gap-1">
                  <FaReact className="text-3xl py-1" />
                  <p className=" py-1">React</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiRedux className="text-3xl py-1" />
                  <p className=" py-1">Redux</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiNextdotjs className="text-3xl py-1" />
                  <p className=" py-1">Next.js</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <FaHtml5 className="text-3xl py-1" />
                  <p className=" py-1">HTML</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <FaCss3Alt className="text-3xl py-1" />
                  <p className=" py-1">CSS</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiTailwindcss className="text-3xl py-1" />
                  <p className=" py-1">TailwindCSS</p>
                </span>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="py-4 text-teal-600 text-2xl dark:text-emerald-300">
                Backend
              </h4>
              <div className="grid grid-cols-3 gap-5 place-items-center text-gray-800 dark:text-slate-100">
                <span className="flex flex-row items-center gap-1">
                  <FaNodeJs className="text-3xl py-1" />
                  <p className=" py-1">Node.js</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiExpress className="text-3xl py-1" />
                  <p className=" py-1">Express.js</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiMongodb className="text-3xl py-1" />
                  <p className=" py-1">MongoDB</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiPostgresql className="text-3xl py-1" />
                  <p className=" py-1">PostgreSQL</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiFirebase className="text-3xl py-1" />
                  <p className=" py-1">Firebase</p>
                </span>
                {/* <span className="flex flex-row items-center gap-1">
                  <SiGraphql className="text-3xl py-1" />
                  <p className="text-gray-800 py-1">GraphQL</p>
                </span> */}
                <span className="flex flex-row items-center gap-1">
                  <SiPlanetscale className="text-3xl py-1" />
                  <p className="py-1">PlanetScale</p>
                </span>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="py-4 text-teal-600 text-2xl dark:text-emerald-300">
                Tools
              </h4>
              <div className="grid grid-cols-3 gap-5 place-items-center text-gray-800 dark:text-slate-100">
                <span className="flex flex-row items-center gap-1">
                  <SiVisualstudiocode className="text-3xl py-1" />
                  <p className=" py-1">VS Code</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiDocker className="text-3xl py-1" />
                  <p className=" py-1">Docker</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiAmazonec2 className="text-3xl py-1" />
                  <p className=" py-1">AWS EC2</p>
                </span>
                <span className="flex flex-row items-center gap-1">
                  <SiAmazons3 className="text-3xl py-1" />
                  <p className=" py-1">AWS S3</p>
                </span>
                {/* <p className="text-gray-800 py-1">AWS Lambda</p> */}
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2 className="text-3xl text-center py-10 dark:text-slate-50">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://linkedin-clone-gamma-blush.vercel.app/"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={linkedinClone}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="LinkedIn Clone"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    LinkedIn Clone
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    Set up authentication using Firebase, and built a React app,
                    for login, register, creating/updating profile, adding
                    profile picture, creating/updating/deleting posts, liking
                    and commenting, adding connections, and user search
                    functionality.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/linkedin-clone"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaReact className="text-2xl" />
                      <SiFirebase className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://chat-gpt-react-seven.vercel.app/"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={chatgpt}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="ChatGPT Clone"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    ChatGPT Clone
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    A clone of the popular AI chatbot ChatGPT. It uses the
                    OpenAI API to generate responses to user messages for a
                    variety of topics.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/ChatGPT-React"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaReact className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://sorting-visualizer-orpin.vercel.app/"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={sortingVisualizer}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Sorting Visualizer"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    Sorting Visualizer
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    A sorting visualizer built with React, Styled Components
                    andZustland. It visualizes the sorting process of various
                    sorting algorithms such as Bubble Sort, Merge Sort, Quick
                    Sort, and more, and compares their time taken, number of
                    swpas, and comparisons.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/sorting-visualizer"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaReact className="text-2xl" />
                      <SiStyledcomponents className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://github.com/kanishk44/sample-size-calculator"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={sampleSize}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Exercise Tracker"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    Sample size calculator
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    Built a Flask app with user authentication, to calculate the
                    sample size required for a given confidence level, margin of
                    error, and population size using statistical operations
                    using Pandas, which is stored in user profile. Used SOLID
                    principles to write clean, maintainable code. Containerized
                    the app using Docker.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/sample-size-calculator"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <SiPython className="text-2xl" />
                      <SiFlask className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://kanishkcodes.co"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={portfolio}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Porfolio Website"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    Portfolio (This Website)
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    This is my portfolio website built with Next.js and
                    TailwindCSS. It is hosted on Vercel.
                  </p>
                  <div className="flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/portfolio"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <SiNextdotjs className="text-2xl" />
                      <SiTailwindcss className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://github.com/kanishk44/skycast"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={weather}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Next.js Blog"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    SkyCast
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    A simple weather application built with React & Semantic UI
                    react library. Retrieved the current weather and forecast
                    data like temperature, humidity, sunrise, and sunset from
                    the OpenWeatherMap API based on the user&apos;s location
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/skycast"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaReact className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <Timeline darkMode={darkMode} />

        <footer className="flex flex-col items-center justify-center w-full h-24 border-t dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-200">
            Coded in Visual Studio Code, Built using Next.js and TailwindCSS.
            Deployed on Vercel.
          </p>
        </footer>
      </main>
    </div>
  );
}
