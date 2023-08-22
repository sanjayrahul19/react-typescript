export {};

// import React, { FC, useState,ChangeEvent } from "react";

// let person: string[] = ["sanjay"];

// interface Hobbies {
//   sanjay: string;
//   rahul?: string;
// }

// let hobbies: Hobbies[] = [
//   {
//     sanjay: "playing",
//   },
// ];

// type Name = string | number;

// let name: Name = 12;

// interface Props {
//   name: string;
//   email: string;
//   setUser:React.Dispatch<React.SetStateAction<string>>
// }

// interface Detail {
//   id: number;
//   name: string;
// }

// const Practice: FC<Props> = ({ name, email,setUser }) => {
//   const [names, setNames] = useState <string | number>('');
//   const [details, setDetails] = useState<Detail[]>([{id:1,name:"rahul"}]);
//   const [detail, setDetail] = useState<string[]>(["sanjay"]);
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{email}</h1>
//       <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>) => setNames(e.target.value)} />
//       {names}
//     </div>
//   );
// };

// const Component: FC = () => {
//   const [user,setUser]=useState<string>("")
//   let name = "sanjay";
//   let email = "sanjay@gmail.com";
//   return (
//     <div>
//       <Practice name={name} email={email} setUser={setUser}/>
//     </div>
//   );
// };

// export default Component;
