// This method takes a pagename and returns it as a route and a Title
export function pageNameToRouteAndTitle(pageName: string): { label: string, route: string } {
  return {
    // Capitalize the first letter of the page name, space before each upperCase letter
    label: pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/([A-Z])/g, ' $1'),
    route: '/page/'+pageName,
  };
}
