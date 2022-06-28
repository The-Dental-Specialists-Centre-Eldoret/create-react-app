import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item" style={{backgroundImage: 'url("assets/images/pexels-shvets-production-7191994.jpg")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container" data-scrollax-parent="true">
            <div className="row slider-text align-items-end">
              <div className="col-md-7 col-sm-12 ftco-animate mb-5">
                <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
                <h1 className="mb-3" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Information</h2>
            </div>
            <div className="w-100" />
            <div className="col-md-3">
              <p><span>Address:</span> Eldoret, Nandi Road, Eldoret, Kenya</p>
            </div>
            <div className="col-md-3">
              <p><span>Phone:</span> <a href="tel:254748434345">+254 748 434 345</a></p>
            </div>
            <div className="col-md-3">
              <p><span>Email:</span> <a href="mailto:dsceldoret@gmail.com">dsceldoret@gmail.com</a></p>
            </div>
            {/*<div class="col-md-3">
          <p><span>Website</span> <a href="https://thedentalspecialistscentre.co.ke/">https://thedentalspecialistscentre.co.ke</a></p>
        </div>*/}
          </div>
          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <form name="contact-form" action="https://formspree.io/f/xgerrezn" method="post">
                <div className="form-group">
                  <label htmlFor="appointment_name" className="text-black">Full Name</label>
                  <input type="text" name="Name" id="full-name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="appointment_name" className="text-black">Email</label>
                  <input type="text" name="Email" className="form-control" placeholder="Your Email" required />
                </div>
                {/*  <div class="form-group">
              <input type="text" name="Subject" class="form-control" placeholder="Subject" required="">
            </div> */}
                <div className="form-group">
                  <label htmlFor="appointment_name" className="text-black">Message</label>
                  <textarea name="Message" id cols={30} rows={7} className="form-control" placeholder="Message Here" required defaultValue={""} />
                </div>
                <div className="form-group">
                  <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6627557211455!2d35.292303014768066!3d0.5059619996308586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101bc7a56da7b%3A0xac2ae4a33a0192a!2sThe%20Dental%20Specialists%E2%80%99%20Centre%20-%20Eldoret!5e0!3m2!1sen!2ske!4v1630308559789!5m2!1sen!2ske" title='map' width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
