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
            try {
                this.$auth.loginWith('local', {
                    data: {
                        username: loginInfo.username,
                        password: loginInfo.password,
                    },
                })
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Failed to login in:', error)
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
