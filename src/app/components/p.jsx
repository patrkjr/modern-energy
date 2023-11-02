export default function P({ children, color, secondary = false }) {
  return (
    <p className={secondary ? "text-slate-500 dark:text-slate-400" : "text-black dark:text-white"}>
      {children}
    </p>
  )
}
