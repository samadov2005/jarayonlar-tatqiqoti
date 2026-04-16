import React, {useState} from 'react'

export default function Visualizer({result}){
  const [showDetails, setShowDetails] = useState(false)
  
  if(!result) return (
    <div className="visualizer empty">
      <div className="empty-state">
        <p>✍️</p>
        <p>Grafni kiritib "Yechish"ni bosing</p>
      </div>
    </div>
  )
  
  if(result.error) return (
    <div className="visualizer error">
      <p className="error-title">❌ Xatolik</p>
      <p className="error-msg">{result.error}</p>
    </div>
  )
  
  const distance = result.dist && result.dist[result.target]
  const hasPath = result.path && result.path.length > 0
  
  return (
    <div className="visualizer success">
      <h3>📊 Natija</h3>
      
      <div className="result-block">
        <div className="info-item">
          <span className="label">Boshlang'ich:</span>
          <span className="value">{result.source}</span>
        </div>
        <div className="info-item">
          <span className="label">Manzil:</span>
          <span className="value">{result.target}</span>
        </div>
      </div>

      <div className="result-block path-block">
        <p className="label">Eng qisqa yo'l:</p>
        {hasPath ? (
          <p className="path-display">{result.path.join(' → ')}</p>
        ) : (
          <p className="path-display no-path">Yo'l topilmadi (cheksiz masafa)</p>
        )}
      </div>

      <div className="result-block distance-block">
        <p className="label">Jami masafa:</p>
        <p className="distance-value">
          {distance !== Infinity ? distance : '∞'}
        </p>
      </div>

      <button 
        className="details-btn" 
        onClick={()=>setShowDetails(!showDetails)}
      >
        {showDetails ? '▼' : '▶'} Hamma tugunlarga masofa
      </button>
      
      {showDetails && (
        <div className="details-panel">
          <div className="distance-table">
            {Object.entries(result.dist || {}).map(([node, dist]) => (
              <div key={node} className="distance-row">
                <span className="node">{node}</span>
                <span className="dist">{dist === Infinity ? '∞' : dist}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
