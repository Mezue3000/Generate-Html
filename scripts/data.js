const services = [
    {
        // Icon: '<i class="fa-brands fa-github">',
        Title: 'Web Development',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },


    {
        // Icon: '<i class="fa-brands fa-codepen">',
        Title: 'Web Design',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },


    {
        // Icon: '<i class="fa-solid fa-video">',
        Title: 'Video Editing',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },


    {
        // Icon: '<i class="fa-solid fa-camera">',
        Title: 'Photography',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },


    {
        // Icon: '<i class="fa-brands fa-apple">',
        Title: 'App DEvelopment',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },


    {
        // Icon: '<i class="fa-brands fa-yoast">',
        Title: 'SEO Expert',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },


    {
        // Icon: ' <i class="fa-solid fa-trophy"></i>',
        Title: 'Net Award',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },


    {
        // Icon: '<i class="fa-brands fa-codepen"></i>',
        Title: 'Full Stack',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },


    {
        // Icon: '<i class="fa-solid fa-users"></i>',
        Title: 'Cyber Security',
        About: 'Lorem ipsum is simply dummy text of the printing typesetting industry.simply dummy'
    },
]

      let serviceHtml = '';

       services.forEach((service, index) => {
        serviceHtml +=
            html = ` <div class="card">
                        <h4 class="headings">${service.Title}</h4>
                        <p class="ipsum">${service.About}</p>
                    </div>`

            document.querySelector('.js-grid-items').innerHTML = serviceHtml  

       });

      


