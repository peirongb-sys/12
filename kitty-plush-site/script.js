let bagCount = 0;
const bagCountLabel = document.querySelector('#bagCount');
const bagButton = document.querySelector('#bagButton');
const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}

document.querySelectorAll('[data-add]').forEach((button) => {
  button.addEventListener('click', () => {
    bagCount += 1;
    bagCountLabel.textContent = bagCount;
    bagButton.setAttribute('aria-label', `購物袋，${bagCount} 件`);
    showToast(`「${button.dataset.add}」已放進購物袋 ♡`);
  });
});

document.querySelector('#bagButton').addEventListener('click', () => {
  showToast(bagCount ? `購物袋裡有 ${bagCount} 件可愛玩偶 ♡` : '購物袋還空空的，去找一位小夥伴吧 ♡');
});

document.querySelector('#subscribeForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email');
  if (!email.checkValidity()) return email.reportValidity();
  document.querySelector('#subscribeMessage').textContent = '收到你的 Email 了，期待把可愛消息寄給你 ♡';
  email.value = '';
});
