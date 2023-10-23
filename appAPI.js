// const search = document.getElementById('search')

// ProVinCeAPI ();

// async function ProVinCeAPI () {
// const responseAPI = await fetch ('https://online-gateway.ghn.vn/shiip/public-api/master-data/province')
// console.log('««««« responseAPI »»»»». ', responseAPI);
// const data = await responseAPI.json();
// console.log('««««« data »»»»». ', data);
// };

const search = document.getElementById('search');

search.addEventListener('click', ProVinCeAPI);

async function ProVinCeAPI() {
  try {
    const responseAPI = await fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/province');
    if (!responseAPI.ok) {
      throw new Error(`API request failed with status: ${responseAPI.status}`);
    }
    
    const data = await responseAPI.json();
    console.log('Response Data:', data);
    
    // Now you can work with the data here as needed.
  } catch (error) {
    console.error('Error:', error);
  }
}