<template>
  <div>
    <h3>base Table</h3>
    <!-- stripe 斑马纹 -->
    <!-- bordre 边框 -->
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"/>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
    <br>
    <h3> 带状态表格 </h3>
    <br>
    <el-table
      :data="tableData"
      :row-class-name="tableRowClassName"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"/>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
    <br>
    <h3>固定表头</h3>
    <br>
    <el-table
      :data="tableData"
      height="200"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"/>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
    <br>
    <h3>固定列</h3>
    <br>
    <el-table
      :data="tableData"
      border
      height="200"
      style="width: 100%">
      <el-table-column

        prop="date"
        label="日期"
        width="150"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"/>
      <el-table-column
        prop="province"
        label="省份"
        width="120"/>
      <el-table-column
        prop="city"
        label="市区"
        width="120"/>
      <el-table-column
        prop="address"
        label="地址"
        width="300"/>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120"/>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <br>
    <h3>多级表头</h3>
    <br>
    <el-table
      :data="tableData"
      height="300"
      style="width: 100%">
      <el-table-column

        prop="date"
        label="日期"
        width="150"/>
      <el-table-column label="配送信息">
        <el-table-column
          prop="name"
          label="姓名"
          width="120"/>
        <el-table-column label="地址">
          <el-table-column
            prop="province"
            label="省份"
            width="120"/>
          <el-table-column
            prop="city"
            label="市区"
            width="120"/>
          <el-table-column
            prop="address"
            label="地址"
            width="300"/>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120"/>
        </el-table-column>
      </el-table-column>
    </el-table>
    <br>
    <h3>单选</h3>
    <br>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      @current-change="handleCurrentChange">
      <el-table-column
        type="index"
        width="50"/>
      <el-table-column
        property="date"
        label="日期"
        width="120"/>
      <el-table-column
        property="name"
        label="姓名"
        width="120"/>
      <el-table-column
        property="address"
        label="地址"/>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "TableIndex",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  mounted() {
    console.log(1);
  },
  methods: {
    change() {
      console.log(2);
    },
    //单选
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleClick(row) {
      console.log(row);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  }
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
