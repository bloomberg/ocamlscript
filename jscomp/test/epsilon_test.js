'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");
var Pervasives = require("../../lib/js/pervasives.js");

var v = (Number.EPSILON?Number.EPSILON:2.220446049250313e-16);

var suites_000 = /* tuple */[
  "epsilon",
  (function (param) {
      return {
              tag: /* Eq */0,
              _0: Pervasives.epsilon_float,
              _1: v
            };
    })
];

var suites_001 = /* :: */{
  _0: /* tuple */[
    "raw_epsilon",
    (function (param) {
        return {
                tag: /* Eq */0,
                _0: 2.220446049250313e-16,
                _1: v
              };
      })
  ],
  _1: /* [] */0
};

var suites = /* :: */{
  _0: suites_000,
  _1: suites_001
};

Mt.from_pair_suites("Epsilon_test", suites);

exports.v = v;
exports.suites = suites;
/* v Not a pure module */
