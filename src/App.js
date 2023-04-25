import React, { useState } from 'react';

function Card(props) {
  console.log(props,"props");
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddClick = () => {
    console.log(name,"name")
    if (name && age && phone) {
      props.onAdd({ name, age, phone });
      setName('');
      setAge('');
      setPhone('');
    }
  };

  return (
   
   <div className="main-block" >
  
      <h1>ADD CARD</h1>
        <hr />
        <label id="icon">
          <i className="fas fa-envelope"></i>
        </label>
        <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} required />
        <label id="icon" >
          <i className="fas fa-user"></i>
        </label>
        <input type="text" name="age" pattern="[A-Za-z0-9]+" id="age" placeholder="age" value={age} onChange={(event) => setAge(event.target.value)} required />

        <label id="icon">
          <i className="fas fa-lock"></i>
        </label>
        <input type="text" name="Phone No" id="Phone No" placeholder="Phone No" value={phone} onChange={(event) => setPhone(event.target.value)} required />
    

        <div className="btn-block">
          <button  onClick={handleAddClick} type="submit">Add</button>
        </div>
      
    </div>
  );
}

function App() {
  const [cards, setCards] = useState([]);

  const handleAddCard = (cardData) => {
    setCards([...cards, cardData]);
  };

  const handleDeleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <Card onAdd={handleAddCard} />

      {cards.map((card, index) => (
       
       <button className="dis-button" style = {{background : "rgb(235 235 235)",color : "white"}} aria-label="Close alert" type="button">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{margin: "10px"}}></div>
          <div style = {{color : "white", margin: "10px"}} key={index} className="card">
            <table>
              <tr style={{color: "blue"}}>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
              </tr>
              <tr style={{color: "black"}}>
                <td>{card.name}</td>
                <td>{card.age}</td>
                <td>{card.phone}</td>
              </tr>
            </table>
          </div>
          <div  onClick={() => handleDeleteCard(index)} style={{ alignSelf: 'flex-start', marginRight: "10px" }}>
            <span aria-hidden="true">&times;</span>
          </div>
        </div>
      </button>
 
      ))}
    </div>
  );
}

export default App;