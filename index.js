`use strict`
  
const getValueAfterMS = (ms, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const keys = {
                a:1,
                b:2,
                c:3,
                d:4,
                e:5,
            }
            const v = keys[value]
            
            if (!v) {
                reject("no existe ese valor")
            } else {
                resolve({
                    v,
                });
            }
        }, ms);
    })
};

getValueAfterMS(5000, "y")
.then((res) => console.log(res))
.then(()=> console.log("me resolvi correctamente"))
.catch((err) => console.log(err))
.finally(()=> console.log("termine la promesa"));