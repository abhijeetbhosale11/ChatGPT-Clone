import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImglogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';



function App() {
const [input, setInput] = useState(""); 

const handelSend = async ()=>{
  const res = await sendMsgToOpenAI(input);
  console.log(res);
}

  return (
    <div className="App">
      <div className='sideBar'>
        <div className="upperside">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming ? </button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use an API ? </button>

          </div>


        </div>
        <div className="lowerside">
          <div className="listItems"><img src={home} alt="home" className="listitemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="saved" className="listitemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="rocket" className="listitemsImg" />Upgrade to Pro</div>
          

        </div>

      </div>
      <div className='main'>
        <div className="chats">
          <div className="chat">
            <img className='chatimg' src={userIcon} alt="" /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur distinctio corporis numquam! Aliquam nisi quaerat itaque qui, aspernatur laudantium quasi?</p>
          </div>
          <div className="chat bot">
            <img className='chatimg' src={gptImglogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facere sequi eum qui perferendis magnam ipsam fuga nulla nemo at et similique natus soluta iure, illo illum eos ipsa totam deserunt architecto. Ducimus natus deserunt maxime? At impedit nihil suscipit. Modi sint fugiat placeat repellat officiis id ab, delectus reprehenderit sunt eos illum consequuntur vitae est atque? Ad harum voluptatum odit ipsa temporibus quis sequi rerum debitis maxime nihil ea ab fugiat aliquam saepe enim ipsam nulla, ut obcaecati minima earum nobis culpa dignissimos architecto. Fuga et, distinctio pariatur incidunt eius esse architecto ullam ducimus, recusandae necessitatibus corporis laboriosam dignissimos.</p>
          </div>

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handelSend}><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>Chat may produce inaccurate information about people, places, or facts. chatGpt august 20 Version.</p>
        </div>

      </div>
      

    </div>
  );
}

export default App;
