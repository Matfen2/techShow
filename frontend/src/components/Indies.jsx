import Animal from '../assets/regneAnimal.jpg';
import Memories from '../assets/memoriesOfMuders.jpeg';
import Hotel from '../assets/theGrandBudapestHotel.jpeg';

function Indies() {
  const indies = [
    { title: 'Le Règne Animal', pict: Animal },
    { title: 'Memories Of Muders', pict: Memories },
    { title: 'The Grand Budapest Hotel', pict: Hotel }
  ];

  const listIndies = indies.map((indie, index) => {
    return (
      <div key={index} className='col-lg-4'>
        <div className='card'>
          <img src={indie.pict} className='img-fluid w-100' alt={indie.title} />
          <p className='title'>{indie.title}</p>
        </div>
      </div>
    );
  });

  return (
    <div className='row'>
      {listIndies}
    </div>
  );
}

export default Indies;
