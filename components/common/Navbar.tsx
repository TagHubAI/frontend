import { useFocusTrap, useScrollLock, useWindowScroll } from '@mantine/hooks';
import { Hamburger } from 'components/Hamburger';
import { stagger, timeline } from 'motion';
import Link from 'next/link';
import cx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

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
const duration = 0.5;

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [scroll, scrollTo] = useWindowScroll();

  const focusTrapRef = useFocusTrap(isOpen);
  useScrollLock(isOpen);

  useEffect(() => {
    timeline(
      [
        ['#mobile-nav', { height: [0, 'calc(100vh - 4rem)'] }, { duration }],
        [
          '#mobile-nav a',
          {
            opacity: [0, 1],
            y: [-16, 0],
          },
          { duration, delay: stagger(0.1), at: 0 },
        ],
      ],
      { duration, direction: isOpen ? 'normal' : 'reverse' }
    );
  }, [isOpen]);

  return (
    <>
      <nav
        pos="fixed z-10"
        w="full"
        transition="all"
        className={cx(
          scroll.y > 32 && 'border-b-1 bg-white',
          isOpen && 'bg-white backdrop-filter-none'
        )}
        ref={focusTrapRef}
      >
        <div
          flex="~ row"
          items="center"
          justify="between"
          max-w="6xl"
          h="16"
          p="x-6"
          m="auto"
        >
          <Link href="/">
            <a font="bold tracking-tight" text="xl" tabIndex={isOpen ? -1 : 0}>
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
