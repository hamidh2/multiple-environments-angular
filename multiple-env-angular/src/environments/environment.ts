export const environment = {
  name: 'development',
  production: false,
  apiKey: 'dev.fdasfdsafdsafdsa=',
  identity_API_URL: 'https://dev.identity.com',
  storage_API_URL: 'https://dev.storage.com',
  users_API_URL: 'https://dev.user.com',
  features: [
    {
      name: 'loggingSystem',
      isActive: true,
      type: 'Sentry',
    },
    {
      isActive: true,
      name: 'discount',
    },
  ],
};
