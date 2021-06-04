(function(){

    "use strict";

    //Selecting the form
    const formFill = document.querySelector('#destination_details_form');
    formFill.addEventListener('submit', creatingCardFunction);

    //Creating the function for the form 
    function creatingCardFunction(event){
        event.preventDefault();

        //Extrating the values from the form
        const destName = document.querySelector('#name').value;
        const destLocation = document.querySelector('#location').value;
        const destPictureUrl = document.querySelector('#photo').value;
        const destDescription = document.querySelector('#description').value;

        //Clearing the fields in the form input
        for ( let i=0; i < formFill.length; i++){
            formFill.elements[i].value = "";
        }

        //Creating the function --> to creat the card (commending function)
        const createCardFun = functioningTheCard(destName, destLocation, destPictureUrl, destDescription);

        //Changing the h2 (destination name in the card area)
        const changeCardAreaHeading = document.querySelector('#destination_container');
            // 0 indicates the 1st element in the arrery---- so thus why we are using 0 in the if statement
        if(changeCardAreaHeading.children.length === 0){
            document.querySelector('#title').innerHTML = "My Wish List";
        }

        //Adding the card
        document.querySelector('#destination_container').appendChild(createCardFun);

    }

    //creating the function --> to create the card
    function functioningTheCard(name, location, photoUrl, description){

        //creatin the div to accomodate all
        const card = document.createElement('div');
        card.className = 'card';

        //create img
            //seting the attribute for the image
        const img = document.createElement('img');
        img.setAttribute('alt', name);
            //creating the default source for the image
        const defaultImg = 'images/signpost.jpg';
            //creating the if statement for image
        if (photoUrl.length === 0){
            img.setAttribute('src', defaultImg);
        }else{
            img.setAttribute('src', photoUrl);
        }
        card.appendChild(img);

        //Creating the card-body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        //creating h3 (destination name)
        const cardDesName = document.createElement('h3');
        cardDesName.innerHTML = name;
        cardBody.appendChild(cardDesName);

        //creating h4 (destination location)
        const cardDesLoca = document.createElement('h4');
        cardDesLoca.innerHTML = location;
        cardBody.appendChild(cardDesLoca);

        //creating p (description)
        if (description.length !== 0){
            const cardDesDes = document.createElement('p');
            cardDesDes.innerHTML = description;
            cardDesDes.className = 'card-text';
            cardBody.appendChild(cardDesDes);
        }

        //creating remove button
        const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';

        //creating the function for removing the crad via remove button
        removeButton.addEventListener('click', function(event){
            const removeCard = event.target.parentElement.parentElement;
            removeCard.remove();
        });
        cardBody.appendChild(removeButton);

        //setting attribute to card & returning function
        card.appendChild(cardBody);
        return card;

    }

}());
