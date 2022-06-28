import React from 'react'

export default function Footer() {
  return (

    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <a href="/"><img className="dsc-logo" src="assets/images/dsc_logo.png" alt="dsceldoret" width={160} height={68} /></a>
              <br />
            </div>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft ">
              <li className="ftco-animate"><a href="https://twitter.com/THEDENTALSPECI1" target="_blank" rel="noreferrer"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="https://www.facebook.com/The-Dental-Specialists-Centre-101533432059140" target="_blank" rel="noreferrer"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="https://www.instagram.com/specialiststhedental" target="_blank" rel="noreferrer"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="./about" className="py-2 d-block">About</a></li>
                <li><a href="./blog" className="py-2 d-block">Blog</a></li>
                <li><a href="./contact" className="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2"> Our Office</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker" /><span className="text">Eldoret, Nandi Road, Eldoret, Kenya</span></li>
                  <li><a href="tel:254748434345"><span className="icon icon-phone" /><span className="text">+254748434345</span></a></li>
                  <li><a href="mailto:dsceldoret@gmail.com"><span className="icon icon-envelope" /><span className="text">dsceldoret@gmail.com</span></a></li>
                  <img src="assets/images/dsceldoret.png" alt="We accept all cards and mpesa" width={359} height={32} /></ul></div> <input type="hidden" name="ajax" defaultValue={0} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            ©  | <a rel="nofollow noopener" href="https://thedentalspecialistscentre.co.ke/" target="_blank">The Dental Specialists' Centre | Eldoret</a><br />
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
    </footer>
  );
}
