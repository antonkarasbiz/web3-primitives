export type AllowanceState = {
  owner: string;
  spender: string;
  allowance: bigint;
  required: bigint;
};

export type AllowanceDecision = {
  ok: boolean;
  reason: string | null;
};

export function evaluateAllowance(state: AllowanceState): AllowanceDecision {
  if (!state.owner || !state.spender) {
    return { ok: false, reason: "missing owner or spender" };
  }
  if (state.required <= 0n) {
    return { ok: false, reason: "required amount must be positive" };
  }
  if (state.allowance < state.required) {
    return { ok: false, reason: "allowance below required amount" };
  }
  return { ok: true, reason: null };
}
