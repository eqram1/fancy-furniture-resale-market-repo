import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2> Question 1:What are the different ways to manage a state in a react application?  ANSWER:The Fourth option is to define the state in the parent component.Often, the same state is used across multiple components.In those cases, it is useful to lift the state to a common parent.The lifting state is a two‑step process.First, we declare the state in a common parent component,and then we pass the state down to child components via props </h2>
            <h3>Questions 2:How does prototypical inheritance works? ANSWER:Prototypal inheritance is a language feature that helps in that. In JavaScript, objects have a special hidden property [ [Prototype]] (as named in the specification), that is either null or references another object.</h3>
            <h4>Question 3:What is a unit test?Why should we write unit tests? ANSWER:A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.ANSWER:Writing unit tests when you start developing new code or fixing existing code saves you time and money. </h4>
            <h2>Question 4:React vs Angular vs Vue? ANSWER:React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.</h2>

        </div>
    );
};

export default Blog;