import _ERC20_TokenFactory from "../../artifacts/contracts/ERC20_TokenFactory.sol/ERC20_TokenFactory.json";

export const ERC20_TokenFactory = {
  ..._ERC20_TokenFactory,
  address: process.env.CONTRACT_ADDRESS_ERC20_TOKENFACTORY,
};
