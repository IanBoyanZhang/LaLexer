// Lexer scanner --> tokens
// Reference: KaTeX Lexer
// CodeProject How to write a simple interpreter in JavaScript
//
// Tokens:
// Assume everything is under math mode for now
// TODO: regex test candidate

// parse for each line
var input = "latex symbol lexer";
var dev = true;

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
  //
  // lex/scan input stream
  // 
//  var mathModeBling=/(\$[^\$]*\$)/g;                // global identifier
  var mathModeBling=/(\$([^\$]*)\$)/g;                // /g to avoid infinite loop
  var str = 'dfafdafd$fds3xjae$ssdsadsadsa$$1232134$21312ds$d1232134142';

  var result;
  var tokens = [];
  while((result = mathModeBling.exec(str)) !== null) {
    if (result.index === mathModeBling.lastIndex) {
      mathModeBling.lastIndex++;
    }
    if (dev) { console.log(result[2]); }
    tokens.push(result[2]);
  }

  return tokens;
})(input);
