const Footer = () => (
    <footer class="footer">
        <div class="container bottom_border">
            <div class="row">
                <div class=" col-sm-4 col-md col-sm-4  col-12 col text-left">
                    <h5 class="headin5_amrc col_white_amrc pt2">INFORMATION</h5>
                    {/* <p class="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                    <p>Audio Tours</p>
                    <p>Calendar</p>
                    <p>Apply for a scholarship</p>
                </div>

                <div class=" col-sm-4 col-md  col-6 col text-left">
                    <h5 class="headin5_amrc col_white_amrc pt2">TOURS</h5>
                    <ul class="footer_ul_amrc">
                        <li><a href="http://webenlance.com">Bike tour</a></li>
                        <li><a href="http://webenlance.com">Pedicab tour</a></li>
                        <li><a href="http://webenlance.com">E-Scooter tour</a></li>
                        <li><a href="http://webenlance.com">Bike rentals</a></li>
                        <li><a href="http://webenlance.com">Picnics</a></li>
                    </ul>
                </div>

                <div class=" col-sm-4 col-md  col-6 col text-left">
                    <h5 class="headin5_amrc col_white_amrc pt2">LEGAL</h5>
                    <ul class="footer_ul_amrc">
                        <li><a href="http://webenlance.com">Cancellation policy</a></li>
                        <li><a href="http://webenlance.com">Terms and conditions</a></li>
                    </ul>
                </div>

                <div class=" col-sm-4 col-md  col-12 col text-left">
                    <h5 class="headin5_amrc col_white_amrc pt2">CONTACT</h5>
                    <ul class="footer_ul2_amrc">
                        <li>
                            <p>
                                <i className="fas fa-map-marker-alt"></i>
                            </p>
                            <p style={{ paddingLeft: '20px', marginTop: '-33px' }}> Fancy Apple Bike Store
                                <br></br>
                                870 7th Ave, New York, NY, 10019
                            </p>
                        </li>
                        <li>
                            <p><i class="fa fa-phone fa-rotate-90 mr-1"></i>  Office - (347) 746 - 8687  </p>

                        </li>
                    </ul>

                    <ul style={{ listStyleType: 'none' }} className="d-flex social_f">
                        <li><a className="m-1" href="http://webenlance.com"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a className="m-1" href="http://webenlance.com"><i class="fab fa-twitter"></i></a></li>
                        <li><a className="m-1" href="http://webenlance.com"><i class="fab fa-instagram"></i></a></li>
                    </ul>

                </div>
            </div>
            <img src="/images/logo-silver.png" width="100" />
        </div>

        <div class="container">
            <p class="text-center pt-3">©2021 Central Park Tours Inc. Created with <i style={{ color: 'red' }} className="fas fa-heart"></i>  in NYC.</p>
        </div>

    </footer>
)

export default Footer;