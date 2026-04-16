// Simple graph parser and solvers
export function parseGraph(text){
  const lines = text.split(/\r?\n/).map(l=>l.trim()).filter(Boolean)
  const graph = {}
  for(const line of lines){
    const parts = line.split(/\s+/)
    if(parts.length < 3) throw new Error('Har bir qator: u v w formatida bo`lishi kerak')
    const [u,v,wRaw] = parts
    const w = Number(wRaw)
    if(Number.isNaN(w)) throw new Error('Vazn son bo`lishi kerak: ' + wRaw)
    if(!graph[u]) graph[u] = []
    graph[u].push({to:v, weight:w})
    if(!graph[v]) graph[v] = []
  }
  return graph
}

export function dijkstra(graph, source){
  const dist = {}
  const prev = {}
  const pq = new Set(Object.keys(graph))
  for(const v of pq){ dist[v]=Infinity; prev[v]=null }
  if(!(source in graph)) throw new Error('Source mavjud emas: '+source)
  dist[source]=0
  while(pq.size){
    let u = null, best = Infinity
    for(const v of pq) if(dist[v] < best){ best = dist[v]; u=v }
    if(u===null) break
    pq.delete(u)
    for(const e of graph[u]){
      const alt = dist[u] + e.weight
      if(alt < dist[e.to]){ dist[e.to]=alt; prev[e.to]=u }
    }
  }
  return {dist, prev}
}

export function bellmanFord(graph, source){
  const nodes = Object.keys(graph)
  const dist = {}
  const prev = {}
  for(const v of nodes){ dist[v]=Infinity; prev[v]=null }
  if(!(source in graph)) throw new Error('Source mavjud emas: '+source)
  dist[source]=0
  for(let i=0;i<nodes.length-1;i++){
    let changed=false
    for(const u of nodes){
      for(const e of graph[u]){
        if(dist[u] + e.weight < dist[e.to]){ dist[e.to] = dist[u]+e.weight; prev[e.to]=u; changed=true }
      }
    }
    if(!changed) break
  }
  // check negative cycles (not handled beyond detection)
  return {dist, prev}
}
