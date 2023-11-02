'use client'
import Button from './button'

export default function CallToSignUp() {

  const handleClick = () => {
    console.log('Click')
  }

  return (
    <div className='flex flex-col gap-6 py-48'>
      <h2 className="font-bold text-6xl text-blue-900 dark:text-cyan-100">Let's start something completly new together</h2>
      <div className='flex gap-4 items-center'>
        <p className='text-slate-500 dark:text-slate-400'>Drop us a line and we'll be in touch.<br/>Lets see if we're a match and how we can assist you.</p>
        <Button onClick={handleClick}>Sign up</Button>
      </div>
    </div>
  )
}
