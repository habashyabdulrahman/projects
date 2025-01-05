function showPopup(code) {
    const popup = document.getElementById('popup');
    document.getElementById('code-snippet').innerText = code; // تحديث النص داخل النافذة
    popup.style.display = 'block'; // إظهار النافذة
    setTimeout(() => {
        popup.classList.add('show'); // إضافة التأثير بعد وقت قصير
    }, 10);
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show'); // إزالة التأثير
    setTimeout(() => {
        popup.style.display = 'none'; // إخفاء النافذة بعد التأثير
    }, 300);
}

function copyCode() {
    const codeSnippet = document.getElementById('code-snippet').innerText;
    navigator.clipboard.writeText(codeSnippet).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy code: ' + err);
    });
}
