import React from 'react'

function NFTDropPage() {
  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/* Left-side Screen */}
        <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='mt-5 bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                    <img 
                    className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
                    src="https://links.papareact.com/8sg" alt="" />
                </div>
                
                <div className='space-y-2 text-center p-5'>
                    <h1 className='text-4xl font-bold text-white'>
                        ShenSeanChen Punk!
                    </h1>
                    <h2 className='text-xl text-gray-300'>
                        A collection of ShenSeanChen Dope Apes !
                    </h2>
                </div>
            </div>
        </div>


        {/* Right-side Screen */}
        <div className='lg:col-span-6 flex flex-1 flex-col p-12 bg-gradient-to-br from-orange-100 to-violet-200'>
            {/* Header */}
            <header className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-lg font-extralight sm:w-80'>
                    THE{' '} <span className='font-extrabold underline decoration-pink-600/50'>ShenSeanChen</span> {' '}NFT Marketplace
                </h1>

                <button className='lg:px-5 lg:py-3 rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold'>Sign In</button>
            </header>

            <hr className='my-2 border border-rose-300'/>

            {/* Content */}
            <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center
            lg:space-y-0 lg:justify-center'>
                <img className='w-80 object-cover pb-10 lg:h-160' 
                src="https://links.papareact.com/bdy" alt=""/>

                <h1 className='text-3xl font-bold lg:text-3xl lg:front-extrabold'>
                    The SEAN's Stories Fan Club | Whusssup NFT!
                </h1>

                <p className='pt-2 text-xl text-green-600'>13 / 21 SEAN's NFT Claimed </p>

            </div>

            {/* Mint Button */}
        </div>
    </div>
  )
}

export default NFTDropPage