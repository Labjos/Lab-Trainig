

function ImageCard({ picture }) {

  /*const birthday = new Date(birth).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short', 
    day: '2-digit', 
    year: 'numeric'
  }); */

  return (
    <img src={ picture} className="image-card" alt="card picture" />
  )
}

export default ImageCard