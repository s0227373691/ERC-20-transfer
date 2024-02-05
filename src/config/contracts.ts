import _ERC20_TokenFactory from "../../artifacts/contracts/ERC20_TokenFactory.sol/ERC20_TokenFactory.json";
import _ERC20_Token from "../../artifacts/contracts/ERC20_Token.sol/ERC20_Token.json";

export const ERC20_TokenFactory = {
  ..._ERC20_TokenFactory,
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_ERC20_TOKENFACTORY,
};
export const ERC20_Token = {
  ..._ERC20_Token,
};
