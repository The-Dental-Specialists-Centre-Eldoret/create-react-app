import React from 'react'

export default function Gallery() {
  return (
    <div>
      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item" style={{backgroundImage: 'url("assets/images/bg_5.jpg")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container" data-scrollax-parent="true">
            <div className="row slider-text align-items-end">
              <div className="col-md-7 col-sm-12 ftco-animate mb-5">
                <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="../html">Home</a></span> <span>Gallery</span></p>
                <h1 className="mb-3" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Gallery</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="m-p-g">
        <div className="m-p-g__thumbs" data-google-image-layout data-max-height={350}>
          <img src="https://unsplash.it/600/400?image=940" data-full="https://unsplash.it/1200/800?image=940" className="m-p-g__thumbs-img" />
          <img src="https://unsplash.it/640/450?image=906" data-full="https://unsplash.it/1280/900?image=906" className="m-p-g__thumbs-img" />
          <img src="https://unsplash.it/550/420?image=885" data-full="https://unsplash.it/1100/840?image=885" className="m-p-g__thumbs-img" />
          <img src="https://unsplash.it/650/450?image=823" data-full="https://unsplash.it/1300/900?image=823" className="m-p-g__thumbs-img" />
          <img src="https://unsplash.it/600/350?image=815" data-full="https://unsplash.it/1200/700?image=815" className="m-p-g__thumbs-img" />
          <img src="https://unsplash.it/560/500?image=677" data-full="https://unsplash.it/1120/1000?image=677" className="m-p-g__thumbs-img" />
          <img src="https://unsplash.it/670/410?image=401" data-full="https://unsplash.it/1340/820?image=401" className="m-p-g__thumbs-img" />
          <img src="https://unsplash.it/620/340?image=623" data-full="https://unsplash.it/1240/680?image=623" className="m-p-g__thumbs-img" />
          <img src="https://unsplash.it/790/390?image=339" data-full="https://unsplash.it/1580/780?image=339" className="m-p-g__thumbs-img" />
        </div>
        <div className="m-p-g__fullscreen" />
      </div>
    </div>
  );
}
