import React from 'react'
import FAQ from './Faqs'

const Faq = () => {
  return (
    <div>
        <div className=' w-full h-28'>
            <h1 className='lg:text-6xl text-3xl mt-17 lg:w-[50%] md:w-[50%] w-[80%] mb-7 mx-auto font-semibold'>Frequently asked
            questions</h1>
        </div>
        <FAQ/>
    </div>
  )
}

export default Faq