# Dinamik dasturlash — Eng qisqa yo'l (React + Vite)

Bu loyiha dinamik dasturlash va grafdagi eng qisqa yo'l masalalarini o'rganish uchun qulay web-platforma namunasi hisoblanadi. Platforma:

- Teorik qisqacha tushuntirishlarni beradi.
- Interaktiv tarzda graf kiritib, algoritmni (Dijkstra yoki Bellman-Ford) ishga tushiradi.
- Natijalar (masofalar va eng qisqa yo'l)ni ko‘rsatadi.

Lokalda ishga tushirish:

```bash
npm install
npm run dev
```

Input format va qanday kiritish kerak — batafsil:

- Har bir qator: `u v w` — bunda `u` boshlang'ich tugun, `v` manzil tugun, `w` esa og'irlik (raqam).
- Agar graf yo'nalishsiz bo'lsa, ikkala yo'nalishni ham alohida yozing: `u v w` va `v u w`.
- `Source` — algoritm qayerdan boshlanishini bildiradi.
- `Target` — qaysi tugunga bo'lgan eng qisqa yo'lni ko'rsatishni istasangiz kiriting; bo'sh qolsin, hamma tugunlarga bo'lgan masofa chiqadi.
- `Algoritm`: Dijkstra (manfiy vaznlar yo'q) yoki Bellman-Ford (manfiy vaznlar mumkin).

Misol kiritish:

```
A B 4
A C 2
C B 1
B D 5
```

Bu misolda `A` dan `D` ga eng qisqa yo'lni topish uchun `Source=A`, `Target=D` qilib `Dijkstra` yoki `Bellman-Ford` ni tanlang.

Asosiy fayllar:
- `src/solver.js` — graf parser va Dijkstra/Bellman-Ford algoritmlari
- `src/components/Editor.jsx` — graf kiritingan joy, maydonlar va yordamchi tavsiflar
- `src/components/Visualizer.jsx` — natijani chiroyli ko'rsatish

App tuzilishi (sahifalar):
- `/` — Asosiy ma'lumot (About) ([src/pages/AboutPage.jsx](src/pages/AboutPage.jsx#L1))
- `/usage` — Qanday foydalanish (Usage) ([src/pages/UsagePage.jsx](src/pages/UsagePage.jsx#L1))
- `/examples` — Misollar (Examples) ([src/pages/ExamplesPage.jsx](src/pages/ExamplesPage.jsx#L1))
- `/solver` — Masala yechish (Editor + Visualizer) ([src/pages/SolverPage.jsx](src/pages/SolverPage.jsx#L1))

Keyingi takomillashtirishlar:
- Interaktiv graf vizualizatsiyasi (drag/drop tugunlar, chiziqlar)
- Masala banki va bosqichma-bosqich yechim ko'rsatish
- Test misollar va yuklash/saqlash funksiyasi

Tema (kunduz / tun): sahifaning yuqori panelida tema tugmasi mavjud — foydalanuvchi kunduz (light) yoki tun (dark) rejimini tanlashi mumkin. Tanlov brauzerga saqlanadi va qayta yuklanganda saqlangan rejim tiklanadi.

