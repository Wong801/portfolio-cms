interface Cookie {
  [key: string]: any
}

export function getCookie(name: string): string {
  const cookie: Cookie = {};
  document.cookie.split(';').forEach(function(el) {
    const [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  return cookie[name];
}

export function setCookie(name: string, value: string, days: number) {
  let expires = "";
  if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
