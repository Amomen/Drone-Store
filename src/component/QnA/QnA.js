import React from 'react';
import'./QnA.css'
const QnA = () => {
    return (
        <div className='ReactQna'>
            <div className="react-work">
            <h1>How React Works ?</h1>
            <p>React is a javascript library which creates virtual DOM and compares new virtual DOM with old one.
                if any update or changes done in new vDOM, then React only changes that "Component". Sometime React looks like Html DOM, but it's not </p>
            </div>
            <div className="state-work">
            <h1>How useState works ?</h1>
            <p>The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  </p>
            </div>
        </div>
    );
};

export default QnA;