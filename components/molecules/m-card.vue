<template>
    <div
        class="p-6 border border-blue-200 hover:shadow-lg rounded-sm bg-blue-100 text-blue-800 transition ease-in-out duration-500 flex flex-col"
    >
        <h3>{{ item.title }}</h3>
        <p v-if="item.amount">{{ item.amount }}</p>
    </div>
</template>

<script>
export default {
    name: 'MCard',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            disabled: false,
        }
    },
}
</script>

<style lang="sass" scoped></style>
