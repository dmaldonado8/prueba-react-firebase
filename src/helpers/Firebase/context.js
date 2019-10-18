/* 
* Utilizar React Context API
* Esto para proveer una instancia de alto nivel de firebase a los componentes
*/

import React from 'react';
const FirebaseContext = React.createContext(null);
/* 
* create context crea dos componentes:
* Componente proveedor de una instancia de firebase
* Componente consumidor de la instancia
* El contexto será utilizado para proveer a todos los componentes de una instancia de firebase
*/
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}></Component>}
    </FirebaseContext.Consumer>
)
export default FirebaseContext;