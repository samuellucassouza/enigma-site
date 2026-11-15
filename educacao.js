(() => {
const input=document.getElementById('caesarInput'),key=document.getElementById('caesarKey'),label=document.getElementById('caesarKeyLabel'),plain=document.getElementById('caesarPlain'),output=document.getElementById('caesarOutput');
function update(){const n=Number(key.value);label.textContent=n;plain.textContent=input.value.toUpperCase();output.textContent=[...input.value.toUpperCase()].map(ch=>{const x=ch.charCodeAt(0)-65;return x>=0&&x<26?String.fromCharCode(65+(x+n)%26):ch}).join('')}
input.addEventListener('input',update);key.addEventListener('input',update);update();
const feedback=document.getElementById('quizFeedback');document.querySelectorAll('.quiz-answer').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.quiz-answer').forEach(x=>x.classList.remove('correct','incorrect'));const ok=b.dataset.correct==='true';b.classList.add(ok?'correct':'incorrect');feedback.textContent=ok?'Correto! A segurança de um sistema bem projetado depende da proteção das chaves, não do sigilo do algoritmo.':'Ainda não. Base64 é codificação e hashes criptográficos não possuem uma operação geral de reversão. A alternativa correta é B.'}));
})();
