import React from 'react'

export default function UsagePage(){
  return (
    <div className="page">
      <div className="hero">
        <h1>Grafni qanday kiritish kerak</h1>
        <p className="lead">Bosqichma-bosqich qo'llanma</p>
      </div>
      <div className="card">
        <h2>Format</h2>
        <p>Grafni matn shaklida quyidagi formatda kiriting:</p>
        <div className="code-block">
          <code>u v w</code>
        </div>
        <p>Bu yerda:</p>
        <ul className="definition-list">
          <li><strong>u</strong> — boshidan tugun</li>
          <li><strong>v</strong> — manzil tugun</li>
          <li><strong>w</strong> — og'irlik (raqam)</li>
        </ul>
      </div>
      <div className="card">
        <h2>Maslahatlar</h2>
        <ul className="tips">
          <li>Tugun nomlari satr yoki raqam bo'lishi mumkin.</li>
          <li>Agar graf yo'nalishsiz bo'lsa, ikkala yo'nalishni ham alohida yozing: <code>u v w</code> va <code>v u w</code>.</li>
          <li>Har bir qatorni yangi satrga yozing.</li>
        </ul>
      </div>
      <div className="card">
        <h2>Maydonlarni tushuntirish</h2>
        <div className="param-list">
          <div className="param">
            <h4>Source</h4>
            <p>Boshlang'ich tugun — shudan boshlab eng qisqa masofalarni hisoblaydi.</p>
          </div>
          <div className="param">
            <h4>Target</h4>
            <p>Ixtiyoriy — natijada qaysi tugunga yo'lni ko'rsatishni istasangiz.</p>
          </div>
          <div className="param">
            <h4>Algoritm</h4>
            <p>Dijkstra (tez, manfiy yo'q) yoki Bellman-Ford (manfiy og'irliklar uchun).</p>
          </div>
        </div>
      </div>
    </div>
  )
}
