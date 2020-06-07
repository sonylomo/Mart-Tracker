import React from 'react';
import './App.css';

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         serial: '', 
         product: '', 
         cost: '', 
         description: '', 
         Qtyreceived: '', 
         Qtysold: '', //state is by default an object
         Inventory: []
      }
   };

   handleSubmit = (event) => {
      event.preventDefault();

      let Inventory = [...this.state.Inventory];

      Inventory.push({
         serial: this.state.serial,
         product: this.state.product,
         cost: this.state.cost,
         description: this.state.description, 
         Qtyreceived: this.state.Qtyreceived, 
         Qtysold: this.state.Qtysold
      });

      this.setState({
         Inventory,
         serial: '', 
         product: '', 
         cost: '', 
         description: '', 
         Qtyreceived: '', 
         Qtysold: '' 
      });
   };

   handleInput = (event) => {
      let input = event.target;
      let name = input.name;
      let value = input.value;

      this.setState({
         [name]: value
      })
   };

   render() {
      return (
         <div className="App">
            <Form handleSubmit={this.handleSubmit} handleInput={this.handleInput} newSerial={this.state.serial} newProduct={this.state.product} newCost={this.state.cost} newDescrition={this.state.description} newQtyRece={this.state.Qtyreceived} newQtySold={this.state.Qtysold} />
            <Table Inventory={this.state.Inventory} />
         </div>
      );
   }
}

//THE FORM
class Form extends React.Component {
   render() {
      return (
         <div className="form-style-5">
            <form onSubmit={this.props.handleSubmit}>

               <fieldset>
                  <legend><span className="number">1</span> Fill in Inventory Info</legend>
                  <input type="number" id="serial" name="serial" value={this.props.newSerial} placeholder="Serial No. *" onChange={this.props.handleInput}></input>
                  <input type="text" id="product" name="product" value={this.props.newProduct} placeholder="Product Name *" onChange={this.props.handleInput}></input>
                  <input type="number" id="cost" name="cost" value={this.props.newCost} placeholder="Unit Cost *" onChange={this.props.handleInput}></input>
                  <textarea name="description" id="description" value={this.props.newDescrition} placeholder="Product Description" onChange={this.props.handleInput}></textarea>
                  <input type="number" id="Qtyreceived" name="Qtyreceived" value={this.props.newQtyRece} placeholder="Quantity Received *" onChange={this.props.handleInput}></input>
                  <input type="number" id="Qtysold" name="Qtysold" value={this.props.newQtySold} placeholder="Quantity Sold *" onChange={this.props.handleInput}></input>
               </fieldset>
               <input type="submit" value="Add Product"></input>
            </form>
         </div>
      )
   }
}

class Table extends React.Component {
   render() {
      const Inventory = this.props.Inventory;

      return (
         <div className="form-style-5">

            <fieldset>
               <legend><span className="number">2</span> Sales</legend>

            </fieldset>

            <table>
               <thead>
                  <tr>
                     <th scope="col">Serial</th>
                     <th scope="col">Product</th>
                     <th scope="col">Description</th>
                     <th scope="col">Unit Cost</th>
                     <th scope="col">Qty Received</th>
                     <th scope="col">Qty Sold</th>
                  </tr>
               </thead>
               <tbody>
                  {Inventory.map(inventory => {
                     return (
                        <tr>
                           <td>
                              <span className="text-offset">{inventory.serial}</span>
                           </td>
                           <td>
                              <strong className="product-title">{inventory.product}</strong>
                           </td>
                           <td className="fill">
                              <p> The {inventory.product} is
                           <a className="text-secondary" data-toggle="collapse" href="#set1" role="button"
                                    aria-expanded="false" aria-controls="collapseExample">
                                    Read more...
                           </a>
                              </p>
                              <div className="collapse" id="set1">
                                 <div className="card card-body">
                                    {inventory.description}
                                 </div>
                              </div>
                           </td>
                           <td className="item-price">{inventory.cost}</td>
                           <td className="fill">{inventory.Qtyreceived}</td>
                           <td className="fill">{inventory.Qtysold}</td>
                        </tr>
                     )
                  })}

               </tbody>
            </table>
         </div>
      )
   }
}

export default App;

