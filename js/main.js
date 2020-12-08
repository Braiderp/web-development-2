function init() {
  const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html",
      team: "week2/team.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html",
      team: "week3/team.html"
    },
    {
      label: "Week4 notes",
      url: "week4/index.html",
      team: "week4/team.html"
    },
    {
      label: "Week5 notes",
      url: "week5/index.html",
      team: "week5/team.html"
    },
    {
      label: "Todo App",
      url: "todo/index.html",
      team: null
    },
    {
      label: "Week7 Notes",
      url: "week7/index.html",
      team: "week7/team.html"
    },
    {
      label: "Week8 Notes",
      url: "week8/index.html",
      team: "week8/team.html"
    },
    {
      label: "Week9 Notes",
      url: "week9/index.html",
      team: "week9/team.html"
    },
    {
      label: "Week10 Notes",
      url: "week10/index.html",
      team: "week10/team.html"
    }
  ];

  let html = "";
  for (let i = 0; i < links.length; i++) {
    let link = `<li><a href="${links[i].url}">${links[i].label}</a></li>`;
    html += link;
    if (links[i].team) {
      let team = `<li><a href="${links[i].team}">Week${i + 1} Team</a></li>`;
      html += team;
    }
  }
  const el = document.getElementById("list");
  el.innerHTML = html;
}
