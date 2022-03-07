module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aa9167a6119686bdb7c4efe760324c58'),
  },
});
