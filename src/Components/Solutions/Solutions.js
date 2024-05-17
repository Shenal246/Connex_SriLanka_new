import './Solutions.css';
import Authitianit from '../../images/pillers/Authitianit.jpg';
import cyber from '../../images/pillers/cyber.jpg';
import endpoint from '../../images/pillers/endpoint.jpg';
import datapoint from '../../images/pillers/Datapoint.jpg';
import Security from '../../images/pillers/Security.jpg';
import networking from '../../images/pillers/networking.jpg';
import Perimie from '../../images/pillers/Perimie.jpg';
import servers from '../../images/pillers/severBackup.jpg';

function Solutions() {
  return (
    <section id='hero ' className='hero1' >
      <div className="container text-center">
      <div className='row'>
                <div className="row text">
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>Solutions</p></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                </div>
            </div>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 rowmargin">
          <div className="col">
            <div className="card crd" >
              <img src={Perimie} className="card-img-top" alt="..." />
              <div className="card-body cardSize">
                <p className="card-text txts">Perimeter and Internal Security</p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card crd" >
              <img src={cyber} className="card-img-top" alt="..." />
              <div className="card-body cardSize">
                <p className="card-text txts">Cyber Security Governance & Compliance</p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card crd" >
              <img src={Authitianit} className="card-img-top" alt="..." />
              <div className="card-body cardSize">
                <p className="card-text txts">Authentication & Identity Management</p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card crd" >
              <img src={Security} className="card-img-top" alt="..." />
              <div className="card-body cardSize">
                <p className="card-text txts">Security Management</p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card crd" >
              <img src={datapoint} className="card-img-top" alt="..." />
              <div className="card-body cardSize">
                <p className="card-text txts">Endpoint Security</p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card crd" >
              <img src={networking} className="card-img-top" alt="..." />
              <div className="card-body cardSize">
                <p className="card-text txts">Networking</p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card crd" >
              <img src={endpoint} className="card-img-top" alt="..." />
              <div className="card-body cardSize">
                <p className="card-text txts">Data Center Infrastructure and Infrastructure Monitoring</p>
              </div>
            </div>
          </div>
          <div className="col column">
            <div className="card crd" >
              <img src={servers} className="card-img-top" alt="..." />
              <div className="card-body cardSize">
                <p className="card-text txts">Server Storage & Backup Solutions</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Solutions;