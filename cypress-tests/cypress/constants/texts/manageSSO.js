export const ssoText = {
  pagetitle: " SSO",
  generalSettingsElements: {
    generalSettings: "General Settings",
    enableSignupLabel: "Enable Signup",
    helperText: "New account will be created for user's first time SSO sign in",
    allowDefaultSSOLabel: "Allow default SSO",
    allowDefaultSSOHelperText:
      "Allow users to authenticate via default SSO. Default SSO configurations can be overridden by \n workspace level SSO.",
    allowedDomainLabel: "Allowed domains",
    allowedDomainHelperText:
      "Support multiple domains. Enter domain names separated by comma. example: tooljet.com,tooljet.io,yourorganization.com",
    workspaceLoginUrl: "Login URL",
    workspaceLoginHelpText: "Use this URL to login directly to this workspace",
  },
  cancelButton: "Cancel",
  saveButton: "Save changes",
  allowedDomain: "tooljet.io,gmail.com",
  ssoToast: "updated sso configurations",
  // ssoToast2: "updated SSO configurations",
  googleTitle: "Google",
  enabledLabel: "Enabled",

  disabledLabel: "Disabled",

  googleSSOText: "Sign in with Google",
  clientIdLabel: "Client Id",
  redirectUrlLabel: "Redirect URL",
  clientId: "24567098-mklj8t20za1smb2if.apps.googleusercontent.com",
  testClientId: "12345-client-id-.apps.googleusercontent.com",
  gitTitle: "GitHub",
  clientSecretLabel: "Client Secret",
  encriptedLabel: "Encrypted",
  gitEnabledToast: "Enabled GitHub SSO",
  gitDisabledToast: "Disabled GitHub SSO",
  gitSignInText: "Sign in with GitHub",
  passwordTitle: "Password Login",
  passwordEnabledToast: "Enabled Password login",
  passwordDisabledToast: "Disabled Password login",
  passwordDisableWarning:
    "Users won’t be able to login via username and password if password login is disabled. Please make sure that you have setup other authentication methods before disabling password login, do you want to continue?",
  hostNameLabel: "Host Name",
  hostNameHelpText: "Required if GitHub is self hosted",
  hostName: "Tooljet",
  signInHeader: "Sign in",
  workspaceSubHeader: (workspaceName) => {
    return `Sign in to your workspace - ${workspaceName}`;
  },
  noLoginMethodWarning: "No login methods enabled for this workspace",
  googleSignUpText: "Sign up with Google",
  gitSignUpText: "Sign up with GitHub",
  gitUserStatusToast:
    "GitHub login failed - User does not exist in the workspace",
  passwordLoginToggleLbale: "Password login ",
  alertText: "Danger zone",
  disablePasswordHelperText:
    "Disable password login only if your SSO is configured otherwise you will get logged out.",
  toggleUpdateToast: (toggle) => {
    return `${toggle} configuration updated \n successfully`
  }
};
