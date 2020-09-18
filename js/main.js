function init() {
  const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ];

  let html = "";
  for (let i = 0; i < links.length; i++) {
    let link = `<li><a href="${links[i].url}">${links[i].label}</a></li>`;
    html += link;
  }
  const el = document.getElementById("list");
  el.innerHTML = html;
}
