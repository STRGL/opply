<template>
    <div>
        <h1>Suppliers</h1>
        <OCardsList :list="suppliers" />
    </div>
</template>

<script>
import OCardsList from '@/components/organisms/o-cards-list.vue'

export default {
    name: 'SuppliersPage',
    components: {
        OCardsList,
    },
    async asyncData({ $axios, params }) {
        const { data } = await $axios.get('/api/v1/suppliers/')
        return { suppliers: data.results, suppliersCount: data.count }
    },
    data() {
        return {
            suppliers: [],
            suppliersCount: 0,
        }
    },
    methods: {
        async getSuppliers() {
            const res = await this.$store.dispatch('getSuppliers')
            this.quotes = res.results
            this.quoteCount = res.count
        },
    },
}
</script>

<style lang="sass" scoped></style>
