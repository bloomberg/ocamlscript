'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var $$Array = require("../../lib/js/array.js");
var Block = require("../../lib/js/block.js");
var Curry = require("../../lib/js/curry.js");
var Hashtbl = require("../../lib/js/hashtbl.js");
var Caml_primitive = require("../../lib/js/caml_primitive.js");

function f(H) {
  var tbl = Curry._1(H.create, 17);
  Curry._3(H.add, tbl, 1, /* "1" */49);
  Curry._3(H.add, tbl, 2, /* "2" */50);
  return List.sort((function (param, param$1) {
                return Caml_primitive.caml_int_compare(param[0], param$1[0]);
              }), Curry._3(H.fold, (function (k, v, acc) {
                    return /* :: */{
                            _0: /* tuple */[
                              k,
                              v
                            ],
                            _1: acc
                          };
                  }), tbl, /* [] */0));
}

function g(H, count) {
  var tbl = Curry._1(H.create, 17);
  for(var i = 0; i <= count; ++i){
    Curry._3(H.replace, tbl, (i << 1), String(i));
  }
  for(var i$1 = 0; i$1 <= count; ++i$1){
    Curry._3(H.replace, tbl, (i$1 << 1), String(i$1));
  }
  var v = Curry._3(H.fold, (function (k, v, acc) {
          return /* :: */{
                  _0: /* tuple */[
                    k,
                    v
                  ],
                  _1: acc
                };
        }), tbl, /* [] */0);
  return $$Array.of_list(List.sort((function (param, param$1) {
                    return Caml_primitive.caml_int_compare(param[0], param$1[0]);
                  }), v));
}

var hash = Hashtbl.hash;

function equal(x, y) {
  return x === y;
}

var Int_hash = Hashtbl.Make({
      equal: equal,
      hash: hash
    });

var suites_000 = /* tuple */[
  "simple",
  (function (param) {
      return {
              tag: /* Eq */0,
              _0: /* :: */{
                _0: /* tuple */[
                  1,
                  /* "1" */49
                ],
                _1: /* :: */{
                  _0: /* tuple */[
                    2,
                    /* "2" */50
                  ],
                  _1: /* [] */0
                }
              },
              _1: f(Int_hash)
            };
    })
];

var suites_001 = /* :: */{
  _0: /* tuple */[
    "more_iterations",
    (function (param) {
        return {
                tag: /* Eq */0,
                _0: $$Array.init(1001, (function (i) {
                        return /* tuple */[
                                (i << 1),
                                String(i)
                              ];
                      })),
                _1: g(Int_hash, 1000)
              };
      })
  ],
  _1: /* [] */0
};

var suites = /* :: */{
  _0: suites_000,
  _1: suites_001
};

Mt.from_pair_suites("Int_hashtbl_test", suites);

exports.f = f;
exports.g = g;
exports.Int_hash = Int_hash;
exports.suites = suites;
/* Int_hash Not a pure module */
