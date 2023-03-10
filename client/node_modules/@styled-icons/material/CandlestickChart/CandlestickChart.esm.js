import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var CandlestickChart = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z"
  }));
});
CandlestickChart.displayName = 'CandlestickChart';
export var CandlestickChartDimensions = {
  height: 24,
  width: 24
};