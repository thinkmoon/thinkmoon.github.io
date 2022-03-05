import { useUserStore } from '~/store/userStore';

export default defineNuxtRouteMiddleware((to, from) => {
  let user = useUserStore();
  console.log('auth:', user.auth);
  if (!user.auth) {
    console.log('auth fail');
    return navigateTo('/login');
  }
});
