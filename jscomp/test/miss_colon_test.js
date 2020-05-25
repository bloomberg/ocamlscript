'use strict';

var Block = require("../../lib/js/block.js");

function $plus$colon(_f, _g) {
  while(true) {
    var g = _g;
    var f = _f;
    if (!f.tag) {
      var n = f._0;
      if (!g.tag) {
        return {
                tag: /* Int */0,
                _0: n + g._0 | 0
              };
      }
      if (n === 0) {
        return g;
      }
      
    }
    switch (g.tag | 0) {
      case /* Int */0 :
          if (g._0 !== 0) {
            return {
                    tag: /* Add */2,
                    _0: f,
                    _1: g
                  };
          } else {
            return f;
          }
      case /* Add */2 :
          _g = g._1;
          _f = $plus$colon(f, g._0);
          continue ;
      case /* Var */1 :
      case /* Mul */3 :
          return {
                  tag: /* Add */2,
                  _0: f,
                  _1: g
                };
      
    }
  };
}

function $star$colon(_f, _g) {
  while(true) {
    var g = _g;
    var f = _f;
    var exit = 0;
    var exit$1 = 0;
    if (f.tag) {
      exit$1 = 3;
    } else {
      var n = f._0;
      if (!g.tag) {
        return {
                tag: /* Int */0,
                _0: Math.imul(n, g._0)
              };
      }
      if (n === 0) {
        return {
                tag: /* Int */0,
                _0: 0
              };
      }
      exit$1 = 3;
    }
    if (exit$1 === 3) {
      if (g.tag) {
        exit = 2;
      } else {
        if (g._0 === 0) {
          return {
                  tag: /* Int */0,
                  _0: 0
                };
        }
        exit = 2;
      }
    }
    if (exit === 2 && !f.tag && f._0 === 1) {
      return g;
    }
    switch (g.tag | 0) {
      case /* Int */0 :
          if (g._0 !== 1) {
            return {
                    tag: /* Mul */3,
                    _0: f,
                    _1: g
                  };
          } else {
            return f;
          }
      case /* Var */1 :
      case /* Add */2 :
          return {
                  tag: /* Mul */3,
                  _0: f,
                  _1: g
                };
      case /* Mul */3 :
          _g = g._1;
          _f = $star$colon(f, g._0);
          continue ;
      
    }
  };
}

function simplify(f) {
  switch (f.tag | 0) {
    case /* Int */0 :
    case /* Var */1 :
        return f;
    case /* Add */2 :
        return $plus$colon(simplify(f._0), simplify(f._1));
    case /* Mul */3 :
        return $star$colon(simplify(f._0), simplify(f._1));
    
  }
}

exports.$plus$colon = $plus$colon;
exports.$star$colon = $star$colon;
exports.simplify = simplify;
/* No side effect */
