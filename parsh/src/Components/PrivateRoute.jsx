import { Image, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Login from "../Pages/Login";

function PrivateRoute({ children }) {
    const toast = useToast()
    const { isAuth, isLoading, isError } = useSelector((store) => {
        return store.authReducer
    })
    console.log(isAuth)
    return (
        <>
         {isLoading ? <Image m="auto" src="https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif" /> : ""}
        {isAuth ? children : <Login />}
            {isError ?
                toast({
                    title: `Please Enter Correct Details`,
                    status: "error",
                    isClosable: true,
                  }) : ""
            }
           
        </>
    )
}
export default PrivateRoute;