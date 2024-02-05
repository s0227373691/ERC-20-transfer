import React from "react";

import { ERC20_Token } from "@/config/contracts";
import { useContractRead, useContractReads } from "wagmi";
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
        <article className="w-full flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <span className="rounded-full bg-blue-100 p-3 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-gray-900">
              {data[0].result} <span>{data[1].result}</span>
            </p>

            <p className="text-sm text-gray-500">{address}</p>
          </div>
        </article>
      )}
    </>
  );
};

export default ERC20TokenStat;
