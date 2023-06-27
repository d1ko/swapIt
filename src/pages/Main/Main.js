import React from 'react';
import styles from './Main.module.css';

export const Main = () => {
  

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
