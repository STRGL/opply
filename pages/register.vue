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
        async registerUser(registrationInfo) {
            try {
                await this.$axios.post('/api/v1/users/', registrationInfo)
                this.$auth.loginWith('local', { data: registrationInfo })
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Failed to register user:', error)
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
