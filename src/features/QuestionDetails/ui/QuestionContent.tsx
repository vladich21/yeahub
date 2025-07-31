import DOMPurify from "dompurify";
import styles from "./styles.module.scss";
import { ArrowDown } from "@shared/ui/icons/ArrowDown";
import clsx from "clsx";

const QuestionContent = ({
  shortAnswer,
  longAnswer,
  isExpanded,
  onToggle,
}: {
  shortAnswer: string;
  longAnswer: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => (
  <>
    <section className={styles.sectionShort}>
      <h2>Короткий ответ</h2>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(shortAnswer) }}
      />
    </section>

    <section className={styles.sectionLong}>
      <h2>Развернутый ответ</h2>
      <div
        className={clsx(styles.answerContent, {
          [styles.open]: isExpanded,
        })}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(longAnswer) }}
      />
      <button onClick={onToggle}>
        {isExpanded ? "Свернуть" : "Раскрыть"}
        <ArrowDown className={clsx({ [styles.expanded]: isExpanded })} />
      </button>
    </section>
  </>
);

export default QuestionContent;
