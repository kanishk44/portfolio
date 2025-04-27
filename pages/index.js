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
  SiSocketdotio,
  SiRedux,
  SiJavascript,
  SiDocker,
  SiNextdotjs,
  SiMysql,
  SiAmazons3,
  SiAmazonec2,
  SiCplusplus,
  SiVisualstudiocode,
  SiPlanetscale,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import Image from "next/image";
import devkanishk from "../public/dev-kanishk-avatar.webp";
import nextjsBlog from "../public/nextjs-blog.png";
import chatgpt from "../public/chatgpt.png";
import charityDonation from "../public/charity-donation.png";
import linkedinClone from "../public/linkedin-clone.png";
import expenseTracker from "../public/expense-tracker.png";
import groupChat from "../public/group-chat.png";
import restaurantDelivery from "../public/restaurant-delivery.png";
import mailboxClient from "../public/mailbox-client.png";
import { useState } from "react";
import Timeline from "@/components/timeline";
import resumePDF from "../public/Kanishk_Khedkar_Resume.pdf";
import portfolio from "../public/portfolio.png";

export default function Home() {
  const handleResumeDownload = () => {
    window.open(resumePDF, "_blank");
  };
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark " : ""}>
      <Head>
        <title>Kanishk Khedkar Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kanishk Khedkar Portfolio" />
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
              Kanishk Khedkar
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
              href="https://www.linkedin.com/in/kanishk-khedkar/"
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
              {`I'm a Full Stack Developer with expertise in MERN stack (Node.js, React, MongoDB/MySQL) and cloud platforms like AWS and GCP. With over a year of professional experience and a Master's in Computer Science from New Jersey Institute of Technology, I specialize in building scalable web applications with responsive design and robust backend architectures.
Currently working with ZoomLocal on social media workflow automation tools, I've previously developed various full-stack projects including expense trackers, mailbox clients, and e-commerce platforms. My technical toolkit includes JavaScript (ES6), React/Next.js, Node.js/Express, TailwindCSS, and database systems like MySQL, MongoDB, and Firebase.
I'm passionate about creating efficient, user-friendly applications that solve real-world problems, with particular interests in payment integrations, authentication systems, and cloud deployments using AWS EC2, S3, and Firebase.
Let's connect and build something amazing together!`}
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
                href="https://github.com/kanishk44/expense-tracker"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={expenseTracker}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Expense Tracker"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    Expense Tracker
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    A modern full-stack expense management solution built with
                    Node.js, Express, MongoDB, and Bootstrap. Track your
                    personal finances with ease through an intuitive and
                    responsive interface.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/expense-tracker"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaNodeJs className="text-2xl" />
                      <SiMongodb className="text-2xl" />
                      <SiAmazons3 className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://github.com/kanishk44/charity-donation"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={charityDonation}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Charity Donation Platform"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    Charity Donation Platform
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    A web-based platform that connects donors with verified
                    charities, facilitating secure donations and transparent
                    impact reporting.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/charity-donation"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaNodeJs className="text-2xl" />
                      <SiMysql className="text-3xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://github.com/kanishk44/restaurant-delivery"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={restaurantDelivery}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Restaurant Delivery App"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    Restaurant Delivery App
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    A full-stack food ordering platform built with React, Vite,
                    Firebase, and TailwindCSS that enables customers to browse
                    menus, place orders, and track deliveries in real-time. The
                    application features user authentication, order management,
                    and separate admin interfaces for restaurant staff to
                    process incoming orders efficiently.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/restaurant-delivery"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaReact className="text-2xl" />
                      <SiFirebase className="text-2xl" />
                      <SiTailwindcss className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://github.com/kanishk44/mailbox-client"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={mailboxClient}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Mailbox Client"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    Mailbox Client
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    A modern email management solution developed using React,
                    Node.js, and MongoDB that provides a seamless email
                    experience with features like JWT authentication, real-time
                    updates, and a rich text editor. The application employs
                    custom React hooks to optimize API calls while maintaining
                    responsive design across all devices.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/mailbox-client"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaReact className="text-2xl" />
                      <FaNodeJs className="text-2xl" />
                      <SiMongodb className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://github.com/kanishk44/group-chat"
                className="text-teal-600"
                target="_blank"
              >
                <Image
                  src={groupChat}
                  fit={true}
                  style={{ objectFit: "cover" }}
                  alt="Group Chat"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold dark:text-emerald-300">
                    Group Chat
                  </h3>
                  <p className="text-gray-800 py-2 dark:text-slate-200">
                    A full-featured real-time chat application built with
                    Node.js, Express, MySQL, Socket.IO, and AWS S3 for file
                    sharing.
                  </p>
                  <div className="mt-5 flex flex-row gap-2 justify-between">
                    <a
                      href="https://github.com/kanishk44/group-chat"
                      className="text-teal-600"
                      target="_blank"
                    >
                      <AiFillGithub className="text-2xl" />
                    </a>
                    <span className="flex flex-row gap-6">
                      <FaNodeJs className="text-2xl" />
                      <SiSocketdotio className="text-2xl" />
                      <SiAmazons3 className="text-2xl" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="shadow-lg rounded-xl text-center">
              <a
                href="https://kanishkcodes.tech"
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
