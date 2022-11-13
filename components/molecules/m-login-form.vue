<template>
    <div>
        <div class="mx-auto w-full flex justify-center">
            <form
                class="max-w-lg flex flex-col gap-y-4 p-4 justify center border-black border-4 rounded"
                @submit.prevent="submitForm(userDetails)"
            >
                <div v-if="additionalFields" class="flex flex-col gap-y-4 justify center">
                    <div class="fieldContainer">
                        <label>First Name (Optional)</label>
                        <input v-model="userDetails.firstName" maxlength="150" type="text" />
                    </div>
                    <div class="fieldContainer">
                        <label>Last Name (Optional)</label>
                        <input v-model="userDetails.lastName" maxlength="150" type="text" />
                    </div>
                    <div class="fieldContainer">
                        <label>Email (Optional)</label>
                        <input v-model="userDetails.email" maxlength="254" type="email" />
                    </div>
                </div>
                <div class="fieldContainer">
                    <label>Username</label>
                    <input v-model="userDetails.username" maxlength="150" minlength="1" type="text" />
                </div>
                <div class="fieldContainer">
                    <label>Password</label>
                    <input v-model="userDetails.password" maxlength="128" minlength="1" type="password" />
                </div>
                <div class="flex justify-center">
                    <button class="hover:shadow-sm transition ease-in-out" type="submit">{{ buttonText }}</button>
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
}
</script>

<style lang="scss" scoped>
.fieldContainer {
    display: flex;
    justify-content: flex-end;
    gap: 0 2rem;
    input {
        padding: 0 0.5rem;
        border: 1px lightgray solid;
    }
}

button {
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 1px lightgray solid;
    color: rgb(39, 39, 39);
    background-color: #7d7d7d;
    text-align: center;
}
</style>
