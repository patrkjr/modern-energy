export default function FooterLink({ href, text }) {
  return (
    <div className="pb-2 mb-1">
    <a href={href}>
      <p className="text-slate-400 dark:text-slate-500 hover:text-cyan-400 transition-colors">{text}</p>
    </a>
    </div>
  )
}
