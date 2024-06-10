import React from 'react';

const AboutUs = () => {
  return (
    <div id="about-us" style={styles.container}>
      <h2 style={styles.title}>About Us</h2>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <div style={styles.paragraph}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis arcu a ex
              ullamcorper, id rhoncus sapien feugiat. Integer at elit non tortor vehicula ultricies.
              Suspendisse ac dapibus dui, et vestibulum risus. Ut sagittis velit ut mauris gravida
              lacinia. Vestibulum ac odio at eros tincidunt volutpat nec id nisl.
            </p>
          </div>
          <div style={styles.paragraph}>
            <p>
              Fusce volutpat ullamcorper libero vitae pellentesque. Vivamus varius urna id mauris
              tincidunt, non placerat mauris efficitur. Phasellus vestibulum leo sit amet velit
              eleifend bibendum. Integer tempor ex non metus sollicitudin, nec vulputate odio
              volutpat. Mauris vitae risus vitae elit semper interdum.
            </p>
          </div>
          <div style={styles.paragraph}>
            <p>
              Fusce volutpat ullamcorper libero vitae pellentesque. Vivamus varius urna id mauris
              tincidunt, non placerat mauris efficitur. Phasellus vestibulum leo sit amet velit
              eleifend bibendum. Integer tempor ex non metus sollicitudin, nec vulputate odio
              volutpat. Mauris vitae risus vitae elit semper interdum.
            </p>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Delhi_India_Government.jpg/1920px-Delhi_India_Government.jpg" 
            alt="Company" 
            style={styles.image} 
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4px',
    maxWidth: '400rem',
    margin: '4rem 1rem 1rem',
    background: 'linear-gradient(to bottom, #FFF,#FFA500 )', // Gradient from orange to white
    color: '#333', // Font color
    borderRadius: '10px', // Rounded corners
    padding: '20px', // Add padding
  },
  title: {
    fontSize: '4em',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333'
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row-reverse', // Reverse the order of elements
  },
  imageContainer: {
    flex: '0 0 auto',
    marginLeft: '10rem', // Adjust margin for spacing
    marginBottom: '8rem'
  },
  image: {
    width: '100%',
    maxWidth: '40rem',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow for a floating effect
  },
  textContainer: {
    flex: '1',
    flexDirection: 'column',
    marginLeft: '10rem',
    marginRight: '20rem',
  },
  paragraph: {
    marginBottom: '10px', // Adjust the gap between paragraphs
    color: '#333'
  },
};

export default AboutUs;
