import { SpecializationsData } from "../../Spezializations/model/types";

export type SkillsData = {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
  specializations: SpecializationsData;
};

export type SkillsResponse = {
  page?: number;
  limit?: number;
  data: SkillsData[];
  total: number;
};
