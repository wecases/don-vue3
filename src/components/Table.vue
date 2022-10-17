<script lang="ts" setup>
import { ref } from "vue";
import { useStore, data } from "../store/userStore";
const userStore = useStore();

userStore.getData();

const fixedTopAndBottomRows = ref(false);
const tableLayout = ref("fixed");

const rehandleClickOp = ({ text, row }: { text: any; row: data }) => {
  userStore.del(row.id);
};
</script>
<template>
  <!-- 父元素宽度不能超过 100% -->
  <div class="tdesign-demo-block-column" style="width: 100%">
    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-checkbox v-model="fixedTopAndBottomRows">是否冻结首尾两行</t-checkbox>
    </div>

    <!-- 如果希望表格列宽自适应，设置 `table-layout: auto` 即可。需同时设置 table-content-width -->
    <!-- fixedRows: [2, 2] 表示冻结表格的头两行和尾两行 -->
    <!-- footData 可以是多行，均支持固定在底部 -->
    <t-table
      row-key="index"
      :data="userStore.userData"
      :foot-data="[{}]"
      :columns="userStore.columns"
      :table-layout="tableLayout"
      :table-content-width="tableLayout === 'fixed' ? undefined : '1600px'"
      :max-height="fixedTopAndBottomRows ? 500 : 300"
      :fixed-rows="fixedTopAndBottomRows ? [2, 2] : undefined"
      bordered
      resizable
    >
      <template #operation="slotProps">
        <button class="link" @click="rehandleClickOp(slotProps)">删除</button>
      </template>
    </t-table>
  </div>
</template>
