import turbine from '../../../public/images/turbine.jpg'
import Image from 'next/image';
import Button from './button';
import P from './p';

export default function Hero() {
  return (
    <div className="flex py-12">
      <div className="flex md:flex-col lg:flex-row gap-12 justify-center my-12">
        <div className='flex  md:flex-1 flex-col justify-center gap-10 lg:py-44'>
          <h1 className="text-8xl font-bold text-blue-800 dark:text-cyan-100">Get your energy up!</h1>
          <P secondary>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, nulla? Voluptas earum corporis dignissimos</P>
          <div className="flex flex-row gap-3">
            {/* Make actual buttons */}
            <a href='/pricing'>
              <Button>Get some energy</Button>
            </a>
            <Button secondary>Learn more</Button>
          </div>
        </div>
        <div className="hidden md:flex flex-1 rounded-3xl flex-shrink overflow-hidden">
            <Image
              alt="mountains"
              src={turbine}
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
