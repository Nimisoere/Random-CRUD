export const production = {
  env: "prod",
  portalUrl: "https://portal.interswitchgroup.com",
  xsrfToken: document.getElementById("csrf-token")
    ? document.getElementById("csrf-token").getAttribute("content")
    : "",
  xsrfTokenHeader: document.getElementById("csrf-token")
    ? document.getElementById("csrf-header").getAttribute("content")
    : ""
};
