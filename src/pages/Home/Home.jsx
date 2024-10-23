import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* <h1 className="home-Htitle">Home</h1> */}
      <div className="home-title-container">
      <span className="home-Htitle">
        HOME
      </span>
      </div>
      <img src="Sun.jpg" />
      <h3>นายชำนาญ เกษมสัตย์ รหัส 66073998</h3>
      <p>คณะเทคโนโลยีสารสนเทศ <br/>
       สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
      </p>
      <h3>"มีด = คำคม"</h3>
    </div>
  );
}

export default Home;
