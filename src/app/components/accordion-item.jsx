'use client';
import H4 from '../typography/h4';


export default function AccordionItem({ title, text }) {
  return (
      <div className='border-b mt-6'>
        <details class="group peer">
          <summary class="flex cursor-pointer justify-between py-5">
            <H4>{title}</H4>
            <svg class="inline-block h-6 w-6 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
        </details>
        <div class="grid pb-4 grid-rows-[0fr] transition-[grid-template-rows] duration-300 peer-open:grid-rows-[1fr]">
          <p className='overflow-hidden'>{text}</p>
        </div>
      </div>
  )
}
