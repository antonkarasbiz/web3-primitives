import type { ChainKey } from "./chains.ts";
import { getChain } from "./chains.ts";

export type Eip712Domain = {
  name: string;
  version: string;
  chainId: number;
  verifyingContract: string;
};

export function evmDomain(
  chain: Exclude<ChainKey, "solana">,
  name: string,
  version: string,
  verifyingContract: string,
): Eip712Domain {
  const descriptor = getChain(chain);
  if (descriptor.kind !== "evm" || typeof descriptor.chainId !== "number") {
    throw new Error(`${chain} is not an EVM chain`);
  }
  return {
    name,
    version,
    chainId: descriptor.chainId,
    verifyingContract,
  };
}
