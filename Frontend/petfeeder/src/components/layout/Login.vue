<template>
  <div class="login text-white fs-3">
     <div class="container">
       <div class="row vh-100">
         <div class="col-8 layout text-dark">
           <h1 class="sologan">Thú cưng của bạn xứng đáng được quan tâm nhiều hơn</h1>
           <h1 class="text-title fw-bold">PETFEEDER</h1>
         </div>
         <div class="col-4 layout p-5">
           <div class="text-center"><img class="mb-5 rounded-circle" src="../../assets/img/logo.jpg" alt="photo" width="200" height="200"></div>
           <h1 class="mb-5 text-center">Đăng nhập</h1>
           <form action="" class="d-flex flex-column px-3 mb-5">
              <div class="form-group mb-3">
                <label for="" class="form-label" >Tên đăng nhập</label>
                <input type="text" class="form-control fs-3 bg-gray">
              </div>
              <div class="form-group mb-4">
                <label for="" class="form-label" >Mật khẩu</label>
                <input type="password" class="form-control fs-3 bg-gray" >
              </div>
              <div class="text-center">
                <button class="btn btn-primary fs-4 w-50" >Đăng nhập</button>
              </div>
            </form>
            
            <div class="text-center p-space"><a href="/forgot-password" class="text-decoration-none text-muted mb-5">Quên mật khẩu ?</a></div>

            <div class="text-center">
              <span class="me-2">Chưa có tài khoản ?</span> 
              <a href="/register" class="text-decoration-none text-muted">Đăng ký</a>
            </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {

  },
};
</script>

<style>
  .bg-gray{
    background: #cfc8c8;
  }

  .col-8 .sologan{
    position: absolute;
    top: 52rem;
    font-family: 'Allura', cursive;
    font-size: 3rem;
  }
</style>