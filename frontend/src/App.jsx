import React, {useState} from 'react';
import axios from 'axios';

function App(){
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const send = async () => {
    if(!text) return;
    setMessages(prev=>[...prev, {role:'user', text}]);
    try{
      const resp = await axios.post('http://localhost:8000/api/message', {user_id:'demo', text});
      setMessages(prev=>[...prev, {role:'agent', text: resp.data.response}]);
    }catch(e){
      setMessages(prev=>[...prev, {role:'agent', text: 'Error contacting backend'}]);
    }
    setText('');
  }

  return (
    <div style={{maxWidth:700, margin:'2rem auto', fontFamily:'sans-serif'}}>
      <h2>KAVEX - Prototype Chat</h2>
      <div style={{border:'1px solid #ddd', padding:12, minHeight:300}}>
        {messages.map((m,i)=>(
          <div key={i} style={{margin:'8px 0', textAlign: m.role==='user'?'right':'left'}}>
            <div style={{display:'inline-block', padding:8, borderRadius:8, background: m.role==='user'?'#e6f7ff':'#f5f5f5'}}>
              <strong>{m.role}</strong>: {m.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop:12, display:'flex', gap:8}}>
        <input value={text} onChange={e=>setText(e.target.value)} style={{flex:1, padding:8}} placeholder='Type: e.g. Summarize doc_...' />
        <button onClick={send} style={{padding:'8px 12px'}}>Send</button>
      </div>
    </div>
  );
}

export default App;
