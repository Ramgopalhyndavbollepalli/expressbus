import { useEffect } from "react";
import { useDispatch } from "react-redux";






import { default as Services } from "../Components/Landing/Services";
import { default as Slider } from "../Components/Landing/Slider";
import { removeall } from "../Redux/ticket/ticket.action";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeall());
  }, []);
  return (
    <>
      <Slider />
      
     
      <Services />
        
    
    
      
    </>
  );
}
export default Home;
