import Head from "next/head";
import User from "./walletpage/User";


const Wallet = () => {
  return (
    <div>
      <Head>
        <title>Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <User/>
    </div>
  );
};

export default Wallet;
