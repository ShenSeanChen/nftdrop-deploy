import React from 'react'
import { ConnectWallet, useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { useRouter } from 'next/router';


function NFTDropPage() {

  // auth  
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  console.log(address)

  // router query
  const router = useRouter()
  const {id} = router.query

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>

        {/* Left-side Screen */}
        <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='mt-5 bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                    <img 
                    className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
                    src="https://cdn.vox-cdn.com/thumbor/F_C05ZoLpn-95oyfNtl87DD2H6Q=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71614827/Ash_Ketchum_World_Champion_Screenshot_2.0.jpg" alt="" />
                </div>
                
                <div className='space-y-2 text-center p-5'>
                    <h1 className='text-4xl font-bold text-white'>
                        {id} Punk!
                    </h1>
                    <h2 className='text-xl text-gray-300'>
                        A collection of Doper from {id}!
                    </h2>
                </div>
            </div>
        </div>


        {/* Right-side Screen */}
        <div className='lg:col-span-6 flex flex-1 flex-col p-12 bg-gradient-to-br from-orange-100 to-violet-200'>
            {/* Header */}
            <header className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-lg font-extralight sm:w-80'>
                    THE{' '} <span className='font-extrabold underline decoration-pink-600/50'>{id}</span> {' '}NFT Marketplace
                </h1>

                <button onClick={() => address ? disconnect() : connectWithMetamask()} 
                 className='lg:px-5 lg:py-3 rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold'>
                    {address ? "Sign Out" : "Sign In"}
                </button>
            </header>

            <hr className='my-2 border border-rose-300'/>
            {address && (
                <p className='text-center text-sm text-rose-300'>
                    You're logged in with wallet 
                    {address.substring(0, 5)}...{address.substring(address.length - 5)}
                </p>
            )}

            {/* Content */}
            <div className='mt-10 flex flex-1 flex-col items-center space-y-2 text-center
            lg:space-y-0 lg:justify-center'>
                <img className='w-180 object-cover pb-10 px-10 lg:h-160' 
                src="https://pbs.twimg.com/media/FeTn7iHaMAAlat0.jpg" alt=""/>

                <h1 className='text-2xl font-bold lg:text-3xl lg:front-extrabold'>
                    The {id} Fan Club | NFT
                </h1>

                <p className='pt-2 text-lg text-green-600'>13 / 21 {id}'s NFT Claimed </p>

            </div>

            {/* Mint Button */}
            <button className='mt-5 h-16 bg-red-300 w-full text-white rounded-full text-center font-bold'>
                Mint NFT (0.01 ETH)
            </button>
        </div>
    </div>
  )
}

export default NFTDropPage