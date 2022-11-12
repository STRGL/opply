<template>
    <div class="w-9/12 mx-auto flex justify-center gap-x-3 my-3">
        <button class="button button--long" :disabled="currentPage <= 1" @click="onClick(1)">First</button>
        <button class="button button--long" :disabled="!prev" @click="onClick(currentPage - 1)">Prev</button>
        <span class="flex items-center">{{ `${currentPage} / ${cTotalPages}` }}</span>
        <button class="button button--long" :disabled="!next" @click="onClick(currentPage + 1)">Next</button>
        <button class="button button--long" :disabled="currentPage >= cTotalPages" @click="onClick(cTotalPages)">
            Last
        </button>
    </div>
</template>

<script>
export default {
    name: 'MPagination',
    props: {
        totalCount: {
            type: Number,
            required: true,
        },
        amountPerPage: {
            type: Number,
            default: 10,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
        next: {
            type: String,
            default: null,
        },
        prev: {
            type: String,
            default: null,
        },
    },
    computed: {
        cTotalPages() {
            return Math.ceil(this.totalCount / this.amountPerPage)
        },
        cGetRootSlug() {
            const url = this.next ?? this.prev
            const split = url.split('https://february-21.herokuapp.com/api/v1/')[1]
            return split.split('/')[0]
        },
    },
    methods: {
        onClick(data) {
            this.$emit('navigatePages', { page: data })
        },
    },
}
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 2px lightgray solid;
    color: rgb(39, 39, 39);
    background-color: #a2c5f3;
    text-align: center;

    &:disabled {
        cursor: not-allowed;
        background-color: darkgray;
    }

    &--long {
        width: auto;
        padding: 0 0.5rem;
    }
}
</style>
