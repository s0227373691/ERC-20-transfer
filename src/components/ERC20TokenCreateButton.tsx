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
    if (_tokenName === null) return;

    const _tokenSymbol = window.prompt("Enter the token symbol");
    if (_tokenSymbol === null) return;

    write({ args: [_tokenName, _tokenSymbol] });
  };
  return (
    <button
      className="px-4 py-2 text-yellow-600 bg-yellow-200 rounded-lg duration-150 hover:bg-yellow-300 active:bg-yellow-400"
      onClick={createERC20_Token}
    >
      Create
    </button>
  );
};

export default ERC20TokenCreateButton;
