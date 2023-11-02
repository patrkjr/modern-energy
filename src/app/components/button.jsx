export default function Button({ onClick, children, secondary, type }) {

  if (secondary) {
    return (
        <button type={type} className="flex justify-center items-center h-14 px-10 font-bold text-blue-800 dark:text-cyan-100 border rounded py-5 min-w-max" onClick={onClick}>{children}</button>
      )    
  }

  return (
    <button type={type} className="flex justify-center items-center h-14 px-10 font-bold text-white rounded transition-colors dark:bg-rose-800 hover:bg-rose-600 dark:hover:bg-rose-700 bg-rose-500 min-w-max" onClick={onClick}>{children}</button>
  )
}
