<template>
    <div
        class="p-6 border border-blue-200 rounded-sm bg-blue-100 text-black flex flex-col gap-2 max-w-md w-full"
        :class="{
            ['hover:shadow-lg transition ease-in-out duration-500']: clickable,
        }"
    >
        <h3 class="underline">{{ item.title || item.name }}</h3>
        <p v-if="item.amount">{{ item.amount }}</p>
        <p v-if="item.description" class="text-gray-400">{{ item.description }}</p>
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
        clickable: {
            type: Boolean,
            default: false,
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
