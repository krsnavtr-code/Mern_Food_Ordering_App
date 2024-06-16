import { Props } from "./Auth0ProviderWithNavigate";
import { Auth0Provider, AppState, User } from "@auth0/auth0-react";

export const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUrl) {
    throw new Error("Missing Auth0 environment variables");
  }

  const onRediewCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUrl,
      }}
      onRedirectCallback={onRediewCallback}
    >
      {children}
    </Auth0Provider>
  );
};
