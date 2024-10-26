import React,{useState,useEffect} from 'react'


const WebsiteHeader = ({headermsg,headercolor}) => {

  const [isVisible, setIsVisible] = useState(true);
  const [msgindex, setmsgindex] = useState(0);

  const setbgcolor=()=>{
      if(headercolor==="red")
        {
          return "#d01008" ;
        }
      return headercolor;
  }

  useEffect(() => {
    // Update to filter non-empty messages for the display
    const validMessages = headermsg.filter((msg) => msg && msg.length > 0);

    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        if (validMessages.length > 0) {
          setmsgindex((prevIndex) => (prevIndex + 1) % validMessages.length);
        }
        setIsVisible(true);
      }, 700);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [headermsg]);
  return (
    <div className="Header  w-full h-10  flex justify-center items-center" style={{ backgroundColor: `${setbgcolor()}` }}>
              <div
                className={`text-${(headercolor==="pink" || headercolor==="yellow" || headercolor==="white") ? "black":"white"} font-semibold transition-opacity duration-500 ease-in-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {headermsg.filter((msg) => msg && msg.length > 0)[msgindex]}
              </div>
            </div>
  )
}

export default WebsiteHeader
