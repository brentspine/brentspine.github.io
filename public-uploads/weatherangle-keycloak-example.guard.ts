export const authGuard: CanActivateFn = async (route) => {
  const keycloak = inject(KeycloakService);
  const loggedIn = await keycloak.isLoggedIn();

  if (!loggedIn) {
    await keycloak.login();
    return false;
  }

  return keycloak.isUserInRole(route.data['role']);
};
