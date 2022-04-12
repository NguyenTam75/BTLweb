const data = {
    teachers : [
        {
            id:1,
            name:"Mr Teacher 1",
            position:"Junior Web Developer",
            short: "You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)",
            dateOfBorned: "21st Novemver, 19xx",
            phone:"+84 (024) 3954 783",
            email:"teacher1@tlu.edu.vn",
            address:"Santa monica bullevard",
            avatar:"https://elearningindustry.com/wp-content/uploads/2019/10/professional-development-tools-for-teachers.jpg"
        },
        {
            id:2,
            name:"Mrs Teacher 2",
            position:"Junior Web Developer",
            short: "You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)",
            dateOfBorned: "21st Novemver, 19xx",
            phone:"+84 (024) 3954 783",
            email:"teacher2@tlu.edu.vn",
            address:"175 Tây Sơn",
            avatar:"https://cdn.aarp.net/content/dam/aarp/about_aarp/nrta/2016/1140-nrta-overall-banner-teacher-portrait.imgcache.rev.web.600.345.jpg"
        }
    ]
}

window.localStorage.setItem('data_all', JSON.stringify(data));