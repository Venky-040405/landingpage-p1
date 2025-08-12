

const val = document.querySelector('.grids')
const left = document.getElementById('icon2')
const right = document.getElementById('icon1')
const arrowup = document.getElementById('arrowup')
const section = document.querySelectorAll('section')

left.addEventListener("click", () => {
    val.scrollLeft += 1000;
});

right.addEventListener("click", () => {
    val.scrollLeft -= 1000;
});



/* val.addEventListener('wheel', (e) => {
    e.preventDefault()
    e.scrollLeft -= e.deltaY()
}) */



function validate(num) {
    const shoe1 = document.querySelectorAll('.shoe1');
    const price = document.getElementById(`price${num}`);
    const shoe = document.getElementById(`shoe${num}`)
    shoe1.forEach((element, index) => {
        if (index == num) {
            price.classList.toggle('varala')
            if (price.classList.contains('varala')) {
                const array = [
                    '2000rps',
                    '3000rps',
                    '3000rps',
                    '4000rps',
                    '7000rps',
                    '3000rps',
                    '2500rps',
                    '4000rps'
                ]
                array.forEach((element, index) => {
                    if (index == num) {
                        price.innerText = element;

                    }
                })
            }
            else {
                price.innerText = ''
            }
        }

    })

}

const img = document.querySelector(".img2");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            img.classList.add("show");
        }
        else {
            img.classList.remove('show')
        }
    });
}, { threshold: 0.2 });

observer.observe(img);


const img1 = document.querySelector(".imgss");

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            img1.classList.add("show");
        }
        else {
            img1.classList.remove('show')
        }
    });
}, { threshold: 0.2 });

observer1.observe(img1);

/* arrowup.addEventListener('click', () => {
    section.forEach((element, index) => {
        console.log(index);
    })
}) */

