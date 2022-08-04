callApi();

let gender;
const tGend = document.getElementById("span-gender-icon");
const timg = document.getElementById("img-profile");
const tname = document.getElementById("p-name");
const tadd = document.getElementById("p-address");
const temail = document.getElementById("p-email");
const btnG = document.getElementById("btn-random");
const load = document.getElementById('div-loading-card')

btnG.onclick = () =>{
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

  console.log(resp.data.results[0]);
}
