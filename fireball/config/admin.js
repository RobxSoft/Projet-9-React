module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'db912d35399848fe05cb4a77a34c6bea'),
  },
});
