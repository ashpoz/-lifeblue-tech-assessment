export const updateCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}`;
};

export const getCookie = (name: string) => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((cookie) => cookie.startsWith(name));
  return cookie?.split("=")[1];
};

export const updateText = (el: HTMLElement, text: string) => {
  el.textContent = text;
};
