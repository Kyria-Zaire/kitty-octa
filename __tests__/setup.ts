const env = process.env as Record<string, string | undefined>;

env.NODE_ENV = "test";
env.ADMIN_PASSWORD_HASH =
  "$2b$12$validhashplaceholder00000000000000000000000000000000000";
env.SESSION_SECRET = "a".repeat(64);
env.SKIP_ENV_CHECK = "true";

