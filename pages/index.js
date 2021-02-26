import Head from 'next/head'
import { Button } from '@material-ui/core';

const Index = () => (
  <>
    <Head>
      <title>Mi App | Inicio</title>
    </Head>
    <h1>Bienvenido!</h1>
    <Button variant="contained">Hello World</Button>
  </>
)

export default Index
