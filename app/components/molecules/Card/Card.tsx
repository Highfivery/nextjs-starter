import PropTypes from "prop-types";

// Import React.js dependencies
import { ReactElement, ReactNode } from "react";

// Import components
import Link from "app/components/atoms/Link";

// Import styles
import styles from "./Card.module.scss";

/**
 * Renders a Card component.
 */
export default function Card({
  className,
  children,
  title,
  Media,
}: CardProps): ReactElement {
  const allClassNames = [styles.card];
  className && allClassNames.push(className);

  return (
    <div className={allClassNames.join(" ")}>
      {Media && <div className={styles.card__media}>{Media}</div>}
      <div className={styles.card__content}>
        {title?.Tag && (
          <title.Tag
            className={[
              styles["card__title"],
              title?.className ? title.className : "",
            ].join(" ")}
          >
            {title?.link?.href && (
              <Link href={title.link.href} target={title?.link?.target}>
                {title.content}
              </Link>
            )}
            {!title?.link?.href && <>{title.content}</>}
          </title.Tag>
        )}
        <div className={styles.card__children}>{children && children}</div>
      </div>
    </div>
  );
}

export interface CardProps {
  /** Child component(s) to render. */
  children?: ReactElement | ReactNode;
  /** Card container class name. */
  className?: string;
  /** Card title */
  title?: {
    Tag: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    content: string;
    className?: string;
    link?: {
      href: string;
      target: "_blank" | "_self";
    };
  };
  /** Media component */
  Media?: ReactElement;
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  title: PropTypes.object,
  Media: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
