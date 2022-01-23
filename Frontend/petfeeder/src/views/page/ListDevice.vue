<template>
  <div class="list-device flex-grow-1 fs-4 overflow-auto">
    <div class="manage-user p-5 fs-4 overflow-auto flex-grow-1">
      <h2 class="mb-5 fw-bold"><i class="fas fa-users-cog"></i> Danh sách thiết bị người dùng sở hữu</h2>
      <table class="table table-bordered border shadow">
        <thead class="table-primary border">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id thiết bị</th>
            <th scope="col">Tên thiết bị</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(device, index) in devices"
          :key="device.deviceId">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ device.deviceId }}</td>
            <td>{{ device.deviceName }}</td>
            <td><div class="border border-success status-icon rounded text-white fw-bold"
              :class="[device.petDetectedFeedWeight.status=='on'?'bg-success':'bg-danger']"
            >{{ device.petDetectedFeedWeight.status }}</div></td>
            <td><i @click="removeDevice(device.deviceId)" class="far fa-trash-alt btn-delete"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ListDevice",
  components: {},
  data() {
    return {
      listDivices: [],
    }
  },
  props: {

  },
  created() {

  },
  computed: {
    ...mapState(['devices']),
  },
  methods: {
    removeDevice(deviceId) {
      debugger
    }
  },
};
</script>

<style scoped>
.status-icon{
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-delete{
  cursor: pointer;
}
.btn-delete:hover{
  color: red;
  font-weight: bold;
}
</style>
