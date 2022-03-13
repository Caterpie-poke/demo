for (const video of videos) {
  video.title
  var div = document.createElement("div");
  div.className = "video"
  div.innerHTML = `<p class="title">${video.title}</p><p class="date">${video.date}</p><video src="https://drive.google.com/uc?id=${video.id}&export=download" controls preload="metadata"></video>`
  document.getElementById("body").appendChild(div);
}
