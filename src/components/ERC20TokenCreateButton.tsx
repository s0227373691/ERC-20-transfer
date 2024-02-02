import React from "react";
import { useContractWrite } from "wagmi";

import { ERC20_TokenFactory } from "@/config/contracts";

const ERC20TokenCreateButton = () => {
  const { isLoading, write } = useContractWrite({
    abi: ERC20_TokenFactory.abi,
    address: ERC20_TokenFactory.address as `0x${string}`,
    functionName: "createERC20",
  });

  const createERC20_Token = () => {
    const _tokenName = window.prompt("Enter the token name");
    const _tokenSymbol = window.prompt("Enter the token symbol");

    write({ args: [_tokenName, _tokenSymbol] });
  };
  return (
    <button
      className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] text-red-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      onClick={createERC20_Token}
    >
      <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
        {isLoading ? "Creating..." : "Create"}
      </span>
    </button>
  );
};

export default ERC20TokenCreateButton;
