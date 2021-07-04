module.exports = ({ env }) => ({
  host: env('HOST', '185.34.102.27'),
  port: env.int('PORT', 8080),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'dbf6c53568c1d91f1a4bdbee832f324f'),
    },
  },
});
