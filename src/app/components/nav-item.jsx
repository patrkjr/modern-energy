import Link from "next/link"

export default function NavItem({ children, href }) {
  return (
      <Link href={href} className="font-bold text-lg transition-colors text-blue-800 dark:text-cyan-100 hover:text-cyan-400">
        {children}
      </Link>
  )
}
