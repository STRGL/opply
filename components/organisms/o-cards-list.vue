<template>
    <div class="mx-auto grid gap-4 my-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-3">
        <template v-for="item in list">
            <MCard :key="item.id" :item="item" />
        </template>
    </div>
</template>

<script>
import MCard from '@/components/molecules/m-card.vue'

export default {
    name: 'MCardsList',
    components: {
        MCard,
    },
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="sass" scoped></style>
