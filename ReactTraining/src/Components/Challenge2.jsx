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

    // count Form

    function handleForm(e){
        e.preventDefault();

    }

    function handleInput(e){
        
        if(e.target.value == ""){
            setCount(0);
            return;
        }
        setCount(parseInt(e.target.value));
    }

    function handleInputStep(e){
        setStep(parseInt(e.target.value));
    }

    return(

        <div id="challenge2Container">

            <div className="counters">
            <form onSubmit={handleForm}>
                <input onChange={handleInputStep} type="range" min="1" max="10" value={step} />
                <span>{step}</span>
            </form>
            </div>

            <div className="counters">
            <button onClick={handleMinusCount}>-</button>
            <form onSubmit={handleForm}><input onChange={handleInput} type="number" placeholder={count}/></form>
            {/* <span>Counter: {count}</span> */}
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