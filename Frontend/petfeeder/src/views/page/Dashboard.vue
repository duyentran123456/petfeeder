<template>
  <div class="dashboard w-100 fs-4">
    <div class="w-50 flex flex-column align-items-center">
      <h2 class="mb-5">Tổng quan</h2>
      <div class="text-white flex w-75">
        <div class="bg-primary p-3 w-50 me-4">
          <span>50</span> thiết bị
        </div>
        <div class="bg-success p-3 w-50">
          <span>100</span> người dùng
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  props: {

  },
};
</script>

<style>
.dashboard {
  background-color: var(--background-page);
}
</style>
