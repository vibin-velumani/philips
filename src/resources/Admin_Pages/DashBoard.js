import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "../../Api/axios";
const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
};

export const options = {
  region: "IN",
  displayMode: "regions",
  resolution: "provinces",
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#81d4fa",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
  enableRegionInteractivity: true,
  tooltip: {
    trigger: "focus",
    isHtml: true,
  },
};

export const options2 = {
  title: "Category",
  is3D: true,
};


export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export default function Dashboard() {
  const [loading,setloading]=useState(true);
  const [data,setdata]=useState();
  const [data3,setdata3]=useState();

  const load=async()=>{
    await axios.post("order/findordercount").then((res)=>{
// setdata([["State", "Orders"], ...res.data]);
const data = res.data.data; // assuming res.data is the array of objects
const transformedData = [
  ["State", "Orders"],
  ...data.map(({ state, population }) => [state, population])
];
const data33 = res.data.data3;
const result = [
  ["Category", "orders"],
  ...data33.map(item => [item._id || 'Other', item.count])
];
setdata(transformedData);
setdata3(result)

console.log(res.data.data3);
      setloading(false)
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
  load();
  },[])
  return (
   <>{loading?<p>Loading....</p>:
   <>

<div style={styles}>
<Chart
      chartType="PieChart"
      data={data3}
      options={options2}
      width={"100%"}
      height={"400px"}
    />
   <Chart
   chartType="GeoChart"
   width="100%"
   height="400px"
   data={data}
   options={options}
 />
</div>
   </>
   }
   </>
  );
}
