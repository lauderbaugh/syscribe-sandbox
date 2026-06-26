import * as HttpStatusPhrases from "stoker/http-status-phrases";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

export const ZOD_ERROR_MESSAGES = {
  REQUIRED: "Required",
  EXPECTED_NUMBER: "Invalid input: expected number, received NaN",
  NO_UPDATES: "No updates provided",
  EXPECTED_STRING: "Invalid input: expected string, received undefined",
};

export const ZOD_ERROR_CODES = {
  INVALID_UPDATES: "invalid_updates",
};

export const notFoundSchema = createMessageObjectSchema(HttpStatusPhrases.NOT_FOUND);

/**
 * Maximum number of tasks returned by the list endpoint in a single response.
 * Clients that expect more results should paginate rather than relying on a
 * larger page size.
 */
export const TASKS_PAGE_SIZE = 50;

/**
 * Default maximum number of commit events returned by the history endpoint in a
 * single response. Mirrors {@link TASKS_PAGE_SIZE}: clients that need more
 * results should paginate rather than depend on a larger page size.
 */
export const COMMIT_EVENTS_PAGE_SIZE = 50;
