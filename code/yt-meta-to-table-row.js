javascript: (() => {
  const title = document.querySelectorAll('[id="title"].style-scope.ytd-watch-metadata h1 yt-formatted-string')[0].innerHTML;
  const d = new Date(document.querySelectorAll('meta[itemprop="datePublished"]')[0]['content']);
  const pd = String(d.getFullYear()) + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');

  const videoId = document.getElementById('page-manager').querySelectorAll('ytd-watch-metadata[video-id]')[0].getAttribute('video-id');
  const link = "https://www.youtube.com/watch?v=" + videoId;

  const result = [link, title, pd].join('\t');
  window.prompt('', result);
})();
