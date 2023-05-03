const container = document.querySelector('.fluid-container');
const image = container.querySelector('.fluid-image');
const containerRect = container.getBoundingClientRect();

document.addEventListener('mousemove', e => {
  const x = e.clientX - containerRect.left;
  const y = e.clientY - containerRect.top;
  
  const centerX = containerRect.width / 2;
  const centerY = containerRect.height / 2;
  
  const deltaX = x - centerX;
  const deltaY = y - centerY;
  
  const percentX = deltaX / centerX;
  const percentY = deltaY / centerY;
  
  const maxTilt = 10;
  
  const tiltX = percentY * maxTilt;
  const tiltY = -percentX * maxTilt;
  
  image.style.transform = `translate(-50%, -50%) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

