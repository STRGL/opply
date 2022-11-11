export const actions = {
    async getQuotes() {
        const res = await this.$axios.get('/api/v1/quotes/')
        return res
    },
}
