import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThirdwebProvider desiredChainId={ChainId.Mainnet}> Eth main network
    // test network -> can use fake eth to test transactions
    // <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
    // </ThirdwebProvider>
  )
}

export default MyApp
