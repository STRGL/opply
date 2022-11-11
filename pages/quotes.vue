<template>
    <div>
        <h1>Quotes</h1>
    </div>
</template>

<script>
export default {
    name: 'QuotesPage',
    data() {
        return {
            quotes: [],
        }
    },
    mounted() {
        this.getQuotes()
    },
    methods: {
        async getQuotes() {
            const res = await this.$store.dispatch('getQuotes')
            this.quotes = res.data.results
        },
    },
}
</script>

<style lang="sass" scoped></style>
