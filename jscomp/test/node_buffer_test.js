'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");
var $$Buffer = require("buffer");

var suites_000 = /* tuple */[
  "alloc returns an object",
  (function (param) {
      var buf = Buffer.alloc(0, undefined, undefined);
      return /* Eq */Block.__(0, [
                typeof buf,
                "object"
              ]);
    })
];

var suites_001 = /* :: */[
  /* tuple */[
    "alloc returns buffer of specified length",
    (function (param) {
        var buf = Buffer.alloc(3, undefined, undefined);
        return /* Eq */Block.__(0, [
                  buf.length,
                  3
                ]);
      })
  ],
  /* :: */[
    /* tuple */[
      "alloc takes optional fill parameter to fill buffer (String)",
      (function (param) {
          var buf = Buffer.alloc(3, "a", undefined);
          return /* Eq */Block.__(0, [
                    buf.toString(),
                    "aaa"
                  ]);
        })
    ],
    /* :: */[
      /* tuple */[
        "alloc takes optional fill parameter to fill buffer (Integer)",
        (function (param) {
            var buf = Buffer.alloc(3, 98, undefined);
            return /* Eq */Block.__(0, [
                      buf.toString(),
                      "bbb"
                    ]);
          })
      ],
      /* :: */[
        /* tuple */[
          "alloc takes optional fill parameter to fill buffer (Buffer)",
          (function (param) {
              var fill_buffer = Buffer.alloc(3, "abc", undefined);
              var buf = Buffer.alloc(6, fill_buffer, undefined);
              return /* Eq */Block.__(0, [
                        buf.toString(),
                        "abcabc"
                      ]);
            })
        ],
        /* :: */[
          /* tuple */[
            "alloc takes optional fill parameter to fill buffer (Uint8Array)",
            (function (param) {
                var fill_arr = new Uint8Array(/* array */[
                      97,
                      98,
                      99
                    ]);
                var buf = Buffer.alloc(9, fill_arr, undefined);
                return /* Eq */Block.__(0, [
                          buf.toString(),
                          "abcabcabc"
                        ]);
              })
          ],
          /* :: */[
            /* tuple */[
              "alloc takes optional encoding parameter to spec fill encoding",
              (function (param) {
                  var buf = Buffer.alloc(3, "YWJj", "base64");
                  return /* Eq */Block.__(0, [
                            buf.toString(),
                            "abc"
                          ]);
                })
            ],
            /* :: */[
              /* tuple */[
                "allocUnsafe returns an object",
                (function (param) {
                    var buf = Buffer.allocUnsafe(4);
                    return /* Eq */Block.__(0, [
                              typeof buf,
                              "object"
                            ]);
                  })
              ],
              /* :: */[
                /* tuple */[
                  "allocUnsafe returns buffer of specified length",
                  (function (param) {
                      var buf = Buffer.allocUnsafe(4);
                      return /* Eq */Block.__(0, [
                                buf.length,
                                4
                              ]);
                    })
                ],
                /* :: */[
                  /* tuple */[
                    "allocUnsafeSlow returns an object",
                    (function (param) {
                        var buf = Buffer.allocUnsafeSlow(4);
                        return /* Eq */Block.__(0, [
                                  typeof buf,
                                  "object"
                                ]);
                      })
                  ],
                  /* :: */[
                    /* tuple */[
                      "allocUnsafeSlow returns buffer of specified length",
                      (function (param) {
                          var buf = Buffer.allocUnsafeSlow(4);
                          return /* Eq */Block.__(0, [
                                    buf.length,
                                    4
                                  ]);
                        })
                    ],
                    /* :: */[
                      /* tuple */[
                        "byteLength returns byte length of value - Buffer",
                        (function (param) {
                            var buf = Buffer.alloc(4, undefined, undefined);
                            return /* Eq */Block.__(0, [
                                      Buffer.byteLength(buf),
                                      4
                                    ]);
                          })
                      ],
                      /* :: */[
                        /* tuple */[
                          "byteLength returns byte length of value - Int32Array",
                          (function (param) {
                              var arr = new Int32Array(3);
                              return /* Eq */Block.__(0, [
                                        Buffer.byteLength(arr),
                                        12
                                      ]);
                            })
                        ],
                        /* :: */[
                          /* tuple */[
                            "byteLengthOfString returns byte length of string",
                            (function (param) {
                                return /* Eq */Block.__(0, [
                                          Buffer.byteLength("abc", undefined),
                                          3
                                        ]);
                              })
                          ],
                          /* :: */[
                            /* tuple */[
                              "byteLengthOfString returns byte length of string",
                              (function (param) {
                                  return /* Eq */Block.__(0, [
                                            Buffer.byteLength("YWJj", "base64"),
                                            3
                                          ]);
                                })
                            ],
                            /* :: */[
                              /* tuple */[
                                "compare returns -1 if first param sorts before second",
                                (function (param) {
                                    var buf1 = Buffer.from("a");
                                    var buf2 = Buffer.from("b");
                                    return /* Eq */Block.__(0, [
                                              Buffer.compare(buf1, buf2),
                                              -1
                                            ]);
                                  })
                              ],
                              /* :: */[
                                /* tuple */[
                                  "compare returns 0 if first param equals to second",
                                  (function (param) {
                                      var buf1 = Buffer.from("a");
                                      var buf2 = Buffer.from("a");
                                      return /* Eq */Block.__(0, [
                                                Buffer.compare(buf1, buf2),
                                                0
                                              ]);
                                    })
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "compare returns 1 if first param sorts after second",
                                    (function (param) {
                                        var buf1 = Buffer.from("b");
                                        var buf2 = Buffer.from("a");
                                        return /* Eq */Block.__(0, [
                                                  Buffer.compare(buf1, buf2),
                                                  1
                                                ]);
                                      })
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "compareRanges compares values from two buffers",
                                      (function (param) {
                                          var buf1 = Buffer.from("bbbabcbbb");
                                          var buf2 = Buffer.from("babcbbb");
                                          return /* Eq */Block.__(0, [
                                                    buf1.compare(buf2, 1, 3, 3, 5),
                                                    0
                                                  ]);
                                        })
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "concat returns contactenated buffer from array of buffers",
                                        (function (param) {
                                            var buf1 = Buffer.from("a");
                                            var buf2 = Buffer.from("b");
                                            var concatenated = Buffer.concat(/* array */[
                                                  buf1,
                                                  buf2
                                                ]);
                                            return /* Eq */Block.__(0, [
                                                      concatenated.toString(),
                                                      "ab"
                                                    ]);
                                          })
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "concatWithLength returns contactenated buffer from array of buffers",
                                          (function (param) {
                                              var buf1 = Buffer.from("a");
                                              var buf2 = Buffer.from("bc");
                                              var concatenated = Buffer.concat(/* array */[
                                                    buf1,
                                                    buf2
                                                  ], 3);
                                              return /* Eq */Block.__(0, [
                                                        concatenated.toString(),
                                                        "abc"
                                                      ]);
                                            })
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "fromArray",
                                            (function (param) {
                                                var buf = Buffer.from(/* array */[
                                                      97,
                                                      98
                                                    ]);
                                                return /* Eq */Block.__(0, [
                                                          buf.toString(),
                                                          "ab"
                                                        ]);
                                              })
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "fromArrayBuffer",
                                              (function (param) {
                                                  var buf = Buffer.from(new ArrayBuffer(4), undefined, undefined);
                                                  return /* Eq */Block.__(0, [
                                                            buf.length,
                                                            4
                                                          ]);
                                                })
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "fromArrayBuffer supports optional byteOffset param",
                                                (function (param) {
                                                    var buf = Buffer.from(new ArrayBuffer(4), 2, undefined);
                                                    return /* Eq */Block.__(0, [
                                                              buf.length,
                                                              2
                                                            ]);
                                                  })
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "fromArrayBuffer supports optional byteOffset and length param ",
                                                  (function (param) {
                                                      var buf = Buffer.from(new ArrayBuffer(4), 2, 1);
                                                      return /* Eq */Block.__(0, [
                                                                buf.length,
                                                                1
                                                              ]);
                                                    })
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "fromBuffer makes buffer from another Buffer",
                                                    (function (param) {
                                                        var source = Buffer.from("abc");
                                                        var target = Buffer.from(source);
                                                        return /* Eq */Block.__(0, [
                                                                  target.toString(),
                                                                  "abc"
                                                                ]);
                                                      })
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "fromString makes buffer from string value",
                                                      (function (param) {
                                                          var buf = Buffer.from("abc");
                                                          return /* Eq */Block.__(0, [
                                                                    buf.toString(),
                                                                    "abc"
                                                                  ]);
                                                        })
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "fromStringWithEncoding supports specifying string encoding",
                                                        (function (param) {
                                                            var buf = Buffer.from("YWJj", "base64");
                                                            return /* Eq */Block.__(0, [
                                                                      buf.toString(),
                                                                      "abc"
                                                                    ]);
                                                          })
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "isBuffer returns true for buffer values",
                                                          (function (param) {
                                                              var buf = Buffer.from("abc");
                                                              return /* Ok */Block.__(4, [Buffer.isBuffer(buf)]);
                                                            })
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "isBuffer returns false for non-buffer values",
                                                            (function (param) {
                                                                return /* Ok */Block.__(4, [!Buffer.isBuffer("abc")]);
                                                              })
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "isEncoding returns true for valid encoding strings",
                                                              (function (param) {
                                                                  return /* Ok */Block.__(4, [Buffer.isEncoding("binary")]);
                                                                })
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "isEncoding returns false for valid encoding string",
                                                                (function (param) {
                                                                    return /* Ok */Block.__(4, [!Buffer.isEncoding("some-arbitraty-string")]);
                                                                  })
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "poolSize returns internal Buffer pool size",
                                                                  (function (param) {
                                                                      return /* Eq */Block.__(0, [
                                                                                typeof Buffer.poolSize,
                                                                                "number"
                                                                              ]);
                                                                    })
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "unsafe_get allows direct buffer reading by position",
                                                                    (function (param) {
                                                                        var buf = Buffer.from("abc");
                                                                        return /* Eq */Block.__(0, [
                                                                                  buf[0],
                                                                                  97
                                                                                ]);
                                                                      })
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "unsafe_set allows direct buffer modification by position",
                                                                      (function (param) {
                                                                          var buf = Buffer.from("abc");
                                                                          buf[0] = 98;
                                                                          return /* Eq */Block.__(0, [
                                                                                    buf.toString(),
                                                                                    "bbc"
                                                                                  ]);
                                                                        })
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "buffer returns underlying ArrayBuffer",
                                                                        (function (param) {
                                                                            var buf = Buffer.from("abc");
                                                                            var buf2 = Buffer.from("bbc");
                                                                            var ab = buf.buffer;
                                                                            var ab2 = buf2.buffer;
                                                                            return /* Eq */Block.__(0, [
                                                                                      ab,
                                                                                      ab2
                                                                                    ]);
                                                                          })
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "byteOffset reurns buffer offset in underlying ArrayBuffer",
                                                                          (function (param) {
                                                                              var buf = Buffer.from("abc");
                                                                              var offset = buf.byteOffset;
                                                                              return /* Eq */Block.__(0, [
                                                                                        typeof offset,
                                                                                        "number"
                                                                                      ]);
                                                                            })
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "copy transfers one buffer region to another",
                                                                            (function (param) {
                                                                                var buf = Buffer.from("abc");
                                                                                var buf2 = Buffer.from("xxxxx");
                                                                                buf.copy(buf2, 1, 1, 3);
                                                                                return /* Eq */Block.__(0, [
                                                                                          buf2.toString(),
                                                                                          "xbcxx"
                                                                                        ]);
                                                                              })
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "equals returns true if two buffers share same bytes",
                                                                              (function (param) {
                                                                                  var buf = Buffer.from("abc");
                                                                                  var buf2 = Buffer.from("abc");
                                                                                  return /* Ok */Block.__(4, [buf.equals(buf2)]);
                                                                                })
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "equals returns true if two buffers not share same bytes",
                                                                                (function (param) {
                                                                                    var buf = Buffer.from("abc");
                                                                                    var buf2 = Buffer.from("abd");
                                                                                    return /* Ok */Block.__(4, [!buf.equals(buf2)]);
                                                                                  })
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "fill fills existing buffer with provided value",
                                                                                  (function (param) {
                                                                                      var buf = Buffer.from("aaaaa");
                                                                                      var buf$1 = buf.fill(98, 2, 4);
                                                                                      return /* Eq */Block.__(0, [
                                                                                                buf$1.toString(),
                                                                                                "aabba"
                                                                                              ]);
                                                                                    })
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "fillWithString fills existing buffer with provided string",
                                                                                    (function (param) {
                                                                                        var buf = Buffer.from("xxxxx");
                                                                                        var buf$1 = buf.fill("YWJj", 2, 4, "base64");
                                                                                        return /* Eq */Block.__(0, [
                                                                                                  buf$1.toString(),
                                                                                                  "xxabx"
                                                                                                ]);
                                                                                      })
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "includes tests for presence of value starting from 'byteOffset' (value included)",
                                                                                      (function (param) {
                                                                                          var buf = Buffer.from("aabcbb");
                                                                                          return /* Ok */Block.__(4, [buf.includes(99, 3)]);
                                                                                        })
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "includes tests for presence of value starting from 'byteOffset' (value included before offset)",
                                                                                        (function (param) {
                                                                                            var buf = Buffer.from("aabcbb");
                                                                                            return /* Ok */Block.__(4, [!buf.includes(99, 4)]);
                                                                                          })
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "includesString tests for presence of value starting from 'byteOffset' (value included)",
                                                                                          (function (param) {
                                                                                              var buf = Buffer.from("aabcbb");
                                                                                              return /* Ok */Block.__(4, [buf.includes("Yw==", 3, "base64")]);
                                                                                            })
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "includesString tests for presence of value starting from 'byteOffset' (value included before offset)",
                                                                                            (function (param) {
                                                                                                var buf = Buffer.from("aabcbb");
                                                                                                return /* Ok */Block.__(4, [!buf.includes("Yw==", 4, "base64")]);
                                                                                              })
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "indexOf tests for presence of value starting from 'byteOffset' (value included)",
                                                                                              (function (param) {
                                                                                                  var buf = Buffer.from("aabcbb");
                                                                                                  return /* Eq */Block.__(0, [
                                                                                                            buf.indexOf(99, 3),
                                                                                                            3
                                                                                                          ]);
                                                                                                })
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "indexOf tests for presence of value starting from 'byteOffset' (value included before offset)",
                                                                                                (function (param) {
                                                                                                    var buf = Buffer.from("aabcbb");
                                                                                                    return /* Eq */Block.__(0, [
                                                                                                              buf.indexOf(99, 4),
                                                                                                              -1
                                                                                                            ]);
                                                                                                  })
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "indexOfString tests for presence of value starting from 'byteOffset' (value included)",
                                                                                                  (function (param) {
                                                                                                      var buf = Buffer.from("aabcbb");
                                                                                                      return /* Eq */Block.__(0, [
                                                                                                                buf.indexOf("Yw==", 3, "base64"),
                                                                                                                3
                                                                                                              ]);
                                                                                                    })
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "indexOfString tests for presence of value starting from 'byteOffset' (value included before offset)",
                                                                                                    (function (param) {
                                                                                                        var buf = Buffer.from("aabcbb");
                                                                                                        return /* Eq */Block.__(0, [
                                                                                                                  buf.indexOf("Yw==", 4, "base64"),
                                                                                                                  -1
                                                                                                                ]);
                                                                                                      })
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "lastIndexOf tests for presence of value starting from 'byteOffset' (value included)",
                                                                                                      (function (param) {
                                                                                                          var buf = Buffer.from("aabcbb");
                                                                                                          return /* Eq */Block.__(0, [
                                                                                                                    buf.lastIndexOf(99, 3),
                                                                                                                    3
                                                                                                                  ]);
                                                                                                        })
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* tuple */[
                                                                                                        "lastIndexOf tests for presence of value starting from 'byteOffset' (value included before offset)",
                                                                                                        (function (param) {
                                                                                                            var buf = Buffer.from("aabcbb");
                                                                                                            return /* Eq */Block.__(0, [
                                                                                                                      buf.lastIndexOf(99, 2),
                                                                                                                      -1
                                                                                                                    ]);
                                                                                                          })
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* tuple */[
                                                                                                          "lastIndexOfString tests for presence of value starting from 'byteOffset' (value included)",
                                                                                                          (function (param) {
                                                                                                              var buf = Buffer.from("aabcbb");
                                                                                                              return /* Eq */Block.__(0, [
                                                                                                                        buf.lastIndexOf("Yw==", 3, "base64"),
                                                                                                                        3
                                                                                                                      ]);
                                                                                                            })
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* tuple */[
                                                                                                            "lastIndexOfString tests for presence of value starting from 'byteOffset' (value included before offset)",
                                                                                                            (function (param) {
                                                                                                                var buf = Buffer.from("aabcbb");
                                                                                                                return /* Eq */Block.__(0, [
                                                                                                                          buf.lastIndexOf("Yw==", 2, "base64"),
                                                                                                                          -1
                                                                                                                        ]);
                                                                                                              })
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* tuple */[
                                                                                                              "length returns buffer length in bytes",
                                                                                                              (function (param) {
                                                                                                                  return /* Eq */Block.__(0, [
                                                                                                                            Buffer.from("abc").length,
                                                                                                                            3
                                                                                                                          ]);
                                                                                                                })
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* tuple */[
                                                                                                                "subarray returns piece of buffer",
                                                                                                                (function (param) {
                                                                                                                    var buf = Buffer.from("abcd");
                                                                                                                    return /* Eq */Block.__(0, [
                                                                                                                              buf.subarray(1, 3).toString(),
                                                                                                                              "bc"
                                                                                                                            ]);
                                                                                                                  })
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* tuple */[
                                                                                                                  "slice returns piece of buffer",
                                                                                                                  (function (param) {
                                                                                                                      var buf = Buffer.from("abcd");
                                                                                                                      return /* Eq */Block.__(0, [
                                                                                                                                buf.slice(1, 3).toString(),
                                                                                                                                "bc"
                                                                                                                              ]);
                                                                                                                    })
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "swap16 swaps byte order as for int16",
                                                                                                                    (function (param) {
                                                                                                                        var buf = Buffer.from(/* array */[
                                                                                                                                1,
                                                                                                                                2,
                                                                                                                                3,
                                                                                                                                4
                                                                                                                              ]).swap16();
                                                                                                                        return /* Ok */Block.__(4, [buf[0] === 2 && buf[1] === 1 && buf[2] === 4 && buf[3] === 3]);
                                                                                                                      })
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "swap32 swaps byte order as for int32",
                                                                                                                      (function (param) {
                                                                                                                          var buf = Buffer.from(/* array */[
                                                                                                                                  1,
                                                                                                                                  2,
                                                                                                                                  3,
                                                                                                                                  4
                                                                                                                                ]).swap32();
                                                                                                                          return /* Ok */Block.__(4, [buf[0] === 4 && buf[1] === 3 && buf[2] === 2 && buf[3] === 1]);
                                                                                                                        })
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "swap64 swaps byte order as for int64",
                                                                                                                        (function (param) {
                                                                                                                            var buf = Buffer.from(/* array */[
                                                                                                                                    1,
                                                                                                                                    2,
                                                                                                                                    3,
                                                                                                                                    4,
                                                                                                                                    5,
                                                                                                                                    6,
                                                                                                                                    7,
                                                                                                                                    8
                                                                                                                                  ]).swap64();
                                                                                                                            return /* Ok */Block.__(4, [buf[0] === 8 && buf[1] === 7 && buf[2] === 6 && buf[3] === 5 && buf[4] === 4 && buf[5] === 3 && buf[6] === 2 && buf[7] === 1]);
                                                                                                                          })
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "toJSON",
                                                                                                                          (function (param) {
                                                                                                                              var json = Buffer.from(/* array */[
                                                                                                                                      1,
                                                                                                                                      2,
                                                                                                                                      3
                                                                                                                                    ]).toJSON();
                                                                                                                              return /* Eq */Block.__(0, [
                                                                                                                                        JSON.stringify(json),
                                                                                                                                        "{\"type\":\"Buffer\",\"data\":[1,2,3]}"
                                                                                                                                      ]);
                                                                                                                            })
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "toString converts buffer to string",
                                                                                                                            (function (param) {
                                                                                                                                var source = "abc";
                                                                                                                                var target = Buffer.from(source).toString();
                                                                                                                                return /* Eq */Block.__(0, [
                                                                                                                                          source,
                                                                                                                                          target
                                                                                                                                        ]);
                                                                                                                              })
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "toString with encoding uses encoding for string conversion",
                                                                                                                              (function (param) {
                                                                                                                                  var target = Buffer.from("abc").toString("base64", undefined, undefined);
                                                                                                                                  return /* Eq */Block.__(0, [
                                                                                                                                            target,
                                                                                                                                            "YWJj"
                                                                                                                                          ]);
                                                                                                                                })
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "write",
                                                                                                                                (function (param) {
                                                                                                                                    var buf = Buffer.from("xxxxxxxx");
                                                                                                                                    buf.write("YWJj", 2, "base64");
                                                                                                                                    return /* Eq */Block.__(0, [
                                                                                                                                              buf.toString(),
                                                                                                                                              "xxabcxxx"
                                                                                                                                            ]);
                                                                                                                                  })
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "writeLength",
                                                                                                                                  (function (param) {
                                                                                                                                      var buf = Buffer.from("xxxxxxxx");
                                                                                                                                      buf.write("YWJj", 2, 2, "base64");
                                                                                                                                      return /* Eq */Block.__(0, [
                                                                                                                                                buf.toString(),
                                                                                                                                                "xxabxxxx"
                                                                                                                                              ]);
                                                                                                                                    })
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "_INSPECT_MAX_BYTES",
                                                                                                                                    (function (param) {
                                                                                                                                        return /* Eq */Block.__(0, [
                                                                                                                                                  typeof $$Buffer.INSPECT_MAX_BYTES,
                                                                                                                                                  "number"
                                                                                                                                                ]);
                                                                                                                                      })
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "kMaxLength",
                                                                                                                                      (function (param) {
                                                                                                                                          return /* Eq */Block.__(0, [
                                                                                                                                                    typeof $$Buffer.kMaxLength,
                                                                                                                                                    "number"
                                                                                                                                                  ]);
                                                                                                                                        })
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "transcode",
                                                                                                                                        (function (param) {
                                                                                                                                            var buf = Buffer.from("€");
                                                                                                                                            var buf2 = $$Buffer.transcode(buf, "utf8", "ascii");
                                                                                                                                            return /* Eq */Block.__(0, [
                                                                                                                                                      buf2.toString(),
                                                                                                                                                      "?"
                                                                                                                                                    ]);
                                                                                                                                          })
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "_MAX_LENGTH",
                                                                                                                                          (function (param) {
                                                                                                                                              return /* Eq */Block.__(0, [
                                                                                                                                                        typeof $$Buffer.constants.MAX_LENGTH,
                                                                                                                                                        "number"
                                                                                                                                                      ]);
                                                                                                                                            })
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "_MAX_STRING_LENGTH",
                                                                                                                                            (function (param) {
                                                                                                                                                return /* Eq */Block.__(0, [
                                                                                                                                                          typeof $$Buffer.constants.MAX_STRING_LENGTH,
                                                                                                                                                          "number"
                                                                                                                                                        ]);
                                                                                                                                              })
                                                                                                                                          ],
                                                                                                                                          /* [] */0
                                                                                                                                        ]
                                                                                                                                      ]
                                                                                                                                    ]
                                                                                                                                  ]
                                                                                                                                ]
                                                                                                                              ]
                                                                                                                            ]
                                                                                                                          ]
                                                                                                                        ]
                                                                                                                      ]
                                                                                                                    ]
                                                                                                                  ]
                                                                                                                ]
                                                                                                              ]
                                                                                                            ]
                                                                                                          ]
                                                                                                        ]
                                                                                                      ]
                                                                                                    ]
                                                                                                  ]
                                                                                                ]
                                                                                              ]
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]
                                                                                    ]
                                                                                  ]
                                                                                ]
                                                                              ]
                                                                            ]
                                                                          ]
                                                                        ]
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("Node_buffer_test", suites);

exports.suites = suites;
/*  Not a pure module */
