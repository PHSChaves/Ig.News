import { AppProps } from 'next/app';
import { Header } from '../components/Header';

import '../styles/global.scss';

{ /*
  O que é o arquivo _app? 
    é um componente que fica por volta de todos os outros componentes
    se eu quiser que algo repita em todas as páginas eu coloco dentro do app
    o App é renderizado todas as vezes que o cliente muda de tela.

    Já o arquivo Document é executado uma única vez
*/}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
