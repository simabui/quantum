const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const copies = () => {
  const el = document.querySelector('.slots .pin');
  let left = parseInt(el.innerHTML);

  left = left > 5 ? left - rand(1, 3) : left - rand(-2, 2);
  if (left < 2) {
    el.innerHTML = 1;
  } else {
    el.innerHTML = left;
  }

  setTimeout(copies, rand(9000, 13000));
};

const visitors = () => {
  const el = document.querySelector('.online .pin');
  let left = parseInt(el.innerHTML);
  let start = left - 20;
  const end = left + 20;
  if (start < 100) start = left;
  if (end > 200) end = left;
  el.innerHTML = rand(start, end);
  setTimeout(visitors, rand(3000, 13000));
};

function counter() {
  if (!document.querySelector('#CHAT-PAGE')) return;
  copies();
  visitors();
}

counter();
