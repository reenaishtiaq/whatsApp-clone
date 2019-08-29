// Make a request for a user with a given ID

axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function (response) {
        // handle success

        console.log(response);

        for (let i = 0; i < response.data.length; i++) {
            //const element = response.data[i];

            let message = response.data[i];

            document.querySelector("#chat-area").innerHTML += `
            
            <div id="name">
            
                <img src="${message.profilePic}"></img>
                
                <h3>${message.name}</h3>
                
            </div>

            <span id="time">${message.time.slice(0, 8)}</span>

            
            <div id="conversation">
                
                <p>${message.firstLine}</p>
                <span id="unread">${message.numbUnread}</span>

            </div>
            `
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });




