let tbody = document.querySelector('tbody');
let bRows = [...tbody.rows];

function myFunc(n) {
    let ascending =localStorage.getItem('asc') || true;
    tbody.innerHTML = '';
    if(ascending === 'true') {
        bRows.sort((a,b) => {
            let x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase();
            let y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();
            return x < y ? -1 : 1;
        })
        localStorage.setItem('asc', false)
    }
    else{
        bRows.sort((a,b) => {
            let x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase();
            let y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();
            return x < y ? -1 : 1;
        }).reverse()
        localStorage.setItem('asc', true)
    }
    
    bRows.map((item) => {
        tbody.appendChild(item);
    })
}