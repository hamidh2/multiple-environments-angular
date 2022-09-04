export const environment = {
  name: 'production',
  production: true,
  apiKey: 'fdasfdsafdsafdsa=',
  identity_API_URL: 'https://identity.com',
  storage_API_URL: 'https://storage.com',
  users_API_URL: 'https://user.com',
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
