import { store } from "../store";

const checkPermissions = (userPermissions, allowedPermissions) => {
  const permissions =
    userPermissions && userPermissions.map(permission => permission.authority);
  if (allowedPermissions.length === 0) {
    return true;
  }

  return (
    permissions &&
    permissions.some(permission => allowedPermissions.includes(permission))
  );
};

export const accessControlFn = (allowedPermissions, fn, ...args) => {
  const state = store.getState();
  const userPermissions = state.permissions && state.permissions.response;
  const permitted = checkPermissions(userPermissions, allowedPermissions);
  if (permitted) {
    fn(args);
  }
};
