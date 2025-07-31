import { useState, useCallback, useEffect } from "react";
import type { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@shared/ui/Input/Input";
import { useQueryParams } from "../../../shared/lib/hooks/useQueryParams";

export const SearchQuestion = () => {
  const { title = "", setTitle } = useQueryParams();
  const [localTitle, setLocalTitle] = useState(title);
  // Синхронизация localTitle с параметром URL при изменении извне
  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  const debouncedSetTitle = useDebouncedCallback(
    (value: string) => {
      const trimmedValue = value.trim();
      setTitle(trimmedValue || undefined);
    },
    500, // Задержка 500ms
    { maxWait: 2000 } // Максимальное время ожидания
  );

  const handleChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setLocalTitle(value);
      debouncedSetTitle(value);
    },
    [debouncedSetTitle]
  );

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      debouncedSetTitle.cancel();
    };
  }, [debouncedSetTitle]);

  return (
    <fieldset className={styles.wrapper}>
      <Input
        type="text"
        name="search"
        placeholder="Введите запрос..."
        value={localTitle}
        onChange={handleChangeTitle}
        aria-label="Поиск вопросов"
      />
    </fieldset>
  );
};
