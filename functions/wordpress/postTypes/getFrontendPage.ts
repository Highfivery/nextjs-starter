// @ts-nocheck
// @TODO: Fix TS warnings.

import getMenus from "@/functions/wordpress/menus/getMenus";
import formatDefaultSeoData from "@/functions/wordpress/seo/formatDefaultSeoData";
import { initializeWpApollo } from "@/lib/wordpress/connector";
import queryDefaultPageData from "@/lib/wordpress/pages/queryDefaultPageData";
import frontendPageSeo from "@/lib/wordpress/_config/frontendPageSeo";
import formatManualSeoMeta from "../seo/formatManualSeoMeta";

/**
 * Retrieve data for Frontend-only route (i.e., page does not exist in WordPress).
 */
export default async function getFrontendPage(route: string): Promise<{
  menus: {
    primary_menu: [];
  };
  defaultSeo: {};
}> {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo();

  // Set up return object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null,
    post: null,
  };

  // Execute query.
  response.post = await apolloClient
    .query({ query: queryDefaultPageData })
    .then(
      (res: {
        data: {
          generalSettings: {};
          homepageSettings: {};
          siteSeo: {};
          menus: {};
        };
      }) => {
        const { generalSettings, homepageSettings, siteSeo, menus } = res.data;

        // Retrieve menus.
        response.menus = getMenus(menus);

        // Retrieve default SEO data.
        response.defaultSeo = formatDefaultSeoData({
          homepageSettings,
          siteSeo,
        });

        // Determine SEO.
        return {
          seo: formatManualSeoMeta(frontendPageSeo?.[route]?.title, route, {
            generalSettings,
            siteSeo,
          }),
        };
      }
    )
    .catch((error) => {
      response.error = true;
      response.errorMessage = error.message;

      return null;
    });

  return response;
}
