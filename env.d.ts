declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    NEXT_PUBLIC_API_Backed: string;
    NEXT_PUBLIC_API_Backed_One_URL: string;
  }
}
