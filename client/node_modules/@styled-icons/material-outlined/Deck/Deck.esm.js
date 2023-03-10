import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var Deck = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22 9 12 2 2 9h9v13h2V9h9zM12 4.44 15.66 7H8.34L12 4.44z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"
  }));
});
Deck.displayName = 'Deck';
export var DeckDimensions = {
  height: 24,
  width: 24
};