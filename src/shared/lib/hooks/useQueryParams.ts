import { useSearchParams } from "react-router-dom";

type QueryParams = {
  page: string;
  specialization: string;
  skills: string;
  rate: string;
  complexity: string;
  title: string;
  skillFilterMode: string; // Добавляем новый параметр
};

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: keyof QueryParams) =>
    searchParams.get(key) ?? undefined;

  const updateParam = (key: keyof QueryParams, value?: string) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);
        if (value) newParams.set(key, value);
        else newParams.delete(key);
        if (key !== "page") newParams.set("page", "1");
        return newParams;
      },
      { replace: true }
    );
  };

  const toggleSkill = (skillId: number) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);
        const current =
          newParams.get("skills")?.split(",").filter(Boolean) || [];
        const skillStr = String(skillId);

        const updatedSkills = current.includes(skillStr)
          ? current.filter((id) => id !== skillStr)
          : [...current, skillStr];

        if (updatedSkills.length > 0) {
          newParams.set("skills", updatedSkills.join(","));
          newParams.set("skillFilterMode", "ANY"); // Используем "ANY" для ИЛИ-фильтрации
        } else {
          newParams.delete("skills");
          newParams.delete("skillFilterMode");
        }
        newParams.set("page", "1");
        return newParams;
      },
      { replace: true }
    );
  };

  const toggleComplexity = (values: string) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);
        const current =
          newParams.get("complexity")?.split(",").filter(Boolean) || [];
        const valuesToToggle = values.split(",");

        // Проверяем, все ли значения уже выбраны
        const allSelected = valuesToToggle.every((val) =>
          current.includes(val)
        );

        const updatedComplexities = allSelected
          ? current.filter((val) => !valuesToToggle.includes(val)) // Удаляем если все были выбраны
          : [...new Set([...current, ...valuesToToggle])]; // Добавляем если не все

        if (updatedComplexities.length > 0) {
          newParams.set("complexity", updatedComplexities.join(","));
        } else {
          newParams.delete("complexity");
        }
        newParams.set("page", "1");
        return newParams;
      },
      { replace: true }
    );
  };

  const toggleRate = (rateValue: string) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);
        const current = newParams.get("rate")?.split(",").filter(Boolean) || [];

        const updatedRates = current.includes(rateValue)
          ? current.filter((r) => r !== rateValue)
          : [...current, rateValue];

        if (updatedRates.length > 0) {
          newParams.set("rate", updatedRates.join(","));
        } else {
          newParams.delete("rate");
        }
        newParams.set("page", "1");
        return newParams;
      },
      { replace: true }
    );
  };

  return {
    page: getParam("page") ?? "1",
    specialization: getParam("specialization"),
    skills: getParam("skills") ?? "",
    rate: getParam("rate"),
    complexity: getParam("complexity"),
    title: getParam("title") ?? "",
    skillFilterMode: getParam("skillFilterMode"), // Новый параметр

    setPage: (value: string) => updateParam("page", value),
    setSpecialization: (value?: string) => updateParam("specialization", value),
    // setSkills: (value?: string) => updateParam("skills", value),
    setRate: (value: string) => updateParam("rate", value),
    setComplexity: (value: string) => updateParam("complexity", value),
    toggleSkill,
    toggleComplexity,
    toggleRate,
    setTitle: (value?: string) => {
      setSearchParams(
        (prev) => {
          const newParams = new URLSearchParams(prev);
          newParams.delete("specialization");
          newParams.delete("skills");
          newParams.delete("skillFilterMode");
          if (value) newParams.set("title", value);
          else newParams.delete("title");
          newParams.set("page", "1");
          return newParams;
        },
        { replace: true }
      );
    },
  };
};
