export const environment = {
  name: 'qa',
  production: false,
  apiKey: 'qa.fdasfdsafdsafdsa=',
  identity_API_URL: 'https://qa.identity.com',
  storage_API_URL: 'https://qa.storage.com',
  users_API_URL: 'https://qa.user.com',
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
