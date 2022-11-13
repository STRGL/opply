<template>
    <div>
        <h2>Login</h2>
        <m-login-form :submit-form="registerUser" :additional-fields="true" />
    </div>
</template>

<script>
import mLoginForm from '../components/molecules/m-login-form.vue'
export default {
    name: 'RegisterPage',
    components: { mLoginForm },
    methods: {
        registerUser(loginInfo) {
            console.log(loginInfo)
            alert('Logging In')
        },
    },
}
</script>

<style lang="scss" scoped></style>
