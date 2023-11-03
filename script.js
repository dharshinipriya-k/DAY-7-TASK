const country_api = new XMLHttpRequest();
country_api.open("GET","https://restcountries.com/v3.1/all",true);
country_api.send();

country_api.onload = function(){
    var data = country_api.response;
    var result = JSON.parse(data);
// TASK 1 ------------------
    console.log("--------------COUNTRIES IN ASIA CONTINENT-------------");

    var res1 = result.filter((x)=>x.region == "Asia")
    res1.forEach((ele)=>console.log(ele.name.common))
//TASK 2 ---------------------
    console.log("--------------COUNTRIES HAVING POPULATION < 2 LAKHS---------");

    var res2 = result.filter((y)=>y.population<200000);
    res2.forEach((ele)=>console.log(ele.name.common));

    //TASK 3-----------
    console.log("---------------------PRINTING USING FOR EACH-------------------------------");
    var res3 = result.forEach(element => {
        console.log("Country_name:",element.name.common,"  Capital:",element.capital,"Flag:",element.flags.png);});

     //TASK 4-----------
    console.log("---------------------TOTAL POPULATION USING REDUCE---------------");
    var pop = result.reduce((total,i)=>{
       return total+i.population;
    },0)
    console.log("Total Population:",pop);
    
    //TASK 5------------------
    console.log("-------------------COUNTRIES THAT USE US DOLLARS-----------");

    var usd = result.filter(ele=>ele.currencies && ele.currencies.USD);
    usd.forEach(ele=>console.log(ele.name.common));


}

