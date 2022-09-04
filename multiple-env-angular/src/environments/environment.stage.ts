export const environment = {
  name: 'stage',
  production: true,
  apiKey: 'stage.fdasfdsafdsafdsa=',
  identity_API_URL: 'https://stage.identity.com',
  storage_API_URL: 'https://stage.storage.com',
  users_API_URL: 'https://stage.user.com',
  features: [
    {
      name: 'loggingSystem',
      isActive: false,
      type: 'Sentry',
    },
    {
      isActive: false,
      name: 'discount',
    },
  ],
};
