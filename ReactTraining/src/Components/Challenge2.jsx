import { useEffect, useState } from "react";




function Challenge2(){
   
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate()+count);



    function handleMinusStep(){
        if (step > 1) setStep((step)=> step - 1)
    }

    function handlePlusStep(){
       setStep((step)=> step + 1)
    }

    function handleMinusCount(){
        setCount((count)=>{ return  count - (step * 1)});
        //handleDate(count - (step * 1));

    }

    function handlePlusCount(){
        setCount(count + (step * 1));
        //handleDate(count + (step * 1));        
    }

    return(

        <div id="challenge2Container">

            <div className="counters">
            <button onClick={handleMinusStep}>-</button>
            <span>Step: {step}</span>
            <button onClick={handlePlusStep}>+</button>
            </div>

            <div className="counters">
            <button onClick={handleMinusCount}>-</button>
            <span>Counter: {count}</span>
            <button onClick={handlePlusCount}>+</button>
            </div>

            <div>
                {count === 0
                ?
                "Today is "
                :count > 0
                ? `${count} days from today is `
                :
                `${Math.abs(count)} days ago was `                  
                }
                <span>{dateObj.toDateString()}</span>
            </div>


        </div>
    )

}

export default Challenge2;