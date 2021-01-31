import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: {
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
