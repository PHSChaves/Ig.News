import Document, { Html, Head, Main, NextScript} from 'next/Document'

{/*
    A maioria das tags HTMl são usadas de dentro do Next, podemos achar isso na documentação.
    A tag Main é o que ficara envolta de todos os outros componentes que forem criados
    O NextScript é usado para executar os arquivos necessários para a aplicação funcionar
*/}

export default class MyDocument extends Document {
    render(){
        return(
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    }
}