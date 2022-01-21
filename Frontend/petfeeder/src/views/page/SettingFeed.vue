<template>
  <div class="setting-feed row fs-3 overflow-auto w-100">
    <div class="col-7 px-5 pt-5">
      <div class="calendar-feeder w-100">
        <div class="calender-feeder-item border card shadow mb-5">
          <div class="card-header flex justify-content-center"> 
            <h3>Cho ăn theo lịch trình</h3>
          </div>
          <div class="card-body">
            <form @submit="onFresetFeeding">
            <table class="gfg">
              <tr>
                <th>Đặt giờ:</th>
                <td class="px-3 border-0">
                  <vue-timepicker v-model="form.date"></vue-timepicker>
                </td>
              </tr>
              <tr>
                <th>Lượng thức ăn:</th>
                <td class="px-3 flex">
                  <input type="text" class="form-control me-3" v-model="form.weight">
                  <span>(gam)</span>
                  </td>
              </tr>
              <tr>
                <th>
                  Lên lịch:
                </th>
                <td class="px-3">
                  <button class="btn-send rounded border-0 bg-success shadow d-flex justify-content-center align-items-center" style="height: 35px; width: 50px"><i class="text-white fas fa-paper-plane"></i></button>
                </td>
              </tr>
            </table>
            </form>
          </div>
        </div>
      </div>
      <!-- <div class="add-time-feeder">
        <button class="btn btn-success"><span class="fw-bold">+</span></button>
        <span class="fw-bold">Thêm mới lịch trình</span>
      </div> -->
    </div>
    <div class="col-5 p-5">
      <div class="sticky-top w-75 feeder-container border rounded flex flex-column justify-content-center align-items-center shadow mt-3">
        <h2 class="mb-3 mt-3">Cho ăn trực tiếp</h2>
        <div class="d-flex flex-wrap w-75 mb-3">
          <p class="flex">Lượng thức ăn: (gam)</p>
          <form class="d-flex align-items-center w-100" @submit="onChangeClickWeight">        
            <input type="text" class="form-control me-3" v-model="onClickWeight.weight">
            <button type="submit" class="border-0 bg-light btn-change-onclick-weight fas fa-sync-alt"></button>     
          </form>
        </div>
        <button class="btn btn-success btn-feeder mb-3" @click="onClickFeed">Cho ăn</button>
      </div>
    </div>
    <div class="col-12 px-5">
      <b-table hover :items="items" :fields="fields" class="shadow rounded border" v-show="items.length != 0" >
        <template #cell(actions)="row">
          <b-button size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Ẩn' : 'Hiện' }} chỉnh sửa
          </b-button>
          <b-button size="sm" class="bg-danger" @click="deleteItems">
            <i class="fas fa-trash"></i>
          </b-button>
        </template>
        <template #row-details>
          <form class="bg-blue p-3" @submit="editFresetFeed">
            <div class="form-group mb-3">
              <label for="" class="form-lable">Khối lượng</label>
              <input type="text" class="form-control" v-model="edit.weight">
            </div>
            <div class="form-group mb-3">
              <label for="" class="form-lable me-3">Trạng thái</label>
              <b-form-select v-model="selected" :options="options" class="rounded"></b-form-select>
            </div>
            <div class="form-group mb-3">
              <label for="" class="form-lable me-3">Thời gian</label>
              <vue-timepicker></vue-timepicker>
            </div>
            <div class="form-group mb-3">
              <button class="btn btn-success">>> Edit >></button>
            </div>
          </form>
        </template>
        <b-modal :id="modal.id" :title="modal.title" ok-only @hide="resetInfoModal" >
          <pre>{{ modal.content }}</pre>
        </b-modal>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
import AppVue from '../../App.vue';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUzZDY4MTAyNTYxMjUzMGRhMDFlNDUiLCJpYXQiOjE2NDI2ODc3NjAsImV4cCI6MTY0MjcyMzc2MH0.AXKj6uUUrySjKkjrqhUVfQ6p1yyfgih7HLSlhsVPkzA";

const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

export default {
  name: "SettingFeed",
  components: {VueTimepicker},
  props: {

  },
  data(){
    return{
      form: {
        date: {
          HH: '00',
          mm: '00'
        },
        weight: ''
      },
      onClickWeight: {
        weight: ""
      },
      fields: [
        {
          key: 'weight',
          sortable: true,
          label: 'Khối lượng'
        }, 
        {
          key: 'status',
          label: 'Trạng thái'
        }, 
        {
          key: 'date',
          sortable: true,
          label: 'Thời gian'
        },
        {
          key: 'actions',
          label: 'Hành động' 
        }
      ],
      items: [],
      modal: {
        id: 'modal-detail',
        title: '',
        content: ''
      },
      selected: 'on',
      options: [
        {value: 'on', text: 'on'},
        {value: 'off', text: 'off'}
      ],
      edit:{
        status: '',
        weight: '',
        date: {
          HH: '00',
          mm: '00'
        }
      }
    }
  },
  created(){
      const url = 'http://127.0.0.1:8000/api/devices/1';
      const data = {};
      axios.get(url, {headers})
      .then((res) => {
        //perform success action
        this.items = res.data.data.presetFeed;
        this.onClickWeight.weight = res.data.data.onClickFeedWeight;
      })
      .catch((error) => {
        //error.response.status check status code
        //error network
        console.log(error);
      })
      .finally(() => {
        //perform action in always
      });
  },
  methods: {
    onChangeClickWeight(e){
      e.preventDefault(); 
      axios.put('http://127.0.0.1:8000/api/feeding/onClick/1', this.onClickWeight, {headers})
      .then((res) => {
        //perform success action
        alert(res.data.msg);
      })
      .catch((error) => {
        //error.response.status check status code
        //error network
        console.log(error);
      })
      .finally(() => {
        //perform action in always
      });
    },

    onClickFeed(){
      const url = 'http://127.0.0.1:8000/api/feeding/onClick/1';
      const data = {};
      axios.post(url, data, {headers})
      .then((res) => {
        //perform success action
        alert(res.data.msg);
      })
      .catch((error) => {
        //error.response.status check status code
        //error network
        console.log(error);
      })
      .finally(() => {
        //perform action in always
      });
    },
    onFresetFeeding(e){
      e.preventDefault();
      const url = 'http://127.0.0.1:8000/api/feeding/preset/1';
      const data = {
        status: 'on',
        weight: this.form.weight,
        date: `${this.form.date.HH}:${this.form.date.mm}`
      };
      console.log(data);
      axios.post(url, data, {headers})
      .then((res) => {
        //perform success action
        this.items = res.data.data.presetFeed;
      })
      .catch((error) => {
        //error.response.status check status code
        //error network
        console.log(error);
      })
      .finally(() => {
        //perform action in always
      });
    },
    info(item, index, button) {
      console.log(item);
      this.modal.title = `Row index: ${index}`
      this.modal.content = JSON.stringify(item, null, 2);
      
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    toggleDetails(){
      alert("hello");
    }
  }
};
</script>

<style>
.btn-change-onclick-weight:hover{
  color: rgb(106, 221, 52);
}

.btn-send{
  transition: transform .3s;
}

.btn-send:hover{
  transform: scale(1.1);
}

.btn-feeder{
  width: 100px;
  height: 40px;
}

.feeder-container{
  height: 180px;
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
