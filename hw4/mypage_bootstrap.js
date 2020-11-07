function addCard(element) {
  const card = $(
    '<div class="card"> <img height="32" width="32" src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-twitter.png?w=585&scale=down" /> Jquery is stupid. React is better. <button type="button" class="btn btn-primary" onclick="removeCard(this.parentElement)">Remove</button></div>'
  );

  // console.log(card.get()[0], element, element.parentElement);

  element.parentElement.appendChild(card.get()[0]);
}

function removeCard(element) {
  // console.log(element);
  element.remove();
}
