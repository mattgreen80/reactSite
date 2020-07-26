import Head from 'next/head'
// UI framework
import { Avatar, Box, Button, Clock, Grommet } from 'grommet';
import Movies from '../components/movies';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

// function component just used for styling
const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='light-2'
      pad={{ vertical: 'small', horizontal: 'medium' }}
      elevation='medium'
      {...props}
    />
  );

const src = '/matt.jpg'

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://www.omdbapi.com/?i=tt0118715&apikey=c38f0bf')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}


export default function Home({ posts }) {
  console.log({posts});

  
  return (
    <Grommet theme={theme} themeMode="dark">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <AppBar>
      <Avatar size="xlarge" src={src} />
      <Button primary label='Login' onClick= {() => {alert("it works!")}}></Button>
      <Button label='About'></Button>
      <Button label='About'></Button>
      <Button label='About'></Button>
    </AppBar>
    <Clock type="digital" />
    <Movies posts={posts}></Movies>


    </Grommet>
  )
}
