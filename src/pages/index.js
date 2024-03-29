import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/home/light bulb (without background).png";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Richmond Sin | Home Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center.justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Richmond Sin"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw, 
                  50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col item-center self-center lg:w-full lg:text-center md:pt-2 sm:pt-2">
              <h1></h1>
              <AnimatedText
                text="Data Visionary, Transforming Possibilities."
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl 
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                <p>
                  As an aspiring full-stack data scientist, I am passionate in
                  solving real world problems with intricate machine learning
                  algorithms and predictive modeling. I am also dedicated in
                  bringing those solutions to users through innovative web
                  applications.
                </p>
                <p>
                  Explore my latest projects and articles, showcasing my
                  expertise and interests.
                </p>
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-1 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <LinkArrow className={"!w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:richmondsin.rs@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-40 md:hidden">
          <Image src={lightBulb} alt="Richmond Sin" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
