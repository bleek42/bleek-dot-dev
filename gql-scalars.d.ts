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
  export class DateScalar implements GraphQLDate {
    constructor() {
      super();
      this.name = 'Date';
    }
  }

  export class DateTimeScalar implements GraphQLDateTime {
    constructor() {
      super();
      this.name = 'DateTime';
    }
  }

  export class JsonScalar implements GraphQLJSON {
    constructor() {
      super();
      this.name = 'Json';
    }
  }

  export class HexScalar implements GraphQLHexadecimal {
    constructor() {
      super();
      this.name = 'Hex';
    }
  }

  export class RGBAHueScalar implements GraphQLRGBA {
    constructor() {
      super();
      this.name = 'RGBAHue';
    }
  }

  export class RGBATransparencyScalar implements GraphQLRGBA {
    constructor() {
      super();
      this.name = 'RGBATransparency';
    }
  }

  export class LongScalar implements GraphQLLong {
    constructor() {
      super();
      this.name = 'Long';
    }
  }
}
