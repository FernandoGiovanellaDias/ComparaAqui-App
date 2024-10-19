/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/..\util\` | `/..\util\categoriaUtils copy\` | `/..\util\categoriaUtils\` | `/..\util\listUtils\` | `/..\util\produtoUtils\` | `/_sitemap` | `/style`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
