import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Order.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";


const Orders = () => {
  const [{user}, dispatch] =useContext(DataContext)
  const [orders, setOrders] =useState([]);

  useEffect(() => {
     if(user){
        db.collection("orders").doc(user.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapshot) =>{
          // console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc)=>({
              id: doc.id,
              data: doc.data()
            }))
          );
        })
     }else{
      setOrders([]);
     }
  },[])

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h1>Your Orders</h1>
          {
            orders?.length == 0 && (<div style={{padding:"20px"}}>You don't have any orders yet</div>)
          }
          {/* ordered items */}
          <div>
            {
              orders?.map((eachOrder,i) =>{
                return(
                  <div key={i}>
                    <hr />
                    <p>Order Id:{eachOrder?.id}</p>
                    {eachOrder?.data?.basket?.map((order)=>(
                      <Card flex={true} product={order} key={order.id}/>
                    ))}
                  </div>

                )
              })
            }
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
