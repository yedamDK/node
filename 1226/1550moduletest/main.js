// import md, { area } from "./module.js";
// //default는 {} 넣지 않음.
// md("test");
// area(10, 20);

/* import * as md from "./module.js";
md.module("test");
md.area(10, 20); */

// import { module, area } from "./module.js";
// module("test");
// area(10, 20);

// import { module as mod, area } from "./module.js";
// import square from "./moduleone.js";
// mod("test");
// area(10, 20);

/* import { module, area } from "./module.js";
import squ from "./moduleone.js";
module("test");
area(10, 20);
squ(); */
//square를 줄여쓴 것 단 위에 from 앞에 글자랑 같아야됨

import { module, area } from "./module.js";
import squ, { circle } from "./moduleone.js";
module("test");
area(10, 20);
squ();
circle();
//다 가져 올 거면 다 치지 말고 {*}라고 해도 됨
