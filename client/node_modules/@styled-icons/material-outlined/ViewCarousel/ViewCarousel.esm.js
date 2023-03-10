import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var ViewCarousel = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M2 7h4v10H2V7zm5 12h10V5H7v14zM9 7h6v10H9V7zm9 0h4v10h-4V7z"
  }));
});
ViewCarousel.displayName = 'ViewCarousel';
export var ViewCarouselDimensions = {
  height: 24,
  width: 24
};