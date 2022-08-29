import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports'

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
