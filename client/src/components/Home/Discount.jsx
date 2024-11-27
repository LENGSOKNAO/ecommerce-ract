import React, { useState, useEffect } from "react";
import { BiSupport } from "react-icons/bi";
import { FaCar, FaMoneyBillAlt } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";

const Discount = () => {
  // Set the target date for the countdown
  const targetDate = new Date("2025-01-31T00:00:00").getTime();

  // Set up state to track the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current time
      const currentTime = new Date().getTime();
      // Calculate the time difference
      const difference = targetDate - currentTime;

      if (difference <= 0) {
        // Clear the interval once the countdown reaches zero
        clearInterval(interval);
      } else {
        // Calculate the remaining time
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update state with the new time left
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000); // Update the countdown every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <section className="discount">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="discount__pic">
                <img src="src/img/discount.jpg" alt="Discount" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="discount__text">
                <div className="discount__text__title">
                  <span>Discount</span>
                  <h2>Summer 2019</h2>
                  <h5>
                    <span>Sale</span> 50%
                  </h5>
                </div>
                <div className="discount__countdown" id="countdown-time">
                  <div className="countdown__item">
                    <span>{timeLeft.days}</span>
                    <p>Days</p>
                  </div>
                  <div className="countdown__item">
                    <span>{timeLeft.hours}</span>
                    <p>Hour</p>
                  </div>
                  <div className="countdown__item">
                    <span>{timeLeft.minutes}</span>
                    <p>Min</p>
                  </div>
                  <div className="countdown__item">
                    <span>{timeLeft.seconds}</span>
                    <p>Sec</p>
                  </div>
                </div>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="services spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="services__item">
                <i class="fa">
                  <FaCar />
                </i>
                <h6>Free Shipping</h6>
                <p>For all oder over $99</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="services__item">
                <i class="fa  ">
                  <FaMoneyBillAlt />
                </i>
                <h6>Money Back Guarantee</h6>
                <p>If good have Problems</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="services__item">
                <i class="fa  ">
                  <HiOutlineSupport />
                </i>
                <h6>Online Support 24/7</h6>
                <p>Dedicated support</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="services__item">
                <i class="fa  ">
                  <BiSupport />
                </i>
                <h6>Payment Secure</h6>
                <p>100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
