import React from 'react';
import MathJax from 'react-mathjax';
export default function ChildComponent(props){

  return (
    <div className="radio-buttons">


    {props.q.answerOptions.map((answerOption) => (
        // <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        <li className="none">

            <input type="radio" name="platform" className="check"  value={answerOption}
                onClick={() => {props.ans(answerOption.isCorrect)}} />
            <MathJax.Node inline formula={answerOption.answerText} />

        </li>
    ))}
</div>
  );
};