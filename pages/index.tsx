import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { animate } from 'motion';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter;
  useEffect(() => {
    animate(
      'section',
      { y: [-50, 0], opacity: [0, 1] },
      { duration: 1, delay: 0.5 }
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
        gap="8"
        m="x-auto"
        p="x-6 t-32"
        items="center"
        text="center"
        pos="relative"
        after="content-DEFAULT absolute bg-gray-100 inset-0 -z-2"
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
          onClick={() => (window.location.href = '?')}
        >
          Sign up
        </button>

        <figure border="1 rounded-md" shadow="2xl" m="x-auto y-16" max-w="6xl">
          <Image
            src="/Home.svg"
            width={1280}
            height={800}
            alt="TagHub Workflow Analytics screen"
            border="rounded-md"
          ></Image>
        </figure>
      </section>

      {/* <section
        p="x-16"
        h="128"
        pos="relative"
        after="content-DEFAULT bg-white absolute inset-0 -top-[100%] -z-1 transform-gpu -skew-y-6"
      ></section> */}

      <section
        p="x-6 y-32"
        display="grid"
        grid="~ cols-2"
        m="auto"
        max-w="6xl"
        gap="16"
      >
        <h1 text="4xl" font="semibold tracking-tight !leading-tight" m="-b-2">
          Next-gen Data Exploration and Labeling Platform
        </h1>
        <div border="~ rounded-md" shadow="xl" bg="white" p="x-10 y-8">
          <p font="light leading-relaxed" text="2xl">
            Don&apos;t waste time reading thousands of customer feedbacks. Just
            throw them at TagHub, we&apos;ll handle the rest.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
