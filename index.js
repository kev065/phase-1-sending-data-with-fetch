function submitData (name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
        },
        body: JSON.stringify({
            name, email
        })
    }