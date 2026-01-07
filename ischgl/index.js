const formatter = new Intl.RelativeTimeFormat('nl', { numeric: 'auto' });
const items = document.getElementsByTagName('details');

for (const item of items) {
  const date = new Date(item.children[0].textContent+'+01:00'); // only works for non dst dates
  const diff = date - new Date(); // only works if browser is in UTC+1 timezone
  if (isNaN(diff)) {
    continue;
  }
  const days = Math.round(diff / 86400000); // 1 day in ms (24 * 60 * 60 * 1000)

  item.children[0].innerHTML += ' <small><em>(' + formatter.format(days, 'day') + ')</em></small>';

  item.addEventListener('toggle', function(event) {
    if (item.open) {
      const video = item.querySelector('video');
      video.setAttribute('preload','metadata');
    }
  });
}
