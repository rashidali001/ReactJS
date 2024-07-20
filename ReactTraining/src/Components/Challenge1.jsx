


const skills = [
    {
        skill:"Javascript",
        level:"Advanced",
        color: "#008BF8"
    },
    {
        skill:"React",
        level:"Intermediate",
        color:"#DC0073"
    },
    {
        skill:"Computer Networks",
        level:"Intermediate",
        color:"#DC0073"
    },
    {
        skill:"HTML + CSS",
        level:"Advanced",
        color:"#008BF8"
    },
    {
        skill:"Opera PMS",
        level:"Beginner",
        color:"#79F6DD"
    },
    {
        skill:"Communication",
        level:"Intermediate",
        color:"#DC0073"
    },
    {
        skill:"Investing",
        level:"Intermediate",
        color: "#DC0073"
    }
]


function ProfileCard(){

    return (
        <div id="challenge1Container">
            <Profile/>
            <Info />
            <Skills />
        </div>
    )


}

const emojis = [
    {
        level:"Beginner",
        emoji:"👶"
    },
    {
        level:"Intermediate",
        emoji:"👍"
    },
    {
        level:"Advanced",
        emoji:"💪"
    }
]


function Profile(){
    return <img className="profilePhoto" src="profilePhoto.jpg" alt="Profile Photo" />
}

function Info(){

    return (
        <div className="infoStyle">

            <h1 style={{fontWeight:"bold"}}>Rashid Bakari</h1>

            <p>
                Full stack developer and Network associate. When not coding
                or building networks, I like to hit the gym, try good food, or to
                just enjoy the dubai sunset at the beach
            </p>

        </div>
    )

}

function Skills(){

    return (
       <div className="skillStyle">


        {skills.map((skillObj)=>{
            return(
                <div className="skill" style={{backgroundColor:`${skillObj.color}`}}>
                <span>{skillObj.skill}</span>
                {emojis.map((emojiObj)=>{
                    {emojiObj.level == skillObj.level? <span>{emojiObj.emoji}</span>:<></>}                
                })}
                </div>
            )           
        })}
       </div>
    )

}

export default ProfileCard





// function Challenge1 (){

//     return(
//        <div id="challenge1Container">
//         <Profile source="profilePhoto.jpg" />
//         <Info />
//         <Skills/>
//        </div>
//     )
// }

// function Profile (props){

//     return(
//         <div>
//             <img style={{width:"100%", height:"250px"}} src={props.source} />
//         </div>
//     ) 
// }

// function Info (){

//     return (
//         <div style={{padding:"10px"}}>
//             <h2 style={{margin:"5px 0"}}>Rashid Bakari</h2>

//             <p>Full stack developer and Network associate. When not coding
//                 or building networks, I like to hit the gym, try good food, or to
//                 just enjoy the dubai sunset at the beach
//             </p>

//         </div>
//     )

// }

// function Skills(){

//     const skills = ["Html & Css 😎","Networking 🤖","Software Development 💻",
//         "Opera PMS 🏟","Ip addressing 🌍"
//     ]

//     return (

//         <div style={{padding:"10px",display:"flex", gap:"10px", width:"100%", flexWrap:"wrap"}}> 
//             {skills.map((el)=>{
//                 return(
//                     <div style={{padding:"5px", borderRadius:"15px", backgroundColor:"#DC0073", color:"#fff"}}>
//                         {el}
//                     </div>

//                 );
                

//             })}
//         </div>
      
//     )
// }


// export default Challenge1;