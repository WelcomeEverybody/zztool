<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const props = defineProps({
    content:String
});
const { t:$t } = useI18n();
</script>

<template>
  <div class="w-50 h-full">
    <h1>{{ $t('output') }}</h1>
    <textarea style="height: calc(100% - 37px);" disabled id="output" class="w-full" name="">{{props.content}}</textarea>
  </div>
</template>