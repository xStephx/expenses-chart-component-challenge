const daysBars = document.querySelectorAll('.days-bars')

fetch('./assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((dayData, index) => {
            const dayBar = daysBars[index]
            const daysSpends = dayBar.previousElementSibling

           
            dayBar.style.height = '0px'

            setTimeout(() => {
                dayBar.style.transition = 'height 1s ease-out' 
                dayBar.style.height = `${dayData.amount * 2.95}px`
            }, 100);

            daysSpends.textContent = `$${dayData.amount}`

            dayBar.addEventListener('mouseover', () => {
                daysSpends.classList.remove('hidden')
            })

            dayBar.addEventListener('mouseout', () => {
                daysSpends.classList.add('hidden')
            })
        })
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    })
