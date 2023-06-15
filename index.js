// Add your code here
function submitData(name, email)
{
    const configobj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: "" + name,
        email: "" + email,
    }),
    };
    let resobjn = fetch("http://localhost:3000/users", configobj)
    .then(response => response.json())
    .then(function(resobj){
    //do something with the dom
    const pcntent = document.createElement("p");
    pcntent.id = "cntent";
    pcntent.textContent = "" + resobj.id;
    document.getElementsByTagName("body")[0].appendChild(pcntent);
    return resobj;
    })
    .catch(function (error) {
        console.log(error.message);
        //add the error message to the dom
        const perr = document.createElement("p");
        perr.id = "errmsg";
        perr.textContent = "" + error.message;
        document.getElementsByTagName("body")[0].appendChild(perr);
        return null;
    })
    .then(resobjn => resobjn);
    return resobjn;
}
