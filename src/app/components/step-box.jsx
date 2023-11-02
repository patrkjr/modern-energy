export default function PricingBox({ title, text, image, step, color }) {

  return (
    // background color is set a bit hacky here

      <div className="border bg-white dark:bg-black border-slate-200 dark:border-slate-800 rounded-xl flex flex-1 flex-col py-10">
        <div className="flex">
          <div className={`m-auto -my-16 text-white flex font-bold h-14 w-14 ${color} rounded-full container items-center justify-center`}>
            {step || 'step'}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center px-8">
          <h4 className="text-center font-bold text-2xl text-cyan-900 dark:text-cyan-100">
            {title}
          </h4>
          <p className="text-center text-slate-500 dark:text-slate-400">
            {text}
          </p>
        </div>
      </div>

  )
}
