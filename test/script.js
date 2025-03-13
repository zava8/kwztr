const kwztr = require('kwztr')
const assert = require('assert')
let t = new kwztr();
////// test 1
let unicode_str = 'हिन्दी ज्ञ संस्कृत दुर्लभ श्रृंगार ज्ञानवापी कौआ विकिपीडिया' ;
console.log("unicode_str is:\n" + unicode_str) + "\n"; 
let ing31str = t.transliterate(unicode_str,"u2i");
let ekspected_str = 'HinDi gy sNskriT Durlbh shrriNgAr gyAnwApi kauA wikipidiyA'
console.log("ing31str is:\n" + ing31str) + "\n"; 
////// test 2
let cases = { अ: 'a', आ: 'A', क: 'k', प: 'p', म: 'm' }
for (const k in cases) { assert.equal(t.transliterate(k,"u2i"), cases[k]) }
////// test 2
cases = { मां: 'mA', संस्कृत: 'snskriT', ऋषि: 'risi',
    पिता: 'piTA', कौआ: 'kauA', बल्ला: 'bllA', जंगल: 'zNgl', मुखपृष्ठ: 'mukhpristh',
    'हिन्दी विकिपीडिया': 'HinDi wikipidiyA'
  };
for (const k in cases) { assert.equal(t.transliterate(k,"u2i"), cases[k]) }
////// test 3
unicode_str = 'हिन्दू धर्म के सभी धार्मिक अनुष्ठानों में रक्षासूत्र बाँधते समय कर्मकाण्डी पण्डित या आचार्य संस्कृत में एक श्लोक का उच्चारण करते हैं' ;
console.log("unicode_str is:\n" + unicode_str) + "\n"; 
ing31str = t.transliterate(unicode_str,"u2i");
console.log("ing31str is:\n" + ing31str) + "\n"; 
////// test 3
unicode_str = 'जिसमें रक्षाबन्धन का सम्बन्ध राजा बलि से स्पष्ट रूप से दृष्टिगोचर होता है' ;
console.log("unicode_str is:\n" + unicode_str) + "\n"; 
ing31str = t.transliterate(unicode_str,"u2i");
console.log("ing31str is:\n" + ing31str) + "\n";
////// test 3
unicode_str = 'क्षत्रिय हिंदू समाज के चार वर्णों में से एक वर्ण है।' ;
console.log("unicode_str is:\n" + unicode_str) + "\n"; 
ing31str = t.transliterate(unicode_str,"u2i");
console.log("ing31str is:\n" + ing31str) + "\n";
////// test 3
unicode_str = 'क्षत्रिय हिंदू समाज के चार वर्णों में से एक वर्ण है।' ;
console.log("unicode_str is:\n" + unicode_str) + "\n"; 
ing31str = t.transliterate(unicode_str,"u2i");
console.log("ing31str is:\n" + ing31str) + "\n";
////// test 3
unicode_str = 'ऋषि सुनक , महर्षि वाल्मीकि , संस्कृत रामायण के प्रथम रचयिता हैं जो आदिकवि के रूप में प्रसिद्ध हैं ' ;
console.log("unicode_str is:\n" + unicode_str) + "\n"; 
ing31str = t.transliterate(unicode_str,"u2i");
console.log("ing31str is:\n" + ing31str) + "\n";