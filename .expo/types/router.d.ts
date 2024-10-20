/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/..\components\DetalhamentoList\` | `/..\components\DetalhamentoList\styles` | `/..\components\ProductList copy\` | `/..\components\ProductList copy\styles` | `/..\screens\Detalhamento\` | `/..\screens\Detalhamento\styles` | `/_sitemap` | `/style`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
