const api_key = '6947a0c55b42ee7e1f25f79600936a7c';


let search = undefined;

function loadData(count, text){
  $.ajax({
    url: `http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&per_page=${count}&text=${text}&format=json&extras=url_o`,
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    success: (photo) => {
      photo.photos.photo.forEach((photo) => {
        const image = $(" <div class='card' style='width: 18rem;'> <img src=" + photo.url_o + " class='card-img-top' alt='Invalid Image'><div class='card-body'><p class='card-text'>" + photo.title + "</p></div></div>");
        $('#image-content').append(image);
      });

      setTimeout(() => {
        search = { count, text };
      }, 1000);
    }
  });
};

function makeApiCall (event){
  event.preventDefault();

  const amount = parseInt(document.querySelector('#amount').value, 10);
  if (isNaN(amount)) {
    alert('Invalid selection');
  } else {
    const text = document.querySelector('#filter').value;
    loadData(amount, text);
  }
};

let observer = new IntersectionObserver(
  () => {
    console.log(search);
    if (search) {
      loadData(search.count, search.text);
    }
  },
  {
    rootMargin: '0px',
    threshold: 0
  }
);

observer.observe(document.querySelector('#bottom'));
