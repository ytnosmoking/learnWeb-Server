<template>
  <div>
    others tables
    <h3>多选</h3>
    <br>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        fixed
        type="selection"
        width="55"/>
      <el-table-column

        label="日期"
        width="300">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="200"/>
      <el-table-column
        prop="address"
        label="地址"
        width="400"
        show-overflow-tooltip/>
      <el-table-column
        fixed="right"
        prop="zip"
        label="邮编"
        width="200"
        show-overflow-tooltip/>
    </el-table>
    <br>
    <br>
    <h3>排序</h3>
    <el-button @click="changeTableName">changeTableName</el-button>
    <br>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'date', order: 'descending'}"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"/>
      <el-table-column
        v-if="tableName"
        prop="name"
        label="姓名"
        sortable
        width="180"/>
      <el-table-column
        :formatter="formatter"
        sortable
        prop="address"
        label="地址"/>
      <el-table-column
        prop="zip"
        label="邮编"/>
    </el-table>
    <br>
    <br>
    <h3>筛选</h3>
    <br>
    <br>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
        prop="date"
        label="日期"
        sortable
        width="180"
        fixed
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"/>
      <el-table-column
        :formatter="formatter"
        width="400"
        prop="address"
        label="地址"/>
      <el-table-column
        :formatter="formatter"
        width="200"
        prop="zip"
        label="邮编"/>
      <el-table-column
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        prop="tag"
        label="标签"
        width="200"
        fixed="right"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{ scope.row.tag }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <br>
    <h3>自定义</h3>
    <br>
    <br>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"/> -->
          <svg-icon :icon-class="scope.row.icon"/>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <template v-if="scope.$index!==1">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
            </template>
            <template v-else>
              <p> this is index ===1 so dont give anything</p>
            </template>

            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
export default {
  name: 'TableOthers',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: '1111',
          tag: '家',
          icon: 'table'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: '1111',
          tag: '家',
          icon: 'bike'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: '1112',
          tag: '公司',
          icon: 'charts'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1515 弄',
          zip: '1111',
          tag: '公司',
          icon: 'film'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1514 弄',
          zip: '1111',
          tag: '家',
          icon: 'index'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1513 弄',
          zip: '22222',
          tag: '家',
          icon: 'picture'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1512 弄',
          zip: '1111',
          tag: '公司',
          icon: 'userset'
        }
      ],
      multipleSelection: [],
      tableName: true
    }
  },

  mounted() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    // 排序
    formatter(row, column) {
      return row.address
    },
    // 筛选
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    // 自定义
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    changeTableName() {
      this.tableName = !this.tableName
      console.log(this.tableName)
    }
  }
}
</script>
<style scoped>
</style>
