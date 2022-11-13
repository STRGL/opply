<template>
    <div>
        <div>
            <form @submit.prevent="userLogin">
                <div v-if="additionalFields">
                    <div>
                        <label>First Name (Optional)</label>
                        <input v-model="userDetails.firstName" maxlength="150" type="text" />
                    </div>
                    <div>
                        <label>Last Name (Optional)</label>
                        <input v-model="userDetails.lastName" maxlength="150" type="text" />
                    </div>
                    <div>
                        <label>Email (Optional)</label>
                        <input v-model="userDetails.email" maxlength="254" type="email" />
                    </div>
                </div>
                <div>
                    <label>Username</label>
                    <input v-model="userDetails.username" maxlength="150" minlength="1" type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input v-model="userDetails.password" maxlength="128" minlength="1" type="password" />
                </div>
                <div>
                    <button type="submit" @click="submitForm(userDetails)">{{ buttonText }}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MLoginForm',
    props: {
        buttonText: {
            type: String,
            default: 'Login',
            required: false,
        },
        additionalFields: {
            type: Boolean,
            default: false,
        },
        submitForm: {
            type: Function,
            default: () => {},
            required: true,
        },
    },
    data() {
        return {
            userDetails: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: '',
            },
        }
    },
    methods: {
        async userLogin() {
            try {
                const response = await this.$auth.loginWith('local', { data: this.login })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
input {
    border: 1px black solid;
}
</style>
