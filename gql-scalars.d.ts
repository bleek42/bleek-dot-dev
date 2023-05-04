import {
  GraphQLDate,
  GraphQLDateTime,
  GraphQLJSON,
  GraphQLUnsignedFloat,
  GraphQLJWT,
  GraphQLLocale,
  GraphQLRGB,
  GraphQLRGBA,
  GraphQLHexadecimal,
  GraphQLHexColorCode,
  GraphQLTime,
  GraphQLTimeZone,
  GraphQLLong,
  GraphQL,
} from 'graphql-scalars/typings/scalars';

declare module 'graphql-scalars/esm' {
  export declare class DateScalar implements GraphQLDate {
    constructor() {
      super();
      this.name = 'Date';
    }
  }

  export declare class DateTimeScalar implements GraphQLDateTime {
    constructor() {
      super();
      this.name = 'DateTime';
    }
  }

  export declare class JsonScalar implements GraphQLJSON {
    constructor() {
      super();
      this.name = 'Json';
    }
  }

  export declare class HexScalar implements GraphQLHexadecimal {
    constructor() {
      super();
      this.name = 'Hex';
    }
  }

  export declare class RGBAHueScalar implements GraphQLRGBA {
    constructor() {
      super();
      this.name = 'RGBAHue';
    }
  }

  export declare class RGBATransparencyScalar implements GraphQLRGBA {
    constructor() {
      super();
      this.name = 'RGBATransparency';
    }
  }

  export declare class LongScalar implements GraphQLLong {
    constructor() {
      super();
      this.name = 'Long';
    }
  }
}
