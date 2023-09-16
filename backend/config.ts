import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, ".env") });

interface ENV {
  SERVER_PORT: number | undefined;
  DATABASE_HOST: string | undefined;
  DATABASE_USERNAME: string | undefined;
  DATABASE_PASSWORD: string | undefined;
  DATABASE_NAME: string | undefined;
  DATABASE_PORT: number | undefined;
}

interface Config {
  SERVER_PORT: number;
  DATABASE_HOST: string;
  DATABASE_USERNAME: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
  DATABASE_PORT: number;
}

const getConfig = (): ENV => {
  return {
    SERVER_PORT: process.env.SERVER_PORT ? Number(process.env.PORT) : undefined,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PORT: process.env.DATABASE_PORT ? Number(process.env.PORT) : undefined,
  };
};

const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env file`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;