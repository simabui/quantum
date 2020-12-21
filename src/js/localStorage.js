export function getData(name) {
  const data = localStorage.getItem(name);
  return JSON.parse(data) || '';
}

export function setData(name, data) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(name, dataJSON);
}

export function removeData(name) {
  localStorage.removeItem(name);
}
