import { useState } from "react";

 
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 


function Challenge5(){

    const [activeNumber, setActiveNumber] = useState(1);
    const [isContainerOpen, setIsContainerOpen] = useState(true);

    function handleMsgChange(no){
        if(no < 1){
            setActiveNumber(1);
            return
        }
        if(no > 3){
            setActiveNumber(3);
            return;
        }
        setActiveNumber(no);
    }

    return (
        <>
        {isContainerOpen?
        <div className="steps">
        <Numbers active={activeNumber} />
        <Message active={activeNumber} />
        <Button  active={activeNumber} onMsgChange={handleMsgChange} />
        </div>
        :
        <></>}
        
        <div onClick={()=> setIsContainerOpen(!isContainerOpen)} className="close">X</div>
        </>

    )

}

function Numbers({active}){
    
    const num = Array.from({length:messages.length},(_,i)=>i+1);


    return(
        <div className="numbers">
            {num.map((no)=>(
                <div className={active == no?"active":""}>
                    {no}
                </div>
            ))}

        </div>
    )
}

function Message({active}){

    return(
        <div className="message">
            <div>
            <span>Step:{active}</span>
            <span style={{margin:"0 5px"}}>{messages[active - 1]}</span>  
            </div>                     
        </div>
    )

}

function Button({active, onMsgChange}){

    return(
        <div className="buttons">
            <button onClick={()=>onMsgChange(active - 1)}><span>Previous</span></button>
            <button onClick={()=>onMsgChange(active + 1)}><span>Next</span></button>
        </div>
    )
}

export default Challenge5;