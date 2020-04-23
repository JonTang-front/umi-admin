export default {
    namespace: 'system',
    state: {
        collapsed: false
    },
    effects: {},
    reducers: {
        toggleMenu(state, action) {
            return {
                ...state,
                collapsed: action.payload,
            };
        }
    },
    subscriptions: {}
}