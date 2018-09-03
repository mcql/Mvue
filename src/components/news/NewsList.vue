<template>
    <div class="articlist">
        
        <el-table :data="tabledata" ref="singleTable">
            <el-table-column prop="article_id" label="编号" width="100px"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small" @click.native="editArtical(scope.$index)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="pageCode.limit" :current-page="pageCode.page" :total="allnum" @current-change="changePage"></el-pagination>

        <el-dialog title="文章详情" :visible="dialogFormVisible" @close="dialogFormVisible = false" :close-on-click-modal="false">
            <el-form class="editcont" :model="form" label-position="top">
                <div>
                    <span>标题:</span>
                    <el-input v-model="form.title" auto-complete="off"></el-input>
                </div>
                <div>
                    <span>内容:</span>
                    <vue-editor v-model="form.content"></vue-editor>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible=false">取 消</el-button>
                <el-button @click="subtn" type="primary">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      tabledata: [],
      pageCode: {
        limit: 12,
        page: 1
      },
      allnum: 1,
      dialogFormVisible: false,
      form: {},
      content: "<h1>Some initial content</h1>"
    };
  },
  created: function() {
    this.$api
      .getArticle(this.pageCode)
      .then(res => {
        this.tabledata = res;
      })
      .catch(err => {
        console.log(err);
      });
    this.$api
      .getArticleNum()
      .then(res => {
        this.allnum = res;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    changePage(val) {
      this.pageCode.page = val;
      this.$api
        .getArticle(this.pageCode)
        .then(res => {
          this.tabledata = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    editArtical(index) {
      this.dialogFormVisible = true;
      this.form = this.tabledata[index];
    },
    subtn() {
      alert("处理修改");
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style scoped>
.articlist {
  width: 85%;
  background-color: #fff;
  margin: 50px auto 0;
  text-align: left;
}
.editcont > div > span {
  display: inline-block;
  width: 80px;
  line-height: 50px;
}
.quillWrapper {
  height: 280px;
  margin-bottom: 30px;
}
</style>
