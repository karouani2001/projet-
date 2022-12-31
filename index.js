function loadCourses({ image, title, price }) {
    const coursecard = document.createElement('div')
    coursecard.setAttribute('class', 'col-4 p-3')

    const courseimage = document.createElement('img')
    courseimage.src = image

    const courseimagecontainer = document.createElement('div')
    courseimagecontainer.setAttribute('class', 'course-image-wrapper')
    courseimagecontainer.append(courseimage)

    coursecard.appendChild(courseimagecontainer)

    const coursetitle = document.createElement('h5')
    coursetitle.setAttribute('class', 'mt-2 text-center')
    coursetitle.innerText = title
    coursecard.appendChild(coursetitle)

    const courseprice = document.createElement('span')
    courseprice.setAttribute('class', 'd-block text-center')
    courseprice.innerText = price
    coursecard.appendChild(courseprice)

    document.querySelector("#courses-container .row").append(coursecard)
}

const selectedCourses = [];

for (let i = 0; i < 5; i++) {
    let course = courses[Math.floor(Math.random() * courses.length)]
    while (selectedCourses.includes(course)) {
        course = courses[Math.floor(Math.random() * courses.length)]
    }
    selectedCourses.push(course)
    loadCourses(course)
}
