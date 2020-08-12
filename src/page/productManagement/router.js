export default [{
    path: 'product',
    name: 'product',
    component: () =>
        import ('./product'),
}, {
    path: 'classification',
    name: 'classification',
    component: () =>
        import ('./classification'),
}]