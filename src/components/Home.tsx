const Home = () => {
  return (
    <div>
      <div className=" w-full h-20 flex flex-col justify-center items-center my-20 font-Onest">
        <p className="text-5xl font-bold text-gray-400">Hi, I'm Adrian</p>
        <p className="text-4xl font-bold text-gray-600 my-5">
          Front-end Developer
        </p>
      </div>
      <div className="h-96 carousel carousel-vertical rounded-box  flex justify-center items-center">
        <div className="carousel-item h-full">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
