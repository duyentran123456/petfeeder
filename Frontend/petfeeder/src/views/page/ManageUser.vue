<template>
  <div class="manage-user p-5 fs-4 overflow-auto flex-grow-1">
    <div class="">
      <h2 class="mb-5 fw-bold"><i class="fas fa-users-cog"></i> Quản lý người dùng</h2>
      <table class="table table-bordered border shadow">
        <thead class="table-primary border">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Fullname</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>abc@gmail.com</td>
            <td>Tony Mark</td>
            <td>Male</td>
            <td>abcd</td>
            <td>0123456</td>
            <td><i class="far fa-trash-alt btn-delete"></i></td>
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

<style scoped>
.btn-delete{
  cursor: pointer;
}
.btn-delete:hover{
  color: red;
  font-weight: bold;
}
</style>
