import Adam from "./assets/img/adam.png";
// import AdamCV from "./assets/cv/CV M Adam Abdillah.pdf";
import AdamCV from "./assets/cv/CV adam tes.pdf";
import portfolio1 from "./assets/img/portfolio/1.png";
import portfolio2 from "./assets/img/portfolio/2.png";
import portfolio3 from "./assets/img/portfolio/3.png";
import portfolio4 from "./assets/img/portfolio/4.png";
import google from "./assets/img/clients/google.svg";
import gojek from "./assets/img/clients/gojek.svg";
import tokopedia from "./assets/img/clients/tokopedia.svg";
import traveloka from "./assets/img/clients/traveloka.svg";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Typed from "typed.js";
import React from "react";
const App = () => {
  // Navigation
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "#home", current: false },
    { name: "About", href: "#about", current: false },
    { name: "Porfolio", href: "#portfolio", current: false },
    { name: "Clients", href: "#clients", current: false },
    { name: "Blog", href: "#blog", current: false },
    { name: "Contact", href: "#contact", current: false },
  ]);

  // Funtion for classnames untuk menpdatkan class
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Muhammad Adam Abdillah"],
      typeSpeed: 50,
      // backSpeed: 25, // Kecepatan mundur saat menghapus teks (opsional)
      backDelay: 1500, // Jeda sebelum mulai menghapus teks (opsional)
      // startDelay: 1000, // Jeda sebelum mulai mengetik (opsional)
      loop: true, // Mengulangi animasi
      showCursor: false, // Sembunyikan cursor
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleNavItemClick = (index) => {
    const updatedNavigation = navigation.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setNavigation(updatedNavigation);
  };

  return (
    <>
      {/* Navbar */}
      <Disclosure as="nav" className="fixed top-0 z-10 w-full bg-dark">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-3xl text-primary">
                    My <span className="font-bold">Portfolio</span>
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "ml-4 rounded-md px-3 py-2 text-sm font-medium",
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onClick={() => handleNavItemClick(index)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => handleNavItemClick(-1)} // Reset current on mobile menu click
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium",
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleNavItemClick(index)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* End Navbar */}

      {/* Home Section */}
      <section id="home" className="pt-32 md:pt-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 md:w-1/2">
              <h1 className="text-base font-medium text-primary">
                Halo guys👋, perkenalkan saya{" "}
                <span
                  className="mt-1 block text-4xl font-bold text-dark"
                  ref={el}
                >
                  Muhammad Adam Abdillah
                </span>
              </h1>
              <h2 className="mb-5 mt-2 text-base font-medium text-slate-500">
                Frontend Developer | <span className="text-dark">Gamer</span>
              </h2>
              <p className="mb-10 font-medium text-slate-400">
                Belajar web programming itu mudah bukan?{" "}
                <span className="font-extrabold italic text-red-600">
                  BUKAN!
                </span>
              </p>
              <button className="animate-bounce shadow-md">
                <a
                  href={AdamCV}
                  className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                  download={AdamCV}
                >
                  Download CV
                </a>
              </button>
            </div>
            <div className="w-full self-end px-4 md:w-1/2">
              <div className="relative mt-12 lg:left-0 lg:mt-9">
                <img
                  src={Adam}
                  alt="Muhammad Adam Abdillah"
                  className="mx-auto rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home Section */}
      {/* About Section */}
      <section id="about" className="pb-32 pt-16 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Tentang Saya
              </h4>
              <h2 className="mb-5 max-w-md text-2xl font-semibold text-dark dark:text-white lg:text-4xl">
                Yuk, belajar web programming bersama!
              </h2>
              <p className="max-w-xl text-justify text-base font-medium text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                temporibus maiores sequi vitae saepe iusto deleniti!
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
                Mari berteman
              </h3>
              <p className="mb-6 text-justify text-base font-medium text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos, hic animi quasi ipsum exercitationem ipsam incidunt
                voluptatem.
              </p>
              <div className="flex items-center">
                {/* <!-- Youtube --> */}
                <a
                  href="https://youtube.com/adamerzchannel"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </a>

                {/* <!-- Instagram --> */}
                <a
                  href="https://instagram.com/adamrealcuy"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                  </svg>
                </a>

                {/* <!-- TikTok --> */}
                <a
                  href="https://www.tiktok.com/@adamofficial43"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>TikTok</title>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                  </svg>
                </a>

                {/* <!-- LinkedIn --> */}
                <a
                  href="https://www.linkedin.com/in/muhammad-adam-abdillah-38850922b"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Projek Section */}
      <section
        id="portfolio"
        className="bg-slate-100 pb-16 pt-36 dark:bg-slate-800"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Portfolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus porro consequuntur alias, commodi nemo enim aliquam
                ipsam obcaecati? Assumenda, ipsam?
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={portfolio1}
                  className="transition-all duration-500 hover:scale-110"
                  alt="My portfolio"
                  width="w-full"
                />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                My Personal Portfolio
              </h3>
              <p className="mb-[12px] text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                iusto! Aliquam, corporis.
              </p>
              <a
                href="https://adamofficialdev.github.io/"
                target="_blank"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-80"
              >
                Demo
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={portfolio2}
                  className="transition-all duration-500 hover:scale-110"
                  alt="MovieDB"
                  width="w-full"
                />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                React MovieDB
              </h3>
              <p className="mb-[12px] text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                iusto! Aliquam, corporis.
              </p>
              <a
                href="https://adamreactmovie-adamofficialdev.vercel.app/"
                target="_blank"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-80"
              >
                Demo
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={portfolio3}
                  className="transition-all duration-500 hover:scale-110"
                  alt="Portfolio V2"
                  width="w-full"
                />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                My Personal Portfolio V2
              </h3>
              <p className="mb-[12px] text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                iusto! Aliquam, corporis.
              </p>
              <a
                href="#"
                target="_blank"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-80"
              >
                Demo
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={portfolio4}
                  className="transition-all duration-500 hover:scale-110"
                  alt="todo app"
                  width="w-full"
                />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                To Do List App
              </h3>
              <p className="mb-[12px] text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                iusto! Aliquam, corporis.
              </p>
              <a
                href="https://to-do-list-react-js-coral.vercel.app/"
                target="_blank"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-80"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Projek Section */}
      {/* Client Section */}
      <section id="clients">
        <div className="bg-slate-800 pb-32 pt-36">
          <div className="container">
            <div className="w-full px-4">
              <div className="mx-auto mb-16 text-center">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Clients
                </h4>
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Bekerjasama Dengan
                </h2>
                <p className="text-md font-medium text-secondary md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  suscipit facilis velit!
                </p>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <button className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                  <img
                    src={google}
                    className="transition-all duration-500 hover:scale-110"
                    alt="google"
                  />
                </button>
                <button className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                  <img
                    src={gojek}
                    className="transition-all duration-500 hover:scale-110"
                    alt="gojek"
                  />
                </button>
                <button className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                  <img
                    src={traveloka}
                    className="transition-all duration-500 hover:scale-110"
                    alt="traveloka"
                  />
                </button>
                <button className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                  <img
                    src={tokopedia}
                    className="transition-all duration-500 hover:scale-110"
                    alt="tokopedia"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Client Section */}

      {/* blog section */}
      <section id="blog" className="bg-slate-100 pb-32 pt-36 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Tulisan Terkini
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quisquam perspiciatis blanditiis dolores?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="https://source.unsplash.com/360x200?laptop"
                  alt="Programming"
                  className="mx-auto mt-3 w-[95%] rounded-lg rounded-bl-md rounded-br-xl rounded-tl-xl rounded-tr-md"
                />
                <div className="px-6 py-8">
                  <h3>
                    <p className="mb-3 block truncate text-xl font-semibold text-dark dark:text-white">
                      Tips Belajar Programming
                    </p>
                  </h3>
                  <p className="mb-6 text-base font-medium text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi quisquam perspiciatis blanditiis dolores?
                  </p>
                  <a
                    href="#"
                    className="rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="https://source.unsplash.com/360x200?mechanical+keyboard"
                  alt="Mechanical Keyboard"
                  className="mx-auto mt-3 w-[95%] rounded-lg rounded-bl-md rounded-br-xl rounded-tl-xl rounded-tr-md"
                />
                <div className="px-6 py-8">
                  <h3>
                    <p className="mb-3 block truncate text-xl font-semibold text-dark dark:text-white">
                      Review Mechanical Keyboard
                    </p>
                  </h3>
                  <p className="mb-6 text-base font-medium text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi quisquam perspiciatis blanditiis dolores?
                  </p>
                  <a
                    href="#"
                    className="rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="https://source.unsplash.com/360x200?computer"
                  alt="Coffee"
                  className="mx-auto mt-3 w-[95%] rounded-lg rounded-bl-md rounded-br-xl rounded-tl-xl rounded-tr-md"
                />
                <div className="px-6 py-8">
                  <h3>
                    <p className="mb-3 block truncate text-xl font-semibold text-dark dark:text-white">
                      Menikmati Secangkir Kopi
                    </p>
                  </h3>
                  <p className="mb-6 text-base font-medium text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, totam ipsum ea quam sequi velit sunt.
                  </p>
                  <a
                    href="#"
                    className="rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end blog section */}

      {/* Contact Section */}
      <section id="contact" class="pb-32 pt-36 dark:bg-slate-800">
        <div class="container">
          <div class="w-full px-4">
            <div class="mx-auto mb-16 max-w-xl text-center">
              <h4 class="mb-2 text-lg font-semibold text-primary">Contact</h4>
              <h2 class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Hubungi Kami
              </h2>
              <p class="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, sed.
              </p>
            </div>
          </div>

          <form>
            <div class="w-full lg:mx-auto lg:w-2/3">
              <div class="mb-8 w-full px-4">
                <label for="name" class="text-base font-medium text-primary">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  class="input input-bordered w-full rounded-md  p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div class="mb-8 w-full px-4">
                <label for="email" class="text-base font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="input input-bordered w-full rounded-md  p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div class="mb-8 w-full px-4">
                <label for="message" class="text-base font-medium text-primary">
                  Pesan
                </label>
                <textarea
                  type="email"
                  id="email"
                  class="input input-bordered h-32 w-full rounded-md  p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div class="w-full px-4">
                <button class="w-xl rounded-lg bg-primary px-16 py-3 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-md">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* End Contact Section */}

      {/* footer */}
      <section>
        <footer class="footer footer-center bottom-0 left-0 right-0 bg-dark p-4 text-base-content">
          <aside>
            <p className="text-white">
              Copyright © 2023 -{" "}
              <span className="font-bold italic">Adam Official</span>
            </p>
          </aside>
        </footer>
      </section>
      {/* end footer */}
    </>
  );
};

export default App;
