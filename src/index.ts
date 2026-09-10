import { evaluateAllowance } from "./allowance.ts";
import { listEvmChains } from "./chains.ts";
import { evmDomain } from "./eip712.ts";

const domain = evmDomain("polygon", "Web3Primitives", "1", "0xexchange");
const allowance = evaluateAllowance({
  owner: "0xowner",
  spender: domain.verifyingContract,
  allowance: 100n,
  required: 25n,
});

console.log(
  JSON.stringify(
    {
      evmChains: listEvmChains().map((chain) => chain.id),
      domain,
      allowance,
    },
    (_, value) => (typeof value === "bigint" ? value.toString() : value),
  ),
);
