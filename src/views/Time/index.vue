<template>
  <div>this is time selected
    <el-time-select
      :picker-options="{
        start: '08:00',
        end: '15:00',
        step: '01:00'
      }"
      v-model="time1"
    />
    <br>
    <h3>任意时间点</h3>滑动=>
    <el-time-picker
      v-model="time2"
      :picker-options="{
        selectableRange: '03:00:20 - 20:59:30'
      }"
    />点击=>
    <el-time-picker
      v-model="time3"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      arrow-control
    />
    <br>
    <h3>固定时间范围</h3>
    <el-time-select
      v-model="sTime"
      :picker-options="{
        start: '08:00',
        end: '18:00',
        step:'02:00'
      }"
      placeholder="Start-Time"
    />
    <el-time-select
      v-model="eTime"
      :picker-options="{
        start: '08:30',
        step: '01:00',
        end: '18:30',
        minTime: sTime
      }"
      placeholder="End-Time"
    />
    <br>
    <h3>任意时间范围</h3>
    <el-time-picker
      v-model="time4"
      is-range
      range-separator="to"
      start-placeholder="start_time"
      end-placeholder="end_time"
      placeholder="time_range"
    />
    <button @click="testPanel">test vue-panel</button>
    <test-panel/>
    <test-toast/>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "TimeSelect",
  data() {
    return {
      time1: "",
      time2: new Date(),
      time3: new Date(),
      sTime: "",
      eTime: "",
      time4: [new Date(), new Date() + 7200]
    };
  },
  mounted() {
    const arr1 = [
      { name: "张三", age: 1 },
      { name: "李四", age: 2 },
      { name: "王五", age: 3 }
    ];
    const arr2 = [
      { name: "张三", age: 1 },
      { name: "张三", age: 3 },
      { name: "李四", age: 2 },
      { name: "李四", age: 3 },
      { name: "王五", age: 3 },
      { name: "王五", age: 4 }
    ];
    var arr4 = arr1.concat(arr2);
    console.log(arr4);
    var arr5 = [],
      obj1 = {};
    arr4.forEach(function(item, index) {
      if (!obj1[item.name]) {
        obj1[item.name] = true;
        arr5.push(item);
      }
    });
    console.log(arr5);

    let arr3 = [];
    arr1.filter(item1 => {
      arr3 = [
        ...arr3,
        ...arr2.filter(
          item2 => item1.name === item2.name && item1.age === item2.age
        )
      ];
    });
    console.log(arr3);
  },
  methods: {
    testPanel() {
      console.log(this.$msg);
    }
  }
};
</script>
<style scoped>
h3 {
  padding: 20px 0;
  border-top: 1px solid pink;
}
</style>
