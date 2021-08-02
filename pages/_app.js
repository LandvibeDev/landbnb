import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";

function App({Component, pageProps}) {
    return <>
        <GlobalStyle />
        <Header/>
        <Component {...pageProps} />
    </>
}

export default App
