import AccordionItem from './accordion-item';
import fiveXLText from '../typography/5xl'

export default function FAQ() {
  return (
    <div>
      <div className="grid lg:gap-12 grid-cols-1 lg:grid-cols-3 my-12">
        <div className="lg:col-span-1">
          <h2 className={`${fiveXLText} py-4`}>FAQ</h2>
          <p>
            We always try to answer any questions you might have.
          </p>
          </div>
        <div className="lg:col-span-2">
          <AccordionItem title="Lorem ipsum?" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quasi earum impedit quos nam est dicta, error maxime! Dolorum placeat officia illo et impedit molestias illum, architecto possimus commodi. Fugiat?"/>
          <AccordionItem title="Sit dolor sit amet?" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quasi earum impedit quos nam est dicta, error maxime! Dolorum placeat officia illo et impedit molestias illum, architecto possimus commodi. Fugiat?"/>
          <AccordionItem title="Consectetur adipisicing elit?" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quasi earum impedit quos nam est dicta, error maxime! Dolorum placeat officia illo et impedit molestias illum, architecto possimus commodi. Fugiat?"/>
        </div>
      </div>
    </div>
  )
}
