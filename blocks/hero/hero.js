document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');

  const video = document.createElement('video');
  video.setAttribute('autoplay', '');
  video.setAttribute('loop', '');
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.id = 'hero-video';

  // Styling for full background video
  Object.assign(video.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-1',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
  });

  const source = document.createElement('source');
  source.src = '/video.mp4'; // File from root directory
  source.type = 'video/mp4';

  video.appendChild(source);
  heroSection.prepend(video);

  video.load();
  video.play().catch(() => {
    // Handle autoplay prevention gracefully
    const message = document.createElement('div');
    message.textContent = 'Autoplay prevented by browser. Please play the video manually.';
    Object.assign(message.style, {
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      zIndex: '10',
    });
    heroSection.appendChild(message);
  });
});
