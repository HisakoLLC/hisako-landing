export * from "./projects-data"
import { projects, getProjectBySlug, getAllProjectSlugs, Project } from "./projects-data"

export type CaseStudy = Project
export const caseStudies = projects
export const getCaseStudyBySlug = getProjectBySlug
export const getAllCaseStudySlugs = getAllProjectSlugs
