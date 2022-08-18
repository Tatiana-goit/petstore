import React from 'react'
import image from '../../assets/images/flickr2.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer__fon}>
          <div className={s.footer__wrapper}>
            <div className={s.footer__topSide}>
              <div className={s.footer__leftSide}>
                <h3 className={s.footer__title}>Come visit us</h3>
                <ul>
                  <li>
                    <a
                      href="https://goo.gl/maps/8wcNNBNXEwN1oQCU7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lviv, Viacheslava Chornovola Avenue 101{' '}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:humsters-shop@gmail.com">
                      humsters-shop@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+380961111111">+38 096 111 11 11</a>
                  </li>
                </ul>
              </div>
              <div className={s.footer__centerSide}>
                <h3 className={s.footer__title}>More about us</h3>
                <p className={s.footer__text}>
                  Our pet store offers a wide selection of hamsters for every
                  taste. We will help you choose the best pet for your family or
                  replenish the range of your pet store
                </p>
              </div>
              <div className={s.footer__rightSide}>
                <h3 className={s.footer__title}>Flickr feed</h3>
                <div className={s.footer__text}>
                  <a
                    href="https://www.flickr.com/search/?text=humster"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={s.footer__image}
                      src={image}
                      alt="Humsters"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer__bottomSide}>
          <div className={s.footer__socialMedia}>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/tatiana-taranushchenko/">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div className={s.footer__info}>
            <div className={s.footer__infoCopyright}>
              Copyright © 2022 | humsters-lviv.ua | All Rights Reserved
            </div>
            <div className={s.footer__infoBy}>
              By{' '}
              <a
                href="https://www.linkedin.com/in/tatiana-taranushchenko/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tatiana
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
