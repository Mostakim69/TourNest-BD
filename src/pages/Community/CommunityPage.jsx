import { FacebookShareButton } from 'react-share';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'; // Import SweetAlert2

const CommunityPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = true; // 🔁 Replace with actual auth check

  const cards = [
    {
      title: "Sajek Valley Trails",
      author: "Mostakim Hosen",
      desc: "Explore trails and nature in Sajek Valley.",
      image: "https://i.postimg.cc/x8rt9Xgp/ed92ca5efd9603e7d48a3589afb3f44c.jpg",
      url: "https://your-site.com/stories/sajek-trails"
    },
    {
      title: "Cox's Bazar Adventure",
      author: "Nayem",
      desc: "Hiking through the green hills of Sajek Valley.",
      image: "https://i.postimg.cc/nrsn7Ptw/5531d13a4f5a40efb03ace747e9556b8.jpg",
      url: "https://your-site.com/stories/sajek-hiking"
    },
    {
      title: "Sajek Valley Sightseeing",
      author: "Atikur Rahman",
      desc: "Enjoy the panoramic views of Sajek Valley.",
      image: "https://i.postimg.cc/rpkLVsdY/d97a66dfec26dc80779f3fe69588a61f.jpg",
      url: "https://your-site.com/stories/sajek-sightseeing"
    },
    {
      title: "Cox's Bazar Adventure",
      author: "Md Korim",
      desc: "Adventure time at Cox's Bazar.",
      image: "https://i.postimg.cc/vT6dDxWJ/f67b870ee960026e2c031ce7c44cd906.jpg",
      url: "https://your-site.com/stories/coxs-bazar"
    },
    {
      title: "Sundarbans Tour",
      author: "Rahim Khan",
      desc: "Discover the wildlife of Sundarbans.",
      image: "https://i.postimg.cc/0NBF6Nrs/360-F-360905134-TVGIy0-ZKOQVmx-OR9q-E3du-Jlv-TBBEWv8p.jpg",
      url: "https://your-site.com/stories/sundarbans"
    },
    {
      title: "Rangamati Lake",
      author: "Sara Ahmed",
      desc: "Relax by the scenic Rangamati Lake.",
      image: "https://i.postimg.cc/GhZBkBsd/979d087a49f05e58b2fecaf9f4796eb1.jpg",
      url: "https://your-site.com/stories/rangamati"
    },
  ];

  const handleShareClick = (e, url) => {
    if (!isLoggedIn) {
      e.preventDefault(); // Stop the default share action
      // Show SweetAlert2 alert
      Swal.fire({
        title: 'Login Required',
        text: 'Please log in to share this story on Facebook.',
        icon: 'warning',
        confirmButtonText: 'Go to Login',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login'); // Redirect to login page
        }
      });
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 className='text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse'>Community Stories</h1>
      <p className='text-sm mb-8'>Explore our community stories and share your own adventures with us!</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              width: '520px'
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{ width: '250px', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px', textAlign: 'left', flex: 1 }}>
              <h3 style={{ margin: '16px', fontSize: '16px', color: '#333' }}>{card.title}</h3>
              <p style={{ margin: '5px 0', fontSize: '12px', color: '#888' }}>by {card.author}</p>
              <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>{card.desc}</p>

              <FacebookShareButton
                url={card.url}
                quote={card.title}
                hashtag="#travelBangladesh"
                onClick={(e) => handleShareClick(e, card.url)}
                style={{
                  background: '#00cc66',
                  color: '#fff',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
              >
                Share on Facebook
              </FacebookShareButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;