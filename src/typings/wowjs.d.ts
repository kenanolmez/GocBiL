declare module 'wowjs' {
    export default class WOW {
      static WOW: any;
      constructor(config?: WOW.WOWConfig);
  
      init(): void;
    }
  
    namespace WOW {
      interface WOWConfig {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
      }
    }
  }