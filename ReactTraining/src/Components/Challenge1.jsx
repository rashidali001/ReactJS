
function Challenge1 (){

    return(
       <div id="challenge1Container">
        <Profile source="profilePhoto.jpg" />
        <Info />
        <Skills/>
       </div>
    )
}

function Profile (props){

    return(
        <div>
            <img style={{width:"100%", height:"250px"}} src={props.source} />
        </div>
    ) 
}

function Info (){

    return (
        <div style={{padding:"10px"}}>
            <h2 style={{margin:"5px 0"}}>Rashid Bakari</h2>

            <p>Full stack developer and Network associate. When not coding
                or building networks, I like to hit the gym, try good food, or to
                just enjoy the dubai sunset at the beach
            </p>

        </div>
    )

}

function Skills(){

    const skills = ["Html & Css","Networking","Software Development",
        "Opera PMS","Ip addressing"
    ]

    return (

        <div style={{padding:"10px",display:"flex", gap:"10px", width:"100%", flexWrap:"wrap"}}> 
            {skills.map((el)=>{
                return(
                    <div style={{padding:"5px", borderRadius:"15px", backgroundColor:"#DC0073", color:"#fff"}}>
                        {el}
                    </div>

                );
                

            })}
        </div>
      
    )
}


export default Challenge1;