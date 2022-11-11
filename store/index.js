export const actions = {
    async getQuotes() {
        const res = await this.$axios.get('/api/v1/quotes/')
        return res
    },
    async getSuppliers() {
        const res = await this.$axios.get('/api/v1/suppliers/')
        return res
    },
    async getSupplier(id) {
        const res = await this.$axios.get(`/api/v1/suppliers/${id}/`)
        return res
    },
}
