import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338//api/nested-pages?populate=*')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338/';
        const dataurl = atttribute.image7.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <div className="service-details-sidebar">
                                <div className="service-category-widget"> */}
                            {data
                                ? data.map((x) => (
                                      <img
                                          src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {/* </div>
                            </div> */}
                        </div>

                        <div className="col-lg-6 mt-50">
                            {/* <div className="service-details-sidebar">
                                <div className="service-category-widget"> */}
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-laptop" aria-hidden="true"></i> PLATEFORM:
                                </h4>
                                <p>IOS, Android</p>
                            </div>
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    STACK:
                                </h4>
                                <p>AngularJs, Botostrap, HTML5 and PhoneGap</p>
                            </div>
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-clock-o" aria-hidden="true"></i> TIMELINE:
                                </h4>
                                <p>30 days to build</p>
                            </div>
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-users" aria-hidden="true"></i> TEAM-MEMBER:
                                </h4>
                                <p>Raman Bhasker, Akash Saxena</p>
                            </div>
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-table" aria-hidden="true"></i> DESCRIPTION:
                                </h4>
                                <p>
                                    An app and movement dedicated to elevating your lifestyle and
                                    keeping you in touch with all that matters within the Electronic
                                    Dance Music Culture.
                                </p>
                            </div>
                        </div>
                        {/* </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsIncity;
