
const NotFound = () => {
  return (<>
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
    <video autoPlay loop muted>
      <source src="https://videos.pexels.com/video-files/1779202/1779202-hd_1280_720_25fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </>
  );
};

export default NotFound;
