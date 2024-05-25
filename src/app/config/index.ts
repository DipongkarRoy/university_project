

import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  movie_db: process.env.DB_URL,
  default_pass: process.env.Default_pass,
  bcrypt :process.env.BCRYPT_SALT_ROUNDS
};
