import { Container } from '@uimakers/tools-ui'

import {
  Button,
  Card,
  CardDescription,
  CardTitle,
} from '@tool-empire/components'

const ListTools = (props) => {
  const { data } = props

  const handleClick = (routeName) => {
    window.open(routeName, '_self')
  }

  return (
    <Container>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        {data.map((item, index) => (
          <Card
            onClick={() => handleClick(item?.routeName)}
            key={index}
            className='p-4'
          >
            <CardTitle>{item?.title}</CardTitle>
            <CardDescription className='my-3'>
              {item?.description}
            </CardDescription>

            <div className='flex justify-end'>
              <Button variant='link'>View Tool &rarr;</Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  )
}

export default ListTools
