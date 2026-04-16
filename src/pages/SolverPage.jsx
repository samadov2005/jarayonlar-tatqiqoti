import React, {useState} from 'react'
import Editor from '../components/Editor'
import Visualizer from '../components/Visualizer'
import { dijkstra, bellmanFord, parseGraph } from '../solver'

export default function SolverPage(){
  const [result, setResult] = useState(null)

  function handleSolve(text, source, target, algo){
    try{
      const graph = parseGraph(text)
      let res = algo === 'dijkstra' ? dijkstra(graph, source) : bellmanFord(graph, source)
      setResult({dist: res.dist, prev: res.prev, source, target, path: reconstructPath(res.prev, source, target)})
    }catch(e){
      setResult({error: e.message})
    }
  }

  function reconstructPath(prev, s, t){
    if(!(t in prev)) return null
    const path = []
    let u = t
    while(u !== null && u !== undefined){
      path.push(u)
      if(u === s) break
      u = prev[u]
    }
    return path.reverse()
  }

  return (
    <div className="page">
      <div className="grid">
        <div className="col">
          <Editor onSolve={handleSolve} />
        </div>
        <div className="col">
          <Visualizer result={result} />
        </div>
      </div>
    </div>
  )
}
