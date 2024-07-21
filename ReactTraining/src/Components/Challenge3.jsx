import { useState } from "react";

const questions = [
    {
        id: 1,
        question: "What is the syntax extension for JavaScript that allows writing HTML-like code within JavaScript?",
        answer: "JSX (JavaScript XML)"
    },
    {
        id: 2,
        question: "How do you conditionally render components in React?",
        answer: "You can use if statements, ternary operators (condition ? true : false), and logical && operators"
    },
    {
        id: 3,
        question: "How do you handle events in React?",
        answer: "Events in React are similar to handling events in HTML, but they are camelCased (e.g., onClick instead of onclick)."
    },
    {
        id: 4,
        question: "What is the purpose of setState() in React?",
        answer: "setState() is a method provided by React to update a component's state."
    },
    {
        id: 5,
        question: "What is State in React? ",
        answer: "State is managed within a component and can be updated using setState(). It is mutable and controlled internally by the component."
    },
    {
        id: 6,
        question: "What is a Prop in React? ",
        answer: "Props are inputs to a component that are passed down from its parent component. Props are immutable and help components communicate with each other."
    }
]


function Challenge3(){

    const [selectedId, setSelectedId] = useState(null);

    function handleQuestion(id){
        
        if (selectedId === id) {
            setSelectedId(null);
            return;
        }
        setSelectedId(id);

    }

    return (
        <>
        <h1 style={{color:"red", textAlign:"center", margin:"20px 0"}}>REACT JS QUIZ</h1>

        <div id="challenge3Container">
            {questions.map((el) => (
                <div className={`questionWrapper ${selectedId === el.id ? "answer": ""} `} onClick={()=>handleQuestion(el.id)}>
                    <p>{selectedId === el.id ? el.answer: el.question}</p>
                </div>
            ))}

        </div>
        
        </>
    )

}

export default Challenge3;