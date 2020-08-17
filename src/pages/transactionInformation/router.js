export default [{
        path: 'transactionInformation',
        name: 'transactionInformation',
        component: () =>
            import ('./page/transactionInformation')
    },
    {
        path: 'transactionAmount',
        name: 'transactionAmount',
        component: () =>
            import ('./page/transactionAmount')
    },
    {
        path: 'orderManagement',
        name: 'orderManagement',
        component: () =>
            import ('./page/orderManagement')
    },
]
