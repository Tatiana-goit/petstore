import React from 'react'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer__contener}>
          <div className={s.footer__left}>
            <h2 className={s.visuallyHidden}>Контакты</h2>
            <p className={s.logo}>
              <span className={s.logo}>Web</span>Studio{' '}
            </p>
            <address className={s.contact}>
              <ul className={s.contact__list}>
                <li className={s.contact__listItem}>
                  <p
                    className={s.contact__listCity}
                    href="https://goo.gl/maps/mL1RKWru3X3cFEzS8"
                    target="_blank"
                    rel="noopener noroferrer"
                  >
                    {' '}
                    г. Киев, пр-т Леси Украинки, 26{' '}
                  </p>
                </li>
                <li className={s.contact__listItem}>
                  <a
                    className={s.contact__listLink}
                    href="mailto:info@devstudio.com"
                  >
                    info@devstudio.com
                  </a>
                </li>
                <li className={s.contact__listItem}>
                  <a
                    className={s.contact__listIink}
                    href="tel:+380961111111"
                  >
                    +38 096 111 11 11
                  </a>
                </li>
              </ul>
            </address>
          </div>

          <div className={s.footer__center}>
            <p className={s.footer__title}>Присоединяйтесь</p>
            <ul className={s.slinks}>
              <li className={s.links__item}>
                <p className={s.links__link}>
                  <svg className={s.links__icon}>
                    <use href="../../../assets/images/sprite.svg#instagram"></use>
                  </svg>
                </p>
              </li>
              <li className={s.links__item}>
                <p className={s.links__link}>
                  <svg className={s.links__icon}>
                    <use href="./images/sprite.svg#twitter"></use>
                  </svg>
                </p>
              </li>
              <li className={s.links__item}>
                <p className={s.links__link}>
                  <svg className={s.links__icon}>
                    <use href="./images/sprite.svg#facebook"></use>
                  </svg>
                </p>
              </li>
              <li className={s.links__item}>
                <p className={s.links__link}>
                  <svg className={s.links__icon}>
                    <use href="./images/sprite.svg#linkedin"></use>
                  </svg>
                </p>
              </li>
            </ul>
          </div>

          <div className={s.footer__right}>
            <form action="#">
              <p className={s.footer__title}>Подпишитесь на рассылку</p>
              <div className={s.footer__form}>
                <input
                  type="email"
                  name="user-email"
                  className={s.footer__formEmail}
                  placeholder="E-mail"
                ></input>
                <button type="submit" className={s.button}>
                  Подписаться
                  <svg className={s.footer__formButton}>
                    <use href="./images/sprite.svg#send"></use>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  )
}
