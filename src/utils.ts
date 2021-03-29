import { getCurrentInstance } from '@vue/composition-api';

export function getVM() {
  const vm = getCurrentInstance()?.proxy;

  if (vm === undefined) {
    throw new Error(
      `[vue-router-composable] use api should be used inside component's setup().`
    );
  }

  return vm;
}
