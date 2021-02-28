import {createStore} from "redux";
import {actionType, mainViewType} from "./config";
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage
}




const reducer = function (state, action) {

    //state 초기화.
    if (state === undefined) {
        return {
            mainView: mainViewType.MainPage,
            logged: false,
            memberData: [], // 회원목록
            id: '',
            loginId: '',
            mnick: '',
            mnum: '',
            googleOn: false,
            mainSearch: {
                category: "all",
                searchVal: "",
                searchResultDataList: [],
            },

        }
    }

    // state 불변성 유지해야함. immutability
    // newState 새로 파서 기존꺼 + 변경할거 넣은다음 redux의 state 바꿔치기.
    let newState = {};

    //action.type 별로 로직처리 다르게 하기.
    if (action.type === actionType.setMainView) {
        // window.setTimeout(setPositionFooter, 100);
        newState = Object.assign({}, state, {
            mainView: action.mainView,
        });
    } else if (action.type === actionType.SIGN_UP) {

        newState = Object.assign({}, state, {
            mainView: action.mainView,
        });
    } else if (action.type === actionType.LOG_IN) {
        newState = Object.assign({}, state, {
            loginId: action.loginId,
            mnick: action.mnick,
            mpw: action.mpw,
            mpic: action.mpic,
        logged: action.logged
            });
        } else if (action.type === actionType.Mnick) {
            newState = Object.assign({}, state, {
                mnick: action.mnick,
            logged: action.logged
                });
            } else if (action.type === actionType.Mnum) {
                newState = Object.assign({}, state, {
                    mnum: action.mnum,
                logged: action.logged
                    });
            }else if (action.type === actionType.Mpic) {
                        newState = Object.assign({}, state, {
                            mpic: action.mpic,
                        logged: action.logged
                            });
        } else if (action.type === actionType.LOG_OUT) {
            newState = Object.assign({}, state, {
                loginId: action.loginId,
                mnick: action.mnick,
                mnum: action.mnum,
                logged: action.logged});
    } else if (action.type === actionType.LOGIN_REQUEST) {
        newState = Object.assign({}, state, {});
    } else if (action.type === actionType.LOGIN_SUCCESS) {
        newState = Object.assign({}, state, {
            logged: true,
            id: action.type.id,
        });
    } else if (action.type === actionType.LOGIN_FAILURE) {
        newState = Object.assign({}, state, {
            logged: false,
            id: "",
        });
    } else if (action.type === actionType.MEMBER_LIST) {
        newState = Object.assign({}, state, {
            memberData: action.payload
        });
    } else if (action.type === actionType.shareBoardUpdate) {
        newState = Object.assign({}, state);
    } else if (action.type === actionType.googleLogin) {
        newState = Object.assign({}, state, {
            googleOn: action.googleOn
        })
    } else if (action.type === actionType.setSearchResultDataList) {
        newState = Object.assign({}, state, {
            mainSearch: {
                category: action.category,
                searchVal: action.searchVal,
                searchResultDataList: action.searchResultDataList,
            },
        });
    }

    console.log("reducer()", state, action, newState);
    return newState;
}

const enhancedReducer = persistReducer(persistConfig, reducer);

export default createStore(enhancedReducer
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

