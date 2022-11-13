<template>
    <div>
        <nav class="w-full h-16 bg-blue-600">
            <div class="container w-full mx-auto max-w-screen-lg p-4 flex gap-x-3 justify-between">
                <nuxt-link to="/" class="">Home</nuxt-link>
                <div class="flex gap-x-3">
                    <div v-if="$auth.loggedIn" class="flex gap-x-3">
                        <nuxt-link to="/quotes/">Quotes</nuxt-link>
                        <nuxt-link to="/suppliers/">Suppliers</nuxt-link>
                        <button @click="logout()">Logout</button>
                    </div>
                    <div v-else class="flex gap-x-3">
                        <nuxt-link to="/login">Login</nuxt-link>
                        <nuxt-link to="/register">Register</nuxt-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container w-full mx-auto max-w-screen-lg p-4">
            <nuxt />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
    methods: {
        async logout() {
            await this.$auth.logout()
            this.$auth.setUserToken('')
        },
    },
}
</script>

<style lang="scss"></style>
