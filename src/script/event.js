const eventCard = [
  {
    id: 1,
    image: '../../assets/img/event-1.png',
    title: 'Angkor Sankranta',
    desc: 'Angkor Sankranta is a cultural celebration showcasing traditional games, dances, food, and ceremonies within the iconic Angkor temple complex.',
    date: '14 to 16 - April - 2025',
    location: 'Siem Reap - Cambodia',
  },
  {
    id: 2,
    image: '../../assets/img/event-2.png',
    title: 'Water Festival',
    desc: 'The Water Festival celebrates the end of the rainy season and the Tonle Sap River flow reversal, with boat races, lighted floats, and festivities especially in Phnom Penh.',
    date: '04 to 06 - Nov - 2025',
    location: 'Phnom Penh - Cambodia',
  },
  {
    id: 3,
    image: '../../assets/img/event-3.png',
    title: 'Sea Festival',
    desc: 'The Sea Festival celebrates Cambodia coastal beauty and tourism. Featuring concerts, sports competitions, exhibitions, and beach festivities.',
    date: 'Upcoming',
    location: 'Koh Kong - Cambodia',
  },
];

let eventServices = eventCard.map(data => {
  return `
    <div class="grid grid-cols-[1.4fr_1fr_1fr] h-75 items-center gap-10 border-b-1 border-gray-200 shadow-2xl shadow-gray-30 rounded-4xl px-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center">
        <div class="">
          <div class="flex gap-10 items-center">
            <div class="flex gap-3 items-center">
              <i class="fa-solid fa-calendar  text-ascent"></i>
              <p>${data.date}</p>
            </div>
            <div class="flex gap-3 items-center">
              <i class="fa-solid fa-location-dot text-ascent"></i>
              <p>${data.location}</p>
            </div>
          </div>
          <h2 class="font-bold text-3xl mt-10 text-primary">${data.title}</h2>
        </div>
        <div>
          <img class="w-80 rounded-2xl" src="${data.image}" alt="">
        </div>
        <div>
          <p class="text-justify">${data.desc}</p>
          <a href="./event-detail.html?id=${data.id}">
            <div class="flex items-center gap-3 cursor-pointer mt-5">
              <button class="text-secondary font-bold cursor-pointer">Event Detail</button>
              <svg class="fill-secondary" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
            </div>
          </a>
        </div>
    </div>
  `;
});

document.getElementById("event-card").innerHTML = eventServices.join('');
