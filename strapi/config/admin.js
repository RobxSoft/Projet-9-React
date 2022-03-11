module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd2c682f82e15c01b20daa2ac74ca09e'),
  },
});
