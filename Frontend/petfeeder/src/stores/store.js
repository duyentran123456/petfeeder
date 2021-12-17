import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //Trạng thái đóng mở form thêm thiết bị
        formAddDevice: false,
        //Trạng thái đóng mở form thông tin tài khoản
        formProfile: false,
        //Trạng thái đóng mở form đổi mật khẩu
        formChangePassword: false,
    },

    getters: {

    },

    mutations: {
        //Đóng mở form thêm thiết bị
        formAddDevice(state, formAddDevice) {
            state.formAddDevice = formAddDevice;
        },

        //Đóng mở form thông tin tài khoản
        formProfile(state, formProfile) {
            state.formProfile = formProfile;
        },

        //Đóng mở form đổi mật khẩu
        formChangePassword(state, formChangePassword) {
            state.formChangePassword = formChangePassword;
        },
    },

    actions: {

    }
});

export default store