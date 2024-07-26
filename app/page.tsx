'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import HeroCard from "@/components/HeroCard";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // @ts-ignore
  // @ts-ignore
  return (<>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                      className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                      className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image className="h-8 w-auto" src='/1.png'
                       alt="logo"
                  width={50}
                  height={50}/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="#Home" className="nav-link rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                          aria-current="page">Home</Link>
                    <Link href="/projects"
                          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
                    <Link href="#contact-me"
                          className=" nav-linkrounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact
                      Me</Link>
                    <Link href="#About-Me"
                          className="nav-link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About
                      Me</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isOpen && (
              <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  <Link href="#Home" className="nav-link block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                        aria-current="page">Home</Link>
                  <Link href="/projects"
                        className="nav-link block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
                  <Link href="#contact-me"
                        className="nav-link block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact
                    Me</Link>
                  <Link href="#About-Me"
                        className="nav-link block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About
                    Me</Link>
                </div>
              </div>
          )}
        </nav>


        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className={"p-10"}><HeroCard/></div>

          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className={"p-10 "}><p className={"text-xl font-bold items-center justify-center "}>
              So my name is Sher Partap Singh and here is quick intro about me
            </p>
            </div>

          </div>





          <section id="About-Me" className="flex flex-col items-center bg-grey border border-gray-200 rounded-lg shadow md:flex-row max-w-4xl mx-auto dark:border-gray-700 dark:bg-gray-800 p-10">
            <Image className="object-cover w-full rounded-t-xl h-200 md:h-auto md:max-w-full md:rounded-none md:rounded-s-lg"
                   src="/2.PNG" alt="logog" width={200} height={200}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">lorem ipsum   cwjbf jwebfke efib ffbfi nfb fnfk lorem ipsum   cwjbf jwebfke efib ffbfi nfb fnf lorem ipsum   cwjbf jwebfke efib ffbfi nfb fnf lorem ipsum   cwjbf jwebfke efib ffbfi nfb fnf lorem ipsum   cwjbf jwebfke efib ffbfi nfb fnf lorem ipsum   cwjbf jwebfke efib ffbfi nfb fnf </p>
            </div>
          </section>
          <Link href="https://drive.google.com/file/d/1u8rx6WdxD3okgYblTgZ5s37u0WGa2vkZ/view?usp=sharing" target={'_blank'}>
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                  src=""
                  alt="clickable image"
                  width={iconSize}
                  height={iconSize}
              />
            </div>

          </Link>



          <div
              className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Docs{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Find in-depth information about Next.js features and API.
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
        </main>
      </>
  );
}
