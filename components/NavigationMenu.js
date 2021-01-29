import Link from 'next/link'

export default function NavigationMenu() {
  return (
    <nav className="w-full flex flex-col flex-shrink-0 fixed top-0 right-0 left-0 h-auto">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-0">
        <Link href="/">
          <a className="hover:underline">The Working End</a>
        </Link>
        .
      </h2>
    </nav>
  )
}