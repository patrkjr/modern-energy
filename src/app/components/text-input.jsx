export default function TextInput() {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="email" className='block text-slate-400'>
        Email
      </label>
      <input className="block text-lg hover:shadow appearance-none border dark:text-cyan-100 dark:border-slate-700 dark:bg-slate-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow" type="text" name="email" id="" placeholder='Your email'/>
    </div>
  )
}
