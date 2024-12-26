'use strict';

/**
 * L'environnement l'exical
 * l'endroit ou vus avez ecrit votre code a un impacte sur la facon dont le code vas etre executer
 *
 * Contexte d'execution
 * lorsque on execute du javascript le moteur v8 vas creer des contexte d'execution
 * il interprete le code et creer des contexte d'execution
 *
 * context global d'execution qui composer de 4 elements
 * l'objet global -> ca depend, dans le cas d'un navigateur c'est l'objet window, dans le cas de nodejs par exemple l'objet global est un objet qui s'appelle global
 * keyword this dans le contexte global d'execution il fait reference a window
 * Environement
 * Code
 */

//Tout ce qui n'est pas dans une fonction fais parti du contexte globale

//Prenons ce bout de code
// function a() {
//   console.log('je sus la fonction a');
// }
// function b() {
//   a();
// }
// b();

/**
 * 1 - creer le contexte globale d'execution
 * 2 - cree l'objet global window
 * 3 - cree le mot cle this
 * 4 - creer un contexte d'execution b()
 * 5 - cree un contexte d'execution a()
 * l'ensemble de ces contexte c'est la stack
 */

// function a() {
//   let test;
// }
// function b() {
//   a();
//   let foo;
// }
// b();
// const bar = 0;

/**
 * 1 - hoisting
 * prepare la memoire pour les different elements qui vont composer ce contexte d'execution
 * function a, funcion b, const bar;
 * 2 - execution
 * 2.1 - context d'execution b()
 * 2.1.1 - hoisting
 * let foo
 * 2.1.2 - execution
 * 2.1.2.1 - contexte d'execution a()
 * 2.1.2.1.1 - hoisting
 * 2.1.2.1.2 - execution
 */
let foo = 2;
function a() {
  console.log(foo);
}

function b() {
  let foo = 1;
  a();
}

// b(); // 2

// (function () {
//   console.log('foo');
// })();

console.log(this);

func2();
function func2() {
  console.log(this);
}

const func = () => {
  console.log(this);
};
func();

const obj = {
  a: 1,
  func() {
    console.log(this);
  },
};
obj.func();

a = 2;

/**
 * Si c'est une fonction normale : this dépend de comment la fonction est appelée.
Si c'est une fonction fléchée : this est hérité du contexte où la fonction a été définie.
 */

function f1() {
  f2();
  console.log("Apres l'execution de f2");
}
function f2() {
  f3();
  console.log("Apres l'execution de f3");
}
function f3() {
  console.log('f3');
}
f1();
