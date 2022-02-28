module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '19d7c22ddeb4f6fff24db3d30b8a6f60'),
  },
});
