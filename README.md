# Web3 primitives

Shared chain, signing, and allowance helpers used across the [antonkarasbiz](https://github.com/antonkarasbiz) trading stack.

Maintained by **Anton Karas (AntonX)** — full-stack, blockchain, and AI.

<p align="center">
  <a href="mailto:antonkarasbiz@gmail.com"><img src="https://img.shields.io/badge/Email-antonkarasbiz%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://t.me/antonkaras_biz"><img src="https://img.shields.io/badge/Telegram-antonkaras__biz-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" /></a>
  <a href="https://discord.com/users/381074277046691222"><img src="https://img.shields.io/badge/Discord-AntonX-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a>
</p>

This repository is the common Web3 layer under Polymarket execution, the EVM order router, and Solana swap guards. It does not send transactions. It decides whether a chain, domain, and allowance are legal before a signer is touched.

## What it covers

| Module | Job |
| --- | --- |
| `src/chains.ts` | Ethereum, Polygon, and Solana descriptors |
| `src/eip712.ts` | EIP-712 domain for EVM venues (chain id + verifying contract) |
| `src/allowance.ts` | ERC-20 allowance gate used before CLOB or DEX sends |

```text
chain lookup → EIP-712 domain → allowance check → caller may sign
```

## Setup

```bash
npm install
npm test
npm run dev
```

`npm run dev` prints the EVM chain list, a Polygon EIP-712 domain, and one allowance decision as JSON.

## How it fits the rest of the desk

| Repo | Uses these primitives for |
| --- | --- |
| [polymarket-trading-bot](https://github.com/antonkarasbiz/polymarket-trading-bot) | Polygon / pUSD venue + signed CLOB orders |
| [evm-order-router](https://github.com/antonkarasbiz/evm-order-router) | EVM venue selection under a gas ceiling |
| [solana-execution-engine](https://github.com/antonkarasbiz/solana-execution-engine) | Solana quote simulation and impact caps |
| [crossyield-rwa-bridge](https://github.com/antonkarasbiz/crossyield-rwa-bridge) | Ethereum → Wormhole → Solana vault flow |

Need this wired into a wallet, a bot, or a private fork? [Email](mailto:antonkarasbiz@gmail.com) or [Telegram](https://t.me/antonkaras_biz).

## License

MIT. On-chain actions can lose funds. This repository is software, not financial advice.
