import Logo from 'components/graphics/Logo';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const links = [
  {
    name: 'Docs',
    href: '/docs',
  },
  {
    name: 'Features',
    href: '/features',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'About',
    href: '/About',
  },
];

export default function Footer() {
  return (
    <footer className="? dark" bg="black" text="white">
      <div
        flex="~ col sm:row"
        m="auto"
        justify="between"
        max-w="6xl"
        p="x-6 y-12"
        gap="10"
        items="center sm:start"
        pos="relative"
      >
        <div
          max-w="64"
          text="zinc-400"
          flex="~ col"
          gap="2"
          items="center sm:start"
        >
          <Link href="/">
            <a
              className="link"
              flex="~"
              gap="2"
              items="center"
              font="bold tracking-tight"
              text="xl"
            >
              <Logo h="6" />
              <p hidden sm="block">
                TagHub
              </p>
            </a>
          </Link>

          <p font="medium" text="sm center sm:left">
            AI powered solutions for data exploration and labeling.
          </p>

          <div flex="~" gap="6 sm:4" m="t-2">
            <Link href="https://github.com/TagHubAI/">
              <a aria-label="TagHub Repository">
                <IoLogoGithub size="24" className="link" />
              </a>
            </Link>
            <Link href="https://www.facebook.com/taghub.dev">
              <a aria-label="TagHub Facebook Page">
                <IoLogoFacebook size="24" className="link" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/taghubml">
              <a aria-label="TagHub LinkedIn Page">
                <IoLogoLinkedin size="24" className="link" />
              </a>
            </Link>
          </div>
        </div>

        <div flex="~ row" gap="8">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="link" font="medium" text="sm" h="min">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div
        border="t-1 zinc-800"
        m="auto"
        p="6"
        w="full"
        text="sm center zinc-400"
      >
        © 2022 TagHub AI. All rights reserved.
      </div>
    </footer>
  );
}
