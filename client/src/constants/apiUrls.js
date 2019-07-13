import { appConfig } from "../config/config";
const { apiBaseUrl } = appConfig;
console.log(apiBaseUrl)
export const SHIPMENTS_API = `${apiBaseUrl}/shipments`;
