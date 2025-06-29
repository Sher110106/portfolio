'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Contact from "@/components/Contact"
import HeroCard from "@/components/HeroCard";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <>


        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className={"p-10"}><HeroCard/></div>

          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className={"p-10 "}>
              <p className={"text-xl font-bold items-center justify-center "}>
                So my name is Sher Partap Singh and here is quick intro about me
              </p>
            </div>
          </div>

          <section id="About-Me"
                   className="flex flex-col items-center bg-grey border border-gray-200 rounded-lg shadow md:flex-row max-w-4xl mx-auto dark:border-gray-700 dark:bg-gray-800 p-10">
            <Image
                className="object-cover w-full rounded-t-xl h-200 md:h-auto md:max-w-full md:rounded-none md:rounded-s-lg"
                src="/2.PNG" alt="logog" width={200} height={200}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">lorem ipsum cwjbf jwebfke efib ffbfi nfb
                fnfk lorem ipsum cwjbf jwebfke efib ffbfi nfb fnf lorem ipsum cwjbf jwebfke efib ffbfi nfb fnf lorem
                ipsum cwjbf jwebfke efib ffbfi nfb fnf lorem ipsum cwjbf jwebfke efib ffbfi nfb fnf lorem ipsum cwjbf
                jwebfke efib ffbfi nfb fnf </p>
            </div>
          </section>
          <section id="projects">
            <div
                className="p-10 relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
              <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/4.svg" alt="project"
                     width={180} height={37} priority/>
            </div>

            <h1 className={"flex text-4xl pb-5"}>Projects</h1>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
              <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Bugzer{" "}
                  <span
                      className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                </h2>
                <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/5.png"
                       alt="project" width={180} height={37} priority/>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Learn more about Bugzer here
                </p>
              </a>

              <a
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Learn{" "}
                  <span
                      className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Learn about Next.js in an interactive course with&nbsp;quizzes!
                </p>
              </a>

              <a
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Templates{" "}
                  <span
                      className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Explore starter templates for Next.js.
                </p>
              </a>

              <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Deploy{" "}
                  <span
                      className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                  Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
              </a>
            </div>
          </section>
          <section id='Contact-me'>
            <Contact/>
          </section>
        </main>
        <Footer/>
      </>
  );
}
