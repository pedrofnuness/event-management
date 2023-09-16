declare namespace NodeJS {
  interface ProcessEnv {
    readonly SERVER_PORT: number
    readonly DATABASE_TYPE: string
    readonly DATABASE_HOST: string
    readonly DATABASE_USERNAME: string
    readonly DATABASE_PASSWORD: string
    readonly DATABASE_NAME: string
    readonly DATABASE_PORT: number
  }
}