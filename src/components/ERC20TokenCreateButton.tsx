import React from "react";
import { useContractRead } from "wagmi";

import { ERC20_TokenFactory } from "@/config/contracts";

const ERC20TokenCreateButton = () => {
  const { data } = useContractRead({
    abi: ERC20_TokenFactory.abi,
    address: ERC20_TokenFactory.address,
    functionName: "erc20Adresses",
    args: ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"],
  });

  console.log(data);

  const createERC20_Token = () => {
    const _tokenName = window.prompt("Enter the token name");

    console.log(_tokenName);
  };
  return (
    <button
      className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] text-red-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      onClick={createERC20_Token}
    >
      <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
        Create
      </span>
    </button>
  );
};

export default ERC20TokenCreateButton;
