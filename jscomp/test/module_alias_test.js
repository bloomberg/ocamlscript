'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Block = require("../../lib/js/block.js");
var Curry = require("../../lib/js/curry.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* :: */[
    /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* Eq */Block.__(0, [
                    x,
                    y
                  ]);
        })
    ],
    suites[0]
  ];
  return /* () */0;
}

function f(x) {
  var L = /* List */{
    length: List.length,
    hd: List.hd,
    tl: List.tl,
    nth: List.nth,
    rev: List.rev,
    append: List.append,
    rev_append: List.rev_append,
    concat: List.concat,
    flatten: List.flatten,
    iter: List.iter,
    iteri: List.iteri,
    map: List.map,
    mapi: List.mapi,
    rev_map: List.rev_map,
    fold_left: List.fold_left,
    fold_right: List.fold_right,
    iter2: List.iter2,
    map2: List.map2,
    rev_map2: List.rev_map2,
    fold_left2: List.fold_left2,
    fold_right2: List.fold_right2,
    for_all: List.for_all,
    exists: List.exists,
    for_all2: List.for_all2,
    exists2: List.exists2,
    mem: List.mem,
    memq: List.memq,
    find: List.find,
    filter: List.filter,
    find_all: List.find_all,
    partition: List.partition,
    assoc: List.assoc,
    assq: List.assq,
    mem_assoc: List.mem_assoc,
    mem_assq: List.mem_assq,
    remove_assoc: List.remove_assoc,
    remove_assq: List.remove_assq,
    split: List.split,
    combine: List.combine,
    sort: List.sort,
    stable_sort: List.stable_sort,
    fast_sort: List.fast_sort,
    sort_uniq: List.sort_uniq,
    merge: List.merge
  };
  console.log(x);
  console.log(List.length(x));
  return L;
}

var h = f(/* [] */0);

var a = Curry._1(h.length, /* :: */[
      1,
      /* :: */[
        2,
        /* :: */[
          3,
          /* [] */0
        ]
      ]
    ]);

eq("File \"module_alias_test.ml\", line 30, characters 6-13", a, 3);

Mt.from_pair_suites("Module_alias_test", suites[0]);

var N = 0;

var V = 0;

var J = 0;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.N = N;
exports.V = V;
exports.J = J;
exports.f = f;
exports.a = a;
/* h Not a pure module */
