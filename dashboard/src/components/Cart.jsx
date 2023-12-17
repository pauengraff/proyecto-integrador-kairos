import "./Cart.css";

export default function Cart() {
  return (
    <main className='cart'>
      <h3 className='title-cart'></h3>
      <div className='cart-desktop'>
        <article className='article'>
          <div>
            <p>Reloj Rolex Barcelona</p>
            <p>Precio: $129.000</p>
          </div>
        </article>

        <div className='buttons'>
          <button className='button-discount' type='submit'>
            AÑADIR CUPÓN DE DESCUENTO
          </button>

          <div className='ticket'>
            <p className='sub-ticket'>Sub Total: $129.000</p>
            <h3 className='total'>Total: $129.000</h3>
          </div>

          <button className='add-product' type='submit'>
            ELEGIR MÁS PRODUCTOS
          </button>

          <button className='end-sale' type='submit'>
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </main>
  );
}
