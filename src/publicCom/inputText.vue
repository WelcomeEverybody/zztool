<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import Output from "./output.vue";
import { replaceAll } from "@zzcpt/zztool";
const props = defineProps({
  contents: {
    type: String,
    default: "",
  },
  show: {
    type: Boolean,
    default: true,
  },
});

const { t: $t } = useI18n();
const start = () => {
  // 每次运行清空输出
  const outputDom = document.getElementById("output") as HTMLTextAreaElement;
  outputDom.value = "";
  const dom = document.getElementById("textarea") as HTMLTextAreaElement;
  const value = dom.value;

  const str = replaceAll(
    value,
    "console.log",
    `var outputDom = document.getElementById('output');
    outputDom.value = outputDom.value + '\\n' + '>>> ' + JSON.stringify`
  );
  console.log(str);
  eval(str);
};
</script>

<template>
  <div style="display: flex" class="h-full">
    <div class="h-full w-50">
      <textarea class="w-full h-full" name="" id="textarea">
          {{ props.contents }}
      </textarea>
    </div>
    <template v-if="props.show">
      <button @click="start">{{ $t("run") }}</button>
      <Output></Output>
    </template>
  </div>
</template>
