<template>
  <div class="app-container">
    <span>登录</span>
    <el-form :model="form" label-width="120px">
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '~/store/userStore';
import UserApi from '~/api/UserApi';

const router = useRouter();
const form = reactive({
  account: '',
  password: '',
});

const onSubmit = () => {
  const user = useUserStore();
  UserApi.login(form).then(res => {
    user.auth = res;
    localStorage.setItem('token', res);
    router.push('/admin');
  });
};
</script>

<style scoped>

</style>
