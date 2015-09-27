// Lexer scanner --> tokens
// Reference: KaTeX Lexer
// CodeProject How to write a simple interpreter in JavaScript
//
// Tokens:
// operators, numeral digits, whitespace, identifiers 
// (which will be defined as any string of characters that does not contain operators, digits or whitespace)

// Assume everything is under math mode for now
// regex test candidate
//
// ignore whitespace under math mode
// keep whitespace under text mode
var input = "latex symbol lexer";

(function(input) {
  'use strict';

  // ---------------- Regex definition -------------------------- //
  // file flag
  var EOF = "EOF";

  var mathNormals = [
    /[/|@.""`0-9a-zA-Z]/, // ords
    /[*+-]/, // bins
    /[=<>:]/, // rels
    /[,;]/, // punctuation
    /['\^_{}]/, // misc
    /[(\[]/, // opens
    /[)\]?!]/, // closes
    /~/, // spacing
    /&/, // horizontal alignment
    /\\\\/ // line break
  ];

  // These are "normal" tokens like above, but should instead be parsed in text mode.
  var textNormals = [
    /[a-zA-Z0-9`!@*()-=+\[\]'";:?\/.,]/, // ords
    /[{}]/, // grouping
    /~/, // spacing
    /&/, // horizontal alignment
    /\\\\/ // line break
  ];

  var whitespaceRegex = /\s*/;
  var whitespaceContactRegex = / +|\\  +/;

  var rmWhitespaceRegex = /[^\s]+/g;          // /[^s]+/g global or not?
  // var rmWhitespaceRegex = /[^s\.@#]]+/   // and other funky symbols

  // This regex matches any other TeX function, which is a backslash followed by a word or a single symbol
  var anyFunc = /\\(?:[a-zA-Z]+|.)/; 
  
  // ---------------- Preprocessor -------------------------- //
  var mathModeBling= /(\$.*\$)/;
  var str = 'sadadsaasds$\asdfdaswhen\\\\\dsfadfa,.x,coiowajifeajjiaj$dfsdfdsdsf$dsfsfdsf';
  var m;

  if ((m = mathModeBling.exec(str))!== null) {
    if (m.index === mathModeBling.lastIndex) {
      mathModeBling.lastIndex++;
    }
  }

  // console.log(mathModeBling.lastIndex);
//  console.log(m.index);
  // stripe off bling
  str = m[0];                   // What about m[1]?
  console.log("m->", m[0].slice(1, m[0].length - 2));

  /*
  var tokenBySpace = input.match(rmWhitespaceRegex);

  var tokens = [];       // token stack?
  var charIdx = 0;
  var currChar = "";
  // text data position
  var addToken = function(type, value) {
    tokens.push({
      type: type,
      value: value
    });
  };

  // token while
  // progress lock with different

  var advance = function() {
    currChar = tokenBySpace[charIdx+=1];
  };
  
  var innerLexer = function(c) {
    // stair logic for type checking 
    var mathNorm = mathNormals[0];
    console.log(mathNorm.test(c));
  };

  var tokenBySpaceLen = tokenBySpace.length;
  console.log(tokenBySpace);

  while(charIdx < tokenBySpaceLen) {
    currChar = tokenBySpace[charIdx];
    // logic check --> 
    innerLexer(currChar);
    advance();
  }
  
  return tokens;
  */
})(input);
