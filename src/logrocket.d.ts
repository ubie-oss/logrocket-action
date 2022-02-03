declare module "logrocket-cli/dist/commands/release" {
  export function handler(params: {
    version: string;
    apikey: string;
    strict?: boolean;
    verbose?: boolean;
  }): Promise<void>;
}

declare module "logrocket-cli/dist/commands/upload" {
  export function handler(params: {
    paths: string;
    release: string;
    apikey: string;
    urlPrefix?: string;
    strict?: boolean;
    verbose?: boolean;
  }): Promise<void>;
}
