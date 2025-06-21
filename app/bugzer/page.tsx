'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Image from "next/image";
import Meteors from "@/components/magicui/meteors";

// Ensure the SVG import is correctly handled


export default function HomePage() {
    return (
        <main>
            <div className="flex justify-center items-center h-[300px] bg-gray-500 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-200 rounded-xl shadow-lg max-w-6xl">
                    <div className="flex justify-center items-center">
                        <Image
                            className="rounded-3xl"
                            src="/5.png"
                            alt="nbdd"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div
                        className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                        <Meteors number={30}/>
                        <span
                            className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        Bugzer
                    </span>
                    </div>
                </div>
            </div>
            <section className='bg-white p-2'>
                <div
                    className='layout relative flex min-h-screen flex-col items-center justify-center p-4 text-center'>


                    <p className='mt-2 text-sm text-gray-800'>
                        A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
                        Import, Seo, Link component, pre-configured with Husky{' '}
                    </p>
                    <p className='mt-2 text-sm text-gray-700'>
                        <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                            See the repository
                        </ArrowLink>
                    </p>

                    <ButtonLink className='mt-6' href='/components' variant='light'>
                        See all components
                    </ButtonLink>

                    <UnstyledLink
                        href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
                        className='mt-4'
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            width='92'
                            height='32'
                            src='https://vercel.com/button'
                            alt='Deploy with Vercel'
                        />
                    </UnstyledLink>

                    <footer className='absolute bottom-2 text-gray-700'>
                        © {new Date().getFullYear()} By{' '}
                        <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                            Theodorus Clarence
                        </UnderlineLink>
                    </footer>
                </div>
            </section>
        </main>
    );
}
