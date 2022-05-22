import axios from 'axios';
import React, { Component } from 'react'

export default class Grocery extends Component {
    constructor(props){
    super(props)
    this.state = {
        list : [],
        query : "",
        page : 1
    };
    this.hadlechange = this.handlechange.bind(this)
    }


    handlechange (e) {
       this.setState({
            query : e.target.value
       })
    }



    handleAdd(){
      const { query } = this.state;
      const payLoad = {
        title : query,
        status : false,
      }

      axios
        .post("http://localhost:3004/list", payLoad)
        .then((res) => {
          this.handelGetData();
        })
        .catch((err) => console.log(err));
    }



    handelGetData (){
      const {page} = this.state;
    return  axios.get(`http://localhost:3004/list`,{
      params : {
        _limit : 3,
        _page : page
      }
    } )
    .then((res) =>
     this.setState(
     {
       list: res.data,
     },
     () => console.log(this.state)
   )
 );
 }

 handleEdit(id) {
  const { query } = this.state;
    const payLoad = {
    title: query,
    status: false,
  };

  axios
    .put(`http://localhost:3004/list/${id}`, payLoad)
    .then((res) => {
      this.handelGetData();
    })
    .catch((err) => console.log(err));  
 }

 handleDelete(id){
  axios.delete(`http://localhost:3004/list/${id}`)
  .then((res) => this.handelGetData() )
  .catch((err) => console.log(err))
 }


componentDidMount(){
   this.handelGetData()
}

componentDidUpdate(prevProps, prevState){
 if(prevState.page != this.state.page){
   this.handelGetData()
 }
}



  render() {
      const{query, list} = this.state;
    return (
      <div>
        <input value={query} onChange={this.hadlechange} />
        <button onClick={this.handleAdd.bind(this)}>Add</button>

        <div>
          {list?.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                padding: 10,
                width: 400,
                margin: "auto",
                marginTop: 10,
              }}
            >
              <div style={{ padding: 5, margin: 10, fontSize: 18 }}>
                {item.title}
              </div>
              <button
                style={{ padding: 5, margin: 10, fontSize: 18 }}
                onClick={this.handleEdit.bind(this, item.id)}
              >
                Edit
              </button>
              <button
                style={{ padding: 5, margin: 10, fontSize: 18 }}
                onClick={this.handleDelete.bind(this, item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => this.setState({ page: this.state.page - 1 })}
          disabled={this.state.page === 1}
        >
          prev
        </button>
        <button onClick={() => this.setState({ page: this.state.page + 1 })}>
          next
        </button>
      </div>
    );
  }
}
