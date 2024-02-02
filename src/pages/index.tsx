import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead } from "wagmi";

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
    onSuccess: (req) => console.log(req),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-start gap-4 p-24 ${inter.className}`}
    >
      <ConnectButton />
      <ClientComponent>
        {isConnected && (
          <>
            <div className="w-full flex justify-between text-center sm:text-left">
              <h1 className="text-2xl font-bold text-amber-200 sm:text-3xl">
                ERC-20 Tokens
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
  );
}
