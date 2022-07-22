let slider = document.getElementById('price-noslider');
let heightSlider = document.getElementById('height-noslider');
let widthSlider = document.getElementById('width-noslider');

if(slider)
{
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': [100],
        }
    });
}

if(heightSlider)
{
	noUiSlider.create(heightSlider, {
        start: [90, 100],
        connect: true,
        step: 1,
        range: {
            'min': [90],
            'max': [100],
        }
    });
}

if(widthSlider)
{
	noUiSlider.create(widthSlider, {
        start: [90, 100],
        connect: true,
        step: 1,
        range: {
            'min': [90],
            'max': [100],
        }
    });
}