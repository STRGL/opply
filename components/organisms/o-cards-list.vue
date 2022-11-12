<template>
    <div class="mx-auto grid gap-4 my-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <template v-for="item in list">
            <nuxt-link v-if="clickable" :key="item.id" :to="`${$nuxt.$route.path}${item.id}/`" class="w-full">
                <MCard :item="item" :clickable="clickable" />
            </nuxt-link>
            <MCard v-else :key="item.id" :item="item" />
        </template>
    </div>
</template>

<script>
import MCard from '@/components/molecules/m-card.vue'

export default {
    name: 'OCardsList',
    components: {
        MCard,
    },
    props: {
        list: {
            type: Array,
            required: true,
        },
        clickable: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="sass" scoped></style>
