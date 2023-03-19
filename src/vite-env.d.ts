/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: 'http://localhost:3002'
    // más variables de entorno...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }