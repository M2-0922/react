import React, { PureComponent } from 'react';

class ItemList extends PureComponent {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

// ------------ //
import React, { useState } from 'react';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ]);

  const handleClick = () => {
    // Add a new item to the list
    setItems([
      ...items,
      { id: items.length + 1, text: `Item ${items.length + 1}` }
    ]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <ItemList items={items} />
    </div>
  );
}

export default App;
