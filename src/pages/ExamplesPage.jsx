import React from 'react'

export default function ExamplesPage(){
  return (
    <div className="page">
      <div className="hero">
        <h1>Foydalanish misollar</h1>
        <p className="lead">Turli turdagi graflarda algoritmlarni sinab ko'ring</p>
      </div>

      <div className="card">
        <h2>Misal 1: Oddiy yo'nalishli graf</h2>
        <div className="example-box">
          <div className="code-block">
            <code>A B 3<br/>A C 1<br/>C B 1<br/>B D 2</code>
          </div>
          <div className="result">
            <p><strong>Source:</strong> A</p>
            <p><strong>Target:</strong> D</p>
            <p><strong>Algoritm:</strong> Dijkstra</p>
            <p><strong>Eng qisqa yo'l:</strong> A → C → B → D (jami: 4)</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Misal 2: Yo'nalishsiz graf</h2>
        <div className="example-box">
          <div className="code-block">
            <code>X Y 5<br/>Y Z 2<br/>X Z 8<br/>Z W 1</code>
          </div>
          <div className="result">
            <p><strong>Source:</strong> X</p>
            <p><strong>Target:</strong> W</p>
            <p><strong>Algoritm:</strong> Dijkstra</p>
            <p><strong>Eng qisqa yo'l:</strong> X → Y → Z → W (jami: 8)</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Misal 3: Manfiy og'irlik</h2>
        <div className="example-box">
          <div className="code-block">
            <code>S A 4<br/>A B -5<br/>B T 2<br/>S T 10</code>
          </div>
          <div className="result">
            <p><strong>Source:</strong> S</p>
            <p><strong>Target:</strong> T</p>
            <p><strong>Algoritm:</strong> Bellman-Ford ⚠️</p>
            <p><strong>Eng qisqa yo'l:</strong> S → A → B → T (jami: 1)</p>
            <p className="note">Manfiy vaznlar mavjud bo'lgani uchun Bellman-Fordni ishlatish kerak.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
