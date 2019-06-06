import React from 'react';
import Link from 'next/link'
import Head from 'next/head'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

export default class MyComponent extends React.Component {
    componentDidMount() {
        new WOW().init()
    }

    render() {
        return(
            <div>
                <Head>
                <title>Code Prism</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel="stylesheet" href="animate.min.css"></link>
                </Head>
                <style global jsx>{`
                    body {
                        margin: 0;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                            sans-serif;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        }
                        
                        code {
                        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
                            monospace;
                        }
                    `}
                </style>
                {this.props.children}

                <footer>Powered by CodePrism Pvt. Ltd.</footer>
            </div>
        );
    }
}