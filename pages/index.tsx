import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { animate, stagger } from 'motion';

const Home: NextPage = () => {
  useEffect(() => {
    animate(
      'section',
      { y: [-50, 0], opacity: [0.5, 1] },
      { duration: 1, delay: stagger(0.1) }
    );
  }, []);
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
        display="flex"
        flex="col"
        gap="6 sm:8"
        m="x-auto"
        p="x-6 y-16"
        items="center"
        text="center"
        pos="relative"
        // after="content-DEFAULT absolute inset-0 bg-gray-200 -z-1"
      >
        <h1
          text="4xl sm:5xl lg:6xl"
          font="semibold tracking-tight !leading-tight"
          m="-b-2"
          max-w="3xl"
        >
          Next-gen Data Exploration and Labeling Platform
        </h1>

        <p text="lg md:xl" max-w="3xl">
          TagHub ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button
          w="max-36"
          font="medium"
          transition="duration-500 all ease"
          bg="black"
          focus-visible="bg-gray-800"
          active-bg="gray-600"
          p="x-8 y-3"
          border="rounded-md"
          text="white lg"
        >
          Sign up
        </button>
      </section>

      <section p="x-6">
        <figure border="1 rounded-md" shadow="2xl" m="auto" max-w="6xl">
          <Image
            src="/Home.svg"
            width={1280}
            height={800}
            w="max-sm"
            alt="TagHub Workflow Analytics screen"
            border="rounded-md"
          ></Image>
        </figure>
      </section>
    </>
  );
};

export default Home;
