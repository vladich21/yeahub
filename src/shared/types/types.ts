import { QuestionData } from "../../entities/Questions/model/types";

export interface CardProps {
  children: React.ReactNode;
  question?: QuestionData;
}
