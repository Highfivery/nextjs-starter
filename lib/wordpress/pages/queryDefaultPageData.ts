// Import dependencies
import connector from "../connector";

// Retrieve default SEO and other page data.
const queryDefaultPageData = async () => {
  return connector(`{
    generalSettings {
      title
    }
  }`);
};

export default queryDefaultPageData;
