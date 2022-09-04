import { useFocusTrap, useScrollLock, useWindowScroll } from '@mantine/hooks';
import { Hamburger } from 'components/Hamburger';
import { stagger, timeline } from 'motion';
import Link from 'next/link';
import cx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import Logo from 'components/graphics/Logo';
import { useRouter } from 'next/router';

const links = [
  {
    name: 'Features',
    href: '/features',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const duration = 0.5;
const navOpen = () =>
  timeline(
    [
      [
        '#mobile-nav',
        {
          height: [0, 'calc(100vh - 4rem)'],
          borderColor: ['transparent', 'inherit'],
        },
        { duration },
      ],
      [
        '#mobile-nav a',
        {
          opacity: [0, 1],
          y: [-16, 0],
        },
        { duration, delay: stagger(0.1), at: 0 },
      ],
    ],
    { duration }
  );
const navClose = () =>
  timeline(
    [
      [
        '#mobile-nav a',
        {
          opacity: [1, 0],
          y: [0, -8],
        },
        { duration, delay: stagger(0.1) },
      ],
      [
        '#mobile-nav',
        {
          height: ['calc(100vh - 4rem)', 0],
          borderColor: ['inherit', 'transparent'],
        },
        { duration, at: 0 },
      ],
    ],
    { duration }
  );

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [scroll] = useWindowScroll();
  const router = useRouter();

  const focusTrapRef = useFocusTrap(isOpen);
  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) navOpen();
    else navClose();
  }, [isOpen]);

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  return (
    <>
      <nav
        pos="fixed z-10"
        w="full"
        transition="all"
        transform="gpu"
        className={cx(
          scroll.y > 32 &&
            'border-b-1 bg-white bg-opacity-80 backdrop-filter backdrop-blur-xl',
          isOpen && 'bg-opacity-100'
        )}
        ref={focusTrapRef}
      >
        <div
          className="container"
          flex="~ row"
          items="center"
          justify="between"
          h="16"
        >
          <Link href="/">
            <a
              flex="~"
              gap="2"
              items="center"
              font="bold tracking-tight"
              text="xl"
              tabIndex={isOpen ? -1 : 0}
            >
              <Logo h="6" />
              TagHub
            </a>
          </Link>

          <div md="hidden" w="10">
            <Hamburger
              size={20}
              toggled={isOpen}
              toggle={setOpen}
              hideOutline={false}
            />
          </div>

          <div hidden md="flex" gap="12">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="link">{link.name}</a>
              </Link>
            ))}
          </div>
        </div>

        <Transition
          in={isOpen}
          nodeRef={nodeRef}
          mountOnEnter
          unmountOnExit
          timeout={duration * 1000}
        >
          <div
            ref={nodeRef}
            id="mobile-nav"
            pos="absolute"
            flex="~ col"
            w="full"
            bg="white"
            p="x-6"
            h="full"
            border="t-1"
            overflow="hidden"
          >
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <a flex="~" items="center" border="b-1" p="y-4">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </Transition>
      </nav>
    </>
  );
}
