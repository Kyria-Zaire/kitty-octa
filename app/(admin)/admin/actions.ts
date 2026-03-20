"use server";

/**
 * TODO(Sprint1): à réécrire — actions admin sécurisées.
 * Stub temporaire pour éviter les erreurs de build pendant la migration.
 */

export interface LoginResult {
  success: boolean;
  error?: string;
}

export async function loginAction(_formData: FormData): Promise<LoginResult> {
  return { success: false, error: "Not implemented — Sprint 1" };
}

export async function logoutAction(): Promise<void> {
  return;
}
