<template>
  <div class="manage-user w-100 p-5">
    <div class="w-100">
      <h2 class="mb-3">Quản lý người dùng</h2>
      <table class="table table-bordered border-secondary shadow">
        <thead class="table-primary border-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Người dùng</th>
            <th scope="col">Thiết bị</th>
            <th scope="col">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageUser",
  components: {},
  props: {

  },
};
</script>

<style>
</style>
