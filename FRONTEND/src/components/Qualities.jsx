import {data} from '../restApi.json'

const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {
          data[0].ourQualities.map(element=>{
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title}  />
                <p className="titl">
                  {element.title}
  
                </p>
                <div className="description">
                  {element.description}
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Qualities;
