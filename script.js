var detailsform = document.querySelector('#destination_detail');
detailsform.addEventListener('submit',function(event){
    event.preventDefault;
    var destname= event.target.elements['name'].value;
    var destlocation= event.target.elements['location'].value;
    var destphoto= event.target.elements['photo'].value;
    var destdecrp= event.target.elements['description'].value;
    for(var i=0;i<detailsform.length;i++){
        detailsform.elements[i].value="";
    }
    var destcard = createdestcard(destname,destlocation,destphoto,destdecrp);

    var wishlist = document.getElementById('destination_container');
    if(wishlist.children.length===0)
    {
        document.getElementById('title').innerHTML='My wishlist';
    }
    document.querySelector('destination_container').appendChild(destcard);
})

function createdestcard(name,location,photoURL,description){
    var card = document.createElement('div');
    card.className=card;
    var img=document.createElement('img');
    img.setAttribute('alt', name);
    var constantphotourl = "images/signpost.jpg";
    if(photoURL ===0){
        img.setAttribute('src',constantphotourl);
    }
    else{
        img.setAttribute('src',photoURL);
    }
    card.appendChild(img);
    var cardbody = document.createElement('div');
    cardbody.className="card-body";

    var cardTitle = document.createElement('h3');
    cardTitle.innerText=name;
    cardbody.appendChild(cardTitle);

    var cardLoc = document.createElement('h4');
    cardLoc.innerText=location;
    cardbody.appendChild(cardLoc);

    if(description.length !==0){
        var cardText = document.createElement('p');
        cardText.className="card-text";
        cardText.innerText=description;
        cardbody.appendChild(cardText);
    }

    var cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText="Remove";
     
    cardDeleteBtn.addEventListener('click',removeDestination);
    cardbody.appendChild(cardDeleteBtn);
    card.appendChild(cardbody);
    return card;

}
function removeDestination(event){
    var card = event.target.parentElement.parentElement;
    card.remove();
}