export default function() {
    const currentDiv = document.getElementById("weatherDiv")

    

    const weatherApp = document.createElement('a')
    weatherApp.classList.add("weatherwidget-io")
    weatherApp.href = "https://forecast7.com/en/34d26n118d43/91331/?unit=us"
    weatherApp.setAttribute('data-label_1', 'Pacoima')
    weatherApp.setAttribute('data-label_2', 'California')
    weatherApp.setAttribute('data-theme', 'original')
    const weatherFunction = !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

    
    currentDiv.append(weatherApp)
}