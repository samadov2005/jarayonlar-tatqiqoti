import React from 'react'

export default function AboutPage(){
  return (
    <div className="page">
      <div className="hero">
        <h1>Dinamik dasturlash va eng qisqa yo'l</h1>
        <p className="lead">Kompleks masalalarni optimal yechimlar orqali hal qilish san'ati</p>
      </div>
      <div className="card">
        <h2>Nima bu?</h2>
        <p>Dinamik dasturlash — murakkab masalani kichikroq, takrorlanuvchi kichik masalalarga bo'lib yechish usuli. Ko'pincha optimal substrukturaga va qayta ishlatiladigan submasalalarga ega muammolarda ishlatiladi.</p>
        <p>Graf nazariyasi kontekstida eng qisqa yo'l masalalari turli algoritmlar bilan hal qilinadi:</p>
        <ul className="algo-list">
          <li><strong>Dijkstra algoritmi</strong> — manfiy vaznlar yo'q bo'lsa eng samarali.</li>
          <li><strong>Bellman-Ford</strong> — manfiy og'irliklar va sikllarni aniqlash imkoniyati.</li>
        </ul>
      </div>
      <div className="card">
        <h2>Platformaning maqsadi</h2>
        <div className="feature-grid">
          <div className="feature">
            <div className="feature-icon">📚</div>
            <h4>Teoriya</h4>
            <p>Qisqacha va aniq tushuntirish.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚙️</div>
            <h4>Amaliyot</h4>
            <p>Interaktiv misollar orqali o'rganish.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h4>Taqqoslash</h4>
            <p>Algoritmlarni solishtirib ko'rish.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
