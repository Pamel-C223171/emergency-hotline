// console.log('connected')

function getElement(id) {
    const element = document.getElementById(id)
    return element
}

// ---------------------heart coin copy count-------------------------------------------------

document.getElementById('hotline-section').addEventListener('click', function (e) {
    e.preventDefault();
// heart count -------------------------------------------------------------
    if (e.target.className.includes('heart-icon')) {

        const heart = getElement('heart-count').innerText
        const totalHeart = Number(heart) + 1;


        getElement('heart-count').innerText = totalHeart

    }
// coin count--------------------------------------------------------------------
    if (e.target.className.includes('call-btn')) {

        let coin = Number(getElement('coin-count').innerText)

        if (coin >= 20) {
            coin = coin - 20;

            getElement('coin-count').innerText = coin

            const serviceName = e.target.parentNode.parentNode.children[1].children[0].innerText
            const serviceNumber = e.target.parentNode.parentNode.children[2].children[0].innerText
            alert(`${serviceName} ${serviceNumber}`)

            const callHistory = getElement('call-history')

            const newCard = document.createElement('div')
            newCard.innerHTML = `
            <div class="flex justify-between items-center bg-slate-100 p-3 rounded-xl mt-5">
                    <div>
                        <h2 class="inter-normal text-[#111111] text-base">${serviceName}</h2>
                        <p class="text-base text-[#5c5c5c] hind-madurai-regular">${serviceNumber}</p>
                    </div>
                    <p  class="text-base text-[#111111] hind-madurai-regular">${new Date().toLocaleTimeString()}</p>
                </div>
            `
            getElement('call-history').appendChild(newCard)

        }
        else {
            alert('You don’t have enough coins to make a call. You need at least 20 coins.')
        }

    }

// copy count ----------------------------------------------------------------------
    if (e.target.className.includes('copy-btn')) {

        const copyCount = getElement('copy-count').innerText
        const totalCopy = Number(copyCount) + 1;


        getElement('copy-count').innerText = totalCopy

        const serviceNumberCopy = e.target.parentNode.parentNode.children[2].children[0].innerText

        navigator.clipboard.writeText(serviceNumberCopy)
        
        alert(`Copy the number : ${serviceNumberCopy}`)

    }

})

//---------clear btn-------------------------------------------

getElement('clear-btn').addEventListener('click', function(){
    getElement('call-history').innerHTML = ""
})