// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import About from '../components/about'
import ContactUs from '../components/contact-us'
import Faith from '../components/faith'
import Feature from '../components/feature'
import Quote from '../components/qoute'

export default function Home() {
  return <>
    {About()}

    {Feature()}

    {Faith()}

    {Quote()}

    {ContactUs()}
  </>
}