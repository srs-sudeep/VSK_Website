import React from 'react';

const ContactUs = () => {
  const [isPortrait, setIsPortrait] = React.useState(window.innerWidth < window.innerHeight);

  React.useEffect(() => {
    const onResize = () => setIsPortrait(window.innerWidth < window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <div style={isPortrait ? styles.contentPortrait : styles.contentLandscape}>
        <div style={isPortrait ? styles.mapContainer : styles.mapContainerLandscape}>
          <iframe
            title="Google Maps"
            src="https://maps.google.com/maps?q=37.7749,-122.4194&z=15&output=embed"
            width="100%"
            height={isPortrait ? 300 : 'auto'}
            style={styles.map}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div style={isPortrait ? styles.employeeDetails : styles.employeeDetailsLandscape}>
          <div style={styles.employee}>
            <img
              src="employee_photo.jpg" // Replace with actual photo URL
              alt="Employee Photo"
              style={styles.employeePhoto}
            />
            <div>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> john.doe@example.com</p>
              <p><strong>Designation:</strong> Software Engineer</p>
              <p><strong>Contact Number:</strong> +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  header: {
    fontSize: '2em',
    marginBottom: '20px',
    textAlign: 'center',
  },
  contentPortrait: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentLandscape: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  mapContainer: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '10px',
    maxHeight: '500px', // Added max height for portrait mode
  },
  mapContainerLandscape: {
    width: '48%',
    textAlign: 'center',
  },
  map: {
    border: '0',
    borderRadius: '4px',
  },
  employeeDetails: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
  },
  employeeDetailsLandscape: {
    width: '48%',
  },
  subHeader: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  employee: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  employeePhoto: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '20px',
  },
};

export default ContactUs;
