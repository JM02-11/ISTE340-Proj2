//This is how we will get data
//base concat with endpoint

// const proxyServer = 
// "https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";

const proxyServer = 
"https://web01.gccis.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";

//go get data
//endpoint being like 'about/' or 'degrees/'
async function getData(endpoint){
    const result = await fetch(`${proxyServer}${endpoint}`);
    return await result.json();
}

export default getData;
