export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "dayBook" */ '@/modules/dayBook/layouts/dayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "dayBook" */ '@/modules/dayBook/views/NoEntrySelectedVue.vue')

        },
        {
            path: ':id',
            name: 'entry', 
            component: () => import(/* webpackChunkName: "dayBook" */ '@/modules/dayBook/views/EntryViewVue.vue'),
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]

}