import { Checkbox } from "./Checkbox";
import { Number } from "./Number";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { Text } from "./Text";
import { TextArea } from "./TextArea";

// @TODO: Add type definitions for fields.
export const Fields = ({ fields }: any) => {
  return (
    <>
      {fields?.length > 0 &&
        fields.map((field: any) => {
          const { id, type } = field.node;
          let fieldToRender = null;
          const typeFormat = type?.toLocaleLowerCase();

          switch (typeFormat) {
            case "checkbox":
              fieldToRender = <Checkbox {...field.node} key={id} />;
              break;

            case "select":
              fieldToRender = <Select {...field.node} key={id} />
              break;

            case "text":
              fieldToRender = <Text {...field.node} key={id} />;
              break;

            case "textarea":
              fieldToRender = <TextArea {...field.node} key={id} />;
              break;
            
            case "number":
              fieldToRender = <Number {...field.node} key={id} />;
              break;

            case "radio":
              fieldToRender = <Radio {...field.node} key={id} />;
              break;

            default:
              fieldToRender = (
                <pre key={id}>
                  {`"${type}" GravityForm field is unsupported.`}
                </pre>
              );
          }

          return fieldToRender;
        })}
    </>
  );
};
