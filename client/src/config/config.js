import { dev } from "./environments/dev";
import { production } from "./environments/prod";
const config = process.env.REACT_APP_STAGE === "dev" ? dev : production;

export const appConfig = {
  ...config,
  appName: "Freight Hub Shipments"
};
