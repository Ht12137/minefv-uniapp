"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const gotoCvPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/cv-table/CvPage"
      });
    };
    const gotoTestPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/test/testPage"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(gotoCvPage),
        b: common_vendor.p({
          type: "info"
        }),
        c: common_vendor.o(gotoTestPage),
        d: common_vendor.p({
          type: "info"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/han/yq-frontend/mine-fv-vant/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
