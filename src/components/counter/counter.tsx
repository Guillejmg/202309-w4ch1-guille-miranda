
type Props = {
  title: string;
 };
 export function Info ({title}: Props){
   title = ' The pointing gentlemen'
  return(
   <div>
    <header className="main-header">
      <h1 className="main-title">{title}</h1>
    </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
    </div>
   );
 }
