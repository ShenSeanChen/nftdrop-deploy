import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {

  // 1. search: tailwind nextjs -> https://v2.tailwindcss.com/docs/guides/nextjs
        // -> npx create-next-app -e with-tailwindcss nftdrop-deploy
        // index.tsx is the home page; _app.tsx is the starting point
        // TailwindCSS is mobile first, meaning everything fits to the smallest screen first -> only applies to big screen sizes if we apply 'break points'
        // Exp for break points: className = "lg:h-96 lg:w-72" --> responsive design

  // 2. docs.thirdweb.com/react
  // 3. git remote -v --> check if the git repo is the right one. If not --> git remote remove origin
        // -> git remote add origin https://github.com/shenseanchen/nftDrop-deploy.git
        // if you get error config bad config option: userkeychain -> open ~/.ssh/config -> https://www.unixtutorial.org/ssh-bad-configuration-option-usekeychain/
        // -> git remote set-url origin https://github.com/<user_name>/<repo_name>.git
            // https://stackoverflow.com/questions/30068298/git-fatal-could-not-read-from-remote-repository-please-make-sure-you-have-th 
  // 3. Create a folder called nft under pages and add in [id].tsx for NFTDROP collections


  return (
    <div className="">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <h1 className='text-red-500 text-4-xl'>Welcome to Web 3.0!</h1>
      
    </div>
  )
}

export default Home
