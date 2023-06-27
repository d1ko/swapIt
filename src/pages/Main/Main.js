import React from 'react';
import styles from './Main.module.css';

export const Main = () => {
  const products = [
    { image: 'https://media.direct.playstation.com/is/image/psdglobal/PS5-Console-Two-Controllers-Hero', description: 'Меняю PS5 б/у', link: '/page1' },
    { image: 'https://resizer.mail.ru/p/8d9fb024-5ba8-5ad7-a968-5071860dc82a/AQAK17UiWNCx0W3cWg26lPM3uamdEhoQgpeMYJXLVp2vSlw5HHw-hjOUbQgfROd4qqhUT4ZCVOE14NMyf17-tMPYFk8.jpg', description: 'Новый Макбук Про', link: '/page2' },
    { image: 'https://login.kg/image/cache/catalog/new/Smart%20Home/Fen/Dyson/Supersonic/1-500x500.jpg', description: 'Фен Dyson', link: '/page3' },
    { image: 'https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Pro-Pro%20Max/3-500x500.jpg', description: 'Iphone14Pro', link: '/page4' },
    { image: 'https://object.pscloud.io/cms/cms/Photo/img_0_770_38_2.jpg', description: 'Электросамокат', link: '/page5' },
    { image: 'https://c.dns-shop.ru/thumb/st4/fit/300/300/dcc6cbc447b24f12387d5ef3ccdcd6ac/09d67bd7eff148f4ead3db1166fd0680a881de6dc90c3702d9dcdc0f89cfec7d.jpg', description: 'Bluetooth Колонка JBL', link: '/page6' }
  ];

  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <table>
          <tbody>
            <tr>
              {products.map((product, index) => (
                <td key={index}>
                  <a href={product.link}>
                    <img src={product.image} alt="Product" className={styles.productImage} />
                    <p className={styles.productDescription}>{product.description}</p>
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Main;
