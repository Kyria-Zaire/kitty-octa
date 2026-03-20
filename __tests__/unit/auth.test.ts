import { generateSessionToken, isValidTokenFormat, verifyAdminPassword } from "@/lib/auth";

describe("generateSessionToken", () => {
  it("produit 64 chars hex", () => {
    const t = generateSessionToken();
    expect(t).toHaveLength(64);
    expect(/^[a-f0-9]{64}$/.test(t)).toBe(true);
  });

  it("produit des tokens uniques", () => {
    expect(generateSessionToken()).not.toBe(generateSessionToken());
  });

  it("lib/auth.ts ne contient pas Math.random", () => {
    const fs = require("fs");
    const src = fs.readFileSync("./lib/auth.ts", "utf-8");
    expect(src).not.toContain("Math.random");
  });
});

describe("isValidTokenFormat", () => {
  it("valide 64 chars hex minuscules", () => {
    expect(isValidTokenFormat("a".repeat(64))).toBe(true);
  });

  it("rejette longueur incorrecte", () => {
    expect(isValidTokenFormat("abc")).toBe(false);
  });

  it("rejette chars non-hex", () => {
    expect(isValidTokenFormat("g".repeat(64))).toBe(false);
  });
});

describe("verifyAdminPassword", () => {
  it("throw si ADMIN_PASSWORD_HASH absente", async () => {
    const saved = process.env.ADMIN_PASSWORD_HASH;
    delete process.env.ADMIN_PASSWORD_HASH;
    await expect(verifyAdminPassword("test")).rejects.toThrow("ADMIN_PASSWORD_HASH");
    process.env.ADMIN_PASSWORD_HASH = saved;
  });

  it("throw si hash ne commence pas par $2b$", async () => {
    process.env.ADMIN_PASSWORD_HASH = "invalid_hash";
    await expect(verifyAdminPassword("test")).rejects.toThrow("invalide");
    process.env.ADMIN_PASSWORD_HASH =
      "$2b$12$validhashplaceholder00000000000000000000000000000000000";
  });
});

