import { Inter } from "next/font/google";
import { useAccount, useContractRead } from "wagmi";

import { ERC20_TokenFactory } from "@/config/contracts";
import Header from "@/components/Header";
import ClientComponent from "@/components/ClientComponent";
import ERC20TokenStat from "@/components/ERC20TokenStat";
import ERC20TokenCreateButton from "@/components/ERC20TokenCreateButton";
import ERC20TokenList from "@/components/ERC20TokenList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isConnected } = useAccount();

  const { data: myERC20s } = useContractRead({
    abi: ERC20_TokenFactory.abi,
    address: ERC20_TokenFactory.address as `0x${string}`,
    functionName: "getMyERC20",
    onSuccess: (req) => console.log("ERC20TokenStat", req),
  });

  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
      >
        <ClientComponent>{isConnected && <ERC20TokenList />}</ClientComponent>
      </main>
    </>
  );
}
