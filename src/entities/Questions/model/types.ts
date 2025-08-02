import { SkillsData } from "../../Skills/model/types";
import { SpecializationsData } from "../../Spezializations/model/types";

export interface QuestionsListParams {
  page?: number;
  limit?: number;
  title?: string;
  skills?: string;
  complexity?: string;
  specialization?: number;
  rate?: string;
  titleOrDescription?: string;
  skillFilterMode?: "ALL" | "ANY";
  collection?: number;
  keywords?: string;
  orderBy?: string;
  order?: string;
  random?: boolean;
}
export interface QuestionResponse {
  page?: number;
  limit?: number;
  data: QuestionData[];
  total: number;
}
export type QuestionData = {
  id: number;
  title?: string;
  description?: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate?: number;
  complexity?: number;
  createdById: string;
  updatedById: string;
  questionSpecializations: SpecializationsData[];
  questionSkills: SkillsData[];
  createdAt: string;
  updatedAt: string;
  createdBy: Info;
  updatedBy: Info;
};

type Info = {
  id: string;
  username: string;
};
