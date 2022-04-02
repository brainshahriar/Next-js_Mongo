import {Button,Card,Container,Grid} from "semantic-ui-react"
import Link from 'next/link'
import {useRouter} from "next/router"

export default function Home({tasks = []}) {
  if(tasks.length===0){
    return (
        <Grid centered verticalAlign="middle" columns="1" style={{height:"80vh"}}>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <h1>There are no task present</h1>
              <div>
                <Button primary onClick={()=> router.push("/tasks/CreateTask")}>

                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }

}
