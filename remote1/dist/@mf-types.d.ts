
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/button' | 'REMOTE_ALIAS_IDENTIFIER/app';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/app' ? typeof import('REMOTE_ALIAS_IDENTIFIER/app') :T extends 'REMOTE_ALIAS_IDENTIFIER/button' ? typeof import('REMOTE_ALIAS_IDENTIFIER/button') :any;