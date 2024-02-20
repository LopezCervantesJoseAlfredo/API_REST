Promise.race([promise1(), promise2(), promise3()])
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error));