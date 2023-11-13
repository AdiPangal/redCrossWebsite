import "./index.css";


const Home = () => {
  return (
    <>
      
      <h1 className="mainHeader">LASA Red Cross Club</h1>
      <p>
        Hello, welcome to the Red Cross Club at LASA! In this website, you can
        learn what we are doing and future Red Cross related events. If you have
        any questions please contact lasaredcross1@gmail.com. You can join our club if you fill out the form below. From there, we will give you all the information you need.
      </p>
      <p className="form">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeV7HuoAO_79xbhF_Bld7gESoe4gFqflZZmUs0J590t8a6fOA/viewform?embedded=true" width = "640" height="450" >Loading…</iframe>
      </p>
    </>
  );
};

export default Home;