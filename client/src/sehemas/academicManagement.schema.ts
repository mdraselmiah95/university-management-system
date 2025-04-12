import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select a Name" }),
  year: z.string({ required_error: "Please select a Year" }),
  startMonth: z.string({ required_error: "Start Month is required" }),
  endMonth: z.string({ required_error: "End Month is required" }),
});

export const academicFacultySchema = z.object({
  name: z.string({ required_error: "Name is required" }),
});
