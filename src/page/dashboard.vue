<script setup lang="ts">

import Swper from "@/components/Swper.vue";
import Table from "@/components/Table.vue";
</script>
<template>
<div>
  <t-content>
  <div>
    <Swper></Swper>
    <Table></Table>
  </div>
</t-content>
<t-footer
  >Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights
  Reserved</t-footer
>
</div>
</template>