<template>
    <div>
        <h2>Suppliers</h2>
        <OCardsList :list="suppliers" prefix="supplier" :clickable="true" />
        <MPagination
            :total-count="suppliersCount"
            :current-page="navigation.currentPage"
            :next="navigation.next"
            :prev="navigation.prev"
            @navigatePages="navigatePages"
        />
    </div>
</template>

<script>
import MPagination from '@/components/molecules/m-pagination.vue'
import OCardsList from '@/components/organisms/o-cards-list.vue'

export default {
    name: 'SuppliersPage',
    components: {
        OCardsList,
        MPagination,
    },
    middleware: 'auth',
    async asyncData({ $axios }) {
        const { data } = await $axios.get(`/api/v1/suppliers/`)
        return {
            suppliers: data.results,
            suppliersCount: data.count,
            navigation: { currentPage: 1, next: data.next, prev: data.previous },
        }
    },
    data() {
        return {
            suppliers: [],
            suppliersCount: 0,
            navigation: {
                next: null,
                prev: null,
                currentPage: 1,
            },
        }
    },
    computed: {
        cGetPageNumber() {
            return Number(this.$route.query.page)
        },
    },
    methods: {
        async navigatePages(data) {
            const results = await this.$axios.$get(`/api/v1/suppliers/?page=${data.page}`)
            this.suppliers = results.results
            this.navigation = {
                currentPage: data.page,
                next: results.next,
                prev: results.previous,
            }
        },
    },
}
</script>

<style lang="sass" scoped></style>
