function init() {
  const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week4 notes",
      url: "week4/index.html"
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
