const fn = () => {
    console.log("Do Nothing")
  }
  
  const callback = (arg, fn) => {
      console.log(arg)
      fn()
  }
  
  const loadScript = (src, callback) => {
      let sc = document.createElement("script");
      sc.src = src;
      console.log(sc)
      console.log(sc.src)
      sc.onload = callback("Abhishek Tyagi", fn);
      document.head.append(sc)
  }
  
  
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )


function getdata(dataID, getNextData) {
    setTimeout(() => {
        console.log("data =", dataID);
        if(getNextData){
            getNextData();
        }
    }, 1000);
}

// callback hell
getdata(1, () => {  
    console.log("getting next data...");
    getdata(2, () => {
        console.log("getting next data...");
        getdata(3, () => {
            console.log("getting next data...");
                getdata(4, () => {
                    console.log("getting next data...");
                    getdata(5)
                });
        });
    });
});