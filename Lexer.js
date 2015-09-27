// Lexer scanner --> tokens
// Reference: KaTeX Lexer
// CodeProject How to write a simple interpreter in JavaScript
//
// Tokens:
// operators, numeral digits, whitespace, identifiers 
// (which will be defined as any string of characters that does not contain operators, digits or whitespace)

// regex test candidate

(function(input) {
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

  // This regex matches any other TeX function, which is a backslash followed by a word or a single symbol
  var anyFunc = /\\(?:[a-zA-Z]+|.)/; 
  
  var token = [];       // token stack?
  var currChar = 0;
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
    currChar = input[charIdx+=1];
  };
  
  var inputLen = input.length;
  while(i < inputLen) {
    currChar = input[i];

    // logic check --> 

  }
  return tokens;
})(input);

