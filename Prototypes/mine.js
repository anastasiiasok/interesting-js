let chicken = {
    type: 'bird',
    breathe: function() { 
      console.log("I'm breathing");
    },
  }
  
  let egg = Object.create(chicken);
  
  console.log(egg);                      
  console.log(egg.type);              
  console.log(egg.__proto__);           
  console.log(egg.__proto__ === chicken);




  