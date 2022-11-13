<template>
    <div>
        <h2>Login</h2>
        <m-login-form :submit-form="loginUser" />
    </div>
</template>

<script>
import mLoginForm from '../components/molecules/m-login-form.vue'
export default {
    name: 'LoginPage',
    components: { mLoginForm },
    methods: {
        loginUser(loginInfo) {
            console.log(loginInfo)
            alert('Logging In')
        },
    },
}
</script>

<style lang="scss" scoped></style>
