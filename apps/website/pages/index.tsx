import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import workflowImg from 'public/Home.webp';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TagHub | Next-gen analytics platform</title>
        <meta
          name="description"
          content="TagHub is a analytics platform powered by AI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className="container"
        display="flex"
        flex="col"
        gap="8"
        m="x-auto"
        p="x-6 t-32"
        items="center"
        text="center"
        pos="relative"
        after="content-DEFAULT absolute inset-0 -z-2"
      >
        <h1
          text="4xl sm:6xl lg:7xl"
          font="bold tracking-tight !leading-tight"
          m="-b-2"
          max-w="sm sm:3xl"
        >
          Next-gen{' '}
          <span
            bg="gradient-to-r !clip-text"
            // gradient="from-[#0060f0] to-[#00dfff]"
            gradient="from-blue-500 to-rose-500"
            text="transparent"
            pos="relative"
          >
            AI-powered
          </span>{' '}
          Analytics Platform
        </h1>

        <p text="lg md:xl zinc-500" max-w="3xl">
          TagHub ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button className="btn" pos="relative">
          Book a Demo
        </button>

        <figure
          m="x-auto t-8 b-16"
          pos="relative"
          shadow="xl"
          border="rounded-md"
          before="content-DEFAULT absolute -inset-8 w-full -z-1 bg-gradient opacity-10 filter blur-xl transform-gpu"
          w="full"
        >
          <Image src={workflowImg} alt="TagHub Workflow screen" />
        </figure>
      </section>

      <section bg="white" border="t-1">
        <div
          p="x-6 y-32"
          display="grid"
          grid="~ cols-1 md:cols-2"
          m="auto"
          max-w="6xl"
          gap="16"
        >
          <h1 text="4xl" font="bold tracking-tight !leading-tight" m="-b-2">
            Next-gen Data Exploration and Labeling Platform
          </h1>
          <div border="~ rounded-md" shadow="xl" bg="white" p="x-10 y-8">
            <p font="leading-relaxed" text="2xl">
              Don&apos;t waste time reading thousands of customer feedbacks.
              Just throw them at TagHub, we&apos;ll handle the rest.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
