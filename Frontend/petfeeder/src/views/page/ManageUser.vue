<template>
  <div class="manage-user p-5 fs-4 overflow-auto flex-grow-1">
    <div class="">
      <h2 class="mb-5 fw-bold"><i class="fas fa-users-cog"></i> Quản lý người dùng</h2>
      <table class="table table-bordered border shadow">
        <thead class="table-primary border">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <!-- <th scope="col">Devices</th> -->
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in dashboardAdmin.users"
          :key="index">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ user.username }}</td>
            <td><span v-if="!user.fullName" class="text-danger" >Chưa cập nhật</span>{{user.fullName}}</td>
            <td>{{ user.email }}</td>
            <td><span v-if="!user.fullName" class="text-danger" >Chưa cập nhật</span>{{user.phone}}</td>
            <td>{{ user.gender }}</td>
            <td>Hanoi, VietNam</td>
            <!-- <td><span v-if="user.devices.length == 0" class="text-danger"> Chưa đăng ký thiết bị</span>
              <span v-for="(device, index) in user.devices.map((e) => ('thietbi' + e))" :key="index" class="me-3 border px-2 rounded bg-info">{{device}}</span></td> -->
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "ManageUser",
  components: {},
  created() {
    this.getDashboard();
  },
  computed: {
    ...mapState(["dashboardAdmin"]),
  },
  methods: {
    ...mapActions(["getDashboard"]),
  },
};
</script>

<style scoped>
.btn-delete{
  cursor: pointer;
}
.btn-delete:hover{
  color: red;
  font-weight: bold;
}
</style>
