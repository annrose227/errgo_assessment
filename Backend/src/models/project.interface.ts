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
  id: z.string().uuid(),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

export type Project = z.infer<typeof ProjectSchema>;
