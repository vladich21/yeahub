// features/SearchQuestion/ui/SearchQuestion.tsx
import { useCallback, ChangeEvent } from "react";
import { Input } from "@shared/ui/Input/Input";
import { useQueryParams } from "@shared/lib/hooks/useQueryParams";
import { useDebounce } from "@shared/lib/hooks/useDebounce";
import styles from "./styles.module.scss";

export const SearchQuestion = () => {
  const { title = "", setTitle } = useQueryParams();

  const [localTitle, setLocalTitle, debouncedSetTitle] = useDebounce(
    title,
    (value: string) => {
      const trimmedValue = value.trim();
      setTitle(trimmedValue || undefined);
    }
  );

  const handleChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      setLocalTitle(value);
      debouncedSetTitle(value);
    },
    [setLocalTitle, debouncedSetTitle]
  );

  return (
    <div className={styles.wrapper}>
      <Input
        type="text"
        name="search"
        placeholder="Введите запрос..."
        value={localTitle}
        onChange={handleChangeTitle}
        aria-label="Поиск вопросов"
        aria-describedby="search-hint"
      />
    </div>
  );
};
