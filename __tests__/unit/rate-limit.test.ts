import { checkRateLimit } from "@/lib/rate-limit";
import { NextRequest } from "next/server";

function makeRequest(path = "/api/contact") {
  return new NextRequest(`http://localhost:3000${path}`);
}

describe("checkRateLimit", () => {
  it("retourne non-limité en environnement test", async () => {
    const result = await checkRateLimit(makeRequest(), "contact");
    expect(result.limited).toBe(false);
    expect(result.remaining).toBe(999);
  });

  it("fonctionne avec la clé default", async () => {
    const result = await checkRateLimit(makeRequest(), "default");
    expect(result.limited).toBe(false);
  });

  it("fonctionne avec la clé adminLogin", async () => {
    const result = await checkRateLimit(makeRequest(), "adminLogin");
    expect(result.limited).toBe(false);
  });
});

