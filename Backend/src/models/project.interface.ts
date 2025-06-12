/**
 * BONUS: Implement zod schema for model validation
 */
import { z } from "zod";

export interface IProject {
  id: string;
  name: string;
  description: string;
}

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;
