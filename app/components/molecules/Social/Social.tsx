// Import React.js dependencies
import { ReactElement } from "react";

// Import types
import PropTypes from "prop-types";

// Import component dependencies
import { ReactSVG } from "react-svg";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";

// Component styles
import styles from "./Social.module.scss";

/**
 * Render the Social component.
 */
export default function Social(props: SocialProps): ReactElement {
  const {
    size = 24,
    color = "var(--color-beta)",
    style = "official",
    onClick,
    networks,
    className,
    href,
    text,
  } = props;

  const allClassNames = [styles.social];
  className && allClassNames.push(className);

  // Handle click
  const handleClick = (network: string) => {
    let embedUrl = null;

    switch (network) {
      case "facebook":
        embedUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          href
        )}`;
        break;
      case "linkedin":
        embedUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          href
        )}`;
        break;
      case "reddit":
        embedUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
          href
        )}`;

        if (text && text.length) {
          embedUrl += `&title=${encodeURIComponent(text)}`;
        }
        break;
      case "twitter":
        const { hashtags, via } = props;

        embedUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          href
        )}`;

        if (text && text.length) {
          embedUrl += `&text=${encodeURIComponent(text)}`;
        }

        if (via && via.length) {
          embedUrl += `&via=${encodeURIComponent(via)}`;
        }

        if (hashtags && hashtags.length) {
          embedUrl += `&hashtags=${encodeURIComponent(hashtags.join(","))}`;
        }
        break;
    }

    if (embedUrl) {
      window.open(
        embedUrl,
        "social",
        "popup=1,width=548,height=325,left=50,top=50"
      );
    }

    onClick && onClick(network);
  };

  return (
    <ul className={allClassNames.join(" ")}>
      {networks?.map((network: string, index: number) => {
        return (
          <li
            key={index}
            className={`${styles["social__item"]} ${
              styles[`social__item--${network}`]
            }`}
          >
            <button
              type="button"
              className={styles["social__button"]}
              onClick={() => {
                handleClick(network);
              }}
            >
              <AccessibleIcon.Root label={`Share on ${network}`}>
                <ReactSVG
                  src={`/social/icon-${network}-${style}.svg`}
                  style={{ width: size, fill: color }}
                />
              </AccessibleIcon.Root>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export interface SocialProps {
  /** Social container class name. */
  className?: string;
  /** URL to share. */
  href: string;
  /** Available networks. */
  networks: ("facebook" | "twitter" | "linkedin" | "reddit")[];
  /** onClick handler. */
  onClick?: (network: string) => void;
  /** Icon style. */
  style: "official";
  /** Icon size. */
  size?: number;
  /** Icon color. */
  color?: string;
  /** Hashtags */
  hashtags?: string[];
  /** Via username */
  via?: string;
  /** Status text */
  text?: string;
}

Social.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  networks: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
