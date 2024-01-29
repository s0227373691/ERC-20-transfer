import Image from "next/image";
import { Inter } from "next/font/google";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import ERC20TokenStat from "@/components/ERC20TokenStat";
import ERC20TokenCreateButton from "@/components/ERC20TokenCreateButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-start gap-4 p-24 ${inter.className}`}
    >
      <ConnectButton />

      <div className="w-full flex justify-between text-center sm:text-left">
        <h1 className="text-2xl font-bold text-amber-200 sm:text-3xl">
          ERC-20 Tokens
        </h1>
        <ERC20TokenCreateButton />
      </div>
      <ERC20TokenStat />
    </main>
  );
}
