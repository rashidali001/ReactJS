import { useState } from "react"


function Challenge6(){
    
    const [bill, setBill] = useState(0);
    const [selfTip, setSelfTip] = useState(0);
    const [partnerTip,setPartnerTip] = useState(0);


    function handleBill(val){
        setBill(val);
    }

    function reset(){

        if (bill == 0 && selfTip == 0 && partnerTip == 0){
            alert("There is no bill to reset");
            return;
        }

        setBill(0);
        setSelfTip(0);
        setPartnerTip(0);

        document.getElementById("bill").value = "0";
        let services = document.getElementsByClassName("services");
        for (let index = 0; index < services.length; index++) {
            services[index].value = "0";
            
        }
        
    }

    return (
        <>
        <h1 style={{textAlign:"center",margin:"30px 0"}}>Tip Calculator</h1>
        <div id="challenge6">

           <Bill onHandleBill={handleBill}/>
           <Service onAddTip={setSelfTip}> <p>How did you like the service?</p></Service>
           <Service onAddTip={setPartnerTip}> <p>How did your friend like the service</p></Service>
           <Pay bill={bill} selfTip={selfTip} partnerTip={partnerTip} />


           <button id="challenge6btn" onClick={reset}>Reset</button>

        </div>

        
        </>
        
    )

}

function Bill({onHandleBill}){

    function handleBill(e){

        onHandleBill(Number(e.target.value));

    }

    return(
        <div className="challenge6form">
            <p>How much was the bill?</p>
            <input id="bill" type="text" onChange={handleBill}/>
        </div>
    )

}

function Service({onAddTip, children}){

    function handleService(e){
        onAddTip(Number(e.target.value));
    }

    return(
        <div className="challenge6form">
            {children}
            <select className="services" onChange={handleService}> 
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing (20%)</option>
            </select>
        </div>
    )

}

function Pay({bill, selfTip, partnerTip}){

    let TotalBill = bill;
    if (selfTip == 0 && partnerTip == 0){

        return (
            <div>
                <p>You pay ${TotalBill} (${bill})</p>
            </div>
        )

    }

    let averageTip = selfTip + partnerTip;
    let tipTotal = Math.round((averageTip * bill) / 100);


    return (
        <div>
            <p>You pay ${TotalBill} (${bill} + ${tipTotal} tip)</p>
        </div>
    )


}

export default Challenge6