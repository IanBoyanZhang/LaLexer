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
})(input);
