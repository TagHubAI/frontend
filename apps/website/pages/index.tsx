import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import workflowImg from 'public/Home.png';

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
          animate="animated fade-in-up"
        >
          Next-gen{' '}
          <span
            bg="gradient-to-r !clip-text"
            gradient="from-blue-500 to-rose-500"
            text="transparent"
            pos="relative"
          >
            AI-powered
          </span>{' '}
          Analytics Platform
        </h1>

        <p text="lg md:xl zinc-500" max-w="3xl">
          TagHub makes it simple to track, monitor, and learn from data on
          social networks. Powered by cutting edge Artificial Intelligence
          technology.
        </p>

        <button className="btn" pos="relative">
          Coming soon
        </button>

        <figure
          m="x-auto t-8 b-48"
          pos="relative"
          border="rounded-md"
          before="content-DEFAULT absolute -inset-8 -z-1 bg-gradient opacity-10 filter blur-xl transform-gpu"
          w="full"
          filter="~ drop-shadow-2xl"
        >
          <Image
            src={workflowImg}
            alt="TagHub Workflow screen"
            style={{
              borderRadius: '0.25rem',
            }}
            onLoad={() => console.log('loaded')}
          />
        </figure>
      </section>
    </>
  );
};

export default Home;
