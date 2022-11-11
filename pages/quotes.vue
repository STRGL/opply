<template>
    <div>
        <h1>Quotes</h1>
        <OCardsList :list="quotes" />
    </div>
</template>

<script>
import OCardsList from '@/components/organisms/o-cards-list.vue'

export default {
    name: 'QuotesPage',
    components: {
        OCardsList,
    },
    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/v1/quotes/')
        return { quotes: data.results, quoteCount: data.count }
    },
    data() {
        return {
            quotes: [],
            quoteCount: 0,
        }
    },
    methods: {
        async getQuotes() {
            const res = await this.$store.dispatch('getQuotes')
            this.quotes = res.results
            this.quoteCount = res.count
        },
    },
}
</script>

<style lang="sass" scoped></style>
