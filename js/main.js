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
    },
    {
      label: "Week5 notes",
      url: "week5/index.html"
    },
    {
      label: "Todo App",
      url: "todo/index.html"
    },
    {
      label: "Week7 Notes",
      url: "week7/index.html"
    },
    {
      label: "Week8 Notes",
      url: "week8/index.html"
    },
    {
      label: "Week9 Notes",
      url: "week9/index.html"
    },
    {
      label: "Week10 Notes",
      url: "week10/index.html"
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
