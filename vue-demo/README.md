# vue-demo

## Vue3 is much better than React

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Vue2 Options API

```vue
<script lang="ts">
  export default {
    name: 'Person',
    // data
    data() {
      return {
        username: "James Gosling",
        age: 69,
        tel: 'unknown',
      }
    },
    // methods
    methods: {
      changeName() {
        this.username = "Brendan Eich";
      },
      changeAge() {
        this.age++;
      },
      showTel() {
        window.alert(this.tel)
      }
    }
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
