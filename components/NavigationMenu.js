import Link from 'next/link'
import {ThreeBarsIcon} from '@primer/octicons-react'

export default function NavigationMenu() {
  return (
    <nav className="w-full flex flex-row justify-betweenflex-shrink-0 fixed top-0 right-0 bg-blue text-white left-0 h-auto justify-between text-white">
      <h2 className="text-2xl mt-6 ml-6 sm:text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-6">
        <Link href="/">
          <a className="hover:underline">The Working End</a>
        </Link>
        .
      </h2>
      <ThreeBarsIcon
        size={32}
        className="mt-6 mr-6"
      />
    </nav>
  )
}