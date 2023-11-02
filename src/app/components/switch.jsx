'use client'
import { motion } from "framer-motion"
import { useState } from "react";

export default function Switch({ toggled = false, onClick }) {
  const justify = toggled ? 'justify-end' : 'justify-start';

  return (<>
    {/* Make this a "input" tag instead */}
    <div onClick={onClick} data-is-on={toggled} className={`flex transition-colors cursor-pointer items-center p-1 data-[is-on=false]:bg-slate-300 data-[is-on=true]:bg-blue-300 w-16 h-10 rounded-full ${justify}`}>
      <motion.div data-is-on={toggled} className="rounded-full transition-colors h-8 w-8 bg-white data-[is-on=true]:bg-blue-500" layout/>
    </div>
    </>
  )
}
