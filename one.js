/*
 * Accessing global vars from global.js
 * //!'Using window.variableName'!
 * And displaying the string value of the 'string var' declared in 'global.js'
 * In a paragraph tag with id 'para' which is also accessed
 * from 'global.js'
 */
window.para.innerHTML = window.string;
