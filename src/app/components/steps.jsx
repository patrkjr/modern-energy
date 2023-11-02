import StepBox from './step-box';

export default function Steps() {
  return (
    <div className="flex flex-col items-center py-24">
      <div className="flex flex-col md:max-w-2xl gap-10 px-12 py-24">
        <p className='text-center font-bold text-cyan-500'>How it works?</p>
        <h2 className="text-5xl font-bold text-center text-cyan-900 dark:text-cyan-100">Find out how simple and easy it is</h2>
        <p className="text-center text-slate-500 dark:text-slate-400">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem architecto iste sint, tenetur dolorum tempore perferendis voluptatem quis!
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-4">
        <StepBox
          title='Lorem'
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem architecto iste sint, tenetur dolorum tempore perferendis'
          step='1'
          color="bg-cyan-500 dark:bg-cyan-800"
        />
        <StepBox
          title='Ipsum'
          text='Autem architecto iste sint, tenetur dolorum tempore perferendis voluptatem quis!'
          step='2'
          color="bg-emerald-500 dark:bg-emerald-800"
        />
        <StepBox
          title='Sit doloes'
          text='Amet consectetur adipisicing elit. Autem architecto iste sint, tenetur dolorum tempore perferendis'
          step='3'
          color="bg-rose-500 dark:bg-rose-800"
        />
      </div>
    </div>
  )
}
