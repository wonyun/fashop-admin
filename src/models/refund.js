import order from "@/services/order";

const refund = order.refund;
export default {
    namespace: "order",
    state: {
        list: {},
        info: {},
        handle: {},
        receive: {}
    },
    effects: {
        * list({ payload }, { call, put }) {
            const response = yield call(refund.list, payload);
            yield put({
                type: "list",
                payload: response
            });
        },
        * info({ payload }, { call, put }) {
            const response = yield call(refund.info, payload);
            yield put({
                type: "info",
                payload: response
            });
        },
        * handle({ payload }, { call, put }) {
            const response = yield call(refund.handle, payload);
            yield put({
                type: "handle",
                payload: response
            });
        },
        * receive({ payload }, { call, put }) {
            const response = yield call(refund.receive, payload);
            yield put({
                type: "receive",
                payload: response
            });
        }
    },
    reducers: {
        list(state, action) {
            return {
                ...state,
                list: action.payload
            };
        },
        info(state, action) {
            return {
                ...state,
                info: action.payload
            };
        },
        handle(state, action) {
            return {
                ...state,
                handle: action.payload
            };
        },
        receive(state, action) {
            return {
                ...state,
                receive: action.payload
            };
        }
    }
};