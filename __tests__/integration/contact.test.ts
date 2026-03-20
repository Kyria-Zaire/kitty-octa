import { POST, GET } from "@/app/api/contact/route";
import { NextRequest } from "next/server";

function makeContactRequest(body: unknown) {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  name: "Sophie Martin",
  email: "sophie@example.com",
  phone: "0612345678",
  eventType: "Mariage",
  message: "Nous souhaitons organiser notre mariage en juin 2026.",
  rgpd: true,
};

describe("POST /api/contact", () => {
  it("retourne 200 avec un payload valide", async () => {
    const res = await POST(makeContactRequest(validPayload));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.submissionId).toBeDefined();
  });

  it("retourne 400 si payload invalide", async () => {
    const res = await POST(makeContactRequest({ name: "A" }));
    expect(res.status).toBe(400);
  });

  it("retourne 400 si body non-JSON", async () => {
    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: "pas du json",
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("retourne 400 si rgpd est false", async () => {
    const res = await POST(makeContactRequest({ ...validPayload, rgpd: false }));
    expect(res.status).toBe(400);
  });

  it("retourne 405 sur GET", async () => {
    const res = await GET();
    expect(res.status).toBe(405);
  });

  it("ne logue jamais les données personnelles", async () => {
    const spy = jest.spyOn(console, "info").mockImplementation(() => {});
    await POST(makeContactRequest(validPayload));
    const allLogs = spy.mock.calls.join(" ");
    expect(allLogs).not.toContain("sophie@example.com");
    expect(allLogs).not.toContain("Sophie Martin");
    expect(allLogs).not.toContain("0612345678");
    spy.mockRestore();
  });
});

