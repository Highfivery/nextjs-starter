// Import React.js dependencies
import { ReactElement } from "react";

// Import Next.js dependencies
import dynamic from "next/dynamic";

// Import functions
import cn from "classnames";
import convertParagraphRegionToProps from "@/functions/drupal/layoutParagraphs/convertParagraphRegionToProps";

// Import types
import PropTypes from "prop-types";

// Import styles
import styles from "./LayoutParagraphs.module.scss";

// Define the available layout paragraph components
const paragraphComponents = {
  "paragraph--rich_text": "@/components/atoms/RichText",
};

/**
 * Render a Drupal Layout Paragraph section region.
 */
export function Region(props: LayoutParagraphRegionProps): ReactElement | null {
  if (!props?.components?.length) return null;

  return (
    <>
      {props.components.map(
        (component: LayoutParagraphComponentProps, index) => {
          if (paragraphComponents[component.type] === "undefined") {
            return null;
          }

          // Import paragraph components using Next Dynamic Imports
          // @see https://nextjs.org/docs/advanced-features/dynamic-import
          const Component = dynamic(
            () => import(paragraphComponents[component.type])
          );

          return (
            <Component
              key={index}
              {...convertParagraphRegionToProps(component)}
            />
          );
        }
      )}
    </>
  );
}

export interface LayoutParagraphComponentProps {
  type: string;
}

export interface LayoutParagraphRegionProps {
  /** Drupal layout paragraphs components field. */
  components: LayoutParagraphComponentProps[];
  /** Optional classNames. */
  className?: string;
}

Region.propTypes = {
  className: PropTypes.string,
  components: PropTypes.array.isRequired,
};

/**
 * Render a Drupal Layout Paragraph section.
 */
export default function LayoutParagraph(
  props: LayoutParagraphProps
): ReactElement | null {
  if (!Object.keys(props?.section?.regions).length) return null;

  return (
    <section className={cn(props?.className, styles.section)}>
      {Object.keys(props.section.regions).map((region) => {
        return (
          <Region
            key={region}
            className={cn(styles.region)}
            components={props.section.regions[region].components}
          />
        );
      })}
    </section>
  );
}

export interface LayoutParagraphProps {
  /** Drupal layout paragraphs section field. */
  section: {
    regions: {
      [key: string]: LayoutParagraphRegionProps;
    };
  };
  /** Optional classNames. */
  className?: string;
}

LayoutParagraph.propTypes = {
  section: PropTypes.object.isRequired,
  className: PropTypes.string,
};
