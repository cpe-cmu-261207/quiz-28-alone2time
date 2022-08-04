
let gender;
const tGend = document.getElementById("span-gender-icon");
const timg = document.getElementById("img-profile");
const tname = document.getElementById("p-name");
const tadd = document.getElementById("p-address");
const temail = document.getElementById("p-email");
const btnG = document.getElementById("btn-random");
const main = document.getElementById("div-user-card");
const load = document.getElementById("div-loading-card");
main.style.display = ''
load.style.display = "none";
callApi();

btnG.onclick = () => {
  main.style.display = 'none'
  load.style.display = "";
  callApi();
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");

  if (resp.data.results[0].gender == "female") {
    tGend.innerText = "👩";
  } else {
    tGend.innerText = "👨";
  }

  timg.src = resp.data.results[0].picture.large;

  tname.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  tadd.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;

  temail.innerText = resp.data.results[0].email;
  main.style.display = ''
  load.style.display = "none";
  console.log(resp.data.results[0]);
}
