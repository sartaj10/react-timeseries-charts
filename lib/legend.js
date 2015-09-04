/**
 *  Copyright (c) 2015, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

_Object$defineProperty(exports, "__esModule", {
    value: true
});

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _merge = require("merge");

var _merge2 = _interopRequireDefault(_merge);

exports["default"] = _reactAddons2["default"].createClass({

    displayName: "Legend",

    getDefaultProps: function getDefaultProps() {
        return {
            style: {},
            labelStyle: {},
            type: "swatch" };
    },

    render: function render() {
        var _this = this;

        var legendStyle = {
            listStyle: "none",
            paddingLeft: 0
        };

        var legendListStyle = {
            float: "left",
            marginRight: 10
        };

        var swatchStyle = {
            float: "left",
            width: 15,
            height: 15,
            margin: 2,
            borderRadius: 2,
            backgroundColor: "#CCC"
        };

        var lineStyle = {
            float: "left",
            width: 15,
            height: 3,
            margin: 2,
            marginTop: 8,
            backgroundColor: "#CCC"
        };

        var dotStyle = {
            float: "left",
            width: 8,
            height: 8,
            margin: 2,
            marginTop: 6,
            borderRadius: 4,
            backgroundColor: "#CCC"
        };

        var items = [];
        _underscore2["default"].each(this.props.categories, function (category) {
            var style = undefined;
            var categoryStyle = category.style || {};
            var categoryLabelStyle = category.labelStyle || {};
            if (_this.props.type === "swatch") {
                style = (0, _merge2["default"])(true, swatchStyle, categoryStyle);
            } else if (_this.props.type === "line") {
                style = (0, _merge2["default"])(true, lineStyle, categoryStyle);
            } else if (_this.props.type === "dot") {
                style = (0, _merge2["default"])(true, dotStyle, categoryStyle);
            }

            var labelStyle = (0, _merge2["default"])(true, labelStyle, categoryLabelStyle);

            items.push(_reactAddons2["default"].createElement(
                "li",
                { key: "legend-item-" + category.key, style: legendListStyle },
                _reactAddons2["default"].createElement("span", { style: style }),
                _reactAddons2["default"].createElement(
                    "span",
                    { style: labelStyle },
                    " ",
                    category.label,
                    " "
                )
            ));
        });

        return _reactAddons2["default"].createElement(
            "ul",
            { style: legendStyle },
            items
        );
    }
});
module.exports = exports["default"];
// or "line" or "dot"