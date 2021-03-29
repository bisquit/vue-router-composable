import { computed } from '@vue/composition-api';
import { getVM } from './utils';

export function useRouter() {
  const vm = getVM();
  return vm.$router;
}

export function useRoute() {
  const vm = getVM();
  return computed(() => vm.$route);
}
