export const dev = {
  env: "dev",
  portalUrl: "http://isw-portal-v2-uat.k8.isw.la",
  xsrfToken: document.getElementById("csrf-token")
    ? document.getElementById("csrf-token").getAttribute("content")
    : "ed4feac0-4ded-426d-a677-733ad78c8213",
  xsrfTokenHeader: document.getElementById("csrf-token")
    ? document.getElementById("csrf-header").getAttribute("content")
    : "X-XSRF-TOKEN"
};
