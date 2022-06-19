(() => {
  const url = new URL(window.location.href)
  const params = url.searchParams
  const id = params.get('id')
  let body
  if(id === null) {
    // 一覧を返して終了
    const anchors = videos.map(video => `<a href="${url.href}?id=${video.id}">${video.title}</a>`)
    const ul = `<ul style="list-style: none; padding: 0px">${anchors.map(a => `<li style="margin: 1em auto">${a}</li>`).join('')}</ul>`
    body = `<h1>動画一覧</h1>${ul}`
    document.getElementById("body").innerHTML = body
    return
  }
  const video = videos.filter(video => video.id === id)
  if(video.length === 0) {
    // Not Foundを返して終了
    body = `Not Found Video: id=${id}`
    document.getElementById("body").innerHTML = body
    return
  }
  if(video.length > 1) {
    // 複数発見
    console.log(
      "複数のビデオが見つかりました",
      video
    )
  }
  const pTitle = `<p class="title">${video[0].title}</p>`
  const pDate = `<p class="date">${video[0].date}</p>`
  const pVideo = `<video src="https://drive.google.com/uc?id=${video[0].id}&export=download" controls preload="metadata"></video>`
  body = `<div class="video">${pTitle}${pDate}${pVideo}</div>`
  document.getElementById("body").innerHTML = body
  return
})()


