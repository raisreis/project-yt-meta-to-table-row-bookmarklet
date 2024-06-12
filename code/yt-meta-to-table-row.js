javascript: (() => {
  const title = document.querySelectorAll('[id="title"].style-scope.ytd-watch-metadata h1 yt-formatted-string')[0].innerHTML;
  const d = new Date(document.querySelectorAll('meta[itemprop="datePublished"]')[0]['content']);
  const pd = String(d.getFullYear()) + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
  const link = document.querySelectorAll('link[rel="canonical"]')[0].getAttribute('href');


  const result = [link, title, pd].join('\t');
  window.prompt('', result);
})();
