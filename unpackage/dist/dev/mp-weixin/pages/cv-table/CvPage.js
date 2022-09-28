"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  _component_van_field();
}
const _sfc_main = {
  __name: "CvPage",
  setup(__props) {
    const username = common_vendor.ref("wht");
    common_vendor.ref("12313");
    watch(username.value, (val, oldVal) => {
      console.log(val);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          value: "\u8F93\u5165\u6846\u5DF2\u7981\u7528",
          label: "\u7528\u6237\u540D",
          leftIcon: "contact",
          disabled: true,
          border: "{{ false }}"
        }),
        b: common_vendor.p({
          value: "username",
          placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
          border: "{{ false }}"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u7F16\u7A0B/Uniapp/minefv-uniapp/pages/cv-table/CvPage.vue"]]);
wx.createPage(MiniProgramPage);
