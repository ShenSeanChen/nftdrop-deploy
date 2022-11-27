import React from 'react'

function NFTDropPage() {
  return (
    <div className='flex h-screen flex-col'>
        {/* Left-side Screen */}
        <div className='bg-gradient-to-br from-cyan-800 to-rose-500'>
            <div className=''>
                <img 
                className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
                src="https://links.papareact.com/8sg" alt="" />
                <div>
                    <h1>
                        ShenSeanChen Punk!
                    </h1>
                </div>
            </div>
        </div>


        {/* Right-side Screen */}
        <div className='bg-gradient-to-br from-orange-300 to-violet-500'>
            <h1>sup</h1>
        </div>
    </div>
  )
}

export default NFTDropPage