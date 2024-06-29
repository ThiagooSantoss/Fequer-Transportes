import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Adicione sua configuração personalizada do Webpack aqui
    config.resolve.alias["@"] = join(__dirname, "src");

    return config;
  },
};

export default nextConfig;
