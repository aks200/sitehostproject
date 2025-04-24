

const apiKey = 'h523hDtETbkJ3nSJL323hjYLXbCyDaRZ';
const apiUrl = 'https://api.recruitment.shq.nz';

async function getItems() {
  try {
    const response_id = await fetch('https://api.recruitment.shq.nz/domains/{client_id}'); // replace with your API endpoint
    if (!response_id.ok) {
      throw new Error(`HTTP error! Status: ${response_id.status}`);
    }

    const data = await response_id.json();
    console.log('client_id:', data); // data should be an array of items
    return data;
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
  try {
    const response_z_id = await fetch('https://api.recruitment.shq.nz/zones/{zone_id}'); // replace with your API endpoint
    if (!response_z_id.ok) {
      throw new Error(`HTTP error! Status: ${response_z_id.status}`);
    }

    const data1 = await response_z_id.json();
    console.log('zone_id:', data1); // data should be an array of items
    return data;
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

