import { Inter } from "next/font/google";
import { useAccount, useContractRead } from "wagmi";

import Header from "@/components/Header";
import ClientComponent from "@/components/ClientComponent";
import ERC20TokenStat from "@/components/ERC20TokenStat";
import ERC20TokenCreateButton from "@/components/ERC20TokenCreateButton";
import { ERC20_TokenFactory } from "@/config/contracts";

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
        className={`flex min-h-screen flex-col items-start gap-4 p-8 ${inter.className}`}
      >
        <ClientComponent>
          {isConnected && (
            <>
              <div className="w-full py-3 flex justify-between text-center sm:text-left">
                <h1 className="text-2xl font-bold text-amber-200 sm:text-3xl">
                  My ERC-20 tokens
                </h1>
                <ERC20TokenCreateButton />
              </div>
              {myERC20s.map((erc20) => (
                <ERC20TokenStat key={erc20} address={erc20} />
              ))}
            </>
          )}
        </ClientComponent>
      </main>
    </>
  );
}
