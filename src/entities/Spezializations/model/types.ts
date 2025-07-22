export type SpecializationsData = {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
};

export type SpecializationsResponse = {
  page?: number;
  limit?: number;
  data: SpecializationsData[];
  total: number;
};

export type SpecializationsParams = {
  page?: number;
  limit?: number;
  authorId?: string;
};
