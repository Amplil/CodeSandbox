<template>
  <div class="text-center my-3">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />

    <i class="bi bi-check2"></i><br />
    <div id="items">
      <div>{{ text1 }}</div>
      <div>{{ text2 }}</div>
    </div>
    <b-button id="copy-btn" @click="copy">Copy</b-button>
    <b-popover
      :disabled.sync="pop_disabled"
      :no-fade.sync="pop_nofade"
      :show.sync="pop_show"
      target="copy-btn"
      ref="popover"
      placement="right"
      triggers="hover"
    >
      <i class="bi bi-check2"></i> Copied!
    </b-popover>
  </div>
</template>

<script>
export default {
  name: "PopOver",
  data() {
    return {
      pop_disabled: true,
      pop_nofade: true,
      pop_show: false,
      text1: "abc",
      text2: "test",
    };
  },
  methods: {
    copy() {
      let copy_text = "";
      copy_text = this.text1.concat("\n").concat(this.text2).concat("\n");
      //this.$copyText(this.$el.querySelector("#items").textContent).then(
      this.$copyText(copy_text).then(
        (e) => {
          console.log("テキストコピー完了");
          console.log(e);

          this.$refs.popover.$emit("enable");
          this.pop_show = true;
          setTimeout(() => {
            this.pop_show = false;
            this.$refs.popover.$emit("disable");
          }, 1000);
        },
        (e) => {
          console.log("エラーになりました");
          console.error(e);
        }
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bi-check2 {
  color: green;
}
</style>
