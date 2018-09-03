<template>
    <div>
        <el-select v-model="value" placeholder="请选择省份" @change="getCityData">
            <el-option v-for="item in province" :key="item.region_id" :label="item.region_name" :value="item.region_id"></el-option>
        </el-select>
        <el-select v-model="value1" placeholder="请选择城市" @change="getAreaData">
            <el-option v-for="item in city" :key="item.region_id" :label="item.region_name" :value="item.region_id"></el-option>
        </el-select>
        <el-select v-model="value2" placeholder="请选择地区" @change="getAreaData">
            <el-option v-for="item in area" :key="item.region_id" :label="item.region_name" :value="item.region_id"></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
  data() {
    return {
      province: [],
      city: {},
      area: {},
      value: "",
      value1: "",
      value2: ""
    };
  },
  methods: {
    getProvinceData() {
      this.$api
        .getProvinceData()
        .then(res => {
          this.province = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCityData() {
      this.value1 = "";
      this.value2 = "";
      let params = { region_type: this.value };
      this.$api
        .getCityData(params)
        .then(res => {
          this.city = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAreaData() {
      this.area = "";
      let params = { region_type: this.value1 };
      this.$api
        .getCityData(params)
        .then(res => {
          this.area = res;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created: function() {
    this.getProvinceData();
  }
};
</script>

<style scoped>
</style>
