import {Menu,Container,Button} from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () =>{
    const router = useRouter();
    return(
        <Menu inverted borderless style={{padding:".3rem",marginBottom:"20px"}} attached>
            <Container>
                <Menu.Item name="home">
                    <Link href="/">
                        <img src="https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png"/>
                    </Link>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button size="mini" primary onClick={()=>router.push("/task/CreateTask")}>
                            New Task
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
};