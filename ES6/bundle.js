/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.sum = sum;\n\nfunction sum(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./functions.js\");\n\n/*class List{\r\n    constructor(){//metodo que vai ser o primeiro metodo executado quando instanciarmos uma nova classe\r\n        this.data=[];\r\n\r\n        add(data){\r\n            this.data.push(data);\r\n        }\r\n    }\r\n}\r\n\r\nclass TodoList extends List{//herdando propriedades de List\r\n    constructor(){\r\n        super(); //chamando o constructor da classe pai\r\n\r\n    }\r\n    \r\n}\r\n\r\nconst MinhaLista = new TodoList();//instanciando a classe\r\n\r\ndocument.getElementById('novotodo');onclick=function(){\r\n    MinhaLista.add('Novo todo');\r\n}*/\n// --------------------------------------------------------------------------------\n// const não pode ter seu valor reatribuido, mas ela é mutável\n// --------------------------------------------------------------------------------\n\n/*const arr = [1,3,4,5,8,9];\r\n\r\nconst newArr=arr.map(function(item,index){//map percorre o vetor e retornar uma nova informação\r\n    return item+index;\r\n});\r\n\r\n// console.log(newArr);\r\n\r\n\r\nconst sum=arr.reduce(function(total,next){ //consumir todo vetor e transformar numa unica informação\r\n    return total+=next;\r\n}); \r\n// console.log(sum);\r\n\r\nconst filter = arr.filter(function(item){//true to keep the value in or false to delete the value\r\n    return item%2===0;\r\n});\r\n\r\n// console.log(filter);\r\n\r\nconst find = arr.find(function(item){//verificar se existe uma info no array ou se conseguimos encontra-la\r\n    return item===42;//retorna undefined pois não encontrou\r\n});\r\n\r\nconsole.log(find);*/\n// --------------------------------------------------------------------------------\n\n/*\r\nconst arr= [1,3,4,5,6];\r\n\r\nconst newArr=arr.map(function(item){\r\n    return item*2;\r\n});\r\n\r\n// com arrowfunctions podemos reescrever assim:\r\nconst newArr=arr.map(item=>item*2);\r\n*/\n// --------------------------------------------------------------------------------\n\n/*\r\nconst usuario={\r\n    nome:'Emerson',\r\n    idade:21,\r\n    endereco:{\r\n        cidade:'Vila Velha',\r\n        estado: 'ES',\r\n    },\r\n};\r\n\r\nconst {nome,idade,endereco:{cidade}}=usuario;\r\n\r\nconsole.log(nome);\r\nconsole.log(idade);\r\nconsole.log(cidade);*/\n// --------------------------------------------------------------------------------\n//REST serve para pergarmos o resto das propriedades\n\n/*const usuario={\r\n    nome:'Emerson',\r\n    idade:21,\r\n    empresa:'none'\r\n};\r\n\r\nconst {nome,...resto}=usuario; //armazenando o nome em \"nome\" e as outras informações em \"resto\"\r\n\r\nconsole.log(nome);\r\nconsole.log(resto);*/\n// --------------------------------------------------------------------------------\n//SPREAD repassa as info de um obj ou array para outra ed   \n\n/*const arr1=[1,2,3];\r\nconst arr2=[4,5,6];\r\n\r\nconst arr3=[...arr1,...arr2];\r\nconsole.log(arr3);*/\n// --------------------------------------------------------------------------------\n//OBJECT SHORT SYNTAX é quando a propriedade tem o mesmo no que da variável, então posso colocar apenas uma vez\n\n/*const nome='Emerson';\r\nconst cidade='VV';\r\n\r\nconst usuario={\r\n    nome,\r\n    cidade,\r\n};\r\n\r\nconsole.log(usuario);*/\n// --------------------------------------------------------------------------------\nconsole.log((0, _functions.sum)(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });