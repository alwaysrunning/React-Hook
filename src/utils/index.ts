export const getQueryVariable = (variable) => {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (const x of vars) {
    const pair = x.split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
};

export const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });

export const getRtxFromString = (values) =>
  (values || '')
    .split(';')
    .map((v) => v.split(','))
    .flat()
    .map((v) => v.split('，'))
    .flat()
    .map((v) => v.split('；'))
    .flat()
    .filter(Boolean)
    .map((v) => v.replace(/\(.*?\)/g, ''))
    .filter(Boolean)
    .map((v) => v.replace(/[\u4e00-\u9fa5]/g, ''))
    .filter(Boolean)
    .map((v) => v.match(/[a-zA-Z_]+/g))
    .flat()
    .filter(Boolean);



export function createIframe(url, height) {
  const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = height;
  iframe.allow = 'clipboard-read; clipboard-write';
  iframe.src = url;
  return iframe;
}

export function postMessage(type, payload) {
  const key = new Date().getTime();
  if (window.parent) {
    window.parent.postMessage(
      {
        type,
        payload,
        key,
      },
      '*'
    );
  }
}
