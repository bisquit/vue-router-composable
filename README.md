# vue-router-composable

Use vue router with composition API in Vue 2

## Installation

```bash
npm install @bisquit/vue-router-composable
# or
yarn add @bisquit/vue-router-composable
```

## Usage

Before using this package, you should install and setup [`@vue/composition-api`](https://github.com/vuejs/composition-api).

### `useRouter()`

```ts
import { useRouter } from '@bisquit/vue-router-composable';

export default {
  setup() {
    const router = useRouter();

    const onClick = () => {
      router.push('/');
    };
  },
};
```

### `useRoute()`

```ts
import { useRoute } from '@bisquit/vue-router-composable';

export default {
  setup() {
    const route = useRoute();

    // `route` is a ref, so use with `unref` or `.value`
    const { query } = route.value;
    doSomething(name: query.name);
  },
};
```

## License

[MIT](LICENSE)
