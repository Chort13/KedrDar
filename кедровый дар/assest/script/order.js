const TOKEN = "7687454641:AAH2rT3elbzK4HQ-f-AVllUm9QwgJ-J9gug";
const CHAT_ID = "-4806878482";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const FORM = document.querySelector(".modal__form");

// Стили для уведомлений (можно добавить в CSS)
const style = document.createElement("style");
style.textContent = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    font-family: sans-serif;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
    max-width: 300px;
  }
  .notification.show {
    opacity: 1;
    transform: translateY(0);
  }
  .notification.success {
    background-color: #4CAF50;
  }
  .notification.error {
    background-color: #F44336;
  }
`;
document.head.appendChild(style);

// Функция показа уведомления
function showNotification(type, message) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  // Показываем уведомление
  setTimeout(() => notification.classList.add("show"), 10);

  // Скрываем через 5 секунд
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Модифицированная функция отправки формы
FORM.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = FORM.elements.name.value.trim();
  const phone = FORM.elements.phone.value.trim();

  const namePattern = /^[А-ЯЁа-яё\s\-]{2,30}$/;
  if (!namePattern.test(name)) {
    showNotification(
      "error",
      "Имя должно содержать только русские буквы (2-30 символов)"
    );
    FORM.elements.name.focus();
    return;
  }

  const phonePattern =
    /^(?:\+7|8)?[\s\-]*\(?\d{3}\)?[\s\-]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}$/;
  if (!phonePattern.test(phone)) {
    showNotification("error", "Номер указан неверно. Пример: +7 999 123-45-67");
    FORM.elements.phone.focus();
    return;
  }

  const message = `Заявка с сайта\nИмя: ${name}\nТелефон: ${phone}`;

  try {
    await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });

    showNotification("success", "Ваша заявка успешно отправлена!");
    FORM.reset();
  } catch (err) {
    console.error("Ошибка отправки:", err);
    showNotification("error", "Ошибка отправки. Пожалуйста, попробуйте позже");
  }
});
// Форма сертификата
const CERT_FORM = document.getElementById("cert-form");
CERT_FORM.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = CERT_FORM.elements.name.value.trim();
  const phone = CERT_FORM.elements.phone.value.trim();

  const namePattern = /^[А-ЯЁа-яё\s\-]{2,30}$/;
  if (!namePattern.test(name)) {
    showNotification(
      "error",
      "Имя должно содержать только русские буквы (2-30 символов)"
    );
    FORM.elements.name.focus();
    return;
  }

  const phonePattern =
    /^(?:\+7|8)?[\s\-]*\(?\d{3}\)?[\s\-]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}$/;
  if (!phonePattern.test(phone)) {
    showNotification("error", "Номер указан неверно. Пример: +7 999 123-45-67");
    FORM.elements.phone.focus();
    return;
  }

  const message = `Заявка с сайта (СЕРТИФИКАТ)\nИмя: ${name}\nТелефон: ${phone}`;

  try {
    await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });

    showNotification("success", "Заявка на сертификат отправлена!");
    e.target.reset();
  } catch (err) {
    showNotification("error", "Ошибка отправки заявки на сертификат");
  }
});

// Общая функция отправки в Telegram
async function sendToTelegram(message) {
  const response = await axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });

  if (response.status !== 200) {
    throw new Error("Ошибка отправки сообщения");
  }

  return response;
}
