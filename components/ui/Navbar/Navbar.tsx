import Link from 'next/link';

import s from './Navbar.module.css';
import Image from 'next/image';

export default async function Navbar() {
  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Image
                src={'https://avatars.githubusercontent.com/u/43552157?v=4'}
                alt={'Logo'}
                width={32}
                height={32}
              />
            </Link>
            <nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/" className={s.link}>
                Collections
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
