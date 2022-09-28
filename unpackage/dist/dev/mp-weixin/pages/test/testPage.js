"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = {
  __name: "testPage",
  setup(__props) {
    const counter = store_index.useCounterStore();
    const testPinia = () => {
      counter.increment();
      console.log(counter.count);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(testPinia),
        b: common_vendor.p({
          type: "info"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u7F16\u7A0B/Uniapp/minefv-uniapp/pages/test/testPage.vue"]]);
wx.createPage(MiniProgramPage);
