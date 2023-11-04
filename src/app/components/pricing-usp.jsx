'use client'
import Switch from './switch';
import P from './p';
import TextInput from './text-input';
import mountains from '../../../public/images/mountains.jpg';
import { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from 'next/image';
import Button from './button';

export default function PricingUSP() {
  const [isToggled, setIsToggled] = useState(false);

  const numberToShow = isToggled ? 299 : 599;

  const count = useMotionValue(numberToShow);
  const rounded = useTransform(count, Math.round);

  const handleOnClick = () => {
    const animation = animate(count, !isToggled ? 299 : 599, { duration: 2, ease: 'easeInOut'  });
    setIsToggled(!isToggled);
  }

  return (
    <div className="py-24 flex flex-col items-center">
      <div className="flex flex-col just gap-12 max-w-4xl">
        <p className="text-center text-cyan-500">Our affordable pricing</p>
        <h1 className="font-bold text-5xl text-center text-blue-900 dark:text-cyan-100">Lorem ipsum dolor sit amet consectetur</h1>
        <p className="text-center text-slate-500 dark:text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores officiis corporis provident quis suscipit, inventore libero odit laborum earum.</p>
      </div>
      <div className='flex w-full border border-slate-200 dark:border-slate-800 rounded-xl my-12 overflow-hidden'>
        <div className='flex flex-[1.5] md:flex-1 flex-col gap-4'>
          <div className='p-12 flex flex-col gap-4'>
            <p className='text-cyan-400'>Sign up</p>
            <h3 className='text-4xl text-blue-800 dark:text-cyan-100'>Finish your payment</h3>
            <div className='flex items-end'>
              <motion.p className='text-6xl'>{rounded}</motion.p><p className='text-lg text-slate-500'>/year</p>
            </div>
            <div className='flex items-center gap-4'>
              <P secondary>Save with yearly billing?</P>
              <Switch toggled={isToggled} onClick={handleOnClick}/>
            </div>
            <form action="" className='flex flex-col gap-3'>
              <TextInput/>
              <Button type={'submit'} onClick={event => event.preventDefault()}>Sign up</Button>
            </form>
          </div>
        </div>
        <div className='hidden sm:flex flex-1 bg-rose-50'>
          <Image
            alt="mountains"
            src={mountains}
            placeholder='blur'
            quality={100}
            sizes='50vw'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}
