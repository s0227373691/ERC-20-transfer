import React from "react";

import { ERC20_Token } from "@/config/contracts";
import { useContractReads } from "wagmi";
console.log(ERC20_Token.abi);

const ERC20TokenStat = ({ address }) => {
  const { data, isSuccess, isError } = useContractReads({
    contracts: [
      {
        abi: ERC20_Token.abi,
        address,
        functionName: "name",
      },
      {
        abi: ERC20_Token.abi,
        address,
        functionName: "symbol",
      },
    ],
    onSuccess(data) {
      console.log("ERC20TokenStat", data);
    },
  });

  console.log(data);

  return (
    <>
      {isError && <>Error ERC20TokenStat ({address})</>}
      {isSuccess && (
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="https://previews.123rf.com/images/rastudio/rastudio1712/rastudio171200762/91650083-golden-ethereum-coin-crypto-currency-golden-coin-ethereum-symbol-isolated-on-transparent-background.jpg"
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {data[0].result}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {data[1].result}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{address}</p>
          </div>
        </li>
      )}
    </>
  );
};

export default ERC20TokenStat;
