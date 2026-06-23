import type { z } from "@hono/zod-openapi";
import type { z as z4 } from "zod/v4";

export function toZodV4SchemaTyped<T extends z4.ZodTypeAny>(
  schema: T,
) {
  return schema as unknown as z.ZodType<z4.infer<T>>;
}

/**
 * Clamp a numeric page size into a safe range so callers never request an
 * absurd number of rows. Values below `min` snap to `min`, values above `max`
 * snap to `max`, and non-finite input falls back to `min`.
 */
export function clampPageSize(size: number, min = 1, max = 100): number {
  if (!Number.isFinite(size))
    return min;
  return Math.min(Math.max(Math.trunc(size), min), max);
}
