import React, {useState} from 'react'

export default function Editor({onSolve}){
  const [text, setText] = useState('A B 4\nA C 2\nC B 1\nB D 5')
  const [source, setSource] = useState('A')
  const [target, setTarget] = useState('D')
  const [algo, setAlgo] = useState('dijkstra')

  return (
    <div className="editor card">
      <h2>📝 Graf kiritish</h2>
      <p className="editor-hint">Format: har bir qator <code>u v w</code> (u→v, vazn=w)</p>
      <textarea value={text} onChange={e=>setText(e.target.value)} rows={10} placeholder="A B 4\nA C 2\n..." />
      
      <div className="controls">
        <div className="control-group">
          <label htmlFor="source">Boshlang'ich tugun</label>
          <input id="source" value={source} onChange={e=>setSource(e.target.value)} placeholder="A" />
        </div>
        <div className="control-group">
          <label htmlFor="target">Manzil tugun</label>
          <input id="target" value={target} onChange={e=>setTarget(e.target.value)} placeholder="D" />
        </div>
        <div className="control-group">
          <label htmlFor="algo">Algoritm</label>
          <select id="algo" value={algo} onChange={e=>setAlgo(e.target.value)}>
            <option value="dijkstra">Dijkstra</option>
            <option value="bellman">Bellman-Ford</option>
          </select>
        </div>
      </div>
      
      <button className="solve-btn" onClick={()=>onSolve(text, source, target, algo==='dijkstra' ? 'dijkstra' : 'bellman')}>▶ Yechish</button>
    </div>
  )
}
