import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //Trạng thái đóng mở form thêm thiết bị
    formAddDevice: false,
    //Trạng thái đóng mở form thông tin tài khoản
    formProfile: false,
    //Trạng thái đóng mở form đổi mật khẩu
    formChangePassword: false,

    //token
    token: null,

    deviceInfor: {},

    /**
     * Mang các obj lưu thông tin toast
     * obj toast co dang
     * @param {String} message
     * @param {String} type Kiểu thông báo để hiên thị màu (Chỉ nhận các giá trị định nghĩa sẵn: success, error, warning)
     */
    toast: [],

    /**
     * Thông tin thiết bị hiện tại
     */
    deviceCurrent: {},

    /**
     * Dách sách thiết bị
     */
    devices: [
      {
        petDetectedFeedWeight: {
          status: "on",
          weight: 100,
        },
        deviceId: "1",
        deviceName: "kiki",
        onClickFeedWeight: 100,
        presetFeed: [],
      },
      {
        petDetectedFeedWeight: {
          status: "on",
          weight: 100,
        },
        deviceId: "2",
        deviceName: "hello",
        onClickFeedWeight: 100,
        presetFeed: [],
      },
      {
        petDetectedFeedWeight: {
          status: "off",
          weight: 100,
        },
        deviceId: "3",
        deviceName: "hello",
        onClickFeedWeight: 100,
        presetFeed: [],
      },
    ],

    //Trạng thái loading
    loading: false,
  },

  getters: {},

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

    setToken(state, token) {
      state.token = token;
    },

    /**
     * Xu ly toast
     * @param {Object} state state trong store
     * @param {Object} content nội dung thêm vào
     *  Author: ntthanh (30/09/2021)
     */
    addToast(state, content) {
      //Them obj vao cuoi
      state.toast.push(content);
    },
    removeToast(state) {
      //Xoa obj
      state.toast.shift();
    },

    /**
     * Set thông tin thiết bị hiện tại
     */
    setDeviceCurrent(state, deviceCurrent) {
      state.deviceCurrent = deviceCurrent;
    },

    setDevices(state, devices) {
      state.devices = devices;
    },

    //Thay đổi trạng thái loading
    showLoading(state) {
        state.loading = true;
    },

    hideLoading(state) {
        state.loading = false;
    }

  },

  actions: {},
});

export default store;
