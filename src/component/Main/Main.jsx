import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
// import runChat from './../../config/gemini';
// import { useContext } from 'react';
// import { Context } from '../../context/context';



function Main() {
//   const {history,setHistory} = useContext(Context);
//   const sendMessage = async ()=>{
//         const res = await runChat('Hello');
//         setHistory([...history,{
//             question:'Hello',
//             answer:res,
//         }]);
//   }
//  console.log(history[0].answer);

    const {onSent,recentPrompt,showResult,
        loading,resultData,setInput,input,newChat} = useContext(Context)

  return (
    <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult?
                <>
                    <div className="greet">
                        <p><span>Hello, Dev</span></p>
                        <p>How Can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful place to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept : urban planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activites for our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </> :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                              :<p dangerouslySetInnerHTML={{__html:resultData}}></p> 
                            }
                        </div>
                    </div>   

                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                        {/* <button onClick = {sendMessage}>Click Here</button> */}
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people , so double-check its reponses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Main
