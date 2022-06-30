const btn = document.querySelector('.btn');

btn.addEventListener('click', function(event){
  console.log('Button clicked');
  lol()
})

function lol() {
  var discordPayload = {
    content: '@Adda',
    embeds: [{
      type: 'rich',
      title: 'Кто-то прошел тест',
      color: 7506394,
      fields: []
    }]
  }
  fetch('https://discord.com/api/webhooks/992064801142489118/EtDrCRfJrqZSIBT-dIJ4pYeWJZkoQQpzMZZpuGv49dV1GdMLktKDdUTJDjCPDEHFaffW', {
    method: 'post',
    payload: JSON.stringify(discordPayload),
    contentType: 'application/json'
  })
}
