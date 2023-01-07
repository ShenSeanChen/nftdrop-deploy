import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {

  // 1. search: tailwind nextjs -> https://v2.tailwindcss.com/docs/guides/nextjs
        // -> npx create-next-app -e with-tailwindcss nftdrop-deploy
        // index.tsx is the home page; _app.tsx is the starting point
        // TailwindCSS is mobile first, meaning everything fits to the smallest screen first -> only applies to big screen sizes if we apply 'break points'
        // Exp for break points: className = "lg:h-96 lg:w-72" --> responsive design
  // 2. https://docs.thirdweb.com/react 
  // 3. git remote -v --> check if the git repo is the right one. If not --> git remote remove origin
        // Use the create new branch option instead of adding to existing folder option when creating new repo
        // -> git remote add origin https://github.com/shenseanchen/nftDrop-deploy.git
        // if you get error config bad config option: userkeychain -> open ~/.ssh/config -> https://www.unixtutorial.org/ssh-bad-configuration-option-usekeychain/
        // -> git remote set-url origin https://github.com/<user_name>/<repo_name>.git
            // https://stackoverflow.com/questions/30068298/git-fatal-could-not-read-from-remote-repository-please-make-sure-you-have-th 
  // 3. Create a folder called nft under pages and add in [id].tsx for NFTDROP collections
  // 4. Responsive design ([id].tsx): 
        // -> lg:h-96 lg:w-72
        // -> flex on mobile(default) screen and grid on large screen: flex h-screen flex-col lg:grid lg:grid-cols-10
        // -> make one div to take up 4 columns in large screen: lg:col-span-4 
        // Space out components b/w each other -> justify-between
        // use up as much room as possible in a flex box -> flex flex-1
        // add horizontal line: <hr />
    // 5. thirdweb: docs.thirdweb.com/react
        // -> yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
          // Please only use yarn or only use npm, otherwise you might break vercel deployment
          // If shit happened, remove the packages with yarn remove xxx, and reinstall
        // Use thirdweb as a higher order component to wrap my entire app within a provider (just like redux)
        // Anything inside the app can tap into what thirdweb has to offer
        // Need to go back to our starting point -> _app.tsx
    // 6. add a .gitignore file to avoid oversized folders being pushed
        // -> git rm --cached .next/ -r
        // Check how far ahead of my branch, if I am 8 commits ahead then
        // -> git reset HEAD~8
        // https://stackoverflow.com/questions/68782039/how-to-push-a-big-nextjs-project-to-github 
    // 7. Use Sanity Login
        // -> sudo npm install @sanity/cli --location=global
        // -> sanity login -> login with google
        // -> sanity init --coupon sonny2022
        // Project output path: (/Users/shenseanchen/Desktop/Full-Stack-Deploy/nftDrop-Deploy/nftseanchenio) -> type in sanity
        // Choose Blog Schema
        // Check your project at https://www.sanity.io/manage
        // go to API on my dashboard on Sanity.io -> + Add API token -> Permission-Editor
        // Create a .env.local file -> SANITY_API_TOKEN=my_key_from_sanity_API_token
        // Add /sanity/node_modules to your .gitignore
        // Go to Sanity folder 
        // Create sanity.js: https://www.sanity.io/guides/sanity-nextjs-tailwindcss
        // -> yarn add next-sanity @sanity/image-url
        // Copy project id into sanity.js from the dashboard
        // Put sanity_dataset to be production (you could add test dataset too if needed)
        // -> cd sanity -> sanity build -> sanity start



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
