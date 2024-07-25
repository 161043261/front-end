# vue-demo

## Vue3 is much better than React

### Project Setup

```sh
npm install
npm install tslib @types/node
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npm install nanoid pinia
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

```sh
npm install axios
npm install vue-router
```

### Vue2 Options API

```vue

<script lang="ts">
  export default {
    name: 'Person',
    // data
    data() {
      return {}
    },
    // methods
    methods: {}
  }
</script>
```

### ts module

./math.ts

```ts
export function add(x: number, y: number) {
    return x + y;
}
```

./main.ts

```ts
import {add/* as alias */} from './math';

console.log(add(1, 2));
```

./main.ts

```ts
import * as math from './math'

console.log(math.add(1, 2));
```

./echo.ts

```ts
export default function echo(msg: string) {
    console.log(msg);
}
```

./main.ts

```ts
import alias from './echo.ts';

alias('Fuck Microsoft!');
```

* Iosevka SS04 Menlo Style
* Iosevka SS06 Liberation Mono Style
* Iosevka SS09 Source Code Pro Style
* Iosevka SS12 Ubuntu Mono Style
* Iosevka SS14 JetBrains Mono Style
* Iosevka SS16 PT Mono Style