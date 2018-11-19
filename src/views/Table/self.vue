<template>
  <div>
    <h3>自定义表头</h3>
    <br>
    <br>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="Date"
        prop="date"/>
      <el-table-column
        label="Name"
        prop="name"/>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="slot">
          <el-input
            v-model="search"
            size="mini"
            placeholder="Type to search"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <br>
    <h3>表尾合计行</h3>
    <br>
    <br>
    <el-table
      :data="tableData6"
      border
      show-summary
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        fixed
        width="200"/>
      <el-table-column
        prop="name"
        width="300"
        label="姓名"/>
      <el-table-column
        width="300"
        prop="amount1"
        sortable
        label="数值 1"/>
      <el-table-column
        width="300"
        prop="amount2"
        sortable
        label="数值 2"/>
      <el-table-column
        width="300"
        prop="amount3"
        sortable
        label="数值 3"/>
    </el-table>

    <el-table
      :data="tableData6"
      :summary-method="getSummaries"
      border

      show-summary
      style="width: 100%; margin-top: 20px">
      <!-- height="200" -->
      <el-table-column
        prop="id"
        label="ID"
        width="180"/>
      <el-table-column
        prop="name"
        label="姓名"/>
      <el-table-column
        prop="amount1"
        label="数值 1（元）"/>
      <el-table-column
        prop="amount2"
        label="数值 2（元）"/>
      <el-table-column
        prop="amount3"
        label="数值 3（元）"/>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableSelf',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '一',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '二',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '三',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '四',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      search: '',
      tableData6: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handleEdit() {},
    handleDelete() {},
    getSummaries(param) {
      console.log(param)
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          // eslint-disable-next-line
          sums[index] = "总价";
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            console.log('prev===' + prev)
            console.log('curr===' + curr)
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          // eslint-disable-next-line
          sums[index] += " 元";
        } else {
          // eslint-disable-next-line
          sums[index] = "N/A";
        }
      })

      return sums
    }
  }
}
</script>
<style scoped>
</style>
