function create_Grid() {
    for (let i = 0; i < (16*16)+4; i++) {
        let div = document.createElement('div');
        div.style.width = '3em';
        div.style.height = '3em';
        margin = '5px';
        div.style.opacity = 0.1;
        div.style.margin = margin;
        div.style.boxSizing = 'border-box';
        div.style.display = 'flex';
        div.style.border = '1px solid black';
        div.style.backgroundColor = 'lightgray';
        document.getElementById('grid_container').appendChild(div);
}   
    //add reset button
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Grid';
    resetButton.style.margin = '10px';
    resetButton.addEventListener('click', () => {
        // Clear the grid container
        document.getElementById('grid_container').innerHTML = '';
        // Recreate the grid
        create_Grid();
    });
    document.getElementById('grid_container').appendChild(resetButton);

    // Select all divs inside the grid container
    // Add event listener to each div for mouseover
    // This will change the background color to black on mouseover

    let divs = document.querySelectorAll('#grid_container div');
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            
            div.style.opacity -= '-0.1';
            const randomcolor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = `#${randomcolor}`;

        });
    });
}

create_Grid();