import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";

import { Footer, Header, Navbar } from "../components/common";

const blogs = [
  {
    slug: "nft-marketplace-in-react-js-next-typescript-full-guide",
    title: "NFT Marketplace in React, Typescript & Solidity - Full Guide",
    description:
      "Learn how to use React / Next JS, Solidity, and Pinata(IPFS) to create NFT marketplace on Ethereum. All In Typescript.",
    date: "2022-12-12",
    coverImage: "https://thrangra.sirv.com/Ethereum_blue_light-small.jpg",
  },
  {
    slug: "web-development-and-coding-full-course",
    title: "Web Development & Code 101 - Full Guide [2022]",
    description:
      "Learn programming in JS language, HTML, and CSS. Create a Web Application made in React JS. The path to the final project includes many assignments, code exercises, and challenges.",
    date: "2022-08-12",
    coverImage: "https://thrangra.sirv.com/Course_logo%20copy.jpg",
  },
  {
    slug: "rust-webassembly-with-js-ts-the-practical-guide",
    title: "Rust & WebAssembly with JS (TS) - The Practical Guide",
    description:
      "Learn how to code in Rust! Compile the code to WebAssembly, prepare JS/TS frontend and finish the course by creating the practical Snake game that can run in any browser.",
    date: "2022-04-12",
    coverImage: "https://thrangra.sirv.com/Rust_small.jpg",
  },
  {
    slug: "unity-2d-with-c-complete-game-dev-course",
    title: "Unity 2D With C# - Complete Game Dev Course",
    description:
      "Create the complete 2D survival game in Unity with C#. Learn best practices and patterns.",
    date: "2022-02-12",
    coverImage: "https://thrangra.sirv.com/Final_Unity_2D_Small.jpg",
  },
  {
    slug: "markdown-full-example",
    title: "Markdown Extensive Example",
    description: "Learn how to write markdown",
    date: "2022-01-12",
    coverImage:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50",
  },
];

const portfolios = [
  {
    slug: "software-engineer-siemens",
    title: "Software Engineer Siemens",
    description: "Working as C++ and C# software engineer",
    employmentDate: "2022-01-12",
    coverImage:
      "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=50",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
        <Head>
          <title>Personal Blog - Takao Kishimoto</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="relative">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <Navbar />
            <Header />
          </div>
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              priority
              layout="fill"
              alt=""
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1369&q=60"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Newest Blogs
            <Link href="/blogs" className="text-sm ml-1 text-indigo-600">
              (See All)
            </Link>
          </h2>

          {/* Blog List Starts */}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {blogs.map((blog) => (
              <div key={blog.slug} className="group">
                <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                  <Link href={`/blogs/${blog.slug}`}>
                    <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                      <Image
                        priority
                        layout="fill"
                        objectFit="cover"
                        src={blog.coverImage}
                        className="rounded-lg hover:cursor-pointer"
                        alt={""}
                      />
                    </div>
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                      <span aria-hidden="true" className="inset-0" />
                      {blog.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{blog.description}</p>
                  </div>
                </div>
                <Link href={`/blogs/${blog.slug}`} className="text-sm font-bold text-gray-700">
                  Read More
                </Link>
              </div>
            ))}
          </div>
          {/* Blog List Ends */}

          <br></br>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Portfolios
            <Link href="/portfolios" className="text-sm ml-1 text-indigo-600">
              (See All)
            </Link>
          </h2>

          {/* Portfolio List Starts */}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {portfolios.map((portfolio) => (
              <div key={portfolio.slug} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    layout="fill"
                    src={portfolio.coverImage}
                    alt={""}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={`/portfolios/${portfolio.slug}`}>
                    <span className="absolute inset-0" />
                    {portfolio.title}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{portfolio.description}</p>
              </div>
            ))}
          </div>
          {/* Portfolio List Ends */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
