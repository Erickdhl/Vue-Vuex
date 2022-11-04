// export default () => ({

// })

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //1342423423432
            date: new Date().toDateString(),
            text: 'sadasd dasdasdas daasdasdasdsa adsadasdasdasdasdasdsadas',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, //1342423423432
            date: new Date().toDateString(),
            text: 'sadasd dasdasdas daasdasdasdsa adsadasdasdasdasdasdsadas',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000, //1342423423432
            date: new Date().toDateString(),
            text: 'sadasd dasdasdas daasdasdasdsa adsadasdasdasdasdasdsadas',
            picture: null,
        }
    ]
})