import { useState } from "react"


const FAQ = [
    {
        id:"01",
        question:"What time is check-in and check-out?",
        answer:"Our standard check-in time is at 3:00 PM. If you arrive earlier, we will do our best to accommodate you, depending on room availability.Check-out time is at 11:00 AM. If you need a late check-out, please contact the front desk in advance. Late check-outs are subject to availability and may incur additional charges.",
        
    },
    {
        id:"02",
        question:"Do you offer airport shuttle services?",
        answer:"Yes, we offer complimentary airport shuttle services to and from [Local Airport]. The shuttle runs every hour from 6:00 AM to 10:00 PM. Please contact the front desk or the concierge to schedule your pick-up or drop-off. We recommend booking your shuttle at least 24 hours in advance to ensure availability.",
     
    },
    {
        id:"03",
        question:"Is Wi-Fi available at the hotel?",
        answer:"Yes, we provide complimentary Wi-Fi access throughout the hotel, including guest rooms, the lobby, and common areas. To connect, select the hotel Wi-Fi network and enter the password provided at check-in. If you experience any connectivity issues, please contact the front desk for assistance.",
        
    }
]


function Challenge4(){

    const [activeQuestion, setActiveQuestion] = useState("");

    function handleActiveQuestion(id){
        if (activeQuestion == id){
            setActiveQuestion("");
            return
        }
        setActiveQuestion(id); 
    }

    return(
        <div id="challenge4">
            <h1 style={{textAlign:"center"}}>FAQ</h1>


            <div id="questionContainer">
                {FAQ.map((query)=>(
                    <Question onHandleActiveQuestion={handleActiveQuestion} active={activeQuestion} id={query.id} question={query.question} answer={query.answer} />
                ))}


            </div>

        </div>
    )

}

function Question({active, onHandleActiveQuestion, id, question, answer}){

    return(

        <div style={active==id?{borderTop:"5px solid #33CA7F"}:{borderTop:"5px solid transparent"}} className="queryContainer" onClick={()=> onHandleActiveQuestion(id)}>
            <div className="queryHeader">
                <span>{id}</span>
                <p>{question}</p>
                <span>{active == id?"-":"+"}</span>
            </div>
            {active == id?
            (
                <div className="queryAnswer">
                    {answer}
                </div>

            ):<></>}
        </div>

    )

}

export default Challenge4