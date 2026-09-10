import assert from "node:assert/strict";
import { test } from "node:test";
import { evaluateAllowance } from "./allowance.ts";
import { evmDomain } from "./eip712.ts";
import { getChain, listEvmChains } from "./chains.ts";

test("ethereum and polygon are EVM; solana is not", () => {
  assert.equal(getChain("ethereum").kind, "evm");
  assert.equal(getChain("solana").kind, "solana");
  assert.equal(listEvmChains().length, 2);
});

test("eip-712 domain uses the live chain id", () => {
  const domain = evmDomain("polygon", "Polymarket", "2", "0xexchange");
  assert.equal(domain.chainId, 137);
  assert.equal(domain.version, "2");
});

test("allowance gate rejects a short approval", () => {
  const blocked = evaluateAllowance({
    owner: "0xowner",
    spender: "0xexchange",
    allowance: 10n,
    required: 50n,
  });
  assert.equal(blocked.ok, false);
  assert.equal(blocked.reason, "allowance below required amount");
});

test("allowance gate accepts a funded approval", () => {
  const allowed = evaluateAllowance({
    owner: "0xowner",
    spender: "0xexchange",
    allowance: 80n,
    required: 50n,
  });
  assert.equal(allowed.ok, true);
});
