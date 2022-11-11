<template>
    <div>
        <span class="mr-2">{{ supplier.id }}</span>
        <h1 class="inline">{{ supplier.name }}</h1>
        <p>{{ supplier.description }}</p>

        <nuxt-child />
    </div>
</template>

<script>
export default {
    name: 'SupplierPage',

    async asyncData({ $axios, params }) {
        const { data } = await $axios.get(`/api/v1/suppliers/${params.id}/`)
        return { supplier: data }
    },
    data() {
        return {
            supplier: {},
        }
    },
}
</script>

<style lang="sass" scoped></style>
