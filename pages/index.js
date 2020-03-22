import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home = (props) => {
    return (<Layout locale={props.locale} title="#HelpDeHelpers">
            <main>
                <Header locale={props.locale}/>
                <section id="hero">
                    <Hero locale={props.locale}/>
                </section>
            </main>
        </Layout>
    )
};
export default Home;
