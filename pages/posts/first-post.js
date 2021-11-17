import Link from "next/link";
import Layout from '../../components/layout/layout';
import Head from 'next/head';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>My personal blog - How to set up a project with Next.js (React), Storybook and Figma</title>
            </Head>
            <h1>How to set up a project with Next.js (React), Storybook and Figma</h1>
            <p>Lorem ipsum</p>
        </Layout>
    )
}