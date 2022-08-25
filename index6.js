const eren = new Image();
eren.src = "ErenYeager.png";


eren.addEventListener('load', function(){
    const canvas = document.getElementById('canvas6');
    const ctx = canvas.getContext('2d');
        
        canvas.width = 364;
        canvas.height = 486;
        
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log(pixels);
});
