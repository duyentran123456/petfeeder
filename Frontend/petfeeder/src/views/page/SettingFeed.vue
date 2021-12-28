<template>
  <div class="setting-feed row flex-grow-1 fs-4 overflow-auto">
      <div class="col-7 px-5 py-3 flex flex-column align-items-center">
        <h2>Cho ăn theo giờ</h2>
        <div class="calendar-feeder w-100">
          <div class="calender-feeder-item border card shadow mb-5">
            <div class="card-header flex justify-content-end"> 
              <button class="btn btn-close" ></button>
            </div>
            <div class="card-body">
              <table class="gfg">
                <tr>
                  <th>Đặt giờ:</th>
                  <td class="flex px-3">
                    <div class="me-3">
                      <span>Giờ</span>
                      <select class="form-select">
                        <option selected></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                      </select>
                    </div>
                    <div class="">
                      <span>Phút</span>
                      <select class="form-select">
                        <option selected></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>  
                  </td>
                </tr>
                <tr>
                  <th>Lượng thức ăn:</th>
                  <td class="px-3 flex">
                    <input type="text" class="form-control me-3">
                    <span>(gam)</span>
                    </td>
                </tr>
                <tr>
                  <th>Đặt nhiều lần:</th>
                  <td>
                    <label class="switch">
                      <input type="checkbox">
                      <span class="slider round"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>
                    Ngày đặt:
                  </th>
                  <td class="px-3">
                    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                      <input type="checkbox" class="btn-check" id="t2" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t2">T2</label>

                      <input type="checkbox" class="btn-check" id="t3" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t3">T3</label>

                      <input type="checkbox" class="btn-check" id="t4" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t4">T4</label>

                      <input type="checkbox" class="btn-check" id="t5" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t5">T5</label>

                      <input type="checkbox" class="btn-check" id="t6" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t6">T6</label>

                      <input type="checkbox" class="btn-check" id="t7" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t7">T7</label>

                      <input type="checkbox" class="btn-check" id="cn" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="cn">CN</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    Lên lịch:
                  </th>
                  <td>
                    <label class="switch">
                      <input type="checkbox">
                      <span class="slider round"></span>
                    </label>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="calendar-feeder w-100">
          <div class="calender-feeder-item border card shadow">
            <div class="card-header flex justify-content-end">
              <button class="btn btn-close" ></button>
            </div>
            <div class="card-body">
              <table class="gfg">
                <tr>
                  <th>Đặt giờ:</th>
                  <td class="flex px-3">
                    <div class="me-3">
                      <span>Giờ</span>
                      <select class="form-select">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="">
                      <span>Phút</span>
                      <select class="form-select">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>  
                  </td>
                </tr>
                <tr>
                  <th>Lượng thức ăn:</th>
                  <td class="px-3 flex">
                    <input type="text" class="form-control me-3">
                    <span>(gam)</span>
                    </td>
                </tr>
                <tr>
                  <th>Đặt nhiều lần:</th>
                  <td>
                    <label class="switch">
                      <input type="checkbox">
                      <span class="slider round"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>
                    Ngày đặt:
                  </th>
                  <td class="px-3">
                    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                      <input type="checkbox" class="btn-check" id="t2" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t2">T2</label>

                      <input type="checkbox" class="btn-check" id="t3" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t3">T3</label>

                      <input type="checkbox" class="btn-check" id="t4" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t4">T4</label>

                      <input type="checkbox" class="btn-check" id="t5" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t5">T5</label>

                      <input type="checkbox" class="btn-check" id="t6" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t6">T6</label>

                      <input type="checkbox" class="btn-check" id="t7" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="t7">T7</label>

                      <input type="checkbox" class="btn-check" id="cn" autocomplete="off">
                      <label class="btn btn-outline-secondary" for="cn">CN</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    Lên lịch:
                  </th>
                  <td>
                    <label class="switch">
                      <input type="checkbox">
                      <span class="slider round"></span>
                    </label>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="add-time-feeder">
          <button class="btn btn-success"><span class="fw-bold">+</span></button>
          <span class="fw-bold">Thêm mới lịch trình</span>
        </div>
      </div>
      <div class="col-5 p-5">
        <div class="sticky-top w-75 feeder-container border flex flex-column justify-content-center align-items-center py-5 shadow me-3 mt-3">
          <h2 class="mb-3">Cho ăn trực tiếp</h2>
          <button class="btn btn-success btn-feeder">Cho ăn</button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "SettingFeed",
  components: {},
  props: {

  },
};
</script>

<style>
.btn-feeder{
  width: 100px;
  height: 40px;
}

.feeder-container{
  height: 150px;
}

.tbl{
  border-collapse: collapse;
}

.gfg {
    border-collapse:separate;
    border-spacing:0 15px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.add-time-feeder{
  position: absolute;
  bottom: 2rem;
  right: 28rem;
}
</style>
