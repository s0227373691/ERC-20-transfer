import { useAccount, useContractRead } from "wagmi";

import { ERC20_TokenFactory } from "@/config/contracts";
import ERC20TokenStat from "@/components/ERC20TokenStat";
import ERC20TokenCreateButton from "@/components/ERC20TokenCreateButton";

export default function ERC20TokenList() {
  const { data: myERC20s } = useContractRead({
    abi: ERC20_TokenFactory.abi,
    address: ERC20_TokenFactory.address as `0x${string}`,
    functionName: "getMyERC20",
    onSuccess: (req) => console.log("ERC20TokenStat", req),
  });
  return (
    <div className="container w-[750px] my-4">
      <div className="w-full py-3 flex justify-between text-center sm:text-left">
        <h1 className="text-2xl font-bold text-amber-200 sm:text-3xl">
          My ERC-20 tokens
        </h1>
        <ERC20TokenCreateButton />
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {myERC20s.map((erc20) => (
          <ERC20TokenStat key={erc20} address={erc20} />
        ))}
      </ul>
    </div>
  );
}
