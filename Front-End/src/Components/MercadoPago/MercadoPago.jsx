// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios'

// const FORM_ID = 'payment-form';


// export default function MercadoPago({items}) {
  
//   const cart = useSelector(state=> state.cart)
//   const [preferenceId, setPreferenceId] = useState(null);

  
//   useEffect(() => {
//     // luego de montarse el componente, le pedimos al backend el preferenceId
//     axios.post(`/comprar`, { items: items, cart: cart}).then((order) => {
//       setPreferenceId(order.preferenceId);
//     });
//   }, [items, cart]);

//   useEffect(() => {
//     if (preferenceId) {
//       // con el preferenceId en mano, inyectamos el script de mercadoPago
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src =
//         'https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js';
//       script.setAttribute('data-preference-id', preferenceId);
//       const form = document.getElementById(FORM_ID);
//       form.appendChild(script);
//     }
//   }, [preferenceId]);

//   return (
//     <form id={FORM_ID} method="GET" />
//   );
// }