export type ChainKind = "evm" | "solana";

export type ChainDescriptor = {
  id: string;
  kind: ChainKind;
  chainId: number | "solana";
  name: string;
  nativeSymbol: string;
  explorer: string;
};

export const CHAINS = {
  ethereum: {
    id: "ethereum",
    kind: "evm",
    chainId: 1,
    name: "Ethereum",
    nativeSymbol: "ETH",
    explorer: "https://etherscan.io",
  },
  polygon: {
    id: "polygon",
    kind: "evm",
    chainId: 137,
    name: "Polygon",
    nativeSymbol: "POL",
    explorer: "https://polygonscan.com",
  },
  solana: {
    id: "solana",
    kind: "solana",
    chainId: "solana",
    name: "Solana",
    nativeSymbol: "SOL",
    explorer: "https://solscan.io",
  },
} as const satisfies Record<string, ChainDescriptor>;

export type ChainKey = keyof typeof CHAINS;

export function getChain(key: ChainKey): ChainDescriptor {
  return CHAINS[key];
}

export function listEvmChains(): ChainDescriptor[] {
  return Object.values(CHAINS).filter((chain) => chain.kind === "evm");
}
