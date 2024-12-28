<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const props = defineProps({
    content:String
});
const { t:$t } = useI18n();
</script>

<template>
  <div>
    <h1>{{ $t('output') }}</h1>
    <textarea disabled id="output" class="w-full h-50" style="height: 200px;" name="">{{props.content}}</textarea>
  </div>
</template>