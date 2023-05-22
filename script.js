var apiKey = "eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f";
const category = "fooddrink"
var options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f'},
    contentType: 'application/json'}

async function fetchData() {
    const res=await fetch ('https://api.api-ninjas.com/v1/trivia?category=' + category, options);
    const record=await res.json();
    document.getElementById("question").innerHTML = "Question: " + record[0].question;
    document.getElementById("answer").innerHTML = "Answer: " + record[0].answer;
}
fetchData();