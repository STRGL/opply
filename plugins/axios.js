export default function ({ $axios }) {
    $axios.onRequest((config) => {
        config.headers.common.Authorization = `Token d0932c14d763289c638c53e879749299a670fdc7`
    })
}
