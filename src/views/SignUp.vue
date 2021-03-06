<template>
  <section class="t-auth-section">
    <form @submit.prevent="handleSubmit" class="t-auth-form">
      <h1 class="mb-6">注册</h1>
      <hr />
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="email">
          <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1" />
          邮箱
        </label>
        <input
          :class="`t-input ${!validEmail && 'border border-error'}`"
          type="email"
          id="email"
          placeholder="Email"
          v-model="email"
          required
        />
        <p class="mt-0.5 text-error text-xs italic" v-show="!validEmail">
          确认邮箱
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="name">
          <font-awesome-icon :icon="['fas', 'user-circle']" class="mr-1" />
          用户名
        </label>
        <input
          class="t-input"
          type="text"
          id="name"
          placeholder="Display Name"
          v-model="displayName"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="password">
          <font-awesome-icon :icon="['fas', 'key']" class="mr-1" />
          密码
        </label>
        <input
          class="t-input"
          type="password"
          id="password"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="cpassword">
          <font-awesome-icon :icon="['fas', 'key']" class="mr-1" />
          确认密码
        </label>
        <input
          :class="`t-input ${!equalPassword && 'border border-error'}`"
          type="password"
          id="cpassword"
          placeholder="Confirm Password"
          v-model="cpassword"
        />
        <p class="mt-0.5 text-error text-xs italic" v-show="!equalPassword">
          Password and Confirm Password doesn't match.
        </p>
      </div>
      <div class="flex justify-between items-center">
        <button type="submit" class="t-btn inline-flex items-center bg-primary">
          <Loading class="h-5 w-5" v-if="loading" />
          <font-awesome-icon :icon="['fas', 'user-plus']" class="mr-2" v-else />
          注册
        </button>
        <h5 class="mr-1">
          已经注册?
          <router-link :to="{ name: 'Login' }" class="text-primary">
            登录
          </router-link>
        </h5>
      </div>

      <div v-if="error.length > 0" class="mt-4 p-4 bg-error rounded">
        {{ error }}
      </div>
    </form>
  </section>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { reactive, toRefs, computed, ref } from "vue";
import Loading from "@/components/Loading.vue";
import { isValidEmail } from "@/helpers/isValidEmail";

export default {
  name: "SignUp",
  components: {
    Loading,
  },
  setup() {
    const auth = getAuth();
    const router = useRouter();

    const state = reactive({
      email: "",
      displayName: "",
      password: "",
      cpassword: "",
    });

    const loading = ref(false);
    const error = ref("");

    const validate = () => {
      if (
        !isValidEmail(state.email) ||
        state.displayName.length === 0 ||
        state.password.length < 5 ||
        state.password !== state.cpassword
      )
        return false;
      return true;
    };

    const equalPassword = computed(() =>
      state.cpassword.length > 0 ? state.password === state.cpassword : true
    );
    const validEmail = computed(() =>
      state.email.length > 1 ? isValidEmail(state.email) : true
    );

    const handleSubmit = async () => {
      loading.value = true;
      if (validate()) {
        try {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            state.email,
            state.password
          );
          await updateProfile(user, {
            displayName: state.displayName,
          });
          await router.replace({ name: "Home" });
        } catch (e) {
          error.value = e.message;
        }
      } else {
        error.value =
          "Make sure your email id is valid, Display Name is present, Password is more than 5 characters and Password and Confirm Password are same";
      }
      loading.value = false;
    };

    return {
      ...toRefs(state),
      equalPassword,
      validEmail,
      handleSubmit,
      loading,
      error,
    };
  },
};
</script>
