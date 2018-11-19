<template>
  <div>

    this is time selected
    <el-time-select
      :picker-options="{
        start: '08:00',
        end: '15:00',
        step: '01:00'
      }"
      v-model="time1"/>
    <br>
    <h3>任意时间点</h3>
    滑动=> <el-time-picker
      v-model="time2"
      :picker-options="{
        selectableRange: '03:00:20 - 20:59:30'
    }"/>
    点击=> <el-time-picker
      v-model="time3"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      arrow-control/>
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
      placeholder="End-Time"/>
    <br>
    <h3>任意时间范围</h3>
    <el-time-picker
      v-model="time4"
      is-range
      range-separator="to"
      start-placeholder="start_time"
      end-placeholder="end_time"
      placeholder="time_range"
  /></div>
</template>
<script>
export default {
  name: 'TimeSelect',
  data() {
    return {
      time1: '',
      time2: new Date(),
      time3: new Date(),
      sTime: '',
      eTime: '',
      time4: [new Date(), new Date() + 7200]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped>
h3 {
  padding: 20px 0;
  border-top: 1px solid pink;
}
</style>
