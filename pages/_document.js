import Document, {Html, Head, Main, NextScript} from 'next/document'
import Title from '../components/title'

class BlogDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" 
                    rel="stylesheet" 
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet" />  
                <title>Stephen M. Hull</title>
                <meta name="description" content="A blog about technology, culture, with some fiction in there to really make you suffer" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default BlogDocument