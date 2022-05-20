import React,{useState, useEffect} from 'react'

function InfinateScroll() {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);


  const getData = () => {
    fetch(
      `https://pixabay.com/api/?key=27303194-6bbe946910e573f4bb4241c7f&q=all&image_type=photo&per_page=${8}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setArr(data.hits));
  };


    useEffect(() => {
      getData();
    }, [page]);


    const loadMore = () => {
        setPage(page + 1);
    }


    
      let timerId;
      let throttleFunction = function (func, delay) {
        if (timerId) {
          return;
        }

        timerId = setTimeout(function () {
          func();
          timerId = undefined;
        }, delay);
      };
      

    window.addEventListener('scroll' , () => {
      if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        // setPage(page + 1)

         throttleFunction(loadMore, 1000);
      }
    })


  return (
    <div>
      <h1>Infinate Scroll</h1>
        {
          arr.map((item) => {
            return (
              <div key={item.id} style={{ width: "500px" , margin : "auto" ,marginTop : "25px" }}>
                <img
                  src={item.largeImageURL}
                  alt={item.type}
                  style={{ width: "100%" }}
                />
              </div>
            );
          })
        }
    </div>
  );
}

export default InfinateScroll