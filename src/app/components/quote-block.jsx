import Image from "next/image";
import P from "./p";
import esther from '../../../public/images/esther.jpg'

export default function QuoteBlock() {
  return (
    <div className="flex flex-col md:flex-row items-center py-24">
      <div className="flex flex-1 md:m-12 rounded-xl overflow-hidden max-h-[400px]">
        <Image
          alt="Esther Howard CEO and Founder"
          className="object-top md:object-center"
          src={esther}
          priority={true}
          placeholder="blur"
          quality={100}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        {/* <div>Quote svg</div> */}
        <span className="text-5xl font-bold text-blue-800 dark:text-cyan-100">Lorem ipsum sit dolor sit amet consctutar</span>
        <P secondary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum reprehenderit provident perferendis cumque aperiam ipsum soluta harum architecto? Ut, distinctio? Ut, ducimus praesentium! Aliquam odit tempore harum laudantium exercitationem?</P>
        <div className="h-[1px] dark:bg-rose-300 bg-rose-500"/>
        <p className="font-bold text-xl text-blue-800 dark:text-cyan-100">Esther Mane</p>
        <p className="text-sm text-slate-500">CEO & Founder</p>
      </div>
    </div>
  )
}
