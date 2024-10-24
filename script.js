document.querySelectorAll('.image-box').forEach(box => {

    box.addEventListener('mousemove', (e) =>
    
    {
    
    const rect = box.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    
    const y = e.clientY - rect.top;
    
    box.querySelector('img').style.transform = `translate(
    ${(x - rect.width / 2) / 10}px, 
    ${(y - rect.height / 2) / 10}px
        )`;
    });
    
    box.addEventListener('mouseleave', () =>
        {
    
    box.querySelector('img').style.transform = 'translate(0, 0)';
        });
    });