<template>
  <div class="my360-photo">
    <a-scene>
      <a-sky :src="myphoto"></a-sky>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: "my360-photo",
  props: {
    myphoto: String,
  },
};
</script>
