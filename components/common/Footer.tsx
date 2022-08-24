import Link from 'next/link';

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
    <footer className="dark" bg="black" text="white">
      <div flex="~" justify="between" gap="4" max-w="6xl" p="x-6 y-8" m="auto">
        <div max-w="64" text="gray-400">
          <a font="bold tracking-tight" text="xl">
            TagHub
          </a>
          <p font="medium" text="sm" m="t-2">
            AI powered solutions for data exploration and labeling.
          </p>
        </div>

        <div flex="~ row" gap="8">
          {links.map((link) => (
            <div key={link.name}>
              <Link href={link.href}>
                <a className="link" font="medium" text="sm">
                  {link.name}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        border="t-1 gray-700"
        m="auto"
        p="6"
        w="full"
        text="sm center gray-500"
      >
        © 2022 TagHub AI. All rights reserved.
      </div>
    </footer>
  );
}
