const url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"


function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
    const urlParams = new URLSearchParams(url);
    const utm_medium = urlParams.get("utm_medium")
    return utm_medium;

    }

let utm_medium=getUrlParameterValue(url, "utm_medium")
console.log(utm_medium)
