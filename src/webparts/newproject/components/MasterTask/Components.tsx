import * as React from 'react';
import { Web } from "sp-pnp-js";

const Components=()=>{
    const MasterTask = async () => {
        const web1 = new Web("https://hhhhteams.sharepoint.com/sites/HHHH/SP");
        await web1.lists
          .getById("EC34B38F-0669-480A-910C-F84E92E58ADF")
          .items.select("Parent/Id", "Title").expand("Parent")
          .get()
          .then((msg: any) => {
            console.log(msg);
          })
          .catch((err: any) => {
            console.log(err);
          });
      };
      React.useEffect(() => {
    MasterTask();
      }, []);
    return(
        <div>HEllo</div>
    )
}
export default Components;