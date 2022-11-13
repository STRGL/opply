<template>
    <div>
        <h2>Quotes</h2>
        <OCardsList :list="quotes" />
        <MPagination
            :total-count="quotesCount"
            :current-page="navigation.currentPage"
            :next="navigation.next"
            :prev="navigation.prev"
            @navigatePages="navigatePages"
        />
    </div>
</template>

<script>
import MPagination from '../components/molecules/m-pagination.vue'
import OCardsList from '@/components/organisms/o-cards-list.vue'

export default {
    name: 'QuotesPage',
    components: {
        OCardsList,
        MPagination,
    },
    middleware: 'auth',
    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/v1/quotes/')
        return {
            quotes: data.results,
            quotesCount: data.count,
            navigation: { currentPage: 1, next: data.next, prev: data.previous },
        }
    },
    data() {
        return {
            quotes: [],
            quotesCount: 0,
            navigation: {
                next: null,
                prev: null,
                currentPage: 1,
            },
        }
    },
    methods: {
        async navigatePages(data) {
            const results = await this.$axios.$get(`/api/v1/quotes/?page=${data.page}`)
            this.quotes = results.results
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
