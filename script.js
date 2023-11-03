const country_api = new XMLHttpRequest();
country_api.open("GET","https://restcountries.com/v3.1/all",true);
country_api.send();

country_api.onload = function(){
    var data = country_api.response;
    var result = JSON.parse(data);
// TASK 1 ------------------
    console.log("--------------Countries in Asia-------------");

    var res1 = result.filter((x)=>x.region == "Asia")
    res1.map((ele)=>console.log(ele.name.common))
//TASK 2 ---------------------
    console.log("--------------Countries having population < 2 lakhs---------");

    var res2 = result.filter((y)=>y.population<200000);
    res2.map((ele)=>console.log(ele.name.common));
}

