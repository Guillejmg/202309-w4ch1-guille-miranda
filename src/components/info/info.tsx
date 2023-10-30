type props = {
  title: string;
 };
 export function Header ({title}: props){
   return(
   <header>
     <h1>{title} </h1>
   </header>
   );
 }
