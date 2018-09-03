<template>
    <el-dialog title="提示" :visible="subCode.dialogVisible" width="25%" @close="subCode.dialogVisible = false">
        <span>{{subCode.msg}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="subCode.dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
  props: {
    subCode: {}
  }
};
</script>

