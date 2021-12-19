<template>
  <div class="add-device">
    <div class="add-device-overlay"></div>
    <vue-drag-resize
      dragHandle=".drag-handle"
      :isResizable="false"
      :w="420"
      :h="320"
      :x="586"
      :y="180"
    >
      <div class="add-device-content-wrap flex-column">
        <div class="drag-handle"></div>
        <div class="add-device-content">
          <div class="add-device-title flex">
            <span>Thêm thiết bị</span>
            <i @click="hideForm" class="fas fa-times"></i>
          </div>
          <div class="add-device-body">
            <div class="add-device-body-control control">
              <div class="label">Tên thiết bị</div>
              <input class="input" maxlength="100" placeholder="Tên thiết bị bạn muốn hiển thị"/>
            </div>
            <div class="add-device-body-control control">
              <div class="label">
                Mã thiết bị <span style="color: red">*</span>
              </div>
              <input class="input" maxlength="100" placeholder="Nhập mã thết bị" />
            </div>
            <div class="add-device-body-control control">
              <div class="label">
                Mật khẩu thiết bị <span style="color: red">*</span>
              </div>
              <input class="input" maxlength="100" type="password" placeholder="Nhập mật khẩu thết bị"/>
            </div>
          </div>
          <div class="add-device-footer flex">
            <base-button
              classButton="btn-secondary"
              textButton="Hủy"
              @clickButton="hideForm"
            ></base-button>
            <base-button
              classButton="btn-primary"
              textButton="Thêm"
              @clickButton="addDevice"
            ></base-button>
          </div>
        </div>
      </div>
    </vue-drag-resize>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import VueDragResize from "vue-drag-resize";
import BaseButton from "../../components/base/BaseButton.vue";
export default {
  name: "AddDevice",
  data() {
    return {};
  },
  components: {
    VueDragResize,
    BaseButton,
  },
  computed: {},
  watch: {},

  methods: {
    ...mapMutations(["formAddDevice"]),

    /**
     * Đóng form thêm mới
     */
    hideForm() {
      this.formAddDevice(false);
    },

    /**
     * Thêm thiết bị
     */
    addDevice() {
      return;
    },
  },
};
</script>

<style scoped>
.add-device {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: fadeIn linear 0.1s;
}

.add-device-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.add-device-content-wrap {
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background-color: var(--white-color);
  border-radius: 4px;
}

.add-device-content {
  padding: 0 24px;
}

.drag-handle {
  height: 22px;
  width: 100%;
  cursor: move;
}

.add-device-title {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.add-device-title span {
  font-family: "OpenSans-SemiBold";
  font-size: 2rem;
  color: var(--black-color);
}

.add-device-title i {
  font-size: 2rem;
  cursor: pointer;
}

.add-device-body {
  font-family: "OpenSans-Regular";
  font-size: 1.3rem;
  color: var(--black-color);
  line-height: 18px;
}

.add-device-footer {
  justify-content: flex-end;
  align-items: center;
  margin: 16px 0 22px 0;
}

.add-device-footer .btn {
  width: 92px;
}
</style>