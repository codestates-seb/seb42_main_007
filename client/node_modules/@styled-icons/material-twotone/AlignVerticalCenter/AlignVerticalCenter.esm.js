import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var AlignVerticalCenter = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z"
  }));
});
AlignVerticalCenter.displayName = 'AlignVerticalCenter';
export var AlignVerticalCenterDimensions = {
  height: 24,
  width: 24
};